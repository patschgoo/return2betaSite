# DiscordChatBridge

## What It Does
DiscordChatBridge links a Discord channel to the in-game chat. Messages sent in Discord appear in-game, and messages sent in-game appear in Discord. It also forwards join/quit notifications and provides a player list command. Bot and webhook messages from other services (like the web chat) are also bridged into the game.

## How It Affects You
- Messages from Discord players appear in-game with a blue `[DC]` prefix.
- Everything you type in-game chat is forwarded to the `#mc_lobby` channel on Discord.
- Your in-game rank (from PermissionsEx) is shown next to your name in Discord — e.g. `[Member] **PlayerName**: hello`.
- When you join or leave the server, a notification is posted in Discord with the current player count. These notifications are automatically deleted after 30 seconds to keep the channel clean.
- The bot's status in Discord shows how many players are online (e.g. "Playing Return2Beta With 5 Players").
- Messages from the web chat and other bots in the same channel are forwarded into the game.

## Discord Commands
These commands are used in the Discord channel, not in-game.

| Command | Description |
|---------|-------------|
| `!online` | Shows a list of all online players with their Minecraft heads. |

## Features
- **Bidirectional chat** — Discord ↔ Minecraft in real-time.
- **Rank prefixes in Discord** — your PermissionsEx group prefix (Member, Moderator, Admin, etc.) is shown with your messages in Discord.
- **Join/quit messages** — posted to Discord with player count, auto-deleted after 30 seconds.
- **Bot/webhook bridging** — messages from other bots or webhooks in the bridge channel (e.g. the web chat) are relayed into the game.
- **Player list** — `!online` shows who's playing with player head avatars.
- **Bot status** — displays current online player count.
- **Server start/stop messages** — Discord is notified when the server starts or shuts down.
- **Anti-ping protection** — `@everyone` and `@here` are stripped from messages.
- **Color code support** — `&` color codes from Discord are converted to in-game colors.
- **Essentials integration** — respects `/ignore` lists.

## Configuration

| Setting | Description | Default |
|---------|-------------|---------|
| `auto-delete-join-quit.enabled` | Auto-delete join/quit messages from Discord | `true` |
| `auto-delete-join-quit.delay-seconds` | Seconds before join/quit messages are deleted | `30` |
| `bridge-bot-messages` | Relay messages from other bots/webhooks into the game | `true` |
| `message.discord-chat-message` | Format for Discord→MC messages (supports `%prefix%`) | `&b[DC] &f%prefix%%messageAuthor%: %message%` |
| `message.game-chat-message` | Format for MC→Discord messages (supports `%prefix%`) | `%prefix% **%messageAuthor%**: %message%` |

## Notes
- Requires DiscordCore to be installed and running.
- The bridge is linked to the `#mc_lobby` channel on the Return2Beta Discord.
- Join the Discord at: https://discord.gg/VFrqgKCPPY
