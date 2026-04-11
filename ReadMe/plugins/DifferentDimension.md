# DifferentDimension

## What It Does
DifferentDimension creates an entirely separate survival world where **no commands or plugins work at all**. Not even server operators can run commands inside the dimension — the only way out is `/dd leave`. This creates a truly pure, unmodified survival experience in a completely isolated world.

When players enter the Different Dimension, their current location in the main world is saved. When they leave, their location in the dimension is saved. This means players can freely switch between worlds and always pick up exactly where they left off in either one.

Players can enter the dimension through the `/dd join` command or by right-clicking a specially created **[DD] portal sign**.

---

## How It Affects You

### As a Player
- When you enter the Different Dimension, **every single command is blocked** — no `/home`, no `/tp`, no `/gamemode`, no `/give`, nothing
- The **only** command that works inside is `/dd leave` (and `/dd help` for reference)
- Your position in both worlds is remembered — leave the dimension, come back days later, and you appear at the exact block you left
- **Inventories are completely separate** — items, armor, and health in the main world stay in the main world. You start fresh in the dimension and build up your own gear there. Nothing transfers between worlds
- You can enter through `/dd join` or by right-clicking a portal sign placed by an admin
- Chat is shared across both worlds by default. Messages from dimension players show a purple **[DD]** tag so you know where they are
- All standard game mechanics work (mining, building, mobs, hunger, etc.) — just no commands

### As an Admin
- You can set a custom spawn point for the dimension with `/dd setspawn`
- You can create portal signs by placing a sign with `[DD]` on the first line (requires OP or `differentdimension.admin`)
- You can configure the dimension world type, seed, and messages
- You can configure chat to be shared or separated between worlds, and set colored tags and message colors
- You can whitelist additional commands if needed
- Admin commands (`/dd setspawn`, `/dd reload`) work for OP players or players with `differentdimension.admin`

---

## Commands

| Command | Description | Permission | Works In Dimension? |
|---|---|---|---|
| `/dd join` | Enter the Different Dimension | Everyone | No (you're already there) |
| `/dd leave` | Leave the dimension and return to your saved main world location | Everyone | **Yes** (this is the only allowed command) |
| `/dd help` | Show available commands | Everyone | **Yes** |
| `/dd setspawn` | Set the dimension's default spawn point (stand where you want it) | OP / `differentdimension.admin` | **Yes** |
| `/dd reload` | Reload the plugin configuration from config.yml | OP / `differentdimension.admin` | **Yes** |

### Command Aliases
- `/dimension`
- `/diffdim`

All sub-commands work the same with any alias (e.g., `/dimension leave`, `/diffdim join`).

---

## Permissions

| Permission | Description | Default |
|---|---|---|
| `differentdimension.admin` | Allows `/dd setspawn`, `/dd reload`, and creating portal signs | OP only |

Regular players do not need any permissions — `/dd join`, `/dd leave`, and `/dd help` work for everyone. OP players are automatically recognized as admins even without a permissions plugin.

---

## Portal Signs

Admins can create special signs that act as portals into and out of the dimension.

### How to Create a Portal Sign
1. Place a sign (wall sign or standing sign)
2. On the **first line**, type `[DD]`
3. Lines 2-4 can be anything (they'll be replaced)
4. The sign will automatically format itself into a portal sign

### How Portal Signs Work
- **In the main world:** Right-clicking a portal sign teleports you into the dimension
- **In the dimension:** Right-clicking a portal sign teleports you back to the main world
- Portals work in both directions, saving your location and inventory each time

### Requirements
- Only OP or `differentdimension.admin` players can **create** portal signs
- Any player can **use** (right-click) existing portal signs

---

## Command Blocking

The plugin blocks **all** commands in the dimension at the lowest event priority:

- **OP status is irrelevant** — being OP does not bypass the block
- **No other plugins' commands work** — Essentials, WorldEdit, WorldGuard, etc. are all blocked
- **Non-command plugin features still function** — mob spawning, world generation, gravity, etc. are unaffected

### What IS Allowed
| Feature | Status |
|---|---|
| `/dd leave` | Allowed |
| `/dd help` | Allowed |
| `/dd setspawn` | Allowed (admin only) |
| `/dd reload` | Allowed (admin only) |
| Chat | Allowed (configurable) |
| Any whitelisted command in config | Allowed |
| Regular gameplay (mining, building, mobs, etc.) | Allowed |

### What IS Blocked
| Feature | Status |
|---|---|
| Every other command (`/home`, `/tp`, `/gamemode`, etc.) | **Blocked** |
| OP commands (`/op`, `/ban`, `/kick`, etc.) | **Blocked** |
| Other plugin commands (`/sethome`, `/warp`, `/kit`, etc.) | **Blocked** |

---

## Separate Inventories

The main world and the Different Dimension have **completely separate inventories**. This prevents players from transferring items or gear between worlds.

- **First time entering:** You start with an empty inventory and full health — true fresh survival
- **Switching worlds:** Your current inventory is saved and the other world's inventory is restored
- **Logging out/in:** Your inventory is saved and kept for whichever world you're in

Can be disabled with `separate-inventories: false` in config.

---

## Chat Settings

Chat between dimensions is configurable:

- **Shared chat** (default): Everyone sees all messages. Dimension players' messages are prefixed with a purple `[DD]` tag
- **Separated chat**: Players only see messages from their own world
- **Message colors**: Chat text color can be set independently for each world

Current server settings:
- Chat is **shared** across both worlds
- Dimension messages show `[DD]` prefix in purple
- Chat message colors use defaults

---

## Configuration

Located at `plugins/DifferentDimension/config.yml`.

| Option | Type | Default | Description |
|---|---|---|---|
| `world-name` | String | `different_dimension` | The folder name for the dimension world |
| `world-environment` | String | `NORMAL` | `NORMAL` = overworld, `NETHER` = nether |
| `world-seed` | Integer | `0` | Seed for world generation. `0` = random |
| `portal-signs.enabled` | Boolean | `true` | Enable/disable portal signs |
| `portal-signs.trigger-text` | String | `[DD]` | Text on sign line 1 to create a portal |
| `allow-chat` | Boolean | `true` | Whether chat works in the dimension |
| `chat.separate` | Boolean | `false` | `true` = isolated chat per world, `false` = shared |
| `chat.dimension-tag` | String | `&5[DD] ` | Tag before dimension player messages (shared mode) |
| `chat.main-tag` | String | *(empty)* | Tag before main world player messages (shared mode) |
| `chat.dimension-message-color` | String | *(empty)* | Color for dimension player chat text (e.g. `&d`) |
| `chat.main-message-color` | String | *(empty)* | Color for main world player chat text (e.g. `&f`) |
| `separate-inventories` | Boolean | `true` | Separate inventories between worlds |
| `whitelisted-commands` | List | `["/dd"]` | Additional commands allowed in the dimension |

---

## Notes
- Set the world seed in config **before** first server start — it can't be changed after generation
- Setting `world-environment` to `NETHER` creates a nether-style world (darkness, lava lakes, nether terrain)
- Don't delete `locations.yml` or `inventories.yml` — players will lose their saved positions and items
- Portal signs stay active until the block is broken
- Players who log in while in the dimension get a reminder that commands are blocked
- The dimension world is a real world with terrain, mobs, day/night cycle, and weather — just no commands
