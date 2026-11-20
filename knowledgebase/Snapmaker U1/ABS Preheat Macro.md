---
title: "ABS Preheat Macro"
tags:
  - snapmaker-u1
  - klipper
  - gcode
  - macro
  - abs
  - chamber
  - 3d-printing
---

This Klipper macro preheats the Snapmaker U1 for ABS. It sets the bed to 100 °C, extends the idle timeout to 45 minutes, homes Z and moves the bed to 150 mm so the heated bed can warm the chamber by convection, keeps the part-cooling fan off, and reports the start in the web dashboard.

```gcode
[gcode_macro PREHEAT_ABS]
gcode:
    # Set target bed temp to 100°C without blocking
    SET_HEATER_TEMPERATURE HEATER=heater_bed TARGET=100
    # Override idle timeout to 45 minutes (2700 seconds)
    SET_IDLE_TIMEOUT TIMEOUT=2700
    # Move bed to center height to create airflow convection
    G28 Z
    G1 Z150 F600
    # Ensure chamber fan / auxiliary cooling fans remain OFF
    M106 S0
    RESPOND MSG="Chamber preheating started: Bed set to 100C for 45 mins."
```

## Add the macro to the printer

1. On the printer display, open **Settings → Maintenance → Advanced Mode**, accept the clause and activate advanced mode.
2. Open the printer's IP address in a browser.
3. Go to **Configuration** and open `printer.cfg`.
4. Scroll to the bottom of the file and add the Klipper macro above.
5. Save the file and restart the printer.
6. After the restart, the macro is available on the printer's web dashboard under **Macros**.

> [!warning] Hot bed and ABS fumes
> The bed reaches 100 °C and stays hot for the whole preheat. Keep the printer enclosed with the Top Cover, ventilate the room, and do not leave the preheat running unattended.
