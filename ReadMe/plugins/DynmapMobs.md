# Dynmap-Mobs

## What It Does
Dynmap-Mobs is a Dynmap addon that shows mob markers on the live web map. Each tracked mob type appears as an icon on the map so you can see where mobs are in real-time.

## How It Affects You
When viewing the Dynmap in your browser, you can toggle the "Nearby Mobs" layer. Markers are sampled around online players instead of scanning every loaded creature.

## Sampling Limits
| Setting | Value |
|---------|------:|
| Update period | 15 seconds |
| Horizontal player radius | 64 blocks |
| Vertical player radius | 32 blocks |
| Maximum markers per player | 6 |
| Maximum markers total | 24 |
| Coordinate resolution | 2 blocks |

## Notes
- Hostile and passive mobs use configurable sampling weights.
- Marker count is bounded even when many mobs are loaded.
- ServerHealth reports Dynmap storage, while old tile deletion remains report-only to avoid holes in valid map coverage.
