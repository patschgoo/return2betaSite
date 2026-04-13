# Creativity

## What It Does
Creativity gives players **creative mode** in configured worlds. Players in those worlds get access to the full item inventory (all blocks and items selectable via middle-click), can fly, take no damage, break blocks instantly, and regenerate health infinitely.

On this server, Creativity is **only active in the Creative Dimension** (`creative_dimension`). It has no effect in the main world or the nether.

## How It Affects You
- In the Creative Dimension, you are in full creative mode — unlimited items, flight, no damage
- In all other worlds (main world, nether, different dimension), Creativity has no effect
- Creative mode is applied automatically when you enter the Creative Dimension; no commands needed
- The `creativity.all` permission is required. On this server, it is **automatically granted by DifferentDimension** when you enter the Creative Dimension and revoked when you leave — no PEX setup needed

## Configuration

Located at `plugins/Creativity/config.yml` and `CWorld.yml`.

### config.yml
| Setting | Value | Description |
|---------|-------|-------------|
| `CWorld-txt enables worlds` | `true` | Use CWorld.yml to define which worlds have creativity |
| `Bedrock protected` | `true` | Bedrock cannot be broken even in creative mode |
| `Clearinventory` | `false` | Don't clear inventory when switching to creative |

### CWorld.yml
Lists worlds where Creativity is enabled:
```
creative_dimension: true
```

## Permissions

| Permission | Description |
|------------|-------------|
| `creativity.all` | Enables creative mode for the player. Granted automatically by DifferentDimension when entering the Creative Dimension. |

## Notes
- Creativity is world-scoped via `CWorld.yml` — only worlds listed as `true` give creative mode
- The permission is granted per-session via DifferentDimension's `granted-permissions` config, not permanently in PEX
