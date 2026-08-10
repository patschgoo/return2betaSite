# DynamicLight

## What It Does
DynamicLight makes held items that emit light (torches, glowstone, lava buckets, etc.) illuminate the area around you in real-time, even without placing them.

## How It Affects You
Dynamic lighting is off by default. Enable it with `/dl on`, then hold a configured light item to illuminate the area while moving.

## Commands
| Command | Description |
|---------|-------------|
| `/dl on` | Enable held-item lighting for yourself. |
| `/dl off` | Disable held-item lighting. |
| `/dl status` | Show your current state and radius cap. |
| `/dl radius <1-7>` | Set your personal radius cap. |

## Light Items
| Item | Configured Radius |
|------|------------------:|
| Lava / Lava Bucket | 7 |
| Glowstone | 7 |
| Jack o' Lantern | 7 |
| Torch | 6 |
| Fire | 6 |
| Portal Block | 5 |
| Redstone Torch | 4 |
| Redstone Repeater | 3 |

The actual radius is the lower of the item's configured radius and your personal cap. The default personal cap is **5** and the server maximum is **7**.

## Notes
- The light follows you as you move.
- This is visual only — it does not prevent mob spawning.
- Visitors have the `dynamiclight.use` permission.
- The older configuration allowed radii up to 15. The current maximum of 7 and default-off behavior reduce lighting work substantially.
