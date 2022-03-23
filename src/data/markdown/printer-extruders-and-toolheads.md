# Extruders and Toolheads

Created March 7, 2022 by [Mike Thomas](https://github.com/mikepthomas),
Updated March 23, 2022

Extruders and Toolheads that I have used or are going to use on my 3D Printer.

![Anet A8 MK8 Extruder](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer/17-extruder.jpg)

---

## Table of contents

1. [Anet A8 MK8](#anet-a8-mk8)
2. [ANET A8 BMG Direct Drive](#anet-a8-bmg-direct-drive)
3. [Voron M4](#voron-m4)
4. [Voron Afterburner/Stealthburner](#voron-afterburner-stealthburner)

## Anet A8 MK8

This is the [Stock hotend and extruder that came with the Anet A8](printer.md#x-axis) I have replaced all of the hotend parts, the heater block, heater cartridge, thermistor and heat break and have added a heater block sock. I have also added a few [3D printed quality of life upgrades](printer-printed-upgrades.md#extruder-upgrades).

## ANET A8 BMG Direct Drive

I have purchased parts to install the [ANET A8 E3DV6 BMG Direct Drive X Carriage](https://www.thingiverse.com/thing:3807114), the adapter plate should be a direct bolt on to the X Carriage of the Anet A8. This was chosen as the parts that are required for this are the exact same parts that are required to build the [Voron Afterburner](#voron-afterburner-stealthburner).

### Printed Parts

| Item                                                                   | Quantity | Material                                                | Printed | Notes                          |
| ---------------------------------------------------------------------- | -------- | ------------------------------------------------------- | :-----: | ------------------------------ |
| [StepperBMG_holder](https://www.thingiverse.com/thing:4271258/files)   | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   | Version with Cable Chain Mount |
| [BLtouch_support](https://www.thingiverse.com/thing:3807114/files)     | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   |                                |
| [Fan_holder](https://www.thingiverse.com/thing:3807114/files)          | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   |                                |
| [Baseplate_BMG](https://www.thingiverse.com/thing:3807114/files)       | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   |                                |
| [Mistral_V2.1a_Leo_N](https://www.thingiverse.com/thing:2121279/files) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   |                                |
| [E3D_Fan_Duct](https://www.thingiverse.com/thing:929326/files)         | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   |                                |

## Voron M4

I will print two M4 Extruders, 1 standard and 1 mirrored to mount to the back of the printer so that I can experiment with the dual bowden setup.
When I have upgraded to the Afterburner, I will reuse the parts for the M4 for the [Enraged Rabbit Carrot Feeder](printer-enraged-rabbit-carrot-feeder.md).

### Fasteners

| Item                 | Quantity | Received | Notes      |
| -------------------- | -------- | -------- | ---------- |
| M3x30 SHCS           | 8        | 4        | 4 on order |
| M3x16 SHCS           | 4        | 2        | 2 on order |
| M3x12 SHCS           | 2        | 1        | 1 on order |
| M3x6 BHCS            | 10       | 5        | 5 on order |
| M3 Threaded Insert   | 10       | 5        | 5 on order |
| M3 Washer            | 4        | 2        | 2 on order |
| Thumb Screw Assembly | 2        | 1        | 1 on order |

### Motion

| Item                                 | Quantity | Received | Notes      |
| ------------------------------------ | -------- | -------- | ---------- |
| GT2 Belt Loop (6mm wide) - 188mm     | 2        | 1        | 1 on order |
| GT2 20T (6mm wide) Pulley (5mm bore) | 4        | 2        | 2 on order |
| F695 2RS                             | 4        | 2        | 2 on order |
| Bondtech Drive Gear Set              | 2        | 1        | 1 on order |
| 5mm x 50mm Shaft                     | 2        | 1        | 1 on order |

### Electronics

| Item                       | Quantity | Received | Notes                                      |
| -------------------------- | -------- | -------- | ------------------------------------------ |
| NEMA17 Motor 17HS15-1504S1 | 2        |          | Will use 2 Anet Motors at first to try out |

### Bowden

| Item            | Quantity | Received | Notes      |
| --------------- | -------- | -------- | ---------- |
| Bowden Clip     | 2        | 1        | 1 on order |
| Bowden Fitting  | 2        | 1        | 1 on order |
| Bowden Tube (m) | 2        | 1        | 2 on order |

### Printed Parts

| Item                                                                                                         | Quantity | Material                                                | Printed | Notes |
| ------------------------------------------------------------------------------------------------------------ | -------- | ------------------------------------------------------- | :-----: | ----- |
| [80t_gear](https://github.com/VoronDesign/Mobius-Extruder/blob/master/STLs/%5Ba%5D_80t_gear.stl)             | 2        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |   :x:   |       |
| [5x4mm_spacer](https://github.com/VoronDesign/Mobius-Extruder/blob/master/STLs/%5Ba%5D_5x4mm_spacer.stl)     | 2        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |   :x:   |       |
| [guidler](https://github.com/VoronDesign/Mobius-Extruder/blob/master/STLs/%5Ba%5D_guidler.stl)               | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |   :x:   |       |
| [guidler_mirror](https://github.com/VoronDesign/Mobius-Extruder/blob/master/STLs/%5Ba%5D_guidler_mirror.stl) | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |   :x:   |       |
| [latch_shuttle](https://github.com/VoronDesign/Mobius-Extruder/blob/master/STLs/latch_shuttle.stl)           | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   |       |
| [end_plate](https://github.com/VoronDesign/Mobius-Extruder/blob/master/STLs/end_plate.stl)                   | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   |       |
| [end_plate_mirror](https://github.com/VoronDesign/Mobius-Extruder/blob/master/STLs/end_plate_mirror.stl)     | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   |       |
| [motor_plate](https://github.com/VoronDesign/Mobius-Extruder/blob/master/STLs/motor_plate.stl)               | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   |       |
| [motor_plate_mirror](https://github.com/VoronDesign/Mobius-Extruder/blob/master/STLs/motor_plate_mirror.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   |       |
| [main_body](https://github.com/VoronDesign/Mobius-Extruder/blob/master/STLs/main_body.stl)                   | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   |       |
| [main_body_mirror](https://github.com/VoronDesign/Mobius-Extruder/blob/master/STLs/main_body_mirror.stl)     | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   |       |
| [latch](https://github.com/VoronDesign/Mobius-Extruder/blob/master/STLs/%5Ba%5D_latch.stl)                   | 2        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |   :x:   |       |

## Voron Dual Bowden

### Bowden

| Item          | Quantity | Received | Notes       |
| ------------- | -------- | -------- | ----------- |
| Bowden Clip   | 2        |          |             |
| Bowden Collet | 2        |          | 10 on order |

### Printed Parts

| Item                                                                                                                                     | Quantity | Material                                                | Printed | Notes                                   |
| ---------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | :-----: | --------------------------------------- |
| [bowden_dual_front_a](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Gantry/X_Axis/X_Carriage/Bowden/bowden_dual_front_a.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   |                                         |
| [bowden_dual_front_b](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Gantry/X_Axis/X_Carriage/Bowden/bowden_dual_front_b.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   |                                         |
| [bowden_rear](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Gantry/X_Axis/X_Carriage/Bowden/bowden_rear.stl)                 | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   |                                         |
| [chain_anchor](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Gantry/X_Axis/X_Carriage/Direct_Feed/chain_anchor_3hole.stl)    | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   | This is the Generic Cable Chain Version |

## Voron Afterburner/Stealthburner

I have opted to build the Beta version of the [Stealthburner](https://vorondesign.com/voron_stealthburner) toolhead, but using the original Afterburner extruder, the Clockwork 1. There are a number of reasons for deciding this:

1. I was planning on adding the [AB-BN By Badnoob](https://github.com/VoronDesign/VoronUsers/tree/master/printer_mods/Badnoob/AB-BN) for a larger cooling fan, this was integrated into the design of the Stealthburner.
2. I want to add the filament sensor for the [Enraged Rabbit Carrot Feeder](printer-enraged-rabbit-carrot-feeder.md) which is not currently compatible with Clockwork 2.
3. I want to add the [ERCF Afterburner Toolhead PCB](https://github.com/VoronDesign/Voron-Hardware/tree/master/Afterburner_Toolhead_PCB) which is also not currently compatible with Clockwork 2.
4. The Stealthburner has an integrated mount for an [ADXL345 for Klipper Input Shaper](https://www.klipper3d.org/Measuring_Resonances.html).
5. The Stealthburner also integrates some cool RGB LEDs (and who doesn't like a bit of RGB?).

As the Stealthburner is still in beta, some of the links below may not work. I will print the parts for the Clockwork Extruder first as they are less likely to be updated and will print the Stealthburner parts last to ensure I get the latest updates.

There is also an adapter plate, [Hypercube Afterburner adapter intergration remix](https://www.thingiverse.com/thing:5156654) that may work to mount the Afterburner on the Anet A8 guide rails.

### Sourcing Parts

#### Fasteners

| Item                                      | Quantity | Received | Notes                                                           |
| ----------------------------------------- | -------- | -------- | --------------------------------------------------------------- |
| M3x8 SHCS                                 | 2        | 182      | 50 on order. in [Voron 1.8 BOM](printer-voron-1.8.md#fasteners) |
| M3x6 FHCS                                 | 2        | 30       | 50 on order. in [Voron 1.8 BOM](printer-voron-1.8.md#fasteners) |
| M3x6 BHCS                                 | 1        | 30       | 50 on order                                                     |
| M3x50 SHCS                                | 2        | 50       |                                                                 |
| M3x30 SHCS                                | 3        | 30       | in [Voron 1.8 BOM](printer-voron-1.8.md#fasteners)              |
| M3x25 SHCS                                | 7        | 30       |                                                                 |
| M3x20 SHCS                                | 2        | 30       | in [Voron 1.8 BOM](printer-voron-1.8.md#fasteners)              |
| M3x16 SHCS                                | 4        | 30       | in [Voron 1.8 BOM](printer-voron-1.8.md#fasteners)              |
| M3x12 SHCS                                | 4        | 80       | in [Voron 1.8 BOM](printer-voron-1.8.md#fasteners)              |
| M3 Hexnut                                 | 2        | 50       | in [Voron 1.8 BOM](printer-voron-1.8.md#fasteners)              |
| M3 Brass heatstake inserts - short M3x5x4 | 22       | 100      | in [Voron 1.8 BOM](printer-voron-1.8.md#fasteners)              |
| Bondtech BMG Extruder Kit                 | 1        | 1        | in [Voron 1.8 BOM](printer-voron-1.8.md#fasteners)              |

#### Misc

| Item         | Quantity | Received | Notes                                         |
| ------------ | -------- | -------- | --------------------------------------------- |
| 3x6mm Magnet | 1        | 50       | in [Voron 1.8 BOM](printer-voron-1.8.md#misc) |

#### Electronics

| Item                                         | Quantity | Received | Notes                         |
| -------------------------------------------- | -------- | -------- | ----------------------------- |
| NeoPixel RGBW Mini Button PCB                | 3        | 3        |                               |
| NEMA14 36mm pancake Motor with 10 tooth gear | 1        |          | Only required for Clockwork 2 |
| 50x50x15 Centrifugal Fan                     | 1        |          | 1 on order                    |
| 40x40x10 Axial Fan                           | 1        |          | 2 on order                    |

#### Cables

| Item                                      | Quantity | Received | Notes                                          |
| ----------------------------------------- | -------- | -------- | ---------------------------------------------- |
| MicroFit3 Male Pin                        | 3        | 200      | in [Voron 1.8 BOM](printer-voron-1.8.md#wires) |
| MicroFit3 Female Pin                      | 3        | 200      | in [Voron 1.8 BOM](printer-voron-1.8.md#wires) |
| MicroFit3 Connector Receptacle 3 Position | 1        | 20       | in [Voron 1.8 BOM](printer-voron-1.8.md#wires) |
| MicroFit3 Connector Plug 3 Position       | 1        | 20       | in [Voron 1.8 BOM](printer-voron-1.8.md#wires) |
| 30AWG PTFE Cable (3ft total)              | 1        | 1        |                                                |
| 24AWG PTFE Cable (30ft total)             | 1        | 1        |                                                |

#### Toolhead Sensor

| Item                                 | Quantity | Received | Notes |
| ------------------------------------ | -------- | -------- | ----- |
| AH3364Q-P-B Hall Effect sensor (SIP) | 1        | 1        |       |
| M3 DIN125 Steel Washer               | 1        | 2        |       |
| 6mm x 3mm Round Neodymium Magnets    | 1        | 20       |       |
| M3x8 SHCS                            | 1        | 1        |       |
| M3x12 SHCS                           | 1        | 63       |       |
| JST XH 3 pins male connector         | 1        | 16       |       |

### Printing Parts

#### Clockwork

| Item                                                                                                                                                                          | Quantity | Material                                                | Printed | Notes                                                                            |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | :-----: | -------------------------------------------------------------------------------- |
| [pcb_cover](https://github.com/wile-e1/VoronUsers/blob/sb_cw1_pcb_cover/printer_mods/wile-e1/Stealthburner_CW1_PCB_Cover/sb_cw1_pcb_cover-r1.stl)                             | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |   :x:   | This a User Mod for the ERCF Toolhead PCB by wile-e1 that fits the Stealthburner |
| [pcb_cover_clip-on_mount](https://github.com/wile-e1/VoronUsers/blob/sb_cw1_pcb_cover/printer_mods/wile-e1/Stealthburner_CW1_PCB_Cover/sb_cw1_pcb_cover_clip-on_mount-r1.stl) | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |   :x:   | This a User Mod for the ERCF Toolhead PCB by wile-e1 that fits the Stealthburner |
| [guidler](https://github.com/VoronDesign/Voron-Afterburner/blob/master/STLs/Direct_Feed/%5Ba%5D_guidler.stl)                                                                  | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |   :x:   |                                                                                  |
| [ERCF_Sensor_Latch](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Filament_Sensor/Stls/AB/%5Ba%5D_AB_ERCF_Sensor_Latch.stl)                                       | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |   :x:   | ERCF Filament Sensor Part                                                        |
| [latch_shuttle](https://github.com/VoronDesign/Voron-Afterburner/blob/master/STLs/Direct_Feed/%5Ba%5D_latch_shuttle.stl)                                                      | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |   :x:   |                                                                                  |
| [chain_anchor](https://github.com/VoronDesign/Voron-Afterburner/blob/master/STLs/Direct_Feed/chain_anchor_3hole.stl)                                                          | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   | This is the Generic Cable Chain Version                                          |
| [ERCF_Sensor_Extruder_Body](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Filament_Sensor/Stls/AB/AB_ERCF_Sensor_Extruder_Body.stl)                               | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   | ERCF Filament Sensor Part                                                        |
| [ERCF_Sensor_Cable_Cover](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Filament_Sensor/Stls/AB/%5Ba%5D_AB_ERCF_Sensor_Cable_Cover.stl)                           | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |   :x:   | ERCF Filament Sensor Part                                                        |
| [extruder_motor_plate_for_pcb](https://github.com/VoronDesign/Voron-Hardware/blob/master/Afterburner_Toolhead_PCB/STLs/Clockwork/extruder_motor_plate_for_pcb.stl)            | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   | Afterburner Toolhead PCB Part                                                    |
| [pcb_spacer](https://github.com/VoronDesign/Voron-Hardware/blob/master/Afterburner_Toolhead_PCB/STLs/Clockwork/pcb_spacer.stl)                                                | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)     |   :x:   | Afterburner Toolhead PCB Part                                                    |

#### Stealthburner

| Item                                                                                                                                                          | Quantity | Material                                                         | Printed | Notes               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------------------------------------------- | :-----: | ------------------- |
| [main_body_beta5](https://github.com/VoronDesign/Voron-Afterburner/blob/sb-beta/STLs/Stealthburner/%5Ba%5D_stealthburner_main_body_beta5.stl)                 | 1        | [eSun ABS+ (Red)](printer-filament.md#esun-abs-red)              |   :x:   | This is a Beta Part |
| [LED_diffuser-beta3](https://github.com/VoronDesign/Voron-Afterburner/blob/sb-beta/STLs/Stealthburner/%5Bc%5D_stealthburner_LED_diffuser-beta3.stl)           | 1        | [BasicFil PETG (Clear)](printer-filament.md#basicfil-petg-clear) |   :x:   | This is a Beta Part |
| [LED_carrier-beta2](https://github.com/VoronDesign/Voron-Afterburner/blob/sb-beta/STLs/Stealthburner/%5Bo%5D_stealthburner_LED_carrier-beta2.stl)             | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black)          |   :x:   | This is a Beta Part |
| [LED_diffuser-mask-beta1](https://github.com/VoronDesign/Voron-Afterburner/blob/sb-beta/STLs/Stealthburner/%5Bo%5D_stealthburner_LED_diffuser-mask-beta1.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black)          |   :x:   | This is a Beta Part |

#### ADXL345 Mount

| Item                                                                                                                                                                  | Quantity | Material                                                | Printed | Notes                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | :-----: | ------------------------------------------------- |
| [adxl_mount_ldo_15mm_c-c-beta2](https://github.com/VoronDesign/Voron-Afterburner/blob/sb-beta/STLs/Stealthburner/ADXL345_Mounts/sb_adxl_mount_ldo_15mm_c-c-beta2.stl) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   | This is a Beta Part. Spacing on my sensor is 15mm |
| [adxl_washer_x2-beta0](https://github.com/VoronDesign/Voron-Afterburner/blob/sb-beta/STLs/Stealthburner/ADXL345_Mounts/sb_adxl_washer_x2-beta0.stl)                   | 2        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   | This is a Beta Part                               |

#### V6 Toolhead

| Item                                                                                                                                                                                               | Quantity | Material                                                | Printed | Notes                                   |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- | :-----: | --------------------------------------- |
| [toolhead\_(v6_r6)-front-beta3](<https://github.com/VoronDesign/Voron-Afterburner/blob/sb-beta/STLs/Stealthburner/Toolheads/revo_six_%26_v6/stealthburner_toolhead_(v6_r6)-front-beta3.stl>)       | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   | This is a Beta Part                     |
| [toolhead\_(v6_r6)-rear-cw1-beta4](<https://github.com/VoronDesign/Voron-Afterburner/blob/sb-beta/STLs/Stealthburner/Toolheads/revo_six_%26_v6/stealthburner_toolhead_(v6_r6)-rear-cw1-beta4.stl>) | 1        | [eSun ABS+ (Black)](printer-filament.md#esun-abs-black) |   :x:   | This is a Beta Part for the Clockwork 1 |