# Building an Enraged Rabbit Carrot Feeder

Febuary 22, 2022 by [Mike Thomas](https://github.com/mikepthomas),
Updated April 8, 2022

Building an [Enraged Rabbit Carrot Feeder](https://github.com/EtteGit/EnragedRabbitProject) to print using multiple colours of filament on the Voron.

---

## Table of contents

1. [Sourcing Parts](#sourcing-parts)
2. [Printing Parts](#printing-parts)
3. [Mods](#mods)

## Sourcing Parts

I have some of the parts required left over from the build of the [Voron](printer-voron-1.8.md). I will use these here.

### Electronics

| Item                              | Quantity | Received | Notes |
| --------------------------------- | -------- | -------- | ----- |
| NEMA14 Motor 14HS11-1004S         | 1        | 1        |       |
| NEMA17 Motor 17HS08-1004S         | 1        | 1        |       |
| TowerPro MG90S servo              | 1        | 1        |       |
| TMC2209 Stepper drivers           | 2        | 2        |       |
| TCRT5000 sensor pcb               | 1        | 1        |       |
| Omron Mouse Button - Micro Switch | 1        | 1        |       |

### Hardware

| Item                      | Quantity | Received | Notes |
| ------------------------- | -------- | -------- | ----- |
| 7 sets of bondtechs gears | 7        | 7        |       |
| RJ4JP-01-08               | 2        | 2        |       |
| M5 threaded rods          | 2        | 2        |       |
| 8mm smooth rods           | 2        | 2        |       |
| D-cut 5mm shaft           | 1        | 1        |       |
| MR623ZZ bearing           | 1        | 1        |       |
| MR85ZZ bearings           | 5        | 5        |       |

### Fasteners

| Item                   | Quantity | Received | Notes        |
| ---------------------- | -------- | -------- | ------------ |
| M3 threaded inserts    | 26       | 32       |              |
| M5x30 BHCS             | 2        | 2        |              |
| M5x16 BHCS             | 1        | 1        |              |
| M5 nuts                | 4        | 5        |              |
| M5 nylock nuts         | 5        | 6        |              |
| M5 washers             | 2        | 3        |              |
| M3x8 SHCS              | 20       | 20       |              |
| M3x8 BHCS              | 5        |          | 100 on order |
| M3x12 SHCS             | 3        | 3        |              |
| M3x16 SHCS             | 10       | 10       |              |
| M3x20 SHCS             | 7        | 7        |              |
| M3x40 SHCS             | 2        | 2        |              |
| M3 DIN125 Steel Washer | 8        | 13       |              |
| M2x10 SHCS             | 2        | 2        |              |

### Motion

| Item                                 | Quantity | Received | Notes |
| ------------------------------------ | -------- | -------- | ----- |
| GT2 belt 6mm (open)                  | 1        | 1        |       |
| GT2 20T Pulley 6 mm, 5mm bore        | 3        | 3        |       |
| GT2 20T Toothed Idler 6 mm, 5mm bore | 1        | 1        |       |
| GT2 188m Belt loop 6mm               | 1        | 1        |       |

### Misc

| Item                              | Quantity | Received | Notes |
| --------------------------------- | -------- | -------- | ----- |
| 6mm x 3mm Round Neodymium Magnets | 22       | 23       |       |
| Bowden Clip                       | 7        | 8        |       |
| Bowden Fitting                    | 7        | 8        |       |
| 7X7 Drag chain                    | 1        | 1        |       |

### Cables

| Item                                                  | Quantity | Received | Notes        |
| ----------------------------------------------------- | -------- | -------- | ------------ |
| MicroFit3 Male Pin (43031-0007)                       | 26       |          | 140 on order |
| MicroFit3 Female Pin (43030-0007)                     | 26       |          | 140 on order |
| MicroFit Connector Receptacle 4 Position (43645-0400) | 4        |          | 10 on order  |
| MicroFit Connector Plug 4 Position (43640-0401)       | 4        |          | 10 on order  |
| MicroFit Connector Receptacle 5 Position (43645-0500) | 2        |          | 10 on order  |
| MicroFit Connector Plug 5 Position (43640-0501)       | 2        |          | 10 on order  |

### Toolhead Sensor

| Item                                 | Quantity | Received | Notes |
| ------------------------------------ | -------- | -------- | ----- |
| AH3364Q-P-B Hall Effect sensor (SIP) | 1        | 1        |       |
| M3 DIN125 Steel Washer               | 1        | 1        |       |
| 6mm x 3mm Round Neodymium Magnets    | 1        | 1        |       |
| M3x8 SHCS                            | 1        | 1        |       |
| M3x12 SHCS                           | 1        | 1        |       |
| JST XH 3 pins male connector         | 1        | 1        |       |

## Printing Parts

### Filament Blocks

| Item                                                                                                                                                     | Quantity | Material                                                | Printed | Notes |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | :-----: | ----- |
| [Filament_Block](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Filament%20blocks/Filament_Block_xN.stl)                   | 6        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   |       |
| [Filament_Blocks_End](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Filament%20blocks/Filament_Blocks_End.stl)            | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   |       |
| [Bearing_Insert_Feet](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Filament%20blocks/%5Ba%5D_Bearing_Insert_Feet_x2.stl) | 2        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |   :x:   |       |
| [Bearing_Insert](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Filament%20blocks/%5Ba%5D_Bearing_Insert_x2.stl)           | 2        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |   :x:   |       |
| [Blocks_End_Feet](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Filament%20blocks/%5Ba%5D_Blocks_End_Feet.stl)            | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |   :x:   |       |
| [Latch](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Filament%20blocks/%5Ba%5D_Latch_xN.stl)                             | 6        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |   :x:   |       |
| [Top_Hat](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Filament%20blocks/%5Ba%5D_Top_Hat_xN.stl)                         | 6        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |   :x:   |       |

#### Magnetic Gates

| Item                                                                                                                                                           | Quantity | Material                                            | Printed | Notes |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------- | :-----: | ----- |
| [Magnetic_Gate_0](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Filament%20blocks/Magnetic%20Gates/%5Ba%5D_Magnetic_Gate_0.stl) | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red) |   :x:   |       |
| [Magnetic_Gate_1](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Filament%20blocks/Magnetic%20Gates/%5Ba%5D_Magnetic_Gate_1.stl) | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red) |   :x:   |       |
| [Magnetic_Gate_2](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Filament%20blocks/Magnetic%20Gates/%5Ba%5D_Magnetic_Gate_2.stl) | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red) |   :x:   |       |
| [Magnetic_Gate_3](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Filament%20blocks/Magnetic%20Gates/%5Ba%5D_Magnetic_Gate_3.stl) | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red) |   :x:   |       |
| [Magnetic_Gate_4](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Filament%20blocks/Magnetic%20Gates/%5Ba%5D_Magnetic_Gate_4.stl) | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red) |   :x:   |       |
| [Magnetic_Gate_5](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Filament%20blocks/Magnetic%20Gates/%5Ba%5D_Magnetic_Gate_5.stl) | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red) |   :x:   |       |

#### Tag Plates

| Item                                                                                                                                               | Quantity | Material                                            | Printed | Notes                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------- | :-----: | ---------------------------------------------------------------- |
| [Tag_Plate_0](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Filament%20blocks/Tag%20Plates/%5Ba%5D_Tag_Plate_0.stl) | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red) |   :x:   | Will reprint the Multi colour version when the ERCF is completed |
| [Tag_Plate_1](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Filament%20blocks/Tag%20Plates/%5Ba%5D_Tag_Plate_1.stl) | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red) |   :x:   | Will reprint the Multi colour version when the ERCF is completed |
| [Tag_Plate_2](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Filament%20blocks/Tag%20Plates/%5Ba%5D_Tag_Plate_2.stl) | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red) |   :x:   | Will reprint the Multi colour version when the ERCF is completed |
| [Tag_Plate_3](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Filament%20blocks/Tag%20Plates/%5Ba%5D_Tag_Plate_3.stl) | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red) |   :x:   | Will reprint the Multi colour version when the ERCF is completed |
| [Tag_Plate_4](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Filament%20blocks/Tag%20Plates/%5Ba%5D_Tag_Plate_4.stl) | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red) |   :x:   | Will reprint the Multi colour version when the ERCF is completed |
| [Tag_Plate_5](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Filament%20blocks/Tag%20Plates/%5Ba%5D_Tag_Plate_5.stl) | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red) |   :x:   | Will reprint the Multi colour version when the ERCF is completed |

#### Tag Plates

| Item                                                                                                                                                           | Quantity | Material                                                | Printed | Notes                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | :-----: | ---------------------------------------- |
| [Top_Hat_Locker_1](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Filament%20blocks/Top%20Hat%20Lockers/Top_Hat_Locker_1_xN.stl) | 6        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   | Manual says to start with all tools at 1 |

### Gearbox

| Item                                                                                                                                                         | Quantity | Material                                                | Printed | Notes                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | ------------------------------------------------------- | :-----: | --------------------------------------------------------------------------------------------------------------------------- |
| [Gear_Box_Back](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Gear%20box/Gear_Box_Back.stl)                                   | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   |                                                                                                                             |
| [Gear_Box_Back](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Gear%20box/Gear_Box_Back.stl)                                   | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   |                                                                                                                             |
| [Motor_Arm_NEMA14](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Gear%20box/EASY%20BRD%20Option/Motor_Arm_NEMA14_EASYBRD.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   | This is the [Easy BRD](#easy-brd) version                                                                                   |
| [Motor_Arm_NEMA17](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Gear%20box/EASY%20BRD%20Option/Motor_Arm_NEMA17_EASYBRD.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   | This is the [Easy BRD](#easy-brd) version. I will use my Clockwork 1 Nema 17 Pancake stepper after I upgrade to Clockwork 2 |
| [Bearing_Spacer](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Gear%20box/%5Ba%5D_Bearing_Spacer_x2.stl)                      | 2        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |   :x:   |                                                                                                                             |
| [Bottom_Panel](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Gear%20box/%5Ba%5D_Bottom_Panel.stl)                             | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |   :x:   |                                                                                                                             |
| [Knob](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Gear%20box/%5Ba%5D_Knob.stl)                                             | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |   :x:   |                                                                                                                             |
| [Logo_Plate](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Gear%20box/%5Ba%5D_Logo_Plate.stl)                                 | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |   :x:   | Will reprint the Multi colour version when the ERCF is completed                                                            |
| [M4_80T_Wheel](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Gear%20box/%5Ba%5D_M4_80T_Wheel.stl)                             | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |   :x:   |                                                                                                                             |
| [Side_Latch](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Gear%20box/%5Ba%5D_Side_Latch_x2.stl)                              | 2        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |   :x:   |                                                                                                                             |
| [Top_Panel](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Gear%20box/%5Ba%5D_Top_Panel.stl)                                   | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |   :x:   |                                                                                                                             |

### Linear Axis

| Item                                                                                                                                                        | Quantity | Material                                                | Printed | Notes |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | :-----: | ----- |
| [Idler_Block](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Linear%20axis/Idler_Block.stl)                                   | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   |       |
| [Selector_Motor_Support](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Linear%20axis/Selector_Motor_Support.stl)             | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   |       |
| [Drag_Chain_Anchor_Bottom](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Linear%20axis/%5Ba%5D_Drag_Chain_Anchor_Bottom.stl) | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |   :x:   |       |
| [Motor_Lock](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Linear%20axis/%5Ba%5D_Motor_Lock.stl)                             | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |   :x:   |       |

### Selector

| Item                                                                                                                               | Quantity | Material                                                | Printed | Notes                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | :-----: | ---------------------------------------------------------------- |
| [Belt_Tensionner](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Selector/Belt_Tensionner.stl)       | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   |                                                                  |
| [Drag_Chain_Anchor](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Selector/Drag_Chain_Anchor.stl)   | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   |                                                                  |
| [Encoder_Cart_Left](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Selector/Encoder_Cart_Left.stl)   | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   |                                                                  |
| [Encoder_Cart_Right](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Selector/Encoder_Cart_Right.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   |                                                                  |
| [Gate_Key](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Selector/Gate_Key.stl)                     | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   |                                                                  |
| [Selector_Door](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Selector/Selector_Door.stl)           | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   | Will reprint the Multi colour version when the ERCF is completed |
| [Selector_Cart](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Selector/%5Ba%5D_Selector_Cart.stl)   | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |   :x:   |                                                                  |
| [Servo_Arm](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Selector/%5Ba%5D_Servo_Arm.stl)           | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |   :x:   |                                                                  |

### Supports

| Item                                                                                                                                                   | Quantity | Material                                            | Printed | Notes |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | --------------------------------------------------- | :-----: | ----- |
| [Support_Feet_5mm](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Supports/V1%20or%20V2/%5Ba%5D_Support_Feet_5mm_x4.stl) | 4        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red) |   :x:   |       |

### Tools

| Item                                                                                                                            | Quantity | Material | Printed | Notes |
| ------------------------------------------------------------------------------------------------------------------------------- | -------- | -------- | :-----: | ----- |
| [Calib_Test](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Tools/Calib_Test.stl)                 | 1        |          |   :x:   |       |
| [Pulley_Tool_NEMA14](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Tools/Pulley_Tool_NEMA14.stl) | 1        |          |   :x:   |       |
| [Pulley_Tool_NEMA17](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Tools/Pulley_Tool_NEMA17.stl) | 1        |          |   :x:   |       |

### Filament Sensor

I will print the relevent [Filament Sensor](https://github.com/EtteGit/EnragedRabbitProject/tree/main/Filament_Sensor) when I have printed the [Afterburner toolhead](printer-voron-1.8.md#gantry) to ensure I print the correct parts.

## Mods

### JST SM Connectors

I have purchased JST SM connectors instead of Microfit 3 (this doesnt matter for the Voron build) however, they need to be inserted into printed parts for the ERCF. This Mod allows the use of these connectors.

[JST SM Connectors Mod](https://github.com/EtteGit/EnragedRabbitProject/tree/main/usermods/JST-SM-Connectors)

### Printable Chain

The chain is smaller on the ERCF than the chain for the Voron build. I am not expecting to have any chain left over (especially as I am going to print Z chain) and rather than buying some more chain I will try printing it instead.

[Printable Chain](https://github.com/EtteGit/EnragedRabbitProject/tree/main/usermods/Printable_drag_chain)

### Easy BRD

My SKR 1.4 Turbo does not have enough Stepper Motor Drivers to run the ERCF, this is a board specifically designed to run the Carrot Feeder.

[Easy BRD](https://github.com/Tircown/ERCF-easy-brd)
