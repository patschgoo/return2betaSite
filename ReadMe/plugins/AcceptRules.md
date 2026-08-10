# AcceptRules

## What It Does
AcceptRules requires new players to read and accept the server rules before they can build or interact with the world. Until you accept the rules, you cannot place or break blocks.

## How It Affects You
- When you first join, you must read the rules and accept them before you can start playing.
- If you try to build without accepting, the message directs you to `/rules` and `/acceptrules`.
- Once accepted, you will see: *"You have successfully accepted the rules! Have fun!"*
- You only need to accept the rules once.

## Commands
| Command | Description |
|---------|-------------|
| `/rules` | View the server rules (via Essentials). |
| `/acceptrules` | Accept the server rules so you can start building. |

## Notes
- Visitors have `essentials.rules`, and AcceptRules does not require a separate permission for `/acceptrules`.
- The intended first-join order is `/register` or `/login`, `/rules`, then `/acceptrules`.
- Configuration and plugin metadata verify command access; complete interaction should still be checked once with a real new-player account after deployment.
