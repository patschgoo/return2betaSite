# DifferentDimension

## What It Does
DifferentDimension adds two extra worlds you can visit:

- **Survival Dimension (DD)** — A pure survival world where **no commands work at all**. No `/home`, no `/tp`, no `/give`, nothing. The only way out is `/dd leave`. This is a truly unmodified survival experience.
- **Creative Dimension (CD)** — A building world where you can use item and building commands like `/i`, `/give`, and WorldEdit tools. Dangerous commands (bans, economy, server management) are blocked.

Your inventory, position, and health are **completely separate** between the main world, DD, and CD. You always pick up exactly where you left off in each world.

## How It Affects You
- Enter via commands or by right-clicking portal signs (**[DD]** or **[CD]**) placed around the server.
- Your main world inventory is safe — nothing transfers between worlds.
- In DD, you start fresh with nothing and must survive on your own.
- In CD, you get extra permissions automatically (WorldEdit, `/back`, `/top`, `/i`, etc.) that are removed when you leave.
- Chat is shared — DD players' messages show a purple **[DD]** tag and CD players show a yellow **[CD]** tag.

## Commands
| Command | Description |
|---------|-------------|
| `/dd survival` | Enter the Survival Dimension |
| `/dd creative` | Enter the Creative Dimension |
| `/dd leave` | Return to the main world (works from any dimension, including nethers) |
| `/dd help` | Show available commands |

Aliases: `/dimension`, `/diffdim`. Also `/dd join` works as an alias for `/dd survival`.

## Survival Dimension Details
- **Every command is blocked** — even for OPs. Only `/dd leave` and `/dd help` work.
- The dimension has its **own separate nether**. Nether portals work normally and your inventory carries over.
- Command blocking still applies in the nether.
- `/dd leave` from the nether returns you to the main world. Coming back later puts you at your nether position.
- **Death in the nether** respawns you at the dimension overworld spawn.

## Creative Dimension Details
- You can use **item and building commands** — `/i`, `/give`, WorldEdit, `/back`, `/top`, `/jump`, `/tpa`, and more.
- **Dangerous commands are blocked** — server management, permissions, bans, economy, protection commands, etc.
- **Nether portals are disabled** in the creative world.
- Extra permissions (WorldEdit, navigation, etc.) are granted when you enter and removed when you leave.

## Portal Signs
- Signs with **[DD]** on the first line teleport you to the Survival Dimension.
- Signs with **[CD]** on the first line teleport you to the Creative Dimension.
- Right-click a portal sign in either dimension to return to the main world.

## Notes
- First time entering a dimension, you start with an empty inventory — true fresh start.
- Your position is remembered in every world. Leave and come back days later to the exact same spot.
- The Tetris theme music plays if a note block is near the station.
- Both dimensions are real worlds with terrain, mobs, day/night cycle, and weather.
