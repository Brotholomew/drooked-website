---
title: "07 - Print Speeds and Volumetric Flow"
tags:
  - 3d-printing
  - filaments
  - print-speed
  - volumetric-flow
  - flow-rate
  - input-shaping
  - pressure-advance
  - klipper
  - snapmaker-u1
---

| Scope | Key numbers | What it is good for | Additional notes |
| :--- | :--- | :--- | :--- |
| **Snapmaker U1 hard ceilings** | 500 mm/s maximum toolhead speed, 20,000 mm/s² maximum acceleration, and 32 mm³/s maximum flow from the stock hotend. | Establishing the absolute upper bound before any tuning. | The 32 mm³/s figure was measured with Snapmaker ABS at 280 °C on the stock 0.4 mm stainless hotend. It is not a universal material limit. |
| **Hard flow-limited print speeds** | At 32 mm³/s: about 381 mm/s with a 0.4 mm nozzle at 0.20 × 0.42 mm, 172 mm/s with a 0.6 mm nozzle at 0.30 × 0.62 mm, and 95 mm/s with a 0.8 mm nozzle at 0.40 × 0.84 mm. | Checking whether a requested speed is physically possible for a given nozzle and line width. | These are arithmetic ceilings, not quality targets. Acceleration and cooling reduce the real speed further. |
| **Feature speeds** | First layer 40–60 mm/s; outer wall 80–200 mm/s; inner wall 200–300 mm/s; sparse infill 250–350 mm/s; travel 400–500 mm/s. | Setting a starting point in the slicer. | Every extruding move is capped by the flow limit for its line width. Travel moves do not extrude. |
| **Acceleration and cornering** | 3,000–5,000 mm/s² for outer walls; 10,000–15,000 mm/s² for travel and sparse infill; square corner velocity 5–10 mm/s. | Reducing ringing and corner bulges while keeping average speed high. | Re-run input shaping after changing a toolhead, a belt, or the toolhead mass. |
| **Pressure advance** | Roughly 0.02–0.07 s for rigid filaments and 0.08–0.15 s for TPU. | Removing gaps after acceleration and bulges after deceleration. | Pressure advance compensates melt compressibility and dead volume. It does not raise the flow limit. |
| **Cooling and layer time** | Minimum layer time 6–10 s for PLA and 8–15 s for ABS, ASA and PC; minimum speed 15–25 mm/s. | Preventing small features from slumping or warping. | PLA at 140 °C is rubbery, not molten. It is still too soft to support the next layer. |

> [!abstract] Core principle
> A slicer speed is a request, not a guarantee. The U1 can move its toolhead at up to 500 mm/s and accelerate at up to 20,000 mm/s², but extrusion is limited by how quickly the hotend can melt polymer. Snapmaker rates the stock 0.4 mm stainless hotend at 32 mm³/s with Snapmaker ABS at 280 °C. For any line geometry, that flow limit sets a hard linear-speed ceiling, and acceleration, cornering, cooling and layer time determine how much of that ceiling the toolhead actually reaches. The four limits are nested, and the lowest one controls the print.

## 1. The four limits that decide real print speed

A modern CoreXY printer is often advertised with a single speed number that hides four different limits. The U1 is no exception. They are:

1. **Toolhead speed.** The maximum is 500 mm/s. It is the toolhead's positioning speed, and it is normally reached only in travel.
2. **Acceleration and cornering.** The maximum acceleration is 20,000 mm/s², but the usable value depends on the feature and on input shaping.
3. **Volumetric flow.** The stock hotend is rated at 32 mm³/s with ABS at 280 °C. This is the limit that usually controls extrusion.
4. **Layer time and cooling.** Small layers must cool enough to support the next layer, which forces the slicer to slow down even when the first three limits allow more speed.

The lowest of these limits wins. A print that is "set to 500 mm/s" is therefore not printing at 500 mm/s unless the bead is small enough that the resulting flow stays under 32 mm³/s. With a typical 0.4 mm bead, the flow limit is reached long before the toolhead limit.

## 2. Linear speed, acceleration and cornering

### 2.1 Feature-based linear speed

OrcaSlicer sets linear speed per feature because each feature balances surface quality, overhang stability and internal strength differently. The ranges below are reasonable starting points for a well-tuned U1 with a 0.4 mm nozzle. They are not Snapmaker specifications.

| Feature type | Typical U1 speed range (mm/s) | Why it is set this way |
| :--- | :---: | :--- |
| First layer | 40–60 | A slow first layer allows the polymer to wet the PEI sheet and gives the bed mesh time to work. See [[06 - Heating and Temperatures - Nozzle, Bed, and Chamber]]. |
| Outer wall | 80–200 | This controls surface gloss, corner sharpness and dimensional accuracy. Higher speeds can introduce vertical fine artefacts (VFAs) and ringing. |
| Inner wall | 200–300 | It is hidden behind the outer wall, so it can run faster as long as it stays below the flow ceiling. |
| Sparse infill | 250–350 | This is the fastest extruding move. It is limited mainly by the maximum volumetric speed. |
| Internal solid infill | 200–280 | It bridges over sparse infill and must not outrun the flow limit or tear across the infill lines. |
| Top surface | 80–150 | A slower top surface produces uniform line flattening and consistent gloss. See [[08 - Surface Smoothing Slicer Techniques - Ironing and Beyond]]. |
| Overhangs and bridges | 15–60 | The toolhead slows so that part cooling can freeze the suspended strand in mid-air. |
| Travel moves | 400–500 | These moves do not extrude. They reduce ooze time between islands and during tool changes. |

The table does not override the flow limit. At a 0.20 mm layer and a 0.42 mm line width, the bead cross-section is 0.084 mm², so 32 mm³/s allows at most 381 mm/s. If you increase the line width, the speed ceiling falls in proportion.

### 2.2 Why the toolhead rarely reaches 500 mm/s

A 500 mm/s speed setting is only useful if the toolhead has enough distance to accelerate to it and enough distance to stop. From basic kinematics, the minimum segment length needed to accelerate from an entry speed $v_0$ to a peak speed $v_{\text{peak}}$ and brake back to $v_0$ is:

$$d_{\min} = \frac{v_{\text{peak}}^2 - v_0^2}{a}$$

The formula gives the combined acceleration and braking distance. Two examples show why machine geometry matters:

- With an older bed-slinger acceleration of 2,500 mm/s², reaching 500 mm/s requires 100 mm. On a 40 mm calibration cube, the toolhead can only reach about 316 mm/s, because $v = \sqrt{a d} = \sqrt{2500 \times 40}$.
- With the U1's maximum acceleration of 20,000 mm/s², the same 500 mm/s requires only 12.5 mm. On most parts, a travel move can reach the full toolhead speed almost immediately.

The second example applies to travel, not to extrusion. At 32 mm³/s, a 0.4 mm bead with a 0.20 × 0.42 mm cross-section caps the linear speed at 381 mm/s, and 0.6 mm and 0.8 mm beads cap it much lower. The 500 mm/s figure therefore describes how fast the toolhead can be positioned, not how fast plastic can be deposited.

### 2.3 Square corner velocity

Square corner velocity (SCV) is Klipper's replacement for Marlin's jerk setting. It sets the speed the toolhead may carry through a 90° corner; a higher value means less deceleration into the corner. A value of about 5 mm/s is a good starting point for quality outer walls, and 8–10 mm/s can be used for fast structural drafts. Values above about 10 mm/s tend to excite frame resonances and increase ringing.

Klipper scales the corner speed according to the angle, so a sharp corner slows more than a shallow one. Raising SCV keeps average speed higher on intricate models and reduces the time the nozzle dwells in a corner, which helps with corner bulges. It does not remove the need for input shaping.

## 3. Volumetric flow: the real extrusion ceiling

### 3.1 The flow equation is bookkeeping, not thermodynamics

The volumetric flow rate $Q$ is calculated from the layer height $h$, the line width $w$ and the linear speed $v$:

$$Q = h \times w \times v$$

This is a geometric identity. It converts a requested linear speed into the volume of polymer that the hotend must melt each second. It contains no term for heater power, thermal conductivity, melt-zone length, residence time or polymer heat capacity, so it cannot by itself explain why a hotend has a limit. Calling it a thermodynamic melting bottleneck gives the equation more physics than it contains.

The real limit is heat transfer. Polymer enters the melt zone near room temperature, must absorb enough heat to reach the setpoint, and must do so before it reaches the nozzle exit. Two quantities describe the problem:

- **Residence time**, $t_r = V_m / Q$, where $V_m$ is the volume of the heated melt zone. As flow rises, each parcel of polymer spends less time in the heated zone.
- **Graetz number**, $\mathrm{Gz} = (D_h / L)\,\mathrm{Re}\,\mathrm{Pr}$, which compares heat carried by the flow with heat conducted through the wall over the heated length. A high Graetz number means the flow is thermally developing, so the core of the filament can still be cooler than the wall when it leaves the nozzle. Because the Reynolds number rises with velocity, the Graetz number rises with flow.

This is why the flow limit depends on the material, the melt temperature, the heated length and the hotend material. A steel hotend conducts heat more slowly than a brass or copper one, and a lower nozzle temperature reduces the temperature difference that drives heat into the polymer. The same hotend therefore has a different limit for ABS at 280 °C and for PLA at 220 °C.

A second effect is die swell. As the polymer leaves the nozzle, chains that were stretched and oriented in the die relax, and the extrudate expands. The bead that lands on the part can be wider than the nozzle orifice, so the effective line width is not exactly the slicer's line width. Die swell depends on shear rate, temperature, polymer elasticity and die length. It is not the flow ceiling, but it is one reason why flow ratio and line width must be calibrated on the actual material rather than assumed.

### 3.2 The U1's official 32 mm³/s ceiling

Snapmaker lists a maximum hotend flow of 32 mm³/s for the U1. The figure was measured with Snapmaker ABS at 280 °C using the stock 0.4 mm stainless-steel hotend. That measurement is the anchor for every flow number in this note.

It is not a claim that every material reaches 32 mm³/s. The measurement was not made with PLA at 220 °C. PLA at 220 °C, PETG at 250 °C, filled materials and smaller nozzles usually reach less, because the melt temperature and the thermal path are different. It is also not a claim that a profile should be set to 32 mm³/s without testing. The number is a ceiling, and the correct value for a material is the highest flow that still produces a fully fused, dimensionally accurate bead on that material and that nozzle.

### 3.3 Hard speed limits at 32 mm³/s

For a given bead cross-section, the maximum linear speed follows from the flow ceiling:

$$v_{\max} = \frac{Q_{\max}}{h \times w}$$

The 0.4, 0.6 and 0.8 mm hotends give the following hard limits at the official 32 mm³/s ceiling:

| Nozzle | Layer height × line width | Bead cross-section | Maximum linear speed at 32 mm³/s |
| :---: | :---: | :---: | :---: |
| 0.4 mm | 0.20 × 0.42 mm | 0.084 mm² | about 381 mm/s |
| 0.6 mm | 0.30 × 0.62 mm | 0.186 mm² | about 172 mm/s |
| 0.8 mm | 0.40 × 0.84 mm | 0.336 mm² | about 95 mm/s |

These are arithmetic ceilings for the stock hotend. At a 0.4 mm nozzle, the ceiling of 381 mm/s is already below the 500 mm/s toolhead maximum, so an extruding move can never use the full advertised speed at that bead size. At 0.6 mm the ceiling falls to 172 mm/s, and at 0.8 mm it falls to 95 mm/s. At the same linear speed, a larger nozzle deposits more plastic per second, but its ceiling is reached at a lower linear speed.

The comparison is stark. Asking a 0.8 mm nozzle to print at 200 mm/s with a 0.40 × 0.84 mm bead would require 67 mm³/s, which is more than twice the stock hotend's ceiling. A 0.2 mm nozzle has a much smaller bead, so its arithmetic ceiling is high, but its practical limit is set by the much higher pressure drop through the small orifice. It is a detail nozzle, not a speed nozzle.

### 3.4 Steel, hardened steel and the 15–25% claim

The stock hotend is stainless steel, and the optional hardened-steel hotends are also steel. Both conduct heat several times more slowly than brass, and much more slowly than copper. It is tempting to apply a further 15–25% derating to a steel hotend, but that would double-count the penalty. The official 32 mm³/s figure was measured on the stock stainless hotend, so the steel penalty is already inside it. Do not apply a second derating to the same figure.

If you compare a steel hotend with a brass or copper hotend of identical geometry, the steel one will generally flow somewhat less at the same temperature, and raising the nozzle temperature by about 10 °C, where there is headroom, can recover part of the difference. That comparison is not directly useful on the U1, because Snapmaker does not offer a brass hotend. Hardened steel is chosen for wear resistance with carbon-fibre and glass-fibre filaments, not for higher flow.

The stock hotend is an integrated unit. The heat sink, heat break, heater block and nozzle are interference-fitted, so the nozzle alone cannot be replaced; the whole hotend must be changed. The hardened-steel hotends are sold in four-packs of one diameter, and Snapmaker states that different diameters cannot be used in the same print. An OrcaSlicer 2.2+ workaround with percentage line widths and a shared layer height has been reported to work for 0.4 mm and 0.6 mm, but it is not officially supported and should not be treated as stock capability.

### 3.5 Calibrating maximum volumetric speed

The maximum volumetric speed (MVS) setting in OrcaSlicer should be calibrated for each filament and nozzle. The procedure is:

1. Calibrate the nozzle temperature and the flow ratio first. A flow test run with an incorrect extrusion multiplier gives a misleading result.
2. In OrcaSlicer, open **Calibration → More... → Max Volumetric Speed**.
3. Set a start flow of 5 mm³/s, an end flow of 30–35 mm³/s, and a step of 0.5 mm³/s per millimetre of Z height.
4. Print the meandering tower and inspect where the surface changes from glossy and uniform to matte, rough, wavy or visibly under-extruded.
5. Measure the height $Z_{\text{good}}$ just before the surface degrades and calculate:

$$\mathrm{MVS}_{\text{limit}} = Q_{\text{start}} + Z_{\text{good}} \times \Delta Q$$

6. Apply a safety margin of 10–15% and enter the result in **Filament Settings → Max volumetric speed**.

If the tower is still clean at 32 mm³/s, stop at 32 mm³/s. That is the stock hotend's rated ceiling, and a higher slicer value will not make the hotend melt more polymer. If the surface degrades earlier, use the earlier value. A tower that looks clean but feels weak is a warning sign; check layer adhesion with a small bend or tensile test when strength matters.

## 4. Cooling, layer time and the glass transition

On small cross-sections, such as a Benchy chimney, a miniature spire or a thin pin, a fast toolhead can finish a layer in less than a second. If the next layer is deposited immediately, the previous layer may still be soft. The relevant threshold is the glass transition temperature, not the melting temperature. PLA's glass transition is roughly 55–60 °C. At 140 °C, PLA is well above that transition: it is rubbery and weak, but it is not molten. It can still be pushed out of shape by the next layer.

OrcaSlicer's **Filament Settings → Cooling** page provides a minimum layer time. When a layer would print faster than that time, the slicer slows the print down. Reasonable starting points are 6–10 s for PLA and 8–15 s for ABS, ASA and PC with low fan speeds. The minimum print speed is typically set to 15–25 mm/s. The exact values depend on the part, the chamber temperature and the cooling hardware.

Cooling is not simply "more is better". PLA needs strong part cooling for overhangs and bridges. ABS and ASA need low fan speeds and a warm chamber, or the layers will delaminate and the part will warp. PC is similar but even more sensitive. The U1 has no stock chamber heater, so the chamber strategy matters as much as the fan setting. Section 8 covers the chamber options.

## 5. Input shaping

When the toolhead accelerates at up to 20,000 mm/s², the sudden impulse excites the natural resonance frequencies of the CoreXY belts and gantry, typically around 40–75 Hz. The result is ringing or ghosting: a decaying ripple after a sharp corner.

Klipper's input shaping measures the resonance peaks with the onboard accelerometer and applies a shaper that cancels the vibration. The U1 includes an accelerometer, so `SHAPER_CALIBRATE` is the normal method. The main shaper types are:

- **ZV (Zero Vibration).** It gives the fastest response and the least corner rounding, but it is sensitive to small shifts in resonance frequency.
- **MZV (Modified Zero Vibration).** It cancels vibration over a wider frequency band with little smoothing, which makes it a good default for a rigid CoreXY machine such as the U1.
- **EI (Extra Insensitive).** It is useful when an axis has a broad or twin resonance peak. It adds a little smoothing but is more tolerant of frequency drift.

Input shaping is not a substitute for mechanical maintenance. Loose belts, a loose toolhead, a worn coupling or a heavy cable bundle will still produce ringing. Re-run the calibration after changing a toolhead, a belt, the toolhead mass, or the position of the cable chain.

## 6. Pressure advance

Molten polymer in the nozzle and the filament path behaves like a compressible viscoelastic spring. Without compensation, two errors appear:

- During rapid acceleration away from a corner, nozzle pressure lags behind the extruder stepper, so the line is thin or under-extruded just after the corner.
- During rapid deceleration into a corner, stored melt pressure continues to push plastic out of the orifice while the gantry slows, so the corner bulges and the Z-seam becomes bloated.

Klipper's pressure advance adds a velocity correction proportional to the extruder's acceleration:

$$v_{e,\text{actual}}(t) = v_{e,\text{nominal}}(t) + K_{\mathrm{PA}}\,\frac{dv_{e,\text{nominal}}(t)}{dt}$$

$K_{\mathrm{PA}}$ has units of seconds. Typical starting ranges for the U1's direct-drive toolhead with a 0.4 mm nozzle are:

- For PLA and silk PLA, start at 0.025–0.045 s.
- For PETG and PCTG, start at 0.040–0.070 s.
- For ABS and ASA, start at 0.020–0.040 s.
- For PA and PC, start at 0.030–0.055 s.
- For TPU 95A, start at 0.080–0.150 s, because the filament itself is compressible.

These are starting points, not universal values. The correct value depends on the hotend, the filament, the temperature and the nozzle.

When you change from a 0.4 mm nozzle to a 0.6 mm or 0.8 mm nozzle, $K_{\mathrm{PA}}$ usually falls by about 20–40%. The larger orifice has a lower pressure drop, but pressure advance is also compensating for melt compressibility and the dead volume in the hotend, and those do not disappear when the nozzle grows. The older claim that $K_{\mathrm{PA}}$ falls by 40–60% comes from treating the nozzle as a simple orifice and overstates the effect. Recalibrate with the pressure advance (PA) line, pattern or tower test after every nozzle change.

Pressure advance does not raise the maximum flow. It only changes the timing of extrusion, so it cannot rescue a profile that is already under-extruding at the flow limit.

## 7. Strength and surface finish at high speed

### 7.1 Layer adhesion

When flow approaches the hotend's melt limit, the outer part of the filament can be molten while the core is cooler. The bead may still look acceptable, but the interface between layers is formed with less polymer-chain diffusion, so the weld is weaker. This is not a separate "syndrome"; it is incomplete melting at the core.

The size of the loss depends on how far beyond the limit the profile runs. In one CNC Kitchen test, PLA reached about 34 MPa at 5 mm³/s and about 31 MPa at 28 mm³/s, roughly a 9% loss, before visible under-extrusion became dominant. Printing Perspective found about a 5% loss up to 200 mm/s and a steep fall after that. Once the hotend is clearly beyond its capacity and the layers are under-extruded, losses of roughly 10–40% are a more realistic range than the often-quoted 30–60%. Treat any fixed percentage with suspicion. The practical warning is a surface that turns matte or rough, followed by gaps and weak layers.

The reliable fixes are to raise the nozzle temperature, lower the flow limit, or use a hotend with more melting capacity. Printing more slowly helps only if the slicer actually reduces the flow; when the flow limit is the binding constraint, the slicer has already capped the speed.

### 7.2 Gloss bands

Because speed changes the thermal history, a part whose outer-wall speed changes from layer to layer can show horizontal gloss bands. The usual cause is minimum layer time slowing some layers but not others. A model with an overhang, a hole or a short layer next to a solid section can alternate between a fast outer wall and a slow one, and the fast layers look more matte than the slow ones.

In OrcaSlicer, enable **Don't slow down outer walls** in **Filament Settings → Cooling** so that the outer wall keeps a constant speed even when the rest of the layer slows for cooling. Then choose an outer-wall speed that the hotend and the fan can maintain across the whole part. Check the speed and flow previews before printing; the outer surface should be one uniform colour from bottom to top. If the whole layer must slow down, the band may be unavoidable, and a uniformly slower outer wall is better than a banded one.

## 8. The Snapmaker U1 in practice

### 8.1 Kinematics and tool changing

The U1 is a CoreXY toolchanger with four independent toolheads, a 270 × 270 × 270 mm build volume and a maximum toolhead speed of 500 mm/s. Its maximum acceleration is 20,000 mm/s². A reasonable starting point is 3,000–5,000 mm/s² for quality outer walls and 10,000–15,000 mm/s² for travel and sparse infill, with input shaping calibrated for each toolhead.

The toolchanger has two filament feeders, one on the left for toolheads 1 and 2 and one on the right for toolheads 3 and 4. It also has four spool holders, RFID recognition for Snapmaker filament, automatic loading and a backup mode. It does not have four independent feeders.

Snapmaker states that a tool change takes about five seconds, because each colour or material stays loaded in its own dedicated toolhead. The swap avoids the long retraction, cutting and purging cycle of a single-nozzle colour system, although a prime or wipe tower, or a wipe sequence, is still needed to manage ooze at the start of each tool. Snapmaker's "5× faster" claim, and the similar "3–5× faster" figure that is sometimes repeated, is a best-case comparison for models with many colour changes and heavy purge. It is not a universal print-speed multiplier. A single-colour part gains no speed advantage from the toolchanger, and a model with few colour changes gains little.

### 8.2 Chamber and material limits

The U1 has no stock chamber heater. The optional Top Cover provides passive chamber heating to about 50 °C, plus HEPA and activated-carbon filtration. A BIQU Panda Breath can reach a maximum chamber temperature of 60 °C, but only with community firmware such as paxx12's Snapmaker U1 Extended Firmware or DragonBreath. Stock firmware does not control it.

Motherboard cooling is mandatory before a chamber heater is used. The RK3562 begins thermal throttling at 85 °C, and there are documented mid-print failures. A 6015 fan that cools only the drivers is not sufficient; the full board needs active cooling. Chamber temperatures above 60 °C are outside the machine's design envelope, and thermal damage is unlikely to be covered by warranty.

For ABS and ASA, use a nozzle temperature of about 250–270 °C, a chamber near 50 °C and low part cooling. Styrene and acrylate emissions should be filtered and the room ventilated. For PC, use 280–300 °C and a chamber of 50–60 °C; the Top Cover alone gives about 50 °C, and a Panda Breath can raise it to 60 °C on community firmware. Expect significant warping. PA should be dried before use and printed at 260–290 °C; carbon-fibre and glass-fibre grades need a hardened hotend. PPS is marginal at the U1's 300 °C ceiling and loses layer strength compared with printing at 320–340 °C. PEEK and PEI require 340–400 °C and cannot be printed on this machine.

### 8.3 Realistic flow ranges for 0.4 mm hotends

The table below is a planning guide, not a set of Snapmaker specifications. The values are ranges reported in community flow tests for 0.4 mm hotends, and they should be confirmed with the calibration procedure in section 3.5. Every value is capped by the official 32 mm³/s ceiling, and most materials reach their own limit well below it.

| Filament class | Realistic MVS at 0.4 mm (mm³/s) | Nozzle temperature | Notes for the U1 |
| :--- | :---: | :---: | :--- |
| [[01 - PLA (Polylactic Acid - Standard, High-Speed, and Tough PLA+)\|Standard PLA]] | 14–18 | 210–225 °C | At 220 °C, PLA usually reaches its surface limit before the machine's ceiling. |
| [[01 - PLA (Polylactic Acid - Standard, High-Speed, and Tough PLA+)\|High-speed PLA]] | 18–24 | 220–235 °C | A higher melt flow index raises the limit, but verify it on your own hotend. |
| [[02 - Silk PLA (Elastomer-Modified High-Gloss Polylactic Acid Blend)\|Silk PLA]] | 8–12 | 215–235 °C | Keep the speed low for gloss; the elastomer additive reduces flow. |
| [[03 - Matte and Aesthetic Filled PLA (Matte, Wood, Marble, Glow-in-the-Dark, Sparkle PLA)\|Matte or filled PLA]] | 8–12 | 210–230 °C | Wood, marble and glow additives reduce flow. Use a hardened hotend for abrasive fills. |
| [[05 - PETG (Polyethylene Terephthalate Glycol-Modified)\|PETG]] and [[06 - PCTG (Polycyclohexylenedimethylene Terephthalate Glycol-Modified)\|PCTG]] | 10–14 | 240–260 °C | Dry the filament. Wet PETG foams and produces matte, weak layers. |
| [[09 - TPU and TPE (Thermoplastic Polyurethane and Thermoplastic Elastomer - 95A, 85A, High-Speed TPU, Foaming LW-TPU)\|TPU 95A]] | 3.5–6.0 | 225–245 °C | The limit is extruder buckling and pressure, not heater power. |
| [[09 - TPU and TPE (Thermoplastic Polyurethane and Thermoplastic Elastomer - 95A, 85A, High-Speed TPU, Foaming LW-TPU)\|TPU 85A]] | 1.5–2.8 | 220–240 °C | Print at 20–35 mm/s. Soft filament buckles easily. |
| [[07 - ABS (Acrylonitrile Butadiene Styrene)\|ABS]] and [[08 - ASA (Acrylonitrile Styrene Acrylate)\|ASA]] | 13–18 | 250–270 °C | Use the Top Cover at about 50 °C, low fan, and filtration for styrene and acrylate emissions. |
| [[10 - PA (Polyamide - Nylon 6, Nylon 12, and Nylon 6-66 Copolymers)\|PA, PA6 and PA12]] | 10–14 | 260–290 °C | Dry it thoroughly. Use a hardened hotend for carbon-fibre and glass-fibre grades, and slow down for crystallinity and weld strength. |
| [[11 - PC (Polycarbonate and PC-ABS, PC-PBT Engineering Alloys)\|PC and PC-ABS]] | 9–13 | 280–300 °C | Use a chamber up to 60 °C. PC warps strongly and must be dried. |
| [[14 - PPA (Polyphthalamide - High-Performance High-Temp Nylon PPA-CF and PPA-GF)\|PPA-CF]] and [[15 - PPS (Polyphenylene Sulfide - PPS and PPS-CF)\|PPS-CF]] | 8–11 | 290–300 °C | PPS is marginal at 300 °C and loses layer strength compared with 320–340 °C. |

As a planning approximation, the 0.4 mm values apply to both the stock stainless hotend and the 0.4 mm hardened-steel hotend. Both are steel, and the official 32 mm³/s measurement already includes the steel penalty. A 0.2 mm hotend will be lower because its orifice is much smaller and the pressure drop is much higher. The 0.6 mm and 0.8 mm hotends are not rated above the same 32 mm³/s ceiling, so treat 32 mm³/s as the cap for every diameter; their linear speed is lower because each millimetre of travel deposits a larger bead. Filled and abrasive materials also tend to run lower, and they wear a brass nozzle quickly, which is why the U1's hardened-steel option exists.

## Related notes

- [[00 - Filament Master Index]]
- [[04 - Nozzles and Their Types]]
- [[05 - Layer Height and Nozzle Size]]
- [[06 - Heating and Temperatures - Nozzle, Bed, and Chamber]]
- [[08 - Surface Smoothing Slicer Techniques - Ironing and Beyond]]
- [[09 - Post-Processing - Matte, Shiny, and Surface Finishing]]
- [[10 - Common Printing Issues, Debugging, and Physical Limits]]

## Sources

All web links below were checked on 25 October 2026. The Printables page was verified through its public API because the website blocks automated requests.

1. [Snapmaker U1 specifications](https://www.snapmaker.com/snapmaker-u1/specs). The official figures for toolhead speed, acceleration, hotend flow, nozzle temperature and bed temperature.
2. [Snapmaker: 3D printer hotend replacement and the U1's 32 mm³/s flow](https://www.snapmaker.com/blog/3d-printer-hotend-replacement). Confirms that the 32 mm³/s figure was measured with ABS at 280 °C.
3. [Snapmaker U1 product page](https://www.snapmaker.com/en-EU/snapmaker-u1). Describes the four toolheads and the five-second tool change.
4. [Snapmaker Wiki: U1 FAQ](https://wiki.snapmaker.com/en/FAQ/u1). Covers the toolhead speed, supported materials and the Top Cover.
5. [Snapmaker Wiki: U1 hotend user guide](https://wiki.snapmaker.com/en/snapmaker_u1/hot_end_guide). Confirms the stock 0.4 mm stainless hotend and the hardened-steel 0.2, 0.4, 0.6 and 0.8 mm options.
6. [CNC Kitchen: Extrusion system benchmark tool for fast prints](https://www.cnckitchen.com/blog/extrusion-system-benchmark-tool-for-fast-prints). Explains how flow rate, not travel speed, limits fast printing.
7. [CNC Kitchen: Flow rate benchmarking of a hotend](https://www.cnckitchen.com/blog/flow-rate-benchmarking-of-a-hotend). Shows how to measure a hotend's flow limit by weight.
8. [Klipper documentation: Pressure Advance](https://www.klipper3d.org/Pressure_Advance.html). The reference for the pressure advance model and tuning procedure.
9. [Ellis' Print Tuning Guide: Pressure Advance introduction](https://ellis3dp.com/Print-Tuning-Guide/articles/pressure_linear_advance/introduction.html). A practical explanation of the measurement.
10. [Ellis' Print Tuning Guide: Pressure Advance index](https://ellis3dp.com/Print-Tuning-Guide/articles/index_pressure_advance.html). Calibration patterns and interpretation.
11. [Obico: Klipper pressure advance](https://www.obico.io/blog/klipper-pressure-advance). A plain-language overview of the tuning workflow.
12. [Wikipedia: Graetz number](https://en.wikipedia.org/wiki/Graetz_number). Defines the dimensionless group used to describe thermally developing flow.
13. [Wikipedia: Die swell](https://en.wikipedia.org/wiki/Die_swell). Explains the elastic recovery that makes the extrudate wider than the die.
14. [Printables: CNC Kitchen extrusion test part with volumetric flow rates](https://www.printables.com/model/134689). The test model used for flow calibration.
15. [stlDenise3D: Snapmaker U1 review](https://stldenise3d.com/snapmaker-u1-review-an-affordable-tool-changer-for-multicolor-3d-printing). An independent review of the toolchanger and multicolour workflow.
16. [3DJake: Snapmaker U1 review](https://www.3djake.com/info/guide/youtube-episode-the-snapmaker-u1-an-affordable-toolchanger). A review article that embeds the 3DJake video.

## Videos

The title of every video below was checked against YouTube's oEmbed response on 25 October 2026.

1. [Maximizing Volumetric Flow in Creality Print 5: Tips & Techniques](https://www.youtube.com/watch?v=eXkFxqarQ4Y). The video is published by Pushing Plastic.
2. [3D Printer's MAX FLOW RATE TESTING – PRINT vs WEIGHT](https://www.youtube.com/watch?v=XeMhQpcMrCA). The video is published by Printing Perspective.
3. [Klipper guide: Input shaping, pressure advance and macros (manual + accelerometer)](https://www.youtube.com/watch?v=EJapxNsntsQ). The video is published by Teaching Tech.
4. [Klipper input shaping - A leap forward in high speed AND high quality 3D printing](https://www.youtube.com/watch?v=er7q-CJL1lc). The video is published by Teaching Tech.
5. [Klipper Pressure Advance Tuning MADE EASY!](https://www.youtube.com/watch?v=LtG--ev3-4s). The video is published by Canuck Creator.
6. [Pressure Advance Calibration for your 3d printer (Klipper)](https://www.youtube.com/watch?v=LVp15eGXwm0). The video is published by PrintsLeo3D.
7. [Klipper - Pressure Advance - How To - Chris's Basement - 2022](https://www.youtube.com/watch?v=FdnTTAxHKmg). The video is published by Chris Riley.
8. [Pressure Advance Calibration: Ellis' Print Tuning Guide](https://www.youtube.com/watch?v=BzB4Y6QzT3M). The video is published by Minimal 3DP.
9. [Snapmaker U1: My Verdict After 1,000+ Hours | 4-Toolhead Tool Changer 3D IN-DEPTH Review](https://www.youtube.com/watch?v=qudEMljdjpg). The video is published by Aurora Tech.
10. [The Snapmaker U1: An Affordable Toolchanger!](https://www.youtube.com/watch?v=plQmkVFo0NA). The video is published by 3DJake.
11. [Snapmaker U1 Tool Changer 3D Printer Review - A Master Class In Reading The Room!](https://www.youtube.com/watch?v=flbWXpZPJtE). The video is published by Mads Tech.
12. [Fast 3D printing is bad for Strength! (and how to fix it!)](https://www.youtube.com/watch?v=qBvTWFEd7rk). The video is published by CNC Kitchen.
13. [How much WEAKER 3D Prints become at Higher FLOW RATES / SPEEDS? (DATA from 1000+ samples)](https://www.youtube.com/watch?v=SWKhB_4WTkc). The video is published by Printing Perspective.
