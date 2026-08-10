# ServerHealth

## What It Does
ServerHealth monitors effective TPS and storage use, writes a rotating operational log, and applies tiered retention to world backups and ServerLogSaver archives.

## Operator Commands
| Command | Description |
|---------|-------------|
| `/serverhealth status` | Report TPS, free space, server size, backup size, log-backup size, Dynmap size, and retention candidates. |
| `/serverhealth cleanup` | Run configured backup and log-archive retention immediately. |
| `/serverhealth reload` | Reload settings and reschedule monitoring tasks. |

The alias `/health` is also available. Commands require `serverhealth.admin`, which defaults to operators.

## Monitoring
- Sample and log health every **5 minutes**.
- Warn below **17 TPS**.
- Warn below **2 GB** free disk space.
- Rotate `plugins/ServerHealth/monitor.log` at **5 MB**, retaining five rotated logs.
- Report Dynmap tiles older than **180 days** without deleting them.

## Retention
- World backups: keep 24 newest, one daily for 30 days, and one weekly for 180 days.
- Server log archives: keep 14 newest, one daily for 30 days, and one weekly for 180 days.
- Apply retention every **6 hours**.
- Prefer timestamps embedded in recognized archive filenames, falling back to filesystem modification time.

## Notes
- Cleanup only deletes ZIP archives in the configured backup directories.
- Dynmap is report-only because deleting tiles by age can remove valid map coverage.
- The plugin was compiled for Java 7-compatible bytecode and tested against the active Poseidon server API on Java 8.