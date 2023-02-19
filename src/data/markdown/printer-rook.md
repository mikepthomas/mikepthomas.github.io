# 3D Printing a Mostly 3D Printed 3D Printer

Febuary 2, 2023 by [Mike Thomas](https://github.com/mikepthomas),
Updated Febuary 19, 2023

Sourcing and printing parts to assemble a [Rook MK1 3D Printer](https://github.com/rolohaun/Rook).

---

## Table of contents

1. [Sourcing Parts](#sourcing-parts)
2. [Printing Parts](#printing-parts)

## Sourcing Parts

### Fasteners

| Item               | Quantity | Received | Notes                          |
| ------------------ | -------- | -------- | ------------------------------ |
| M3x6               | 10       |          |                                |
| M3x10              | 22       |          |                                |
| M3x12              | 2        |          |                                |
| M3x16              | 6        |          |                                |
| M3x18              | 2        |          |                                |
| M3x25              | 8        |          |                                |
| M3 Threaded Insert | 100      |          | BOM specifies more than needed |
| M5x16              | 12       |          |                                |
| M5x25              | 4        |          |                                |
| M5x30              | 2        |          |                                |
| M5 Washers         | 16       |          |                                |

### Motion

| Item                              | Quantity | Received | Notes                                                  |
| --------------------------------- | -------- | -------- | ------------------------------------------------------ |
| Filament Extruder                 | 1        | 1        | Using original Anet A8 Extruder with M6 Bowden Coupler |
| F695 Bearing                      | 18       | 6        |                                                        |
| GT2 20T Pulley (5mm ID 6mm W)     | 3        |          |                                                        |
| GT2 Open Belt LL-2GT-6 (6mm wide) | 4m       | 4m       |                                                        |
| Linear Rail MGN9C 200mm           | 2        |          |                                                        |
| Linear Rail MGN9C 150mm           | 1        |          |                                                        |
| Linear Shaft 8x200mm              | 4        |          |                                                        |
| LM8UU Linear Bearing              | 2        | 2        |                                                        |

### Print Bed

| Item                   | Quantity | Received | Notes |
| ---------------------- | -------- | -------- | ----- |
| 6" Glass Picture Frame | 1        | 1        |       |
| Yellow Die Spring - M3 | 3        | 3        |       |

### Electronics

| Item                         | Quantity | Received | Notes                                                                                                                           |
| ---------------------------- | -------- | -------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Nema 17 Stepper Motors       | 4        | 4        | Using original Anet A8 X/Y/Z1/Z2 Stepper Motors                                                                                 |
| CR10 Style Hotend            | 1        |          |                                                                                                                                 |
| Power Supply                 | 1        | 1        | Using original Anet A8 Power Supply                                                                                             |
| Raspberry Pi Zero            | 1        | 1        | Using Zero 2W                                                                                                                   |
| SKR Pico                     | 1        | 1        |                                                                                                                                 |
| SPDT KW10 Limit Micro Switch | 1        | 1        |                                                                                                                                 |
| 30x30x10 Axial Fan           | 1        | 1        |                                                                                                                                 |
| 40x40x10 Centrifugal Fan     | 2        |          | Using instead of 120x120x32 Centrifugal Fan for the the [Rook Fan Rookery](printer-extruders-and-toolheads.md#rook-fan-rookery) |

## Printing Parts

### Frame

| Item                                                                                                    | Quantity | Material | Printed | Notes                                                                      |
| ------------------------------------------------------------------------------------------------------- | -------- | -------- | :-----: | -------------------------------------------------------------------------- |
| [Bed_Frame_MK1](https://github.com/rolohaun/Rook/blob/main/STL/Bed/Bed_Frame_MK1.stl)                   | 1        |          |   :x:   |                                                                            |
| [Bed_Pad_for_springs](https://github.com/rolohaun/Rook/blob/main/Legacy/STLs/Bed_Pad_for_springs.stl)   | 3        |          |   :x:   |                                                                            |
| [Bottom_Frame_MK1](https://github.com/rolohaun/Rook/blob/main/STL/Frame/Bottom_Frame_MK1.stl)           | 1        |          |   :x:   |                                                                            |
| [Foot_Mount_MK1](https://github.com/rolohaun/Rook/blob/main/STL/Frame/Foot_Mount_MK1.STL)               | 4        |          |   :x:   |                                                                            |
| [Left_Motor_Mount_MK1](https://github.com/rolohaun/Rook/blob/main/STL/Frame/Left_Motor_Mount_MK1.stl)   | 1        |          |   :x:   |                                                                            |
| [Right_Motor_Mount_MK1](https://github.com/rolohaun/Rook/blob/main/STL/Frame/Right_Motor_Mount_MK1.stl) | 1        |          |   :x:   |                                                                            |
| [SKR Pico PiZero - Inserts](https://www.printables.com/model/388353-rook-mk1-skr-pico-pi-zero-adapter)  | 1        |          |   :x:   | This is a mod by [Kanrog](https://www.printables.com/social/109495-kanrog) |
| [Top_Frame_MK1](https://github.com/rolohaun/Rook/blob/main/STL/Frame/Top_Frame_MK1.stl)                 | 1        |          |   :x:   |                                                                            |
| [Rook Endstop](https://www.printables.com/model/381948-rook-mk1-low-profile-endstop)                    | 1        |          |   :x:   |                                                                            |

### Gantry

| Item                                                                                                                     | Quantity | Material | Printed | Notes |
| ------------------------------------------------------------------------------------------------------------------------ | -------- | -------- | :-----: | ----- |
| [Left_Idler_v2\_\_polished_MK1](https://github.com/rolohaun/Rook/blob/main/STL/Gantry/Left_Idler_v2__polished_MK1.stl)   | 1        |          |   :x:   |       |
| [Right_Idler_v2\_\_polished_MK1](https://github.com/rolohaun/Rook/blob/main/STL/Gantry/Right_Idler_v2__polished_MK1.stl) | 1        |          |   :x:   |       |
| [Y_Carriage_Left_polished_MK1](https://github.com/rolohaun/Rook/blob/main/STL/Gantry/Y_Carriage_Left_polished_MK1.stl)   | 1        |          |   :x:   |       |
| [Y_Carriage_Right_polished_MK1](https://github.com/rolohaun/Rook/blob/main/STL/Gantry/Y_Carriage_Right_polished_MK1.stl) | 1        |          |   :x:   |       |

### Layer Cooling

| Item                                                                                                                  | Quantity | Material | Printed | Notes                                                                                         |
| --------------------------------------------------------------------------------------------------------------------- | -------- | -------- | :-----: | --------------------------------------------------------------------------------------------- |
| [120mm blower_Mount_MK1](https://github.com/rolohaun/Rook/blob/main/STL/Layer%20Cooling/120mm%20blower_Mount_MK1.stl) | 1        |          |   :x:   | Will replace with the [Rook Fan Rookery](printer-extruders-and-toolheads.md#rook-fan-rookery) |
| [120mm_duct_MK1](https://github.com/rolohaun/Rook/blob/main/STL/Layer%20Cooling/120mm_duct_MK1.stl)                   | 1        |          |   :x:   | Will replace with the [Rook Fan Rookery](printer-extruders-and-toolheads.md#rook-fan-rookery) |

### Toolhead

| Item                                                                                                                           | Quantity | Material | Printed | Notes                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------ | -------- | -------- | :-----: | --------------------------------------------------------------------------------------------- |
| [Front_X_Carriage_CR10_Style_MK1](https://github.com/rolohaun/Rook/blob/main/STL/Toolhead/Front_X_Carriage_CR10_Style_MK1.stl) | 1        |          |   :x:   | Will replace with the [Rook Fan Rookery](printer-extruders-and-toolheads.md#rook-fan-rookery) |
| [Rear_X_Carriage_CR10_Style_MK1](https://github.com/rolohaun/Rook/blob/main/STL/Toolhead/Rear_X_Carriage_CR10_Style_MK1.stl)   | 1        |          |   :x:   | Will replace with the [Rook Fan Rookery](printer-extruders-and-toolheads.md#rook-fan-rookery) |

### Side-mounted spool and Extruder

| Item                                                                                                          | Quantity | Material | Printed | Notes                                                                      |
| ------------------------------------------------------------------------------------------------------------- | -------- | -------- | :-----: | -------------------------------------------------------------------------- |
| [motor-mount short V2](https://www.printables.com/model/349249-rook-side-mounted-spool-and-extruder/files)    | 1        |          |   :x:   | This is a mod by [Kanrog](https://www.printables.com/social/109495-kanrog) |
| [Front Vertical Spool V3](https://www.printables.com/model/349249-rook-side-mounted-spool-and-extruder/files) | 1        |          |   :x:   | This is a mod by [Kanrog](https://www.printables.com/social/109495-kanrog) |
| [Spool-hanger V3](https://www.printables.com/model/349249-rook-side-mounted-spool-and-extruder/files)         | 1        |          |   :x:   | This is a mod by [Kanrog](https://www.printables.com/social/109495-kanrog) |
