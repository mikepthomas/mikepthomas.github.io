# Building an Enraged Rabbit Carrot Feeder

Febuary 22, 2022 by [Mike Thomas](https://github.com/mikepthomas)

Building an [Enraged Rabbit Carrot Feeder](https://github.com/EtteGit/EnragedRabbitProject) to print multiple Colours on the Voron.

---

## Table of contents

1. [Sourcing Parts](#sourcing-parts)
2. [Printing Parts](#printing-parts)
3. [Mods](#mods)

## Sourcing Parts

I have some of the parts required left over from the build of the [Voron](printer-voron-1.8.md). I will use these here.

### Electronics

| Item                                        | Quantity | Received | Notes |
| ------------------------------------------- | -------- | -------- | ----- |
| NEMA14 Motor 14HS11-1004S                   | 1        |          |       |
| NEMA17 Motor 17HS08-1004S                   | 1        |          |       |
| towerpro MG90S servo                        | 1        | 1        |       |
| Stepper drivers (any, but TMC2209 are nice) | 2        |          |       |
| TCRT5000 sensor pcb                         | 1        |          |       |
| Omron Mouse Button - Micro Switch           | 1        | 7        |       |

### Hardware

| Item                          | Quantity | Received | Notes                                   |
| ----------------------------- | -------- | -------- | --------------------------------------- |
| 6 sets of bondtechs gears     | 7        | 2        |                                         |
| LM8UU bearings or RJ4JP-01-08 | 2        | 8        |                                         |
| M5 threaded rods              | 2        |          |                                         |
| 8mm smooth rods               | 2        | 2        | Will use offcuts from Carbon Fiber Rods |
| D-cut 5mm shaft               | 1        |          |                                         |
| MR623ZZ bearing               | 1        |          |                                         |
| MR85ZZ bearings               | 5        |          |                                         |

### Fasteners

| Item                                        | Quantity | Received | Notes |
| ------------------------------------------- | -------- | -------- | ----- |
| M3 threaded inserts                         | 26       | 50       |       |
| M5x30 BHCS                                  | 2        | 15       |       |
| M5x16 BHCS                                  | 1        |          |       |
| M5 nuts                                     | 4        | 11       |       |
| M5 nylock nuts                              | 5        |          |       |
| M5 washers                                  | 2        | 30       |       |
| M3x8 SHCS                                   | 20       | 9        |       |
| M3x8 BHCS                                   | 5        |          |       |
| M3x12 SHCS                                  | 3        |          |       |
| M3x16 SHCS                                  | 10       | 13       |       |
| M3x20 SHCS                                  | 7        | 20       |       |
| M3x40 SHCS                                  | 2        | 15       |       |
| M3 washers (could also be the DIN125 below) | 2        | 40       |       |
| M3 DIN125 Steel Washer                      | 6        |          |       |
| M2x8 SHCS or M2x10 SHCS                     | 2        | 43       |       |

### Motion

| Item                                 | Quantity | Received | Notes |
| ------------------------------------ | -------- | -------- | ----- |
| GT2 belt 6mm (open)                  | 1        | 1        |       |
| GT2 20T Pulley 6 mm, 5mm bore        | 3        | 2        |       |
| GT2 20T Toothed Idler 6 mm, 5mm bore | 1        |          |       |
| GT2 188m Belt loop 6mm               | 1        |          |       |

### Misc

| Item                              | Quantity | Received | Notes |
| --------------------------------- | -------- | -------- | ----- |
| 6mm x 3mm Round Neodymium Magnets | 22       | 42       |       |
| Bowden Clip                       | 7        |          |       |
| Bowden Fitting                    | 7        | 3        |       |
| 7X7 Drag chain                    | 1        |          |       |

### Cables

| Item                                                  | Quantity | Received | Notes |
| ----------------------------------------------------- | -------- | -------- | ----- |
| MicroFit3 Male Pin (43031-0007)                       | 26       | 160      |       |
| MicroFit3 Female Pin (43030-0007)                     | 26       | 160      |       |
| MicroFit Connector Receptacle 4 Position (43645-0400) | 4        | 18       |       |
| MicroFit Connector Plug 4 Position (43640-0401)       | 4        | 18       |       |
| MicroFit Connector Receptacle 5 Position (43645-0500) | 2        | 20       |       |
| MicroFit Connector Plug 5 Position (43640-0501)       | 2        | 20       |       |

### Toolhead Sensor

| Item                                 | Quantity | Received | Notes |
| ------------------------------------ | -------- | -------- | ----- |
| AH3364Q-P-B Hall Effect sensor (SIP) | 1        |          |       |
| M3 DIN125 Steel Washer               | 1        |          |       |
| 6mm x 3mm Round Neodymium Magnets    | 1        | 20       |       |
| M3x8 SHCS                            | 1        |          |       |
| M3x12 SHCS                           | 1        |          |       |
| JST XH 3 pins male connector         | 1        | 16       |       |

## Printing Parts

### Filament Blocks

| Item                                                                                                                                                     | Quantity | Material                                                | Printed                       | Notes |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | ----------------------------- | ----- |
| [Filament_Block](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Filament%20blocks/Filament_Block_xN.stl)                   | 6        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :negative_squared_cross_mark: |       |
| [Filament_Blocks_End](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Filament%20blocks/Filament_Blocks_End.stl)            | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :negative_squared_cross_mark: |       |
| [Bearing_Insert_Feet](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Filament%20blocks/%5Ba%5D_Bearing_Insert_Feet_x2.stl) | 2        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | :negative_squared_cross_mark: |       |
| [Bearing_Insert](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Filament%20blocks/%5Ba%5D_Bearing_Insert_x2.stl)           | 2        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | :negative_squared_cross_mark: |       |
| [Blocks_End_Feet](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Filament%20blocks/%5Ba%5D_Blocks_End_Feet.stl)            | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | :negative_squared_cross_mark: |       |
| [Latch](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Filament%20blocks/%5Ba%5D_Latch_xN.stl)                             | 6        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | :negative_squared_cross_mark: |       |
| [Top_Hat](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Filament%20blocks/%5Ba%5D_Top_Hat_xN.stl)                         | 6        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | :negative_squared_cross_mark: |       |

#### Magnetic Gates

| Item                                                                                                                                                           | Quantity | Material                                            | Printed                       | Notes |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------- | ----------------------------- | ----- |
| [Magnetic_Gate_0](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Filament%20blocks/Magnetic%20Gates/%5Ba%5D_Magnetic_Gate_0.stl) | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red) | :negative_squared_cross_mark: |       |
| [Magnetic_Gate_1](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Filament%20blocks/Magnetic%20Gates/%5Ba%5D_Magnetic_Gate_1.stl) | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red) | :negative_squared_cross_mark: |       |
| [Magnetic_Gate_2](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Filament%20blocks/Magnetic%20Gates/%5Ba%5D_Magnetic_Gate_2.stl) | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red) | :negative_squared_cross_mark: |       |
| [Magnetic_Gate_3](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Filament%20blocks/Magnetic%20Gates/%5Ba%5D_Magnetic_Gate_3.stl) | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red) | :negative_squared_cross_mark: |       |
| [Magnetic_Gate_4](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Filament%20blocks/Magnetic%20Gates/%5Ba%5D_Magnetic_Gate_4.stl) | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red) | :negative_squared_cross_mark: |       |
| [Magnetic_Gate_5](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Filament%20blocks/Magnetic%20Gates/%5Ba%5D_Magnetic_Gate_5.stl) | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red) | :negative_squared_cross_mark: |       |

#### Tag Plates

| Item                                                                                                                                               | Quantity | Material                                            | Printed                       | Notes                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------- | ----------------------------- | ---------------------------------------------------------------- |
| [Tag_Plate_0](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Filament%20blocks/Tag%20Plates/%5Ba%5D_Tag_Plate_0.stl) | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red) | :negative_squared_cross_mark: | Will reprint the Multi colour version when the ERCF is completed |
| [Tag_Plate_1](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Filament%20blocks/Tag%20Plates/%5Ba%5D_Tag_Plate_1.stl) | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red) | :negative_squared_cross_mark: | Will reprint the Multi colour version when the ERCF is completed |
| [Tag_Plate_2](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Filament%20blocks/Tag%20Plates/%5Ba%5D_Tag_Plate_2.stl) | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red) | :negative_squared_cross_mark: | Will reprint the Multi colour version when the ERCF is completed |
| [Tag_Plate_3](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Filament%20blocks/Tag%20Plates/%5Ba%5D_Tag_Plate_3.stl) | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red) | :negative_squared_cross_mark: | Will reprint the Multi colour version when the ERCF is completed |
| [Tag_Plate_4](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Filament%20blocks/Tag%20Plates/%5Ba%5D_Tag_Plate_4.stl) | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red) | :negative_squared_cross_mark: | Will reprint the Multi colour version when the ERCF is completed |
| [Tag_Plate_5](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Filament%20blocks/Tag%20Plates/%5Ba%5D_Tag_Plate_5.stl) | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red) | :negative_squared_cross_mark: | Will reprint the Multi colour version when the ERCF is completed |

#### Tag Plates

| Item                                                                                                                                                           | Quantity | Material                                                | Printed                       | Notes                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | ----------------------------- | ---------------------------------------- |
| [Top_Hat_Locker_1](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Filament%20blocks/Top%20Hat%20Lockers/Top_Hat_Locker_1_xN.stl) | 6        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :negative_squared_cross_mark: | Manual says to start with all tools at 1 |

### Gearbox

| Item                                                                                                                                                   | Quantity | Material                                                | Printed                       | Notes                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | ------------------------------------------------------- | ----------------------------- | ------------------------------------------------------------------------------ |
| [Gear_Box_Back](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Gear%20box/Gear_Box_Back.stl)                             | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :negative_squared_cross_mark: |                                                                                |
| [Gear_Box_Back](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Gear%20box/Gear_Box_Back.stl)                             | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :negative_squared_cross_mark: |                                                                                |
| [Motor_Arm_NEMA14](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Gear%20box/NEMA14%20Gear%20motor/Motor_Arm_NEMA14.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :negative_squared_cross_mark: |                                                                                |
| [Motor_Arm_NEMA17](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Gear%20box/NEMA17%20Gear%20motor/Motor_Arm_NEMA17.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :negative_squared_cross_mark: | Will use my Clockwork 1 Nema 17 Pancake stepper after I upgrade to Clockwork 2 |
| [Bearing_Spacer](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Gear%20box/%5Ba%5D_Bearing_Spacer_x2.stl)                | 2        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | :negative_squared_cross_mark: |                                                                                |
| [Bottom_Panel](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Gear%20box/%5Ba%5D_Bottom_Panel.stl)                       | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | :negative_squared_cross_mark: |                                                                                |
| [Knob](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Gear%20box/%5Ba%5D_Knob.stl)                                       | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | :negative_squared_cross_mark: |                                                                                |
| [Logo_Plate](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Gear%20box/%5Ba%5D_Logo_Plate.stl)                           | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | :negative_squared_cross_mark: | Will reprint the Multi colour version when the ERCF is completed               |
| [M4_80T_Wheel](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Gear%20box/%5Ba%5D_M4_80T_Wheel.stl)                       | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | :negative_squared_cross_mark: |                                                                                |
| [Side_Latch](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Gear%20box/%5Ba%5D_Side_Latch_x2.stl)                        | 2        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | :negative_squared_cross_mark: |                                                                                |
| [Top_Panel](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Gear%20box/%5Ba%5D_Top_Panel.stl)                             | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | :negative_squared_cross_mark: |                                                                                |

### Linear Axis

| Item                                                                                                                                                        | Quantity | Material                                                | Printed                       | Notes |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | ----------------------------- | ----- |
| [Idler_Block](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Linear%20axis/Idler_Block.stl)                                   | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :negative_squared_cross_mark: |       |
| [Selector_Motor_Support](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Linear%20axis/Selector_Motor_Support.stl)             | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :negative_squared_cross_mark: |       |
| [Drag_Chain_Anchor_Bottom](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Linear%20axis/%5Ba%5D_Drag_Chain_Anchor_Bottom.stl) | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | :negative_squared_cross_mark: |       |
| [Motor_Lock](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Linear%20axis/%5Ba%5D_Motor_Lock.stl)                             | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | :negative_squared_cross_mark: |       |

### Selector

| Item                                                                                                                               | Quantity | Material                                                | Printed                       | Notes                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | ----------------------------- | ---------------------------------------------------------------- |
| [Belt_Tensionner](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Selector/Belt_Tensionner.stl)       | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :negative_squared_cross_mark: |                                                                  |
| [Drag_Chain_Anchor](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Selector/Drag_Chain_Anchor.stl)   | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :negative_squared_cross_mark: |                                                                  |
| [Encoder_Cart_Left](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Selector/Encoder_Cart_Left.stl)   | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :negative_squared_cross_mark: |                                                                  |
| [Encoder_Cart_Right](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Selector/Encoder_Cart_Right.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :negative_squared_cross_mark: |                                                                  |
| [Gate_Key](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Selector/Gate_Key.stl)                     | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :negative_squared_cross_mark: |                                                                  |
| [Selector_Door](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Selector/Selector_Door.stl)           | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) | :negative_squared_cross_mark: | Will reprint the Multi colour version when the ERCF is completed |
| [Selector_Cart](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Selector/%5Ba%5D_Selector_Cart.stl)   | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | :negative_squared_cross_mark: |                                                                  |
| [Servo_Arm](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Selector/%5Ba%5D_Servo_Arm.stl)           | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     | :negative_squared_cross_mark: |                                                                  |

### Supports

| Item                                                                                                                                                   | Quantity | Material                                            | Printed                       | Notes |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | --------------------------------------------------- | ----------------------------- | ----- |
| [Support_Feet_5mm](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Supports/V1%20or%20V2/%5Ba%5D_Support_Feet_5mm_x4.stl) | 4        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red) | :negative_squared_cross_mark: |       |

### Tools

| Item                                                                                                                            | Quantity | Material | Printed                       | Notes |
| ------------------------------------------------------------------------------------------------------------------------------- | -------- | -------- | ----------------------------- | ----- |
| [Calib_Test](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Tools/Calib_Test.stl)                 | 1        |          | :negative_squared_cross_mark: |       |
| [Pulley_Tool_NEMA14](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Tools/Pulley_Tool_NEMA14.stl) | 1        |          | :negative_squared_cross_mark: |       |
| [Pulley_Tool_NEMA17](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Tools/Pulley_Tool_NEMA17.stl) | 1        |          | :negative_squared_cross_mark: |       |

### Filament Sensor

I will print the relevent [Filament Sensor](https://github.com/EtteGit/EnragedRabbitProject/tree/main/Filament_Sensor) when I have printed the [Afterburner toolhead](printer-voron-1.8.md#gantry) to ensure I print the correct parts.

## Mods

https://github.com/EtteGit/EnragedRabbitProject/tree/main/usermods/JST-SM-Connectors

https://github.com/EtteGit/EnragedRabbitProject/tree/main/usermods/Printable_drag_chain
