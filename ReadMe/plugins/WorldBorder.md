# WorldBorder

## What It Does
WorldBorder limits how far players can travel in a world. When a player reaches the configured radius, they are knocked back with a "whoosh" effect and shown a message. It is configured per-world, so borders can be set independently for each world.

On this server, WorldBorder is only active in the **Creative Dimension** (`creative_dimension`), containing players within a 1000-block radius from the world center.

## How It Affects You
- In the Creative Dimension, you cannot travel more than **1000 blocks** from the center (X: 0, Z: 0)
- If you walk into the border, you will be knocked back a few blocks
- A configurable message is shown when you hit the border
- The border is circular (round) by default
- The border does **not** apply in the main world or nether

## Configuration

Located at `plugins/WorldBorder/config.yml`.

| Setting | Value | Description |
|---------|-------|-------------|
| `round-border` | `true` | Round (circular) border shape |
| `knock-back-dist` | `3.0` | How many blocks to knock the player back |
| `whoosh-effect` | `true` | Play a whoosh sound when knocked back |
| `timer-delay-ticks` | `5` | How often the border check runs (in ticks) |
| `message` | `&cYou have reached the edge of the Creative Dimension!` | Message shown when hitting the border |

### World Border Settings
| World | Center | Radius |
|-------|--------|--------|
| `creative_dimension` | X: 0, Z: 0 | 1000 blocks |

## Admin Commands

| Command | Description |
|---------|-------------|
| `wb <world> set <radius> <x> <z>` | Set a world border |
| `wb <world> radius <radius>` | Change a border's radius |
| `wb <world> clear` | Remove a world's border |
| `wb list` | Show border info for all worlds |
| `wb shape <round\|square>` | Set default border shape |
| `wb knockback <distance>` | Set knockback distance |
| `wb setmsg <text>` | Set the border hit message |
| `wb reload` | Reload config from file |

## Notes
- The border was set using `wb creative_dimension set 1000 0 0` — the config file is updated automatically by the plugin when using commands
- The border only prevents movement beyond the limit; it does not affect existing structures or blocks outside
