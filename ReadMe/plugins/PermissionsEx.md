# PermissionsEx

## What It Does
PermissionsEx manages the server's permission system, controlling which commands and features each player rank can access.

## How It Affects You
Your rank determines what you can do on the server. The rank hierarchy is:

| Rank | Description |
|------|-------------|
| **Visitor** | New players. Can authenticate, view rules, accept them, list tutorials, use DynamicLight, set personal view distance, use warps, and access basic commands. |
| **Member** | Full players. Access to homes, economy, clans, protection, quests, and much more. |
| **Mod** | Moderators (staff). |
| **Admin** | Administrators (staff). |
| **Owner** | Server owner. |

## How to Rank Up
- New players start as **Visitor**.
- Use the **RankUp sign** near spawn to become a **Member** (see RankUp plugin).
- Member is the standard player rank with full access to all player features.

## Notes
- Your rank prefix appears before your name in chat (e.g., `[Member]`).
- Each rank inherits all permissions from the rank below it.
- Visitor onboarding is supported by `essentials.rules`, `tuto.list`, `dynamiclight.use`, and `playerviewdistance.use`. AuthMe register/login defaults are open, and AcceptRules does not gate `/acceptrules` behind a permission node.
