# Creating a Printed Circuit Board to control fans in Klipper

March 21, 2023 by [Mike Thomas](https://github.com/mikepthomas),
Updated April 20, 2023

Creating a Raspberry Pi Hat based on [timmit99's Klipper Expander](https://github.com/timmit99/Klipper-Expander) to control additional fans using the [Raspberry Pi as a Secondary MCU in Klipper Firmware](https://www.klipper3d.org/RPi_microcontroller.html).

![Klipper Fan Hat Hero](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-klipper-fan-hat/klipper-fan-hat-hero.jpg)

---

## Table of contents

1. [What is this?](#what-is-this-)
2. [Printed Circuit Board](#printed-circuit-board)
3. [Flash Hat EEPROM](#flash-hat-eeprom)
4. [Parts Required](#parts-required)

## What is this?

The Klipper Expander is designed to add 4 additional Mosfet outputs, 2 thermistor inputs, a Neopixel output, a GPIO Header and an I2C header that can be added as a secondary Klipper MCU. The Klipper Fan Hat is supposed to be a re-imagination of this, that can be attached on top of the Raspberry Pi that is used as the Klipper Host.

The Klipper Fan Hat is not supposed to be a replacement for the Klipper Expander, the Klipper expander can handle more current as it has wider PCB tracks than this PCB and therefore the Klipper Fan Hat should only be used for lower current devices such as fans. The Klipper Fan Hat also does not support Neopixels due to space constraints of fitting it within the footprint of a Raspberry Pi Hat.

## Printed Circuit Board

![Klipper Fan Hat Front](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-klipper-fan-hat/klipper-fan-hat-front.jpg)

I have created a [repository on my GitHub](https://github.com/mikepthomas/Klipper-Fan-Hat) with the KiCad design files and Gerber files that I used to produce Version 1 of the board.

![Klipper Fan Hat Back](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-klipper-fan-hat/klipper-fan-hat-back.jpg)

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

The Recommended EEPROM in the [Design Guide](https://github.com/raspberrypi/hats/blob/master/designguide.md) at the time of writing is CAT24C32 which is 32kbit (4kbyte).

As we don't know the state of the EEPROM it is best to clear it by setting it all to zeros.
If your EEPROM is a different size you will need to set `count` to the value of kbyte of your chip.

Make a blank image using dd:

```bash
pi@raspberrypi:~ $ cd hats/eepromutils/
pi@raspberrypi:~/hats/eepromutils $ dd if=/dev/zero ibs=1k count=4 of=blank.eep
4+0 records in
8+0 records out
4096 bytes (4.1 kB, 4.0 KiB) copied, 0.000941149 s, 4.4 MB/s
```

Verify it is actually blank with `hexdump`...

```bash
pi@raspberrypi:~/hats/eepromutils $ hexdump blank.eep
0000000 0000 0000 0000 0000 0000 0000 0000 0000
*
0001000
```

...and flash it to the chip.

```bash
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
Open the `eeprom_settings.txt` file:

```bash
pi@raspberrypi:~/hats/eepromutils $ nano eeprom_settings.txt
```

Update the contents with the [Klipper Fan Hat settings file from the Repository](https://github.com/mikepthomas/Klipper-Fan-Hat/blob/main/EEPROM/eeprom_settings.txt).

Save and close the file, and then we can make the EEPROM image...

```bash
pi@raspberrypi:~/hats/eepromutils $ ./eepmake eeprom_settings.txt klipper-fan-hat.eep
Opening file eeprom_settings.txt for read
UUID=fef562f0-9e28-4453-88c2-c073303e6ab2
Done reading
Writing out...
Done.
```

...and flash it to the chip.

```bash
pi@raspberrypi:~/hats/eepromutils $ sudo ./eepflash.sh -w -f=klipper-fan-hat.eep -t=24c32
This will attempt to talk to an eeprom at i2c address 0x50. Make sure there is an eeprom at this address.
This script comes with ABSOLUTELY no warranty. Continue only if you know what you are doing.
Do you wish to continue? (yes/no): yes
Writing...
0+1 records in
0+1 records out
220 bytes copied, 0.825629 s, 0.3 kB/s
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
Klipper Fan Hat
pi@raspberrypi:/proc/device-tree/hat $ more product_id
0x4b46
pi@raspberrypi:/proc/device-tree/hat $ more product_ver
0x0001
pi@raspberrypi:/proc/device-tree/hat $ more uuid
fef562f0-9e28-4453-88c2-c073303e6ab2
```

### Enable I2C and SPI Automatically

To allow the hat to automatically enable I2C and SPI we will create a device tree overlay and embed it into the EEPROM. The Raspberry Pi will then enable this at boot time.

```bash
pi@raspberrypi:~/hats/eepromutils $ nano klipper-fan-hat.dts
```

Update the contents with the [Klipper Fan Hat device tree source file from the Repository](https://github.com/mikepthomas/Klipper-Fan-Hat/blob/main/EEPROM/klipper-fan-hat.dts).

Save the file, compile the binary and set the correct permissions to the output file:

```bash
pi@raspberrypi:~/hats/eepromutils $ sudo dtc -@ -I dts -O dtb -o klipper-fan-hat.dtb klipper-fan-hat.dts
pi@raspberrypi:~/hats/eepromutils $ sudo chown pi:pi klipper-fan-hat.dtb
```

You may need to install the `device-tree-compiler` package if you get any errors running the previous command, however, it was already installed in the version of Raspberry Pi OS that I was using.

```bash
pi@raspberrypi:~/hats/eepromutils $ sudo apt-get install device-tree-compiler
```

We can then embed the device tree binary into the flash file...

```bash
pi@raspberrypi:~/hats/eepromutils $ ./eepmake eeprom_settings.txt klipper-fan-hat-with-dt.eep klipper-fan-hat.dtb
Opening file eeprom_settings.txt for read
UUID=967cd2a4-9c61-4397-ae2e-5184a7f2b7de
Done reading
Opening DT file klipper-fan-hat.dtb for read
Adding 411 bytes of DT data
Writing out...
Writing out DT...
Done.
```

...and flash it to the EEPROM the same way we did before:

```bash
pi@raspberrypi:~/hats/eepromutils $ sudo ./eepflash.sh -w -f=blank.eep -t=24c32
This will attempt to talk to an eeprom at i2c address 0x50. Make sure there is an eeprom at this address.
This script comes with ABSOLUTELY no warranty. Continue only if you know what you are doing.
Do you wish to continue? (yes/no): yes
Writing...
4096 bytes (4.1 kB, 4.0 KiB) copied, 17 s, 0.2 kB/s
8+0 records in
8+0 records out
4096 bytes (4.1 kB, 4.0 KiB) copied, 16.6287 s, 0.2 kB/s
Closing EEPROM Device.
Done.
pi@raspberrypi:~/hats/eepromutils $ sudo ./eepflash.sh -w -f=klipper-fan-hat-with-dt.eep -t=24c32
This will attempt to talk to an eeprom at i2c address 0x50. Make sure there is an eeprom at this address.
This script comes with ABSOLUTELY no warranty. Continue only if you know what you are doing.
Do you wish to continue? (yes/no): yes
Writing...
512 bytes copied, 2 s, 0.3 kB/s
1+1 records in
1+1 records out
641 bytes copied, 2.53118 s, 0.3 kB/s
Closing EEPROM Device.
Done.
```

We can check that I2C and SPI is enabled by switching off I2C using `raspi-config` [the same way we enabled it](#enable-i2c) except clicking `No` when prompted to enable.

After another restart you will be able to see the devices `/dev/i2c-1`, and `/dev/spidev0.0` and `/dev/spidev0.1` only when the hat EEPROM is connected.

```bash
pi@raspberrypi:~ $ ls /dev
autofs         dma_heap   i2c-1    loop4         mmcblk0    ram1   ram5     spidev0.0  tty12  tty21  tty30  tty4   tty49  tty58  ttyAMA0    vcs1   vcsa4     vcsu6    video20
block          dri        i2c-2    loop5         mmcblk0p1  ram10  ram6     spidev0.1  tty13  tty22  tty31  tty40  tty5   tty59  ttyprintk  vcs2   vcsa5     vhci     video21
btrfs-control  fd         initctl  loop6         mmcblk0p2  ram11  ram7     stderr     tty14  tty23  tty32  tty41  tty50  tty6   uhid       vcs3   vcsa6     video10  video22
bus            full       input    loop7         mqueue     ram12  ram8     stdin      tty15  tty24  tty33  tty42  tty51  tty60  uinput     vcs4   vcsm-cma  video11  video23
cachefiles     fuse       kmsg     loop-control  net        ram13  ram9     stdout     tty16  tty25  tty34  tty43  tty52  tty61  urandom    vcs5   vcsu      video12  video31
cec0           gpiochip0  log      mapper        null       ram14  random   tty        tty17  tty26  tty35  tty44  tty53  tty62  v4l        vcs6   vcsu1     video13  watchdog
char           gpiochip1  loop0    media0        ppp        ram15  rfkill   tty0       tty18  tty27  tty36  tty45  tty54  tty63  vchiq      vcsa   vcsu2     video14  watchdog0
console        gpiochip2  loop1    media1        ptmx       ram2   serial1  tty1       tty19  tty28  tty37  tty46  tty55  tty7   vcio       vcsa1  vcsu3     video15  zero
cuse           gpiomem    loop2    media2        pts        ram3   shm      tty10      tty2   tty29  tty38  tty47  tty56  tty8   vc-mem     vcsa2  vcsu4     video16
disk           hwrng      loop3    mem           ram0       ram4   snd      tty11      tty20  tty3   tty39  tty48  tty57  tty9   vcs        vcsa3  vcsu5     video18
```

### Embed Klipper config in EEPROM

```bash
pi@raspberrypi:~/hats/eepromutils $ nano klipper-fan-hat.cfg
```

Update the contents with the [Klipper config source file from the Repository](https://github.com/mikepthomas/klipper_config/blob/main/Boards/raspberry_pi.cfg).

**_TODO:_** Create a specific config file for the hat and update this link.

Save the file, and embed the config file into the EEPROM image

```bash
pi@raspberrypi:~/hats/eepromutils $ ./eepmake eeprom_settings.txt klipper-fan-hat-with-dt.eep klipper-fan-hat.dtb -c klipper-fan-hat.cfg
Opening file eeprom_settings.txt for read
UUID=c13a6e9e-67d8-465d-9084-0fb77054ec7c
Done reading
Opening DT file klipper-fan-hat.dtb for read
Adding 411 bytes of DT data
Opening custom data file klipper-fan-hat.cfg for read
Adding 245 bytes of custom data
Writing out...
Writing out DT...
Done.
```

...then flash the EEPROM

```bash
pi@raspberrypi:~/hats/eepromutils $ sudo ./eepflash.sh -w -f=blank.eep -t=24c32
This will attempt to talk to an eeprom at i2c address 0x50. Make sure there is an eeprom at this address.
This script comes with ABSOLUTELY no warranty. Continue only if you know what you are doing.
Do you wish to continue? (yes/no): yes
Writing...
4096 bytes (4.1 kB, 4.0 KiB) copied, 17 s, 0.2 kB/s
8+0 records in
8+0 records out
4096 bytes (4.1 kB, 4.0 KiB) copied, 16.5953 s, 0.2 kB/s
Closing EEPROM Device.
Done.
pi@raspberrypi:~/hats/eepromutils $ sudo ./eepflash.sh -w -f=klipper-fan-hat-with-dt.eep -t=24c32
This will attempt to talk to an eeprom at i2c address 0x50. Make sure there is an eeprom at this address.
This script comes with ABSOLUTELY no warranty. Continue only if you know what you are doing.
Do you wish to continue? (yes/no): yes
Writing...
512 bytes copied, 2 s, 0.2 kB/s
1+1 records in
1+1 records out
896 bytes copied, 3.62112 s, 0.2 kB/s
Closing EEPROM Device.
Done.
```

Restart the Pi and we can then we can copy the config out of the device tree into the klipper config directory:

```bash
cat /proc/device-tree/hat/custom_1 > ~/printer_data/config/klipper-fan-hat.cfg
```

![EEPROM Connection to RPi](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-klipper-fan-hat/eeprom-connection-to-rpi.jpg)

## Parts Required

### Fasteners

| Item                | Quantity | Received | Notes |
| ------------------- | -------- | -------- | ----- |
| M2.5x6 BHCS         | 4        | 50       |       |
| M2.5x14 BHCS        | 4        | 10       |       |
| M2.5 Nut            | 4        | 50       |       |
| M2.5 Brass Standoff | 4        | 50       |       |

### Connectors

| Item                              | Quantity | Received          | Notes |
| --------------------------------- | -------- | ----------------- | ----- |
| 2 Pin JST-XH Header               | 7        | 20                |       |
| 3 Pin JST-XH Header               | 1        | 20                |       |
| 4 Pin JST-XH Header               | 1        | 20                |       |
| 5 Pin JST-XH Header               | 1        | 20                |       |
| 40 Pin Raspberry Pi Header        | 1        | 2                 |       |
| Dupont Pin Headers                | 23 Pins  | 2 x 30 pin strips |       |
| Jumper Cap 2.54mm                 | 6        | 109               |       |
| KF301 Screw Terminal (5mm pitch)  | 1        | 10                |       |
| PCB Panel Mount Blade Fuse Holder | 1        | 5                 |       |

### SMD Components

| Item                                    | Quantity | Received | Notes |
| --------------------------------------- | -------- | -------- | ----- |
| 100nF Capacitor (1206 Package)          | 1        | 20       |       |
| 4.7uF Capacitor (1206 Package)          | 2        | 20       |       |
| 3.9kΩ Resistor (1206 Package)           | 2        | 112      |       |
| 4.7kΩ Resistor (1206 Package)           | 8        | 103      |       |
| 100Ω Resistor (1206 Package)            | 5        | 123      |       |
| 10kΩ Resistor (1206 Package)            | 5        | 111      |       |
| LED Red (1206 Package)                  | 6        | 105      |       |
| IRLML6344-TRPBF Mosfet (SOT-23 Package) | 5        | 50       |       |

### Misc

| Item            | Quantity | Received | Notes |
| --------------- | -------- | -------- | ----- |
| 2510 Axial Fan  | 1        | 2        |       |
| CAT24C32 EEPROM | 1        | 10       |       |
| DIP-8 Socket    | 1        | 10       |       |

![Klipper Fan Hat In Hand](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/printer-klipper-fan-hat/klipper-fan-hat-in-hand.jpg)
