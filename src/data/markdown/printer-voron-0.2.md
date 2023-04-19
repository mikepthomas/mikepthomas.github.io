# Assembling the smallest Voron printer

Created April 3, 2023 by [Mike Thomas](https://github.com/mikepthomas),
Updated April 19, 2023

Building the smallest of the Voron printers, the Voron Zero.

---

## Table of contents

1. [Sourcing Parts](#sourcing-parts)
2. [Printing Parts](#printing-parts)
   1. [Frame](#frame)
   2. [A/B Drives](#a-b-drives)
   3. [A/B Idlers](#a-b-idlers)
   4. [Z Axis](#z-axis)
   5. [X Axis](#x-axis)
   6. [A/B Belts](#a-b-belts)
   7. [Print Bed](#print-bed)
   8. [Print Head](#print-head)
   9. [Electronics & Wiring](#electronics---wiring)
   10. [Skirts & Panels](#skirts---panels)
   11. [Extrusion Tophat](#extrusion-tophat)
   12. [Nevermore Micro V5 Duo](#nevermore-micro-v5-duo)

## Sourcing Parts

After having to source my own parts for the [Voron 1.8](printer-voron-1.8.md) as kits were not available, to keep costs down, I have decided to order a [Formbot](https://www.formbot3d.com/) kit that contains all of the parts required to build the printer.

### Fasteners

| Item                                      | Quantity | Received | Notes                                  |
| ----------------------------------------- | -------- | -------- | -------------------------------------- |
| 3x6x0.5 Shim Washer                       | 50       | 50       |                                        |
| M2 Nut                                    | 55       | 72       |                                        |
| M3 Nut                                    | 140      | 151      |                                        |
| M2x4 SHCS                                 | 8        | 10       |                                        |
| M2x6 SHCS                                 | 70       | 77       |                                        |
| M2x6 FHCS                                 | 10       | 15       |                                        |
| M2x8 SHCS                                 | 10       | 18       |                                        |
| M3x6 BHCS                                 | 40       | 50       |                                        |
| M3x6 FHCS                                 | 8        | 10       |                                        |
| M3x8 BHCS                                 | 115      | 120      |                                        |
| M3x8 FHCS                                 | 5        | 10       |                                        |
| M3x10 BHCS                                | 50       | 35       | Fewer needed due to Kirigami Bed Mount |
| M3x12 BHCS                                | 25       | 30       |                                        |
| M3x16 BHCS                                | 10       | 15       |                                        |
| M3x25 BHCS                                | 10       | 15       |                                        |
| M3x30 BHCS                                | 10       | 15       |                                        |
| M3x35 BHCS                                | 30       | 35       |                                        |
| M3x40 BHCS                                | 10       | 15       |                                        |
| M2x10 Self Tapping Screws for Plastic     | 30       | 36       |                                        |
| M3 Brass heatstake inserts - short M3x5x4 | 50       | 71       |                                        |
| Makerbeam XL M3 t-nut                     | 2        | 2        |                                        |

### Frame

| Item                     | Quantity | Received | Notes                            |
| ------------------------ | -------- | -------- | -------------------------------- |
| Makerbeam XL 15x15 200mm | 16       | 16       |                                  |
| Makerbeam XL 15x15 100mm | 3        |          | Using Kirigami Bed Mount instead |
| Kirigami Bed Mount       | 1        | 1        |                                  |

### Extrusion Tophat Frame

| Item                        | Quantity | Received | Notes |
| --------------------------- | -------- | -------- | ----- |
| Makerbeam XL 15x15 200mm    | 4        | 4        |       |
| Makerbeam XL 15x15 80-100mm | 4        | 4        | 100mm |

### Electronics

| Item                                                     | Quantity | Received | Notes      |
| -------------------------------------------------------- | -------- | -------- | ---------- |
| Meanwell LRS-150-24                                      | 1        | 1        |            |
| Bigtreetech SKR Pico                                     | 1        | 1        |            |
| Raspberry Pi 4                                           | 1        | 1        |            |
| MicroSD Card                                             | 1        | 1        |            |
| NEMA14 Stepper Motor 40Ncm                               | 2        | 2        |            |
| NEMA17 Stepper Motor w/ integrated lead screw 200mm T8x8 | 1        | 1        |            |
| 3010 blower fans 24V                                     | 2        |          | 2 on order |
| 3010 axial fan 24V                                       | 2        |          | 2 on order |
| 3510 axial fan 24V                                       | 4        | 5        |            |
| Omron Mouse Button - Micro Switch                        | 1        | 1        |            |
| C13 Power Cord                                           | 1        | 1        |            |
| IEC320 C14 inlet                                         | 1        | 1        |            |
| Hotend                                                   | 1        | 1        |            |
| 24V Heater Cartridge                                     | 1        | 1        |            |
| Hotend thermistor                                        | 1        | 1        |            |
| V0 Display                                               | 1        | 1        |            |
| 3M 5952 VHB tape                                         | 1        | 1        |            |
| Adafruit Sequins                                         | 2        | 5        |            |
| Rainbow Barf LED                                         | 1        | 1        |            |

### Cables

| Item                                               | Quantity | Received | Notes                                                                                     |
| -------------------------------------------------- | -------- | -------- | ----------------------------------------------------------------------------------------- |
| Insulated Crimp Receptical                         | 4        |          | Kit comes with pre-made wiring harness                                                    |
| High Flex Wire 22gauge 100ft                       | 1        |          | Kit comes with pre-made wiring harness                                                    |
| High Flex Wire 20gauge 10ft                        | 1        |          | Kit comes with pre-made wiring harness                                                    |
| Wire 18gauge 10ft                                  | 1        |          | Kit comes with pre-made wiring harness                                                    |
| LDO Picobilical kit                                | 1        | 1        |                                                                                           |
| Thermal Fuse 125C                                  | 1        | 5        |                                                                                           |
| JST connectors (2pin 3pin 4pin)                    | ?        |          | Kit comes with pre-made wiring harness                                                    |
| Microfit3 Dual Row (10circuits) Male & Female Plug | 1        |          | Kit comes with pre-made wiring harness                                                    |
| 7mm x 7mm cable chain (less than 1/2 meter needed) | 1        | 1        |                                                                                           |
| Cable Clips                                        | 5        | 5        | Replace with [Cable Trunking Raceway Kit](https://www.amazon.co.uk/gp/product/B09BL9N1P1) |
| Nylon Cable Ties (1.8mm wide or smaller)           | 50       | 100      |                                                                                           |

### Motion

| Item                                    | Quantity | Received | Notes |
| --------------------------------------- | -------- | -------- | ----- |
| F623-RS Bearing                         | 24       | 24       |       |
| MGN7H Linear Rail with Carriage - 150mm | 5        | 5        |       |
| Siboor PCB Rail Holders                 | 10       | 10       |       |
| GT2 20T (5mm ID 6mm W)                  | 2        | 2        |       |
| GT2 Open Belt (6mm W) - 3000mm          | 1        | 1        |       |
| T8x8 Anti-backlash Flange Nut           | 1        | 1        |       |

### Buildplate

| Item                                              | Quantity | Received | Notes                                                   |
| ------------------------------------------------- | -------- | -------- | ------------------------------------------------------- |
| MIC6 1/4" Plate - 120x120mm                       | 1        | 1        |                                                         |
| Silicone DC 24V Heater 100x100mm 60W              | 1        | 1        |                                                         |
| PEI + 3M 468MP (200MP)                            | 1        |          | Already applied to Flex Buildplate                      |
| yellow die springs 8x4x20mm                       | 3        | 3        |                                                         |
| Spring Steel Flex Buildplate 120x120mm (OPTIONAL) | 1        | 1        | Kit comes with Double-Sided Magnetic Flexible PEI Sheet |

### Panels

| Item                              | Quantity | Received | Notes                             |
| --------------------------------- | -------- | -------- | --------------------------------- |
| Acrylic Sheet Clear - 212x230x3mm | 2        | 2        |                                   |
| Acrylic Sheet Clear - 212x239x3mm | 1        | 1        |                                   |
| Upper Rear Panel 212x63x3mm       | 1        |          | 1 on order, Linneo Orange ACM     |
| Lower Rear Panel 212x185x3mm      | 1        |          | 1 on order, Linneo Orange ACM     |
| Deck Panel 3mm thick (See DXF)    | 1        |          | 1 on order, Linneo Orange ACM     |
| Motor Panel 3mm thick (See DXF)   | 1        |          | Not required as using Picobilical |
| Bottom Panel 3mm thick (See DXF)  | 1        |          | 1 on order, Linneo Orange ACM     |
| Mid Panel 3mm thick (See DXF)     | 1        |          | 1 on order, Linneo Orange ACM     |

### Bowden

| Item                   | Quantity | Received | Notes |
| ---------------------- | -------- | -------- | ----- |
| Bowden Fitting         | 2        | 2        |       |
| Bowden Tube 4x3mm - 1m | 1        | 1        |       |

### Misc

| Item                              | Quantity | Received | Notes      |
| --------------------------------- | -------- | -------- | ---------- |
| Little Rubber Feet                | 4        | 4        |            |
| Bowden Tube 4x2mm - 1m            | 1        |          | 1 on order |
| Medium Strength Thread Locker     | 1        | 1        |            |
| 6mm x 3mm Round Neodymium Magnets | 8        | 8        |            |

### Extrusion Tophat Panels

| Item                      | Quantity | Received | Notes |
| ------------------------- | -------- | -------- | ----- |
| Top Panel 212x212mm       | 1        | 1        |       |
| Side Panels 212x(71-91)mm | 4        | 4        |       |

### Extruder

| Item                                         | Quantity | Received | Notes |
| -------------------------------------------- | -------- | -------- | ----- |
| NEMA14 36mm pancake Motor with 10 tooth gear | 1        | 1        |       |
| Bondtech BMG Extruder Kit                    | 1        | 1        |       |
| MR85 Bearing                                 | 2        | 2        |       |

## Printing Parts

### Tools

| Item                                                                                                                               | Quantity | Material                                                | Size | Weight | Cost | Printed | Notes                              |
| ---------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | ---- | ------ | ---- | :-----: | ---------------------------------- |
| [MGN7_Rail_Guide](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Tools/MGN7_Rail_Guide_x2.STL)                          | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |      |        |      |   :x:   |                                    |
| [Pulley_Jig_V0](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Tools/Pulley_Jig_V0.stl)                                 | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |      |        |      |   :x:   |                                    |
| [HexNut_1515](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/Zen3D/V0_1515_T-nut/MakerBeam/HexNut_1515.stl)    | ?        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |      |        |      |   :x:   | This is a Voron Users Mod by Zen3D |
| [v0_z_rail_dual_align](https://github.com/christophmuellerorg/voron_0_kirigami_bed/blob/master/STL/tools/v0_z_rail_dual_align.stl) | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |      |        |      |   :x:   | This is a Kirigami Bed Part        |

### Frame

![Voron 0.2 Frame](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron-0.2/frame.jpg)

> Image &copy; 2023 [Voron Design](https://www.vorondesign.com/)

#### :negative_squared_cross_mark: Y Rails

| Item                                                                                                              | Quantity | Material                                                  | Size | Weight | Cost | Printed | Notes                                      |
| ----------------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------------- | ---- | ------ | ---- | :-----: | ------------------------------------------ |
| [M2_Nut_Adapter_Rotated](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/M2_Nut_Adapter_Rotated_x5.stl) | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black)   |      |        |      |   :x:   | Will replace with 4 Siboor PCB Rail Mounts |
| [Railstops](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/%5Ba%5D_Railstops_x5.stl)                   | 2        | [eSun ABS+ (Purple)](printer-filament.md#esun-abs-purple) |      |        |      |   :x:   |                                            |

#### :negative_squared_cross_mark: Z Rails

| Item                                                                                                              | Quantity | Material                                                  | Size | Weight | Cost | Printed | Notes                                      |
| ----------------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------------- | ---- | ------ | ---- | :-----: | ------------------------------------------ |
| [M2_Nut_Adapter_Rotated](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/M2_Nut_Adapter_Rotated_x5.stl) | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black)   |      |        |      |   :x:   | Will replace with 4 Siboor PCB Rail Mounts |
| [Railstops](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/%5Ba%5D_Railstops_x5.stl)                   | 2        | [eSun ABS+ (Purple)](printer-filament.md#esun-abs-purple) |      |        |      |   :x:   |

#### :negative_squared_cross_mark: Z Axis

| Item                                                                                            | Quantity | Material                                                  | Size | Weight | Cost | Printed | Notes |
| ----------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------------- | ---- | ------ | ---- | :-----: | ----- |
| [Railstops](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/%5Ba%5D_Railstops_x5.stl) | 1        | [eSun ABS+ (Purple)](printer-filament.md#esun-abs-purple) |      |        |      |   :x:   |       |

#### :negative_squared_cross_mark: Bed Carrier

| Item                                                                                                          | Quantity | Material                                                | Size | Weight | Cost | Printed | Notes                                                    |
| ------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | ---- | ------ | ---- | :-----: | -------------------------------------------------------- |
| [Front_Bed_Mount](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Front_Bed_Mount_x1.stl)           | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |      |        |      |   :x:   | Not Required as my kit came with the Kirigami bed mount. |
| [Rear_Bed_Mount_Left](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Rear_Bed_Mount_Left_x1.stl)   | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |      |        |      |   :x:   | Not Required as my kit came with the Kirigami bed mount. |
| [Rear_Bed_Mount_Right](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Rear_Bed_Mount_Right_x1.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |      |        |      |   :x:   | Not Required as my kit came with the Kirigami bed mount. |

#### :negative_squared_cross_mark: Kirigami Bed

| Item                                                                                                                                                           | Quantity | Material                                                  | Size | Weight | Cost | Printed | Notes                                 |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------------- | ---- | ------ | ---- | :-----: | ------------------------------------- |
| [Kirigami_Bed_Spacer](https://github.com/stvptrsn/Voron_Stuff/blob/main/Voron_0/Kirigami/Kirigami_Bed_Spacer.stl)                                              | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black)   |      |        |      |   :x:   | This is a Voron Users Mod by stvptrsn |
| [kirigami_wago_mount](https://github.com/christophmuellerorg/voron_0_kirigami_bed/blob/master/STL/kirigami_wago_mount.stl)                                     | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black)   |      |        |      |   :x:   | This is a Kirigami Bed Part           |
| [logo_insert](https://github.com/MapleLeafMakers/Stealth_Bed_Front/blob/main/STL/logo_insert.stl)                                                              | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black)   |      |        |      |   :x:   | This is a Maple Leaf Makers Part      |
| [main_body_kirigami](https://github.com/MapleLeafMakers/Stealth_Bed_Front/blob/main/STL/%5Ba%5D_main_body_kirigami.stl)                                        | 1        | [eSun ABS+ (Orange)](printer-filament.md#esun-abs-orange) |      |        |      |   :x:   | This is a Maple Leaf Makers Part      |
| [rainbow_barf_diffuser](https://github.com/MapleLeafMakers/Stealth_Bed_Front/blob/main/STL/%5Bc%5D_rainbow_barf_diffuser.stl)                                  | 1        | Clear Resin                                               |      |        |      |   :x:   | This is a Maple Leaf Makers Part      |
| [rainbow_barf_carrier](https://github.com/MapleLeafMakers/Stealth_Bed_Front/blob/main/STL/rainbow_barf_carrier.stl)                                            | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black)   |      |        |      |   :x:   | This is a Maple Leaf Makers Part      |
| [stealth_chain_mount](https://github.com/christophmuellerorg/voron_0_kirigami_bed/blob/v0.2_beta/STL/VORON_v0.2_stealth_chain_mount.stl)                       | 1        | [eSun ABS+ (Purple)](printer-filament.md#esun-abs-purple) |      |        |      |   :x:   | This is a Beta Kirigami Bed Part      |
| [stealth_chain_mount_5mm_spacer](https://github.com/christophmuellerorg/voron_0_kirigami_bed/blob/v0.2_beta/STL/VORON_v0.2_stealth_chain_mount_5mm_spacer.stl) | 1        | [eSun ABS+ (Purple)](printer-filament.md#esun-abs-purple) |      |        |      |   :x:   | This is a Beta Kirigami Bed Part      |
| [stealth_nut_block](https://github.com/christophmuellerorg/voron_0_kirigami_bed/blob/v0.2_beta/STL/VORON_v0.2_stealth_nut_block.stl)                           | 1        | [eSun ABS+ (Purple)](printer-filament.md#esun-abs-purple) |      |        |      |   :x:   | This is a Beta Kirigami Bed Part      |
| [stealth_wire_guide](https://github.com/christophmuellerorg/voron_0_kirigami_bed/blob/v0.2_beta/STL/VORON_v0.2_stealth_wire_guide.stl)                         | 1        | [eSun ABS+ (Purple)](printer-filament.md#esun-abs-purple) |      |        |      |   :x:   | This is a Beta Kirigami Bed Part      |

#### :negative_squared_cross_mark: Z Endstop

| Item                                                                                                        | Quantity | Material                                                  | Size | Weight | Cost | Printed | Notes                                                                     |
| ----------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------------- | ---- | ------ | ---- | :-----: | ------------------------------------------------------------------------- |
| [Z_Endstop_Mount](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/%5Ba%5D_Z_Endstop_Mount_x1.stl) | 1        | [eSun ABS+ (Purple)](printer-filament.md#esun-abs-purple) |      |        |      |   :x:   | Replace with Z cover mod                                                  |
| [deck_plate_cover](https://www.printables.com/model/405522/files)                                           | 1        | [eSun ABS+ (Purple)](printer-filament.md#esun-abs-purple) |      |        |      |   :x:   | This is a mod by [MarekZCMB](https://www.printables.com/@MarekZCMB_58830) |

### A/B Drives

![Voron 0.2 A/B Drives](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron-0.2/a-b-drives.jpg)

> Image &copy; 2023 [Voron Design](https://www.vorondesign.com/)

#### :negative_squared_cross_mark: A Drive

| Item                                                                                                            | Quantity | Material                                                  | Size | Weight | Cost | Printed | Notes |
| --------------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------------- | ---- | ------ | ---- | :-----: | ----- |
| [A_Drive_Frame_Lower](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/A_Drive_Frame_Lower_x1.stl)     | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black)   |      |        |      |   :x:   |       |
| [A_Drive_Frame_Upper](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/A_Drive_Frame_Upper_x1.stl)     | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black)   |      |        |      |   :x:   |       |
| [9mm_Spacer](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/%5Ba%5D_9mm_Spacer_x6.stl)               | 1        | [eSun ABS+ (Orange)](printer-filament.md#esun-abs-orange) |      |        |      |   :x:   |       |
| [A_Drive_Tensioner](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/%5Ba%5D_A_Drive_Tensioner_x1.stl) | 1        | [eSun ABS+ (Orange)](printer-filament.md#esun-abs-orange) |      |        |      |   :x:   |       |
| [Tensioner_Knob](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/%5Ba%5D_Tensioner_Knob_x2.stl)       | 1        | [eSun ABS+ (Purple)](printer-filament.md#esun-abs-purple) |      |        |      |   :x:   |       |

#### :negative_squared_cross_mark: B Drive

| Item                                                                                                            | Quantity | Material                                                  | Size | Weight | Cost | Printed | Notes |
| --------------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------------- | ---- | ------ | ---- | :-----: | ----- |
| [B_Drive_Frame_Lower](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/B_Drive_Frame_Lower_x1.stl)     | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black)   |      |        |      |   :x:   |       |
| [B_Drive_Frame_Upper](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/B_Drive_Frame_Upper_x1.stl)     | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black)   |      |        |      |   :x:   |       |
| [9mm_Spacer](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/%5Ba%5D_9mm_Spacer_x6.stl)               | 1        | [eSun ABS+ (Orange)](printer-filament.md#esun-abs-orange) |      |        |      |   :x:   |       |
| [B_Drive_Tensioner](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/%5Ba%5D_B_Drive_Tensioner_x1.stl) | 1        | [eSun ABS+ (Orange)](printer-filament.md#esun-abs-orange) |      |        |      |   :x:   |       |
| [Tensioner_Knob](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/%5Ba%5D_Tensioner_Knob_x2.stl)       | 1        | [eSun ABS+ (Purple)](printer-filament.md#esun-abs-purple) |      |        |      |   :x:   |       |

### A/B Idlers

![Voron 0.2 A/B Idlers](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron-0.2/a-b-idlers.jpg)

> Image &copy; 2023 [Voron Design](https://www.vorondesign.com/)

#### :negative_squared_cross_mark: A Idler

| Item                                                                                                      | Quantity | Material                                                  | Size | Weight | Cost | Printed | Notes |
| --------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------------- | ---- | ------ | ---- | :-----: | ----- |
| [A_Idler_Lower](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/A_Idler_Lower_x1.stl)           | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black)   |      |        |      |   :x:   |       |
| [A_Idler_Upper](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/A_Idler_Upper_x1.stl)           | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black)   |      |        |      |   :x:   |       |
| [Idler_Cam_Lock](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/%5Ba%5D_Idler_Cam_Lock_x2.stl) | 1        | [eSun ABS+ (Orange)](printer-filament.md#esun-abs-orange) |      |        |      |   :x:   |       |

#### :negative_squared_cross_mark: B Idler

| Item                                                                                                      | Quantity | Material                                                  | Size | Weight | Cost | Printed | Notes |
| --------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------------- | ---- | ------ | ---- | :-----: | ----- |
| [B_Idler_Lower](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/B_Idler_Lower_x1.stl)           | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black)   |      |        |      |   :x:   |       |
| [B_Idler_Upper](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/B_Idler_Upper_x1.stl)           | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black)   |      |        |      |   :x:   |       |
| [Idler_Cam_Lock](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/%5Ba%5D_Idler_Cam_Lock_x2.stl) | 1        | [eSun ABS+ (Orange)](printer-filament.md#esun-abs-orange) |      |        |      |   :x:   |       |

### Z Axis

![Voron 0.2 Z Axis](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron-0.2/z-axis.jpg)

> Image &copy; 2023 [Voron Design](https://www.vorondesign.com/)

#### :negative_squared_cross_mark: Leadscrew Nut

| Item                                                                                          | Quantity | Material                                                  | Size | Weight | Cost | Printed | Notes                                                          |
| --------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------------- | ---- | ------ | ---- | :-----: | -------------------------------------------------------------- |
| [T8_Nut_Block](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/T8_Nut_Block_x1.stl) | 1        | [eSun ABS+ (Purple)](printer-filament.md#esun-abs-purple) |      |        |      |   :x:   | Not Required as this is replaced by the Kirigami Bed nut block |

#### :negative_squared_cross_mark: Feet

| Item                                                                                                                 | Quantity | Material                                                  | Size | Weight | Cost | Printed | Notes                                                     |
| -------------------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------------- | ---- | ------ | ---- | :-----: | --------------------------------------------------------- |
| [Foot_Front_Left](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Skirts/Foot_Front_Left_x1.stl)           | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black)   |      |        |      |   :x:   | Not Required as I plan on printing the Stealth Skirts mod |
| [Foot_Front_Right](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Skirts/Foot_Front_Right_x1.stl)         | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black)   |      |        |      |   :x:   | Not Required as I plan on printing the Stealth Skirts mod |
| [Foot_Rear_Left_Inlet](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Skirts/Foot_Rear_Left_Inlet_x1.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black)   |      |        |      |   :x:   | Not Required as I plan on printing the Stealth Skirts mod |
| [Foot_Rear_Right](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Skirts/Foot_Rear_Right_x1.stl)           | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black)   |      |        |      |   :x:   | Not Required as I plan on printing the Stealth Skirts mod |
| [Foot_Accent_A](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Skirts/%5Ba%5D_Foot_Accent_A_x2.stl)       | 2        | [eSun ABS+ (Orange)](printer-filament.md#esun-abs-orange) |      |        |      |   :x:   |                                                           |
| [Foot_Accent_B](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Skirts/%5Ba%5D_Foot_Accent_B_x2.stl)       | 2        | [eSun ABS+ (Orange)](printer-filament.md#esun-abs-orange) |      |        |      |   :x:   |                                                           |

#### :negative_squared_cross_mark: Stealth Skirts Feet

| Item                                                                                                                                             | Quantity | Material                                                | Size | Weight | Cost | Printed | Notes                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | ------------------------------------------------------- | ---- | ------ | ---- | :-----: | ------------------------------------- |
| [Left_Front_Foot](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/Maverick/V0.2_Stealth_Skirts/STLs/Left_Front_Foot_x1.stl)   | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |      |        |      |   :x:   | This is a Voron Users Mod by Maverick |
| [Mains_Inlet_Foot](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/Maverick/V0.2_Stealth_Skirts/STLs/Mains_Inlet_Foot_x1.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |      |        |      |   :x:   | This is a Voron Users Mod by Maverick |
| [Right_Front_Foot](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/Maverick/V0.2_Stealth_Skirts/STLs/Right_Front_Foot_x1.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |      |        |      |   :x:   | This is a Voron Users Mod by Maverick |
| [Right_Rear_Foot](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/Maverick/V0.2_Stealth_Skirts/STLs/Right_Rear_Foot_x1.stl)   | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |      |        |      |   :x:   | This is a Voron Users Mod by Maverick |

#### :negative_squared_cross_mark: Leadscrew

| Item                                                                                                    | Quantity | Material                                                  | Size | Weight | Cost | Printed | Notes |
| ------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------------- | ---- | ------ | ---- | :-----: | ----- |
| [Z_Motor_Mount](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/%5Ba%5D_Z_Motor_Mount_x1.stl) | 1        | [eSun ABS+ (Purple)](printer-filament.md#esun-abs-purple) |      |        |      |   :x:   |       |

### X Axis

![Voron 0.2 X Axis](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron-0.2/x-axis.jpg)

> Image &copy; 2023 [Voron Design](https://www.vorondesign.com/)

#### :negative_squared_cross_mark: XY Joint Left

| Item                                                                                                        | Quantity | Material                                                  | Size | Weight | Cost | Printed | Notes |
| ----------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------------- | ---- | ------ | ---- | :-----: | ----- |
| [XY_Joint_Left_Lower](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/XY_Joint_Left_Lower_x1.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black)   |      |        |      |   :x:   |       |
| [XY_Joint_Left_Upper](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/XY_Joint_Left_Upper_x1.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black)   |      |        |      |   :x:   |       |
| [9mm_Spacer](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/%5Ba%5D_9mm_Spacer_x6.stl)           | 2        | [eSun ABS+ (Orange)](printer-filament.md#esun-abs-orange) |      |        |      |   :x:   |       |

#### :negative_squared_cross_mark: XY Joint Right

| Item                                                                                                          | Quantity | Material                                                  | Size | Weight | Cost | Printed | Notes |
| ------------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------------- | ---- | ------ | ---- | :-----: | ----- |
| [XY_Joint_Right_Lower](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/XY_Joint_Right_Lower_x1.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black)   |      |        |      |   :x:   |       |
| [XY_Joint_Right_Upper](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/XY_Joint_Right_Upper_x1.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black)   |      |        |      |   :x:   |       |
| [9mm_Spacer](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/%5Ba%5D_9mm_Spacer_x6.stl)             | 2        | [eSun ABS+ (Orange)](printer-filament.md#esun-abs-orange) |      |        |      |   :x:   |       |

#### :negative_squared_cross_mark: X Axis

| Item                                                                                                              | Quantity | Material                                                | Size | Weight | Cost | Printed | Notes                                      |
| ----------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | ---- | ------ | ---- | :-----: | ------------------------------------------ |
| [M2_Nut_Adapter_Rotated](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/M2_Nut_Adapter_Rotated_x5.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |      |        |      |   :x:   | Will replace with 2 Siboor PCB Rail Mounts |

#### :negative_squared_cross_mark: Adafruit Y Rails

| Item                                                                                                                              | Quantity | Material                                                | Size | Weight | Cost | Printed | Notes                                    |
| --------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | ---- | ------ | ---- | :-----: | ---------------------------------------- |
| [body-left](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/QuackProfit/V0-Adafruit-Y_Rails/body-left.stl)     | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |      |        |      |   :x:   | This is a Voron Users Mod by QuackProfit |
| [body-right](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/QuackProfit/V0-Adafruit-Y_Rails/body-right.stl)   | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |      |        |      |   :x:   | This is a Voron Users Mod by QuackProfit |
| [cover-left](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/QuackProfit/V0-Adafruit-Y_Rails/cover-left.stl)   | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |      |        |      |   :x:   | This is a Voron Users Mod by QuackProfit |
| [cover-right](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/QuackProfit/V0-Adafruit-Y_Rails/cover-right.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |      |        |      |   :x:   | This is a Voron Users Mod by QuackProfit |

### A/B Belts

![Voron 0.2 A/B Belts](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron-0.2/a-b-belts.jpg)

> Image &copy; 2023 [Voron Design](https://www.vorondesign.com/)

#### :negative_squared_cross_mark: X Carriage

| Item                                                                                                                   | Quantity | Material                                                | Size | Weight | Cost | Printed | Notes                                    |
| ---------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | ---- | ------ | ---- | :-----: | ---------------------------------------- |
| [X_Carriage](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/X_Carriage_x1.stl)                              | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |      |        |      |   :x:   | Replace with X Carriage with Inserts mod |
| [X_Carriage_Inserts](https://github.com/chirpy2605/voron/blob/main/V0/XCarriage_v0_2/STLs/X_Carriage_Inserts_v0.2.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |      |        |      |   :x:   | This is a Voron Users Mod by chirpy2605  |

### Print Bed

![Voron 0.2 Print Bed](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron-0.2/print-bed.jpg)

> Image &copy; 2023 [Voron Design](https://www.vorondesign.com/)

#### :negative_squared_cross_mark: Print Bed

| Item                                                                                            | Quantity | Material                                                  | Size | Weight | Cost | Printed | Notes                               |
| ----------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------------- | ---- | ------ | ---- | :-----: | ----------------------------------- |
| [Thumb_Nut](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/%5Ba%5D_Thumb_Nut_x3.stl) | 3        | [eSun ABS+ (Orange)](printer-filament.md#esun-abs-orange) |      |        |      |   :x:   | May substitute these for metal ones |

### Print Head

![Voron 0.2 Print Head](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron-0.2/print-head.jpg)

> Image &copy; 2023 [Voron Design](https://www.vorondesign.com/)

#### :negative_squared_cross_mark: Mini Stealthburner

| Item                                                                                                                                               | Quantity | Material                                                  | Size | Weight | Cost | Printed | Notes                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------------- | ---- | ------ | ---- | :-----: | ---------------------------------------------------------------- |
| [MiniSB_Cowling_Logo_Only](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Toolheads/Mini_Stealthburner/MiniSB_Cowling_Logo_Only_x1.stl) | 1        | [eSun ABS+ (Orange)](printer-filament.md#esun-abs-orange) |      |        |      |   :x:   |                                                                  |
| [Strain_Relief_Body](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Toolheads/Mini_Stealthburner/Strain_Relief_Body_x1.stl)             | 1        | [eSun ABS+ (Orange)](printer-filament.md#esun-abs-orange) |      |        |      |   :x:   | Not Required as this will be replaced by the Picobilical Version |
| [Strain_Relief_Spacer](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Toolheads/Mini_Stealthburner/Strain_Relief_Spacer_x2.stl)         | 2        | [eSun ABS+ (Orange)](printer-filament.md#esun-abs-orange) |      |        |      |   :x:   |                                                                  |
| [Guidler](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Toolheads/Mini_Stealthburner/%5Ba%5D_Guidler_x1.stl)                           | 1        | [eSun ABS+ (Orange)](printer-filament.md#esun-abs-orange) |      |        |      |   :x:   |                                                                  |
| [Latch](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Toolheads/Mini_Stealthburner/%5Ba%5D_Latch_x1.stl)                               | 1        | [eSun ABS+ (Purple)](printer-filament.md#esun-abs-purple) |      |        |      |   :x:   |                                                                  |
| [MiniSB_Cowling](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Toolheads/Mini_Stealthburner/%5Ba%5D_MiniSB_Cowling_x1.stl)             | 1        | [eSun ABS+ (Purple)](printer-filament.md#esun-abs-purple) |      |        |      |   :x:   |                                                                  |
| [MiniSB_MidBody](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Toolheads/Mini_Stealthburner/%5Ba%5D_MiniSB_MidBody_x1.stl)             | 1        | [eSun ABS+ (Purple)](printer-filament.md#esun-abs-purple) |      |        |      |   :x:   |                                                                  |
| [MiniSB_Motor_Plate](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Toolheads/Mini_Stealthburner/%5Ba%5D_MiniSB_Motor_Plate_x1.stl)     | 1        | [eSun ABS+ (Purple)](printer-filament.md#esun-abs-purple) |      |        |      |   :x:   |                                                                  |
| [Shuttle](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Toolheads/Mini_Stealthburner/%5Ba%5D_Shuttle_x1.stl)                           | 1        | [eSun ABS+ (Orange)](printer-filament.md#esun-abs-orange) |      |        |      |   :x:   |                                                                  |

#### :negative_squared_cross_mark: Hotend Mount

| Item                                                                                                                                                     | Quantity | Material                                                  | Size | Weight | Cost | Printed | Notes                     |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------------- | ---- | ------ | ---- | :-----: | ------------------------- |
| [FS_Hotend_Mount_Dragon](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Toolheads/Hotend_Mounts/Fan_Saver/%5Ba%5D_FS_Hotend_Mount_Dragon.stl) | 1        | [eSun ABS+ (Purple)](printer-filament.md#esun-abs-purple) |      |        |      |   :x:   | Dragon, Fan Saver Version |

#### :negative_squared_cross_mark: AXDL345 Mount

| Item                                                                                                                                            | Quantity | Material                                                  | Size | Weight | Cost | Printed | Notes                                                                      |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------------- | ---- | ------ | ---- | :-----: | -------------------------------------------------------------------------- |
| [MiniSB_adxl_mount_ldo_15mm](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Toolheads/ADXL_Mounts/MiniSB_adxl_mount_ldo_15mm_x1.stl) | 1        | [eSun ABS+ (Orange)](printer-filament.md#esun-abs-orange) |      |        |      |   :x:   | LDO Version, Not required as Picobilical has ADXL sensor on toolhead board |

#### :negative_squared_cross_mark: Picobilical

| Item                                                                                                                | Quantity | Material                                                  | Size | Weight | Cost | Printed | Notes                          |
| ------------------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------------- | ---- | ------ | ---- | :-----: | ------------------------------ |
| [toolhead_spacer_v02](https://github.com/MotorDynamicsLab/LDO-Picobilical/blob/master/STLs/toolhead_spacer_v02.stl) | 1        | [eSun ABS+ (Orange)](printer-filament.md#esun-abs-orange) |      |        |      |   :x:   | This is a LDO Picobilical Part |

### Electronics & Wiring

![Voron 0.2 Electronics & Wiring](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron-0.2/electronics-and-wiring.jpg)

> Image &copy; 2023 [Voron Design](https://www.vorondesign.com/)

#### :negative_squared_cross_mark: Rear Panel

| Item                                                                                                                     | Quantity | Material                                                | Size | Weight | Cost | Printed | Notes |
| ------------------------------------------------------------------------------------------------------------------------ | -------- | ------------------------------------------------------- | ---- | ------ | ---- | :-----: | ----- |
| [PCB_DIN_Clip](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Electronics/PCB_DIN_Clip_x2.stl)                | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |      |        |      |   :x:   |       |
| [RPi_or_BTT-Pico_Mount](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Electronics/RPi_or_BTT-Pico_Mount.STL) | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |      |        |      |   :x:   |       |
| [VHB_Din_Mount](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Electronics/VHB_Din_Mount_x2.stl)              | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |      |        |      |   :x:   |       |

#### :negative_squared_cross_mark: Bottom Compartment

| Item                                                                                                              | Quantity | Material                                                | Size | Weight | Cost | Printed | Notes                                                        |
| ----------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | ---- | ------ | ---- | :-----: | ------------------------------------------------------------ |
| [Fan_Mount_Bottom](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Electronics/Fan_Mount_Bottom_x1.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |      |        |      |   :x:   | Not Required as his will be replaced by LDO Bottom Fan Panel |
| [Fan_Mount_Top](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Electronics/Fan_Mount_Top_x1.stl)       | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |      |        |      |   :x:   | Not Required as his will be replaced by LDO Bottom Fan Panel |
| [PSU_Cover](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Electronics/PSU_Cover_x1.STL)               | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |      |        |      |   :x:   |                                                              |

### Skirts & Panels

![Voron 0.2 Skirts & Panels](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron-0.2/skirts-and-panels.jpg)

> Image &copy; 2023 [Voron Design](https://www.vorondesign.com/)

I Plan on replacing the stock Trident style skirts with the [Stealth Skirts mod by Maverick](https://github.com/VoronDesign/VoronUsers/tree/master/printer_mods/Maverick/V0.2_Stealth_Skirts). The first 10 layers of the skirt parts will be printed in Purple and then I will perform a filament swap to Black to achieve two-tone skirts.

#### :negative_squared_cross_mark: Fan Panel

| Item                                                                                                                     | Quantity | Material                                                | Size | Weight | Cost | Printed | Notes              |
| ------------------------------------------------------------------------------------------------------------------------ | -------- | ------------------------------------------------------- | ---- | ------ | ---- | :-----: | ------------------ |
| [Fan Panel Left](https://github.com/MotorDynamicsLab/LDOVoron0/blob/main/STLs/Bottom_Fan_Panel/Fan%20Panel%20Left.stl)   | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |      |        |      |   :x:   | This is a LDO Part |
| [Fan Panel Right](https://github.com/MotorDynamicsLab/LDOVoron0/blob/main/STLs/Bottom_Fan_Panel/Fan%20Panel%20Right.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |      |        |      |   :x:   | This is a LDO Part |

#### :negative_squared_cross_mark: Left Side Skirts

| Item                                                                                                           | Quantity | Material                                                | Size | Weight | Cost | Printed | Notes                                                     |
| -------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | ---- | ------ | ---- | :-----: | --------------------------------------------------------- |
| [Side_Skirt](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Skirts/Side_Skirt_x2.stl)               | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |      |        |      |   :x:   | Not Required as I plan on printing the Stealth Skirts mod |
| [Side_Skirt_Mirror](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Skirts/Side_Skirt_Mirror_x2.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |      |        |      |   :x:   | Not Required as I plan on printing the Stealth Skirts mod |

#### :negative_squared_cross_mark: Left Side Stealth Skirts

| Item                                                                                                                                                   | Quantity | Material                                                  | Size | Weight | Cost | Printed | Notes                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | --------------------------------------------------------- | ---- | ------ | ---- | :-----: | ------------------------------------- |
| [3510_Fan_Grill](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/Maverick/V0.2_Stealth_Skirts/STLs/3510_Fan_Grill_x2.stl)           | 1        | [eSun ABS+ (Purple)](printer-filament.md#esun-abs-purple) |      |        |      |   :x:   | This is a Voron Users Mod by Maverick |
| [3510_Side_Skirt_Mid](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/Maverick/V0.2_Stealth_Skirts/STLs/3510_Side_Skirt_Mid_x2.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black)   |      |        |      |   :x:   | This is a Voron Users Mod by Maverick |
| [Left_Side_Skirt_A](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/Maverick/V0.2_Stealth_Skirts/STLs/Left_Side_Skirt_A_x1.stl)     | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black)   |      |        |      |   :x:   | This is a Voron Users Mod by Maverick |
| [Left_Side_Skirt_B](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/Maverick/V0.2_Stealth_Skirts/STLs/Left_Side_Skirt_B_x1.stl)     | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black)   |      |        |      |   :x:   | This is a Voron Users Mod by Maverick |
| [Side_Logo_Insert](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/Maverick/V0.2_Stealth_Skirts/STLs/Side_Logo_Insert_x2.stl)       | 1        | [eSun ABS+ (Orange)](printer-filament.md#esun-abs-orange) |      |        |      |   :x:   | This is a Voron Users Mod by Maverick |

#### :negative_squared_cross_mark: Right Side Skirts

| Item                                                                                                           | Quantity | Material                                                | Size | Weight | Cost | Printed | Notes                                                     |
| -------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | ---- | ------ | ---- | :-----: | --------------------------------------------------------- |
| [Side_Skirt](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Skirts/Side_Skirt_x2.stl)               | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |      |        |      |   :x:   | Not Required as I plan on printing the Stealth Skirts mod |
| [Side_Skirt_Mirror](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Skirts/Side_Skirt_Mirror_x2.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |      |        |      |   :x:   | Not Required as I plan on printing the Stealth Skirts mod |

#### :negative_squared_cross_mark: Right Side Stealth Skirts

| Item                                                                                                                                                   | Quantity | Material                                                  | Size | Weight | Cost | Printed | Notes                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | --------------------------------------------------------- | ---- | ------ | ---- | :-----: | ------------------------------------- |
| [3510_Fan_Grill](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/Maverick/V0.2_Stealth_Skirts/STLs/3510_Fan_Grill_x2.stl)           | 1        | [eSun ABS+ (Purple)](printer-filament.md#esun-abs-purple) |      |        |      |   :x:   | This is a Voron Users Mod by Maverick |
| [3510_Side_Skirt_Mid](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/Maverick/V0.2_Stealth_Skirts/STLs/3510_Side_Skirt_Mid_x2.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black)   |      |        |      |   :x:   | This is a Voron Users Mod by Maverick |
| [Right_Side_Skirt_A](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/Maverick/V0.2_Stealth_Skirts/STLs/Right_Side_Skirt_A_x1.stl)   | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black)   |      |        |      |   :x:   | This is a Voron Users Mod by Maverick |
| [Right_Side_Skirt_B](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/Maverick/V0.2_Stealth_Skirts/STLs/Right_Side_Skirt_B_x1.stl)   | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black)   |      |        |      |   :x:   | This is a Voron Users Mod by Maverick |
| [Side_Logo_Insert](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/Maverick/V0.2_Stealth_Skirts/STLs/Side_Logo_Insert_x2.stl)       | 1        | [eSun ABS+ (Orange)](printer-filament.md#esun-abs-orange) |      |        |      |   :x:   | This is a Voron Users Mod by Maverick |

#### :negative_squared_cross_mark: Rear Skirt

| Item                                                                                             | Quantity | Material                                                | Size | Weight | Cost | Printed | Notes                                                     |
| ------------------------------------------------------------------------------------------------ | -------- | ------------------------------------------------------- | ---- | ------ | ---- | :-----: | --------------------------------------------------------- |
| [Rear_Skirt](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Skirts/Rear_Skirt_x1.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |      |        |      |   :x:   | Not Required as I plan on printing the Stealth Skirts mod |

#### :negative_squared_cross_mark: Rear Stealth Skirt

| Item                                                                                                                                 | Quantity | Material                                                | Size | Weight | Cost | Printed | Notes                                 |
| ------------------------------------------------------------------------------------------------------------------------------------ | -------- | ------------------------------------------------------- | ---- | ------ | ---- | :-----: | ------------------------------------- |
| [Rear_Skirt](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/Maverick/V0.2_Stealth_Skirts/STLs/Rear_Skirt_x1.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |      |        |      |   :x:   | This is a Voron Users Mod by Maverick |

#### :negative_squared_cross_mark: Front Skirts

| Item                                                                                                       | Quantity | Material                                                  | Size | Weight | Cost | Printed | Notes                                                     |
| ---------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------------- | ---- | ------ | ---- | :-----: | --------------------------------------------------------- |
| [Front_Skirt_A](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Skirts/Front_Skirt_A_x1.stl)     | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black)   |      |        |      |   :x:   | Not Required as I plan on printing the Stealth Skirts mod |
| [Front_Skirt_B](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Skirts/Front_Skirt_B_x1.stl)     | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black)   |      |        |      |   :x:   | Not Required as I plan on printing the Stealth Skirts mod |
| [Logo_Insert](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Skirts/%5Ba%5D_Logo_Insert_x2.stl) | 2        | [eSun ABS+ (Orange)](printer-filament.md#esun-abs-orange) |      |        |      |   :x:   | Not Required as I plan on printing the Stealth Skirts mod |

#### :negative_squared_cross_mark: Front Stealth Skirts

| Item                                                                                                                                               | Quantity | Material                                                  | Size | Weight | Cost | Printed | Notes                                 |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------------- | ---- | ------ | ---- | :-----: | ------------------------------------- |
| [Left_Front_Skirt](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/Maverick/V0.2_Stealth_Skirts/STLs/Left_Front_Skirt_x1.stl)   | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black)   |      |        |      |   :x:   | This is a Voron Users Mod by Maverick |
| [Logo_Insert](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/Maverick/V0.2_Stealth_Skirts/STLs/Logo_Insert_x2.stl)             | 2        | [eSun ABS+ (Orange)](printer-filament.md#esun-abs-orange) |      |        |      |   :x:   | This is a Voron Users Mod by Maverick |
| [Right_Front_Skirt](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/Maverick/V0.2_Stealth_Skirts/STLs/Right_Front_Skirt_x1.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black)   |      |        |      |   :x:   | This is a Voron Users Mod by Maverick |

#### :negative_squared_cross_mark: Display

| Item                                                                                                                    | Quantity | Material                                                         | Size | Weight | Cost | Printed | Notes                                                                |
| ----------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------------------------------------------- | ---- | ------ | ---- | :-----: | -------------------------------------------------------------------- |
| [Display_Knob](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Display/Display_Knob_x1.stl)                   | 1        | [eSun ABS+ (Purple)](printer-filament.md#esun-abs-purple)        |      |        |      |   :x:   |                                                                      |
| [Display_Mount_Left](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Display/Display_Mount_Left_x1.stl)       | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black)          |      |        |      |   :x:   |                                                                      |
| [Display_Mount_Right](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Display/Display_Mount_Right_x1.stl)     | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black)          |      |        |      |   :x:   |                                                                      |
| [Display_Faceplate](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Display/%5Ba%5D_Display_Faceplate_x1.stl) | 1        | [eSun ABS+ (Orange)](printer-filament.md#esun-abs-orange)        |      |        |      |   :x:   | Not Required as I plan on printing the Multi-color Display Faceplate |
| [Display_Diffuser](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Display/%5Bc%5D_Display_Diffuser.STL)      | 1        | [BasicFil PETG (Clear)](printer-filament.md#basicfil-petg-clear) |      |        |      |   :x:   |                                                                      |

#### :negative_squared_cross_mark: Multi-color Display Faceplate

The Hexagon inserts will be printed in Black and the rest will be printed in Orange.

| Item                                                                                                       | Quantity | Material                                                  | Size | Weight | Cost | Printed | Notes                                                         |
| ---------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------------- | ---- | ------ | ---- | :-----: | ------------------------------------------------------------- |
| [V0.2MMU_Display Faceplate](https://www.printables.com/model/363207-voron-v02-mmu-display-faceplate/files) | 1        | [eSun ABS+ (Orange)](printer-filament.md#esun-abs-orange) |      |        |      |   :x:   | This is a mod by [Lab3Dp](https://www.printables.com/@Lab3Dp) |

#### :negative_squared_cross_mark: Picobilical Motor Panel

| Item                                                                                                            | Quantity | Material                                                  | Size | Weight | Cost | Printed | Notes                          |
| --------------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------------- | ---- | ------ | ---- | :-----: | ------------------------------ |
| [frame_cover_plate](https://github.com/MotorDynamicsLab/LDO-Picobilical/blob/master/STLs/frame_cover_plate.stl) | 1        | [eSun ABS+ (Orange)](printer-filament.md#esun-abs-orange) |      |        |      |   :x:   | This is a LDO Picobilical Part |

#### :negative_squared_cross_mark: Detachable Spool Holder

| Item                                                                                                                              | Quantity | Material                                                  | Size | Weight | Cost | Printed | Notes              |
| --------------------------------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------------- | ---- | ------ | ---- | :-----: | ------------------ |
| [Spool_Holder](https://github.com/MotorDynamicsLab/LDOVoron0/blob/main/STLs/Detachable_Spool_Holder/Spool_Holder.stl)             | 1        | [eSun ABS+ (Orange)](printer-filament.md#esun-abs-orange) |      |        |      |   :x:   | This is a LDO Part |
| [Spool_Holder_Mount](https://github.com/MotorDynamicsLab/LDOVoron0/blob/main/STLs/Detachable_Spool_Holder/Spool_Holder_Mount.stl) | 1        | [eSun ABS+ (Purple)](printer-filament.md#esun-abs-purple) |      |        |      |   :x:   | This is a LDO Part |

#### :negative_squared_cross_mark: Rear Panels

| Item                                                                                                                                 | Quantity | Material                                                  | Size | Weight | Cost | Printed | Notes |
| ------------------------------------------------------------------------------------------------------------------------------------ | -------- | --------------------------------------------------------- | ---- | ------ | ---- | :-----: | ----- |
| [Middle_Clip](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Panel_Mounting/Middle_Clip_x9.stl)                           | 2        | [eSun ABS+ (Purple)](printer-filament.md#esun-abs-purple) |      |        |      |   :x:   |       |
| [Rear_Bottom_Left_Clip](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Panel_Mounting/Rear_Bottom_Left_Clip_x1.stl)       | 1        | [eSun ABS+ (Purple)](printer-filament.md#esun-abs-purple) |      |        |      |   :x:   |       |
| [Rear_Bottom_Right_Clip](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Panel_Mounting/Rear_Bottom_Right_Clip_x1.stl)     | 1        | [eSun ABS+ (Purple)](printer-filament.md#esun-abs-purple) |      |        |      |   :x:   |       |
| [TH_Hinge_A_Bottom](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Tophat/Extrusion_Tophat_v0.2/TH_Hinge_A_Bottom_x1.stl) | 1        | [eSun ABS+ (Purple)](printer-filament.md#esun-abs-purple) |      |        |      |   :x:   |       |
| [TH_Hinge_B_Bottom](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Tophat/Extrusion_Tophat_v0.2/TH_Hinge_B_Bottom_x1.stl) | 1        | [eSun ABS+ (Purple)](printer-filament.md#esun-abs-purple) |      |        |      |   :x:   |       |

#### :negative_squared_cross_mark: Right Panel

| Item                                                                                                                                         | Quantity | Material                                                  | Size | Weight | Cost | Printed | Notes |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------------- | ---- | ------ | ---- | :-----: | ----- |
| [Middle_Clip](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Panel_Mounting/Middle_Clip_x9.stl)                                   | 4        | [eSun ABS+ (Purple)](printer-filament.md#esun-abs-purple) |      |        |      |   :x:   |       |
| [Right_Bottom_Front_Hinge](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Panel_Mounting/Right_Bottom_Front_Hinge_x1.stl)         | 1        | [eSun ABS+ (Purple)](printer-filament.md#esun-abs-purple) |      |        |      |   :x:   |       |
| [Right_Bottom_Rear_Panel_Clip](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Panel_Mounting/Right_Bottom_Rear_Panel_Clip_x1.stl) | 1        | [eSun ABS+ (Purple)](printer-filament.md#esun-abs-purple) |      |        |      |   :x:   |       |
| [Right_Top_Left_Hinge](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Panel_Mounting/Right_Top_Left_Hinge_x1.stl)                 | 1        | [eSun ABS+ (Purple)](printer-filament.md#esun-abs-purple) |      |        |      |   :x:   |       |
| [Right_Top_Rear_Panel_Clip](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Panel_Mounting/Right_Top_Rear_Panel_Clip_x1.stl)       | 1        | [eSun ABS+ (Purple)](printer-filament.md#esun-abs-purple) |      |        |      |   :x:   |       |

#### :negative_squared_cross_mark: Left Panel

| Item                                                                                                                                         | Quantity | Material                                                  | Size | Weight | Cost | Printed | Notes |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------------- | ---- | ------ | ---- | :-----: | ----- |
| [Left_Bottom_Front_Panel_Clip](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Panel_Mounting/Left_Bottom_Front_Panel_Clip_x1.stl) | 1        | [eSun ABS+ (Purple)](printer-filament.md#esun-abs-purple) |      |        |      |   :x:   |       |
| [Left_Bottom_Rear_Panel_Clip](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Panel_Mounting/Left_Bottom_Rear_Panel_Clip_x1.stl)   | 1        | [eSun ABS+ (Purple)](printer-filament.md#esun-abs-purple) |      |        |      |   :x:   |       |
| [Left_Top_Front_Panel_Clip](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Panel_Mounting/Left_Top_Front_Panel_Clip_x1.stl)       | 1        | [eSun ABS+ (Purple)](printer-filament.md#esun-abs-purple) |      |        |      |   :x:   |       |
| [Left_Top_Rear_Panel_Clip](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Panel_Mounting/Left_Top_Rear_Panel_Clip_x1.stl)         | 1        | [eSun ABS+ (Purple)](printer-filament.md#esun-abs-purple) |      |        |      |   :x:   |       |
| [Middle_Clip](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Panel_Mounting/Middle_Clip_x9.stl)                                   | 4        | [eSun ABS+ (Purple)](printer-filament.md#esun-abs-purple) |      |        |      |   :x:   |       |

#### :negative_squared_cross_mark: Front Panel

| Item                                                                                                                                 | Quantity | Material                                                  | Size | Weight | Cost | Printed | Notes |
| ------------------------------------------------------------------------------------------------------------------------------------ | -------- | --------------------------------------------------------- | ---- | ------ | ---- | :-----: | ----- |
| [Door_Handle](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Panel_Mounting/Door_Handle_x1.STL)                           | 1        | [eSun ABS+ (Orange)](printer-filament.md#esun-abs-orange) |      |        |      |   :x:   |       |
| [Door_Latch](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Panel_Mounting/Door_Latch_x2.STL)                             | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black)   |      |        |      |   :x:   |       |
| [Front_Bottom_Left_Clip](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Panel_Mounting/Front_Bottom_Left_Clip_x1.stl)     | 1        | [eSun ABS+ (Purple)](printer-filament.md#esun-abs-purple) |      |        |      |   :x:   |       |
| [Front_Bottom_Right_Hinge](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Panel_Mounting/Front_Bottom_Right_Hinge_x1.stl) | 1        | [eSun ABS+ (Purple)](printer-filament.md#esun-abs-purple) |      |        |      |   :x:   |       |
| [Front_Top_Left_Clip](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Panel_Mounting/Front_Top_Left_Clip_x1.stl)           | 1        | [eSun ABS+ (Purple)](printer-filament.md#esun-abs-purple) |      |        |      |   :x:   |       |
| [Front_Top_Right_Hinge](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Panel_Mounting/Front_Top_Right_Hinge_x1.stl)       | 1        | [eSun ABS+ (Purple)](printer-filament.md#esun-abs-purple) |      |        |      |   :x:   |       |

### Extrusion Tophat

![Voron 0.2 Extrusion Tophat](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron-0.2/extrusion-tophat.jpg)

> Image &copy; 2023 [Voron Design](https://www.vorondesign.com/)

#### :negative_squared_cross_mark: Top Panel

| Item                                                                                                                     | Quantity | Material                                                  | Size | Weight | Cost | Printed | Notes |
| ------------------------------------------------------------------------------------------------------------------------ | -------- | --------------------------------------------------------- | ---- | ------ | ---- | :-----: | ----- |
| [TH_Top_Clip](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Tophat/Extrusion_Tophat_v0.2/TH_Top_Clip_x4.stl) | 4        | [eSun ABS+ (Purple)](printer-filament.md#esun-abs-purple) |      |        |      |   :x:   |       |

#### :negative_squared_cross_mark: Front & Side Panels

| Item                                                                                                                                       | Quantity | Material                                                  | Size | Weight | Cost | Printed | Notes |
| ------------------------------------------------------------------------------------------------------------------------------------------ | -------- | --------------------------------------------------------- | ---- | ------ | ---- | :-----: | ----- |
| [TH_Lower_Clip](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Tophat/Extrusion_Tophat_v0.2/TH_Lower_Clip_x3.stl)               | 3        | [eSun ABS+ (Purple)](printer-filament.md#esun-abs-purple) |      |        |      |   :x:   |       |
| [TH_Lower_Clip_Mirror](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Tophat/Extrusion_Tophat_v0.2/TH_Lower_Clip_Mirror_x3.stl) | 3        | [eSun ABS+ (Purple)](printer-filament.md#esun-abs-purple) |      |        |      |   :x:   |       |
| [TH_Side_Clip](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Tophat/Extrusion_Tophat_v0.2/TH_Side_Clip_x4.stl)                 | 3        | [eSun ABS+ (Purple)](printer-filament.md#esun-abs-purple) |      |        |      |   :x:   |       |
| [TH_Side_Clip_Mirror](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Tophat/Extrusion_Tophat_v0.2/TH_Side_Clip_Mirror_x4.stl)   | 3        | [eSun ABS+ (Purple)](printer-filament.md#esun-abs-purple) |      |        |      |   :x:   |       |

#### :negative_squared_cross_mark: Rear Panel

| Item                                                                                                                                     | Quantity | Material                                                  | Size | Weight | Cost | Printed | Notes |
| ---------------------------------------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------------- | ---- | ------ | ---- | :-----: | ----- |
| [TH_Hinge_A_Top](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Tophat/Extrusion_Tophat_v0.2/TH_Hinge_A_Top_x1.stl)           | 1        | [eSun ABS+ (Purple)](printer-filament.md#esun-abs-purple) |      |        |      |   :x:   |       |
| [TH_Hinge_B_Top](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Tophat/Extrusion_Tophat_v0.2/TH_Hinge_B_Top_x1.stl)           | 1        | [eSun ABS+ (Purple)](printer-filament.md#esun-abs-purple) |      |        |      |   :x:   |       |
| [TH_Side_Clip](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Tophat/Extrusion_Tophat_v0.2/TH_Side_Clip_x4.stl)               | 1        | [eSun ABS+ (Purple)](printer-filament.md#esun-abs-purple) |      |        |      |   :x:   |       |
| [TH_Side_Clip_Mirror](https://github.com/VoronDesign/Voron-0/blob/Voron0.2/STLs/Tophat/Extrusion_Tophat_v0.2/TH_Side_Clip_Mirror_x4.stl) | 1        | [eSun ABS+ (Purple)](printer-filament.md#esun-abs-purple) |      |        |      |   :x:   |       |

#### :negative_squared_cross_mark: Camera Mount

| Item                                                                                              | Quantity | Material                                                  | Size | Weight | Cost | Printed | Notes                                   |
| ------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------------- | ---- | ------ | ---- | :-----: | --------------------------------------- |
| [picamera3stl](https://github.com/chirpy2605/voron/blob/main/V0/v0.2_Stuff/STLs/picamera3stl.stl) | 1        | [eSun ABS+ (Purple)](printer-filament.md#esun-abs-purple) |      |        |      |   :x:   | This is a Voron Users Mod by chirpy2605 |

### Nevermore Micro V5 Duo

The [Nevermore Micro V5 Duo](https://github.com/nevermore3d/Nevermore_Micro) filters the encosure to reduce the smell of printing ABS. [Carbon refill is available from here](https://www.onetwo3d.co.uk/product/nevermore3d-carbon/).

| Item                                                                                                                                              | Quantity | Material                                                | Printed | Notes |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | :-----: | ----- |
| [Duo_Cartridge_LID](https://github.com/nevermore3d/Nevermore_Micro/blob/master/V5_Duo/V0/Duo_Cartridge_LID.stl)                                   | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   |       |
| [Duo_Cartridge_STRAIGHT-AIRFLOW](https://github.com/nevermore3d/Nevermore_Micro/blob/master/V5_Duo/V0/Duo_Cartridge_STRAIGHT-AIRFLOW_by_aive.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   |       |
| [Plenum_LID](https://github.com/nevermore3d/Nevermore_Micro/blob/master/V5_Duo/V0/Plenum_LID.stl)                                                 | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   |       |
| [V0_Duo_Plenum](https://github.com/nevermore3d/Nevermore_Micro/blob/master/V5_Duo/V0/V0_Duo_Plenum.stl)                                           | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   |       |

#### :negative_squared_cross_mark: Assembly

![Nevermore Filter Parts](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-voron-mods/nevermore-filter.jpg)

##### Parts Used

| Item                               | Quantity |
| ---------------------------------- | -------- |
| 5015 Centrifugal Fan (24V)         | 2        |
| 6mm x 3mm Round Neodymium Magnets  | 8        |
| Acid-free Activated Carbon Pack    | 1        |
| JST XH Connector Header 2 Position | 1        |
| M3 threaded inserts                | 6        |
| M3x18 BHCS                         | 1        |
| M3x16 BHCS                         | 4        |
| M3x12 BHCS                         | 2        |
| M3x6 BHCS                          | 2        |
| M3x4 BHCS                          | 1        |
| M3 Hammer Head T-nuts              | 2        |
