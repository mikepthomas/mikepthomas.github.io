# 3D Printing a Mostly 3D Printed 3D Printer

Feb 2, 2022 by [Mike Thomas](https://github.com/mikepthomas)

Sourcing and printing parts to assemble a [Rook Legacy 3D Printer](https://github.com/rolohaun/Rook/tree/main/Legacy).

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
| M5 Washers         | 14       |          |                                |

### Motion

| Item                              | Quantity | Received | Notes                                                  |
| --------------------------------- | -------- | -------- | ------------------------------------------------------ |
| Extruder                          | 1        | 1        | Using original Anet A8 Extruder with M6 Bowden Coupler |
| F695 Bearing                      | 16       | 6        |                                                        |
| GT2 20T Pulley (5mm ID 6mm W)     | 2        |          |                                                        |
| GT2 Open Belt LL-2GT-6 (6mm wide) | 4m       | 4m       |                                                        |
| Lead Screw TR8x2 150mm            | 2        |          |                                                        |
| Lead Screw Coupler 5x8            | 2        | 2        | Using original Anet A8 Spring Couplers                 |
| Linear Rail MGN9C 200mm           | 2        |          |                                                        |
| Linear Rail MGN9C 150mm           | 1        |          |                                                        |
| Linear Shaft 8x150mm              | 4        |          |                                                        |
| LM8UU Linear Bearing              | 4        | 4        |                                                        |

### Print Bed

| Item                   | Quantity | Received | Notes |
| ---------------------- | -------- | -------- | ----- |
| 6" Glass Picture Frame | 1        | 1        |       |
| Yellow Die Spring - M3 | 4        | 4        |       |

### Electronics

| Item                         | Quantity | Received | Notes                               |
| ---------------------------- | -------- | -------- | ----------------------------------- |
| Nema 17 Stepper Motors       | 5        | 5        | Using original Anet A8 Steppers     |
| CR10 Style Hotend            | 1        |          |                                     |
| Power Supply                 | 1        | 1        | Using original Anet A8 Power Supply |
| SKR 1.4                      | 1        |          |                                     |
| SPDT KW10 Limit Micro Switch | 1        | 1        |                                     |
| 120x120x32 Centrifugal Fan   | 1        |          |                                     |
| 30x30x10 Axial Fan           | 1        | 1        |                                     |

## Printing Parts

### Frame

| Item                                                                                                                                       | Quantity | Material | Printed | Notes                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------ | -------- | -------- | :-----: | -------------------------------------------------- |
| [Bed_Frame_v2](https://github.com/rolohaun/Rook/blob/main/Legacy/STLs/Frame/Older%20STL%20with%20optional%20bed%20frames/Bed_Frame_v2.stl) | 1        |          |   :x:   |                                                    |
| [Bed_Pad_for_springs](https://github.com/rolohaun/Rook/blob/main/Legacy/STLs/Bed_Pad_for_springs.stl)                                      | 4        |          |   :x:   |                                                    |
| [Bottom_Frame](https://github.com/rolohaun/Rook/blob/main/Legacy/STLs/Frame/Bottom_Frame.stl)                                              | 1        |          |   :x:   |                                                    |
| [Foot_Mount](https://github.com/rolohaun/Rook/blob/main/Legacy/STLs/Frame/Foot_Mount.STL)                                                  | 4        |          |   :x:   |                                                    |
| [Left_Motor_Mount](https://github.com/rolohaun/Rook/blob/main/Legacy/STLs/Frame/Left_Motor_Mount.stl)                                      | 1        |          |   :x:   |                                                    |
| [Right_Motor_Mount](https://github.com/rolohaun/Rook/blob/main/Legacy/STLs/Frame/Right_Motor_Mount.stl)                                    | 1        |          |   :x:   |                                                    |
| [SKR_3_Mount](https://github.com/rolohaun/Rook/blob/main/Legacy/STLs/Frame/SKR_3_Mount.stl)                                                | 1        |          |   :x:   | This should also be the same mount for the SKR 1.4 |
| [Top_Frame](https://github.com/rolohaun/Rook/blob/main/Legacy/STLs/Frame/Top_Frame.stl)                                                    | 1        |          |   :x:   |                                                    |
| [Z_endstop_Mount](https://github.com/rolohaun/Rook/blob/main/Legacy/STLs/Frame/Z_endstop_Mount.stl)                                        | 1        |          |   :x:   |                                                    |

### Gantry

| Item                                                                                                                     | Quantity | Material | Printed | Notes |
| ------------------------------------------------------------------------------------------------------------------------ | -------- | -------- | :-----: | ----- |
| [Left_Idler_v2\_\_polished](https://github.com/rolohaun/Rook/blob/main/Legacy/STLs/Gantry/Left_Idler_v2__polished.stl)   | 1        |          |   :x:   |       |
| [Right_Idler_v2\_\_polished](https://github.com/rolohaun/Rook/blob/main/Legacy/STLs/Gantry/Right_Idler_v2__polished.stl) | 1        |          |   :x:   |       |
| [X_Carriage_CR10_Style](https://github.com/rolohaun/Rook/blob/main/Legacy/STLs/X_Carriage_CR10_Style.stl)                | 1        |          |   :x:   |       |
| [Y_Carriage_Left_polished](https://github.com/rolohaun/Rook/blob/main/Legacy/STLs/Gantry/Y_Carriage_Left_polished.stl)   | 1        |          |   :x:   |       |
| [Y_Carriage_Right_polished](https://github.com/rolohaun/Rook/blob/main/Legacy/STLs/Gantry/Y_Carriage_Right_polished.stl) | 1        |          |   :x:   |       |

### Layer Cooling

| Item                                                                                                                  | Quantity | Material | Printed | Notes |
| --------------------------------------------------------------------------------------------------------------------- | -------- | -------- | :-----: | ----- |
| [120mm blower_Mount](https://github.com/rolohaun/Rook/blob/main/Legacy/STLs/Layer%20Cooling/120mm%20blower_Mount.stl) | 1        |          |   :x:   |       |
| [120mm_duct](https://github.com/rolohaun/Rook/blob/main/Legacy/STLs/Layer%20Cooling/120mm_duct.stl)                   | 1        |          |   :x:   |       |
