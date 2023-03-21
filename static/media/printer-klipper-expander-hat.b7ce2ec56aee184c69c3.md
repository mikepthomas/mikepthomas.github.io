# Creating a Printed Circuit Board to control fans in Klipper

March 21, 2023 by [Mike Thomas](https://github.com/mikepthomas)

Creating a Raspberry Pi Hat based on [timmit99's Klipper Expander](https://github.com/timmit99/Klipper-Expander) to control additional fans using the [Raspberry Pi as a Secondary MCU in Klipper Firmware](https://www.klipper3d.org/RPi_microcontroller.html).

![Klipper Expander Hat Hero](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-klipper-expander-hat/klipper-expander-hat-hero.png)

---

## Table of contents

1. [Printed Circuit Board](#printed-circuit-board)
2. [Parts Required](#parts-required)

## Printed Circuit Board

I have created a [repository on my GitHub](https://github.com/mikepthomas/Klipper-Expander-Hat) with the KiCad design files and Gerber files that I used to produce Version 1 of the board.

![Klipper Expander Hat Back](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-klipper-expander-hat/klipper-expander-hat-back.png)

## Parts Required

### Connectors

| Item                              | Quantity | Received          | Notes       |
| --------------------------------- | -------- | ----------------- | ----------- |
| 2 Pin JST-XH Header               | 7        | 20                |             |
| 3 Pin JST-XH Header               | 1        | 20                |             |
| 4 Pin JST-XH Header               | 1        | 20                |             |
| 5 Pin JST-XH Header               | 1        | 20                |             |
| 40 Pin Raspberry Pi Header        | 1        | 2                 |             |
| Dupont Pin Headers                | 23 Pins  | 2 x 30 pin strips |             |
| KF301 Screw Terminal (5mm pitch)  | 1        |                   | 10 on order |
| PCB Panel Mount Blade Fuse Holder | 1        |                   | 5 on order  |

### SMD Components

| Item                                    | Quantity | Received | Notes        |
| --------------------------------------- | -------- | -------- | ------------ |
| 100nF Capacitor (1206 Package)          | 1        |          | 20 on order  |
| 4.7uF Capacitor (1206 Package)          | 2        |          | 20 on order  |
| 3.9kΩ Resistor (1206 Package)           | 2        |          | 100 on order |
| 4.7kΩ Resistor (1206 Package)           | 8        |          | 100 on order |
| 100Ω Resistor (1206 Package)            | 5        |          | 100 on order |
| 10kΩ Resistor (1206 Package)            | 5        |          | 100 on order |
| LED (1206 Package)                      | 6        |          | 100 on order |
| IRLML6344-TRPBF Mosfet (SOT-23 Package) | 5        |          | 50 on order  |

### Misc

| Item            | Quantity | Received | Notes       |
| --------------- | -------- | -------- | ----------- |
| 2510 Axial Fan  | 1        |          | 2 on order  |
| CAT24C32 EEPROM | 1        |          | 10 on order |
