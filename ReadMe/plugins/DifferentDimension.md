# DifferentDimension

## What It Does
DifferentDimension creates separate worlds with different rule sets. It has two dimension types:

**Survival Dimension (DD)** — A completely pure survival world where **no commands or plugins work at all**. Not even server operators can run commands inside — the only way out is `/dd leave`. This creates a truly unmodified survival experience.

**Creative Dimension (CD)** — A building-focused world where players can use **item and building commands** like `/i`, `/give`, `/mc`, and other useful tools. Dangerous commands (server management, permissions, bans, economy, etc.) are blocked via a blacklist. This lets players build freely without risk to the server.

When players enter either dimension, their current location and inventory in the main world are saved. When they leave, their dimension location and inventory are saved. Players can freely switch between worlds and always pick up exactly where they left off.

Players can enter dimensions through commands (`/dd join`, `/dd creative`) or by right-clicking specially created portal signs (**[DD]** or **[CD]**).

---

## How It Affects You

### As a Player

#### Survival Dimension (DD)
- When you enter, **every single command is blocked** — no `/home`, no `/tp`, no `/gamemode`, no `/give`, nothing
- The **only** command that works inside is `/dd leave` (and `/dd help` for reference)
- Your position in both worlds is remembered — leave the dimension, come back days later, and you appear at the exact block you left
- **Inventories are completely separate** — items, armor, and health in the main world stay in the main world. You start fresh in the dimension
- You can enter through `/dd join` or by right-clicking a **[DD]** portal sign
- Chat messages from DD players show a purple **[DD]** tag

#### Creative Dimension (CD)
- You can use **item and building commands** like `/i`, `/give`, `/mc`, `/time`, etc.
- **Dangerous commands are blocked** — you cannot use server management, permissions, bans, economy, WorldEdit region commands, or other risky commands
- Your position and inventory are separate from both the main world and the survival dimension
- You can enter through `/dd creative` or by right-clicking a **[CD]** portal sign
- Chat messages from CD players show a yellow **[CD]** tag
- All standard gameplay mechanics work normally

### As an Admin
- You can set custom spawn points for each dimension with `/dd setspawn` (DD) and `/dd csetspawn` (CD)
- You can create portal signs by placing a sign with `[DD]` or `[CD]` on the first line (requires OP or `differentdimension.admin`)
- You can configure each dimension's world type, seed, and messages separately
- You can configure chat to be shared or separated between worlds, with colored tags and message colors
- You can whitelist additional commands in DD, or add to the blacklist in CD
- Admin commands work for OP players or players with `differentdimension.admin`

---

## Commands

| Command | Description | Permission | Works In Dimension? |
|---|---|---|---|
| `/dd join` | Enter the Survival Dimension | Everyone | No |
| `/dd creative` | Enter the Creative Dimension | Everyone | No |
| `/dd leave` | Leave whichever dimension you're in and return to main world | Everyone | **Yes** |
| `/dd help` | Show available commands | Everyone | **Yes** |
| `/dd setspawn` | Set the DD spawn point (stand where you want it) | OP / `differentdimension.admin` | **Yes** (DD only) |
| `/dd csetspawn` | Set the CD spawn point (stand where you want it) | OP / `differentdimension.admin` | **Yes** (CD only) |
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

Admins can create special signs that act as portals into and out of dimensions.

### How to Create a Portal Sign
1. Place a sign (wall sign or standing sign)
2. On the **first line**, type `[DD]` for Survival Dimension or `[CD]` for Creative Dimension
3. Lines 2-4 can be anything (they'll be replaced)
4. The sign will automatically format itself into a portal sign

### How Portal Signs Work
- **In the main world:** Right-clicking a `[DD]` sign teleports you into the Survival Dimension. Right-clicking a `[CD]` sign teleports you into the Creative Dimension
- **In either dimension:** Right-clicking a portal sign teleports you back to the main world
- You must `/dd leave` first if you want to switch between dimensions — portal signs don't teleport between DD and CD directly
- Portals save your location and inventory each time

### Requirements
- Only OP or `differentdimension.admin` players can **create** portal signs
- Any player can **use** (right-click) existing portal signs

---

## Command Blocking

### Survival Dimension (DD) — Whitelist Approach
The plugin blocks **all** commands in DD at the lowest event priority:

- **OP status is irrelevant** — being OP does not bypass the block
- **No other plugins' commands work** — Essentials, WorldEdit, WorldGuard, etc. are all blocked
- Only `/dd leave`, `/dd help`, `/dd setspawn`, `/dd reload`, and any whitelisted commands in config work

### Creative Dimension (CD) — Blacklist Approach
The plugin allows most commands but blocks dangerous ones:

- Players can use item commands (`/i`, `/give`), building tools, teleporting, etc.
- **Blocked categories:** server management (`/stop`, `/reload`, `/op`), permissions (`/pex`, `/permissions`), bans/kicks, economy commands, WorldGuard region commands, LWC protection commands, and other risky commands
- The blacklist is configurable in `config.yml` under `creative-dimension.blacklisted-commands`
- OP status does not bypass the blacklist

### What IS Allowed in DD
| Feature | Status |
|---|---|
| `/dd leave` | Allowed |
| `/dd help` | Allowed |
| `/dd setspawn` | Allowed (admin only) |
| `/dd reload` | Allowed (admin only) |
| Chat | Allowed (configurable) |
| Any whitelisted command in config | Allowed |
| Regular gameplay (mining, building, mobs, etc.) | Allowed |

### What IS Blocked in CD
| Category | Examples |
|---|---|
| Server Management | `/stop`, `/reload`, `/op`, `/deop`, `/whitelist` |
| Permissions | `/pex`, `/permissions`, `/rank`, `/rankup` |
| Moderation | `/ban`, `/kick`, `/mute`, `/jail` |
| Economy | `/eco`, `/money`, `/pay`, `/balance` |
| World Management | `/wg`, `/region`, `//set`, `//replace` |
| Protection | `/lwc`, `/cprivate`, `/cremove` |
| Other Dangerous | `/sudo`, `/god`, `/enchant`, `/vanish` |

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
