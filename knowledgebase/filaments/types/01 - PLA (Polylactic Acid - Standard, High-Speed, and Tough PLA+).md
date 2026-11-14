---
title: "01 - PLA (Polylactic Acid - Standard, High-Speed, and Tough PLA+)"
tags:
  - 3d-printing
  - filaments
  - pla
  - polylactic-acid
  - pla-plus
  - high-speed-pla
  - snapmaker-u1
---

| Nozzle temperature | Chamber temperature | Post-print temperature resistance | What it is good for | Additional notes |
| --- | --- | --- | --- | --- |
| 200–220 °C for standard PLA, 210–230 °C for high-speed PLA, and 210–235 °C for PLA+. Start near 215 °C on the U1's stainless hotend and tune from there. | Ambient. Keep the chamber below about 35 °C, leave the top cover open or vented, and keep any chamber heater off. | Unannealed HDT is about 55–60 °C at 0.45 MPa. Continuous service should stay below about 50 °C. Annealing can raise HDT to roughly 95–135 °C, depending on crystallinity and geometry, but HDT is not a continuous service limit or a load rating. | Dimensionally accurate prototypes, indoor jigs and fixtures, Gridfinity and workshop organisers, board-game inserts, display models, and multi-part cosplay armour that will not see heat or sustained load. | Dry at 45–50 °C for 4–6 hours and never above 55 °C. The stock stainless nozzle is fine; hardened steel is only needed for abrasive fills. PLA is brittle and creeps, and it is not suitable for hot cars, dishwashers, or sustained spring loads. |

> **Overview:** Polylactic acid is the easiest material to print well on the Snapmaker U1 and the best starting point for dimensional accuracy, fine detail, and low-cost functional parts. Standard PLA is stiff and brittle, high-speed PLA is formulated for higher flow, and PLA+ trades some stiffness for impact resistance. All three share the same fundamental weakness: a glass transition near 60 °C, slow creep under load, and poor performance in a hot chamber or a hot car. PLA should be printed with the chamber at ambient temperature, not with the U1's top cover closed and heated.

## 1. What PLA is

PLA is a linear aliphatic polyester made by polymerising lactide, a cyclic diester produced from fermented plant sugars. Lactic acid is chiral, so the polymer can contain different proportions of L-lactic acid and D-lactic acid. The ratio controls how readily the polymer crystallises.

Poly-L-lactide, usually called PLLA, is rich in the L isomer and can become semi-crystalline when annealed. Poly-DL-lactide, PDLLA, contains enough D isomer to stay essentially amorphous. Most printing filaments sit between these extremes. They contain a few percent D-lactide, which suppresses rapid crystallisation during cooling and makes the filament easier to print without severe warping. The same D content limits how much heat resistance can be developed later by annealing.

The polymer chain is sensitive to water. Moisture absorbed during storage can hydrolyse the ester bonds, especially in the melt zone. That reduces molecular weight and produces the familiar symptoms of wet PLA: popping, stringing, rough surfaces, weak layers, and filament that snaps easily.

PLA is often described as compostable. That is only true under controlled industrial composting conditions. It does not disappear quickly in a home compost heap, and it should not be treated as litter.

### Standard PLA, high-speed PLA, and PLA+

- **Standard PLA** is the most basic and most common grade. It is stiff, has low odour, prints with sharp detail, and is inexpensive. It is also brittle under impact and creeps under sustained load.
- **High-speed PLA** is formulated for higher melt flow and faster setting. It can support higher volumetric flow than a conventional grade, but the achievable speed still depends on the hotend, nozzle size, layer height, and part cooling. The U1's 500 mm/s maximum toolhead speed is not a guarantee that a particular PLA will print well at that speed.
- **PLA+ or tough PLA** contains impact modifiers and sometimes plasticisers. These additives make the material more ductile and increase notched impact strength, usually by about 2–3× compared with standard PLA. Manufacturers sometimes quote 2–5×, but 5× is a marketing ceiling rather than a reliable design value. PLA+ is generally slightly less stiff and can be slightly weaker in tensile strength than standard PLA. It is not a high-temperature PLA.

A separate family, often sold as HTPLA or annealable PLA, is nucleated to crystallise more readily during annealing. It can reach a higher HDT than ordinary PLA, but it still requires a post-print heat treatment and careful dimensional control. Do not confuse it with ordinary PLA+.

## 2. Mechanical and thermal properties

| Property | Standard PLA | High-speed PLA | PLA+ | Notes |
| --- | --- | --- | --- | --- |
| Density | 1.23–1.25 g/cm³ | 1.23–1.25 g/cm³ | 1.22–1.25 g/cm³ | Pigments and fillers change this slightly. |
| Glass transition temperature | 55–62 °C | 55–60 °C | 55–62 °C | Measured by differential scanning calorimetry, or DSC. |
| Melting temperature | 150–170 °C | 150–165 °C | 150–175 °C | The crystalline fraction melts over a range, not at one sharp point. |
| HDT at 0.45 MPa, unannealed | 50–60 °C | 50–58 °C | 50–60 °C | Heat deflection temperature is measured under a specified load; it is not a service-temperature rating. |
| Tensile strength in the XY plane | 45–65 MPa | 40–60 MPa | 35–55 MPa | Nozzle temperature, layer adhesion, and pigment all affect the result. |
| Tensile modulus | 2.8–3.6 GPa | 2.6–3.3 GPa | 2.2–3.0 GPa | PLA has the highest stiffness among common unfilled printing filaments. |
| Elongation at break | 2–6% | 3–8% | 8–30% | PLA+ is visibly more ductile, but it is not an engineering elastomer. |
| Notched impact strength | Low, often about 2–5 kJ/m² | Low to moderate | About 2–3× standard PLA | Test methods and specimen orientation vary widely. |

These are typical ranges from common manufacturer data sheets and independent tests, not guaranteed values for every spool. The important design facts are more stable than the individual numbers. PLA is stiff, strong enough for light structural work, and poor at absorbing impact. It loses stiffness as it approaches its glass transition. It also creeps slowly at room temperature when a load is applied for weeks or months.

PLA is sometimes described as having the highest tensile strength of all common unweighted filaments, but that claim is false. PA6, PA12, and PC can all exceed PLA in tensile strength, and they are substantially tougher. PLA's genuine distinction is its high tensile modulus, or stiffness, combined with easy printing. That stiffness is useful in jigs, fixtures, and decorative parts, but it also makes thin latches and snap fits more likely to crack.

PLA's coefficient of thermal expansion is relatively low for a polymer, around 50–70 µm/(m·K). That helps with dimensional stability, but it does not make large parts warp-free. Long, thin parts and parts with poor bed adhesion can still lift at the corners.

## 3. Printing PLA on the Snapmaker U1

### Temperature, bed, and chamber

- Set the nozzle to 200–220 °C for standard PLA, 210–230 °C for high-speed PLA, and 210–235 °C for PLA+. A starting point of 215 °C is reasonable for the stock 0.4 mm stainless hotend.
- Set the bed to 55–60 °C on smooth or textured PEI. PLA usually needs no glue stick. If the same plate is also used for PETG, clean it thoroughly and use a release agent for the PETG, because PETG can bond to bare PEI.
- Keep the chamber at ambient temperature, ideally 20–30 °C. Open or vent the top cover and leave the chamber heater off. A chamber above about 35–40 °C increases the risk of heat creep, filament softening in the extruder, and jams.
- The U1 has a maximum nozzle temperature of 300 °C and a maximum bed temperature of 100 °C. PLA does not need either limit. The optional top cover can provide passive chamber heating up to about 50 °C, but that is for other materials, not for PLA.
- The BIQU Panda Breath is a chamber heater with a maximum chamber temperature of 60 °C. It is not controlled by stock U1 firmware; using it requires community firmware, and full-board motherboard cooling is mandatory before any chamber heater is used. It should be off for PLA.

### Cooling, overhangs, and bridges

- Run the toolhead part-cooling fan at 100% from layer 2 or layer 3 onward. Keep it off for the first layer so that the first layer can bond to the bed.
- A well-tuned 0.4 mm PLA profile can usually print 55–60° overhangs cleanly. Angles of 65–70° are achievable on small features with excellent cooling, but they are not a reliable target for a whole model. Design or support anything steeper.
- Bridges of 30–50 mm are realistic with full cooling and a moderate bridge speed. Bridges longer than about 50 mm may sag, especially on the underside, and should be tested or supported. The old claim of 50–80 mm bridges is too optimistic as a general rule.
- Keep the chamber air moving if the room is warm. Do not try to solve overhang problems by closing the enclosure; trapped heat makes PLA softer and worsens drooping.

### Flow, speed, and acceleration

- Treat 12–20 mm³/s as a realistic starting ceiling for standard PLA, 14–22 mm³/s for PLA+, and 20–28 mm³/s for high-speed PLA on a 0.4 mm nozzle. These are starting points for a flow test, not universal limits.
- Snapmaker quotes a maximum hotend flow of 32 mm³/s when measured with Snapmaker ABS at 280 °C. That figure does not transfer directly to PLA, small nozzles, lower temperatures, or abrasive-filled grades. A 0.4 mm PLA print will usually reach its practical limit well below 32 mm³/s.
- With a 0.4 mm nozzle and 0.2 mm layers, outer walls often run at 80–150 mm/s, inner walls at 150–250 mm/s, and sparse infill at 200–300 mm/s. Reduce the outer-wall speed if surface finish or ringing suffers.
- Acceleration of 5,000–10,000 mm/s² is a sensible starting range. The U1 can accelerate faster, but the part, the hotend, and the cooling system may not keep up. An outer-wall acceleration of 3,000–5,000 mm/s² usually gives cleaner surfaces.
- Start retraction at about 0.5–0.8 mm at 30–45 mm/s for the U1's direct-drive toolheads. Use a Z-hop of 0.2–0.4 mm if the nozzle tends to graze the part.
- Start pressure advance around 0.02–0.04 and calibrate it for the specific filament. High-speed PLA often needs a slightly lower value than a soft or heavily modified PLA+.

### Nozzle and layer geometry

- The stock 0.4 mm stainless steel hotend is a good all-round choice. It is an integrated assembly, so the nozzle alone is not a user-serviceable replacement.
- A 0.2 mm nozzle is useful for miniatures and fine text, with layers around 0.06–0.12 mm. A 0.6 mm or 0.8 mm nozzle is better for large functional parts and high-flow printing.
- On a 0.4 mm nozzle, keep layer heights around 25–70% of the nozzle diameter, or about 0.10–0.28 mm. A 0.20 mm layer is a good structural default.
- Line widths of 0.42–0.48 mm work well for inner walls and infill. An outer wall of 0.40–0.45 mm gives crisp detail without excessive over-extrusion.
- Standard PLA is not abrasive, so stainless steel is sufficient. Glow-in-the-dark, metal-filled, ceramic-filled, and carbon-fibre or glass-fibre PLA blends are abrasive and need a hardened-steel hotend. The U1's official hardened-steel hotends are sold as four-packs of one diameter, and different diameters cannot officially be mixed in the same print.

## 4. Drying and storage

PLA is less hygroscopic than nylon, TPU, or PETG, but it is still a polyester and it does absorb moisture. In a humid room, a spool can take up roughly 0.3–0.6% water by weight. Wet PLA may pop and steam at the nozzle, string heavily, produce rough surfaces, and lose layer strength. Over long storage in humid air, the filament can also become brittle enough to snap in the feed path.

- Dry standard PLA at 45–50 °C for 4–6 hours in a forced-convection filament dryer.
- Dry PLA+ at 50–55 °C for 4–6 hours if the manufacturer allows it.
- Do not exceed 55 °C. Many spools begin to soften near the glass transition, and a tightly wound spool can weld its own strands together or become oval.
- Store spools below about 20% relative humidity in an airtight box with freshly regenerated silica gel or another suitable desiccant.
- Do not use a kitchen oven for drying filament. Kitchen ovens overshoot badly and can soften the spool or contaminate the oven with polymer residue. Use a dedicated filament dryer.

A dry box with a direct feed is useful for long prints. A dryer set to 45–50 °C can feed the U1 while it prints, but do not use the dryer as a chamber heater and do not let the filament enter the toolhead unusually warm on an already hot day.

## 5. Supports and multi-toolhead printing

PLA is dimensionally stable enough that most support removal is straightforward, but it still needs a properly tuned interface. On the U1, the four independent toolheads make it possible to use PETG as a dedicated support-interface material without pushing both polymers through one melt zone.

A PETG interface can work well with a 0 mm top Z-distance and two or three interface layers. The PETG does not fuse chemically to the PLA model in the same way that a compatible material would, so the support usually peels away cleanly. This is a genuine advantage of the toolchanger, but it is not a promise of zero ooze, zero surface marking, or 100% structural strength at the interface. The interface is still a deliberate weak bond, and the quality depends on temperature, cooling, flow, and the geometry of the supported surface.

- Use a prime or wipe tower and a wipe sequence between tool changes. Expect some oozing; the goal is to manage it, not to eliminate it completely.
- Test the interface on a small part before committing to a long print.
- Keep the PETG dry. Wet PETG produces stringing and poor interface quality.
- PVA and BVOH are water-soluble options for complex internal channels, but they are much more hygroscopic than PLA and need careful drying and sealed storage.
- TPU 95A can be printed in a second toolhead, but PLA and TPU do not form a reliable chemical bond. Use mechanical interlocks or dovetails if the soft part must stay attached.

## 6. Surface finishing and annealing

PLA responds very well to ironing, scarf seams, and light mechanical finishing.

- For top-surface ironing, start at 30–45 mm/s, 12–18% flow, and 0.10–0.15 mm line spacing. Increase spacing slightly if the ironing pass leaves ridges.
- A scarf joint of 15–20 mm with 10–15 steps can hide the seam on round parts. Enable the inner-wall wipe as well.
- Fuzzy skin with a point distance of about 0.3 mm and a thickness of 0.2–0.3 mm produces a useful pebbled texture that hides layer lines. It also adds printing time and slightly changes the outer dimensions.
- Wet-sand with 180, 320, 600, and then 1000 grit. Dry power sanding generates friction heat and can smear or gum the surface. Wear a dust mask and work in a ventilated area.
- PLA bonds well with cyanoacrylate glue, two-part epoxy, and dedicated PLA solvent cements. Clamp joints while the adhesive cures.
- A filler primer followed by acrylic or lacquer paint gives a good painted finish. Test the primer on a scrap print first, because some solvents attack PLA.

Annealing is the main way to raise PLA's heat resistance. The salt-pack method is practical: bury the part in fine salt or casting sand, heat it in a dedicated convection oven at 95–110 °C for 60–90 minutes, then let it cool slowly to room temperature before removing it. The salt or sand supports the part and reduces sagging.

Annealing can raise the HDT to roughly 95–135 °C, but the result depends on the polymer grade, the achieved crystallinity, the part thickness, and how well the part was supported. It also usually causes some shrinkage, often around 1.5–2.5% in the XY plane, and may cause slight dimensional change in Z. A high HDT does not mean the part can carry a heavy load at that temperature. Annealed PLA is still subject to creep, and it can become more brittle.

Do not anneal parts that contain inserts, electronics, or glued joints. Do not use a food oven for polymer parts. Ventilate the area, keep the oven away from children and pets, and allow the part to cool completely before handling it.

## 7. Snapmaker U1 hardware notes

The U1 has four independent toolheads, two filament feeders, and four spool holders. The left feeder serves toolheads 1 and 2, and the right feeder serves toolheads 3 and 4. This is not a four-feeder system. The toolchanger architecture is what makes a clean PLA/PETG support interface possible, because each material has its own melt path.

- The stock 0.4 mm hotends are integrated stainless-steel units. A nozzle-only swap is not supported.
- Official hardened-steel hotends are available in 0.2, 0.4, 0.6, and 0.8 mm sizes. They are sold as four-packs of one diameter, and Snapmaker does not officially support mixing different diameters in the same print.
- Standard PLA can be printed with the stock stainless hotend. Use hardened steel for abrasive PLA variants, not as a default upgrade.
- The machine's 500 mm/s maximum speed and 20,000 mm/s² acceleration are hardware maxima. A realistic PLA profile will usually be limited by flow and cooling, not by the motion system.
- Snapmaker RFID filament can be loaded automatically. Third-party spools need a manual material profile and a flow test.
- If a chamber heater is fitted, full-board motherboard cooling is mandatory before use. The RK3562 processor begins thermal throttling around 85 °C, and elevated chamber temperatures increase wear. This does not apply to normal PLA printing because the chamber heater should be off.

## 8. Five real PLA demonstration models

These are genuine model pages, not search pages or shopping links. Each is a practical model to print in PLA; where the designer recommends a different material for a load-bearing sub-part, that is noted.

1. **[Dummy 13 - version 1.0!](https://www.printables.com/model/981111-dummy-13-version-10)** is a print-in-place action figure with small snap fits and close tolerances. The designer lists PLA as a tested material for the armour, but recommends PETG, ABS, or ASA for the internal frame because PLA is stiff, brittle, and prone to creep in the joints. It is an excellent test of small-part accuracy, but it also shows why PLA is not the best choice for repeated snap loading.
2. **[Honeycomb storage wall](https://www.printables.com/model/152592-honeycomb-storage-wall)** is a modular wall-organiser system with large panels and many accessories. The panels and hooks are commonly printed in PLA or PLA+, and the model is a good test of bed adhesion, dimensional consistency, and interlocking fits. Use PLA+ or a tougher material for hooks that carry heavy tools.
3. **[Gridfinity Refined](https://www.printables.com/model/413761-gridfinity-refined)** is a refined implementation of the Gridfinity storage standard. The designer states that PLA and PLA+ have been thoroughly tested and tuned for the baseplates, bins, and mounts. Baseplates benefit from three to five walls, while bins can use two walls and lightning infill. This is one of the best everyday PLA projects for a workshop.
4. **[Rugged Box (Parametric)](https://www.printables.com/model/258431-rugged-box-parametric)** is a parametric storage box with a print-in-place latch and hinge. PLA works for the first fit check and for light indoor storage, but the latch is a flexing feature, so PLA+ or PETG is a better choice for a box that will be opened repeatedly. Test the latch before printing a full set of boxes.
5. **[Articulated Dragon](https://www.printables.com/model/1065254-articulated-dragon)** is a one-piece, support-free print-in-place dragon with many small articulated joints. PLA is a common material for this type of model, and the print is a demanding test of clearance, layer adhesion, and cooling. Thin joints are brittle in standard PLA, so PLA+ is the safer choice if the model will be handled.

## 9. Ten verified filament products

The links below were checked on 25 October 2026. Availability and price vary by region and change frequently, so no price is quoted here. Each link points to the named product, not to a search page or a different material.

| Brand | Product | Variant | Why it is useful on the U1 | Verified product link |
| --- | --- | --- | --- | --- |
| Bambu Lab | PLA Basic | Standard, high-speed friendly | Consistent colour and good dimensional accuracy, with profiles that work well on modern high-flow printers. | [Bambu Lab PLA Basic](https://us.store.bambulab.com/products/pla-basic-filament) |
| Prusament | PLA Prusa Galaxy Black | Standard | Tight diameter tolerance and a spool-specific quality record; a reliable reference filament for calibration. | [Prusament PLA Prusa Galaxy Black 1 kg](https://www.prusa3d.com/product/prusament-pla-prusa-galaxy-black-1kg/) |
| eSUN | PLA PRO (PLA+) | Tough PLA+ | A long-established PLA+ with good layer adhesion and impact resistance; widely available and easy to tune. | [eSUN PLA PRO (PLA+)](https://www.amazon.com/dp/B01EKEMNRO) |
| Hatchbox | PLA | Standard | A dependable everyday PLA with good winding and consistent diameter; useful as a baseline when comparing other spools. | [Hatchbox PLA](https://www.amazon.com/dp/B00J0ECR5I) |
| Overture | High Speed PLA | High-speed PLA | A lower-cost high-flow option for fast prototypes and workshop parts; run a flow test before using a high-speed profile. | [Overture High Speed PLA](https://www.amazon.com/dp/B07PGY2JP1) |
| Elegoo | PLA | Standard | Low-cost cardboard-spool PLA with good dimensional consistency; a sensible choice for large decorative prints and test models. | [Elegoo PLA](https://www.amazon.com/dp/B0BM739JRF) |
| Polymaker | PLA Pro | Tough PLA+ | A tougher PLA formulation intended for functional parts, with good surface quality and support for high print speeds. | [Polymaker PLA Pro](https://www.amazon.com/dp/B0C9TQ86HY) |
| SUNLU | PLA+ 2.0 | Tough PLA+ | A low-cost PLA+ in a multi-pack; good for colour sets and for parts that need more impact resistance than standard PLA. | [SUNLU PLA+ 2.0](https://www.amazon.com/dp/B0CZRS3J99) |
| Snapmaker | PLA Filament (1 kg) | Standard | Factory-supported material with a Snapmaker profile and RFID convenience on the U1. | [Snapmaker PLA Filament](https://us.snapmaker.com/products/pla-filament-1kg) |
| Proto-pasta | Black Opaque HTPLA | Annealable PLA | A nucleated, annealable PLA for parts that need higher heat resistance after a controlled salt-pack or oven treatment. | [Proto-pasta Black Opaque HTPLA](https://www.amazon.com/dp/B075TH7732) |

## 10. Videos

1. **[Bake your PLA and have it outperform everything else! #Filaween](https://www.youtube.com/watch?v=CZX8eHC7fws)** by Made with Layers (Thomas Sanladerer) examines annealing, dimensional change, and the strength trade-offs of heat-treated PLA.
2. **[The BEST 3D printing material? Comparing PLA, PETG & ASA (ABS) - feat. PRUSAMENT by Josef Prusa](https://www.youtube.com/watch?v=ycGDR752fT0)** by CNC Kitchen compares the three materials in practical tests. It is a PLA, PETG, and ASA comparison, not a dedicated PLA-versus-PLA+ test.
3. **[Tecbears PLA Test: Classic vs Matte vs PLA+ vs High Speed](https://www.youtube.com/watch?v=kfGvyDn4Dgk)** by My Tech Fun compares standard, matte, PLA+, and high-speed PLA in a consistent test setup.
4. **[Fast 3D printing is bad for Strength! (and how to fix it!)](https://www.youtube.com/watch?v=qBvTWFEd7rk)** by CNC Kitchen explains why higher print speed can reduce layer strength and how temperature and flow interact.
5. **[3D printer calibration revolutionised - Step by step to better print quality](https://www.youtube.com/watch?v=rp3r921DBGI)** by Teaching Tech covers temperature, flow, pressure advance, retraction, and volumetric-flow calibration.

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
- [[02 - Silk PLA (Elastomer-Modified High-Gloss Polylactic Acid Blend)]]
- [[03 - Matte and Aesthetic Filled PLA (Matte, Wood, Marble, Glow-in-the-Dark, Sparkle PLA)]]
- [[04 - Foaming Lightweight PLA (LW-PLA - Active and Passive Expandable Polylactic Acid)]]
- [[05 - PETG (Polyethylene Terephthalate Glycol-Modified)]]
- [[12 - Carbon Fiber and Glass Fiber Reinforced Composites (PLA-CF, PETG-CF, ABS-GF, ASA-CF, PA-CF, PAHT-CF, PC-CF)]]

## Sources

The property ranges in this note were compiled from common manufacturer technical data sheets for standard PLA, high-speed PLA, and impact-modified PLA+, and from the independent testing shown in the videos above. The Snapmaker U1 hardware limits and material-support statements follow Snapmaker's published specifications and the manufacturer documentation for the optional top cover and BIQU Panda Breath. Product links were checked directly against the retailer or manufacturer page on 25 October 2026.
