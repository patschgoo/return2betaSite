require('dotenv').config();
const fs = require('fs');
const path = require('path');
const express = require('express');
const http = require('http');
const net = require('net');
const { WebSocketServer } = require('ws');
const { Client, GatewayIntentBits, Events } = require('discord.js');
const scoresHandler = require('./scores-handler');

// ── Config ──────────────────────────────────────────────
const PORT = process.env.PORT || 8080;
const DISCORD_TOKEN       = process.env.DISCORD_TOKEN;
const DISCORD_CHANNEL_ID  = process.env.DISCORD_CHANNEL_ID;    // #lobby
const DISCORD_MC_CHANNEL_ID = process.env.DISCORD_MC_CHANNEL_ID; // #mc_lobby
const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS || 'https://return2beta.com').split(',');

if (!DISCORD_TOKEN || !DISCORD_CHANNEL_ID) {
  console.error('Missing DISCORD_TOKEN or DISCORD_CHANNEL_ID in environment');
  process.exit(1);
}
if (!DISCORD_MC_CHANNEL_ID) {
  console.warn('DISCORD_MC_CHANNEL_ID not set — #mc_lobby will not bridge to Discord');
}

// ── Rate limiting ───────────────────────────────────────
const RATE_LIMIT_WINDOW = 10_000;
const RATE_LIMIT_MAX = 5;
const rateLimitMap = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  let entry = rateLimitMap.get(ip);
  if (!entry || now - entry.windowStart > RATE_LIMIT_WINDOW) {
    entry = { windowStart: now, count: 0 };
    rateLimitMap.set(ip, entry);
  }
  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of rateLimitMap) {
    if (now - entry.windowStart > RATE_LIMIT_WINDOW * 2) rateLimitMap.delete(ip);
  }
}, 30_000);

// ── Username validation ─────────────────────────────────
const USERNAME_RE = /^[a-zA-Z0-9_\- ]{1,24}$/;

function sanitize(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/[<>&"'`]/g, '').trim().slice(0, 500);
}

// ── Express + HTTP server ───────────────────────────────
const app = express();
app.get('/health', (_req, res) => res.json({ ok: true }));

// ── MC server status ─────────────────────────────
// TCP probe to the GravelHost backend; cached 30s to avoid hammering.
const MC_HOST = '5.9.123.120', MC_PORT = 50179, MC_STATUS_TTL = 30_000;
let mcCache = { online: false, at: 0 };

function probeMcServer() {
  return new Promise((resolve) => {
    const sock = net.createConnection({ host: MC_HOST, port: MC_PORT, timeout: 5000 });
    sock.once('connect', () => { sock.destroy(); resolve(true); });
    sock.once('error',   () => resolve(false));
    sock.once('timeout', () => { sock.destroy(); resolve(false); });
  });
}
async function getMcStatus() {
  if (Date.now() - mcCache.at < MC_STATUS_TTL) return mcCache.online;
  mcCache.online = await probeMcServer();
  mcCache.at = Date.now();
  return mcCache.online;
}

app.get('/mc-status', async (req, res) => {
  const origin = req.headers.origin || '';
  if (ALLOWED_ORIGINS.some(o => origin.startsWith(o))) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.json({ online: await getMcStatus() });
});

// Warm the cache at startup
probeMcServer().then(ok => { mcCache.online = ok; mcCache.at = Date.now(); });

// ── mc_lobby persistent history log ─────────────────
const MC_LOG_FILE = path.join(__dirname, 'mc-lobby-history.jsonl');

function appendMcLog(msg) {
  fs.appendFile(MC_LOG_FILE, JSON.stringify(msg) + '\n', () => {});
}

const server = http.createServer(app);
const wss = new WebSocketServer({ server });
const clients = new Set();
const MESSAGE_HISTORY_SIZE = 10;

// Separate history per channel
const channelHistory = {
  lobby:    [],
  mc_lobby: [],
};

function pushHistory(channel, msg) {
  const hist = channelHistory[channel] || channelHistory.lobby;
  hist.push(msg);
  if (hist.length > MESSAGE_HISTORY_SIZE) hist.shift();
  if (channel === 'mc_lobby') appendMcLog(msg);
}

// Broadcast only to clients on the given channel
function broadcastToChannel(channel, data) {
  const msg = JSON.stringify(data);
  for (const ws of clients) {
    if (ws.activeChannel === channel && ws.readyState === 1) ws.send(msg);
  }
}

wss.on('connection', (ws, req) => {
  const origin = req.headers.origin || '';
  if (!ALLOWED_ORIGINS.some(o => origin.startsWith(o)) && origin !== '') {
    ws.close(4003, 'Origin not allowed');
    return;
  }

  const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket.remoteAddress;
  let username = null;
  ws.activeChannel = 'lobby'; // default channel

  clients.add(ws);

  ws.on('message', (raw) => {
    let data;
    try { data = JSON.parse(raw); } catch { return; }

    if (scoresHandler.handleMessage(ws, data, clients)) return;

    if (data.type === 'set_username') {
      const name = sanitize(data.username);
      if (!USERNAME_RE.test(name)) {
        ws.send(JSON.stringify({ type: 'error', message: 'Invalid username. Use 1-24 chars: letters, numbers, spaces, _ -' }));
        return;
      }
      username = name;

      // Register client on the requested channel (lobby or mc_lobby)
      const requestedChannel = data.channel === 'mc_lobby' ? 'mc_lobby' : 'lobby';
      ws.activeChannel = requestedChannel;

      ws.send(JSON.stringify({ type: 'username_set', username }));

      // For mc_lobby serve last 20 from the persistent log (survives server restarts)
      if (requestedChannel === 'mc_lobby' && fs.existsSync(MC_LOG_FILE)) {
        try {
          const lines = fs.readFileSync(MC_LOG_FILE, 'utf8').trim().split('\n').filter(Boolean);
          const persisted = lines.slice(-20).map(l => { try { return JSON.parse(l); } catch { return null; } }).filter(Boolean);
          ws.send(JSON.stringify({ type: 'history', messages: persisted }));
        } catch { ws.send(JSON.stringify({ type: 'history', messages: channelHistory[requestedChannel] })); }
      } else {
        ws.send(JSON.stringify({ type: 'history', messages: channelHistory[requestedChannel] }));
      }
      return;
    }

    if (data.type === 'chat') {
      if (!username) {
        ws.send(JSON.stringify({ type: 'error', message: 'Set a username first.' }));
        return;
      }
      if (isRateLimited(ip)) {
        ws.send(JSON.stringify({ type: 'error', message: 'Slow down! Too many messages.' }));
        return;
      }

      const text = sanitize(data.text);
      if (!text) return;

      const channel = ws.activeChannel || 'lobby';
      const msg = {
        type: 'chat',
        source: 'web',
        username,
        text,
        timestamp: Date.now(),
      };

      pushHistory(channel, msg);
      broadcastToChannel(channel, msg);

      // Relay to the appropriate Discord channel
      const discordChannelId = channel === 'mc_lobby' ? DISCORD_MC_CHANNEL_ID : DISCORD_CHANNEL_ID;
      if (discordChannelId) {
        const discordChannel = discordClient.channels.cache.get(discordChannelId);
        if (discordChannel) {
          discordChannel.send(`**[Web] ${username}:** ${text}`).catch(console.error);
        }
      }
    }
  });

  ws.on('close', () => clients.delete(ws));
});

// ── Discord bot ─────────────────────────────────────────
const discordClient = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// ── WebSocket server ────────────────────────────────────

discordClient.on(Events.MessageCreate, (message) => {
  if (message.author.bot && message.content.startsWith('**[Web]')) return;

  let targetChannel = null;

  if (message.channel.id === DISCORD_CHANNEL_ID) {
    if (message.author.id === discordClient.user.id) return;
    targetChannel = 'lobby';
  } else if (DISCORD_MC_CHANNEL_ID && message.channel.id === DISCORD_MC_CHANNEL_ID) {
    // Minecraft server messages are also bot messages (from DiscordChatBridge webhook),
    // so don't skip bots here — but skip our own web-relay messages.
    if (message.author.id === discordClient.user.id) return;
    targetChannel = 'mc_lobby';
  }

  if (!targetChannel) return;

  // Distinguish Minecraft-originated messages (webhook / bot) from real Discord users
  const isMcBridge = message.author.bot && targetChannel === 'mc_lobby';
  const dmsg = {
    type: 'chat',
    source: isMcBridge ? 'minecraft' : 'discord',
    username: message.author.displayName || message.author.username,
    text: message.content.slice(0, 500),
    timestamp: message.createdTimestamp,
  };

  pushHistory(targetChannel, dmsg);
  broadcastToChannel(targetChannel, dmsg);
});

// ── Start ───────────────────────────────────────────────
discordClient.login(DISCORD_TOKEN).then(() => {
  server.listen(PORT, () => {
    console.log(`Chat bridge running on port ${PORT}`);
  });
}).catch((err) => {
  console.error('Failed to login to Discord:', err.message);
  process.exit(1);
});
