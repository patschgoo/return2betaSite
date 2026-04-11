# PreciousStones

## What It Does
PreciousStones provides area protection using special blocks. Place a specific block and it will create a protective field around it, preventing other players from building, breaking, or interacting in that area.

## How It Affects You
Members can purchase and place protection blocks to secure their builds. Different blocks provide different types of protection.

## Protection Blocks

### Glowing Redstone Ore – Protection Field
- **Radius:** 20 blocks (15 blocks high)
- **Prevents:** Block placement, block breaking, explosions, fire, lava/water flow, and use of crafting tables and furnaces by non-owners.
- **Features:** Welcome/farewell messages when entering/leaving the area.
- **Tip:** This is your primary base protection block. Buy it with `/buy` and place it at the center of your base.

### Lapis Lazuli Ore – Entry Blocker
- **Radius:** 5 blocks
- **Prevents:** Entry by non-owners, block placement, block breaking, explosions, fire, and lava/water flow.
- **Tip:** Use this to create areas only you (and allowed players) can enter.

### Diamond Ore – Grief Revert
- **Radius:** 20 blocks (15 blocks high)
- **Feature:** Automatically reverts grief damage every 5 minutes.
- **Includes:** Welcome/farewell messages.
- **Tip:** Place near valuable builds. If someone somehow damages blocks, the damage will be automatically reversed.

### Other Special Blocks
| Block | Effect | Radius |
|-------|--------|--------|
| **Mob Spawner** (ID 52) | Prevents mob and animal spawning | 20 blocks |
| **Sponge** (ID 19) | Underwater breathing | 10 blocks |
| **Iron Block** (ID 42) | Launch pad (launches you into the air) | 1 block |
| **Note Block** (ID 25) | Proximity snitch (alerts you when someone enters) | 5 blocks |
| **Cobweb** (ID 30) | PvP-free zone | 10 blocks |

## Commands
| Command | Description |
|---------|-------------|
| `/ps info` | View information about the protection field you're standing in. |
| `/ps allow <player>` | Allow a player into your protection field. |
| `/ps remove <player>` | Remove a player from your protection field. |
| `/ps toggle` | Toggle your protection field on/off. |
| `/ps counts` | See how many protection stones you have placed. |
| `/ps visualize` | Briefly visualize the borders of a protection field (glass blocks for 30 seconds). |

## Tips
- Protection fields cannot overlap with other players' fields.
- You can sneak to bypass slow-damage and other environmental field effects.
- Inactive protection stones are automatically removed after 45 days of owner inactivity.
- Place your protection block and it's immediately active — no commands needed!
