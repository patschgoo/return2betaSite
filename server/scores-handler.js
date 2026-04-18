/**
 * Game High Scores Handler for the Return2Beta Chat Server
 *
 * Add this to your existing Node.js WebSocket chat server.
 * Scores are persisted to a JSON file and broadcast in real-time.
 *
 * INTEGRATION: In your chat server's ws.on('message') handler,
 * add a call to scoresHandler.handleMessage(ws, data) for
 * message types 'get_scores' and 'submit_score'.
 *
 * See INTEGRATION EXAMPLE at the bottom of this file.
 */

const fs = require('fs');
const path = require('path');

const SCORES_FILE = path.join(__dirname, 'scores.json');
const VALID_GAMES = ['flappy', 'tetris', 'hatch', 'mine', 'bcrush', 'mdungeon', 'mizardry_fast', 'mizardry_depth'];
const MAX_SCORE = 999999; // sanity cap to prevent abuse

// ── Chat rate limiting ──────────────────────────────────

const RATE_WINDOW = 10000;  // 10-second window
const RATE_MAX = 5;         // max 5 messages per window
const MUTE_DURATION = 30000; // 30s mute if exceeded

const rateLimits = new WeakMap(); // ws → { timestamps: [], mutedUntil: 0 }

function getRateState(ws) {
  if (!rateLimits.has(ws)) rateLimits.set(ws, { timestamps: [], mutedUntil: 0 });
  return rateLimits.get(ws);
}

/**
 * Check if a chat/set_username message should be allowed.
 * Returns true if message is OK, false if rate-limited (caller should drop it).
 */
function allowMessage(ws) {
  const state = getRateState(ws);
  const now = Date.now();

  // Currently muted?
  if (state.mutedUntil > now) {
    ws.send(JSON.stringify({ type: 'error', message: 'Slow down! Wait a few seconds before sending again.' }));
    return false;
  }

  // Prune old timestamps outside the window
  state.timestamps = state.timestamps.filter(t => now - t < RATE_WINDOW);

  if (state.timestamps.length >= RATE_MAX) {
    state.mutedUntil = now + MUTE_DURATION;
    ws.send(JSON.stringify({ type: 'error', message: 'You are sending messages too fast. Muted for 30 seconds.' }));
    console.log('[ratelimit] Client muted for spam');
    return false;
  }

  state.timestamps.push(now);
  return true;
}

// ── Load / Save ─────────────────────────────────────────

function loadScores() {
  try {
    if (fs.existsSync(SCORES_FILE)) {
      const raw = fs.readFileSync(SCORES_FILE, 'utf8');
      const data = JSON.parse(raw);
      // Validate each entry
      const clean = {};
      for (const g of VALID_GAMES) {
        clean[g] = (typeof data[g] === 'number' && data[g] > 0) ? Math.min(data[g], MAX_SCORE) : 0;
      }
      return clean;
    }
  } catch (e) {
    console.error('[scores] Error loading scores:', e.message);
  }
  // Default: all zeros
  const scores = {};
  for (const g of VALID_GAMES) scores[g] = 0;
  return scores;
}

function saveScores(scores) {
  try {
    fs.writeFileSync(SCORES_FILE, JSON.stringify(scores, null, 2), 'utf8');
  } catch (e) {
    console.error('[scores] Error saving scores:', e.message);
  }
}

// ── In-memory state ─────────────────────────────────────

let scores = loadScores();
const presenceClients = new Set(); // WS clients registered for visitor count

// ── Presence helpers ────────────────────────────────────

function broadcastVisitorCount() {
  const count = presenceClients.size;
  const msg = JSON.stringify({ type: 'visitor_count', count: count });
  for (const c of presenceClients) {
    if (c.readyState === 1) c.send(msg);
  }
}

function registerPresence(ws) {
  if (presenceClients.has(ws)) return;
  presenceClients.add(ws);
  ws.on('close', function () {
    presenceClients.delete(ws);
    broadcastVisitorCount();
  });
  broadcastVisitorCount();
}

// ── Handler ─────────────────────────────────────────────

/**
 * Handle a score-related message from a WebSocket client.
 *
 * @param {WebSocket} ws - The client connection
 * @param {object} data - Parsed JSON message (must have .type)
 * @param {Set<WebSocket>|Array<WebSocket>} allClients - All connected clients (for broadcasting)
 * @returns {boolean} true if the message was handled, false otherwise
 */
function handleMessage(ws, data, allClients) {
  if (data.type === 'presence') {
    registerPresence(ws);
    return true;
  }

  // Rate-limit chat and username changes
  if (data.type === 'chat' || data.type === 'set_username') {
    if (!allowMessage(ws)) return true; // drop silently (error already sent)
    return false; // allow the main server to process it
  }

  if (data.type === 'get_scores') {
    ws.send(JSON.stringify({ type: 'scores', scores: scores }));
    return true;
  }

  if (data.type === 'submit_score') {
    const game = data.game;
    const score = data.score;

    // Validate game name
    if (!VALID_GAMES.includes(game)) return true;

    // Validate score is a positive integer within cap
    if (typeof score !== 'number' || score <= 0 || !Number.isInteger(score) || score > MAX_SCORE) return true;

    // Only update if it's actually a new record
    if (score > (scores[game] || 0)) {
      scores[game] = score;
      saveScores(scores);
      console.log(`[scores] New record: ${game} = ${score}`);

      // Broadcast to ALL connected clients
      const msg = JSON.stringify({ type: 'score_updated', game: game, score: score });
      for (const client of allClients) {
        if (client.readyState === 1) { // WebSocket.OPEN
          client.send(msg);
        }
      }
    }
    return true;
  }

  return false; // not a score message
}

module.exports = { handleMessage, loadScores };


/* ═══════════════════════════════════════════════════════════
 *  INTEGRATION EXAMPLE
 *  
 *  Add this to your existing chat server code:
 * ═══════════════════════════════════════════════════════════
 *
 *  const scoresHandler = require('./scores-handler');
 *
 *  // Inside your existing ws.on('message') handler:
 *
 *  wss.on('connection', (ws) => {
 *    ws.on('message', (raw) => {
 *      let data;
 *      try { data = JSON.parse(raw); } catch (e) { return; }
 *
 *      // ── High scores ──
 *      if (scoresHandler.handleMessage(ws, data, wss.clients)) return;
 *
 *      // ── Your existing chat handling below ──
 *      if (data.type === 'set_username') { ... }
 *      if (data.type === 'chat') { ... }
 *    });
 *  });
 *
 * ═══════════════════════════════════════════════════════════ */
