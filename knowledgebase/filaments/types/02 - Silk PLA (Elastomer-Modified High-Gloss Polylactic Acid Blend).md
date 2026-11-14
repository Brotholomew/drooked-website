---
title: "02 - Silk PLA (Elastomer-Modified High-Gloss Polylactic Acid Blend)"
tags:
  - 3d-printing
  - filaments
  - pla
  - silk-pla
  - decorative-parts
  - snapmaker-u1
---

| Nozzle temperature | Chamber temperature | Post-print temperature resistance | What it is good for | Additional notes |
| :--- | :--- | :--- | :--- | :--- |
| 210–235 °C on the U1, with up to 240 °C for maximum gloss on brands that allow it | Not required. Print at ambient temperature and keep the chamber below about 35–40 °C | HDT is 50–60 °C at 0.45 MPa. Practical continuous service is about 40–50 °C, and lower under load | Display models, vases, figurines, cosplay trim and awards | Dry at 50–55 °C for 6–8 hours. A 0.4 mm stainless nozzle is fine. Layer adhesion is the main weakness |

> [!info] Overview
> Silk PLA is polylactic acid compounded with a small amount of a soft polymer, normally a thermoplastic elastomer or a thermoplastic copolyester, together with colourants. It prints in much the same way as ordinary PLA and produces a glossy, metallic-looking surface directly off the printer. The shine comes from a smooth outer skin that reflects light in a specular way, not from a coating and not from aligned mica platelets. The price of that appearance is lower strength, especially across layer boundaries, so the material belongs on display pieces rather than load-bearing parts.

## What commercial silk PLA actually is

Commercial silk PLA is a compound rather than a single polymer. The base is polylactic acid, the same polyester used in ordinary PLA filament. The second phase is a soft polymer that lowers the melt viscosity and changes the way the extruded bead freezes. Most technical descriptions identify that phase as a thermoplastic elastomer (TPE), often a thermoplastic polyurethane (TPU) or a thermoplastic copolyester (TPC). Some descriptions also mention polyhydroxyalkanoate (PHA) as a modifier. Colourants create the metallic, pearl and satin shades, and some products also contain mica or other effect pigments. The exact recipe is proprietary and varies by brand and by colour.

Manufacturers describe the material in different ways. Bambu Lab calls its silk filaments PLA with pearlescent additives, while eSUN describes PLA-Silk as modified PLA. Those are marketing descriptions rather than full formulations. Public descriptions usually put the soft phase at a few percent to about 10 percent by weight, so it is a minority component, not a 50/50 blend. Treat any precise percentage as brand-specific.

Two myths are worth clearing up. Silk PLA does not contain silk, and the mirror finish is not produced by aligning mica platelets in the nozzle. Mica and metallic pigments can add sparkle or a pearlescent cast, but they do not explain why the same spool prints glossy at 50 mm/s and matte at 150 mm/s. The gloss follows surface roughness, and surface roughness follows melt flow and cooling.

## Why the surface shines

When any molten polymer leaves the nozzle, it freezes with a skin whose roughness determines how light leaves the surface. A rough skin scatters light in many directions and looks matte. A smooth skin reflects light in one direction and looks glossy. Silk PLA's soft phase lowers the melt viscosity and gives the bead a short window in which it can level before it solidifies, so the outer wall freezes with very fine surface roughness.

Bambu Lab's printing guide describes the mechanism directly. Lower outer wall speeds give the material more time to level, so gloss is usually stronger. Excessively high speeds increase microscopic surface roughness, scatter more light and weaken the gloss. Overture gives the same advice in terms of temperature and speed: a higher nozzle temperature and a lower speed produce a glossier finish, while the reverse produces a duller one.

Several practical consequences follow from this.

- Gloss is a process setting as much as a material property, so the same spool can produce very different finishes on two printers.
- Any change in outer wall speed across a model produces visible bands of alternating gloss.
- Thick layers leave larger steps on curved surfaces, which scatter light and reduce the silk effect.
- Wet filament produces steam bubbles and a rough, dull surface, so drying matters for appearance as well as strength.

## Properties

The values below come from published manufacturer data for Bambu Lab PLA Silk+, eSUN PLA-Silk, Polymaker Panchroma Silk PLA and SUNLU Silk PLA+. They show the range across the class rather than a single formulation.

| Property | Typical range | Published examples | Notes |
| :--- | :--- | :--- | :--- |
| Density | 1.21–1.27 g/cm³ | eSUN 1.21, Polymaker 1.24, SUNLU 1.23, Bambu 1.27 | Close to standard PLA |
| Glass transition temperature | About 57 °C | Bambu 57 °C by DSC | PLA grades soften in this region |
| Melting temperature | 158–164 °C | Bambu 158 °C, SUNLU 164 °C | Measured by DSC |
| HDT at 0.45 MPa | 50–60 °C | eSUN 50 °C, SUNLU 57 °C, Bambu 60 °C | A deflection test, not a service limit |
| Vicat softening temperature | 54–66 °C | SUNLU 54 °C, Polymaker 62 °C, Bambu 66 °C | Depends on the blend and test load |
| Tensile strength, XY | 31–50 MPa | Polymaker 31.1, eSUN 32.5, Bambu 33, SUNLU 50 | Brand-dependent |
| Tensile strength, Z | 16.7–25 MPa | Polymaker 16.7, eSUN 17.4, Bambu 25 | Always below XY |
| Elongation at break, XY | 2.8–11.7% | Bambu 2.8%, SUNLU 11%, eSUN 11.65% | The widest spread in the data set |
| Elongation at break, Z | 1.5–1.8% | Bambu 1.5%, eSUN 1.84% | Very limited ductility across layers |
| Flexural strength, XY | 44–78 MPa | eSUN 44.4, Bambu 75, SUNLU 78 | Measured by ISO 178 or GB/T 9341 |
| Young's modulus, XY | 1.9–2.2 GPa | eSUN 1917 MPa, Polymaker 2246 MPa, Bambu 2130 MPa | Measured by ISO 527 |
| Impact strength | About 3–19 kJ/m² | eSUN 2.93 (Izod), Polymaker 6.7 (Charpy), Bambu 18.5 (Charpy, unnotched) | Test methods differ, so compare only like with like |

HDT at 0.45 MPa is 50–60 °C, but HDT is a deflection temperature under a defined load, not a continuous service limit. A decorative part that must hold its shape should be kept below about 50 °C, and a part under load should be kept cooler still. Bambu's glass transition temperature of 57 °C explains why the material softens in the high 50s even when the HDT looks slightly higher.

Tensile strength in the XY plane ranges from about 31 to 50 MPa. Z strength is lower in every data set, from about 17 to 25 MPa, which is roughly half to three quarters of the XY value. Independent layer-adhesion testing by MyTechFun found 13 kg for eSUN silk against 42.5 kg for eSUN PLA+ on the same test geometry. That is a much larger penalty than the tensile figures alone suggest, and it is the number that matters for a part that will be handled or flexed.

Elongation at break is the property most often misquoted for this material. In the XY direction, published values run from 2.8 percent for Bambu PLA Silk+ to 11.65 percent for eSUN PLA-Silk. In the Z direction they fall to about 1.5 to 1.8 percent. A single "typical" elongation figure is meaningless for the class, so use the value for the spool you actually bought.

Impact strength ranges from about 3 to 19 kJ/m², but the tests differ in method and in whether the specimen is notched. Compare only values measured the same way. The broad picture is that silk PLA is less tough than standard PLA and much less tough than a toughened PLA+.

## Printing on the Snapmaker U1

### Nozzle and hotend choice

The stock 0.4 mm stainless steel hotend is the right default. It is an integrated unit, so changing to a different nozzle diameter means fitting a complete hotend rather than swapping only the nozzle. Silk PLA is not strongly abrasive because the metallic look comes from pigments rather than metal powder, so hardened steel is optional. The official hardened steel 0.4 mm hotend also works and may need a small temperature increase of about 5 °C.

A 0.2 mm nozzle is possible, but it is more prone to clogging with a soft, pigment-loaded blend. Bambu Lab lists 0.2 mm as compatible for its silk filaments but recommends 0.4 mm. On the U1, a 0.2 mm nozzle means fitting the official hardened steel 0.2 mm hotend, because the stock stainless hotend is supplied only in 0.4 mm.

Bambu Lab does not recommend 0.6 mm or 0.8 mm nozzles for its silk filaments. They can be used for large spiral vases, but the layers become more visible and the gloss is less even. If a wide nozzle is the priority, expect a coarser surface rather than a better silk effect.

### Nozzle temperature

The manufacturer windows overlap between about 210 and 220 °C, and most brands allow up to 230 °C. A sensible starting point on the U1 is 225 °C, with 230–235 °C for maximum gloss and 210–215 °C for a spool that strings badly, accepting slightly weaker layers in exchange for less ooze. Bambu Lab allows up to 240 °C. Below about 205 °C the surface often looks matte and layer bonding suffers, so the bottom of a generic PLA window is not a good silk setting.

### Bed temperature and build plate

Use 45–55 °C as a general starting point, and follow the spool's data sheet where it differs. Bambu Lab specifies 35–45 °C for PLA Silk+, eSUN specifies 45–60 °C and SUNLU specifies 50–60 °C. On a smooth or textured PEI plate, 50 °C is a good compromise for most spools. Silk PLA adheres well, so a brim is rarely needed. Let the plate cool below about 35 °C before flexing thin parts, because the blend is more flexible than standard PLA and thin features can distort when pried off warm.

### Chamber temperature

Silk PLA does not need a heated chamber, and the U1 cannot provide a useful one for this material. Print at ambient temperature with the Top Cover off or open. Do not run the Panda Breath. A chamber above about 40 °C reduces the margin against heat creep and can soften filament in the feeder on long prints. The U1's optional Top Cover can reach about 50 °C. Even with community firmware that can control the Panda Breath, there is no benefit for silk PLA.

### Cooling, speed and flow

Part cooling at 100 percent after the first layer is a safe starting point for overhangs. Gloss is sensitive to cooling, so if a test print looks dull, compare 60, 80 and 100 percent before changing the nozzle temperature.

Set the outer wall to 40–60 mm/s and hold it constant. In OrcaSlicer, enable "Don't slow down outer walls" so that minimum layer time does not slow the perimeter on small layers. Check the speed preview for places where the outer wall accelerates, because those places will show as dull patches.

Inner walls and infill can run faster, but cap volumetric flow at about 10–12 mm³/s to start. The U1's 32 mm³/s figure is a hotend limit measured with Snapmaker ABS at 280 °C, not a silk PLA setting. Raise the cap only after a flow test and a visual check of the surface.

Use a layer height of 0.12–0.20 mm with a 0.4 mm nozzle. Bambu Lab also recommends a lower layer height and an Archimedean spiral top surface for better gloss on top faces. Both changes reduce the size of the steps that scatter light.

### Retraction and pressure advance

Start with a retraction length of 0.5–0.8 mm at 25–40 mm/s. Bambu Lab's data sheet allows 0.6–1.0 mm. Silk blends ooze more than standard PLA, so a slightly longer retraction can help, but beyond about 1 mm there is a risk of pulling softened filament into the heat break.

Pressure advance around 0.03 is a reasonable starting value. Tune it with a pressure advance tower, because the soft phase changes the melt's response to pressure.

### Drying and storage

Dry silk PLA at 50–55 °C for 6–8 hours. Published recommendations are 55 °C for 8 hours from Bambu Lab, 55 °C for 6 hours from Polymaker, 50 °C for 7 hours from Overture and 50 °C from SUNLU. A common claim that silk PLA must never exceed 50 °C is too strict, because 55 °C is a published manufacturer setting. Do not exceed about 60 °C, because Vicat softening points range from 54 to 66 °C and a spool can deform or weld to itself.

Store the spool sealed below 20 percent relative humidity with fresh desiccant. The SnapDryer's lowest power level is the appropriate one for PLA; do not use its highest setting.

## Limits and failure modes

### Layer adhesion

Layer adhesion is the defining weakness of silk PLA. The published Z strengths are lower than XY, and the independent layer-adhesion test is lower still. Design around this limitation by using more perimeters, wider extrusion and a higher nozzle temperature within the recommended range. Reduce part cooling on non-overhang walls if strength matters more than appearance. Do not use silk PLA for press-fit joints, threads, snap fits or parts that see tensile load across layers.

### Heat creep and feeder deformation

The blend softens at 54–66 °C and is more compliant than ordinary PLA, so it deforms under feeder tension and is more prone to heat creep. Keep the cold end cool, leave the chamber open and avoid long pauses with the filament sitting hot in the hotend. If the feeder starts clicking on a long print, check the spool tension and the heat break before changing slicer settings.

### Stringing and ooze

Silk PLA strings more than standard PLA. Dry the spool first, because moisture is the most common cause. Then increase retraction slightly and lower the nozzle temperature by 5 °C if layer bonding remains acceptable. A prime tower or a wipe sequence helps on multi-toolhead prints, but it does not eliminate ooze.

### Gloss banding

Visible matte and glossy bands come from speed changes, not from inconsistent pigment. Fix the outer wall speed, enable "Don't slow down outer walls" and use the same speed on every visible wall. A scarf joint can hide the Z seam, but it changes local flow, so test it on a small part before applying it to a large model.

### Overhangs and bridging

The soft blend sags and curls more than standard PLA. Slow down overhangs, keep cooling high and orient the model so the display face is vertical. Bambu Lab recommends printing the key display surface upright, because laying a curved face flat makes the layer steps more visible.

### Seams, ironing and fuzzy skin

Ironing can flatten the sheen, so test concentric ironing at low flow before using it on a whole model. Fuzzy skin scatters light and destroys the silk effect entirely. A scarf joint is usually a better way to hide the seam than texturing the surface.

### Annealing

Do not anneal display pieces. The gain in heat resistance is small, and the risk of warping and loss of gloss is high. Bambu Lab's data sheet notes that annealing can deform prints, and the effect depends on the model's size, structure and infill.

## Multi-colour work on the U1

There are two routes to a multi-colour silk print.

The first is co-extruded dual-colour or tri-colour silk on a single spool. The strand contains two or three coloured streams side by side, and they do not mix in the hotend. The colour of a face therefore depends on which side of the strand faces outward. The cross-section can be oval, and the strand can rotate in the feed path. Bambu Lab warns that this may cause uneven colour transitions. On the U1, keep the path from spool to toolhead as straight as possible and avoid sharp bends.

The second is four separate toolheads loaded with four solid silk colours. This is more predictable than co-extruded filament because you assign a colour to each feature, and it avoids the oval-strand rotation problem. A prime tower or a wipe sequence is still required. The toolchanger gives each material its own melt zone, so there is no cross-contamination between materials, but it does not eliminate ooze.

For supports, PETG works as a zero-gap interface on PLA because the two materials do not bond. PVA also works, but it is expensive, hygroscopic and needs its own drying. A same-material silk support can tear the surface when removed, especially where the Z layers are weak.

## Post-processing

Do not sand a visible silk surface. Sanding cuts through the smooth skin and exposes a duller interior that cannot be polished back.

Remove stringing with tweezers or a sharp blade. A very brief pass with a heat gun can shrink hairs, but too much heat dulls the sheen and distorts thin walls, so practise on a scrap print first.

A clear gloss coat deepens the metallic look and protects the surface against handling. Solvent-based clear coats need ventilation, and they should be tested on a scrap print because some solvents attack PLA.

Cyanoacrylate glue works well for assembly. Avoid solvent cements that soften PLA.

PLA is one of the lower-emission filaments, but it still releases ultrafine particles and volatile organic compounds. Print in a ventilated room. If you sand or cut the material, wear a dust mask, because pigments and mica are fine particulates.

## Real demo models printed in silk PLA

| Model | Platform | Why it is a useful silk test |
| :--- | :--- | :--- |
| [Tortile vase, dual silk PLA](https://makerworld.com/en/models/49273-tortile-vase-dual-silk-pla) | MakerWorld | The designer printed it in black and gold dual silk PLA with a 0.6 mm wall; the twisting ribs exaggerate both the colour shift and the gloss. |
| [Intertwisted Vase, 2025 update](https://makerworld.com/en/models/33188-intertwisted-vase-2025-update) | MakerWorld | The designer used eSUN PLA-Silk Magic at 0.6 mm line width and 0.1 mm layers in vase mode, which makes it a good test of gloss consistency over a tall spiral. |
| [Articulated Lizard, print in place](https://www.printables.com/model/1753555-articulated-lizard-print-in-place-no-supports) | Printables | The smooth skin is intended to show off silk and dual-colour filament, and the print-in-place joints test stringing and clearance at the same time. |
| [Low-Poly Geometric Planter](https://www.printables.com/model/1752037-low-poly-geometric-planter) | Printables | It is designed for dual-colour silk PLA, and the sharp facets catch light at different angles. |
| [Silk Color Direction Test](https://www.printables.com/model/1251962-silk-color-direction-test) | Printables | This small calibration model shows which face of a dual-colour strand appears on which side of the print. Print it before committing to a large dual-colour piece. |

## Videos

1. [Snapmaker, "U1 Video Guide: Silk Dual-Color PLA Printing"](https://www.youtube.com/watch?v=GXea-cDTfFA). This is Snapmaker's own guide to printing dual-colour silk PLA on the U1.
2. [CNC Kitchen, "2 Colors in 1 - Unique Co-Extrusion Filament!"](https://www.youtube.com/watch?v=Y5EC_qRTojE). The video explains how co-extruded two-colour filament works and why the colours stay separate through a standard hotend.
3. [MyTechFun, "Testing eSun PLA filaments: PLA-ST vs PLA+ vs Silk PLA"](https://www.youtube.com/watch?v=uDXgE7os0Pg). The tests cover tensile strength, layer adhesion, shear, bending, twist, impact and temperature resistance. The layer-adhesion result is the most useful number for silk PLA.
4. [MyTechFun, "Testing all BambuLab PLA filament types"](https://www.youtube.com/watch?v=BbbquNH5NFA). The comparison includes Bambu PLA Silk alongside Basic, Matte, Tough, CF, Glow, Marble, Metal and Sparkle, with layer adhesion and hook tests.
5. [MyTechFun, "Testing Silk Gold and Marble PLA filaments by AzureFilm"](https://www.youtube.com/watch?v=QfceCA_ayYw). The presenter prints a Benchy, a cube, a ring, a trophy and coins in silk gold, then runs tensile and impact tests.
6. [3D Horizons, "How to get amazing quality prints with Silk PLA"](https://www.youtube.com/watch?v=vW8nZ4du9yY). A practical guide to improving the surface quality of silk PLA prints.

## Where to buy silk PLA

The table lists ten brands with live product pages. Stock and colour availability change, so a working page is not a guarantee that every colour is in stock. Prices are approximate US prices seen in October 2026 and exclude shipping.

| Brand | Product line | Listing notes | Approx. price | Store |
| :--- | :--- | :--- | :--- | :--- |
| Bambu Lab | PLA Silk+ and PLA Silk Multi-Color | 210–240 °C, bed 35–45 °C, 55 °C for 8 hours; best gloss at about 50 mm/s outer wall | About $19–25/kg | [Silk+](https://us.store.bambulab.com/products/pla-silk-upgrade) / [Multi-Color](https://us.store.bambulab.com/products/pla-silk-multi-color) |
| Polymaker | Panchroma Silk PLA | 190–230 °C, bed 25–60 °C, 55 °C for 6 hours; up to 250 mm/s | $19.99/kg | [Polymaker US](https://us.polymaker.com/products/polylite-silk-pla) |
| eSUN | PLA-Silk | 190–230 °C, bed 45–60 °C; HDT 50 °C; slow the outer wall for gloss | About $17–22/kg | [eSUN](https://www.esun3d.com/esilk-pla-product) |
| SUNLU | Silk PLA+ | 210–230 °C, bed 50–60 °C, 50 °C drying; HDT 57 °C | About $13–15/kg | [SUNLU](https://www.sunlu.com/products/silk-pla-plus-filament) |
| Overture | Silk PLA | 200–220 °C, bed 50–60 °C, 30–70 mm/s, 50 °C for 7 hours | About $19/kg | [Overture](https://overture3d.com/products/overture-silk-pla-3d-printer-filament-1-75mm) |
| Elegoo | Silk PLA | 190–230 °C, bed 35–65 °C; dry before printing | $18.99/kg | [Elegoo US](https://us.elegoo.com/products/elegoo-silk-pla-filament-1-75mm-colored-1kg) |
| Amolen | Silk PLA, including dual and tri-colour | Metallic and multi-colour silk; check the spool label for the temperature range | About $23–33/kg | [Amolen](https://www.amolen.com/collections/silk-pla) |
| ERYONE | Silk PLA and Ultra Silk | Metallic and multi-colour silk; check the product page for the specific colour | Varies by colour | [ERYONE](https://eryone3d.com/collections/silk-pla) |
| Creality | CR-Silk | Shiny silk finish in metallic and rainbow colours | About $16–20/kg | [Creality US](https://us.store.creality.com/products/cr-silk-1-75mm-pla-3d-printing-filament-1kg) |
| Anycubic | PLA Silk | 210–240 °C, bed 55–65 °C; dry before printing | $19.99/kg | [Anycubic](https://store.anycubic.com/products/silk-pla-filament) |

## Related notes

- [[00 - Filament Master Index]]
- [[01 - PLA (Polylactic Acid - Standard, High-Speed, and Tough PLA+)]]
- [[03 - Matte and Aesthetic Filled PLA (Matte, Wood, Marble, Glow-in-the-Dark, Sparkle PLA)]]
- [[09 - TPU and TPE (Thermoplastic Polyurethane and Thermoplastic Elastomer - 95A, 85A, High-Speed TPU, Foaming LW-TPU)]]
- [[05 - PETG (Polyethylene Terephthalate Glycol-Modified)]]
- [[22 - Water-Soluble and Chemical-Soluble Support Filaments (PVA Polyvinyl Alcohol, BVOH Butenediol Vinyl Alcohol Copolymer, HIPS High Impact Polystyrene)]]
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

## Sources

- [Bambu Lab, "Bambu PLA Silk / Silk+ Filament Printing Guide"](https://wiki.bambulab.com/en/x1/manual/printing-with-silk-filaments). Used for the gloss mechanism, outer wall speed, drying, nozzle compatibility and dual-colour strand behaviour.
- [Bambu Lab, PLA Silk+ Technical Data Sheet](https://cdn.shopify.com/s/files/1/0584/7236/6216/files/Bambu_PLA_Silk__Technical_Data_Sheet.pdf). Used for the mechanical, thermal and printing data.
- [Polymaker, Panchroma Silk PLA wiki](https://wiki.polymaker.com/polymaker-products/polymaker-filaments/panchroma-tm/panchroma-tm-silk-pla). Used for print settings and drying.
- [Polymaker, Panchroma Silk PLA product page](https://us.polymaker.com/products/polylite-silk-pla). Used for availability and price.
- [eSUN, PLA-Silk product page](https://www.esun3d.com/esilk-pla-product). Used for mechanical properties, HDT and print settings.
- [SUNLU, Silk PLA+ product page](https://www.sunlu.com/products/silk-pla-plus-filament). Used for mechanical properties, HDT, drying and print settings.
- [Overture, Silk PLA product page](https://overture3d.com/products/overture-silk-pla-3d-printer-filament-1-75mm). Used for print settings, drying and the temperature and speed advice.
- [Elegoo, Silk PLA product page](https://us.elegoo.com/products/elegoo-silk-pla-filament-1-75mm-colored-1kg). Used for availability and price.
- [MyTechFun, "Testing eSun PLA filaments: PLA-ST vs PLA+ vs Silk PLA"](https://www.mytechfun.com/video/99). Used for the independent layer-adhesion comparison.
- [Snapmaker, SnapDryer by Polymaker](https://shop.snapmaker.com/products/snapdryer-by-polymaker). Used for the dryer's power levels and supported materials.
