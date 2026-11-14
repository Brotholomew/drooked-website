---
title: "12 - Carbon Fiber and Glass Fiber Reinforced Composites (PLA-CF, PETG-CF, ABS-GF, ASA-CF, PA-CF, PAHT-CF, PC-CF)"
tags:
  - 3d-printing
  - filaments
  - composites
  - carbon-fiber
  - glass-fiber
  - pla-cf
  - petg-cf
  - pa-cf
  - paht-cf
  - pc-cf
  - asa-cf
  - abs-gf
  - abrasive-filament
---

| Material                 | Nozzle temperature | Chamber temperature                                                               | Post-print temperature resistance                                                           | What it is good for                                                                            | Additional notes                                                                                                                                                                                 |
| ------------------------ | ------------------ | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| PLA-CF                   | 215–235 °C         | Ambient; open or vented Top Cover                                                 | Continuous service about 45–50 °C; HDT 55–60 °C at 0.45 MPa, and HDT is not a service limit | Matte display models, low-load jigs, architectural mock-ups, covers that do not get hot        | Dry at 50–55 °C for 4–6 hours. A hardened-steel nozzle of 0.4 mm is the practical minimum. The material is brittle in the Z direction and is not suitable for hot or highly loaded parts.        |
| PETG-CF                  | 240–260 °C         | Ambient to about 40 °C; vented Top Cover                                          | Continuous service about 55–65 °C; HDT 70–78 °C at 0.45 MPa                                 | Outdoor brackets, camera rigs, chemical-resistant fixtures, low-stringing functional parts     | Dry at 65 °C for 6 hours. Use a hardened-steel nozzle. Z strength is lower than that of neat PETG. Use glue as a release layer on PEI.                                                           |
| ABS-GF                   | 255–275 °C         | 50–60 °C with the Top Cover; active heating has firmware and cooling requirements | Continuous service about 75–85 °C; HDT 95–105 °C at 0.45 MPa                                | Printer parts, electrical enclosures, colored brackets, automotive interior trim               | Dry at 70–80 °C for 6 hours. ABS emits styrene vapor, so filter and ventilate. Glass fiber is electrically insulating.                                                                           |
| ASA-CF                   | 260–280 °C         | 50–60 °C with the Top Cover; active heating has firmware and cooling requirements | Continuous service about 80–90 °C; HDT 95–105 °C at 0.45 MPa                                | Outdoor drone frames, marine mounts, automotive exterior trim, UV-stable brackets              | Dry at 70–80 °C for 6 hours. ASA emits styrene and acrylate vapors, so filter and ventilate. Carbon fiber is conductive.                                                                         |
| PA-CF (PA6-CF / PA12-CF) | 265–300 °C         | 50–60 °C with the Top Cover; active heating has firmware and cooling requirements | Continuous service about 100–120 °C when dry; HDT 190–215 °C for PA6-CF at 0.45 MPa         | Metal-replacement brackets, gears, robot arms, engine-bay mounts that are not continuously hot | Dry at 80–90 °C for 8–12 hours and print from a dry box. PA6 grades run toward the top of the range and PA12 grades toward the bottom. Anneal and moisture-condition according to the datasheet. |
| PAHT-CF / PPA-CF         | 290–300 °C         | 50–60 °C with the Top Cover; active heating has firmware and cooling requirements | Continuous service about 120–150 °C; HDT 200–225 °C at 0.45 MPa                             | High-temperature brackets, under-hood parts, drone structures, industrial fixtures             | Dry at 80–90 °C for 8–12 hours. These grades run near the U1 nozzle limit. Some require more than 300 °C and cannot be printed on the U1.                                                        |
| PC-CF                    | 280–300 °C         | 50–60 °C with the Top Cover; active heating has firmware and cooling requirements | Continuous service about 110–120 °C; HDT 130–142 °C at 0.45 MPa                             | Rigid frames, toolhead carriages, metrology fixtures, creep-resistant brackets                 | Dry at 80–90 °C for 8–12 hours. The bed is set to 100 °C. The U1 cannot reach a heated chamber above 60 °C, so large parts may still warp.                                                       |

> [!summary] Overview
> Chopped carbon-fiber (CF) and glass-fiber (GF) composites are thermoplastics filled with short fibers, usually about 5–25 wt%. The fibers raise stiffness, reduce in-plane thermal expansion, and improve creep resistance, but they do not make a part uniformly stronger. The fibers lie mostly in the XY plane, so Z-direction strength is often similar to or lower than that of the unfilled polymer.
>
> These materials are abrasive. The Snapmaker U1's stock 0.4 mm stainless-steel hotend is not suitable for regular CF or GF printing. Snapmaker sells hardened-steel hotends in 0.2, 0.4, 0.6 and 0.8 mm, and a 0.4 mm or 0.6 mm hardened hotend is the practical choice. The U1 can print these materials with the Top Cover and a hardened hotend, but its bed is limited to 100 °C and its chamber to 60 °C. Some high-temperature grades, and some large PC-CF parts, therefore sit at the edge of what the machine can do.

## What short-fiber reinforcement does

### Fiber loading and orientation

Commercial CF and GF filaments usually contain 5–25 wt% fiber. PLA-CF and PETG-CF commonly sit around 10–15% CF. ABS-GF and ASA-CF often sit around 10–20% GF or CF. PA-CF grades commonly sit around 15–25% CF, and PA6-GF grades can reach 25–30% GF. The exact loading matters, but so do fiber length, fiber sizing, and how well the compound is dispersed.

The fibers are short, typically about 80–250 µm long and roughly 7–15 µm in diameter. As the melt converges into the nozzle, shear aligns many fibers along the extrusion path. In the deposited bead they remain mostly parallel to the XY plane. This is the main reason the properties are anisotropic.

### Stiffness, strength, and anisotropy

Chopped fibers increase flexural and tensile modulus in the XY plane, but the increase is not a fixed number. A reasonable working range is about 30–200% over the unfilled matrix, depending on the polymer, fiber type, loading, and print orientation. PLA-CF typically gains about 30–75%, while PA-CF and PC-CF can gain 100–200% or more.

The same fibers do not cross layer boundaries. They also occupy space where polymer chains would otherwise diffuse between layers. As a result, Z-direction tensile strength is often similar to or lower than that of the unfilled resin, and it can be markedly lower in high-fiber compounds. A larger nozzle can reduce clogging and improve bead-to-bead contact, but its benefit is clog resistance and wider beads, not a fixed increase in Z strength. Thicker layers generally reduce interlayer bonding because the deposited bead cools before the next layer can diffuse into it.

The practical consequence is simple: design so that the main loads run in the XY plane, use generous fillets, and avoid putting tension across layer lines. For genuinely multiaxial structural parts, metal inserts, continuous-fiber reinforcement, or a different process may be better than chopped-fiber FFF.

### Heat deflection and service temperature

The effect of fibers on heat resistance depends on the matrix.

In an amorphous polymer such as PLA, PETG, ABS, ASA or PC, the glass transition sets the practical heat-deflection limit. Fibers raise stiffness below the glass transition and reduce creep, but they do not move the glass transition. The HDT therefore stays close to that of the unfilled polymer.

In a semi-crystalline polyamide such as PA6, PA12, PAHT or PPA, the crystalline regions retain stiffness above the glass transition. Fibers carry load and constrain the crystalline phase, and annealing can increase crystallinity. The result is an HDT well above the glass transition, often 180–225 °C at 0.45 MPa depending on the grade. The mechanism is load transfer and constrained deformation, not fibers bridging crystalline lamellae.

HDT is not a continuous-service limit. A part that deflects at 200 °C under a small test load may creep badly at 120 °C under a real bolt preload. Use the datasheet HDT as a comparison number and the practical service temperature as a design limit.

### Carbon fiber versus glass fiber

Carbon fiber gives higher stiffness per unit weight, lower density at similar loading, a matte black appearance, and electrical conductivity. CF-filled parts can attenuate radio signals and can short low-voltage electronics if fibers contact conductors. CF is also more brittle in impact than GF in many compounds.

Glass fiber gives lower stiffness per unit weight, higher elongation and impact toughness in many grades, electrical insulation, and radio transparency. GF compounds can be colored, which is useful for ABS-GF and PA6-GF parts that need to be visible or match a product. Glass is also abrasive, so it does not remove the need for a hardened nozzle.

GF is often tougher than CF, but the difference depends on the grade, fiber sizing, and matrix, and cost varies by supplier. Choose CF when stiffness, low weight and dimensional stability matter most. Choose GF when toughness, electrical insulation, radio transparency or color matter most.

### Warping and dimensional stability

The fibers have a much lower axial coefficient of thermal expansion (CTE) than the polymer. Carbon fiber is close to zero along its axis, and E-glass is about 5 × 10⁻⁶ K⁻¹, while unfilled polymers are often 60–120 × 10⁻⁶ K⁻¹. At typical loadings, the in-plane CTE of a printed composite often falls by roughly 30–50%, and the effect is anisotropic. Through-layer expansion remains dominated by the polymer.

That reduction helps large parts stay flatter, but it does not eliminate warping. Shrinkage, residual stress, bed adhesion, chamber temperature and part geometry all still matter. Large reductions in warping are sometimes claimed, but they are not a measured specification. Treat fiber reinforcement as a warp reduction aid, not a guarantee.

## Representative property ranges

The table below gives typical datasheet ranges for well-dispersed commercial compounds. Actual values depend on fiber loading, orientation, moisture content and test method.

| Material | Flexural modulus in XY | Tensile strength in XY | HDT at 0.45 MPa | Notes |
| --- | --- | --- | --- | --- |
| PLA-CF | 4.5–6 GPa | 45–60 MPa | 55–60 °C | Stiff but brittle, with low heat resistance. |
| PETG-CF | 3.5–4.8 GPa | 50–65 MPa | 70–78 °C | Tougher than PLA-CF, with moderate heat resistance. |
| ABS-GF | 3.4–4.4 GPa | 45–58 MPa | 95–105 °C | Good impact strength and electrical insulation. |
| ASA-CF | 4.0–5.5 GPa | 48–62 MPa | 95–105 °C | UV-stable and suitable for outdoor parts. |
| PA6-CF | 7–10 GPa dry; 4.5–6.5 GPa conditioned | 100–120 MPa dry; 70–85 MPa conditioned | 190–215 °C | Moisture-sensitive, with excellent strength when dry. |
| PA6-GF | 5–7 GPa | 80–95 MPa | 180–205 °C | Higher impact toughness and electrical insulation than CF. |
| PAHT-CF or PPA-CF | 9–13 GPa | 120–155 MPa | 200–225 °C | The best heat and creep resistance in this group, but near the U1 limit. |
| PC-CF | 6–8.5 GPa | 70–95 MPa | 130–142 °C | Rigid and creep-resistant, but notch-sensitive. |

These ranges are representative rather than universal. A 10% CF PLA and a 20% CF PA6 are not comparable materials, and a dry PA6-CF test bar is not comparable to a conditioned part.

## Drying and storage

Short fibers create many fiber–matrix interfaces, and those interfaces can wick moisture into the filament. Wet PA-CF foams and oozes at the nozzle, produces poor surface finish, and loses layer strength. PETG-CF and PC-CF also print badly when wet. Drying is not optional for engineering composites.

| Matrix | Drying temperature | Drying time | Notes |
| --- | --- | --- | --- |
| PLA-CF | 50–55 °C | 4–6 hours | Do not exceed the spool's rated temperature. PLA softens and deforms if the dryer is too hot. |
| PETG-CF | 65 °C | 6 hours | Dry before long prints. PETG absorbs water slowly but still strings badly when wet. |
| ABS-GF and ASA-CF | 70–80 °C | 6 hours | Check that the spool and dryer are rated for the temperature. |
| PA6-CF, PA12-CF and PA6-GF | 80–90 °C | 8–12 hours | PA6 grades are extremely hygroscopic. Dry immediately before use and print from a dry box. |
| PAHT-CF and PPA-CF | 80–90 °C | 8–12 hours | Follow the manufacturer's datasheet. Some grades prefer 100–120 °C if the dryer supports it. |
| PC-CF | 80–90 °C | 8–12 hours | PC absorbs moisture and hydrolyses at high temperature. Dry before every long print. |

A heated dry box at 60–70 °C during printing helps, but the spool must tolerate that temperature. If the dryer cannot reach the recommended temperature, use a longer time at the highest safe temperature rather than guessing. Do not dry a spool above its rated temperature.

Store opened spools in a sealed container with fresh desiccant and a hygrometer. Keep relative humidity below about 20% if possible. Recharge or replace desiccant regularly. See [[01 - Drying Filament]], [[02 - Storing Filament]] and [[03 - Combining Storing and Drying - Science and Rational Approach]].

## Nozzle, hotend, and extrusion hardware

CF and GF are abrasive. They wear brass, aluminum and unhardened stainless steel. The Snapmaker U1's stock hotend is a 0.4 mm stainless-steel unit with the heat sink, heat break, heater block and nozzle made as one integrated assembly. It is not serviceable by changing only the nozzle. Regular CF or GF printing will erode the orifice and eventually change the extrusion width.

Snapmaker sells official hardened-steel hotends in 0.2, 0.4, 0.6 and 0.8 mm. They are sold as four-packs of one diameter, and different diameters cannot be used in the same print according to Snapmaker. A hardened-steel hotend is mandatory for these materials. Snapmaker's official supported-material list also requires the Top Cover for these composites.

Nozzle size guidance:

- **0.4 mm:** The practical minimum for well-milled commercial compounds. It works with modern CF and GF filaments when the volumetric flow is kept modest and the filament is dry.
- **0.6 mm:** The best default for PA-CF, PAHT-CF, PPA-CF and PC-CF. It reduces clogging, lowers shear, and allows wider beads with better bead-to-bead contact. It does not automatically make Z bonds stronger.
- **0.8 mm:** Useful for large structural parts where detail and fine tolerances matter less. It reduces clogging further but limits the minimum feature size.
- **0.2 mm:** Impractical for these materials. A 0.2 mm orifice is about 200 µm across, which is on the order of the chopped fiber length. Fibers can bridge the opening, and the high shear can break them. The result is frequent clogging and poor flow.

Hardened steel has lower thermal conductivity than brass. That does not justify a blanket temperature offset. The hotend's PID controller holds the set temperature using the thermistor and heater block, so a fixed offset is not a reliable correction. At high flow, a hardened-steel hotend can show a slightly different temperature gradient, but the correct correction is a temperature tower, a flow test and a maximum-volumetric-speed test. Adding a blanket offset by default can cause stringing or thermal degradation if the material is already near its limit.

The extruder also sees abrasive filament. Inspect the drive gears for wear and clean out carbon dust with a soft brush. If the gears are not hardened, avoid long production runs with high-fiber material or replace worn components as needed. Do not assume that the stock extruder is designed for thousands of hours of abrasive filament.

Use a filament path with a large bend radius. Dry CF and GF filament is brittle and can snap inside a tight PTFE bend. A sweeping curve into the toolhead is better than a sharp 90-degree turn.

## Slicing and print settings

The following values are starting points for the U1 with a hardened-steel hotend. Always begin with the filament manufacturer's profile, then calibrate flow, pressure advance, temperature and maximum volumetric speed for the actual spool.

### Temperature and build surface

| Matrix | Nozzle temperature | Bed temperature | Build surface | Chamber |
| --- | --- | --- | --- | --- |
| PLA-CF | 215–235 °C | 55–60 °C | Textured PEI with glue | Ambient; open or vented Top Cover |
| PETG-CF | 240–260 °C | 70–80 °C | PEI with glue as a release layer | Ambient to about 40 °C; vented |
| ABS-GF | 255–275 °C | 95–100 °C | PEI or G10 with Magigoo or glue | 50–60 °C with the Top Cover |
| ASA-CF | 260–280 °C | 95–100 °C | PEI or G10 with Magigoo or glue | 50–60 °C with the Top Cover |
| PA6-CF, PA6-GF and PA12-CF | 265–300 °C; PA6 grades toward the top, PA12 grades toward the bottom | 80–100 °C | PEI or G10 with Magigoo PA | 50–60 °C with the Top Cover |
| PAHT-CF and PPA-CF | 290–300 °C | 90–100 °C | PEI with Magigoo PA | 50–60 °C with the Top Cover |
| PC-CF | 280–300 °C | 100 °C | PEI with Magigoo PC or glue | 50–60 °C with the Top Cover |

The U1 bed maximum is 100 °C. Do not copy generic PC or PA profiles that specify a bed above 100 °C. If a datasheet asks for a hotter bed, the U1 cannot provide it, and the part needs more adhesion help or a different geometry. The U1 chamber maximum is 60 °C. It cannot provide the hotter chamber used by some industrial printers. Some PC-CF, PAHT-CF and PPA-CF grades ask for nozzle temperatures above 300 °C; the U1 cannot reach them, so choose a grade that prints within 300 °C.

### Layer height, line width and flow

On a 0.4 mm nozzle, use layer heights of about 0.20–0.28 mm. On a 0.6 mm nozzle, use about 0.24–0.36 mm. Avoid layers below about 0.16 mm with a 0.4 mm nozzle. Squeezing relatively long fibers into a very thin gap produces rough surfaces and raises back pressure.

Line width should be about 115–125% of the nozzle diameter. That is roughly 0.46–0.50 mm on a 0.4 mm nozzle and 0.68–0.75 mm on a 0.6 mm nozzle. Wider lines increase contact area between adjacent beads, which helps XY strength.

The U1's maximum hotend flow is 32 mm³/s as measured by Snapmaker with Snapmaker ABS at 280 °C. That is a machine measurement, not a universal material limit. CF and GF compounds usually flow more slowly because the fibers increase viscosity and back pressure. Start around 8–12 mm³/s for PLA-CF, PETG-CF and ABS-GF, and around 6–9 mm³/s for PA-CF and PC-CF. A 0.4 mm nozzle will usually be lower than a 0.6 mm nozzle. Raise the limit only after a flow test.

### Cooling, speed, retraction and pressure advance

Part cooling depends on the matrix. PLA-CF can use 50–100% fan. PETG-CF usually works best at 20–40%, with more fan on bridges. ABS-GF, ASA-CF, PA-CF, PAHT-CF and PC-CF generally use 0–15% fan on normal layers and about 30% on bridges. Too much fan cools the bead before it can bond to the previous layer and increases warping.

Print speed is usually 40–100 mm/s, with outer walls slower than infill. The U1's 500 mm/s maximum and 20,000 mm/s² acceleration are machine limits, not sensible settings for abrasive composites. Moderate speeds give the polymer time to diffuse across the layer boundary.

Retraction is typically 0.6–1.0 mm at 25–35 mm/s on a direct-drive toolhead. Excessive retraction can grind the filament and make the problem worse. Use a spiral Z-hop or a small Z-hop to avoid dragging the nozzle across the abrasive surface.

Pressure advance usually starts low, around 0.015–0.030, and should be calibrated for the specific filament and nozzle. The stiff fiber-filled melt does not compress like neat polymer, so a large pressure-advance value usually causes gaps or blobs.

### Ironing, seams and surface finish

Do not iron CF or GF parts. Dragging a flat nozzle across cured fibers grinds the nozzle tip and fractures surface fibers into loose dust. Use a monotonic top surface or concentric top fill instead. The natural matte texture of a CF or GF part is usually more attractive than a damaged ironed surface.

A scarf seam can blend into the matte texture. If Arachne is used, keep the minimum wall width at or above about 85% of the nozzle diameter so thin walls do not starve the extruder of fiber-filled material. Fuzzy skin is optional; it can hide layer lines, but it traps dust and is not suitable for precision fits.

### Supports and multi-material printing

Use the same material or a compatible breakaway support. PVA is not a good support for PA, PAHT or PC because it degrades or softens at those nozzle temperatures and does not bond reliably. HIPS can work with ABS and ASA. For PLA-CF and PETG-CF, PVA or BVOH can work if it is thoroughly dry.

On the U1, a dedicated toolhead can carry the CF or GF filament while another toolhead carries support or TPU. This reduces wear on the non-composite toolheads, but a prime or wipe tower is still needed. Officially, all toolheads in a print must use the same nozzle diameter. The OrcaSlicer 2.2+ workaround that mixes 0.4 mm and 0.6 mm via percentage line widths and a shared layer height is a community workaround, not stock capability.

## Printing composites on the Snapmaker U1

### Chamber strategy

The U1 has no stock chamber heater. The optional Top Cover provides passive chamber heating up to about 50 °C, plus HEPA and activated-carbon filtration. The BIQU Panda Breath is a 300 W PTC heater with a HEPA/carbon filter, a maximum chamber temperature of 60 °C, a PTC limit of 105 °C, and 330–350 W operating power. Stock U1 firmware does not control it. It works only through community firmware: paxx12 Snapmaker U1 Extended Firmware in Panda Breath WebSocket mode, or DragonBreath, which is the recommended option.

Motherboard cooling is mandatory before using a chamber heater on the U1. The RK3562 processor begins thermal throttling at 85 °C, and there are documented mid-print failures. A 6015 driver-only fan does not cool the RK3562 and is not sufficient on its own. A full-board cooler is required. Elevated chamber temperature also increases wear, and thermal damage is unlikely to be covered by warranty.

If you do not install a heater and full-board cooling, use the Top Cover for passive heat and accept that large ABS-GF, ASA-CF, PA-CF and PC-CF parts may warp. Do not describe the U1 as having a heated chamber above 60 °C. It does not have one.

For PLA-CF and PETG-CF, keep the Top Cover open or vented. These materials do not need a hot chamber, and a closed cover can cause heat creep in the toolhead.

### Toolhead and filament path

The U1 has four independent toolheads, two filament feeders (one left for toolheads 1–2 and one right for toolheads 3–4), and four spool holders. The feeders are shared between toolhead pairs. RFID is available for Snapmaker filament; third-party spools need a manual profile.

A practical setup is a hardened-steel 0.4 mm or 0.6 mm hotend in the composite toolhead and a second hotend of the same diameter for support or TPU. The stock 0.4 mm stainless unit is suitable for the support or TPU role when the composite toolhead also uses 0.4 mm. Keep the filament path wide and smooth. Dry PA-CF and PC-CF are brittle and can snap in a tight bend. Feed directly from a heated dry box where possible.

### A practical workflow

1. Dry the spool using the schedule above and keep it in a dry box while printing.
2. Install a hardened-steel hotend of the chosen diameter. Do not run CF or GF through the stock stainless nozzle.
3. Calibrate flow, pressure advance, temperature and maximum volumetric speed with a small test print.
4. Heat the bed to the material's setting and close the Top Cover for ABS, ASA, PA and PC. Use passive chamber heat unless the heater and motherboard cooling are installed.
5. Print a first-layer test and a small mechanical test before committing to a large part. Check layer adhesion and warp.
6. Anneal only if the datasheet calls for it, and moisture-condition PA6 parts afterward.

## Post-processing, annealing and safety

### Fiber shedding and sanding

Freshly printed CF and GF surfaces can shed short fibers. Handle raw parts with nitrile gloves, especially if the surface will touch skin. Wash the part in warm soapy water with a nylon brush, rinse it, and dry it before handling or sealing.

Never dry-sand CF or GF parts. Use wet sanding with a P100 respirator, or an N95 at minimum, plus eye protection and gloves. Carbon fiber dust is electrically conductive, so keep it away from electronics and use a HEPA vacuum rather than a normal shop vacuum. Glass fiber dust is a mechanical irritant and should be treated like mineral-fiber dust. Work outdoors or in a well-ventilated area.

To seal handles, wearables or parts that will be touched often, apply a thin coat of matte polyurethane varnish or a very thin epoxy. Test the coating on a scrap piece first. The coating locks in surface fibers but does not make the part food-safe or medically safe.

### Annealing

Annealing can increase crystallinity and heat deflection in semi-crystalline polyamides. It can also reduce toughness, cause slight shrinkage, and distort thin parts.

- **PA6-CF and PA6-GF:** Anneal at about 90–120 °C for 4–6 hours in a convection oven, ramp slowly, and cool in the oven. This can raise HDT toward the upper end of the datasheet range. Moisture-condition afterward.
- **PA12-CF, PAHT-CF and PPA-CF:** Follow the specific datasheet. Some grades benefit from annealing at 100–120 °C; others are supplied in a condition that does not need it. Do not exceed the manufacturer's recommendation.
- **PC-CF:** Annealing at about 120–130 °C for 2–4 hours can relieve stress, but the part must be supported to avoid warping. It is not always necessary.
- **PLA-CF and PETG-CF:** Annealing is not recommended. The gain in heat resistance is small, and the risk of distortion is high.

Do not anneal parts that contain metal inserts, magnets or dissimilar plastics without checking their thermal expansion and temperature limits.

### Moisture conditioning

PA6-CF and PA6-GF lose toughness when bone dry. After annealing, they can absorb moisture from room air over about 48 hours, or from a warm water soak, to regain impact strength. The same moisture reduces stiffness. This is a normal trade-off for PA6, not a defect. PA12, PAHT and PPA absorb less water and are more dimensionally stable.

### Machining, painting and electrical use

If a part needs machining, use carbide tools, keep the part wet or use dust extraction, and wear the same respiratory protection as for sanding. Primers and fillers can smooth the surface, but sanding between coats still produces dust.

CF-filled parts are conductive enough to interfere with antennas and to cause problems near exposed electronics. GF-filled parts are electrically insulating and radio-transparent in many grades, but check the datasheet before using them as an electrical enclosure. Neither material is automatically flame-retardant. Do not assume UL94 V-0 performance without a listed grade.

## Real demonstration models

These models are published on Printables and are intended for the listed composite families. They are useful for checking stiffness, fit, creep and surface finish on a real part.

- **[PA11 Carbon Fiber Planetary Gearbox](https://www.printables.com/model/253289)** is a working planetary gearbox designed for Prusament PA11 Carbon Fiber. It shows how a PA-CF part can serve as a working gearbox in a low-load mechanism.
- **[PC Blend Carbon Fiber Prusa Pulley](https://www.printables.com/model/73671)** is a lightweight pulley remix designed for Prusa PC Blend Carbon Fiber. It shows the stiffness and creep resistance of PC-CF in a rotating mechanical part.
- **[PETG Carbon Fiber Prusament Clamp](https://www.printables.com/model/417639)** is a clamp remix intended for PETG Carbon Fiber. It is a simple way to compare the stiffness and surface finish of PETG-CF with neat PETG.
- **[ABS-GF Bar-End Weights for Rizoma 22 mm Alloy Handlebars](https://www.printables.com/model/1792488)** is a split-collet bar-end weight that recommends ABS-GF for durability, stiffness and reduced creep. It is a good test of GF dimensional stability under a clamped load.
- **[Garmin Edge Mount for Syncros ST-R100 - PA6-GF25 Optimized](https://www.printables.com/model/1614027)** is a bike-computer mount designed around PA6-GF25 and similar industrial filaments. It tests vibration resistance and layer adhesion in a thin, load-bearing part.

## Videos

- **[CNC Kitchen – Everyone gets this Wrong when 3D Printing Carbon Fiber Nylon](https://www.youtube.com/watch?v=u8dIpwd6tzo)** covers moisture, creep, annealing and strength testing, and it shows the gap between expectations and real CF-nylon performance.
- **[The Next Layer – Carbon Fiber 3D Printer Filaments: What Are They Good For?](https://www.youtube.com/watch?v=WK-61N-dE8E)** surveys advanced filaments, including carbon-fiber nylon and PETG-CF, and explains where each type fits.
- **[Tangled Testing – How Strong is Carbon Fiber Filament Really? Creality vs Polymaker vs Force Tracer](https://www.youtube.com/watch?v=52jMxz9ICi4)** compares several commercial CF compounds in mechanical tests.
- **[Noizie Works – PETG VS Carbon Filled PETG tested, is carbon fiber better?](https://www.youtube.com/watch?v=lfztVplTBQc)** tests whether CF actually improves PETG in practice.
- **[My Tech Fun – Tinmorry ABS-CF vs ABS-GF vs ASA-CF: Which One Should You Use?](https://www.youtube.com/watch?v=p5EWIDQzyIc)** compares CF and GF versions of ABS and ASA for strength, stiffness and heat behavior.

## Commercially available filaments

The table lists real products across PLA-CF, PETG-CF, PA-CF, PC-CF and ASA-CF from different brands. Prices and stock change frequently, so the links are provided for identification rather than as live price quotes. All links were checked in October 2026.

| Brand and product | Matrix and reinforcement | Why it is relevant | Link |
| --- | --- | --- | --- |
| Bambu Lab PLA-CF Black | PLA with chopped carbon fiber | A widely available PLA-CF with good dimensional accuracy and a matte finish. | [3DJake listing](https://www.3djake.com/bambu-lab/pla-cf-black) |
| Polymaker PolyLite PLA-CF Black | PLA with chopped carbon fiber | A general-purpose PLA-CF for visual parts and light-duty jigs. | [3DJake listing](https://www.3djake.com/polymaker/polylite-pla-cf-black) |
| eSUN PLA-CF Black | PLA with chopped carbon fiber | An entry-level PLA-CF that is easy to source in many regions. | [3DJake listing](https://www.3djake.com/esun/pla-cf-black-2) |
| Prusament PETG Carbon Fiber Black | PETG with carbon fiber | Prusa's in-house PETG-CF, with a reputation for consistent diameter and winding. | [Prusa product page](https://www.prusa3d.com/product/prusament-petg-carbon-fiber-black-1kg/) |
| Bambu Lab PETG-CF Black | PETG with chopped carbon fiber | A smooth-printing PETG-CF for functional brackets and fixtures. | [3DJake listing](https://www.3djake.com/bambu-lab/petg-cf-black-1) |
| eSUN PETG-CF Black | PETG with chopped carbon fiber | A general-purpose PETG-CF for outdoor and shop fixtures. | [3DJake listing](https://www.3djake.com/esun/petg-cf-black-3) |
| Polymaker Fiberon PA6-CF20 Black | PA6 with 20% carbon fiber | A high-strength PA6-CF for brackets, gears and metal-replacement parts. | [3DJake listing](https://www.3djake.com/polymaker/fiberon-pa6-cf20-black) |
| Bambu Lab PAHT-CF Black | High-temperature polyamide with carbon fiber | A high-temperature PA-CF for under-hood and industrial parts. | [3DJake listing](https://www.3djake.com/bambu-lab/paht-cf-black) |
| Spectrum PA6 CF15 | PA6 with 15% carbon fiber | A European PA6-CF with good stiffness and heat resistance. | [3DJake listing](https://www.3djake.com/spectrum/pa6-cf15) |
| Fiberlogy Nylon PA12+CF | PA12 with carbon fiber | A low-moisture PA12-CF for dimensionally critical tooling and fixtures. | [Fiberlogy product page](https://fiberlogy.com/en/fiberlogy-filaments/nylon-pa12cf/) |
| Prusament PC Blend Carbon Fiber Black | Polycarbonate blend with carbon fiber | A rigid PC-CF for pulleys, brackets and creep-resistant mechanical parts. | [3DJake listing](https://www.3djake.com/prusa/prusament-pc-blend-carbon-fiber-black-nfc) |
| Spectrum PC CF Carbon Black | Polycarbonate with carbon fiber | A second PC-CF option for frames and fixtures that need high stiffness. | [3DJake listing](https://www.3djake.com/spectrum/pc-cf-carbon-black) |
| Polymaker Fiberon ASA-CF08 Black | ASA with 8% carbon fiber | A UV-stable ASA-CF for outdoor brackets and automotive exterior trim. | [3DJake listing](https://www.3djake.com/polymaker/fiberon-asa-cf08-black) |
| Spectrum ASA-X CF10 Black | ASA with 10% carbon fiber | A higher-fiber ASA-CF for stiff outdoor parts. | [3DJake listing](https://www.3djake.com/spectrum/asa-x-cf10-black) |
| Elegoo ASA-CF Carbon Fiber Black | ASA with carbon fiber | A general-purpose ASA-CF for outdoor and functional parts. | [3DJake listing](https://www.3djake.com/elegoo/asa-cf-carbon-fiber-black) |

The list is not exhaustive. Fewer mainstream brands list PC-CF and ASA-CF than list PLA-CF and PETG-CF, and some regional suppliers are missing. That is a market limitation, not a reason to pad the table with unsupported products.

## Related notes

The following notes cover the supporting topics in more detail.

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
- [[01 - PLA (Polylactic Acid - Standard, High-Speed, and Tough PLA+)]]
- [[05 - PETG (Polyethylene Terephthalate Glycol-Modified)]]
- [[07 - ABS (Acrylonitrile Butadiene Styrene)]]
- [[08 - ASA (Acrylonitrile Styrene Acrylate)]]
- [[10 - PA (Polyamide - Nylon 6, Nylon 12, and Nylon 6-66 Copolymers)]]
- [[11 - PC (Polycarbonate and PC-ABS, PC-PBT Engineering Alloys)]]
- [[14 - PPA (Polyphthalamide - High-Performance High-Temp Nylon PPA-CF and PPA-GF)]]
- [[15 - PPS (Polyphenylene Sulfide - PPS and PPS-CF)]]

## Sources

- The [Snapmaker U1 product page](https://www.snapmaker.com/snapmaker-u1) is the manufacturer's reference for the machine's hardware and material-support claims.
- The product pages linked in the commercial table above were checked in October 2026 for matrix and fiber descriptions.
- The independent videos linked above report practical test results, and they are not manufacturer specifications.
- HDT values are normally measured at 0.45 MPa under ISO 75 or ASTM D648. Check the individual datasheet for the test standard, fiber loading and moisture condition.
- The community-firmware statements in the chamber section refer to the paxx12 Snapmaker U1 Extended Firmware and DragonBreath projects. They are not official Snapmaker features, and they require the motherboard cooling described above.
