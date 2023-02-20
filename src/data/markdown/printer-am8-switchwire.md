# Upgrading the Anet A8 to an AM8 Switchwire

July 23, 2022 by [Mike Thomas](https://github.com/mikepthomas),
Updated February 20, 2023

Upgrading the Anet A8 to a metal frame with CoreXZ kinematics with the [AM8 Switchwire Mod](https://github.com/maximilian-foerg/AM8-Switchwire-Mod).

---

## Table of contents

1. [Frame](#frame)
2. [Software](#software)
3. [Sourcing Parts](#sourcing-parts)
4. [Printing Parts](#printing-parts)

## Frame

Since upgrading to SuperSlicer, I have pushed my printing speeds to the limit of what stock Anet A8 acrylic frame can cope with. I have [stiffened the frame as much as I can with 3D printed upgrades](printer-printed-upgrades.md#frame-bracing) however, the frame really could do with a metal frame to print faster.

I had originally intended to migrate from the Anet A8's acrylic frame to a CoreXY [Hypercube](printer-hypercube.md) style printer but instead decided to build a complete Voron 1.8. As [Nero 3D](https://www.onlybenchies.com/) says 2 printers are 1 and 1 printer is none, therefore I would like to keep at least one working printer before heavilly modifing a working one.

During my research for the [Hypercube](printer-hypercube.md), I ruled out the AM8 due to the cost of the frame, however the frame I settled on was an [ALTRAX frame that I have imported from Poland](https://hobby-store.co.uk/frame-kits/altrax-anet-am8-3d-printer-frame.html) for £30.55 plus postage which I thought was resonable.

After purchasing the frame, I found a [project on Reddit](https://www.reddit.com/r/AnetA8/comments/rvt3zt) to convert the Anet A8 to a CoreXZ style printer similar to the [Voron Switchwire](https://vorondesign.com/voron_switchwire).

## Software

I will be using a [SKR Pico](https://github.com/bigtreetech/SKR-Pico) to run the printer. The SKR Pico currently does not work with [Marlin firmware](https://marlinfw.org/) therefore I will be using [Klipper](https://www.klipper3d.org/). It also does not have a port to connect a display with an encoder so I plan on creating a wiring adapter to connect a [BigTreeTech Mini 12864](https://github.com/bigtreetech/MINI-12864) to the Raspberry Pi GPIO pins, and connecting to it using the [RPi as a secondary MCU](https://www.klipper3d.org/RPi_microcontroller.html).

## Sourcing Parts

### Fasteners

| Item               | Quantity | Received | Notes |
| ------------------ | -------- | -------- | ----- |
| M2 nuts            | 6        | 50       |       |
| M2x10 SHCS         | 4        | 100      |       |
| M2x14 SHCS         | 2        | 50       |       |
| M3x12 SHCS         | 2        | 2        |       |
| M3x16 SHCS         | 1        | 1        |       |
| M3x25 BHCS         | 4        | 25       |       |
| M3x30 BHCS         | 23       | 25       |       |
| M3 0.5mm Spacer    | 18       | 50       |       |
| M3 nuts            | 3        | 3        |       |
| M3 Threaded Insert | 15       | 28       |       |
| M5x10 BHCS         | 31       | 50       |       |
| M5x30 BHCS         | 6        | 7        |       |
| M5 T-Nut           | 25       | 47       |       |

### Motion

| Item                              | Quantity | Received | Notes |
| --------------------------------- | -------- | -------- | ----- |
| F695 Bearing                      | 18       | 20       |       |
| GT2 16T Pulley (5mm ID 6mm W)     | 3        | 3        |       |
| GT2 Open Belt LL-2GT-6 (6mm wide) | 5m       | 5m       |       |
| LM8LUU Linear Bearing             | 2        | 2        |       |

### Electronics

| Item                                 | Quantity | Received | Notes                                  |
| ------------------------------------ | -------- | -------- | -------------------------------------- |
| 40x40x20 Centrifugal Fan (12V)       | 1        | 1        |                                        |
| 40x40x10 Axial Fan (12V)             | 1        | 1        |                                        |
| E3D V6 Bowden Hotend Kit (12V)       | 1        |          | Will use the Anet A8 Extruder to start |
| Mini 12864 Display                   | 1        | 1        |                                        |
| NEMA17 Motor 17HS15-1504S1           | 3        | 3        |                                        |
| NEMA17 Motor 17HS08-1004S            | 1        | 1        |                                        |
| Omron TL-Q5MC2 - NPN Inductive Probe | 1        | 1        |                                        |
| SKR Pico                             | 1        | 1        |                                        |
| Raspberry Pi Zero 2W                 | 1        | 1        |                                        |

## Printing Parts

### Accessories

| Item                                                                                                                  | Quantity | Material                                               | Printed | Notes |
| --------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------ | :-----: | ----- |
| [Foot Left](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/Accessories/Foot%20Left%202x.stl)   | 2        | [Ziro TPU (Black)](printer-filament.md#ziro-tpu-black) |   :x:   |       |
| [Foot Right](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/Accessories/Foot%20Right%202x.stl) | 2        | [Ziro TPU (Black)](printer-filament.md#ziro-tpu-black) |   :x:   |       |

### Electronics

| Item                                                                                                            | Quantity | Material                                                                   | Printed | Notes                                                                                |
| --------------------------------------------------------------------------------------------------------------- | -------- | -------------------------------------------------------------------------- | :-----: | ------------------------------------------------------------------------------------ |
| [PSU_Mount](https://www.thingiverse.com/thing:2430529/files)                                                    | 2        | [PrimaValue ABS (Dark Grey)](printer-filament.md#primavalue-abs-dark-grey) |   :x:   | This is a remix by [dziliak](https://www.thingiverse.com/dziliak)                    |
| [skr_pico_mount_v2](https://www.printables.com/model/244991-ender-3-skr-pico-mount-for-voron-switchwire-conver) | 1        | [PrimaValue ABS (Dark Grey)](printer-filament.md#primavalue-abs-dark-grey) |   :x:   | This is a remix by [thomasfjen](https://www.printables.com/social/222021-thomasfjen) |

### XZ Axis

| Item                                                                                                                                                                           | Quantity | Material                                                                   | Printed | Notes |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | -------------------------------------------------------------------------- | :-----: | ----- |
| [XZ Idler Pulley Mount Left A](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/XZ%20Axis/XZ%20Idler%20Pulley%20Mount%20Left%20A.stl)                     | 1        | [PrimaValue ABS (Dark Grey)](printer-filament.md#primavalue-abs-dark-grey) |   :x:   |       |
| [XZ Idler Pulley Mount Right A](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/XZ%20Axis/XZ%20Idler%20Pulley%20Mount%20Right%20A.stl)                   | 1        | [PrimaValue ABS (Dark Grey)](printer-filament.md#primavalue-abs-dark-grey) |   :x:   |       |
| [XZ Joint Left A](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/XZ%20Axis/XZ%20Joint%20Left%20A.stl)                                                   | 1        | [PrimaValue ABS (Dark Grey)](printer-filament.md#primavalue-abs-dark-grey) |   :x:   |       |
| [XZ Joint Left B with Z Endstop Screw](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/XZ%20Axis/XZ%20Joint%20Left%20B%20with%20Z%20Endstop%20Screw.stl) | 1        | [PrimaValue ABS (Dark Grey)](printer-filament.md#primavalue-abs-dark-grey) |   :x:   |       |
| [XZ Joint Right A](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/XZ%20Axis/XZ%20Joint%20Right%20A.stl)                                                 | 1        | [PrimaValue ABS (Dark Grey)](printer-filament.md#primavalue-abs-dark-grey) |   :x:   |       |
| [XZ Joint Right B](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/XZ%20Axis/XZ%20Joint%20Right%20B.stl)                                                 | 1        | [PrimaValue ABS (Dark Grey)](printer-filament.md#primavalue-abs-dark-grey) |   :x:   |       |
| [XZ Motor Mount](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/XZ%20Axis/X_Z%20Motor%20Mount%202x.stl)                                                 | 2        | [PrimaValue ABS (Dark Grey)](printer-filament.md#primavalue-abs-dark-grey) |   :x:   |       |
| [Z Rod Mount](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/XZ%20Axis/Z%20Rod%20Mount%204x.stl)                                                        | 4        | [PrimaValue ABS (Dark Grey)](printer-filament.md#primavalue-abs-dark-grey) |   :x:   |       |
| [XZ Idler Pulley Mount Left B](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/XZ%20Axis/%5BA%5D%20XZ%20Idler%20Pulley%20Mount%20Left%20B.stl)           | 1        | [PrimaValue ABS (Dark Grey)](printer-filament.md#primavalue-abs-dark-grey) |   :x:   |       |
| [XZ Idler Pulley Mount Right B](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/XZ%20Axis/%5BA%5D%20XZ%20Idler%20Pulley%20Mount%20Right%20B.stl)         | 1        | [PrimaValue ABS (Dark Grey)](printer-filament.md#primavalue-abs-dark-grey) |   :x:   |       |
| [Z Endstop Mount](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/XZ%20Axis/%5BA%5D%20Z%20Endstop%20Mount.stl)                                           | 1        | [PrimaValue ABS (Dark Grey)](printer-filament.md#primavalue-abs-dark-grey) |   :x:   |       |

#### Printhead

| Item                                                                                                                                                              | Quantity | Material                                                                   | Printed | Notes        |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | -------------------------------------------------------------------------- | :-----: | ------------ |
| [Belt Clamp Body](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/XZ%20Axis/Printheads/Anet%20A8/Belt%20Clamp%20Body.stl)                   | 1        | [PrimaValue ABS (Dark Grey)](printer-filament.md#primavalue-abs-dark-grey) |   :x:   |              |
| [Belt Clamp Lid](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/XZ%20Axis/Printheads/Anet%20A8/Belt%20Clamp%20Lid%202x.stl)                | 2        | [PrimaValue ABS (Dark Grey)](printer-filament.md#primavalue-abs-dark-grey) |   :x:   |              |
| [X Rod Mount](<https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/XZ%20Axis/Printheads/Anet%20A8/%5BA%5D%20X%20Rod%20Mount%20(45mm)%202x.stl>) | 2        | [PrimaValue ABS (Dark Grey)](printer-filament.md#primavalue-abs-dark-grey) |   :x:   | 45mm version |

### Y Axis

| Item                                                                                                                                            | Quantity | Material                                                                   | Printed | Notes |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | -------- | -------------------------------------------------------------------------- | :-----: | ----- |
| [Belt Clamp](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/Y%20Axis/Belt%20Clamp.stl)                                   | 1        | [PrimaValue ABS (Dark Grey)](printer-filament.md#primavalue-abs-dark-grey) |   :x:   |       |
| [Y Idler Pulley Mount A](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/Y%20Axis/Y%20Idler%20Pulley%20Mount%20A.stl)     | 1        | [PrimaValue ABS (Dark Grey)](printer-filament.md#primavalue-abs-dark-grey) |   :x:   |       |
| [Y Idler Pulley Mount B](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/Y%20Axis/Y%20Idler%20Pulley%20Mount%20B.stl)     | 1        | [PrimaValue ABS (Dark Grey)](printer-filament.md#primavalue-abs-dark-grey) |   :x:   |       |
| [Y Motor Mount](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/Y%20Axis/Y%20Motor%20Mount.stl)                           | 1        | [PrimaValue ABS (Dark Grey)](printer-filament.md#primavalue-abs-dark-grey) |   :x:   |       |
| [Y Rod Mount](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/Y%20Axis/Y%20Rod%20Mount%203x.stl)                          | 3        | [PrimaValue ABS (Dark Grey)](printer-filament.md#primavalue-abs-dark-grey) |   :x:   |       |
| [Y Rod Mount with Endstop](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/Y%20Axis/Y%20Rod%20Mount%20with%20Endstop.stl) | 1        | [PrimaValue ABS (Dark Grey)](printer-filament.md#primavalue-abs-dark-grey) |   :x:   |       |

**_NOTE:_** Colours are provisional, I will probably add in Black as an accent colour for some parts.
