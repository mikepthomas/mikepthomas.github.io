# Upgrading the Anet A8 to an AM8 Switchwire

July 23, 2022 by [Mike Thomas](https://github.com/mikepthomas),
Updated August 1, 2022

Upgrading the Anet A8 to a metal frame with CoreXZ kinematics with the [AM8 Switchwire Mod](https://github.com/maximilian-foerg/AM8-Switchwire-Mod).

---

## Table of contents

1. [Frame](#frame)
2. [Software](#software)
3. [Sourcing Parts](#sourcing-parts)
4. [Printing Parts](#printing-parts)

## Frame

Since upgrading to SuperSlicer, I have pushed my printing speeds to the limit of what stock Anet A8 acrylic frame can cope with.

I have [stiffened the frame as much as I can with 3D printed upgrades](printer-printed-upgrades.md#frame-bracing) however, the frame really could do with a metal frame to print faster.

I had originally intended to migrate from the Anet A8's acrylic frame to a CoreXY [Hypercube](printer-hypercube.md) style printer but instead decided to build a complete Voron 1.8. As [Nero 3D](https://www.onlybenchies.com/) says 2 printers are 1 and 1 printer is none.

During my research for the [Hypercube](printer-hypercube.md), I ruled out the AM8 due to the cost of the frame, however the frame I settled on was an [ALTRAX frame that I have imported from Poland](https://hobby-store.co.uk/frame-kits/altrax-anet-am8-3d-printer-frame.html) for £30.55 plus postage which I thought was resonable.

After purchasing the frame, I found a [project on Reddit](https://www.reddit.com/r/AnetA8/comments/rvt3zt) to convert the Anet A8 to a CoreXZ style printer similar to the [Voron Switchwire](https://vorondesign.com/voron_switchwire)

## Software

I will be using the original Anet A8 mainboard with an [Anet A6 display](https://shop.anet3d.com/products/lcd-screen-for-a6-a8-e10-e12) as I will be using it's SKR 1.4 Turbo for the [Voron](printer-voron-1.8.md).

I will install Klipper on the Anet A8 mainboard, and use it in conjunction with an [SKR Pico](https://github.com/bigtreetech/SKR-Pico) as the Pico has no way to run a display with an encoder and to be able to get enough stepper drivers to run [2 M4 extruders](printer-extruders-and-toolheads.md#voron-m4).

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

## Printing Parts

### Accessories

| Item                                                                                                                  | Quantity | Material                                               | Printed | Notes |
| --------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------ | :-----: | ----- |
| [Foot Left](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/Accessories/Foot%20Left%202x.stl)   | 2        | [Ziro TPU (Black)](printer-filament.md#ziro-tpu-black) |   :x:   |       |
| [Foot Right](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/Accessories/Foot%20Right%202x.stl) | 2        | [Ziro TPU (Black)](printer-filament.md#ziro-tpu-black) |   :x:   |       |

### Electronics

| Item                                                                                                                     | Quantity | Material                                                                   | Printed | Notes                                                             |
| ------------------------------------------------------------------------------------------------------------------------ | -------- | -------------------------------------------------------------------------- | :-----: | ----------------------------------------------------------------- |
| [PSU_Mount](https://www.thingiverse.com/thing:2430529/files)                                                             | 2        | [PrimaValue ABS (Dark Grey)](printer-filament.md#primavalue-abs-dark-grey) |   :x:   | This is a remix by [dziliak](https://www.thingiverse.com/dziliak) |
| [raspberry_pi_mount](https://github.com/VoronDesign/Voron-Switchwire/blob/master/STL/Electronics/raspberry_pi_mount.stl) | 1        | [PrimaValue ABS (Dark Grey)](printer-filament.md#primavalue-abs-dark-grey) |   :x:   | For the SKR Pico as it has the same bolt pattern.                 |

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
