---
title: "07 - ABS (Acrylonitrile Butadiene Styrene)"
tags:
  - 3d-printing
  - filaments
  - abs
  - styrenic
  - engineering-plastics
  - snapmaker-u1
  - acetone-smoothing
---

| Nozzle temperature | Chamber temperature | Post-print temperature resistance | What it is good for | Additional notes |
| :--- | :--- | :--- | :--- | :--- |
| 245–265 °C on the U1, and up to about 275 °C for high-flow grades printed fast | 45–60 °C. The Top Cover alone gives roughly 45–50 °C; 55–60 °C requires a Panda Breath with community firmware | HDT is roughly 70–100 °C at 0.45 MPa depending on grade; standard ABS is usually 85–100 °C. Practical continuous service is about 70–85 °C, and lower under load. HDT is a deflection test, not a service limit | Printer parts, jigs and fixtures, electronics enclosures, automotive interior brackets, and parts that will be acetone-smoothed | Dry at 65–70 °C for 4–6 hours. ABS emits styrene and ultrafine particles, so use HEPA plus activated carbon and ventilate the room. Full-board motherboard cooling is mandatory before adding a chamber heater |

> [!info] Overview
> ABS is a two-phase styrenic engineering thermoplastic: a rigid styrene-acrylonitrile matrix toughened by grafted polybutadiene rubber particles. It has a glass transition temperature near 105 °C, good impact resistance, and excellent machinability, and it can be solvent-welded or vapour-smoothed with acetone. Those properties made it the default functional filament before PETG and ASA became widely available, and it is still the material used for most LEGO bricks and many injection-moulded appliance housings.
>
> The cost is process difficulty. ABS contracts by roughly 0.5–0.8% as it cools, so large parts warp and split unless the chamber is warm and draft-free. It also releases styrene and ultrafine particles while printing, which makes filtration and room ventilation a requirement rather than a refinement. On the Snapmaker U1, ABS is officially supported with the Top Cover fitted. The U1 has no stock chamber heater, a 100 °C bed limit and a 300 °C nozzle limit, so the practical ceiling is a 60 °C chamber and a 100 °C bed, not the 110 °C bed that older ABS guides assume.

## What ABS is

ABS is a terpolymer in the sense that three monomers are used, but the finished material is not a simple random copolymer. Polymerisation produces a continuous styrene-acrylonitrile (SAN) phase and a dispersed rubber phase of polybutadiene grafted with SAN. The rubber particles are typically sub-micron and make up roughly 5–30% of the mass. Typical monomer proportions are 15–35% acrylonitrile, 5–30% butadiene and 40–60% styrene, although every manufacturer uses its own recipe.

Each component contributes a different property. The acrylonitrile units are polar and improve chemical resistance, surface hardness and heat resistance. The styrene units give rigidity, gloss and easy processing. The polybutadiene phase absorbs impact energy and stops cracks from propagating, which is why ABS dents and whitens instead of shattering like polystyrene. Because the rubber is unsaturated, it is also the reason ABS degrades outdoors: ultraviolet light attacks the carbon-carbon double bonds, and the surface yellows, chalks and embrittles over months. ASA replaces the butadiene with a saturated acrylic elastomer and is the correct choice for outdoor parts ([[08 - ASA (Acrylonitrile Styrene Acrylate)|08 - ASA]]).

ABS is amorphous, so it has no true melting point. It softens through its glass transition and flows above roughly 220 °C under shear. The glass transition temperature of commercial grades is usually quoted between 101 and 108 °C; 105 °C is a fair working figure. The material is soluble in acetone, methyl ethyl ketone and dichloromethane, which enables solvent welding and cold-vapour smoothing.

Several families are sold under the ABS name:

- **Standard ABS** is unmodified or lightly modified and gives the best balance of heat resistance and toughness.
- **ABS+ or easy ABS** contains modifiers that reduce warping and odour. These grades usually give up heat resistance. eSUN lists an HDT of 73 °C in its ABS+ data table, although its marketing text claims 89 °C; the data table is the safer figure to design with.
- **High-heat ABS** grades such as Polymaker ABS Pro and ABS Max are formulated for higher HDT and better creep resistance, and they cost more.
- **ABS-CF and ABS-GF** add chopped fibre for stiffness and lower shrinkage. They need a hardened steel nozzle and are covered in [[12 - Carbon Fiber and Glass Fiber Reinforced Composites (PLA-CF, PETG-CF, ABS-GF, ASA-CF, PA-CF, PAHT-CF, PC-CF)|12 - Composites]].
- **ESD-safe ABS** is filled with conductive carbon and is covered in [[18 - Conductive and ESD-Safe Current-Carrying Filaments (Conductive Carbon-Black PLA, Conductive TPU, ESD-PETG, ESD-ABS, ESD-PC)|18 - Conductive and ESD-safe filaments]].

### Typical properties

The table below shows the range across published data for unfilled ABS from Bambu Lab, Polymaker, eSUN, SUNLU, Prusa and MatterHackers. It is a class range, not a specification for any one spool.

| Property | Typical range | Published examples | Notes |
| :--- | :--- | :--- | :--- |
| Density | 1.02–1.12 g/cm³ | SUNLU 1.02, MatterHackers 1.04, eSUN 1.06, Polymaker 1.12 | About 16% lighter than PLA at 1.04 g/cm³ |
| Glass transition temperature | 101–108 °C | Polymaker 101 °C by DSC | The softening region, not a service limit |
| Vicat softening temperature | 86–104 °C | SUNLU 86 °C, Polymaker 104 °C | Test load affects the result |
| HDT at 0.45 MPa | 70–100 °C | Bambu 87 °C, SUNLU 95 °C, eSUN ABS+ 73 °C | Standard ABS is usually 85–100 °C; low-warp ABS+ can be 70–80 °C |
| HDT at 1.8 MPa | 75–90 °C | Grade-dependent | A short-term deflection test under a defined load |
| Tensile strength, XY | 30–45 MPa | Polymaker 33.3, SUNLU 35, eSUN 40.1, MatterHackers about 45 | ABS is more ductile than PLA but usually has a lower peak tensile strength |
| Tensile strength, Z | About 15–30 MPa | eSUN 14.9 | Layer adhesion is the weak direction |
| Young's modulus | 1.8–2.4 GPa | Polymaker 2.17 GPa | Noticeably below PLA, which is about 3–3.5 GPa |
| Elongation at break | 2.7–30% | Polymaker 2.7%, eSUN ABS+ 5.5% | Very grade-dependent; low-warp blends are less ductile |
| Notched impact strength | 12–26 kJ/m² | Polymaker 12.6, eSUN 26.5 (XY) | Test methods differ, so compare only like with like |
| Thermal shrinkage | 0.5–0.8% | SUNLU 0.4–0.8% | Measure per spool; large parts can exceed this |
| Moisture absorption | About 0.2–0.4% by weight | Class estimate | Moderate, not as sensitive as nylon |

Two cautions apply to this table. First, HDT is measured on a small specimen under a fixed load and says nothing about long-term creep. A bracket that holds a load at 80 °C may still sag over weeks even though its HDT is 95 °C. Second, the elongation and impact figures vary enormously between standard ABS and low-warp ABS+. A tough-looking impact number on a data sheet does not guarantee that a printed part will survive a drop, because layer adhesion controls that behaviour.

## Printing ABS on the Snapmaker U1

ABS is on the U1's official material list once the Top Cover is fitted. The machine can heat the nozzle to 300 °C and the bed to 100 °C, and it has no stock chamber heater. That is enough for ABS, but only if the chamber is managed deliberately.

### Hotend and nozzle

The stock 0.4 mm stainless steel hotend is the right starting point for unfilled ABS. It is an integrated unit, so changing nozzle diameter means fitting a complete hotend rather than unscrewing a nozzle. The official hardened steel hotends are available in 0.2, 0.4, 0.6 and 0.8 mm and are sold as four-packs of one diameter. Snapmaker does not support mixing diameters in a single print, so a 0.4 mm set plus a second set in another size is the practical way to cover both detail and large parts.

Hardened steel is not needed for plain ABS. It is needed for ABS-CF, ABS-GF and mineral-filled grades. Some manufacturers suggest raising the nozzle temperature by about 5 °C with a hardened steel nozzle; confirm the setting with a temperature tower rather than assuming it.

Nozzle size affects both strength and appearance. A 0.4 mm nozzle with four walls and five top and bottom layers is a sensible structural default. A 0.6 mm nozzle reduces print time on large enclosures and produces thicker beads that stay warm longer, which helps layer bonding. A 0.2 mm nozzle is possible but is a poor match for a material that warps, because thin layers and long print times increase the chance of a corner lifting. Avoid 0.2 mm with filled ABS because the clog risk is high.

### Nozzle temperature

The usual window is 245–265 °C. Start at 255 °C for standard ABS on a 0.4 mm nozzle. Low-warp ABS+ grades often print at 230–250 °C, and high-flow grades can go to 270–275 °C when the volumetric flow is high. The U1's 300 °C limit is not a reason to print hotter; higher temperatures increase odour, stringing and the risk of heat creep.

Print a temperature tower from 245 to 270 °C in 5 °C steps before committing to a large part. Judge the tower on surface finish, layer adhesion, stringing and corner definition, not only on the smoothest-looking band. If the part strings badly, dry the spool first and then lower the temperature by 5 °C; do not compensate for wet filament with temperature.

### Bed and first layer

The bed should be set to 95–100 °C. The U1 cannot go higher, and 100 °C is the practical maximum. Bambu Lab and Polymaker both recommend 90–100 °C for ABS, while eSUN lists 95–110 °C for ABS+ and SUNLU lists 80–100 °C. On the U1, use 95–100 °C for large parts and 90–95 °C for small ones.

A textured or smooth PEI sheet works well, provided it is clean. Wash it with dish soap and water, then wipe it with 99% isopropyl alcohol. Large ABS parts can bond too strongly to smooth PEI and tear the sheet when removed, so a thin layer of glue stick is often used as a release agent rather than as an adhesive. A brim of 5–8 mm with a small gap helps anchor the corners.

ABS slurry, made by dissolving a scrap of ABS in acetone, is a traditional adhesion aid. It works, but it is flammable, messy and difficult to apply evenly. Glue stick or a commercial ABS adhesion aid is safer. Whichever route you use, let the build plate cool below about 45 °C before removing the part; pulling a warm part off the plate is a common cause of both warping and sheet damage.

### Chamber and enclosure

The chamber is the single most important variable. ABS does not need to be printed at 60 °C, but it does need a stable, draft-free environment. The U1 Top Cover raises the chamber to roughly 45–50 °C passively and includes HEPA and activated carbon filtration. That is enough for small and medium parts, especially if the bed is allowed to heat-soak the chamber for 15–20 minutes before the print starts.

For large parts, a chamber at 55–60 °C reduces the temperature gradient between the top and bottom of the print and lowers the risk of corner lift and layer splitting. The BIQU Panda Breath is a 300 W PTC heater with a HEPA and carbon filter, and its maximum chamber temperature is 60 °C. It draws roughly 330–350 W at the wall. The U1 cannot exceed 60 °C, and ABS does not need more.

The Panda Breath is not a plug-and-play accessory on stock firmware. Snapmaker's stock firmware does not control it. It can be driven through the paxx12 Snapmaker U1 Extended Firmware in Panda Breath WebSocket mode, or through DragonBreath, which replaces the Panda Breath firmware and is the recommended path. Both present the heater to Klipper as a standard chamber heater, so `M141` and `M191` commands work from the slicer.

Three limits apply:

- **The chamber must not exceed 60 °C.** The Panda Breath's PTC element is limited to 105 °C internally, but the chamber ceiling is 60 °C. Higher temperatures accelerate wear on the toolheads, belts, bearings and electronics and are outside the machine's design envelope.
- **Motherboard cooling is mandatory before the heater is used.** The U1 motherboard has little thermal headroom. The RK3562 processor begins thermal throttling at 85 °C, and there are documented mid-print failures caused by motherboard overheating. A full-board cooler that covers the RK3562 is required. A 6015 fan that cools only the stepper drivers does not cover the processor and is not sufficient on its own.
- **Thermal damage is unlikely to be covered by warranty.** Elevated chamber temperature accelerates wear on electronics and motors, and damage attributable to it is generally treated as outside normal use. Install the cooling first, not after a failure.

The Top Cover is not airtight. Panel seams, the cable pass-through, the spool openings and the front door all leak warm, styrene-containing air into the room. Seal obvious gaps in the print chamber where you can, but never block the electronics cooling path or the filtration intake.

### Cooling fan

ABS is usually printed with little or no part cooling. Start at 0% for the first three or four layers and 10–20% for the rest of the print. Inside a 50–60 °C chamber the air being blown onto the part is already warm, so a modest fan setting is less harmful than it would be on an open printer. Even so, too much fan increases the thermal gradient and promotes warping and layer splitting.

Raise the fan to 30–50% only for bridges, steep overhangs and very short layer times, and return it to the normal setting afterwards. If the part is large and flat, keep the fan low throughout. The common claim that ABS must always use zero fan is too rigid, but the opposite claim that ABS benefits from aggressive cooling is also wrong.

### Speed, flow and acceleration

ABS is a shear-thinning material and prints well at speed, provided the hotend can melt it fast enough. Reasonable starting points on a 0.4 mm nozzle are 120–200 mm/s for outer walls, 200–300 mm/s for inner walls and infill, and 8,000–12,000 mm/s² acceleration. The U1 is rated for 500 mm/s and 20,000 mm/s², but those are machine limits, not targets for a material that warps.

Volumetric flow is the more useful limit. Standard ABS runs comfortably at 16–24 mm³/s at 255–265 °C. High-flow grades and hotends can reach 24–30 mm³/s. Snapmaker measured 32 mm³/s with Snapmaker ABS at 280 °C, but that is a hotend ceiling under specific conditions, not a setting to copy for every spool. If the extruder clicks, the surface becomes rough, or the walls look under-extruded, reduce the flow before raising the temperature.

### Retraction and pressure advance

Short retraction is usually enough on a direct-drive toolhead. Start at 0.4–0.8 mm and 30–45 mm/s. Longer retraction does not fix ABS stringing and can pull molten polymer into the heat break. Stringing is controlled mainly by dry filament, a slightly lower nozzle temperature, faster travel and a well-tuned pressure advance.

Pressure advance is typically 0.02–0.04 s for ABS, lower than for PETG. Treat that as a starting range and run the OrcaSlicer pressure advance calibration for the actual spool and nozzle.

### Shrinkage compensation

ABS shrinks by about 0.5–0.8% when it cools from printing temperature to room temperature. Large parts, high infill and high chamber temperatures change the effective value, so the number should be measured rather than assumed. A 100 mm test bar is enough: print it, measure it cold, and calculate the difference.

In OrcaSlicer, the filament shrinkage setting is a percentage of the model's original size. A measured shrinkage of 0.6% corresponds to an XY value of about 99.4%. Start at 99.3% and adjust after measuring. The ZeroG calibration model listed below includes 5 mm dowel holes printed at 5.3 mm and an M3 heat-set insert hole, which makes the effect easy to see.

Do not use shrinkage compensation to hide warping. It corrects dimensions, not residual stress.

### Drying and storage

ABS absorbs a moderate amount of moisture, roughly 0.2–0.4% by weight in humid air. It does not hydrolyse as aggressively as PETG or nylon, but moisture still causes popping, bubbles, a rough surface and more stringing.

Dry at 65–70 °C for 4–6 hours in a filament dryer. Bambu Lab and Polymaker specify 80 °C for 8 hours in a blast drying oven, and that is appropriate for high-temperature spools, but many transparent polystyrene spools soften around 70–75 °C. If the spool type is unknown, 65 °C is the safer choice. Cardboard spools should be dried at the lower end and monitored.

Store the spool in a sealed container below 20% relative humidity with silica gel or molecular sieve desiccant. A dry box that feeds the printer directly is better than repeated drying cycles. See [[01 - Drying Filament]], [[02 - Storing Filament]] and [[03 - Combining Storing and Drying - Science and Rational Approach]].

## Multi-material printing on the U1

The U1 has four independent toolheads, two filament feeders (one for toolheads 1–2 and one for toolheads 3–4) and four spool holders. The toolchanger is genuinely useful with ABS because it allows a different support material in a dedicated toolhead without sharing a melt zone.

- **HIPS as support** is the standard pairing. HIPS prints at about 230–250 °C with a bed near 90–100 °C, bonds weakly to ABS, and dissolves in D-limonene. It can also be snapped away as a breakaway interface. It is covered in [[22 - Water-Soluble and Chemical-Soluble Support Filaments (PVA Polyvinyl Alcohol, BVOH Butenediol Vinyl Alcohol Copolymer, HIPS High Impact Polystyrene)|22 - Soluble and breakaway supports]].
- **ABS with TPU** works for grips, hinges and overmoulded features. The two materials bond mechanically rather than chemically, so design interlocks rather than relying on adhesion.
- **ABS with a breakaway support** is simpler than HIPS for large internal cavities where a solvent bath is impractical.

The toolchanger eliminates most cross-contamination because each material has its own melt zone, but it does not eliminate ooze. Each tool still needs a prime and wipe, and a prime tower or wipe sequence is normal. The claim that a toolchanger produces zero purge waste is marketing, not engineering.

PLA is a poor partner for ABS in a heated chamber. PLA softens near 60 °C, and a parked PLA toolhead in a 55–60 °C chamber is at risk of heat creep, filament swelling and jamming. The failure is not instantaneous, but the risk rises with chamber temperature and dwell time. If PLA must be used in the same job, keep the chamber at or below about 45 °C and accept that ABS may warp more. Do not run a 55–60 °C chamber with PLA loaded.

## Post-processing

### Acetone vapour smoothing

ABS can be smoothed with cold acetone vapour. The method is straightforward but must be done with adequate ventilation and no ignition source.

1. Line the walls of a sealable polypropylene container or glass jar with paper towels soaked in pure acetone.
2. Place the part on an elevated metal or foil stand so that it does not touch the liquid or the wet paper.
3. Close the container and leave the part for 20–45 minutes, checking every 10 minutes. A small 5 V fan inside the container improves uniformity but is optional.
4. Remove the part, let it dry in a ventilated space, and leave it untouched for about 24 hours while the surface hardens.

The vapour softens and partly dissolves the styrene-acrylonitrile phase at the surface, allowing it to flow and level. The result is a glossy, injection-moulded look. Over-exposure rounds sharp edges, softens fine details and can cause cracking or a sticky surface, so shorter is better than longer.

Vapour smoothing is cosmetic. It does not repair weak layer bonding, and independent testing has found that it changes surface finish far more than bulk strength. Some tests show a small loss of impact resistance because the surface layer is altered. Do not use smoothing as a substitute for correct chamber temperature and layer adhesion.

Acetone is highly flammable, has a flash point around −20 °C, and its vapour is heavier than air. Work outdoors or in a fume hood, away from flames, sparks, switches and motors. Wear nitrile gloves and eye protection.

### Solvent welding

ABS can be solvent-welded with acetone or a purpose-made ABS solvent cement. Brush a thin layer onto both mating surfaces, press them together, and clamp for a few minutes. The joint reaches most of its strength within an hour and continues to improve for about a day as the solvent diffuses out.

A well-made solvent weld can approach the strength of the surrounding material, but it will not exceed it. The joint is also brittle if too much solvent is used, because the solvent leaves voids as it evaporates. Use the minimum amount that wets both surfaces.

### Sanding and painting

ABS sands well. It is softer than PLA at room temperature and does not gum up abrasives as quickly. Work through 180, 320 and 600 grit, and use wet sanding for the finer grades to keep dust down. Wear an N95 or P2 respirator; the dust is a mechanical irritant and should not be inhaled.

Standard automotive filler primer adheres well to ABS. Solvent-based paints and primers can attack the surface if applied too heavily, so apply thin coats and let them flash off. Acetone smoothing before painting reduces the amount of sanding needed.

### Annealing

Annealing at 80–90 °C for 1–2 hours, followed by slow cooling, relieves some of the residual stress left by printing. It can reduce the tendency of a part to crack around bolts or in contact with solvents. It does not raise the HDT much, because ABS is amorphous and does not crystallise.

Annealing is not risk-free. The part can distort, especially if it is thin or unsupported, and the dimensions can move. Support the part on a flat, heat-resistant surface, ramp the oven slowly, and leave it inside to cool. Do not anneal a part that must fit a tight tolerance unless you have measured the effect on a test piece.

## Safety

### Styrene and ultrafine particles

ABS is one of the higher-emission common filaments. It releases styrene and other volatile organic compounds, plus ultrafine particles, especially when the hotend is hot and the chamber is open. The smell is a useful warning, but the absence of a strong smell does not mean the air is clean.

Bambu Lab's own product page warns that printing ABS can release harmful gases including styrene, which can cause dizziness or nausea, and advises a well-ventilated area or effective filtration. Its safety text also recommends increasing ventilation or pausing printing when people with asthma or other respiratory conditions, pregnant women or children are present.

The minimum setup is:

- **HEPA plus activated carbon filtration.** HEPA captures particles; activated carbon adsorbs some VOCs. Neither is a complete solution. Carbon saturates and must be replaced, and HEPA does not remove styrene.
- **Room ventilation.** Filtration inside the enclosure reduces concentration but does not replace dilution or exhaust. Print in a room with an opening window or an extractor fan, and do not put the printer in a bedroom or a sealed closet.
- **Leak control.** The Top Cover and enclosure panels are not airtight. Gaps around cables, spool openings and door seals allow contaminated air into the room. Seal the print chamber where practical, but never block the electronics cooling path.
- **Keep filtration running after the print.** The chamber and the part continue to release volatiles while they cool.

### Acetone

Acetone is flammable, irritant and volatile. Keep it away from flames, sparks and hot surfaces. Use it outdoors or in a fume hood, wear gloves and eye protection, and store it in a closed container away from children and pets. Do not decant it into an unlabelled bottle.

### Chamber heater and electrical safety

The Panda Breath is a mains-powered module, and a fault could cause overheating or fire. Never run it unattended, keep it clear of flammable material, and use the DragonBreath firmware's safety features rather than bypassing them. Install full-board motherboard cooling before the first heated print, and check the chamber thermistor reading against an independent thermometer before trusting it.

## Five ABS demonstration models

These models are useful because each one exercises a property that matters for ABS. The links point to the model pages, and the descriptions say what the designer actually printed where that information is available.

1. **[Snapmaker U1 Top Hat](https://www.printables.com/model/1488431)** is a raised top hat for the U1 that adds chamber volume and a surface where a chamber heater can be mounted. The designer printed it in ABS and advises against PLA because PLA's heat resistance is only around 55 °C. It is a direct demonstration of why ABS is used for parts that live above a heated chamber.
2. **[Panda Breath Snapmaker U1 Remix](https://www.printables.com/model/1625750)** is a bracket remix for mounting a Panda Breath on the U1. The designer printed both parts in black eSUN ABS+, which makes it a realistic example of an ABS part that sits in a 60 °C chamber and carries a heater.
3. **[V-Core 3.1 ABS Optimised Parts](https://www.printables.com/model/241373)** is a full set of printer parts redesigned for ABS printability, with 63° chamfers, screw holes enlarged by 0.5 mm and overhang geometry adjusted for the material. It shows how shrinkage and hole tolerance are handled in practice rather than in theory.
4. **[ZeroG ABS/ASA Calibration Print](https://www.printables.com/model/369447)** is a small test piece with a 5 mm dowel hole printed at 5.3 mm, an M3 heat-set insert hole, a single wall and an overhang and bridge test. It is a quick way to check shrinkage compensation and hole fit on a new spool.
5. **[Mothers Day Sculpture for Smoothing (ASA/ABS + Acetone)](https://www.printables.com/model/486334)** is a sculpture designed for cold acetone vapour smoothing, with hidden screw holes so it can be suspended above the solvent. The designer demonstrated it in Prusament ASA, and the same geometry and process apply to ABS.

## Where to buy ABS

The table lists eleven brands with live product pages. Stock, colours and formulations change, so a working page is not a promise that every option is available. Prices are omitted because they move too quickly to state honestly; check the listing.

| Brand | Product | Printing notes | Link |
| :--- | :--- | :--- | :--- |
| Bambu Lab | ABS | 240–280 °C, bed 90–100 °C, enclosure required. HDT 87 °C. RFID profile for Bambu printers, not the U1 | [Bambu Lab store](https://us.store.bambulab.com/products/abs-filament) |
| Polymaker | PolyLite ABS | 245–265 °C, bed 90–100 °C, fan off, up to 16 mm³/s. Bulk-polymerised resin with low volatile content; Tg 101 °C | [Polymaker store](https://shop.polymaker.com/products/polylite-abs) |
| eSUN | ABS+ | 230–270 °C, bed 95–110 °C (use 95–100 °C on the U1). Low-warp grade; HDT 73 °C, so not the best choice for high-temperature structural parts | [eSUN](https://www.esun3d.com/abs-pro-product) |
| SUNLU | ABS | 250–270 °C at 50–100 mm/s, or 270–290 °C at 100–200 mm/s. Bed 80–100 °C. HDT 95 °C; shrinkage 0.4–0.8% | [SUNLU](https://www.sunlu.com/products/abs-3d-printing-filament) |
| Overture | ABS | 230–250 °C, bed 90–110 °C (the U1 limit is 100 °C). The listing claims HDT up to 98 °C and ±0.02 mm diameter tolerance | [Overture](https://overture3d.com/products/overture-abs-filament-1-75mm) |
| Snapmaker | ABS (RFID) | U1 profiles built into Snapmaker Orca. Enclosed printing required; the listing claims shape retention up to 100 °C | [Snapmaker store](https://shop.snapmaker.com/products/abs-filament-1kg) |
| Creality | Hyper Series ABS | High-speed formulation for fast printing; check the spool label for the exact temperature window | [Creality store](https://store.creality.com/products/hyper-abs) |
| Hatchbox | ABS | 1.75 mm, ±0.03 mm, 1 kg. A long-standing budget option sold in a wide range of colours | [Amazon](https://www.amazon.com/dp/B00J0H8EWA) |
| Sparta3D | ABS+ | 230–250 °C, bed 75–95 °C. Canadian supplier with a wide colour range; low-warp rather than high-heat | [Sparta3D](https://sparta3d.ca/products/abs-filament) |
| MatterHackers | PRO Series ABS | 235 ± 5 °C, bed 80–110 °C (the U1 limit is 100 °C). Density 1.04 g/cm³; the listing claims service up to 85 °C | [MatterHackers](https://www.matterhackers.com/store/c/pro-series-abs) |
| Prusa | ABS | 255 °C, bed 100 °C (the listing allows 80–110 °C depending on part size; the U1 limit is 100 °C). Made with Styron Magnum resin; the listing was live but out of stock when checked | [Prusa](https://www.prusa3d.com/product/abs-filament) |

Two buying notes are worth keeping in mind. First, "ABS+" is not a guarantee of better heat resistance; it usually means lower warping, and the HDT can be 20 °C lower than standard ABS. Second, ABS-CF and ABS-GF are different materials with different nozzle requirements, so do not treat a generic ABS profile as suitable for them. Prusa's ABS is sold as a Prusa product rather than a Prusament one.

## Videos

1. [My Tech Fun, "What is the best ABS filament? 8 black ABS brands tested"](https://www.youtube.com/watch?v=rfnnr4XH4fI). The tests compare tensile strength, layer adhesion, impact and temperature resistance across eight brands, which is a useful check on how much brand-to-brand variation exists.
2. [CNC Kitchen, "Stronger 3D prints with Vapor Smoothing?"](https://www.youtube.com/watch?v=yJHcoFY4er8). The video measures whether acetone vapour smoothing changes strength, and it is a useful corrective to the idea that a glossy surface means a stronger part.
3. [Made with Layers (Thomas Sanladerer), "3D printers are worse than I thought. Time to do something about it!"](https://www.youtube.com/watch?v=nofn_MHrxrs). The episode covers VOC and ultrafine particle emissions and what filtration and ventilation can realistically achieve.
4. [CNC Kitchen, "Heated Chambers: Game-Changer for 3D Prints?"](https://www.youtube.com/watch?v=WrQiUL0jAzc). The tests show how chamber temperature affects strength, warping and surface finish, which is directly relevant to the 45–60 °C decision on the U1.
5. [My Tech Fun, "Bambulab ABS vs ASA filament, which one is better on mechanical tests?"](https://www.youtube.com/watch?v=4n4GH9NmlZU). A direct comparison of ABS and ASA on the same test geometry, useful when deciding whether the UV resistance of ASA is worth the switch.

## Related notes

- [[00 - Filament Master Index]]
- [[06 - Heating and Temperatures - Nozzle, Bed, and Chamber]]
- [[01 - Drying Filament]]
- [[02 - Storing Filament]]
- [[03 - Combining Storing and Drying - Science and Rational Approach]]
- [[04 - Nozzles and Their Types]]
- [[05 - Layer Height and Nozzle Size]]
- [[07 - Print Speeds and Volumetric Flow]]
- [[08 - Surface Smoothing Slicer Techniques - Ironing and Beyond]]
- [[09 - Post-Processing - Matte, Shiny, and Surface Finishing]]
- [[10 - Common Printing Issues, Debugging, and Physical Limits]]
- [[08 - ASA (Acrylonitrile Styrene Acrylate)|08 - ASA]]
- [[22 - Water-Soluble and Chemical-Soluble Support Filaments (PVA Polyvinyl Alcohol, BVOH Butenediol Vinyl Alcohol Copolymer, HIPS High Impact Polystyrene)|22 - Soluble and breakaway supports]]
- [[12 - Carbon Fiber and Glass Fiber Reinforced Composites (PLA-CF, PETG-CF, ABS-GF, ASA-CF, PA-CF, PAHT-CF, PC-CF)|12 - Composites]]
- [[18 - Conductive and ESD-Safe Current-Carrying Filaments (Conductive Carbon-Black PLA, Conductive TPU, ESD-PETG, ESD-ABS, ESD-PC)|18 - Conductive and ESD-safe filaments]]

## Sources

- [Bambu Lab, ABS filament product page](https://us.store.bambulab.com/products/abs-filament). Used for the 240–280 °C range, bed temperature, HDT of 87 °C, enclosure requirement and the styrene warning.
- [Bambu Lab, Filament guide](https://wiki.bambulab.com/en/general/filament-guide-material-table). Used for the ABS bed range of 90–100 °C, the drying recommendation and the material compatibility table.
- [Polymaker, PolyLite ABS wiki](https://wiki.polymaker.com/polymaker-products/polymaker-filaments/prime-materials/abs-and-asa/polylite-tm-abs). Used for the 245–265 °C nozzle range, 90–100 °C bed, fan setting, volumetric flow and drying.
- [Polymaker, PolyLite ABS technical data sheet](https://polymaker.com/wp-content/tech-docs/PolyLite_ABS_PIS_EN_V1.2.pdf). Used for density, glass transition, Vicat, tensile and impact values.
- [eSUN, ABS+ product page](https://www.esun3d.com/abs-pro-product). Used for the 230–270 °C range, 95–110 °C bed, HDT of 73 °C and mechanical properties.
- [SUNLU, ABS product page](https://www.sunlu.com/products/abs-3d-printing-filament). Used for the 250–290 °C speed-dependent range, 80–100 °C bed, HDT of 95 °C and shrinkage of 0.4–0.8%.
- [Overture, ABS product page](https://overture3d.com/products/overture-abs-filament-1-75mm). Used for the 230–250 °C range, 90–110 °C bed, the HDT claim and the diameter tolerance.
- [Snapmaker, ABS filament (RFID)](https://shop.snapmaker.com/products/abs-filament-1kg). Used for the U1 profile note and the shape-retention claim.
- [Snapmaker, Snapmaker U1 product page](https://www.snapmaker.com/snapmaker-u1). Used for the optional Top Cover, its three-stage filtration and its role with ABS and ASA.
- [Snapmaker U1 Extended Firmware, chamber heater documentation](https://snapmakeru1-extended-firmware.pages.dev/panda_breath.html). Used for the Panda Breath and DragonBreath setup, the 300 W rating, the 60 °C chamber ceiling, the RK3562 throttling at 85 °C, the motherboard cooling requirement and the warranty caution.
- [paxx12, Snapmaker U1 Extended Firmware](https://github.com/paxx12-snapmaker-u1/SnapmakerU1-Extended-Firmware). Used for the firmware's role and its warranty statement.
- [DragonBreath firmware](https://github.com/plastikman/DragonBreath). Used for the description of the Panda Breath replacement firmware.
- [Prusa, ABS filament](https://www.prusa3d.com/product/abs-filament). Used for the 255 °C nozzle setting, 100 °C bed, the 98 °C deformation claim and the Styron Magnum resin note.
- [MatterHackers, PRO Series ABS](https://www.matterhackers.com/store/c/pro-series-abs). Used for the 235 ± 5 °C extrusion range, 80–110 °C bed, density and the 85 °C service claim.
- [Sparta3D, ABS+ filament](https://sparta3d.ca/products/abs-filament). Used for the 230–250 °C range and 75–95 °C bed.
- [Creality, Hyper Series ABS](https://store.creality.com/products/hyper-abs). Used for availability and the high-speed positioning.
- [Amazon, Hatchbox ABS](https://www.amazon.com/dp/B00J0H8EWA). Used for the 1.75 mm diameter, ±0.03 mm tolerance and 1 kg spool.
- [Printables, Snapmaker U1 Top Hat](https://www.printables.com/model/1488431), [Panda Breath Snapmaker U1 Remix](https://www.printables.com/model/1625750), [V-Core 3.1 ABS Optimised Parts](https://www.printables.com/model/241373), [ZeroG ABS/ASA Calibration Print](https://www.printables.com/model/369447) and [Mothers Day Sculpture for Smoothing](https://www.printables.com/model/486334). Used for the demonstration models and the designers' material notes.
- [My Tech Fun, ABS brand comparison](https://www.youtube.com/watch?v=rfnnr4XH4fI), [CNC Kitchen, vapour smoothing](https://www.youtube.com/watch?v=yJHcoFY4er8), [Made with Layers, emissions](https://www.youtube.com/watch?v=nofn_MHrxrs), [CNC Kitchen, heated chambers](https://www.youtube.com/watch?v=WrQiUL0jAzc) and [My Tech Fun, ABS versus ASA](https://www.youtube.com/watch?v=4n4GH9NmlZU). Used for the independent test results described in the Videos section.
