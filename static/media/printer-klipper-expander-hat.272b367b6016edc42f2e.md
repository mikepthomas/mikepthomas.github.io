# Creating a Printed Circuit Board to control fans in Klipper

March 21, 2023 by [Mike Thomas](https://github.com/mikepthomas),
Updated March 28, 2023

Creating a Raspberry Pi Hat based on [timmit99's Klipper Expander](https://github.com/timmit99/Klipper-Expander) to control additional fans using the [Raspberry Pi as a Secondary MCU in Klipper Firmware](https://www.klipper3d.org/RPi_microcontroller.html).

![Klipper Expander Hat Hero](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-klipper-expander-hat/klipper-expander-hat-hero.jpg)

---

## Table of contents

1. [Printed Circuit Board](#printed-circuit-board)
2. [Flash Hat EEPROM](#flash-hat-eeprom)
3. [Parts Required](#parts-required)

## Printed Circuit Board

![Klipper Expander Hat Front](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-klipper-expander-hat/klipper-expander-hat-front.png)

I have created a [repository on my GitHub](https://github.com/mikepthomas/Klipper-Expander-Hat) with the KiCad design files and Gerber files that I used to produce Version 1 of the board.

![Klipper Expander Hat Back](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-klipper-expander-hat/klipper-expander-hat-back.png)

## Flash Hat EEPROM

### Install git

We will need to install Git so we can check out the Raspberry Pi Hats Repository as it is not included in the base Raspberry Pi OS image.

```bash
pi@raspberrypi:~ $ sudo apt update
...
pi@raspberrypi:~ $ sudo apt install git
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
The following additional packages will be installed:
  git-man liberror-perl
Suggested packages:
  git-daemon-run | git-daemon-sysvinit git-doc git-el git-email git-gui gitk gitweb git-cvs git-mediawiki git-svn
The following NEW packages will be installed:
  git git-man liberror-perl
0 upgraded, 3 newly installed, 0 to remove and 13 not upgraded.
Need to get 6,533 kB/6,564 kB of archives.
After this operation, 33.1 MB of additional disk space will be used.
Do you want to continue? [Y/n] y
...
Setting up git (1:2.30.2-1+deb11u2) ...
```

### Clone Hats Git Repository

Next we need to get the code from the Raspberry Pi Hats Repository.

```bash
pi@raspberrypi:~ $ git clone https://github.com/raspberrypi/hats.git
Cloning into 'hats'...
remote: Enumerating objects: 624, done.
remote: Counting objects: 100% (154/154), done.
remote: Compressing objects: 100% (65/65), done.
remote: Total 624 (delta 100), reused 131 (delta 89), pack-reused 470
Receiving objects: 100% (624/624), 326.80 KiB | 1.56 MiB/s, done.
Resolving deltas: 100% (366/366), done.
```

### Make EEPROM Utils

Once we have cloned the repository we need to compile the tools to make the EEPROM image and flash it to the chip.

```bash
pi@raspberrypi:~ $ cd hats/eepromutils/
pi@raspberrypi:~/hats/eepromutils $ make -j4
cc -Wall -Wextra eepmake.c -o eepmake
cc -Wall -Wextra eepdump.c -o eepdump
pi@raspberrypi:~/hats/eepromutils $ ls
eepdump  eepdump.c  eepflash.sh  eepmake  eepmake.c  eeprom_settings.txt  eeptypes.h  Makefile  README.md
```

### Enable I2C

To communicate with the EEPROM chip we need to enable the I2C interface.

```bash
pi@raspberrypi:~/hats/eepromutils $ sudo raspi-config
```

Select:
interfacing Options -> I2C -> Yes -> ok -> Finish

We will then need to reboot the Raspberry Pi to enable.

```bash
pi@raspberrypi:~/hats/eepromutils $ sudo reboot
```

When finished restarting, we will need to install the `i2c-tools` package, log in and run:

```bash
pi@raspberrypi:~ $ sudo apt install i2c-tools
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
The following additional packages will be installed:
  libi2c0 read-edid
Suggested packages:
  libi2c-dev python-smbus
The following NEW packages will be installed:
  i2c-tools libi2c0 read-edid
0 upgraded, 3 newly installed, 0 to remove and 13 not upgraded.
Need to get 103 kB of archives.
After this operation, 359 kB of additional disk space will be used.
Do you want to continue? [Y/n] y
...
Setting up i2c-tools (4.2-1+b1) ...
```

### Connect EEPROM

The Raspberry Pi should be powered off before making any connections to the GPIO pins.

```bash
pi@raspberrypi:~ $ sudo halt
```

We will then need to connect the EEPROM chip as per the following diagram, I did not add the RGB LED or it's resistors as I just wanted to flash the EEPROM.

![EEPROM Connection Diagram](https://rpi-magazines.s3-eu-west-1.amazonaws.com/magpi/legacy-assets/2016/03/eeprom-hat-led_bb.jpg)

> Image &copy; 2016 [The MagPi Magazine](https://magpi.raspberrypi.com/articles/make-your-own-hat)

I did not have any 3.9kΩ resistors available but I used 4.7kΩ without any problems.

Switch the Raspberry Pi back on.

### Test EEPROM is Connected

If when we try to detect the EEPROM we get a 'No such file or directory' error such as...

```bash
pi@raspberrypi:~ $ i2cdetect -y 9
Error: Could not open file `/dev/i2c-9' or `/dev/i2c/9': No such file or directory
```

...run the following command as explained in the [EEPROM Utils Docs](https://github.com/raspberrypi/hats/tree/master/eepromutils).

```bash
pi@raspberrypi:~ $ sudo dtoverlay i2c-gpio i2c_gpio_sda=0 i2c_gpio_scl=1 bus=9
```

You should then be able to see the EEPROM Chip at address 50:

```bash
pi@raspberrypi:~ $ i2cdetect -y 9
     0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f
00:                         -- -- -- -- -- -- -- --
10: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
20: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
30: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
40: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
50: 50 -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
60: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
70: -- -- -- -- -- -- -- --
```

### Zero EEPROM

The Recommended EEPROM in the [Design Guide](https://github.com/raspberrypi/hats/blob/master/designguide.md) at the time of writing is CAT24C32 which is a 32kbit (4kbyte) device.
As we don't know the state of the EEPROM it is best to clear it by setting it all to zeros.
If your EEPROM is a different size you will need to set `count` to the value in kbyte of your chip.

```bash
pi@raspberrypi:~ $ cd hats/eepromutils/
pi@raspberrypi:~/hats/eepromutils $ dd if=/dev/zero ibs=1k count=4 of=blank.eep
4+0 records in
8+0 records out
4096 bytes (4.1 kB, 4.0 KiB) copied, 0.000941149 s, 4.4 MB/s
pi@raspberrypi:~/hats/eepromutils $ hexdump blank.eep
0000000 0000 0000 0000 0000 0000 0000 0000 0000
*
0001000
pi@raspberrypi:~/hats/eepromutils $ sudo ./eepflash.sh -w -f=blank.eep -t=24c32
This will attempt to talk to an eeprom at i2c address 0x50. Make sure there is an eeprom at this address.
This script comes with ABSOLUTELY no warranty. Continue only if you know what you are doing.
Do you wish to continue? (yes/no): yes
Writing...
4096 bytes (4.1 kB, 4.0 KiB) copied, 17 s, 0.2 kB/s
8+0 records in
8+0 records out
4096 bytes (4.1 kB, 4.0 KiB) copied, 16.7208 s, 0.2 kB/s
Closing EEPROM Device.
Done.
```

### Flash EEPROM

Now that we have a blank EEPROM chip, we can configure and flash the Hat EEPROM image to it.

```bash
pi@raspberrypi:~/hats/eepromutils $ nano eeprom_settings.txt
pi@raspberrypi:~/hats/eepromutils $ ./eepmake eeprom_settings.txt klipper-expander-hat.eep
Opening file eeprom_settings.txt for read
UUID=fef562f0-9e28-4453-88c2-c073303e6ab2
Done reading
Writing out...
Done.
pi@raspberrypi:~/hats/eepromutils $ sudo ./eepflash.sh -w -f=klipper-expander-hat.eep -t=24c32
This will attempt to talk to an eeprom at i2c address 0x50. Make sure there is an eeprom at this address.
This script comes with ABSOLUTELY no warranty. Continue only if you know what you are doing.
Do you wish to continue? (yes/no): yes
Writing...
0+1 records in
0+1 records out
134 bytes copied, 0.556762 s, 0.2 kB/s
Closing EEPROM Device.
Done.
```

### Test EEPROM

The Hat EEPROM is read on system boot so we will need to reboot the Pi before we can test it:

```bash
pi@raspberrypi:~/hats/eepromutils $ sudo reboot
```

We can then read the data using the device tree:

```bash
pi@raspberrypi:~ $ cd /proc/device-tree/hat/
pi@raspberrypi:/proc/device-tree/hat $ ls
custom_0  name  product  product_id  product_ver  uuid  vendor
pi@raspberrypi:/proc/device-tree/hat $ more name
hat
pi@raspberrypi:/proc/device-tree/hat $ more vendor
Voron Design
pi@raspberrypi:/proc/device-tree/hat $ more product
Klipper Expander Hat
pi@raspberrypi:/proc/device-tree/hat $ more product_id
0x0000
pi@raspberrypi:/proc/device-tree/hat $ more product_ver
0x0000
pi@raspberrypi:/proc/device-tree/hat $ more uuid
fef562f0-9e28-4453-88c2-c073303e6ab2
```

![EEPROM Connection to RPi](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-klipper-expander-hat/eeprom-connection-to-rpi.jpg)

## Parts Required

### Connectors

| Item                              | Quantity | Received          | Notes |
| --------------------------------- | -------- | ----------------- | ----- |
| 2 Pin JST-XH Header               | 7        | 20                |       |
| 3 Pin JST-XH Header               | 1        | 20                |       |
| 4 Pin JST-XH Header               | 1        | 20                |       |
| 5 Pin JST-XH Header               | 1        | 20                |       |
| 40 Pin Raspberry Pi Header        | 1        | 2                 |       |
| Dupont Pin Headers                | 23 Pins  | 2 x 30 pin strips |       |
| KF301 Screw Terminal (5mm pitch)  | 1        | 10                |       |
| PCB Panel Mount Blade Fuse Holder | 1        | 5                 |       |

### SMD Components

| Item                                    | Quantity | Received | Notes        |
| --------------------------------------- | -------- | -------- | ------------ |
| 100nF Capacitor (1206 Package)          | 1        | 20       |              |
| 4.7uF Capacitor (1206 Package)          | 2        | 20       |              |
| 3.9kΩ Resistor (1206 Package)           | 2        | 112      |              |
| 4.7kΩ Resistor (1206 Package)           | 8        |          | 100 on order |
| 100Ω Resistor (1206 Package)            | 5        | 123      |              |
| 10kΩ Resistor (1206 Package)            | 5        | 111      |              |
| LED (1206 Package)                      | 6        |          | 100 on order |
| IRLML6344-TRPBF Mosfet (SOT-23 Package) | 5        | 50       |              |

### Misc

| Item            | Quantity | Received | Notes      |
| --------------- | -------- | -------- | ---------- |
| 2510 Axial Fan  | 1        |          | 2 on order |
| CAT24C32 EEPROM | 1        | 10       |            |

![Klipper Expander Hat In Hand](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-klipper-expander-hat/klipper-expander-hat-in-hand.jpg)
