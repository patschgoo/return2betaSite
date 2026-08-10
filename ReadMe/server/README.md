# Server Configuration

## Overview
This server runs **Poseidon** (a Bukkit Beta 1.7.3 fork) with offline/cracked mode enabled. Below is a breakdown of all server-level configuration files and their settings.

---

## server.properties

The core Minecraft server configuration.

| Property | Value | Description |
|----------|-------|-------------|
| `allow-flight` | `false` | Players cannot fly (anti-cheat kicks flyers). |
| `allow-nether` | `true` | The Nether dimension is enabled. |
| `level-name` | `world` | Main world folder name. |
| `level-seed` | *(empty)* | Random seed was used for world generation. |
| `max-players` | `20` | Maximum 20 players can be online at once. |
| `online-mode` | `false` | Cracked/offline mode — no Mojang authentication required. |
| `pvp` | `true` | Player vs Player combat is enabled. |
| `enable-query` | `true` | Server query protocol enabled on port 50179. |
| `server-ip` | `0.0.0.0` | Listens on all network interfaces. |
| `server-port` | `50179` | Main game port. |
| `spawn-animals` | `true` | Animals spawn naturally. |
| `spawn-monsters` | `true` | Hostile mobs spawn naturally. |
| `view-distance` | `10` | Global chunk ceiling. PlayerViewDistance defaults each player to 8 and allows 2-10 chunks. |
| `white-list` | `false` | Whitelist is disabled — anyone can join. |

## poseidon.yml

Poseidon-specific enhancements, fixes, and security settings.

### Connection & Authentication
| Setting | Value | Description |
|---------|-------|-------------|
| BungeeCord mode | `false` | Direct connections allowed (not behind a proxy). |
| Cracked username prefix | `false` | No automatic prefix for cracked usernames. |
| Username validity check | `true` | Validates usernames: `[a-zA-Z0-9_.]`, 3–16 characters. |
| IP pass-through | `false` | Release-to-beta proxy IP forwarding disabled. |
| Graceful UUIDs | `true` | Offline UUIDs generated for players without Mojang UUIDs. |
| Always use offline UUIDs | `false` | Only uses offline UUIDs as fallback. |

### Performance & Packets
| Setting | Value | Description |
|---------|-------|-------------|
| Faster packets | `true` | Increased packet speed (modern MC fix). |
| Packet spam detection | `true` | Kicks players sending >10,000 packets in a short period. |
| TCP NoDelay | `false` | Standard TCP buffering. |
| Task reporting | `true` | Logs tasks taking >100ms. |
| Listener reporting | `true` | Logs listeners taking >100ms. |

### Bug Fixes
| Fix | Enabled | Description |
|-----|---------|-------------|
| Drowning push-down | Yes | Fixes drowning damage pushing players down. |
| Player knockback | Yes | Fixes reduced knockback for certain players. |
| Flowing lava | Yes | Fixes lava not disappearing when source removed. |
| Piston transmutation | Yes | Fixes block transmutation exploits. |
| Piston sand/gravel duping | Yes | Fixes sand/gravel duplication. |
| Other piston exploits | Yes | Fixes illegal pistons, bedrock breaking, torch duping. |
| Block pistons pushing furnaces | Yes | Prevents server crash from pistons pushing furnaces. |
| Skeleton shooting sound | Yes | Fixes bow shooting sounds not playing. |
| Optimized sponges | Yes | Removes unnecessary sponge block updates. |
| Optimized explosions | Yes | Uses Poseidon's optimized explosion calculations. |

### World Settings
| Setting | Value | Description |
|---------|-------|-------------|
| Speed hack check | `true` | Teleports players moving >100 blocks illegally. |
| Mob spawner area limit | `true` | Max 150 entities of a type within 8-chunk radius of a spawner. |
| Block tree growth near | `54,63,68` | Trees cannot destroy chests, signs, or wall signs. |
| Randomize spawn | `true` | Spawn location is randomized slightly. |
| Teleport to highest safe block | `true` | Teleports place you on the highest safe block. |
| Send explosion velocity | `true` | Explosions knock players back. |
| Modern fence bounding boxes | `false` | Uses classic Beta fence hitboxes. |

### Messages
| Event | Message |
|-------|---------|
| Banned | "You are banned from this server!" |
| IP banned | "Your IP address is banned from this server!" |
| Not whitelisted | "You are not white-listed on this server!" |
| Server full | "The server is full!" |
| Shutdown | "Server is shutting down, please rejoin later." |
| Already online | "A player with your username or uuid is already online, try reconnecting in a minute." |
| Player join | "[player] joined the game." |
| Player leave | "[player] left the game." |

## Hosting and Ports

| Service | Address |
|---------|---------|
| Minecraft | `5.9.123.120:50179` |
| Dynmap | `5.9.123.120:50180` |

Both ports were reachable during the August 10, 2026 acceptance check. External restart launching remains disabled; Gravel Host's panel or watchdog should own process startup unless the host explicitly supports a custom `start.sh` process.

## Operational Monitoring
- ServerHealth records effective TPS, total server size, free disk space, world-backup size, log-backup size, and Dynmap tile size every five minutes.
- Warnings are logged below 17 TPS or below 2 GB free disk space.
- Monitoring history rotates at 5 MB and keeps five rotated files.
- Dynmap tile age is reported but tiles are not automatically deleted.
- The runtime identifies this local JAR as Project Poseidon 1.1.10; verify the displayed version after each hosted JAR update.

## Acceptance Check
The full staged server reached `Done`, loaded AuthMe, AcceptRules, PermissionsEx, Tuto, DynamicLight, Dynmap, dynmap-mobs, Return2BetaAds, Backup, economy plugins, LagMeter, and ServerHealth. It returned 20 TPS, served Dynmap over HTTP, created a readable world-backup ZIP, completed `save-all`, and shut down cleanly.

The August 10, 2026 focused plugin check also loaded PlayerViewDistance with its Poseidon reflection bindings, reported default 8 and range 2-10, loaded Return2BetaAds 1.1 with three messages, returned the configured Discord invite from `/discord`, and shut down cleanly.

Player-only workflows still require a real Beta 1.7.3 guest account after deployment: registration/login, `/rules`, `/acceptrules`, `/tuto list`, `/viewdistance 2`, `/viewdistance 10`, visible chunk-radius changes, DynamicLight while holding an item, explosion behavior, and visible mob markers.
