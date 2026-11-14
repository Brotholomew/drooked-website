---
title: "15 - PPS (Polyphenylene Sulfide - PPS and PPS-CF)"
tags:
  - 3d-printing
  - filaments
  - pps
  - pps-cf
  - high-temperature
  - engineering-plastics
  - chemical-resistant
---

| Nozzle temperature | Chamber temperature | Post-print temperature resistance | What it is good for | Additional notes |
| :--- | :--- | :--- | :--- | :--- |
| 300 °C on the U1 (the machine maximum). The material's rated window is 310–350 °C, so the machine runs 10–50 °C below the manufacturers' recommendation. | 50–60 °C. The Top Cover alone gives about 50 °C; a Panda Breath at 60 °C needs community firmware and motherboard cooling. Polymaker says no heated chamber is required, while Bambu asks for 60–90 °C, which the U1 cannot reach. | HDT of about 250–264 °C at 0.45 MPa **after annealing at 125 °C for 16 hours**. Continuous service is about 200–220 °C. Unannealed parts are much lower. | EV and high-voltage housings, chemical-process jigs, hot-air and steam fixtures, and stiff brackets that stay below about 150 °C. | Hardened 0.4, 0.6 or 0.8 mm nozzle; 0.2 mm is banned. Dry before use. The filament is brittle on the spool. The base polymer is inherently UL94 V-0, but not every PPS-CF product carries a UL listing. |

> [!abstract] Overview
> Polyphenylene sulfide (PPS) is a semi-crystalline engineering thermoplastic built from alternating benzene rings and sulfur atoms. It has no aliphatic chains and no ester or amide groups, which gives it broad chemical resistance, very low moisture uptake and inherent flame retardancy. Its weakness is a low glass transition temperature of roughly 85–90 °C: the polymer is stiff and chemically resistant because it is highly crystalline, not because its amorphous phase is heat resistant. On a Snapmaker U1 the 300 °C nozzle ceiling sits below the 310–350 °C window that Polymaker, Bambu Lab, QIDI and 3DXTech specify, so PPS is a marginal material on this machine. It can be printed, but layer adhesion and crystallinity will be lower than on a 320–340 °C printer, and the part must be annealed to develop its heat resistance.

## 1. Chemistry and what it actually means

PPS is a linear aromatic thioether, written as (C₆H₄S)ₙ. The para-substituted phenylene rings and sulfide links pack tightly, which produces a high melting point (about 280–285 °C) and a high degree of crystallinity. The same structure explains why the material resists swelling in fuels, oils and many solvents, and why it chars rather than drips when exposed to flame.

Three qualifications matter, because they are often overstated in marketing copy:

- **PPS is not chemically inert.** Crystalline PPS resists most common solvents, fuels, oils, dilute acids and bases at room temperature. Concentrated sulfuric acid, however, sulfonates the aromatic rings and swells or degrades the polymer. Chlorinated solvents such as dichloromethane swell PPS, especially near its glass transition temperature. Do not use aggressive acids or chlorinated solvents to clean PPS parts, and do not repeat the claim that "nothing attacks it".
- **The base resin is inherently UL94 V-0, but a filament is not automatically certified.** PPS chars and self-extinguishes without halogenated additives, and its limiting oxygen index is high (commonly quoted above 40%). Bambu Lab publishes a UL 94 test report for PPS-CF and FormFutura lists UL94 V0 for Luvocom 3F PPS CF 9938. Polymaker states plainly that its Fiberon PPS-CF10 has no UL94 certification, although its own flame test showed V-0 behaviour. Treat "V-0" as a property of the polymer and check the individual product's certificate before using it in a certified electrical assembly.
- **Moisture uptake is low, not zero.** Saturated water absorption is about 0.05% for Bambu PPS-CF and QIDI PPS-CF, while Polymaker reports an equilibrium value of about 0.23% for Fiberon PPS-CF10. That is still far below nylon or PET, but it is not zero, and surface moisture and fibre sizing must be removed before printing at 300 °C.

The low glass transition temperature is the central design limit. Below roughly 90 °C the material is strong and stiff; above it, the amorphous regions soften and creep resistance drops sharply, even though the crystals do not melt until about 280 °C. A high heat deflection temperature therefore does not mean the part can carry load at that temperature.

## 2. Properties

| Property | PPS-CF10 / PPS-CF15 | Neat PPS | Notes |
| :--- | :--- | :--- | :--- |
| Density | 1.26–1.36 g/cm³ | 1.28 g/cm³ | Carbon fibre lowers density slightly compared with glass fibre. |
| Glass transition temperature (Tg) | 85–90 °C | 85–90 °C | Some carbon-filled grades report 90–100 °C by DSC; the base polymer is genuinely in the mid-80s to low-90s. |
| Melting temperature (Tm) | 280–285 °C | 283 °C | Measured by DSC at 10 °C/min. |
| HDT at 0.45 MPa, annealed | 250–264 °C | About 90 °C (3DXTech figure) | HDT is a deflection test under a fixed load, not a service temperature. |
| HDT at 1.8 MPa | 130–235 °C | Not published | The spread reflects grade, fibre loading and crystallinity. |
| Tensile strength, XY | 59–87 MPa | 50 MPa | Polymaker quotes 59 MPa for PPS-CF10; Bambu quotes 87 MPa for its PPS-CF. |
| Tensile strength, Z | 24–32 MPa | Not published | Layer adhesion is the weak direction and falls further at 300 °C. |
| Young's modulus, XY | 5.4–8.2 GPa | 2.65 GPa | Stiff, but below PPA-CF and PEEK-CF. |
| Saturated water absorption | 0.05–0.23% | Below 0.05% | Grade dependent. |
| Flame rating | Base resin UL94 V-0 | UL94 V-0 | Check the individual product certificate. |

### Advantages

- **Inherent flame retardancy without halogenated additives.** This is useful for electrical enclosures, rail and automotive interiors, and battery-pack furniture where a V-0 polymer is required.
- **Broad chemical resistance.** PPS handles fuels, oils, greases, many acids and bases, and most organic solvents at room temperature, which makes it suitable for pump parts, plating fixtures and solvent-exposed jigs.
- **Very low moisture sensitivity.** Parts keep their dimensions and stiffness in humid or wet service far better than nylon, and the filament does not need the same aggressive drying regime as PA or PPA.
- **High stiffness and useful creep resistance below Tg.** Carbon-filled PPS is a good metal replacement for stiff brackets in hot enclosures, provided the sustained load is modest and the temperature stays below about 150 °C. Creep accelerates quickly above Tg.
- **Good electrical insulation in the neat and glass-filled grades.** Carbon-filled PPS is not intended as an insulator, so use the neat or GF grade for standoffs and busbar supports.

### Limitations

- **The 300 °C U1 ceiling is below the material's rated window.** Polymaker recommends 310–350 °C and explicitly warns that 300 °C may work only at very low speed with reduced layer adhesion. Bambu specifies 310–340 °C, QIDI 310–350 °C for PPS-CF, and 3DXTech 335–345 °C for neat Thermax PPS.
- **Low Tg means the service ceiling is set by the amorphous phase.** Continuous use is usually quoted at 200–220 °C, and the material should not carry significant load near that limit.
- **Brittle, both as a filament and as a printed part.** PPS-CF snaps easily on the spool and has lower impact toughness than PPA-CF or PC.
- **It needs annealing to reach its published HDT.** A part printed into a 50–60 °C chamber comes out largely amorphous; the anneal is what turns it into a crystalline, heat-resistant piece.
- **Sulfur-containing volatiles.** Extrusion produces a faint sulfurous odour, so ventilation or carbon filtration is sensible.

## 3. Printing PPS on the Snapmaker U1

### A. Drying

PPS itself absorbs little water, but the sizing on carbon fibre and condensation on the spool surface still cause porosity and weak layers. Bambu and QIDI both recommend 100–140 °C for roughly 8–12 hours, and Polymaker notes that the material is moisture insensitive but still benefits from dry storage. On the U1, dry at 100–120 °C for 6–8 hours in a convection oven or a high-temperature dryer, and use the longer end of that range if the spool has been open for weeks. The gentler 85–100 °C for 8 hours in the master index also works, because PPS has little moisture to remove; the higher temperature simply shortens the process. Do not exceed the spool's rated temperature; Bambu's cardboard spool is rated to 145 °C, while many generic spools are only rated to 70–80 °C. Store the spool in a sealed box with desiccant below 20% relative humidity (see [[01 - Drying Filament]], [[02 - Storing Filament]] and [[03 - Combining Storing and Drying - Science and Rational Approach]]).

### B. Hotend and nozzle

Carbon-fibre and glass-fibre PPS are abrasive. The stock Snapmaker U1 hotend has a 0.4 mm stainless-steel nozzle, and stainless steel wears quickly with filled filament. Fit the official Snapmaker hardened-steel hotend. These are integrated units rather than swappable nozzles, and they are sold in four-packs of a single diameter in 0.2, 0.4, 0.6 and 0.8 mm.

- **0.2 mm is not usable.** It clogs with fibre-filled material; Bambu explicitly lists the 0.2 mm nozzle as incompatible with PPS-CF.
- **0.4 mm works** at reduced flow and is the practical choice for small parts and fine detail.
- **0.6 mm is the best default.** It gives more melt volume per second at the same shear rate and reduces the risk of extruder skipping at 300 °C.
- **0.8 mm is allowed** for large, low-detail parts, but it needs a coarser layer height and more heater power.

All four toolheads must use the same nozzle diameter in a single print. Different diameters cannot be mixed according to Snapmaker, so choose one size for the whole job (see [[04 - Nozzles and Their Types]] and [[05 - Layer Height and Nozzle Size]]).

### C. Layer height and line width

On a 0.6 mm nozzle, use layers of 0.20–0.28 mm. On a 0.4 mm nozzle, use 0.16–0.22 mm. Set the line width to about 110–125% of the nozzle diameter, for example 0.48–0.50 mm on a 0.4 mm nozzle and 0.66–0.75 mm on a 0.6 mm nozzle. Keep the flow ratio at 1.00–1.02; the material does not need over-extrusion to bond, and excess flow increases the risk of clogging.

### D. Temperatures

- **Nozzle:** set the U1 to 300 °C. Do not expect the machine to behave like a 330 °C printer. Polymaker's own FAQ says 300 °C is possible only if you print very slowly, and that layer adhesion will be reduced. Hold 300 °C steadily rather than lowering the setpoint to control oozing, which only makes the melt more viscous.
- **Bed:** set 90–100 °C. Polymaker recommends 80–90 °C, Bambu recommends 100–120 °C, QIDI recommends 80–100 °C for PPS-GF20 and 100 °C for PPS-CF, and 3DXTech recommends 110–130 °C for neat PPS. The U1 cannot exceed 100 °C, so 90–100 °C is the usable compromise. Use a textured PEI plate with a high-temperature adhesive such as Vision Miner Nano Polymer or Magigoo HT, and add a 5–10 mm brim.
- **Chamber:** 50–60 °C is the practical maximum. The optional Top Cover alone gives about 50 °C. A BIQU Panda Breath can hold 60 °C, but the stock U1 firmware does not control it: it requires paxx12's Snapmaker U1 Extended Firmware in WebSocket mode or DragonBreath. Motherboard cooling is mandatory before running any chamber heater, because the RK3562 throttles at 85 °C and there are documented mid-print failures. A 6015 driver-only fan does not cool the SoC.
- **Chamber reality check:** Polymaker states that PPS-CF10 does not require a heated chamber. Bambu recommends 60–90 °C, which the U1 cannot reach. At 50–60 °C the part cools through the crystallisation range quickly and comes out largely amorphous, so the anneal in section G is not optional.

See [[06 - Heating and Temperatures - Nozzle, Bed, and Chamber]] for the machine-level limits.

### E. Cooling, speed and flow

- **Part cooling:** keep the fan off, or at most 10–20% for small features if the surface finish demands it. Bambu allows 0–40%, but on a 300 °C machine any strong cooling stiffens the bead before the next layer arrives and worsens delamination.
- **Minimum layer time:** raise it to 15–20 s for small parts, and slow the outer wall rather than switching the fan on.
- **Speeds:** 20–30 mm/s for the first layer, 30–50 mm/s for outer walls, 40–60 mm/s for inner walls and 45–60 mm/s for infill. These are consistent with a 4–6 mm³/s flow limit on a 0.4 mm nozzle.
- **Volumetric flow:** limit the U1 to about 4–6 mm³/s at 300 °C. The master index lists 8–12 mm³/s for the material in general, but that figure is only realistic at the top of the temperature window (320–340 °C). At 300 °C the melt is more viscous, and the same part will show under-extrusion or extruder clicking well before 8 mm³/s. Treat 4 mm³/s as the starting point and raise it only if extrusion remains smooth.
- **Retraction:** 0.4–0.8 mm at 25–30 mm/s. Keep retractions short so that molten polymer is not pulled up into the cold heat break.
- **Pressure advance:** 0.02–0.04, tuned with a test tower at the final temperature.

See [[07 - Print Speeds and Volumetric Flow]].

### F. Supports and multi-toolhead use

PPS bonds to itself very strongly, so PPS-on-PPS support interfaces are difficult to remove. On the U1's toolchanger, a chemically different support material on a second toolhead is the cleaner option; ASA or PC works as a breakaway interface, and the toolchanger avoids cross-contamination in a shared melt zone. A prime tower or wipe sequence is still required. All toolheads must run the same nozzle diameter, so a 0.6 mm PPS toolhead cannot be paired with a 0.4 mm support toolhead in the same print. The 0.4 + 0.6 mm OrcaSlicer workaround with percentage line widths is unofficial and should not be relied on for production.

PPS-CF is brittle on the spool. Feed it from a spool holder with a gentle, large-radius path and avoid sharp bends or tight reverse bowden tubes. If the U1's filament path causes snapping, run the spool closer to the toolhead rather than forcing it through a long tube.

### G. Annealing is part of the process

A PPS part printed into a 50–60 °C chamber is mostly amorphous. Annealing above Tg lets the polymer crystallise, which raises the HDT, improves chemical resistance and increases layer strength. Polymaker specifies 125 °C for 16 hours for Fiberon PPS-CF10. That is the schedule to use; shorter holds of 3–5 hours are not equivalent and will not deliver the published 250–264 °C HDT.

1. Remove the part from the plate and place it on a flat ceramic or metal tray. For large, thin parts, support the geometry or bury it in ceramic powder or dry salt to limit sag.
2. Ramp slowly to 125 °C and hold for 16 hours. A slow ramp (about 1–2 °C per minute) reduces warping.
3. Switch the oven off and let the part cool slowly to room temperature inside the oven.
4. Measure the part after annealing: PPS crystallisation causes small shrinkage, so cut critical fits after the anneal or compensate for it in the model.

Do not use a food oven for this. Use a dedicated laboratory or workshop oven with ventilation, because PPS can release trace sulfurous volatiles.

### H. Troubleshooting

- **Extruder clicking or under-extrusion:** the flow limit is too high or the temperature is too low. Drop to 4 mm³/s, raise the nozzle to 300 °C and check that the hotend is actually reaching the setpoint.
- **Weak layers that peel apart:** this is the expected penalty at 300 °C. Dry the filament, reduce speed, raise the nozzle to the maximum, and anneal the part. If the part must carry load in the Z direction, PPA-CF is a better choice on this machine.
- **Corner lift:** use a 5–10 mm brim, a 90–100 °C bed, a 60 °C chamber and no draughts. A draft shield helps a little but does not replace chamber heat.
- **Filament snapping:** replace sharp bends in the path and avoid letting the spool run to a tight inner radius.
- **Dull thud instead of a ring:** the part is under-crystallised. Anneal at 125 °C for 16 hours. The ring is a useful anecdotal check of stiffness, not a measurement.
- **Sulfur smell:** increase ventilation or run carbon filtration. The Top Cover has a HEPA and activated-carbon filter, but it is not a substitute for room ventilation.

## 4. Snapmaker U1 configuration

| Subsystem | Setting for PPS and PPS-CF |
| :--- | :--- |
| Hotend | Official Snapmaker hardened-steel hotend. The stock 0.4 mm stainless unit is not suitable for sustained CF/GF use. |
| Nozzle diameter | 0.6 mm recommended; 0.4 and 0.8 mm allowed; 0.2 mm prohibited. All toolheads in one print must match. |
| Nozzle temperature | 300 °C, the machine maximum. This is 10–50 °C below the vendors' rated window. |
| Bed | 90–100 °C, textured PEI with high-temperature adhesive and a 5–10 mm brim. |
| Chamber | Top Cover closed, about 50 °C passively. Panda Breath at 60 °C only with community firmware; motherboard cooling is mandatory. |
| Firmware | Stock firmware does not control a Panda Breath. Use paxx12's Extended Firmware or DragonBreath. |
| Drying | 100–120 °C for 6–8 hours, then sealed storage below 20% RH. |
| Filament path | Gentle, large-radius path. PPS-CF is brittle and snaps in tight bends. |
| Multi-toolhead | Same nozzle diameter on every toolhead. A different support material is possible; mixed diameters are not. |
| Post-processing | Anneal at 125 °C for 16 hours. Wet-sand or machine if a finish is needed; solvent smoothing is not possible. |

## 5. Real demonstration models

These are real, verified models. The two bells were designed for PPS, the swatch is labelled for Bambu PPS-CF, and the last two are functional parts that make good use of the material's heat and steam resistance rather than PPS-specific designs.

1. **[PPS-CF Bell Polymaker + AC/DC Bonus](https://makerworld.com/en/models/2017814-pps-cf-bell-polymaker-ac-dc-bonus)** by maxim3D. This is the bell used in Polymaker's PPS-CF10 promotion. It rings sharply when the part is stiff and well crystallised, which makes it a useful before-and-after annealing demonstration.
2. **[Ringing Bell (PPS-CF/PPA-CF)](https://makerworld.com/en/models/1255175-ringing-bell-pps-cf-ppa-cf)** by Steve_D. A bell modelled specifically for PPS-CF or PPA-CF, so the same geometry can be printed in both materials for a direct comparison.
3. **[Filament Box Swatch - Bambu PPS CF](https://makerworld.com/en/models/982105-filament-sample-box-bambu-pps-cf)** by 3DMGK. A snap-on swatch for a filament storage box, labelled for Bambu PPS-CF. It is a small, quick print for checking colour, surface finish and dimensional accuracy before committing to a large part.
4. **[Blackstone Griddle Press Handle for PPA/PPS-CF](https://makerworld.com/en/models/3318102-blackstone-griddle-press-handle-for-ppa-pps-cf)** by Kyle K. A replacement handle for a griddle press, designed for PPA or PPS-CF because the original sits close to a hot cooking surface. It is a practical heat-exposure test rather than a laboratory specimen.
5. **[Small round autoclave container](https://makerworld.com/en/models/2866077-small-round-autoclave-container)** by Erik Dirks. A small container modelled after older metal autoclave versions. Printed in PPS it tests repeated steam and heat exposure, which is a better match for the material than a decorative print.

## 6. Videos

1. **[ModBot – High Temp Engineering Filament That's Easy To Print! (Fiberon PPS-CF)](https://www.youtube.com/watch?v=hJnMywhnrgo)**. A practical look at printing Fiberon PPS-CF on a desktop machine, including the hotend and bed requirements.
2. **[My Tech Fun – Polymaker PPS-CF10: Stronger Than ABS or Even PPA-CF?](https://www.youtube.com/watch?v=_G2l_tpFvNY)**. Mechanical testing of Polymaker PPS-CF10 against ABS and PPA-CF, with discussion of where the material wins and where it is brittle.
3. **[My Tech Fun – 3D Matt PPS-CF: The Ultimate High-Temperature 3D Printing Filament?](https://www.youtube.com/watch?v=qDGSoEg4cXY)**. A review of a third-party PPS-CF, including printed strength and heat performance.
4. **[My Tech Fun – Ambrosia PPS-CF: Testing the "Filament of the Gods"](https://www.youtube.com/watch?v=sCOHM_kxCYs)**. Another independent PPS-CF test, useful for seeing how much variation exists between brands.
5. **[Aliz 3D Technology – Amazing! Aliz PPS-CF Makes 3D Prints SOUND Like METAL!](https://www.youtube.com/watch?v=uLJkT1KmAuo)**. A demonstration of the acoustic ring that gives PPS-CF its reputation, and a reminder that the sound depends on stiffness and crystallinity.

## 7. Where to buy PPS filament

Fewer than ten brands sell a PPS filament aimed at desktop printers, and only a handful of those publish a profile that a 300 °C machine can follow. The five brands below (six products) were verified in October 2026. Kimya's website did not respond during checking, and CEL Robox's storefront also failed to respond, so neither is listed. Siraya Tech does not sell a PPS filament; its catalogue covers PPA, PET and ABS, and the "Siraya Tech PPS-CF" that appeared in earlier versions of this note does not exist. Amazon listings were not reliably verifiable and are therefore omitted.

| Brand and product | Type | Vendor nozzle / bed | Verdict for the U1 | Link |
| :--- | :--- | :--- | :--- | :--- |
| Polymaker Fiberon PPS-CF10 | PPS + 10% carbon fibre | 310–350 °C / 80–90 °C | The best candidate. Polymaker is the only vendor that says its 310 °C-rated PPS-CF10 can still be used at 300 °C, at low speed and with reduced layer adhesion. About $69.99 per 500 g. | [Polymaker](https://shop.polymaker.com/products/fiberon-pps-cf10) |
| QIDI PPS-GF20 | PPS + 20% glass fibre | 300–350 °C / 80–100 °C | The only product whose published window starts at 300 °C. Glass fibre makes it less stiff than CF but electrically insulating, which suits standoffs and housings. About $59.99 per 750 g. | [QIDI](https://qidi3d.com/products/pps-gf20) |
| QIDI PPS-CF | PPS + carbon fibre | 310–350 °C / 100 °C | Its range starts at 310 °C, so the U1 is 10 °C below it. Expect to trade flow and layer strength for the lower temperature. About $104.99 per 750 g. | [QIDI](https://qidi3d.com/products/pps-cf-filament) |
| Bambu Lab PPS-CF | PPS + carbon fibre | 310–340 °C / 100–120 °C, chamber 60–90 °C | Below its minimum nozzle temperature on the U1, and its bed and chamber recommendations exceed the machine. It also requires an X1E or H2-series printer according to Bambu. €133.99 per 0.75 kg (EU store price). | [Bambu Lab](https://us.store.bambulab.com/products/pps-cf) |
| 3DXTech Thermax PPS | Neat, unfilled PPS | 335–345 °C / 110–130 °C | Not printable on a U1: both the nozzle and the bed are outside the machine's limits. Listed for reference because it is a genuine industrial PPS. About $70 per 500 g. | [3DXTech](https://www.3dxtech.com/products/thermax-pps) |
| FormFutura Luvocom 3F PPS CF 9938 | PPS + 15% carbon fibre | No desktop settings published on the product page | An industrial, railway-certified compound (EN 45545, UL94 V0). It is a real product, but without a validated desktop profile it is not a sensible U1 purchase. €82.60 per 500 g. | [FormFutura](https://www.formfutura.com/luvocom-3f-pps-cf-9938) |

Prices are approximate, were observed on 25 October 2026, and exclude shipping and tax.

## 8. Safety

- **Ventilation.** PPS extrudes with a faint sulfurous odour and can release trace sulfur-containing volatiles, especially above 300 °C. Print in a ventilated room or with carbon filtration. The U1 Top Cover's HEPA and carbon filter help but do not replace room ventilation.
- **Carbon-fibre dust.** Sanding or machining PPS-CF produces fine dust. Wet-sand where possible and wear eye protection and a suitable respirator.
- **Annealing.** Use a dedicated workshop oven with ventilation, not a food oven, and allow the part to cool inside the oven to avoid warping.
- **Chemicals.** Do not clean PPS with concentrated sulfuric acid or chlorinated solvents. Both attack or swell the polymer, and both are hazardous to handle.
- **Chamber heater.** A 60 °C chamber requires motherboard cooling on the U1. Without it, the RK3562 can throttle at 85 °C and the print can fail mid-job. Elevated chamber temperature also accelerates wear, and thermal damage is unlikely to be covered by warranty.

## Related notes

- [[00 - Filament Master Index]]
- [[01 - Drying Filament]]
- [[02 - Storing Filament]]
- [[03 - Combining Storing and Drying - Science and Rational Approach]]
- [[04 - Nozzles and Their Types]]
- [[05 - Layer Height and Nozzle Size]]
- [[06 - Heating and Temperatures - Nozzle, Bed, and Chamber]]
- [[07 - Print Speeds and Volumetric Flow]]
- [[08 - Surface Smoothing Slicer Techniques - Ironing and Beyond]]
- [[09 - Post-Processing - Matte, Shiny, and Surface Finishing]]
- [[10 - Common Printing Issues, Debugging, and Physical Limits]]
- [[12 - Carbon Fiber and Glass Fiber Reinforced Composites (PLA-CF, PETG-CF, ABS-GF, ASA-CF, PA-CF, PAHT-CF, PC-CF)]]
- [[14 - PPA (Polyphthalamide - High-Performance High-Temp Nylon PPA-CF and PPA-GF)]]
- [[24 - Fluoropolymers, Ultra-Polymers, and Specialty Functional Filaments (PVDF Polyvinylidene Fluoride, PEEK Polyether Ether Ketone, PEI Polyetherimide Ultem, PCL Polycaprolactone, and Nylon Purge Cleaning Filament)]]

## Sources

- Polymaker, Fiberon PPS-CF10 product page and printing recommendations: https://wiki.polymaker.com/polymaker-products/polymaker-filaments/fiberon-tm/fiberon-tm-pps-cf10
- Polymaker, Fiberon PPS-CF10 technical data sheet (TDS V1.1): https://fiberon.polymaker.com/wp-content/uploads/TDS_FIBERON-PPS-CF10_V1.1_EN.pdf
- Bambu Lab, PPS-CF product page and printing tips: https://us.store.bambulab.com/products/pps-cf
- Bambu Lab, PPS-CF technical data sheet: https://store.bblcdn.com/26f4f40359484040a8660c9150a90fc0.pdf
- QIDI Tech, PPS-CF: https://qidi3d.com/products/pps-cf-filament
- QIDI Tech, PPS-GF20: https://qidi3d.com/products/pps-gf20
- 3DXTech, Thermax PPS and TDS: https://www.3dxtech.com/products/thermax-pps
- FormFutura, Luvocom 3F PPS CF 9938: https://www.formfutura.com/luvocom-3f-pps-cf-9938
- MakerWorld models 2017814, 1255175, 982105, 3318102 and 2866077, titles checked through the MakerWorld design API.
- YouTube videos checked through the YouTube oEmbed endpoint; titles above match the returned titles.
