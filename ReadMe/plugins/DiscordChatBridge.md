# DiscordChatBridge

## What It Does
DiscordChatBridge links a Discord channel to the in-game chat. Messages sent in Discord appear in-game, and messages sent in-game appear in Discord. It also forwards join/quit notifications and provides a player list command.

## How It Affects You
- Messages from Discord players appear in-game with a blue `[D]` prefix.
- Everything you type in-game chat is forwarded to the `#mc_lobby` channel on Discord.
- When you join or leave the server, a notification is posted in Discord with the current player count.
- The bot's status in Discord shows how many players are online (e.g. "Playing Return2Beta With 5 Players").

## Discord Commands
These commands are used in the Discord channel, not in-game.

| Command | Description |
|---------|-------------|
| `!online` | Shows a list of all online players with their Minecraft heads. |

## Features
- **Bidirectional chat** — Discord ↔ Minecraft in real-time.
- **Join/quit messages** — posted to Discord with player count.
- **Player list** — `!online` shows who's playing with player head avatars.
- **Bot status** — displays current online player count.
- **Server start/stop messages** — Discord is notified when the server starts or shuts down.
- **Anti-ping protection** — `@everyone` and `@here` are stripped from messages.
- **Color code support** — `&` color codes from Discord are converted to in-game colors.
- **Essentials integration** — respects `/ignore` lists.

## Notes
- Requires DiscordCore to be installed and running.
- The bridge is linked to the `#mc_lobby` channel on the Return2Beta Discord.
- Join the Discord at: https://discord.gg/VFrqgKCPPY
