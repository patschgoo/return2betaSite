# WirelessRedstone

## What It Does
WirelessRedstone lets you create wireless redstone signals using signs. You can transmit and receive redstone signals over any distance without physical redstone wiring.

## How It Affects You
Members can create wireless redstone transmitter and receiver signs.

## How to Use
1. Place a sign and write a **transmitter tag** on the first line (sends signal).
2. Place another sign and write a **receiver tag** on the first line (receives signal).
3. Give both signs the **same channel name** on the second line.
4. Power the transmitter with redstone, and the receiver will output a redstone signal.

## Sign Format Variations

### Transmitter Signs
Any of these on the first line will create a transmitter:
- `[wr_t]`
- `[WR_T]`
- `[transmitter]`
- `[Transmitter]`
- `[TRANSMITTER]`

### Receiver Signs
Any of these on the first line will create a receiver:
- `[wr_r]`
- `[WR_R]`
- `[receiver]`
- `[Receiver]`
- `[RECEIVER]`

### Sign Layout
```
Line 1: [transmitter]    or    [receiver]
Line 2: channelName       or    channelName
Line 3: (empty)                 (empty)
Line 4: (empty)                 (empty)
```

## Commands
There are no specific commands — everything works through signs.

## Tips
- Transmitters and receivers work across any distance in the same world.
- Great for remote door openers, trap triggers, or hidden mechanisms.
- Chunks within 4 chunks of wireless redstone signs are kept loaded to ensure signals work.
- Channel names are case-sensitive — make sure they match exactly on transmitter and receiver.
