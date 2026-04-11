# LegacyVoiceChat

## What It Does
LegacyVoiceChat adds proximity-based voice chat to the server, allowing nearby players to communicate using voice instead of text. It also supports **group voice chat**, letting players create or join private voice channels that work regardless of distance.

## How It Affects You
If you have a compatible client-side mod installed, you can talk to players within **48 blocks** of you using voice chat. Players further away won't hear you. You can also create or join voice groups to talk with specific players across any distance.

## How to Connect
- Connect to the voice server on **port 25566** (same server IP, different port).
- The voice server runs alongside the game server.
- Connection is automatic once the client mod is installed — the server sends the voice port and auth token when you join.

---

## Keybinds

All keybinds are configured in the **client-side mod**, not on the server. Below are the default keybinds and what they do.

### Voice Controls

| Action | Default Key | Description |
|---|---|---|
| **Push to Talk** | `V` | Hold to transmit your voice to nearby players (within 48 blocks) |
| **Toggle Mute** | `M` | Mute/unmute your microphone — when muted, no one can hear you |
| **Toggle Deafen** | `N` | Deafen/undeafen yourself — when deafened, you can't hear anyone and no one can hear you |
| **Open Voice Chat GUI** | `G` | Opens the voice chat settings and group management menu |

### Group Voice Chat Controls

| Action | Default Key / Method | Description |
|---|---|---|
| **Create Group** | Via GUI (`G`) | Create a private voice group with an optional password — members can talk at any distance |
| **Join Group** | Via GUI (`G`) | Join an existing voice group by name (and password if required) |
| **Leave Group** | Via GUI (`G`) | Leave your current voice group and return to proximity-only voice |

### How to Change Keybinds
1. Open your Minecraft client settings or the voice chat mod's settings menu
2. Look for the voice chat keybind section
3. Reassign push-to-talk, mute, deafen, or GUI keys as desired
4. Changes take effect immediately — no restart needed

---

## Voice Chat Modes

### Proximity Voice (Default)
- Talk to players within **48 blocks** of you
- Audio fades with distance — closer players sound louder
- Activated by holding the push-to-talk key (`V`)

### Group Voice
- Create or join a private voice channel through the GUI (`G`)
- Group members can hear each other **regardless of distance** — even across worlds
- Groups can be password-protected
- Each group has a creator and members can join/leave freely

---

## Player States

Other players with the voice mod can see your current voice state:

| State | Icon | Meaning |
|---|---|---|
| **Connected** | Speaker icon | Voice chat is active and working |
| **Muted** | Crossed-out microphone | You have muted yourself — you can still hear others |
| **Deafened** | Crossed-out headphone | You can't hear anyone and no one can hear you |
| **No Mod** | No icon | Player doesn't have the voice chat mod installed |

---

## Notes
- Requires a compatible client-side mod to use voice chat.
- Voice chat is proximity-based by default — only nearby players can hear you.
- The `audio.max_distance` setting controls the maximum hearing range (default: **48 blocks**).
- Group voice chat bypasses the distance limit for group members.
- Groups can be password-protected to keep conversations private.
- The server cannot control client keybinds — those are set in your mod options.
- Player presence (muted/deafened status) is synced to all nearby players with the mod.
