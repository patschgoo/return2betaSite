# Vote

## What It Does
Vote lets players start and participate in community votes to change the game world — like setting the time to day/night or changing the weather.

## How It Affects You
As a Member, you can **start votes** for weather and time changes, **vote yes/no** on any active vote, and **start kick votes** against misbehaving players.

## Vote Types Available to Members

| Vote Type | How to Start | What It Does | % Needed | Cooldown |
|-----------|-------------|--------------|----------|----------|
| **Sun** | `/vote sun` | Set weather to sunny | 60% | 5 min after success, 10 min after fail |
| **Rain** | `/vote rain` | Set weather to rainy | 80% | 5 min after success, 10 min after fail |
| **Day** | `/vote day` | Set time to daytime | 60% | 10 min after success, 15 min after fail |
| **Night** | `/vote night` | Set time to nighttime | 80% | 10 min after success, 15 min after fail |
| **Kick** | `/vote kick <player>` | Kick a player from the server | 70% | 1 min after success, 5 min after fail |

## Commands
| Command | Description |
|---------|-------------|
| `/vote yes` | Vote yes on the active vote. |
| `/vote no` | Vote no on the active vote. |
| `/vote <type>` | Start a new vote (sun, rain, day, night, kick). |
| `/vote list` | Display list of votes you can start. |

## How Voting Works
- All votes last **60 seconds**.
- A **minimum of 1 vote** is required for a vote to count.
- Players who don't vote are ignored (only yes/no votes count).
- You can change your vote during the voting period.
- Only one vote can be active at a time.

## Notes
- Visitors can vote yes/no on sun, rain, day, and night — but only Members can **start** those votes and participate in kick votes.
- You cannot kick players marked as unkickable (moderators and above).
