# DifferentDimension

## What It Does
DifferentDimension creates separate worlds with different rule sets. It has two dimension types:

**Survival Dimension (DD)** — A completely pure survival world where **no commands or plugins work at all**. Not even server operators can run commands inside — the only way out is `/dd leave`. This creates a truly unmodified survival experience.

**Creative Dimension (CD)** — A building-focused world where players can use **item and building commands** like `/i`, `/give`, `/mc`, and other useful tools. Dangerous commands (server management, permissions, bans, economy, etc.) are blocked via a blacklist. This lets players build freely without risk to the server.

When players enter either dimension, their current location and inventory in the main world are saved. When they leave, their dimension location and inventory are saved. Players can freely switch between worlds and always pick up exactly where they left off.

**Nether Portals** — Each dimension can have configurable nether behavior. The survival dimension gets its own **separate nether** by default. The creative dimension has **nether portals disabled** by default. Nether portals in the main world work normally.

Players can enter dimensions through commands (`/dd survival`, `/dd creative`) or by right-clicking specially created portal signs (**[DD]** or **[CD]**).

---

## How It Affects You

### As a Player

#### Survival Dimension (DD)
- When you enter, **every single command is blocked** — no `/home`, no `/tp`, no `/gamemode`, no `/give`, nothing
- The **only** command that works inside is `/dd leave` (and `/dd help` for reference)
- Your position in both worlds is remembered — leave the dimension, come back days later, and you appear at the exact block you left
- **Inventories are completely separate** — items, armor, and health in the main world stay in the main world. You start fresh in the dimension
- **Nether portals work** — the survival dimension has its own separate nether. Portal travel works normally, and your inventory carries over (same survival experience). Command blocking still applies in the nether
- You can enter through `/dd survival` or by right-clicking a **[DD]** portal sign
- `/dd leave` works from the nether too — returns you to the main world
- If you `/dd leave` from the nether and later `/dd survival` again, you return to your nether position
- **Death in the nether** respawns you at the dimension overworld spawn (not the main world)
- Chat messages from DD players show a purple **[DD]** tag

#### Creative Dimension (CD)
- You can use **item and building commands** like `/i`, `/give`, `/mc`, etc.
- **Dangerous commands are blocked** — you cannot use server management, permissions, bans, economy, or other risky commands
- Extra permissions are **automatically granted** when you enter and **revoked** when you leave — including WorldEdit building tools, Essentials navigation (`/back`, `/top`, `/up`, `/jump`), co-building (`/tpa`, `/tpahere`, `/tpaccept`, `/tpdeny`), and utilities (`/getpos`, `/clearinventory`, `/near`, `/me`)
- **Nether portals are disabled** — you can't light or enter nether portals in the creative world
- Your position and inventory are separate from both the main world and the survival dimension
- You can enter through `/dd creative` or by right-clicking a **[CD]** portal sign
- Chat messages from CD players show a yellow **[CD]** tag
- All standard gameplay mechanics work normally

### As an Admin
- You can set custom spawn points for each dimension with `/dd setspawn` (DD) and `/dd csetspawn` (CD)
- You can create portal signs by placing a sign with `[DD]` or `[CD]` on the first line (requires OP or `differentdimension.admin`)
- You can configure nether behavior per-dimension: `"separate"` (own nether), `"none"` (disabled), or `"default"` (vanilla)
- You can configure each dimension's world type, seed, and messages separately
- You can configure chat to be shared or separated between worlds, with colored tags and message colors
- You can whitelist additional commands in DD, or add to the blacklist in CD
- Admin commands work for OP players or players with `differentdimension.admin`

---

## Commands

| Command | Description | Permission | Works In Dimension? |
|---|---|---|---|
| `/dd survival` | Enter the Survival Dimension | Everyone | No |
| `/dd creative` | Enter the Creative Dimension | Everyone | No |
| `/dd leave` | Leave whichever dimension you're in and return to main world | Everyone | **Yes** |
| `/dd help` | Show available commands | Everyone | **Yes** |
| `/dd setspawn` | Set the DD spawn point (stand where you want it) | OP / `differentdimension.admin` | **Yes** (DD only) |
| `/dd csetspawn` | Set the CD spawn point (stand where you want it) | OP / `differentdimension.admin` | **Yes** (CD only) |
| `/dd reload` | Reload the plugin configuration from config.yml | OP / `differentdimension.admin` | **Yes** |

### Command Aliases
- `/dimension`
- `/diffdim`

All sub-commands work the same with any alias (e.g., `/dimension leave`, `/diffdim survival`).

`/dd join` also works as an alias for `/dd survival`.

---

## Permissions

| Permission | Description | Default |
|---|---|---|
| `differentdimension.admin` | Allows `/dd setspawn`, `/dd reload`, and creating portal signs | OP only |

Regular players do not need any permissions — `/dd survival`, `/dd leave`, and `/dd help` work for everyone. OP players are automatically recognized as admins even without a permissions plugin.

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

### Command Blocking in Nethers
Command rules extend into each dimension's nether. If you're in the survival dimension's nether, commands are still blocked (whitelist). If you're in the creative dimension's nether, the same blacklist applies.

---

## Nether Portal Handling

Each dimension can have its own nether behavior, configured with the `nether-mode` option.

### Nether Modes

| Mode | Description |
|---|---|
| `"separate"` | The dimension gets its own private nether world. Portal travel works normally between the dimension overworld and its nether. Inventory carries over (same gameplay zone) |
| `"none"` | Nether portals are completely disabled — can't light portals, can't enter them, portal frames won't activate |
| `"default"` | (Main world only) Vanilla nether behavior, no interference from the plugin |

### Default Configuration

| World | Default Nether Mode | Nether World Name |
|---|---|---|
| Main world | `default` | `world_nether` (vanilla) |
| Survival dimension | `separate` | `different_dimension_nether` |
| Creative dimension | `none` | *(no nether created)* |

### How Separate Nethers Work
- When entering a nether portal in the survival dimension, you go to `different_dimension_nether` (not the main world's nether)
- Coordinates are scaled 8:1 (overworld:nether) as normal
- Inventory is shared between the dimension and its nether (same survival experience)
- Command blocking and chat rules still apply in the nether
- `/dd leave` from the nether returns you to the main world
- Returning via `/dd survival` after leaving from the nether will place you back at your nether position
- **Death in the nether** respawns you at the dimension overworld spawn, keeping your inventory in the dimension zone

### How "None" Mode Works
- Flint & steel on obsidian is blocked with a message
- Portal frame activation is cancelled
- Portal teleportation is cancelled with a message

---

## Separate Inventories

The main world, survival dimension, and creative dimension each have **completely separate inventories**. This prevents players from transferring items or gear between worlds.

### Inventory Zones

| Zone | Shares With |
|---|---|
| Main world + main nether | Each other |
| Survival dimension + dimension nether | Each other |
| Creative dimension + creative nether* | Each other |

*Creative nether only exists if `creative-dimension.nether-mode` is set to `"separate"`.

- **First time entering:** You start with an empty inventory and full health — true fresh start
- **Switching worlds:** Your current inventory is saved and the other world's inventory is restored
- **Nether travel within a dimension:** Inventory carries over (same zone)
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
| `nether-mode` | String | `separate` | Nether behavior for survival dimension: `separate`, `none`, or `connected` |
| `main-world-nether-mode` | String | `default` | Nether behavior for main world: `default` or `none` |
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
| `creative-dimension.enabled` | Boolean | `true` | Enable or disable the Creative Dimension |
| `creative-dimension.world-name` | String | `creative_dimension` | Folder name for the creative world |
| `creative-dimension.nether-mode` | String | `none` | Nether behavior for creative dimension: `separate`, `none`, or `connected` |
| `creative-dimension.separate-inventories` | Boolean | `true` | Separate CD inventory from both main world and DD |
| `creative-dimension.blacklisted-commands` | List | *(see config)* | Commands blocked in the Creative Dimension |
| `creative-dimension.granted-permissions` | List | *(see below)* | Permissions granted when entering CD, revoked on leave |

**Default `granted-permissions` list:**

| Permission | What It Enables |
|---|---|
| `creativity.all` | Creative mode flight and item spawning (Creativity plugin) |
| `instabuild.use` | Instant block breaking in creative (Instabuild plugin) |
| `worldedit.wand` | WorldEdit selection wand (`//wand`) |
| `worldedit.selection.*` | All WorldEdit selection commands (`//pos1`, `//pos2`, `//expand`, etc.) |
| `worldedit.region.*` | WorldEdit region operations (`//set`, `//replace`, `//fill`, etc.) |
| `worldedit.clipboard.*` | WorldEdit clipboard (`//copy`, `//paste`, `//cut`, `//flip`, `//rotate`) |
| `worldedit.history.*` | WorldEdit undo/redo (`//undo`, `//redo`) |
| `worldedit.navigation.*` | WorldEdit navigation (`//up`, `//thru`, `//ceil`, etc.) |
| `worldedit.generation.*` | WorldEdit generation commands (`//sphere`, `//cyl`, `//pyramid`, etc.) |
| `essentials.back` | `/back` — teleport to previous location |
| `essentials.top` | `/top` — teleport to the top of the current column |
| `essentials.up` | `/up` — teleport up a set number of blocks |
| `essentials.jump` | `/jump` — teleport to where you're looking |
| `essentials.tpa` | `/tpa` — request to teleport to a player |
| `essentials.tpahere` | `/tpahere` — request a player teleport to you |
| `essentials.tpaccept` | `/tpaccept` — accept a teleport request |
| `essentials.tpdeny` | `/tpdeny` — deny a teleport request |
| `essentials.getpos` | `/getpos` — display your exact coordinates |
| `essentials.clearinventory` | `/clearinventory` — clear your own inventory |
| `essentials.near` | `/near` — list nearby players |
| `essentials.me` | `/me` — action message |

---

## Notes
- Set the world seed in config **before** first server start — it can't be changed after generation
- Setting `world-environment` to `NETHER` creates a nether-style world (darkness, lava lakes, nether terrain)
- Nether worlds are auto-created when `nether-mode` is `"separate"`. The nether world folder appears in the server root (e.g. `different_dimension_nether/`)
- `/dd leave` works from dimension nethers — returns you to the main world
- Don't delete `locations.yml` or `inventories.yml` — players will lose their saved positions and items
- Portal signs stay active until the block is broken
- Players who log in while in the dimension get a reminder that commands are blocked
- Creative permissions persist through relogs while in the creative dimension
- The dimension world is a real world with terrain, mobs, day/night cycle, and weather — just no commands
