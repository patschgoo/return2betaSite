# Dynmap

## What It Does
Dynmap provides a live web-based map of the server world that you can view in your browser. It shows terrain, player positions, chat, and markers in real-time.

## How It Affects You
You can view the live map at any time to find locations, see who's online and where they are, and chat from the web interface.

## Features
- **Live map** updated in real-time as blocks are placed/broken.
- **Player markers** shown with faces and health bars.
- **Web chat** — chat with in-game players from the browser.
- **Time of day clock** and digital clock display.
- **Coordinate display** — hover to see world coordinates.
- **Spawn marker** shown on the map.
- **Chat balloons** appear above players on the map for 5 seconds.

## How to Access
- Open the Dynmap at the server host on port **50180**.
- The default view shows the overworld flat map.

## Notes
- The map updates when blocks are placed, broken, burned, or exploded.
- Your position is visible to other players viewing the map.
- You can chat through the web interface (limited to once every 5 seconds).
- Join/quit messages from the server appear on the web map.
- Rendering is limited to 20 chunk loads per tick.
- ServerHealth records tile storage and reports tiles older than 180 days. It does not delete tiles automatically because age-only pruning can leave holes in valid map coverage.
