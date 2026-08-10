# ServerLogSaver

## What It Does
ServerLogSaver automatically backs up the server log file at regular intervals, keeping a history of server activity.

## How It Affects You
This is a background plugin with no player impact. It ensures server logs are preserved for staff to review if issues arise.

## Notes
- Logs are backed up every **24 hours** (1440 minutes).
- A size rotation also occurs when the active log reaches **10 MB**.
- Backups are compressed (zipped) to save space.
- ServerHealth keeps the 14 newest archives, one daily archive for 30 days, and one weekly archive for 180 days.
- Retention uses timestamps in archive filenames, so copied files retain their correct age ordering.
- No commands for regular players.
