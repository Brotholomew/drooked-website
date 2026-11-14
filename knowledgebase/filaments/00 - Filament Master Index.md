---
title: "00 - Filament Master Index"
tags:
  - 3d-printing
  - filaments
  - moc
  - master-index
  - snapmaker-u1
  - panda-breath
  - drying
  - material-selection
---

| Scope | Key numbers | What it is good for | Additional notes |
| :--- | :--- | :--- | :--- |
| **Machine limits (Snapmaker U1)** | 270 × 270 × 270 mm build volume; 300 °C maximum nozzle temperature; 100 °C maximum bed temperature; 60 °C maximum chamber temperature with a chamber heater; 32 mm³/s hotend flow benchmark | Setting realistic expectations before a spool is opened | The 32 mm³/s figure was measured by Snapmaker with Snapmaker ABS at 280 °C. It is a hotend benchmark, not a material property, and it falls with smaller nozzles, abrasive fillers and lower printing temperatures. |
| **Officially supported filaments** | PLA, PETG, TPU, PVA and PCTG on the bare machine. The Top Cover adds PET, ABS, ASA, PA and PC. The Top Cover plus a hardened-steel hotend adds carbon-fibre and glass-fibre composites | Deciding which spools sit inside the official envelope | PEEK and PEI require 340–400 °C and cannot be printed on this machine. PPS is marginal at 300 °C. |
| **Chamber heating** | The Top Cover gives about 50 °C passively. A BIQU Panda Breath adds a 300 W PTC heater with HEPA and activated-carbon filtration, up to 60 °C | ABS, ASA, PA, PC, PPA, PPS and fibre composites | Stock firmware does not control the Panda Breath. paxx12 extended firmware in WebSocket mode or DragonBreath is required, and full-board motherboard cooling is mandatory before any chamber heater is used. |
| **Nozzles** | Four 0.4 mm stainless-steel hotends as stock. Hardened steel is available in 0.2, 0.4, 0.6 and 0.8 mm and is sold in four-packs of one diameter | Abrasive filaments and larger structural parts | Different diameters cannot be used in the same print according to Snapmaker. The 0.4 mm plus 0.6 mm OrcaSlicer workaround is unofficial. |
| **Vault coverage** | Thirteen general guides and 24 filament type notes | Finding the right note for a polymer or a process problem | This index is a map, not a substitute for the individual notes. Known gaps are listed near the end. |

> [!abstract] Overview
> This is the map of content for a filament engineering vault written around one machine: a Snapmaker U1 four-toolhead toolchanger with a 300 °C nozzle limit, a 100 °C bed limit, an optional Top Cover giving about 50 °C of passive chamber heating, and an optional BIQU Panda Breath chamber heater limited to 60 °C. The vault separates polymer physics from machine limits, because the same spool can behave very differently on a printer with a 350 °C hotend and a 70 °C chamber.
>
> The notes are deliberately conservative. Where a material is technically printable but sits at the edge of the machine's capability, such as PPS at 300 °C, the note says so. Where a material needs hardware the U1 does not have, such as PEEK at 340–400 °C, the note says that too rather than describing a workaround as if it were normal operation.
>
> All temperatures, flows and drying times are starting points. A new spool should always be characterised with a temperature tower, a flow test and, for hygroscopic polymers, a drying trial before a long print is attempted.

## How to read the numbers

Every nozzle temperature in this vault assumes a 0.4 mm nozzle unless a different diameter is stated. Volumetric flow falls roughly in proportion to the cross-sectional area of the nozzle, so a 0.2 mm nozzle cannot reach the flow of a 0.6 mm nozzle even with the same polymer.

Chamber temperatures refer to air temperature inside the enclosure, not to the bed setpoint. The U1 has no stock chamber heater. The Top Cover alone can reach about 50 °C on a long print, and a Panda Breath can hold 60 °C, which is also its own maximum. No note in this vault should be read as recommending a chamber above 60 °C on this machine.

Drying temperatures assume a dryer or oven that genuinely reaches its setpoint. Many consumer filament dryers run 5–10 °C below the displayed temperature, so a drying schedule that works in a laboratory oven may need extra time in a budget dryer.

## Part 1: the thirteen foundational guides

### Moisture, drying and storage

1. **[[01 - Drying Filament]]** explains polymer hygroscopy, hydrolysis and chain scission in PETG, PA, PC, TPU and PLA, the diffusion behaviour that makes drying slow, why desiccant alone cannot dry a wet spool, and how to build a drying schedule from a material's glass transition temperature.
2. **[[02 - Storing Filament]]** compares moisture vapour transmission rates of common containers, silica gel, activated alumina and 3A and 4A molecular sieves, and separates useful storage practice from vacuum-bag folklore.
3. **[[03 - Combining Storing and Drying - Science and Rational Approach]]** describes a closed-loop workflow from delivery to toolhead, including dry-box feeding through a PTFE tube, spool tracking and the practical limits of keeping four mounted spools dry on a machine with two filament feeders.

### Hardware, nozzles, geometry and thermodynamics

4. **[[04 - Nozzles and Their Types]]** covers the metallurgy of brass, stainless steel, hardened tool steel, plated copper, bimetal and tungsten carbide nozzles, high-flow internal geometries, and the difference between the stock integrated U1 hotend and the hardened-steel hotends that Snapmaker sells for abrasive materials.
5. **[[05 - Layer Height and Nozzle Size]]** explains the stadium-shaped extrusion cross-section, the practical layer-height rule of about 20–75% of nozzle diameter, line width and Arachne, the 0.2, 0.4, 0.6 and 0.8 mm nozzle matrix, and why mixing nozzle diameters in one print is not officially supported on the U1.
6. **[[06 - Heating and Temperatures - Nozzle, Bed, and Chamber]]** covers shear-thinning viscosity, polymer chain diffusion across layer boundaries, bed adhesion near the glass transition, chamber heat loss and warping stress, the effect of a hot chamber on PLA, and the operating protocol for the Top Cover and Panda Breath with mandatory motherboard cooling.
7. **[[07 - Print Speeds and Volumetric Flow]]** explains volumetric flow as layer height times line width times speed, the thermal limits on melting polymer fast enough, die swell, input shaping, pressure advance, and how to calibrate maximum volumetric speed in OrcaSlicer.

### Surface quality, finishing and troubleshooting

8. **[[08 - Surface Smoothing Slicer Techniques - Ironing and Beyond]]** covers ironing flow, speed and spacing, fuzzy skin, adaptive layer height, scarf seams, concentric top surfaces, and the wipe and prime-tower requirements that make zero-clearance multi-material interfaces work on a toolchanger.
9. **[[09 - Post-Processing - Matte, Shiny, and Surface Finishing]]** explains how nozzle temperature and speed change surface sheen, then covers wet sanding, filler primer, solvent smoothing with acetone for ABS and ASA, ethyl acetate and limonene, heat-gun stress relief and epoxy coating.
10. **[[10 - Common Printing Issues, Debugging, and Physical Limits]]** works through the common failures of a toolchanger in order of cause, and separates problems that can be tuned out from problems caused by a hard limit such as a 300 °C nozzle, a 100 °C bed or a 60 °C chamber.

### Heat treatment, skin contact and food contact

11. **[[11 - Annealing and Heat Treatment]]** explains what annealing does and does not do, why it is not drying or sintering, how crystallinity and stress relief change heat resistance, and which polymers benefit. It gives oven schedules for PLA, PET-CF, PPS-CF, PPA-CF, PC and PA, explains salt and plaster support methods, and states plainly that the U1's 60 °C chamber cannot anneal anything.
12. **[[12 - Skin Contact and Body-Safe Printing]]** separates material safety from part safety for wearables, watch bands, earrings, mask frames and orthotics. It covers irritation, allergic contact dermatitis, cytotoxicity and infection risk, plus pigments, nickel release, acrylates, isocyanates, carbon-fibre splinters, porosity, coatings and cleaning. It is explicit that no desktop FDM print is certified biocompatible.
13. **[[13 - Food Contact and Food-Safe Printing]]** explains the difference between a food-grade resin and a food-safe printed object. It covers porosity and bacterial retention, heavy-metal pigments, BPA and other migrants, the limits of FDA, EU, LFGB and NSF certification, nozzle and plate contamination, cleaning, coatings and the foods that should never go in a printed container.

## Part 2: the 24 filament type notes

The notes live in the `types/` folder. Each one covers chemistry, properties, printing conditions, drying, support pairing and failure modes for its family.

### Everyday, aesthetic and foaming PLA grades

- **[[01 - PLA (Polylactic Acid - Standard, High-Speed, and Tough PLA+)|PLA, high-speed PLA and PLA+]]** covers standard PLA, the shear-thinning behaviour that high-speed grades rely on, impact-modified PLA+, salt annealing and the cool, open chamber that PLA needs.
- **[[02 - Silk PLA (Elastomer-Modified High-Gloss Polylactic Acid Blend)|Silk PLA]]** explains how elastomer modification produces gloss and die swell, why silk parts have weak layer adhesion, and why the outer wall should be printed at a constant speed.
- **[[03 - Matte and Aesthetic Filled PLA (Matte, Wood, Marble, Glow-in-the-Dark, Sparkle PLA)|Matte, wood, marble, glow and sparkle PLA]]** covers mineral-filled matte PLA, lignocellulosic wood fill, marble and sparkle effects, and the abrasive strontium aluminate filler in glow-in-the-dark PLA that calls for a hardened nozzle.
- **[[04 - Foaming Lightweight PLA (LW-PLA - Active and Passive Expandable Polylactic Acid)|Foaming LW-PLA, active and passive]]** compares active chemical foaming, which can bring density down to roughly 0.4–0.5 g/cm³ depending on grade and temperature, with pre-foamed passive LW-PLA, and explains the flow and temperature controls that each needs.

### Tough polyesters and styrenics

- **[[05 - PETG (Polyethylene Terephthalate Glycol-Modified)|PETG]]** covers the ductile everyday workhorse, its moderate hygroscopicity, nozzle globbing, release agents for PEI, and the PLA interface that works well as a support pairing on a toolchanger.
- **[[06 - PCTG (Polycyclohexylenedimethylene Terephthalate Glycol-Modified)|PCTG]]** explains why PCTG is substantially tougher than PETG in notched impact, and covers its clarity, chemical resistance and the impact behaviour that makes it useful for durable clear parts.
- **[[07 - ABS (Acrylonitrile Butadiene Styrene)|ABS]]** covers two-phase terpolymer structure, shrinkage control in a 50–60 °C chamber, styrene and other volatile organic compounds that need filtration, and cold acetone vapour smoothing. ABS should be dried at 70–80 °C for 4–6 hours.
- **[[08 - ASA (Acrylonitrile Styrene Acrylate)|ASA]]** covers the UV-resistant outdoor alternative to ABS, its acrylate rubber phase, its thermal stability and the enclosed printing conditions it needs on the U1.

### Elastomers, polyamides, polycarbonate and composites

- **[[09 - TPU and TPE (Thermoplastic Polyurethane and Thermoplastic Elastomer - 95A, 85A, High-Speed TPU, Foaming LW-TPU)|TPU and TPE]]** covers Shore 95A and 85A grades, high-speed TPU and foaming LW-TPU, the buckling limit that sets minimum filament path friction, and rigid-plus-flexible overmoulding across toolheads.
- **[[10 - PA (Polyamide - Nylon 6, Nylon 12, and Nylon 6-66 Copolymers)|PA, or nylon]]** covers PA6, PA12 and PA6/66 copolymers, moisture uptake of roughly 2.5–9.5% depending on grade and humidity, warping during crystallisation, post-print moisture conditioning, and the low-friction wear behaviour that suits gears and bearings. Practical flow on the U1 is about 6–10 mm³/s.
- **[[11 - PC (Polycarbonate and PC-ABS, PC-PBT Engineering Alloys)|PC, PC-ABS and PC-PBT]]** covers polycarbonate's impact strength and glass transition near 145 °C, the 275–300 °C nozzle and 100 °C bed it needs, and the fact that a 50–60 °C chamber is the binding constraint on this machine. Pure PC runs at about 6–10 mm³/s, while modified PC and PC-ABS reach about 10–14 mm³/s.
- **[[12 - Carbon Fiber and Glass Fiber Reinforced Composites (PLA-CF, PETG-CF, ABS-GF, ASA-CF, PA-CF, PAHT-CF, PC-CF)|Carbon-fibre and glass-fibre composites]]** explains how chopped fibre reduces thermal expansion and raises stiffness at the cost of layer adhesion, why a hardened nozzle of 0.4 mm or larger is required, and how to control fibre dust.

### High-temperature, clear, soluble and functional materials

- **[[13 - PET (Polyethylene Terephthalate - Unmodified Crystalline PET and PET-CF)|PET and PET-CF]]** covers unmodified semi-crystalline PET, which is fussier than PETG, and the rigid, low-moisture carbon-fibre PET grades used for structural parts.
- **[[14 - PPA (Polyphthalamide - High-Performance High-Temp Nylon PPA-CF and PPA-GF)|PPA-CF and PPA-GF]]** covers semi-aromatic polyphthalamide, its high stiffness, its metallic ring when tapped, and the 285–300 °C nozzle and 55–60 °C chamber it needs, which places it at the edge of the U1 envelope.
- **[[15 - PPS (Polyphenylene Sulfide - PPS and PPS-CF)|PPS and PPS-CF]]** covers inherently V-0 flame-retardant polyphenylene sulfide, its broad solvent resistance below 200 °C, and the honest limitation that 300 °C is marginal for PPS, so only low-melt grades are realistic. Layer strength is lower than in the 320–340 °C range that industrial PPS expects, and practical flow is only about 3.5–6.0 mm³/s with a 0.4 mm nozzle.
- **[[16 - Glass-Like and Optically Transparent Filaments (PMMA Polymethyl Methacrylate, Clear PC, Transparent PETG, Transparent PCTG)|Clear and glass-like filaments]]** covers refractive index, void-free rectilinear infill, the flow and cooling settings that preserve clarity in PMMA, clear PC, transparent PETG and transparent PCTG, and the polishing steps that finish the job.
- **[[17 - PVB (Polyvinyl Butyral - Isopropyl Alcohol Smoothable Filament)|PVB]]** covers a PLA-like material that can be smoothed with isopropyl alcohol mist or vapour, which makes it useful for layer-free display models and investment-casting patterns.
- **[[18 - Conductive and ESD-Safe Current-Carrying Filaments (Conductive Carbon-Black PLA, Conductive TPU, ESD-PETG, ESD-ABS, ESD-PC)|Conductive and ESD-safe filaments]]** distinguishes carbon-black conductive PLA and TPU, which can carry small currents in embedded circuits, from carbon-nanotube ESD grades that target surface resistivity around 10⁶–10⁹ Ω per square without pretending to be a conductor.
- **[[19 - Magnetic and Ferromagnetic Iron-Filled Filaments (Paramagnetic Iron-PLA and Rustable Composites)|Iron-filled magnetic filaments]]** covers ferromagnetic iron powder composites for magnetic attraction, inductive sensing and EMI shielding, plus the vinegar and salt patina that produces deliberate rust.
- **[[20 - High-Density Metal-Filled and Sinterable Metal Filaments (BronzeFill, CopperFill, BrassFill, 316L and 17-4PH Stainless Steel)|High-density and sinterable metal filaments]]** separates aesthetic metal-filled PLA, which can be polished and tumbled, from debind-and-sinter 316L and 17-4PH stainless steel, which need a furnace cycle and carry real safety hazards.
- **[[21 - Ceramic, Stone, and Clay-Filled Filaments (Silica Ceramic PLA, Terracotta, Porcelain, and Sinterable Alumina-Zirconia)|Ceramic, stone and clay-filled filaments]]** covers matte stoneware and terracotta composites and the kiln-fired technical ceramics made from silica, alumina and zirconia, including the shrinkage and firing risks of the sinterable grades.
- **[[22 - Water-Soluble and Chemical-Soluble Support Filaments (PVA Polyvinyl Alcohol, BVOH Butenediol Vinyl Alcohol Copolymer, HIPS High Impact Polystyrene)|PVA, BVOH and HIPS supports]]** covers soluble support on a toolchanger, the dissolution behaviour of PVA and BVOH, limonene-soluble HIPS, and the sealed storage that soluble supports demand.
- **[[23 - PP and POM Low-Friction Polyolefins and Acetals (Polypropylene, Olefin Block Copolymer OBC, and Polyoxymethylene Acetal Delrin)|PP, OBC and POM]]** covers living-hinge polypropylene and olefin block copolymer, low-friction POM for gears and bushings, the adhesion problem that PP presents, and the strict temperature ceiling below 230 °C that keeps POM from releasing formaldehyde.
- **[[24 - Fluoropolymers, Ultra-Polymers, and Specialty Functional Filaments (PVDF Polyvinylidene Fluoride, PEEK Polyether Ether Ketone, PEI Polyetherimide Ultem, PCL Polycaprolactone, and Nylon Purge Cleaning Filament)|PVDF, PCL and cleaning filament]]** covers printable PVDF, hand-mouldable PCL and nylon purge or cold-pull cleaning filament. PEEK and PEI are described in the same note for reference only; both need 340–400 °C and cannot be printed on the U1.

## Part 3: quick-reference table

The table is a starting point for a 0.4 mm nozzle unless another diameter is named. Drying times assume a dryer that reaches its setpoint. Chamber values assume the Top Cover and, where a heater is named, a Panda Breath running through community firmware with full-board motherboard cooling already installed.

| # | Filament type | Nozzle (°C) | Bed (°C) | Chamber | Hotend | Drying | Bed surface | Typical max flow (mm³/s) |
| :-: | :--- | :---: | :---: | :--- | :--- | :---: | :--- | :---: |
| **01** | **[[01 - PLA (Polylactic Acid - Standard, High-Speed, and Tough PLA+)\|PLA, HS-PLA and PLA+]]** | 205–230 | 55–60 | Ambient, cover off | 0.4 mm stainless | 45–55 °C for 4–6 h | Smooth or textured PEI | 12–20 standard, 20–28 high-speed |
| **02** | **[[02 - Silk PLA (Elastomer-Modified High-Gloss Polylactic Acid Blend)\|Silk PLA]]** | 215–230 | 55–60 | Ambient, cover off | 0.4 mm stainless | 45–55 °C for 4–6 h | Smooth or textured PEI | 10–12 |
| **03** | **[[03 - Matte and Aesthetic Filled PLA (Matte, Wood, Marble, Glow-in-the-Dark, Sparkle PLA)\|Matte, wood, marble and glow PLA]]** | 200–225 | 55–60 | Ambient, cover off | 0.4 or 0.6 mm hardened | 45–55 °C for 6 h | Textured PEI, glue for wood fill | 8–18 |
| **04** | **[[04 - Foaming Lightweight PLA (LW-PLA - Active and Passive Expandable Polylactic Acid)\|Foaming LW-PLA]]** | 225–260 active, 190–215 passive | 55–60 | Ambient, cover off | 0.4 or 0.6 mm stainless | 45–55 °C for 4–6 h | Textured PEI | 4–7 |
| **05** | **[[05 - PETG (Polyethylene Terephthalate Glycol-Modified)\|PETG]]** | 235–255 | 70–80 | Ambient, up to 35 °C, cover vented | 0.4 mm stainless | 60–65 °C for 6–8 h | Textured PEI, glue as release on smooth PEI | 11–24 |
| **06** | **[[06 - PCTG (Polycyclohexylenedimethylene Terephthalate Glycol-Modified)\|PCTG]]** | 250–270 | 90–100 | Cover on, 35–45 °C | 0.4 mm stainless, 0.6 mm hardened for composites | 60–65 °C for 6–8 h | Textured or smooth PEI with release agent | 8–10 |
| **07** | **[[07 - ABS (Acrylonitrile Butadiene Styrene)\|ABS]]** | 245–265 | 95–100 | Cover plus heater, 50–60 °C | 0.4 mm stainless or 0.6 mm hardened | 70–80 °C for 4–6 h | PEI with ABS slurry or Magigoo | 16–30 |
| **08** | **[[08 - ASA (Acrylonitrile Styrene Acrylate)\|ASA]]** | 250–270 | 95–100 | Cover plus heater, 50–60 °C | 0.4 mm stainless or 0.6 mm hardened | 70–80 °C for 4–6 h | PEI with glue stick or Magigoo | 15–22 |
| **09** | **[[09 - TPU and TPE (Thermoplastic Polyurethane and Thermoplastic Elastomer - 95A, 85A, High-Speed TPU, Foaming LW-TPU)\|TPU and TPE]]** | 210–245 | 30–45 | Ambient, cover off | 0.4 mm stainless | 55–65 °C for 6–8 h | PEI with glue as release | 3–5 standard, 8–12 high-flow |
| **10** | **[[10 - PA (Polyamide - Nylon 6, Nylon 12, and Nylon 6-66 Copolymers)\|PA, or nylon]]** | 260–290 | 80–100 | Cover plus heater, 45–60 °C | 0.4 mm stainless or 0.6 mm hardened | 80–85 °C for 8–12 h | Garolite or PEI with Magigoo PA | 6–10 |
| **11** | **[[11 - PC (Polycarbonate and PC-ABS, PC-PBT Engineering Alloys)\|PC, PC-ABS and PC-PBT]]** | 275–300 | 100 | Cover plus heater, 50–60 °C | 0.6 mm hardened | 75–80 °C for 6–8 h | PEI with Magigoo PC or glue stick | 6–10 pure PC, 10–14 modified PC |
| **12** | **[[12 - Carbon Fiber and Glass Fiber Reinforced Composites (PLA-CF, PETG-CF, ABS-GF, ASA-CF, PA-CF, PAHT-CF, PC-CF)\|CF and GF composites]]** | 220–300 | 60–100 | Ambient for PLA-CF and PETG-CF, 50–60 °C for PA-CF and PC-CF | 0.6 mm hardened, 0.4 mm minimum | 70–90 °C for 8–12 h depending on matrix | Textured PEI with glue | 6–12 |
| **13** | **[[13 - PET (Polyethylene Terephthalate - Unmodified Crystalline PET and PET-CF)\|PET and PET-CF]]** | 265–295 | 80–100 | Cover plus heater, 45–55 °C | 0.6 mm hardened | 75–85 °C for 8 h | Textured PEI with glue | 8–14 |
| **14** | **[[14 - PPA (Polyphthalamide - High-Performance High-Temp Nylon PPA-CF and PPA-GF)\|PPA-CF and PPA-GF]]** | 285–300 | 90–100 | Cover plus heater, 55–60 °C | 0.6 mm hardened | 80–100 °C for 8–12 h | Textured PEI with Magigoo PA | 5–12 |
| **15** | **[[15 - PPS (Polyphenylene Sulfide - PPS and PPS-CF)\|PPS and PPS-CF]]** | 290–300, at the machine ceiling | 95–100 | Cover plus heater, 60 °C | 0.6 mm hardened | 80–90 °C for 8–12 h, or 100–130 °C in an oven | Textured PEI with Magigoo | 3.5–6.0 with 0.4 mm, 5–8 with 0.6 mm |
| **16** | **[[16 - Glass-Like and Optically Transparent Filaments (PMMA Polymethyl Methacrylate, Clear PC, Transparent PETG, Transparent PCTG)\|Clear and glass-like filaments]]** | 235–285 | 75–100 | Ambient for PETG and PCTG, 45–60 °C for PC and PMMA | 0.4 mm stainless or 0.6 mm hardened | 60–80 °C for 6–8 h | Smooth PEI with release agent | 5–12 |
| **17** | **[[17 - PVB (Polyvinyl Butyral - Isopropyl Alcohol Smoothable Filament)\|PVB]]** | 205–225 | 60–75 | Ambient, cover off | 0.4 mm stainless | 50–60 °C for 6–8 h | Smooth or textured PEI | 8–14 |
| **18** | **[[18 - Conductive and ESD-Safe Current-Carrying Filaments (Conductive Carbon-Black PLA, Conductive TPU, ESD-PETG, ESD-ABS, ESD-PC)\|Conductive and ESD-safe filaments]]** | 215–290 | 55–100 | Ambient for PLA and TPU, 50–55 °C for ESD-ABS and ESD-PC | 0.4 or 0.6 mm hardened | 55–80 °C for 6 h | PEI with glue stick | 3–7 |
| **19** | **[[19 - Magnetic and Ferromagnetic Iron-Filled Filaments (Paramagnetic Iron-PLA and Rustable Composites)\|Iron-filled magnetic filaments]]** | 190–210 | 55–60 | Ambient, cover off | 0.6 mm hardened | 45–50 °C for 4–6 h | Textured PEI with glue | 2–3 |
| **20** | **[[20 - High-Density Metal-Filled and Sinterable Metal Filaments (BronzeFill, CopperFill, BrassFill, 316L and 17-4PH Stainless Steel)\|High-density and sinterable metal filaments]]** | 195–220 decorative; 215–250 sinterable | 55–100 | Ambient for metal-filled PLA, 40–50 °C for sinterable steel | 0.6 mm hardened | 40–45 °C for 4 h for metal-PLA; do not dry Filamet | PEI with glue | 6–10 decorative, 4–7 Ultrafuse, 4–6 Filamet |
| **21** | **[[21 - Ceramic, Stone, and Clay-Filled Filaments (Silica Ceramic PLA, Terracotta, Porcelain, and Sinterable Alumina-Zirconia)\|Ceramic, stone and clay-filled filaments]]** | 205–225 decorative; sinterable per kiln schedule | 55–65 | Ambient, cover off | 0.6 mm hardened | 50–55 °C for 6 h | Textured PEI with glue | 10–14 decorative, 3–6 sinterable |
| **22** | **[[22 - Water-Soluble and Chemical-Soluble Support Filaments (PVA Polyvinyl Alcohol, BVOH Butenediol Vinyl Alcohol Copolymer, HIPS High Impact Polystyrene)\|PVA, BVOH and HIPS supports]]** | 195–215 for PVA and BVOH, 235–250 for HIPS | 55–100 | Ambient for PVA and BVOH, 50–55 °C for HIPS | 0.4 mm stainless | 50–60 °C for PVA and BVOH, 60–70 °C for HIPS | PEI or printed directly on the model | 3–6 for PVA, 5–8 for BVOH, 12–18 for HIPS |
| **23** | **[[23 - PP and POM Low-Friction Polyolefins and Acetals (Polypropylene, Olefin Block Copolymer OBC, and Polyoxymethylene Acetal Delrin)\|PP, OBC and POM]]** | 220–240 for PP, 210–225 for POM | 75–100 | Cover plus heater, 50–60 °C | 0.4 mm stainless, 0.6 mm hardened for PP-CF | 60–70 °C for 4–6 h | PP packing tape for PP, cellulose glue for POM | 5–12 |
| **24** | **[[24 - Fluoropolymers, Ultra-Polymers, and Specialty Functional Filaments (PVDF Polyvinylidene Fluoride, PEEK Polyether Ether Ketone, PEI Polyetherimide Ultem, PCL Polycaprolactone, and Nylon Purge Cleaning Filament)\|PVDF and PCL]]** | 245–265 for PVDF, 90–120 for PCL | 90–100 for PVDF, 30–45 for PCL | Cover plus heater, 50–55 °C for PVDF, ambient for PCL | 0.4 or 0.6 mm hardened or stainless | 65–70 °C for 3–4 h for PVDF; never dry PCL above 40 °C | PEI with glue stick | 6–9 PVDF, 4–6 PCL |

Four notes apply to the whole table:

- The flow figures are typical measured ranges for well-tuned machines, not guarantees. A 0.2 mm nozzle, a lower nozzle temperature or a heavily filled polymer will all reduce them.
- PPS on the U1 is limited to low-melt grades at the top of the machine's range. Its layer strength at 300 °C is lower than at the 320–340 °C used on industrial printers, so a PPS part on the U1 should be treated as a compromise rather than an equivalent replacement for an industrial PPS part.
- PEEK and PEI do not appear as printable rows. They require 340–400 °C and cannot be printed on the U1; they are discussed in the type 24 note only so that the family is complete.
- A chamber heater must never be run without full-board motherboard cooling. The RK3562 processor begins thermal throttling at 85 °C, and there are documented mid-print failures on machines without adequate cooling.

## Part 4: multi-material pairing on four toolheads

A toolchanger keeps each polymer in its own melt zone, so chemically incompatible pairs can meet at a support interface without contaminating each other. That is a real advantage over a single-nozzle multi-material system. It does not remove the need for a prime tower or a wipe sequence, and it does not produce zero ooze.

Nozzle diameter is a separate constraint. Snapmaker states that different diameters cannot be used in the same print, and hardened hotends are sold in four-packs of one size. The 0.4 mm plus 0.6 mm OrcaSlicer workaround, which uses percentage-based line widths and a shared layer height, has been reported to work, but it is unofficial and should be treated as an experiment.

| Primary material | Support interface | Flexible or overmould partner | Practical notes |
| :--- | :--- | :--- | :--- |
| **PLA, PLA+ or PLA-CF** | PETG for a clean peel, or PVA and BVOH for soluble support | 95A TPU, which bonds mechanically and only partly thermally | Keep the chamber cool. A zero-clearance interface needs a prime tower and a tested wipe volume. |
| **PETG, PCTG or PETG-CF** | PLA for a clean peel, or BVOH | 95A TPU, which forms a useful ester and urethane bond with the polyester | Vent the cover to keep the chamber below about 35 °C. |
| **ABS, ASA or ASA-CF** | HIPS, either breakaway or limonene-soluble | 95A TPU, which bonds mechanically | Run the chamber at 50–60 °C with filtration, and install motherboard cooling first. |
| **PA6-CF, PA12-CF or PPA-CF** | HIPS, or a dedicated breakaway PA support if one is available for the grade | TPU with a mechanical dovetail or similar interlock | Dry every spool before the print. A 50–60 °C chamber helps, but moisture control matters more. |
| **PC, PC-ABS or PC-CF** | HIPS, or a dedicated breakaway PC or ABS support | TPU, which bonds chemically to the ABS phase in PC-ABS and mechanically to neat PC | The chamber should sit at 50–60 °C. PC would prefer 55–65 °C, so the U1 is at its limit. |

## What this vault does not cover

The vault is broad but not complete. The following materials and product classes are deliberately absent, and the list is here so that a gap is not mistaken for a recommendation.

- **PEKK (polyether ketone ketone)** is a semi-crystalline high-temperature polymer that needs a 340–380 °C nozzle and a hot chamber, so it is outside the U1's capability in the same way as PEEK.
- **PSU and PPSU (polysulfone and polyphenylsulfone)** are amorphous high-temperature polymers that typically need 320–360 °C and a bed or chamber well above 100 °C, which the U1 cannot supply.
- **PBT (polybutylene terephthalate)** is a fast-crystallising polyester that warps strongly on its own; it appears here only as the PBT phase in PC-PBT alloys, and there is no dedicated PBT note.
- **PA11 and PA612** are long-chain nylons with lower moisture uptake than PA6, but they are not separated from the general PA note.
- **EVA (ethylene-vinyl acetate)** is a soft, rubber-like filament used for footwear and grips; its low stiffness and poor heat resistance place it outside the engineering focus of this vault.
- **PHA (polyhydroxyalkanoate)** is a biodegradable aliphatic polyester with low heat resistance and limited commercial supply, and it is not covered.
- **Recycled and regrind PLA** varies too much between suppliers to support a single profile, so the vault describes virgin PLA only.
- **Thermochromic and other colour-changing pigments** change the printing window and the pigment chemistry, and no note covers them.
- **Flame-retardant grades** such as FR-ABS, FR-PC and FR-PA use halogenated or phosphorus additive systems that are not discussed; only the inherent V-0 behaviour of PPS is covered.
- **Dedicated breakaway support materials** sold for PA, PC and ABS are named only as options in the pairing table, without a note of their own.

## Related notes

- **[[06 - Heating and Temperatures - Nozzle, Bed, and Chamber]]** is the reference for every chamber value quoted here.
- **[[07 - Print Speeds and Volumetric Flow]]** explains how the flow figures in the table were measured and how to calibrate them.
- **[[01 - Drying Filament]]** supports the drying column and explains why the times are ranges.
- **[[04 - Nozzles and Their Types]]** explains when a hardened nozzle is genuinely required.
- **[[10 - Common Printing Issues, Debugging, and Physical Limits]]** is the place to start when a print fails despite following a profile.

## Where the evidence comes from (sources)

The index itself does not cite external pages in the body, but the guidance is drawn from the following sources. Every link returned HTTP 200 and matched its description when checked on 25 October 2026.

- [Snapmaker U1 specifications](https://www.snapmaker.com/snapmaker-u1/specs) supplied the build volume, the 300 °C nozzle and 100 °C bed limits, the 32 mm³/s hotend flow figure and the official supported-material matrix.
- [Snapmaker U1 hotend guide](https://wiki.snapmaker.com/en/snapmaker_u1/hot_end_guide) supplied the stock 0.4 mm stainless hotend, the hardened-steel diameters, the 300 °C ceiling for every hotend variant and the nozzle-to-filament compatibility table.
- [Custom Snapmaker U1 firmware: chamber heater](https://snapmakeru1-extended-firmware.pages.dev/panda_breath.html) documents the Panda Breath and DragonBreath integration, the 300 W PTC heater, the 60 °C limit, the requirement for additional motherboard cooling, the RK3562 throttling point at 85 °C and the warranty position.
- [DragonBreath repository](https://github.com/plastikman/DragonBreath) is the open firmware recommended for the Panda Breath board and documents its on-device safety behaviour.
- [Bambu Lab filament wiki](https://wiki.bambulab.com/en/filament-acc/filament) provides manufacturer printing and drying guidance used to cross-check the type notes.
- [Prusa filament material guide](https://help.prusa3d.com/materials) provides an independent material-property and processing reference.
- [Polymaker wiki](https://wiki.polymaker.com/) provides polymer-specific technical data for several grades named in the type notes.
- [OrcaSlicer wiki](https://github.com/SoftFever/OrcaSlicer/wiki) documents the calibration tools and the multi-material settings referred to in the flow and pairing sections.

This page cites no other external references, and it uses no video links.
