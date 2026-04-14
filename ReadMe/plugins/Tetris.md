# Tetris

## What It Does
Tetris is a block-based Tetris game built inside Minecraft. Play Tetris on a physical game board made of wool blocks in the world, complete with music and a countdown timer.

## How It Affects You
Find a Tetris station (gold block) in the world, stand on it, and type `/tetris` to start a game. The plugin builds a glass playing field and you control falling tetrominoes. Your scores are tracked on a server-wide highscore board.

## Commands
| Command | Description |
|---------|-------------|
| `/tetris` | Start or stop a Tetris game (stand on a gold block) |
| `/highscore` | View the top 5 Tetris scores |
| `/tspec <player>` | Teleport to spectate another player's game |

## How to Play
1. Find a **gold block** in the world (Tetris station).
2. Stand on it and type `/tetris`.
3. A glass playing field builds itself around you.
4. Control the falling blocks using clicks and movement.
5. Clear rows to score points — the game speeds up over time.
6. When the board fills up, it's game over. The field clears itself after a short delay.
7. Type `/tetris` again to stop early.

## Notes
- The game plays the Tetris theme music using a note block (if one is placed under the station).
- The playing field restores the original terrain when the game ends.
- Your score is compared against the top 5 — beat a highscore and it's saved automatically.
- You can watch other players' games with `/tspec`.
