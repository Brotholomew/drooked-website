---
title: "03 - Matte and Aesthetic Filled PLA (Matte, Wood, Marble, Glow-in-the-Dark, Sparkle PLA)"
tags:
  - 3d-printing
  - filaments
  - pla
  - matte-pla
  - wood-pla
  - marble-pla
  - glow-in-the-dark
  - sparkle-pla
  - filled-pla
  - abrasive-filament
  - snapmaker-u1
---

| Nozzle temperature | Chamber temperature | Post-print temperature resistance | What it is good for | Additional notes |
| :--- | :--- | :--- | :--- | :--- |
| 190–230 °C. Most matte and marble spools run well at 200–220 °C. Wood often prefers 190–215 °C, and glow often needs 210–230 °C. | Not required. Print at ambient temperature with the Top Cover off or vented, below about 40 °C. | About 40–50 °C continuous service for a loaded part. The heat deflection temperature (HDT) is 50–58 °C at 0.45 MPa, and the glass transition temperature is 55–62 °C. HDT is a deflection benchmark, not a service limit. | Display busts and statues, architectural models and terrain, wood-look props and tool handles, and glow-in-the-dark decorative parts. | Dry at 45–55 °C for 4–8 hours. Glow, wood and heavy mineral fills are abrasive, so use a hardened steel hotend for sustained printing. Wet sand only, with an N95/P2 respirator and extraction. |

**Variants at a glance**

| Variant | Filler and appearance | Nozzle temperature | Bed temperature | Drying | Abrasion and nozzle guidance |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Matte PLA** | A fine mineral filler such as calcium carbonate, talc or silica, or a matting agent, usually around 10–30% by weight. The surface is flat and velvety and scatters light. | 195–225 °C | 45–60 °C | 50–55 °C for 4–8 h | Low to moderate. The stock 0.4 mm stainless hotend is reasonable for occasional use. Heavily filled white grades wear faster than dark colours. |
| **Wood PLA** | Wood flour, often about 10–30% by weight, with particles from tens of microns up to roughly 100 µm. It smells of toasted wood, darkens at higher temperatures and sands like timber. | 190–220 °C | 45–60 °C | 50–55 °C for 6–8 h | Moderate. Fine-milled wood can pass a 0.4 mm nozzle. Coarse wood is safer at 0.6 mm. Hardened steel is preferred for regular use. |
| **Marble and stone PLA** | Mineral powder, often calcium carbonate or talc, plus contrasting pigment specks. It produces a dense, cool, stone-like surface. | 200–225 °C | 45–60 °C | 50–55 °C for 4–8 h | Moderate. A 0.4 mm nozzle works with fine fill, while 0.6 mm is safer for coarse fill. Hardened steel is preferred for regular use. |
| **Glow-in-the-dark PLA** | Strontium aluminate phosphor doped with europium and dysprosium, often 10–30% by weight, with particles roughly 10–50 µm across. Older or cheaper products may use zinc sulfide. | 210–230 °C | 45–60 °C | 50–55 °C for 4–8 h | High. Hardened steel is strongly recommended. A 0.6 mm nozzle reduces both clog risk and wear. |
| **Sparkle, galaxy and glitter PLA** | Mica, metallic-coated flakes or glitter, usually only a few percent by weight. The flakes reflect light from many angles and hide layer lines. | 200–225 °C | 45–60 °C | 50–55 °C for 4–8 h | Low to moderate. The stock 0.4 mm stainless hotend is generally acceptable. Use hardened steel if you print large amounts. |

> [!abstract] One family, five different materials
> These filaments all use a polylactic acid (PLA) matrix, but they are not interchangeable. Matte PLA is mainly about surface appearance. Wood PLA is an organic composite that absorbs water and chars if it is overheated. Marble PLA is a dense mineral composite. Glow PLA contains a hard phosphor ceramic that wears nozzles. Sparkle PLA contains reflective flakes and behaves much more like ordinary PLA. The shared rules are simple: dry the spool, control the temperature, use a large enough nozzle, and treat sanding dust as a health hazard.

## What the family shares

PLA is an aliphatic polyester that can crystallise, although most printed parts are largely amorphous. Its glass transition temperature is roughly 55–62 °C. Every filament in this family keeps that limitation. None of them is a high-temperature material, and none should be used for a part that carries a load in a hot car, near a heater or outdoors in direct summer sun.

The fillers change three things. First, they alter the surface. Suspended particles create micro-roughness, so the extruded skin scatters light instead of reflecting it. That is why matte, wood, marble and some glow prints hide layer lines so well. Second, they change the melt. Particles raise viscosity at low shear, so the polymer sags less on overhangs, but the same particles also increase clog risk and slow the maximum volumetric flow. Third, they reduce strength. Fillers act as stress concentrators, and the bond between layers is usually weaker than in unfilled PLA.

The fillers are not equally abrasive. In rough order, from most to least aggressive in typical commercial products, glow is first, coarse wood and heavy mineral marble come next, matte is usually mild unless it is a heavily filled white grade, and sparkle is usually the mildest. That ranking is a guide, not a guarantee. Particle size, particle shape, filler load and nozzle material all matter, and two brands of the same variant can behave very differently.

A second distinction matters just as much: real wood versus faux wood. Some filaments sold as "wood" contain actual wood flour. Others, such as foaming wood-style PLA, use a foaming agent and colour to imitate wood without any wood fibre. Faux wood products are much less abrasive and much less hygroscopic, but they do not sand, stain or smell like real timber. Read the product page rather than assuming.

## Mechanical and thermal properties

The table below gives typical ranges compiled from manufacturer datasheets and published tests. Formulations vary widely, so use these values to compare variants, not as design allowables.

| Property | Matte PLA | Wood PLA | Marble PLA | Glow PLA | Sparkle PLA |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Density | 1.25–1.35 g/cm³ | 1.10–1.25 g/cm³ | 1.25–1.40 g/cm³ | 1.25–1.40 g/cm³ | 1.24–1.32 g/cm³ |
| Glass transition temperature | 55–62 °C | 55–60 °C | 55–60 °C | 55–62 °C | 58–62 °C |
| HDT at 0.45 MPa | 52–58 °C | 50–56 °C | 50–58 °C | 52–58 °C | 54–58 °C |
| Tensile strength, XY | 20–35 MPa | 18–32 MPa | 20–32 MPa | 25–40 MPa | 35–50 MPa |
| Tensile strength, Z | 15–25 MPa | 10–20 MPa | 12–22 MPa | 15–25 MPa | 20–35 MPa |
| Young's modulus | 1,800–2,400 MPa | 1,500–2,400 MPa | 1,800–2,600 MPa | 2,200–3,000 MPa | 2,400–3,000 MPa |
| Elongation at break | 5–15% | 2–5% | 2–6% | 2–5% | 3–8% |
| Nozzle abrasion | Low to moderate | Moderate | Moderate | High | Low to moderate |

For context, Bambu Lab publishes 30 ± 5 MPa tensile strength in XY and 22 ± 4 MPa in Z for PLA Matte, with an HDT of 58 °C at 0.45 MPa and a glass transition temperature of 61 °C. Polymaker publishes about 20.9 MPa tensile strength for PolyTerra PLA. Both are below the 45–60 MPa typical of unfilled PLA, which is the honest trade-off for the finish. The fillers buy appearance, not strength or stiffness; most of these blends are weaker and less stiff than unfilled PLA.

The service temperature deserves emphasis. A part can survive a short excursion near its HDT and still creep or sag under a sustained load at a lower temperature. For anything structural, keep the part below about 40–50 °C in continuous service. That is well below the glass transition temperature and far below the HDT.

## Drying and storage

Wood PLA is the most hygroscopic material in this family. The wood flour is hydrophilic, and a wet spool will ooze, string, pop and produce a rough, foamy surface. Dry wood PLA before every print at 50–55 °C for 6–8 hours. Bambu Lab specifies 55 °C for 8 hours for PLA Wood and states plainly that it must be dried thoroughly before use.

Matte, marble, glow and sparkle PLA are less demanding, but they still benefit from drying. Use 45–55 °C for 4–8 hours. Bambu Lab specifies 55 °C for 8 hours for PLA Matte. Polymaker specifies 55 °C for 6 hours for PolyTerra. Overture specifies 50 °C for 7 hours for its PLA. Follow the limit printed on your spool rather than a generic rule.

Some manufacturers also publish hotter heated-bed drying routines, with the spool covered and flipped every few hours. Those routines are harder to control than a dedicated dryer. For the U1 and a SnapDryer or any other filament dryer, 45–55 °C is the safe default. Never exceed the spool's stated limit. PLA softens near 60 °C, and a tightly wound spool can deform or weld its strands together.

Store the spools below about 20% relative humidity. Wood and glow PLA should be fed directly from a sealed drybox during long prints, because they reabsorb moisture quickly. See [[01 - Drying Filament]], [[02 - Storing Filament]] and [[03 - Combining Storing and Drying - Science and Rational Approach]] for the full workflow.

## Nozzles, orifice size and wear

The Snapmaker U1 uses four integrated 0.4 mm stainless steel hotends. The nozzle is not separately replaceable; the heat sink, heat break, heater block and nozzle are one unit. Snapmaker also sells official hardened steel hotends in 0.2, 0.4, 0.6 and 0.8 mm, but each diameter is sold as a four-pack, and Snapmaker states that different diameters cannot be used in the same print.

For matte and sparkle PLA, the stock 0.4 mm stainless hotend is a reasonable choice. Wear is slow, and most users will not notice it for a long time. Heavily filled white matte grades are more abrasive than dark colours because titanium dioxide and other white pigments can be hard.

For wood and marble PLA, the stock hotend can print an occasional spool, but the filler will slowly open the orifice and round the tip. For regular use, fit the official hardened steel hotend. A 0.6 mm hardened steel hotend handles coarse wood and marble fills better because the larger orifice passes particles more easily and reduces pressure at the same flow.

For glow PLA, use hardened steel. Brass and stainless steel both wear. The wear rate is highly variable, and the old claim that glow filament destroys a brass nozzle in a single spool is not supported. CNC Kitchen measured almost 0.5 mm of tip loss after 100 g of colorFabb glowFill in an aggressive test, 0.18 mm after 100 g of Tronxy Rainbow, and almost no measurable wear after 330 g of dasFilament glow PLA. Filler load, particle size and particle shape matter more than the label on the spool. Hardened steel is not immune either; it simply wears much more slowly.

Do not use a 0.2 mm nozzle with any filled variant. The particles range from tens of microns to roughly 100 µm, and agglomerates can bridge across a 200 µm orifice, so clogging is a real risk rather than a certainty. Bambu Lab explicitly lists glow, marble, sparkle and galaxy filaments as incompatible with its 0.2 mm stainless nozzle, and the same logic applies to the U1. Use 0.4 mm as the minimum and 0.6 mm for coarse wood, marble or glow fills.

Many hardened-steel profiles add 5–10 °C to the nozzle temperature because hardened steel conducts heat differently from brass or stainless steel. Treat that as a starting adjustment, not a rule. Verify it with a temperature tower on the actual spool.

## Temperature, cooling and overhangs

The nozzle temperature should normally be 190–230 °C. Matte and marble are comfortable at 200–220 °C. Wood is usually best at 190–215 °C; higher temperatures darken the print but also increase the risk of charring the wood flour. Glow often needs 210–230 °C. Sparkle behaves like ordinary PLA at 200–220 °C.

The bed temperature should be 45–60 °C on textured PEI. Bambu Lab lists 35–45 °C for PLA Matte, while Polymaker lists 25–60 °C for PolyTerra. Start at 50 °C and adjust for the sheet and the room. Clean the plate regularly, because mineral matte filaments can leave a faint chalky film.

The chamber should stay at ambient temperature, below about 40 °C. PLA does not need a heated chamber, and a hot chamber softens the filament in the extruder and increases heat creep. Leave the Top Cover off or vented. Do not run the BIQU Panda Breath for this family. If you own a Panda Breath for engineering materials, remember that stock U1 firmware does not control it, that it requires community firmware such as paxx12 Snapmaker U1 Extended Firmware or DragonBreath, and that motherboard cooling is mandatory before any chamber heater is used. None of that is needed for PLA.

Part cooling should run at 100% after the first layer. With good cooling, these filaments hold 45–55° overhangs reliably. A 60° overhang is possible with slower outer walls and strong cooling, but 65° is optimistic and should not be presented as a normal capability. The filler increases melt viscosity, which helps, but it does not turn PLA into a high-overhang material.

## Flow, speed and retraction

Start conservatively. Wood PLA is happiest at 8–12 mm³/s, glow and marble at 10–14 mm³/s, and matte and sparkle at 12–18 mm³/s. The U1's published maximum of 32 mm³/s was measured by Snapmaker with Snapmaker ABS at 280 °C. It is not a universal limit, and it is certainly not the limit for a filled PLA at 210 °C.

Outer walls should run at 60–120 mm/s. Inner walls and infill can run at 120–200 mm/s with matte, marble or sparkle. Wood and glow should stay around 60–100 mm/s so that the filler does not sit hot in the nozzle and so that wear and clog risk stay manageable.

Retraction should start at 0.6–1.0 mm at 30–40 mm/s. Wood benefits from 0.8–1.2 mm with wipe on retract enabled. Pressure advance usually falls around 0.02–0.04 for matte, marble and sparkle, and 0.03–0.05 for wood. Calibrate it per spool; the compressible melt around wood fibres changes the value.

## Slicer settings and surface techniques

Light ironing can work on matte PLA at low flow, but it may gloss the surface, especially on dark colours. Test it on a scrap. Do not iron wood, marble, glow or sparkle PLA. The nozzle drags solid particles across the top surface, which scratches the finish and can clog the orifice.

Fuzzy skin is a good match for marble and matte PLA. A point distance of about 0.2–0.3 mm and a thickness of about 0.1–0.2 mm produce a convincing cast-stone or concrete texture. Keep the settings modest, because aggressive fuzzy skin collects dust and makes sanding harder.

A scarf seam works well on matte and marble PLA and can make the Z seam almost invisible. It is less useful on wood, where the seam often blends into the grain anyway.

Wood grain can be varied by changing the nozzle temperature by 10–20 °C between layers, which darkens and lightens the extruded plastic. Stay below the char threshold. A temperature range of roughly 190–215 °C gives useful contrast without turning the surface brown and brittle.

## Finishing, sanding and respiratory safety

> [!warning] Sanding dust is the main health hazard in this family
> Wood, mineral and phosphor fillers all produce fine dust when sanded. Wood dust is a known respiratory carcinogen (IARC Group 1), and mineral and phosphor dust are lung irritants. Never dry sand these materials. Wear an N95/P2 respirator, eye protection and nitrile gloves, and work with local extraction or outdoors. Clean up with a damp cloth, not compressed air.

Wet sanding is the default. Use silicon carbide wet/dry paper with water and a drop of dish soap. Keep the paper wet and wipe the slurry away with a damp cloth. For wood, start at 220 grit and finish at 400 grit. For matte, marble and glow, 400–800 grit is usually enough. Wet sanding keeps the dust out of the air, prevents the paper from loading, and gives a more even finish.

Wood PLA can be stained like real timber. Sand with the grain, apply a gel stain or a water-based wood stain, leave it for a few minutes, and wipe off the excess with a lint-free cloth. Let it dry for 24 hours, then seal it with a matte or satin polyurethane. Test the stain on a hidden area first, because the PLA matrix absorbs differently from real wood.

Stress whitening on matte PLA can sometimes be reduced with a brief pass from a heat gun on a low setting. The colour may return, but the surface can also become glossy. Test on a scrap before touching a visible face.

Glow parts should be charged with bright light or a 365–395 nm ultraviolet torch. Brightness increases with wall thickness up to about 2 mm, then levels off, so four or five perimeters are usually enough for a small part. Green phosphors are brighter and longer-lasting than blue, and blue is brighter than red.

Filled PLAs are not recommended for food contact. The particles create sites for bacteria, the surface is porous at the layer level, and most of these products are not certified for food use. Do not use them for cutlery, drinking vessels or repeated mouth contact.

## Common problems

**Wood or marble clogs.** The usual cause is a particle bridge at the orifice or a plug of charred wood. Dry the spool, switch to a 0.6 mm nozzle for coarse fills, and avoid leaving the hotend idle at printing temperature. A cold pull can remove a soft plug, but follow the procedure for the actual material rather than a fixed temperature.

**Wood charring and black specks.** Wood flour scorches above roughly 220–225 °C, especially at low flow. Lower the nozzle temperature, keep the print moving, and purge the hotend before starting a long print.

**Stringing and oozing.** Moisture is the most common cause, particularly with wood. Dry the spool, lower the nozzle temperature by 5–10 °C, increase retraction slightly, and enable wipe on retract.

**Weak layer adhesion.** Raise the nozzle temperature by 5–10 °C, reduce part cooling for the first few layers, and slow the outer wall. Filled PLA has less layer strength than unfilled PLA, so avoid designing thin, highly loaded features in the Z direction.

**Nozzle wear.** A worn nozzle prints wider lines, over-extrudes and strings more. Inspect the tip with a magnifier. On the U1, the whole hotend must be replaced, so keep a spare hardened steel unit for abrasive work.

**Weak glow.** Increase the wall count, charge the part under bright light, and choose a green phosphor if maximum brightness matters. Do not expect a thin single-wall print to glow strongly.

## Using these filaments on the Snapmaker U1

The U1 is a four-toolhead CoreXY machine with a 270 × 270 × 270 mm build volume, a 300 °C maximum nozzle temperature, a 100 °C maximum bed temperature and no stock chamber heater. That is more than enough for every material in this family.

The stock hotends are four 0.4 mm stainless steel integrated units. They are not serviceable by swapping only the nozzle. The official hardened steel hotends are available in 0.2, 0.4, 0.6 and 0.8 mm, sold as four-packs of one diameter. Different diameters cannot be used in the same print according to Snapmaker. If you want a 0.6 mm hotend for wood or glow in a multi-material print, all four toolheads need 0.6 mm hotends, or you need to dedicate a separate machine configuration.

A sensible setup is to fit a hardened steel 0.4 mm hotend on the toolhead that handles glow and heavy mineral work, and to leave the other toolheads on stock stainless steel for matte and sparkle. Because hardened steel hotends are sold in four-packs, you will have spares. Wood and marble can run on either material, but hardened steel is the better long-term choice.

The filament path has two feeders, one on the left for toolheads 1–2 and one on the right for toolheads 3–4, plus four spool holders. RFID works with Snapmaker filament; third-party spools run without RFID and need manual profile selection.

Multi-material work is straightforward because each toolhead has its own melt zone. Matte, wood, marble and glow can share a print without cross-contaminating each other. A prime and wipe tower is still required, and the usual ooze caveats apply. PLA with PETG as a support interface also works on the U1, but the interface needs a zero-gap setting and a wipe tower; it is not a zero-ooze process.

Leave the Top Cover off or vented and do not run the Panda Breath. The optional Top Cover is useful for filtration and for passive chamber heat up to about 50 °C with engineering materials, but PLA does not need either.

## Verified demo models

1. **[Printables, "Marble Bust of the Emperor Antoninus Pius"](https://www.printables.com/model/72008-marble-bust-of-the-emperor-antoninus-pius)** (model 72008). This is a British Museum scan with fine surface detail. It is a good test of how marble PLA breaks up specular highlights and reads as stone rather than plastic. The title was verified through the Printables GraphQL API.
2. **[MakerWorld, "Wooden Vase Pla Wood"](https://makerworld.com/en/models/1245107-wooden-vase-pla-wood)** by Canale (model 1245107). The designer supplies 0.4 mm and 0.6 mm profiles and notes that the larger nozzle reduces clogging from the wood fibre. It is a direct practical test of the wood rules in this note. The title was verified through the MakerWorld design API.
3. **[MakerWorld, "Glow in the dark Moon - Lithopane Effect"](https://makerworld.com/en/models/812784-glow-in-the-dark-moon-lithopane-effect)** by Tinker.fun (model 812784). A lithophane moon designed for glow filament. It shows both the afterglow and the way brightness depends on wall thickness. The title was verified through the MakerWorld design API.
4. **[Printables, "Matte Style Vase – Bold Modern Statement"](https://www.printables.com/model/1278470-matte-style-vase-bold-modern-statement)** (model 1278470). A large, simple surface that makes matte finish, layer-line suppression and seam visibility easy to judge. The title was verified through the Printables GraphQL API.
5. **[Printables, "Diamond Patterned Sparkly Vase"](https://www.printables.com/model/709819-diamond-patterned-sparkly-vase)** (model 709819). The faceted wall reflects light from many angles, which is exactly how sparkle and galaxy filaments should be evaluated. The title was verified through the Printables GraphQL API.

## Videos

All six videos were checked against YouTube's oEmbed endpoint in October 2026.

1. **[My Tech Fun: Testing all BambuLab PLA filament types](https://www.youtube.com/watch?v=BbbquNH5NFA)**. A side-by-side mechanical and visual comparison that includes PLA Matte, Marble, Sparkle and Glow. It is the most directly relevant single video for this family.
2. **[CNC Kitchen: How much abrasive filaments damage your nozzle](https://www.youtube.com/watch?v=uvlMeTnjriQ)**. A controlled look at nozzle wear from glow and carbon-fibre filament, including the important finding that wear varies enormously between brands.
3. **[CNC Kitchen: Glow in the Dark Filament for 3D Printing](https://www.youtube.com/watch?v=ODQoQd-0ky8)**. Tests ten glow filaments for brightness, afterglow duration and nozzle wear. It is the source of the 100 g wear figures used above.
4. **[MakerBuildIt: Your Props Look Cheap Because of This, Matte PLA Changes Everything](https://www.youtube.com/watch?v=tF2FkJyw68o)**. A clear visual explanation of why matte filament reads as a better prop finish than glossy PLA.
5. **[Think Making: 3D Printing WOOD, Hatchbox Wood Filament Review](https://www.youtube.com/watch?v=7kqkJun6VTc)**. A practical review of a real wood-fibre filament, including printing, texture and post-processing.
6. **[Andrew Sink: Staining 3D Printed Wood Filament using Polyurethane](https://www.youtube.com/watch?v=d8F21akXFCc)**. A short demonstration of the staining and sealing process described in the finishing section.

## Products

Prices change constantly and vary by region and colour. The tiers below are approximate October 2026 labels, not live quotes, and every product link was checked in October 2026.

| Product | Variant | Typical nozzle and bed | Notes | Link |
| :--- | :--- | :--- | :--- | :--- |
| **Polymaker Matte PLA** | Matte | 190–230 °C, 25–60 °C | Mid tier. A flat, low-glare finish. PolyTerra is Polymaker's related matte family; follow the drying limit on the spool, typically 55 °C for about 6 h. | [Amazon](https://www.amazon.com/dp/B08QMBPZBF) |
| **Bambu Lab PLA Matte** | Matte | 190–230 °C, 35–45 °C | Mid tier. A wide colour range and a clean matte surface. The TDS specifies 55 °C for 8 h drying and a 55° maximum overhang angle. | [Bambu Lab store](https://us.store.bambulab.com/products/pla-matte) |
| **Overture Matte PLA** | Matte | 190–220 °C, 50–60 °C | Budget tier. Widely available and easy to print. Dry at about 50 °C for 7 h. | [Amazon](https://www.amazon.com/dp/B089S2QDHD) |
| **Elegoo Matte PLA** | Matte | 190–220 °C, 50–60 °C | Budget tier. Good value for large architectural models and terrain. | [Amazon](https://www.amazon.com/dp/B0CFV3WF7P) |
| **Snapmaker Matte PLA (RFID)** | Matte | 190–220 °C, 50–60 °C | Mid tier. The RFID spool is recognised by the U1, which simplifies profile selection. | [Amazon](https://www.amazon.com/dp/B0F38DXPG8) |
| **Hatchbox Wood PLA** | Wood | 190–210 °C, 50–60 °C | Mid tier. One of the best-known real wood-fibre filaments. It sands and stains well but strings if it is wet. | [Amazon](https://www.amazon.com/dp/B01092XXD4) |
| **Amolen Wood PLA, Dark Walnut** | Wood | 190–215 °C, 50–60 °C | Mid tier. A dark walnut colour with visible fibre. Dry it thoroughly before use. | [Amazon](https://www.amazon.com/dp/B088BRY1PN) |
| **colorFabb woodFill** | Wood | 190–220 °C, 50–60 °C | Premium tier. A Dutch wood-fibre composite with a strong timber feel. It is a coarse fill and benefits from a 0.6 mm nozzle. | [colorFabb](https://colorfabb.com/woodfill) |
| **Overture Rock PLA** | Marble | 200–220 °C, 50–60 °C | Budget tier. A rock-white marble finish with a natural stone look. | [Amazon](https://www.amazon.com/dp/B08732CWTP) |
| **Bambu Lab PLA Marble** | Marble | 200–230 °C, 35–45 °C | Mid tier. A clean marble effect with a consistent speckled appearance. | [Bambu Lab store](https://us.store.bambulab.com/products/pla-marble) |
| **Amolen Glow PLA, Firefly Blue** | Glow | 210–230 °C, 50–60 °C | Mid tier. A blue glow that charges well under ultraviolet light. Use a hardened steel nozzle. | [Amazon](https://www.amazon.com/dp/B0D879NZ93) |
| **SUNLU Glow PLA, Glow Green** | Glow | 210–230 °C, 50–60 °C | Budget tier. A green glow that charges under bright light. The same nozzle precautions apply. | [Amazon](https://www.amazon.com/dp/B0C4LT1ZF4) |
| **Prusament PLA Galaxy Black** | Sparkle | 200–220 °C, 50–60 °C | Premium tier. A fine glitter finish that hides layer lines and surface defects with low abrasion. | [Prusa e-shop](https://www.prusa3d.com/product/prusament-pla-prusa-galaxy-black-1kg/) |

## Related notes

- [[00 - Filament Master Index]]
- [[01 - PLA (Polylactic Acid - Standard, High-Speed, and Tough PLA+)]]
- [[02 - Silk PLA (Elastomer-Modified High-Gloss Polylactic Acid Blend)]]
- [[04 - Foaming Lightweight PLA (LW-PLA - Active and Passive Expandable Polylactic Acid)]]
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
- [[21 - Ceramic, Stone, and Clay-Filled Filaments (Silica Ceramic PLA, Terracotta, Porcelain, and Sinterable Alumina-Zirconia)]]
- [[12 - Carbon Fiber and Glass Fiber Reinforced Composites (PLA-CF, PETG-CF, ABS-GF, ASA-CF, PA-CF, PAHT-CF, PC-CF)]]

## Sources

- [Bambu Lab PLA Matte technical data sheet](https://store.bblcdn.com/eff154c269404bf6a7baf48385a16e5a.pdf). Nozzle and bed temperatures, drying schedule, HDT, glass transition and tensile data.
- [Bambu Lab PLA usage guide](https://wiki.bambulab.com/en/filament/pla). Material compatibility, wood drying requirements and the 0.2 mm nozzle restriction.
- [Bambu Lab 0.2 mm nozzle FAQ](https://wiki.bambulab.com/en/knowledge-sharing/02-mm-nozzle-FAQ). Why glow and other filled filaments are unsuitable for a 0.2 mm stainless nozzle.
- [Polymaker PolyTerra PLA technical data sheet](https://polymaker.com/wp-content/uploads/TDS_PolyTerra_PLA_V6.0_2026-06-08_EN.pdf). Printing temperatures, drying schedule, HDT and tensile strength.
- [CNC Kitchen: Which glow in the dark filament is the best?](https://www.cnckitchen.com/blog/which-glow-in-the-dark-filament-is-the-best). Glow brightness, afterglow duration, thickness effects and measured nozzle wear.
- [CNC Kitchen: How much abrasive filaments damage your nozzle](https://www.cnckitchen.com/blog/how-much-abrasive-filaments-damage-your-nozzle). Wear mechanisms and the variability between glow filaments.
- [Snapmaker U1 product page](https://www.snapmaker.com/snapmaker-u1). Machine specifications and official hardware information.
