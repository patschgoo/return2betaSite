# EssentialsSpawn

## What It Does
EssentialsSpawn manages the server's spawn point behavior, controlling where players appear when they first join or respawn after death.

## How It Affects You
- New players spawn at the server's designated spawn point.
- After death, you respawn at the spawn point (not at your home — `respawn-at-home` is disabled).
- Use `/spawn` to teleport back to spawn at any time.
- Beds do **not** set your home automatically (bed-sethome is disabled). Use `/sethome` instead.

## Notes
- If no home is set, `/home` will not send you to spawn — use `/spawn` instead.
- Members can set up to **5 homes** with `/sethome`.
