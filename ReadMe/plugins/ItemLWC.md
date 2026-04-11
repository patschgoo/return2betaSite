# ItemLWC

## What It Does
ItemLWC extends the LWC protection system by letting you interact with protected blocks using items instead of commands. It adds physical interaction triggers for creating and managing protections.

## How It Affects You
- You can create **private**, **public**, and **password** protections.
- Protections on unused blocks automatically expire after **30 days** of player inactivity.
- Expired protections are scanned every 6 hours.

## Protection Costs
| Type | Cost |
|------|------|
| Private | $100 |
| Password | $75 |
| Public | $25 |

## Interaction Items
| Item | Action |
|------|--------|
| **Lever** (ID 69) | Trigger protection on a block. |
| **Iron Ingot** (ID 265) | Unlock a password-protected block. |
| **Clock** (ID 347) | Check how long a protection has been active. |

## Tips
- Place a lever on a chest to trigger the protection dialogue.
- Use an iron ingot on a password-protected block to enter the password.
- Use a clock on a protected block to see when it was last accessed.
