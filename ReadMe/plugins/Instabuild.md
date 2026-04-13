# Instabuild

## What It Does
Instabuild allows players to break blocks instantly (instabreak), just like vanilla creative mode mining. Players with the `instabuild.use` permission break any block with a single hit, with no mining delay.

On this server, Instabuild is intended **only for the Creative Dimension**. The `instabuild.use` permission is **automatically granted by DifferentDimension** when a player enters the Creative Dimension and revoked when they leave. It is not assigned in PEX, so it has no effect in the main world or nether.

## How It Affects You
- In the Creative Dimension, blocks break instantly with any tool (or bare hand)
- In all other worlds, normal mining speed applies
- No commands are needed — it activates automatically when you enter the Creative Dimension

## Permissions

| Permission | Description |
|------------|-------------|
| `instabuild.use` | Grants instabreak. Automatically granted by DifferentDimension on entering the Creative Dimension, revoked on leave. |

## Notes
- The permission is not set in PEX — it is managed dynamically by DifferentDimension's `granted-permissions` config
- To change this behavior, edit `creative-dimension.granted-permissions` in `plugins/DifferentDimension/config.yml`
