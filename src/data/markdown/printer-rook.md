# 3D Printing a cheap CoreXY 3D Printer

Febuary 2, 2023 by [Mike Thomas](https://github.com/mikepthomas),
Updated April 9, 2023

Sourcing and printing parts to assemble a [Rook 2020 3D Printer](https://www.printables.com/model/447255-rook-2020).

---

## Table of contents

1. [Sourcing Parts](#sourcing-parts)
2. [Printing Parts](#printing-parts)

## Sourcing Parts

### Frame

| Item                                  | Quantity | Received | Notes       |
| ------------------------------------- | -------- | -------- | ----------- |
| 200mm T-slot 2020 Aluminium Extrusion | 12       |          | 12 on order |
| 2020 Aluminium Extrusion 3-way corner | 8        | 8        |             |

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
| M5x8               | 35       |          |                                |
| M5x16              | 12       |          |                                |
| M5x25              | 4        |          |                                |
| M5x30              | 2        |          |                                |
| M5 T-nuts          | 35       |          |                                |
| M5 Washers         | 16       |          |                                |

### Motion

| Item                                 | Quantity | Received | Notes                                                                        |
| ------------------------------------ | -------- | -------- | ---------------------------------------------------------------------------- |
| Filament Extruder                    | 1        | 1        | Using original Anet A8 Extruder with M6 Bowden Coupler                       |
| F695 Bearing                         | 12       | 16       |                                                                              |
| GT2 20T Pulley (5mm ID 6mm W)        | 3        | 3        |                                                                              |
| GT2 20T Toothed Idler (5mm ID 6mm W) | 3        | 3        | Using 3 of these instead of 6 F695 Bearings for gantry idlers and belted bed |
| GT2 Open Belt LL-2GT-6 (6mm wide)    | 4m       | 4m       |                                                                              |
| Linear Rail MGN9C 200mm              | 2        | 2        |                                                                              |
| Linear Rail MGN9C 150mm              | 1        | 1        |                                                                              |
| Linear Shaft 8x200mm                 | 4        | 4        |                                                                              |
| LM8UU Linear Bearing                 | 2        | 2        |                                                                              |

### Print Bed

| Item                   | Quantity | Received | Notes |
| ---------------------- | -------- | -------- | ----- |
| 6" Glass Picture Frame | 1        | 1        |       |
| Yellow Die Spring - M3 | 3        | 3        |       |

### Electronics

| Item                         | Quantity | Received | Notes                                                                                                                           |
| ---------------------------- | -------- | -------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Nema 17 Stepper Motors       | 4        | 4        | Using original Anet A8 X/Y/Z1/Z2 Stepper Motors                                                                                 |
| CR10 Style Hotend            | 1        | 1        |                                                                                                                                 |
| Power Supply                 | 1        | 1        | Using original Anet A8 Power Supply                                                                                             |
| Raspberry Pi Zero            | 1        | 1        | Using Zero 2W                                                                                                                   |
| SKR Pico                     | 1        | 1        |                                                                                                                                 |
| SPDT KW10 Limit Micro Switch | 1        | 1        |                                                                                                                                 |
| 30x30x10 Axial Fan           | 1        | 1        |                                                                                                                                 |
| 40x40x10 Centrifugal Fan     | 2        | 2        | Using instead of 120x120x32 Centrifugal Fan for the the [Rook Fan Rookery](printer-extruders-and-toolheads.md#rook-fan-rookery) |

## Printing Parts

### Bed

| Item                                                                                         | Quantity | Material                                                          | Printed | Notes                                                         |
| -------------------------------------------------------------------------------------------- | -------- | ----------------------------------------------------------------- | :-----: | ------------------------------------------------------------- |
| [Bed_Frame_Front](https://www.printables.com/model/447255-rook-2020/files)                   | 1        | [eSun ABS+ (Peak Green)](printer-filament.md#esun-abs-peak-green) |   :x:   |                                                               |
| [Bed_Frame_Left](https://www.printables.com/model/447255-rook-2020/files)                    | 1        | [eSun ABS+ (Peak Green)](printer-filament.md#esun-abs-peak-green) |   :x:   |                                                               |
| [Bed_Frame_Right](https://www.printables.com/model/447255-rook-2020/files)                   | 1        | [eSun ABS+ (Peak Green)](printer-filament.md#esun-abs-peak-green) |   :x:   |                                                               |
| [Rook Bed Frame 150](https://www.printables.com/model/381943-rook-mk1-glass-bed-frame/files) | 1        | [eSun ABS+ (Peak Green)](printer-filament.md#esun-abs-peak-green) |   :x:   | This is a mod by [Kanrog](https://www.printables.com/@Kanrog) |

### Frame

| Item                                                                                  | Quantity | Material                                                          | Printed | Notes                                                           |
| ------------------------------------------------------------------------------------- | -------- | ----------------------------------------------------------------- | :-----: | --------------------------------------------------------------- |
| [foot](https://www.printables.com/model/447255-rook-2020/files)                       | 4        | [eSun ABS+ (Peak Green)](printer-filament.md#esun-abs-peak-green) |   :x:   |                                                                 |
| [Motor Mount Left](https://www.printables.com/model/447255-rook-2020/files)           | 1        | [eSun ABS+ (Peak Green)](printer-filament.md#esun-abs-peak-green) |   :x:   |                                                                 |
| [Motor Mount Right](https://www.printables.com/model/447255-rook-2020/files)          | 1        | [eSun ABS+ (Peak Green)](printer-filament.md#esun-abs-peak-green) |   :x:   |                                                                 |
| [Rook boot](https://www.printables.com/model/371470-rook-3d-printer-mods-boots/files) | 4        | [eSun ABS+ (Peak Green)](printer-filament.md#esun-abs-peak-green) |   :x:   | This is a mod by [FabienT](https://www.printables.com/@FabienT) |

### Z Axis

| Item                                                                          | Quantity | Material                                                          | Printed | Notes |
| ----------------------------------------------------------------------------- | -------- | ----------------------------------------------------------------- | :-----: | ----- |
| [Z_Idler_Mount](https://www.printables.com/model/447255-rook-2020/files)      | 1        | [eSun ABS+ (Peak Green)](printer-filament.md#esun-abs-peak-green) |   :x:   |       |
| [Z_Motor_Mount](https://www.printables.com/model/447255-rook-2020/files)      | 1        | [eSun ABS+ (Peak Green)](printer-filament.md#esun-abs-peak-green) |   :x:   |       |
| [Z_Rod_Mount_Bottom](https://www.printables.com/model/447255-rook-2020/files) | 2        | [eSun ABS+ (Peak Green)](printer-filament.md#esun-abs-peak-green) |   :x:   |       |
| [Z_Rod_Mount_Top](https://www.printables.com/model/447255-rook-2020/files)    | 2        | [eSun ABS+ (Peak Green)](printer-filament.md#esun-abs-peak-green) |   :x:   |       |

### Gantry

| Item                                                                          | Quantity | Material                                                          | Printed | Notes                                                                             |
| ----------------------------------------------------------------------------- | -------- | ----------------------------------------------------------------- | :-----: | --------------------------------------------------------------------------------- |
| [XY_Idler](https://www.printables.com/model/447255-rook-2020/files)           | 2        | [eSun ABS+ (Peak Green)](printer-filament.md#esun-abs-peak-green) |   :x:   |                                                                                   |
| [Y_Carriage_Left](https://www.printables.com/model/447255-rook-2020/files)    | 1        | [eSun ABS+ (Peak Green)](printer-filament.md#esun-abs-peak-green) |   :x:   |                                                                                   |
| [Y_Carriage_Right](https://www.printables.com/model/447255-rook-2020/files)   | 1        | [eSun ABS+ (Peak Green)](printer-filament.md#esun-abs-peak-green) |   :x:   |                                                                                   |
| [belt_tie_v2](https://www.printables.com/model/389235-rook-belt-tie-v2/files) | 2        | [eSun ABS+ (Peak Green)](printer-filament.md#esun-abs-peak-green) |   :x:   | This is a mod by [kyledavis_351660](https://www.printables.com/@kyledavis_351660) |

### Toolhead

| Item                                                                                                                           | Quantity | Material                                                          | Printed | Notes                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------ | -------- | ----------------------------------------------------------------- | :-----: | --------------------------------------------------------------------------------------------- |
| [Front_X_Carriage_CR10_Style_MK1](https://github.com/rolohaun/Rook/blob/main/STL/Toolhead/Front_X_Carriage_CR10_Style_MK1.stl) | 1        | [eSun ABS+ (Peak Green)](printer-filament.md#esun-abs-peak-green) |   :x:   | Will replace with the [Rook Fan Rookery](printer-extruders-and-toolheads.md#rook-fan-rookery) |
| [Rear_X_Carriage_CR10_Style_MK1](https://github.com/rolohaun/Rook/blob/main/STL/Toolhead/Rear_X_Carriage_CR10_Style_MK1.stl)   | 1        | [eSun ABS+ (Peak Green)](printer-filament.md#esun-abs-peak-green) |   :x:   | Will replace with the [Rook Fan Rookery](printer-extruders-and-toolheads.md#rook-fan-rookery) |

### Side-mounted spool and Extruder

| Item                                                                                                          | Quantity | Material                                                          | Printed | Notes                                                         |
| ------------------------------------------------------------------------------------------------------------- | -------- | ----------------------------------------------------------------- | :-----: | ------------------------------------------------------------- |
| [motor-mount short V2](https://www.printables.com/model/349249-rook-side-mounted-spool-and-extruder/files)    | 1        | [eSun ABS+ (Peak Green)](printer-filament.md#esun-abs-peak-green) |   :x:   | This is a mod by [Kanrog](https://www.printables.com/@Kanrog) |
| [Front Vertical Spool V4](https://www.printables.com/model/349249-rook-side-mounted-spool-and-extruder/files) | 1        | [eSun ABS+ (Peak Green)](printer-filament.md#esun-abs-peak-green) |   :x:   | This is a mod by [Kanrog](https://www.printables.com/@Kanrog) |
| [Spool-hanger V4](https://www.printables.com/model/349249-rook-side-mounted-spool-and-extruder/files)         | 1        | [eSun ABS+ (Peak Green)](printer-filament.md#esun-abs-peak-green) |   :x:   | This is a mod by [Kanrog](https://www.printables.com/@Kanrog) |

### Skirts

| Item                                                                                         | Quantity | Material                                                          | Printed | Notes                                                       |
| -------------------------------------------------------------------------------------------- | -------- | ----------------------------------------------------------------- | :-----: | ----------------------------------------------------------- |
| [Rook_skirt_front_OLED_Screen](https://www.printables.com/model/419088-rook-mk1-skirt/files) | 1        | [eSun ABS+ (Peak Green)](printer-filament.md#esun-abs-peak-green) |   :x:   | This is a mod by [HK721](https://www.printables.com/@HK721) |
| [Rook_skirt_side_left](https://www.printables.com/model/419088-rook-mk1-skirt/files)         | 1        | [eSun ABS+ (Peak Green)](printer-filament.md#esun-abs-peak-green) |   :x:   | This is a mod by [HK721](https://www.printables.com/@HK721) |
| [Rook_skirt_side_right](https://www.printables.com/model/419088-rook-mk1-skirt/files)        | 1        | [eSun ABS+ (Peak Green)](printer-filament.md#esun-abs-peak-green) |   :x:   | This is a mod by [HK721](https://www.printables.com/@HK721) |
