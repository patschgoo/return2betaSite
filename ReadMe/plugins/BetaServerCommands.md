# BetaServerCommands

## What It Does
BetaServerCommands provides operator commands for changing selected server settings and performing a controlled save-and-stop restart sequence.

## How It Affects You
If staff or a successful vote triggers a restart, the plugin counts down, saves the server, and stops it. Players are disconnected while the hosting panel or an operator starts the process again.

## Operator Commands
| Command | Description |
|---------|-------------|
| `/restart [delaySeconds]` | Count down, run `save-all`, and stop the server. |
| `/server <setting> <value>` | Change a supported `server.properties` setting. |

## Notes
- Both commands default to operators through `betaservercommands.restart` and `betaservercommands.server`.
- External auto-start is disabled with `enabled=false` in `restart.properties`.
- The configured `nohup ./start.sh` command is not used while disabled.
- On Gravel Host, leave external auto-start disabled unless the panel documentation confirms that user scripts may launch the server process. The panel or its watchdog should own process startup.
- A staged `/restart 0` test confirmed that save and stop complete without attempting the external command.
