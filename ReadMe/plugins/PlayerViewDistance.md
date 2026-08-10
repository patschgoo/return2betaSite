# PlayerViewDistance

## What It Does
PlayerViewDistance gives each player a persisted personal chunk radius. The server keeps `view-distance=10` as the hard ceiling, while players default to 8 and may choose any value from 2 through 10.

This plugin is built specifically for the bundled Project Poseidon server. It adjusts Poseidon's per-player chunk subscriptions after joins, teleports, world changes, and chunk-boundary movement.

## Player Commands
| Command | Description |
|---------|-------------|
| `/viewdistance` | Show the current personal radius and allowed range. |
| `/viewdistance 2-10` | Set and save the personal radius. |
| `/viewdistance status` | Show the current personal radius. |
| `/viewdistance reset` | Restore the configured default. |
| `/vd ...` | Short alias for `/viewdistance`. |

The `playerviewdistance.use` permission is granted to Visitor and inherited by higher ranks.

## Configuration
File: `plugins/PlayerViewDistance/config.yml`

| Setting | Default | Description |
|---------|---------|-------------|
| `default-radius` | `8` | Radius used until a player chooses another value. |
| `minimum-radius` | `2` | Lowest selectable radius. |
| `maximum-radius` | `10` | Highest selectable radius, also limited by `server.properties`. |

Saved values are stored under `players.<lowercase-name>.radius` in the same file. Changes take effect immediately, but a real Beta 1.7.3 client is required to visually verify chunk loading.