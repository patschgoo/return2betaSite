# NoFloatingTrees

## What It Does
NoFloatingTrees automatically removes floating tree trunks and leaves after the base of a tree is chopped, preventing ugly floating trees in the landscape.

## How It Affects You
This plugin works automatically — you don't need to do anything. When you or another player chops the base of a tree, the remaining logs and leaves above will gradually disappear.

## How It Works
- **Delay:** 15 seconds after a trunk block is broken, removal begins.
- **Removal mode:** Gradual — blocks disappear one by one (1–5 seconds between each block).
- **Leaves:** Removed along with logs (no floating leaf patches).
- **Max tree size:** Trees with more than 200 log blocks are assumed to be player builds and are skipped.
- **Leaf radius:** 4 blocks from the nearest log.

## Notes
- No commands — this is fully automatic.
- If you've built a structure using wood logs that's larger than 200 blocks, it won't be affected.
- Leaves disappear gradually and naturally, rather than all at once.
