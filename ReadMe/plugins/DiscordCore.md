# DiscordCore

## What It Does
DiscordCore is the backend plugin that runs the Discord bot inside the Minecraft server. It manages the connection between the server and Discord, allowing other plugins (like DiscordChatBridge) to send and receive Discord messages.

## How It Affects You
You won't interact with DiscordCore directly — it runs silently in the background. It powers the Discord bot (`Return2Beta MCDC`) that connects the server to the Discord.

## Notes
- DiscordCore does nothing visible on its own. It only provides the bot connection for other plugins to use.
- If the bot appears offline in Discord, DiscordCore may have failed to start. Check the server log for errors.
- The bot requires the **MESSAGE_CONTENT** and **SERVER MEMBERS** privileged intents enabled in the Discord Developer Portal.
