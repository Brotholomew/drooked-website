---
title: "21 - Ceramic, Stone, and Clay-Filled Filaments (Silica Ceramic PLA, Terracotta, Porcelain, and Sinterable Alumina-Zirconia)"
tags:
  - 3d-printing
  - filaments
  - ceramic
  - stone
  - clay
  - terracotta
  - porcelain
  - alumina
  - zirconia
  - abrasive
  - sintering
---

| Nozzle temperature | Chamber temperature | Post-print temperature resistance | What it is good for | Additional notes |
| :--- | :--- | :--- | :--- | :--- |
| **Decorative stone, clay and marble PLA:** 205–225 °C. FormFutura permits 185–225 °C for StoneFil. | Not required. Keep the chamber at ambient, roughly 20–30 °C, and leave the Top Cover off. | About 45–55 °C in continuous service. The PLA matrix softens near 60 °C, so a quoted HDT is not a service limit. | Planters, vases, sculptures, architectural models, and decorative bowls that will not contact food. | A hardened-steel 0.4–0.6 mm hotend is advisable. Dry at 45–50 °C for 4–6 hours. The printed part remains a plastic composite. |
| **Sinterable ceramic green bodies:** 120–180 °C for Zetamix, 190–230 °C for Filamet. | Not required. Ambient is best because the binder is soft and heat-sensitive. | The green body is weak and moisture-sensitive. After correct firing, alumina is usable to roughly 1500 °C, zirconia to roughly 1000–1200 °C, and porcelain to roughly 1000 °C in clean, load-free service. | Electrical insulators, wear parts, crucibles and kiln furniture, and small technical prototypes. | Needs a 0.6–1.0 mm hardened-steel nozzle, a solvent or thermal debind, and a kiln at 1250–1643 °C. **The U1 cannot sinter.** |

> [!abstract] Overview
> This note covers two very different families that are sold under similar names. Decorative stone, clay and marble PLA composites are plastic parts with mineral powder added for appearance. They print easily but never become ceramic. Sinterable ceramic filaments contain a high load of ceramic powder in a sacrificial binder; after printing, the binder is removed and the part is fired into a dense ceramic. Only the second family is a technical ceramic.
>
> The distinction matters because marketing language blurs it. A matte, stone-look print is not a glazeable pot, and a "ceramic" PLA held at 500 °C will lose its polymer and collapse into loose powder. Conversely, a properly fired alumina or zirconia part is a genuine engineering material with strength, hardness and heat resistance that no PLA composite can approach.
>
> The Snapmaker U1 can print both families. Its maximum nozzle temperature of 300 °C is far above the 120–230 °C these filaments need, and its 100 °C bed is more than enough. The printer cannot, however, fire either family. Sintering happens in a separate kiln at 1250–1643 °C.

> [!warning] The Snapmaker U1 cannot sinter ceramic parts
> The U1 is a 300 °C FFF printer, not a furnace. Zetamix alumina requires 1550 °C, Zetamix zirconia requires 1475 °C, and The Virtual Foundry lists 1643 °C for its aluminum oxide. Even The Virtual Foundry's own kilns stop at 1260–1288 °C. The U1 can produce the green body; the ceramic part only exists after a separate debinding and firing cycle in equipment the printer does not contain.

## 1. What these filaments actually are

### Decorative mineral-filled PLA

Most "stone", "marble", "clay" and "terracotta" filaments are PLA or a PLA blend, usually loaded with 20–50 wt% mineral powder when the loading is disclosed. Common fillers include calcium carbonate from chalk, limestone or marble, talc, kaolin, feldspar, silica and mixed stone powder. The filler dulls the surface, adds density and hides layer lines, but the polymer remains the continuous phase.

FormFutura StoneFil is the clearest example with a published loading: 50 wt% powdered stone in a modified EasyFil PLA, with a density of about 1.66 g/cm³, roughly a third higher than ordinary PLA. Fiberlogy PLA Mineral uses chalk and reaches only 1.38 g/cm³, which shows that "mineral" does not imply a high loading. Many marble PLAs publish no filler content at all, so their mineral load cannot be confirmed.

These materials are sometimes called "ceramic PLA" because of the finish. Heating them does not produce ceramic. At around 300–500 °C the PLA burns away and leaves a friable skeleton of mineral powder that has no continuous glassy or sintered matrix. A 40–60 wt% silica-filled PLA is not a vitrified silica body either; silica needs a powder compact, a sintering aid or a high enough temperature to densify, not a polymer composite.

### Sinterable ceramic filament

Sinterable filaments use a much higher ceramic load in a binder designed to be removed. Zetamix, made by Nanoe, uses a polyolefin-based binder. Its published compositions are 75.5 wt% alumina, 86 wt% yttria-stabilized zirconia and 75 wt% porcelain. The Virtual Foundry's Filamet range uses 59–63 wt% aluminum oxide, 64–69 wt% zirconium silicate, and 48–52 wt% porcelain, among other ceramics.

The printed part is called a green body. It has the shape of the final part but the mechanical behavior of a brittle, filled plastic. Debinding removes the binder and leaves a porous brown body. Sintering then bonds the ceramic particles by diffusion at high temperature, closing most of the porosity and shrinking the part. Zetamix reports 98–99% of theoretical density after firing.

The two vendors use different debinding routes. Zetamix uses a two-stage process: a solvent bath in acetone followed by a slow thermal debind. The Virtual Foundry describes a thermal debind and sinter cycle for its Filamet materials. The cycles are not interchangeable, and a generic pottery firing schedule will not substitute for either.

### What the names do not mean

"Ceramic" in a product name usually describes the surface, not the material class. "Marble" usually describes a color and particle effect. "Zirconia" is not the same as "zirconium silicate": zirconia is ZrO₂, while zirconium silicate is ZrSiO₄, commonly sold as Zircopax, and it is a different ceramic with different firing behavior. "Aluminum silicate" is not a Virtual Foundry product name; the company sells aluminum oxide and zirconium silicate separately.

There is also no Polymaker "Panchroma Ceramic" SKU. Polymaker's Panchroma line includes a Marble variant in several colors, and Panchroma Marble is the successor to PolyTerra Marble with the same composition. That is the product to look for.

## 2. Properties before and after firing

The table below uses manufacturer data where it exists. Density and service temperatures for fired parts are approximate because they depend on density, grain size, load and atmosphere. Ceramics do not have an HDT in the polymer sense, so the service-temperature row gives conservative continuous guidance rather than a deflection temperature.

| Property | StoneFil and decorative mineral PLA, as printed | Zetamix porcelain, fired | Zetamix alumina, fired | Zetamix white zirconia, fired |
| :--- | :--- | :--- | :--- | :--- |
| Density | About 1.66 g/cm³ for StoneFil; 1.38 g/cm³ for Fiberlogy PLA Mineral | About 2.4 g/cm³ | About 3.9 g/cm³ | About 6.0 g/cm³ |
| Bending strength | Not published; PLA-like, with lower elongation than unfilled PLA | Not published | 200–500 MPa | 400–1000 MPa |
| Hardness | Not published; polymer hardness, not a ceramic figure | Not published | 19 GPa HV10 | 10 GPa HV10 |
| Firing shrinkage | None | 13.8% in X and Y, 26.4% in Z | 23.1% in X and Y, 25.65% in Z | 21.5% on all axes |
| Continuous service temperature | About 45–55 °C | About 1000 °C, conservative | About 1500 °C, conservative | About 1000–1200 °C, conservative |
| Electrical behavior | Insulating polymer | Insulating ceramic | Dielectric constant about 9 at 9.4 GHz | Dielectric constant about 30 at 9.4 GHz |

Two cautions follow from the table. First, shrinkage is not necessarily isotropic. Porcelain shrinks about 13.8% in the plane of the bed and 26.4% vertically, while Zetamix zirconia shrinks about 21.5% on all axes, so a single uniform scale factor will distort a porcelain part but is appropriate for zirconia. Second, a high continuous service temperature does not make a thin, porous or thermally shocked part reliable. Zirconia is tough but sensitive to thermal shock, and alumina is stronger and harder but brittle.

Fired ceramics resist many chemicals, but not all of them. Alumina and zirconia are attacked by hydrofluoric acid, and hot concentrated phosphoric or sulfuric acid can attack alumina. Porcelain is generally less chemically resistant than high-purity alumina. Dense, dry, clean parts are good electrical insulators, while porosity, surface contamination and moisture can reduce dielectric strength sharply. Silicon carbide is a special case: it oxidizes in air at high temperature and needs an inert atmosphere or vacuum above roughly 2000 °C, so the 2200 °C figure in The Virtual Foundry catalog is not a hobby-kiln process.

## 3. Printing on the Snapmaker U1

### Nozzle and hotend

The constraint is abrasion, not temperature. The U1's stock hotends have 0.4 mm stainless-steel nozzles, and stainless steel is soft relative to the silica, alumina and zirconia particles in these filaments. Wear is progressive rather than instant: the orifice slowly enlarges and the print quality drifts, but a hard-filled filament will not destroy a nozzle in half an hour. The stock nozzle can handle occasional spools of a decorative composite, but the wear is cumulative; for regular use, and for any sinterable ceramic, fit the official hardened-steel hotend.

Snapmaker sells hardened-steel hotends in 0.2, 0.4, 0.6 and 0.8 mm, as four-packs of a single diameter. The hotend is an integrated unit, so the whole unit is replaced rather than just the nozzle. Different diameters cannot be used in the same print according to Snapmaker. An OrcaSlicer workaround with scaled line widths exists for 0.4 and 0.6 mm, but it is a community workaround, not stock capability.

For decorative composites, 0.4 mm is a good compromise for detail and 0.6 mm reduces clogging and wear. For sinterable ceramics, Zetamix recommends 0.8 mm and accepts 0.6–1.0 mm; The Virtual Foundry specifies 0.6 mm hardened steel. A 0.2 mm nozzle is unsuitable because the particles bridge the orifice. If most of your printing is filled material, a single 0.6 mm hardened-steel set across all four toolheads is the simplest choice.

### Temperatures, bed and chamber

Decorative composites print in a broad, forgiving temperature window. FormFutura lists 185–225 °C for StoneFil, and 205–225 °C is the practical range on a modern hotend. Polymaker lists 190–230 °C for Panchroma Marble, Fiberlogy lists 190–210 °C for PLA Mineral, and Bambu Lab's PLA Marble runs in the usual PLA range. Start at 210 °C and adjust for layer adhesion and surface finish.

Sinterable filaments run cooler because their binders are soft. Zetamix alumina prints at 130–180 °C, zirconia at 170–180 °C, and porcelain at 120–160 °C. The Virtual Foundry aluminum oxide prints at 190–230 °C, or 235–250 °C on a high-speed printer. These temperatures are well within the U1's 300 °C limit.

The bed should be 50–60 °C for decorative PLA composites and 40–65 °C for Filamet. Zetamix specifies no bed heating at all. A textured PEI plate gives good grip; let the plate cool before removing thin, brittle decorative parts, because a warm flexible plate can crack a thin vase base.

Chamber heating is unnecessary and counterproductive. These materials print at ambient temperature, and a warm chamber encourages heat creep in the PLA composites and softens the green body. Leave the Top Cover off and do not run a chamber heater.

The BIQU Panda Breath is listed by BIQU as compatible with the U1, so it is not a Bambu Lab-only accessory. That compatibility is not plug-and-play: stock U1 firmware does not control it, and it needs community firmware such as paxx12's extended firmware or DragonBreath. Any chamber heater on the U1 also requires full motherboard cooling before use, because the RK3562 begins thermal throttling at 85 °C. None of this is needed for ceramic and stone filaments, which should be printed cool.

### Cooling, speed and flow

Decorative composites want strong part cooling, typically 80–100%, because the mineral filler raises melt viscosity and the surface benefits from fast freezing. Sinterable green bodies want much less, around 20–40%, and The Virtual Foundry recommends some cooling only for small, intricate parts.

A decorative composite can be printed at 50–90 mm/s on outer walls and 100–150 mm/s on infill, with a volumetric limit around 10–14 mm³/s. A green body is slower: 30–50 mm/s and 3–6 mm³/s are sensible starting points. Zetamix quotes speeds up to 200 mm/s on a suitable printer, but the filament is soft and the green body is brittle, so 30–50 mm/s is a more realistic target on a toolchanger.

The U1's published 32 mm³/s limit was measured with Snapmaker ABS at 280 °C. It is not a guarantee for an abrasive-filled filament through a 0.6 mm nozzle at 210 °C, so treat it as an upper bound and calibrate with a flow test.

Retraction should be short, about 0.6–1.0 mm at 25–30 mm/s. High-load filaments are soft and brittle, and aggressive retraction or excessive idler pressure grinds a flat spot into the strand. Zetamix recommends loading with minimal pressure and increasing it only until the filament feeds.

Flow compensation is often needed. FormFutura suggests about 110% flow for StoneFil, and The Virtual Foundry suggests 110–125% for its ceramics. Measure the actual extrusion width rather than assuming a value.

### Drying and storage

Decorative mineral-filled PLA is moderately hygroscopic because the mineral particles adsorb moisture. Dry it at 45–50 °C for 4–6 hours; Fiberlogy specifies 50 °C for 6 hours. Wet filament produces steam pockets, rough surfaces and brittle strands that snap in the feeder.

Do not apply that advice to Filamet. The Virtual Foundry explicitly says not to dry its ceramic filaments because drying degrades the binder. Keep unopened spools sealed and opened spools in a dry box, but do not put them in a heated dryer. Zetamix spools are vacuum-packed and should be stored dry; the binder is also heat-sensitive, so avoid unnecessary heat.

Store all of these materials below about 15% relative humidity. Use the desiccant and dry-box guidance in [[02 - Storing Filament|Storing filament]] and [[03 - Combining Storing and Drying - Science and Rational Approach|Combining storage and drying]] rather than relying on silica gel alone.

### Layer height, walls and surface

A 0.16–0.28 mm layer height works well for decorative parts. Mineral-filled PLA hides layer lines better than unfilled PLA because the surface scatters light, but it does not erase them. For a coiled-pottery look, vase mode with a 0.6 or 0.8 mm nozzle, a 0.32–0.45 mm layer and a 0.9–1.2 mm line width produces a convincing thrown-clay profile.

Ironing is optional. It burnishes the PLA matrix and produces a sheen that looks more like glazed ceramic than raw bisque, so use it only when that is the goal. Fuzzy skin at a small point distance and 0.1–0.15 mm thickness adds a subtle sandstone texture; it is a useful effect, not a substitute for real clay texture.

Sinterable green bodies should stay below about 6 mm wall thickness, which is Zetamix's recommended limit for reliable debinding. Thicker sections trap binder and crack during the thermal cycle. Use a 0.2–0.3 mm layer and avoid sharp internal corners that concentrate shrinkage stress.

Supports are rarely needed for vases and planters. Where they are needed, a water-soluble interface such as PVA or BVOH, or a PETG breakaway interface on a toolchanger, separates cleanly from the mineral surface. See [[22 - Water-Soluble and Chemical-Soluble Support Filaments (PVA Polyvinyl Alcohol, BVOH Butenediol Vinyl Alcohol Copolymer, HIPS High Impact Polystyrene)|Water-soluble support filaments]].

## 4. Finishing decorative parts

Wet sanding with 240–600 grit exposes fresh mineral and produces a chalky, stone-like surface. Keep the paper wet and wear a P2 or N95 respirator; dry sanding raises fine silica or calcium carbonate dust that should not be inhaled. Do not use compressed air to clear the dust.

Acrylic washes and iron-oxide pigments settle into the microporous surface and look like aged limestone or terracotta. Apply a dilute wash, let it dry, then wipe the raised areas with a damp sponge. This is the technique that makes a printed planter look heavier and older than it is.

Sealing is a separate question from appearance. A thin laminating epoxy or polyurethane can make a planter watertight and protect the surface, but it does not make the object food-safe. Mineral-filled PLA is porous at layer boundaries, and bacteria can colonize those gaps. Bambu Lab states plainly that PLA Marble is not food-grade, and the same caution applies to the other decorative composites.

Mod Podge is a craft glue, not a food-contact coating. The "Dishwasher Safe" formula is designed to survive washing on decorative objects; it is not a food-safe finish and should not be used inside cups, plates or storage containers. For a food or beverage application, use a removable glass or polypropylene liner rather than relying on any brush-on coating.

Decorated parts should also stay out of dishwashers, microwaves and ovens. The PLA matrix softens near 60 °C, so a hot dishwasher will distort the part even if the coating survives.

## 5. Debinding and sintering

### The Zetamix two-stage cycle

Zetamix's published alumina guideline is specific, and it is worth quoting because generic advice is wrong. The ramp values below come from the alumina guideline; confirm the published cycle for the exact material before firing zirconia or porcelain. After printing, the part is immersed in an acetone bath at 40 °C for 24 hours. The bath removes at least 5% of the part's mass; thinner walls need less time, but even a small part needs at least 2 hours. The part is then dried in ambient air for about 1–2 hours. Do not place it on absorbent fabric, because the fabric wicks binder and changes the measurement.

The thermal stage is slow: 8 °C per hour to 500 °C. That is a roughly 62-hour ramp, not a one-hour climb. After that, the furnace ramps at 60 °C per hour to the sintering temperature, holds for 2 hours, and cools at 120 °C per hour. The part sits on a crucible or setter throughout.

The sintering temperature depends on the material. Zetamix alumina is fired at 1550 °C in air, white zirconia at 1475 °C in air, and porcelain at 1250 °C in air. The full cycle takes days, not hours.

A thermal ramp to 450–550 °C is not a substitute for this process. Without the acetone step, the primary binder stays in the part and generates gas during heating, which blisters or cracks the part. Even with the solvent step, a fast ramp to 500 °C can trap decomposition products. The published two-stage schedule exists for a reason.

### The Virtual Foundry cycle

The Virtual Foundry's Filamet process is also a thermal debind and sinter cycle, but the details differ by material and the company publishes separate sintering guides. Its aluminum oxide is listed at 1643 °C, zirconium silicate at 1500 °C, and porcelain at 1232 °C. The catalog marks the zirconium silicate and porcelain figures as untested, and the product pages state that The Virtual Foundry cannot provide debinding and sintering support for its ceramics. Treat those numbers as starting points for development, not as a recipe.

### Shrinkage and scale factors

Shrinkage must be compensated in the slicer before printing. Zetamix publishes oversize factors for alumina: 130.0% in X and Y and 134.5% in Z. For zirconia, 21.5% isotropic shrinkage corresponds to an oversize factor of about 127.4% on all axes. For porcelain, 13.8% in-plane shrinkage corresponds to about 116.0% in X and Y, while 26.4% vertical shrinkage corresponds to about 135.9% in Z.

These figures come from test parts with a defined wall thickness. A real part with different geometry will shrink slightly differently. Print a small test bar or cube in the same filament, fire it with the production batch, and measure the result before committing to a large model.

### Kiln requirements and cost

Most hobby pottery kilns top out around 1200–1300 °C. A kiln rated to 1250 °C or above can handle porcelain at 1232–1250 °C, but not zirconia at 1475 °C, alumina at 1550 °C, or The Virtual Foundry aluminum oxide at 1643 °C.

The Virtual Foundry's own kilns illustrate the gap. The FireX is listed at $1,999.99 with a maximum of 1260 °C and an 8 × 8 × 6 inch chamber. The FireX Max is listed at $5,199.99 with a maximum of 1288 °C and a 16.5 inch diameter chamber. Both are UL-listed, and both are below the firing temperature of every alumina and zirconia product discussed here. Prices are US list prices seen in October 2026 and exclude shipping.

A furnace that reaches 1550–1650 °C is a different class of equipment. It typically needs 240 V power, a programmable controller, suitable heating elements and ventilation, and it costs several thousand dollars or more. Zetamix sells a Zetasinter tubular furnace, but the price was not published on the page consulted. Before buying anything, confirm the maximum continuous temperature, the chamber size, the ramp control and the atmosphere the material requires.

Porcelain is the practical entry point because 1250 °C is within reach of a good pottery kiln. Alumina and zirconia are not hobby processes.

### Safety

Acetone is highly flammable. Its flash point is about −20 °C, and its vapor is heavier than air, so it can travel to an ignition source. Use a grounded metal container, work in a ventilated area away from flames, sparks and hot surfaces, and wear gloves and eye protection. Do not use a kitchen oven or a domestic refrigerator for solvent work.

Thermal debinding produces organic vapors and carbon monoxide. The kiln must be vented to the outside, and it should not be operated in a living space. Follow the kiln manufacturer's ventilation instructions and do not open a hot kiln to inspect the part.

A 1500 °C furnace causes severe burns and can ignite nearby materials. Keep the area clear, use tongs and heat-resistant gloves, and allow the furnace to cool before handling the crucible.

Alumina and silica dust is a respiratory hazard. Wet sanding is safer than dry sanding, and any dry handling should use local extraction and a P2 or N95 respirator. Do not sweep dry powder with compressed air.

Fired ceramic parts are brittle. Thin sections can spall or crack under point loads, and a part that survived firing can fail later if it is quenched or thermally shocked. Do not quench a hot part in water.

## 6. U1 workflow notes

The U1 has four independent toolheads, two filament feeders, four spool holders and a maximum nozzle temperature of 300 °C. That makes it well suited to multi-color decorative work: terracotta, pottery clay, concrete gray and a PETG breakaway support can be loaded across four toolheads. A prime tower or wipe sequence is still required; a toolchanger reduces cross-contamination but does not eliminate ooze.

Because different nozzle diameters cannot be used in the same print according to Snapmaker, do not plan a mixed 0.4 mm decorative and 0.8 mm sinterable print. Choose one diameter for the job. The 0.6 mm hardened-steel set is the best single compromise.

The U1's RFID system reads Snapmaker filament. Third-party spools need manual material profiles, so record the temperatures and flow values for each product rather than relying on autodetection.

A SnapDryer or similar heated dryer is useful for decorative composites at 45–50 °C. Do not use it for Filamet. For Zetamix, keep the spool sealed until use and avoid unnecessary heat.

## 7. Common problems

**Extruder grinding and dust.** Mineral-filled filaments shed fine powder into the drive gears. Clean the gears every few spools, and reduce idler pressure if the teeth are crushing the strand. A grooved drive gear is gentler on soft green-body filament than a sharp hobbed gear.

**Nozzle wear.** Hard particles enlarge the orifice gradually. Print quality falls off as the effective diameter grows, and the effect is worse with alumina, zirconia and silicon carbide than with calcium carbonate or talc. Hardened steel slows the process; tungsten carbide or a diamond nozzle is the production solution. This is a wear issue, not a sudden failure.

**Brittle filament snapping.** High filler loads reduce elongation. Avoid tight spool bends, keep the feeder path straight, and do not over-tension the extruder. Wet filament is more brittle, so dry decorative composites before long prints.

**Heat creep and jams.** A warm chamber or a long, slow print can soften PLA composite filament above the heat break. Leave the Top Cover off, keep the chamber at ambient, and use a hotend with good heat break cooling.

**Clogging at small nozzles.** A 0.2 mm nozzle is not suitable, and a 0.4 mm nozzle is marginal for high-load ceramics. Move to 0.6 mm for sinterable materials and for any composite that repeatedly clogs.

**Cracks during firing.** The usual causes are too fast a debind ramp, too thick a wall, trapped moisture, or a part resting on a surface that constrains shrinkage. Use the published cycle, keep walls below about 6 mm, dry the green part, and place it on a suitable setter.

**Unexpected shrinkage.** Do not trust a single scale factor for a complex part. Fire a test coupon with the production batch and measure X, Y and Z separately, especially for porcelain, whose vertical shrinkage is much larger than its in-plane shrinkage.

## 8. Demo models

All five of these are decorative models. They suit StoneFil, marble PLA or a terracotta composite. None is a validated sinterable-ceramic demo, because the firing result depends on the kiln and the test coupon, not on the model.

1. **The terracotta planter (pencil holder)** is a small pot that suits a terracotta composite.
   [https://www.printables.com/model/777271-the-terracotta-planter-pencil-holder](https://www.printables.com/model/777271-the-terracotta-planter-pencil-holder)
2. **Antique amphora vase** is a classical two-handled form that suits a stone-colored composite.
   [https://www.printables.com/model/311654-antique-amphora-vase](https://www.printables.com/model/311654-antique-amphora-vase)
3. **Oval Bonsai Pot, Bonsai Planter** is a shallow bonsai planter that benefits from the weight and matte surface of a stone-filled PLA.
   [https://www.printables.com/model/948732-oval-bonsai-pot-bonsai-planter](https://www.printables.com/model/948732-oval-bonsai-pot-bonsai-planter)
4. **Greek column Pot and Planter, Ancient design, Vase mode** is a fluted column shell designed for spiral printing, which suits a 0.6 or 0.8 mm nozzle and a clay-colored filament.
   [https://www.printables.com/model/396957-greek-column-pot-and-planter-ancient-design-vase-m](https://www.printables.com/model/396957-greek-column-pot-and-planter-ancient-design-vase-m)
5. **Cracked Stone Planter** uses a cracked-stone surface that reads as weathered limestone in a gray or sandstone composite.
   [https://www.printables.com/model/1437431-cracked-stone-planter](https://www.printables.com/model/1437431-cracked-stone-planter)

For a sinterable material, the useful "demo" is a calibration coupon rather than a decorative model. Print a 20 mm cube and a thin bar, measure them, fire them on the production cycle, and measure again. That gives the shrinkage and distortion data needed to scale a real part.

## 9. Videos

1. **X3D Print, "FormFutura Stonefil Collection Review: You won't BELIEVE what they're made of!"** covers the StoneFil colors and their stone-like finish.
   [https://www.youtube.com/watch?v=o0Y593-UjTQ](https://www.youtube.com/watch?v=o0Y593-UjTQ)
2. **Nanoe, "Zetamix tutorial #4: Chemical and thermal debinding"** shows the two-stage debinding process that the written guideline describes.
   [https://www.youtube.com/watch?v=OsE2_nHDry4](https://www.youtube.com/watch?v=OsE2_nHDry4)
3. **CNC Kitchen, "HOW MUCH abrasive filaments damage your nozzle!"** quantifies nozzle wear from abrasive fillers and supports the case for hardened steel.
   [https://www.youtube.com/watch?v=uvlMeTnjriQ](https://www.youtube.com/watch?v=uvlMeTnjriQ)
4. **The Virtual Foundry, "TVF Webinar: Debinding and Sintering Filamet"** explains kiln selection, debinding and atmosphere control for Filamet materials.
   [https://www.youtube.com/watch?v=l3sCYjwRV-k](https://www.youtube.com/watch?v=l3sCYjwRV-k)
5. **Refin3D Living, "Marble Filament Showdown: Polymaker vs. Sunlu"** compares two decorative marble PLAs on appearance and print behavior.
   [https://www.youtube.com/watch?v=Hbx-fOUk3UY](https://www.youtube.com/watch?v=Hbx-fOUk3UY)

## 10. Products

Prices are approximate list prices seen in October 2026 and exclude shipping, VAT outside the EU, and local taxes. They change often, so treat them as a guide rather than a quotation.

| Product | What it is | Filler or ceramic content | Approximate price | Link |
| :--- | :--- | :--- | :--- | :--- |
| **FormFutura StoneFil** (Terracotta, Pottery Clay, Concrete, Granite) | Decorative stone-filled PLA | 50 wt% powdered stone; density about 1.66 g/cm³ | About €29 for 500 g | [FormFutura](https://www.formfutura.com/stonefil) |
| **Polymaker Panchroma PLA Marble** (White, Sandstone, Limestone, Brick, Slate Grey) | Decorative marble-effect PLA | Filler content not published | About €22 per kg | [3DJake](https://www.3djake.com/polymaker/panchroma-pla-marble-white) |
| **Bambu Lab PLA Marble** | Decorative stone-effect PLA | Inorganic particles; content not published | About €28 per kg | [Bambu Lab](https://us.store.bambulab.com/products/pla-marble) |
| **eSUN Marble PLA** | Decorative marble-effect PLA | Content not published | Check the listing | [Amazon](https://www.amazon.com/dp/B0GXZ6DCM7) |
| **Amolen Marble PLA** | Decorative marble-effect PLA | Content not published | Check the listing | [Amazon](https://www.amazon.com/dp/B0HNCWP2JQ) |
| **Fiberlogy PLA Mineral** (Natural, White, Marble, Concrete, Black) | Decorative chalk-filled PLA | Chalk filler; density 1.38 g/cm³; HDT 48 °C | About 101 PLN per kg | [Fiberlogy](https://fiberlogy.com/en/filaments/pla-en/pla-mineral-en/) |
| **The Virtual Foundry Aluminum Oxide Filamet** | Sinterable alumina | 59–63 wt% Al₂O₃; filament density 1.50–1.65 g/cm³ | $96.99 per 250 g | [The Virtual Foundry](https://shop.thevirtualfoundry.com/products/aluminum-oxide-ceramic-filamet) |
| **The Virtual Foundry Zirconium Silicate (Zircopax) Filamet** | Sinterable zirconium silicate, not zirconia | 64–69 wt% ZrSiO₄; density 2.10–2.19 g/cm³ | $186.99 per 250 g | [The Virtual Foundry](https://shop.thevirtualfoundry.com/products/zirconium-silicate-zircopax-ceramic-filamet) |
| **Zetamix Alumina** | Sinterable alumina | 75.5 wt% Al₂O₃; filament density 2.40 g/cm³; 1550 °C | €299 per 500 g excluding VAT | [Zetamix](https://zetamix.fr/en/produit/zetamix-alumina-filament/) |
| **Zetamix White Zirconia** | Sinterable yttria-stabilized zirconia | 86 wt% ZrO₂; filament density 3.65 g/cm³; 1475 °C | €299 per 500 g excluding VAT | [Zetamix](https://zetamix.fr/en/produit/white-zirconia-filament/) |
| **Zetamix Porcelain** | Sinterable porcelain | 75 wt% porcelain; filament density 1.90 g/cm³; 1250 °C | €99 per 500 g excluding VAT | [Zetamix](https://zetamix.fr/en/produit/zetamix-porcelain-filament/) |

Eight brands are represented above: FormFutura, Polymaker, Bambu Lab, eSUN, Amolen, Fiberlogy, The Virtual Foundry and Nanoe. Marble-effect PLA is sold by more brands than that, including Sunlu, Elegoo, Overture, Geeetech and Eryone, but most do not publish a filler content, and some marble effects come from pigment rather than a mineral load. This list is limited to products whose identity and key numbers could be verified, and it is not padded to ten.

There is no Polymaker "Panchroma Ceramic" product, no Virtual Foundry "Aluminum Silicate Ceramic Filamet" and no Virtual Foundry "Zirconia Filamet". The real products are Panchroma Marble, Aluminum Oxide Filamet and Zirconium Silicate Filamet. Anyone shopping from an older list should check those names first.

## Related notes

- [[00 - Filament Master Index|Filament master index]]
- [[03 - Matte and Aesthetic Filled PLA (Matte, Wood, Marble, Glow-in-the-Dark, Sparkle PLA)|Matte and aesthetic filled PLA]]
- [[20 - High-Density Metal-Filled and Sinterable Metal Filaments (BronzeFill, CopperFill, BrassFill, 316L and 17-4PH Stainless Steel)|Sinterable metal filaments]]
- [[19 - Magnetic and Ferromagnetic Iron-Filled Filaments (Paramagnetic Iron-PLA and Rustable Composites)|Iron-filled filaments]]
- [[04 - Nozzles and Their Types|Nozzles and their types]]
- [[05 - Layer Height and Nozzle Size|Layer height and nozzle size]]
- [[06 - Heating and Temperatures - Nozzle, Bed, and Chamber|Heating and temperatures]]
- [[07 - Print Speeds and Volumetric Flow|Print speeds and volumetric flow]]
- [[08 - Surface Smoothing Slicer Techniques - Ironing and Beyond|Ironing and surface smoothing]]
- [[09 - Post-Processing - Matte, Shiny, and Surface Finishing|Post-processing]]
- [[10 - Common Printing Issues, Debugging, and Physical Limits|Common printing issues]]
- [[01 - Drying Filament|Drying filament]]
- [[02 - Storing Filament|Storing filament]]
- [[12 - Carbon Fiber and Glass Fiber Reinforced Composites (PLA-CF, PETG-CF, ABS-GF, ASA-CF, PA-CF, PAHT-CF, PC-CF)|Abrasive composite filaments]]

## Sources

- FormFutura, StoneFil product page and printing guidance: [https://www.formfutura.com/stonefil](https://www.formfutura.com/stonefil)
- Polymaker Panchroma PLA Marble product listing with processing temperatures: [https://www.3djake.com/polymaker/panchroma-pla-marble-white](https://www.3djake.com/polymaker/panchroma-pla-marble-white)
- Bambu Lab PLA Marble product page, including the food-grade caution: [https://us.store.bambulab.com/products/pla-marble](https://us.store.bambulab.com/products/pla-marble)
- eSUN Marble PLA, 1 kg, Amazon listing: [https://www.amazon.com/dp/B0GXZ6DCM7](https://www.amazon.com/dp/B0GXZ6DCM7)
- Amolen Marble PLA, 1 kg, Amazon listing: [https://www.amazon.com/dp/B0HNCWP2JQ](https://www.amazon.com/dp/B0HNCWP2JQ)
- Fiberlogy PLA Mineral technical data: [https://fiberlogy.com/en/filaments/pla-en/pla-mineral-en/](https://fiberlogy.com/en/filaments/pla-en/pla-mineral-en/)
- The Virtual Foundry, ceramic filament catalog with loads and sintering temperatures: [https://thevirtualfoundry.com/products](https://thevirtualfoundry.com/products)
- The Virtual Foundry, Aluminum Oxide Filamet product page: [https://shop.thevirtualfoundry.com/products/aluminum-oxide-ceramic-filamet](https://shop.thevirtualfoundry.com/products/aluminum-oxide-ceramic-filamet)
- The Virtual Foundry, Zirconium Silicate Filamet product page: [https://shop.thevirtualfoundry.com/products/zirconium-silicate-zircopax-ceramic-filamet](https://shop.thevirtualfoundry.com/products/zirconium-silicate-zircopax-ceramic-filamet)
- Zetamix Alumina product page and datasheet: [https://zetamix.fr/en/produit/zetamix-alumina-filament/](https://zetamix.fr/en/produit/zetamix-alumina-filament/)
- Zetamix Alumina general guidelines, revised April 2026: [https://zetamix.fr/guideline-alumina/](https://zetamix.fr/guideline-alumina/)
- Zetamix White Zirconia product page and datasheet: [https://zetamix.fr/en/produit/white-zirconia-filament/](https://zetamix.fr/en/produit/white-zirconia-filament/)
- Zetamix Porcelain product page and datasheet: [https://zetamix.fr/en/produit/zetamix-porcelain-filament/](https://zetamix.fr/en/produit/zetamix-porcelain-filament/)
- Zetamix process overview, including the acetone debinding step and 15–20% shrinkage statement: [https://zetamix.fr/en/process/](https://zetamix.fr/en/process/)
