# Return2Beta Website

The official website for **Return2Beta**, a Minecraft Beta 1.7.3 community server running [Poseidon](https://github.com/retromcorg/Poseidon) (a Bukkit b1.7.3 fork).

**Live at:** [return2beta.com](https://return2beta.com)

## Pages

- **Home** – Server overview, live player count, and a floating chat widget
- **Map** – Dynmap world viewer (iframe to map.return2beta.com)
- **Plugins** – Browsable plugin list with crafting-table UI and per-plugin readme files
- **Wiki** – Embedded archived Minecraft Wiki via Wayback Machine (click-to-load, dark mode toggle)
- **Chat** – Full web chat bridged to Discord, with chat rules
- **How to Join** – Step-by-step launcher guides, server IPs, and recommended mods
- **Games** – Browser-based Minecraft-themed mini-games (Flappy Chicken, Blocktris, Hatch, Minecreeper, Block Crush, Mine Blocks)
- **Worlds** – World download information
- **Legal / Privacy** – Impressum (DDG §5) and GDPR-compliant privacy policy (EN + DE)

## Tech

- Static site hosted on GitHub Pages
- Chat backend: Node.js + WebSocket server bridged to Discord via discord.js
- Self-hosted Minecraft font via [IdreesInc/Minecraft-Font](https://github.com/IdreesInc/Minecraft-Font)
- Chat widget present on all pages (floating panel with WebSocket connection)
- Third-party iframes (Mine Blocks, Wayback Machine Wiki) use click-to-load consent wrappers for GDPR/TDDDG compliance