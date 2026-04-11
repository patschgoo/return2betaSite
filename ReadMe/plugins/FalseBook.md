# FalseBook

## What It Does
FalseBook adds interactive redstone mechanics through signs, including hidden switches, bridges, doors, gates, elevators, minecart controls, logic gates, and toggle blocks.

## How It Affects You
Members have access to all FalseBook block, cart, and extra mechanics. You can build and use interactive contraptions powered by signs.

## Block Mechanics

### Bridge `[Bridge]`
- Creates retractable bridges that toggle between solid and air.
- **Max length:** 20 blocks
- **Max width:** 5 blocks (each side)
- Connect a lever or button to activate.

### Door `[Door]`
- Creates automatic doors that toggle open/closed.
- **Max width:** 5 blocks (each side)

### Gate `[Gate]`
- Opens/closes all connected fence blocks (Fence, ID 85).
- **Max width:** 20 blocks
- Power with redstone to toggle.

### Elevator `[Lift Up]` / `[Lift Down]`
- Right-click a `[Lift Up]` sign to go up, or `[Lift Down]` to go down.
- Place signs on different floors at the same X/Z position.

### Lightswitch
- Toggle nearby light sources on and off.
- **Max toggles:** 20 blocks affected per switch.

### Readable Bookshelves
- Right-click a bookshelf to read its contents (if set up).

### Apple Drop
- Leaves have a **10% chance** to drop an apple when broken.

### Allowed Block Types
Bridges and doors can be made from these blocks:

| ID | Block |
|----|-------|
| 1 | Stone |
| 2 | Grass |
| 3 | Dirt |
| 4 | Cobblestone |
| 5 | Wood Planks |
| 17 | Wood Log |
| 18 | Leaves |
| 20 | Glass |
| 24 | Sandstone |
| 43 | Double Slab |
| 44 | Slab |

## Minecart Mechanics

FalseBook adds special blocks that affect minecarts when they roll over them:

| Block | ID | Effect |
|-------|----|--------|
| Gold Ore | 14 | 2x speed booster |
| Gold Block | 41 | 8x speed booster |
| Iron Block | 42 | Constant speed (0.2) |
| Obsidian | 49 | Station (stops cart, launches on redstone) |
| Coal Ore | 16 | Eject rider |
| Gravel | 13 | 25% brake |
| Soul Sand | 88 | 50% brake |
| Bedrock | 7 | Reverse direction |
| Iron Ore | 15 | Collect/Deposit items |
| Netherrack | 87 | Sort items |
| Lapis Ore | 21 | Emitter (spawns a cart) |

- **Max speed:** 0.7
- **Launch speed:** 3.0
- Carts are removed when you exit them.

## Toggle Blocks (Extra Mechanics)

These blocks can be toggled on/off with redstone:

| Block | Toggle Behavior |
|-------|----------------|
| **Pumpkin** | Toggles on/off |
| **Netherrack** | Toggles on/off |
| **Glowstone** | Toggles between Glowstone and Soul Sand (ID 88) |

## Logic Gates

FalseBook supports logic gate signs for redstone circuits:
- `[AND]`, `[OR]`, `[NOT]`, `[XOR]`, `[NAND]`, `[NOR]`, `[XNOR]`

## How to Use
1. Place a sign on or near the mechanism.
2. Write the appropriate tag on the first line (e.g., `[Bridge]`, `[Door]`, `[Gate]`).
3. Connect a lever or button for redstone activation.
4. The mechanism activates when powered.

## Tips
- Gates work with fence blocks — place a `[Gate]` sign nearby and power it to open/close all connected fences.
- Minecart blocks go under the rail — place the special block, then put a rail on top.
