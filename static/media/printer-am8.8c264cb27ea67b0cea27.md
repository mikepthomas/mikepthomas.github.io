# Upgrading the frame of my Anet A8

May 28, 2022 by [Mike Thomas](https://github.com/mikepthomas)

The [AM8](https://www.thingiverse.com/thing:2263216) is a direct drop in replacement for the acrylic frame on the Anet A8.

---

## Table of contents

1. [Frame](#frame)
2. [Software](#software)
3. [Printing Parts](#printing-parts)

## Frame

Since upgrading to SuperSlicer, I have pushed my printing speeds to the limit of what stock Anet A8 acrylic frame can cope with.

I have [stiffened the frame as much as I can with 3D printed upgrades](printer-printed-upgrades.md#frame-bracing) however, the frame really could do with a metal frame to print faster.

I had originally intended to migrate from the Anet A8's acrylic frame to a CoreXY [Hypercube](printer-hypercube.md) style printer but instead decided to build a complete Voron 1.8. As [Nero 3D](https://www.onlybenchies.com/) says 2 printers are 1 and 1 printer is none.

During my research for the [Hypercube](printer-hypercube.md), I ruled out the AM8 due to the cost of the frame, however the frame I settled on was an [ALTRAX frame that I have imported from Poland](https://hobby-store.co.uk/frame-kits/altrax-anet-am8-3d-printer-frame.html) for £30.55 plus postage which I thought was resonable.

## Software

I will be using the original Anet A8 mainboard as I will be using it's SKR 1.4 Turbo for the [Voron](printer-voron-1.8.md).

It will be flashed with my [Marlin configuration](https://github.com/mikepthomas/Marlin/tree/2.0.x-Anet3D-V1-5) which I have modified to use an [Anet A6 display](https://shop.anet3d.com/products/lcd-screen-for-a6-a8-e10-e12) to start off with, but once I have built the [Enraged Rabbit Carrot Feeder](printer-enraged-rabbit-carrot-feeder.md) for the Voron I will install Klipper on the Anet A8 mainboard, and use it in conjunction with an SKR Pico to get enough stepper drivers to run [2 M4 extruders](printer-extruders-and-toolheads.md#voron-m4).

## Printing Parts

### Bottom Frame

| Item                                                                   | Quantity | Material                                                                   | Printed | Notes |
| ---------------------------------------------------------------------- | -------- | -------------------------------------------------------------------------- | :-----: | ----- |
| [Bottom_Corner_Plate](https://www.thingiverse.com/thing:2263216/files) | 4        | [PrimaValue ABS (Dark Grey)](printer-filament.md#primavalue-abs-dark-grey) |   :x:   |       |
| [Bottom_Tee_Plate](https://www.thingiverse.com/thing:2263216/files)    | 2        | [PrimaValue ABS (Dark Grey)](printer-filament.md#primavalue-abs-dark-grey) |   :x:   |       |

### Y Axis

| Item                                                                         | Quantity | Material                                                                   | Printed | Notes |
| ---------------------------------------------------------------------------- | -------- | -------------------------------------------------------------------------- | :-----: | ----- |
| [Y_Belt_Block](https://www.thingiverse.com/thing:2263216/files)              | 1        | [PrimaValue ABS (Dark Grey)](printer-filament.md#primavalue-abs-dark-grey) |   :x:   |       |
| [Y_Belt_Tensioner](https://www.thingiverse.com/thing:2263216/files)          | 1        | [PrimaValue ABS (Dark Grey)](printer-filament.md#primavalue-abs-dark-grey) |   :x:   |       |
| [Y_Motor_Mount](https://www.thingiverse.com/thing:2263216/files)             | 1        | [PrimaValue ABS (Dark Grey)](printer-filament.md#primavalue-abs-dark-grey) |   :x:   |       |
| [Y_Rod_Holder](https://www.thingiverse.com/thing:2263216/files)              | 3        | [PrimaValue ABS (Dark Grey)](printer-filament.md#primavalue-abs-dark-grey) |   :x:   |       |
| [Y_Rod_Holder_With_Endstop](https://www.thingiverse.com/thing:2263216/files) | 1        | [PrimaValue ABS (Dark Grey)](printer-filament.md#primavalue-abs-dark-grey) |   :x:   |       |

### Z Axis

| Item                                                                   | Quantity | Material                                                                   | Printed | Notes                                                                 |
| ---------------------------------------------------------------------- | -------- | -------------------------------------------------------------------------- | :-----: | --------------------------------------------------------------------- |
| [PSU_Mount](https://www.thingiverse.com/thing:2579256/files)           | 1        | [PrimaValue ABS (Dark Grey)](printer-filament.md#primavalue-abs-dark-grey) |   :x:   | This is a remix by [oakdesign](https://www.thingiverse.com/oakdesign) |
| [2_Top_Corner_Plate](https://www.thingiverse.com/thing:2263216/files)  | 2        | [PrimaValue ABS (Dark Grey)](printer-filament.md#primavalue-abs-dark-grey) |   :x:   |                                                                       |
| [Z_Motor_Mount_Left](https://www.thingiverse.com/thing:2263216/files)  | 1        | [PrimaValue ABS (Dark Grey)](printer-filament.md#primavalue-abs-dark-grey) |   :x:   |                                                                       |
| [Z_Motor_Mount_Right](https://www.thingiverse.com/thing:2263216/files) | 1        | [PrimaValue ABS (Dark Grey)](printer-filament.md#primavalue-abs-dark-grey) |   :x:   |                                                                       |
| [Z_Rod_Holder_Left](https://www.thingiverse.com/thing:2263216/files)   | 1        | [PrimaValue ABS (Dark Grey)](printer-filament.md#primavalue-abs-dark-grey) |   :x:   |                                                                       |
| [Z_Rod_Holder_Right](https://www.thingiverse.com/thing:2263216/files)  | 1        | [PrimaValue ABS (Dark Grey)](printer-filament.md#primavalue-abs-dark-grey) |   :x:   |                                                                       |

### Electronics Housing

| Item                                                                   | Quantity | Material                                                                   | Printed | Notes                                                                         |
| ---------------------------------------------------------------------- | -------- | -------------------------------------------------------------------------- | :-----: | ----------------------------------------------------------------------------- |
| [Main_Board](https://www.thingiverse.com/thing:2406117/files)          | 1        | [PrimaValue ABS (Dark Grey)](printer-filament.md#primavalue-abs-dark-grey) |   :x:   | This is a remix by [zadthebad](https://www.thingiverse.com/zadthebad)         |
| [Main_Board_Cover](https://www.thingiverse.com/thing:2861394/files)    | 1        | [PrimaValue ABS (Dark Grey)](printer-filament.md#primavalue-abs-dark-grey) |   :x:   | This is a remix by [AngelKing86](https://www.thingiverse.com/AngelKing86)     |
| [Main_Board_FanGrill](https://www.thingiverse.com/thing:2861394/files) | 1        | [PrimaValue ABS (Dark Grey)](printer-filament.md#primavalue-abs-dark-grey) |   :x:   | This is a remix by [AngelKing86](https://www.thingiverse.com/AngelKing86)     |
| [Dual_Mosfet_Holder](https://www.thingiverse.com/thing:4635678/files)  | 1        | [PrimaValue ABS (Dark Grey)](printer-filament.md#primavalue-abs-dark-grey) |   :x:   | This is a remix by [CAVE_news](https://www.thingiverse.com/CAVE_news)         |
| [Mosfet_Board_cover](https://www.thingiverse.com/thing:2406117/files)  | 2        | [PrimaValue ABS (Dark Grey)](printer-filament.md#primavalue-abs-dark-grey) |   :x:   | This is a remix by [zadthebad](https://www.thingiverse.com/zadthebad)         |
| [Raspberry_Pi_Holder](https://www.thingiverse.com/thing:2901269/files) | 1        | [PrimaValue ABS (Dark Grey)](printer-filament.md#primavalue-abs-dark-grey) |   :x:   | This is a remix by [nowkillkennys](https://www.thingiverse.com/nowkillkennys) |

### LCD Mount

| Item                                                              | Quantity | Material                                                                   | Printed | Notes                                                             |
| ----------------------------------------------------------------- | -------- | -------------------------------------------------------------------------- | :-----: | ----------------------------------------------------------------- |
| [LCD_Base_Left](https://www.thingiverse.com/thing:3116968/files)  | 1        | [PrimaValue ABS (Dark Grey)](printer-filament.md#primavalue-abs-dark-grey) |   :x:   | This is a remix by [bcreigh](https://www.thingiverse.com/bcreigh) |
| [LCD_Base_Right](https://www.thingiverse.com/thing:3116968/files) | 1        | [PrimaValue ABS (Dark Grey)](printer-filament.md#primavalue-abs-dark-grey) |   :x:   | This is a remix by [bcreigh](https://www.thingiverse.com/bcreigh) |
| [LCD_Cover](https://www.thingiverse.com/thing:3116968/files)      | 1        | [PrimaValue ABS (Dark Grey)](printer-filament.md#primavalue-abs-dark-grey) |   :x:   | This is a remix by [bcreigh](https://www.thingiverse.com/bcreigh) |

### Extras

| Item                                                            | Quantity | Material                                                                   | Printed | Notes                                                                     |
| --------------------------------------------------------------- | -------- | -------------------------------------------------------------------------- | :-----: | ------------------------------------------------------------------------- |
| [2040_End_Cap](https://www.thingiverse.com/thing:2396127/files) | 5        | [PrimaValue ABS (Dark Grey)](printer-filament.md#primavalue-abs-dark-grey) |   :x:   | This is a remix by [Reediculous](https://www.thingiverse.com/Reediculous) |

## Assembly

The AM8 thingyverse page provides [a nice build guide with the order of assembly](https://cdn.thingiverse.com/assets/18/96/c9/fc/38/Build_Guide.pdf).
