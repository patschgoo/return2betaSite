# Backup

## What It Does
Backup automatically saves the world data at regular intervals, protecting everyone's builds from data loss.

## How It Affects You
Every **120 minutes**, the server automatically creates a backup while players are online. You may see brief messages:
- *"Start backup"* — A backup is beginning.
- *"Finished backup"* — The backup is complete.

## Retention
- Keep the **24 newest** world backups.
- Keep one backup per day for **30 days**.
- Keep one backup per week for **180 days**.
- ServerHealth applies retention every **6 hours**.
- `MaximumBackups=400` is a safety ceiling that lets ServerHealth select long-term checkpoints before the Backup plugin deletes them.

## Notes
- Backups are zipped and stored automatically.
- Backups only run when players are online.
- Manual `/backup [name]` backups are restricted to operators.
