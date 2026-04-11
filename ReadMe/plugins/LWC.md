# LWC (Lightweight Chest Protection)

## What It Does
LWC lets you protect chests, furnaces, dispensers, doors, and trap doors from being accessed or broken by other players. Members can create private, public, and password-protected locks.

## How It Affects You
- You can lock chests, furnaces, dispensers, wooden doors, iron doors, and trap doors.
- Private protections can only be opened by you (and players you allow).
- Public protections can be opened by anyone but only broken by you.
- Password protections require a password to open.
- Protections cost money (see Command iConomy section below).

## Protection Costs
| Protection Type | Cost |
|----------------|------|
| `/cprivate` | $100 |
| `/cpassword` | $75 |
| `/cpublic` | $25 |

## Commands
| Command | Description |
|---------|-------------|
| `/cprivate` | Lock a block as private. Punch the block after running this command. |
| `/cpublic` | Lock a block as public (anyone can use, only you can break). |
| `/cpassword <pass>` | Lock a block with a password. |
| `/cunlock <pass>` | Unlock a password-protected block. |
| `/cremove` | Remove protection from a block you own. |
| `/cinfo` | View protection info on a block. |
| `/cmodify <player>` | Add a player to your private protection. |
| `/cmodify -<player>` | Remove a player from your private protection. |
| `/climits` | Check how many protections you have. |

## Tips
- Always protect your chests and doors to keep your items safe!
- Use `/cprivate` on chests as soon as you place them.
- You can add friends to your chest by using `/cmodify <playername>` then clicking the chest.
