# Return2BetaAds

## What It Does
Return2BetaAds broadcasts configurable links to the Return2Beta website, plugin directory, and Discord server.

## Player Commands
| Command | Description |
|---------|-------------|
| `/website` | Show the Return2Beta website and plugin directory links. |
| `/pluginpage` | Show the Return2BetaAds plugin-page link. |
| `/discord` | Show the Return2Beta Discord invite. |

## Operator Commands
| Command | Description |
|---------|-------------|
| `/serverads status` | Show whether announcements are enabled and their interval. |
| `/serverads now` | Broadcast the next configured message immediately. |
| `/serverads reload` | Reload the configuration and announcement schedule. |

## Schedule
- Enabled by default.
- First announcement after **5 minutes**.
- Further announcements every **20 minutes**.
- Messages are skipped when no players are online.

## Links
- Website: `https://return2beta.com/`
- Plugins: `https://return2beta.com/plugins/`
- Discord: `https://discord.gg/vVvs7tN5p7`