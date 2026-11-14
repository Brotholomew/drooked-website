---
title: "08 - Surface Smoothing Slicer Techniques - Ironing and Beyond"
tags:
  - 3d-printing
  - filaments
  - ironing
  - scarf-seam
  - fuzzy-skin
  - multi-material-supports
  - brick-layers
  - orcaslicer
  - snapmaker-u1
---

| Scope | Key numbers | What it is good for | Additional notes |
| :--- | :--- | :--- | :--- |
| **Ironing** | A second pass at the same Z height, 10–35 % of normal flow, 0.10–0.15 mm line spacing with a 0.4 mm nozzle | Flat horizontal tops on nameplates, badges, boxes, jigs, and faces that will be glued | Adds roughly 10–20 % print time on blocky parts and much more on short parts. It does nothing useful on slopes, domes, or organic shapes. |
| **Scarf joint seams** | Scarf length about 20 mm, 10 steps, speed below 100 mm/s, conditional angle threshold 155° | Cylinders, bottles, fillets, and organic surfaces that offer no corner in which to hide a seam | Pressure advance and flow ratio must be calibrated first. Scarf joints are never applied to the first layer or in vase mode. |
| **Fuzzy skin** | Point distance 0.3–0.8 mm with thickness 0.25–0.4 mm for a coarse grip; 0.10–0.15 mm with 0.06–0.10 mm for a fine texture | Grip panels, tool handles, and cosmetic parts where layer lines and vertical fine artifacts should be broken up | The texture grows the outer wall by the thickness value, so mask bores, threads, and mating faces with the paint tool. |
| **Adaptive layer height** | About 0.24 mm on near-vertical walls down to 0.08 mm on shallow curves with a 0.4 mm nozzle | Domes, spheres, and organic fillets where a fixed layer height leaves visible stair steps | Check the preview after applying it, because the layer schedule changes for the whole plate. |
| **Zero-gap support interfaces** | Top and bottom Z distance 0.00 mm, interface spacing 0.00 mm, XY distance 0.35–0.50 mm | Scar-free undersides on the Snapmaker U1 toolchanger | It only works with a genuinely non-bonding pair such as PLA and PETG. A prime tower or wipe sequence is still required. |
| **Brick layers and non-planar ironing** | About +14 % Z strength for PLA and +10 % for PETG at 0.25 mm layers; best results with tall layers | Functional parts that are loaded across layer lines, and shallow curved top surfaces | Brick layers come from a post-processing or experimental workflow rather than stock OrcaSlicer. Non-planar ironing is experimental. |

> [!abstract] Core principle
> Before you reach for sandpaper, filler primer, or a solvent ([[09 - Post-Processing - Matte, Shiny, and Surface Finishing]]), the slicer can remove or disguise the three visual signatures of fused deposition modeling (FDM) printing directly on the build plate. Top surface extrusion ridges are reduced by ironing combined with monotonic top surface ordering. Vertical seams are reduced by scarf joints and fuzzy skin, and layer stepping is reduced by adaptive layer height. Scarred undersides above supports are eliminated by zero-gap multi-material support interfaces, which the Snapmaker U1 can print because each material has its own toolhead.

The techniques in this note change the surface, not the material. None of them increases strength across the layer boundaries except brick layers, and none of them replaces proper drying, flow calibration, or pressure advance tuning.

---

## 1. Ironing

### 1.1 How ironing works

A correctly calibrated top solid layer still shows shallow ridges and valleys wherever two extrusion beads meet. Ironing adds a second pass over flat, horizontal top surfaces at the same Z height as the layer just printed, so the nozzle does not step upward at all.

Two things happen during that pass. First, the flat annular face around the nozzle orifice acts like a small heated iron and presses down on the crests of the ridges. The polymer is already close to its extrusion temperature, so the combination of contact heat and pressure remelts and flattens the high points. Second, the extruder continues to push a small amount of molten polymer, typically 10–35 % of the normal top layer flow, into the valleys between the beads. The ironing lines are spaced closer together than the nozzle diameter, so the nozzle crosses the same patch of surface several times and the valleys are progressively filled.

The result is a flat, slightly satin surface in which the individual bead boundaries are much less visible. It is not a mirror finish and it does not hide layer stepping, because the technique only acts on surfaces that are already horizontal.

Three conditions make the difference between a good result and a mess:

- **The top surface must be flat and horizontal.** Even a few degrees of slope can lift part of the ironing path off the plastic.
- **The base flow must be correct.** If the top layer is over-extruded, ironing pushes the excess to the edges and leaves a raised lip. If it is under-extruded, the ironing pass cannot fill the gaps it exposes.
- **The top shell must be thick enough.** Two or three top layers over sparse infill sag between the infill lines, and the nozzle then skips across the low spots and plows into the high ones. Use at least five top solid layers, about 1.0 mm of top shell, and 15–20 % infill when you intend to iron.

### 1.2 OrcaSlicer ironing settings

| OrcaSlicer setting | Starting point | What it does and how to tune it |
| :--- | :--- | :--- |
| **Ironing type** | `All top surfaces` | Irons the top layer of every flat area. `Topmost surface only` irons just the last layer of the object, which suits a single badge face. `All solid layers` also irons internal solid infill and costs a great deal of time. |
| **Ironing pattern** | `Rectilinear` | Runs straight lines across the surface and gives even coverage on most shapes. `Concentric` follows the outline inward and suits round or radially symmetric parts, but it works on any shape and can leave a visible direction change where the paths turn. |
| **Ironing flow** | 15–25 % for PLA and matte PLA; 10–18 % for PETG; 20–30 % for ABS and ASA | This is a percentage of the normal layer flow. Below about 10 % the troughs remain visible. Above about 35 % the nozzle pushes a wave of plastic to the perimeter. Stay inside the 10–35 % range and tune in 3 % steps. |
| **Ironing line spacing** | 0.10–0.15 mm with a 0.4 mm nozzle | Spacing must be well under the nozzle diameter so that consecutive passes overlap. OrcaSlicer recommends a value equal to or smaller than the nozzle diameter. Wider spacing speeds the job up and leaves faint stripes. |
| **Ironing inset** | `0` | A value of zero makes OrcaSlicer inset the ironing path by half the nozzle diameter, which is 0.20 mm on a 0.4 mm nozzle. This keeps the path inside the top surface so plastic does not bleed over the edge and leave a burr. Some profiles list 0.21 mm instead; the difference has no practical effect. |
| **Ironing angle offset** | 45° | The offset is measured from the top solid infill direction. OrcaSlicer documents 0°, 45°, and 90° as the common choices. PrusaSlicer uses a fixed 45° to the top infill because Kisslicer's author found that this produced better results than a perpendicular pass, so 45° is the safest starting point. The `Fixed angle` option uses the value as an absolute angle and can reduce the tiger-stripe reflection that appears when the ironing direction alternates. |
| **Ironing speed** | 30–60 mm/s for PLA, ABS, and ASA; 20–35 mm/s for PETG | These are community starting points rather than manufacturer values, so treat them as a range to test. Faster passes shorten the dwell time and reduce heat creep, while slower passes transfer more heat and can over-soften the surface. |
| **Top surface pattern** | `Monotonic line` | This is a prerequisite rather than an ironing setting. Monotonic ordering makes every top layer line run in the same direction, so there are no ridge seams where islands meet. |

OrcaSlicer warns that ironing moves filament through the hotend very slowly, which raises the risk of heat creep and clogging. This matters most with PLA on a long ironing job in a warm room. If your hotend cooling is marginal, reduce the ironed area or lower the ironing flow rather than increasing the speed blindly.

### 1.3 Where ironing helps and where it does not

| Situation | Verdict | What actually happens |
| :--- | :--- | :--- |
| **Flat tops in [[01 - PLA (Polylactic Acid - Standard, High-Speed, and Tough PLA+)\|PLA]], [[03 - Matte and Aesthetic Filled PLA (Matte, Wood, Marble, Glow-in-the-Dark, Sparkle PLA)\|matte PLA]], [[07 - ABS (Acrylonitrile Butadiene Styrene)\|ABS]], and [[08 - ASA (Acrylonitrile Styrene Acrylate)\|ASA]]** | Very good | The ridges flatten into a dense satin surface and the bead lines become faint. Prusa Research reports that ASA irons particularly well. |
| **Flat tops in [[02 - Silk PLA (Elastomer-Modified High-Gloss Polylactic Acid Blend)\|silk PLA]]** | Works, but changes the look | Silk PLA gets its gloss from an elastomer additive that leaves the surface reflective and slightly metallic. Ironing remelts that surface and leaves it visibly more matte, so the ironed patch no longer matches the rest of the print. Iron the whole visible face or none of it. |
| **Flat tops in [[05 - PETG (Polyethylene Terephthalate Glycol-Modified)\|PETG]] and [[06 - PCTG (Polycyclohexylenedimethylene Terephthalate Glycol-Modified)\|PCTG]]** | Good with tuning | PETG irons acceptably, but it is sticky and tends to accumulate on the nozzle face. The deposit darkens as it overheats and eventually lands on the print. Keep the flow at the low end, verify that the base flow is not over-extruding, and clean the nozzle before the job. A coated or hardened nozzle helps mainly with wear, not with sticking. |
| **Curved, domed, or sloped tops** | No useful effect | Planar ironing only touches surfaces that are already horizontal. On a dome or a shallow slope it acts on the small flat terraces and leaves the staircase intact. Prusa Research states that ironing has little or no effect on non-flat surfaces and mainly adds print time; it does not ruin the part. Some users find that the changed sheen makes the terraces easier to see under grazing light, but the geometry is unchanged. Use adaptive layer height instead. |
| **Flexible filaments ([[09 - TPU and TPE (Thermoplastic Polyurethane and Thermoplastic Elastomer - 95A, 85A, High-Speed TPU, Foaming LW-TPU)\|TPU and TPE]])** | Fails | The rubbery surface grips the nozzle, and the nozzle drags and tears it instead of smoothing it. Nozzle accumulation is worse than with PETG. |
| **Fiber-filled filaments ([[12 - Carbon Fiber and Glass Fiber Reinforced Composites (PLA-CF, PETG-CF, ABS-GF, ASA-CF, PA-CF, PAHT-CF, PC-CF)\|CF and GF composites]])** | Fails and wears the nozzle | Chopped carbon and glass fibers do not remelt, so the nozzle cannot flatten them. Dragging the flat face across the surface can snag fibers out of the matrix and leave a chalky, scratched finish. Abrasion also wears nozzles, which is one reason fiber-filled materials call for a hardened steel hotend. |
| **Thin top shells over sparse infill (pillowing)** | Fails | The skin sags between infill lines, so the ironing pass rides the high spots and misses the hollows. Fix the shell thickness and infill density before changing any ironing value. |

Ironing also softens the top perimeter slightly, because the nozzle is wider than the ironing extrusion and a little plastic bleeds over the edge. Prusa Research notes that edges end up a little less sharp, which matters on parts that must fit closely into another part.

---

## 2. Techniques beyond ironing

### 2.1 Scarf joint seams

On cylinders, bottles, and organic curves there is no sharp corner in which to hide a normal seam, so the start and end of each perimeter loop leave a visible vertical line of bumps or dimples. A scarf joint spreads that discontinuity over a slope instead of a point.

OrcaSlicer ramps the Z height and the extrusion rate together over the scarf length at the start of the loop, and ramps them back down over a matching length at the end. The two wedge-shaped ramps overlap, so the layer thickness changes gradually and the seam is distributed across tens of millimeters of wall.

The settings that matter are:

- **Scarf joint seam type:** `Contour` covers the outer wall of the outline, while `Contour and hole` also covers the walls of holes. Start with `Contour`.
- **Conditional scarf joint:** Enabling this applies scarf joints only to smooth perimeters. The default angle threshold is 155°, so a corner sharper than that keeps a standard seam, as does a seam whose overhang exceeds the conditional overhang threshold, which defaults to 40 % of the wall width.
- **Scarf length:** The OrcaSlicer default is 20 mm, and 15–20 mm is a reasonable working range. Shorter ramps hide less of the seam; longer ramps take more time and can smear the transition on small parts.
- **Scarf steps:** The default of 10 is enough in most cases. Increase it only if the transition looks stepped in the preview.
- **Scarf joint speed:** OrcaSlicer recommends staying below 100 mm/s, because the extruder has to follow a continuously changing flow target.
- **Scarf joint flow ratio:** Leave this at 1 unless you have a specific under-extrusion problem, in which case fix the flow calibration first.
- **Pressure advance and flow ratio:** Calibrate both before you evaluate a scarf seam. An uncalibrated pressure advance leaves a bulge or a gap exactly at the transition.

Scarf joints are never applied to the first layer, in spiral vase mode, or on belt printers, and they are much less effective on sharp corners and overhangs. See [[07 - Print Speeds and Volumetric Flow]] for the pressure advance procedure.

### 2.2 Fuzzy skin

Fuzzy skin deliberately oscillates the nozzle perpendicular to the outer wall by a pseudo-random distance. Two parameters control the texture: the point distance, which sets how often the direction changes, and the thickness, which sets how far the wall deviates.

A coarse setting with a point distance of 0.3–0.8 mm and a thickness of 0.25–0.4 mm produces a knurled grip or a cast-iron texture. A fine setting with a point distance of 0.10–0.15 mm and a thickness of 0.06–0.10 mm produces a light, sandblasted look. The fine texture breaks up the regular horizontal bands that make layer lines and vertical fine artifacts (VFAs) obvious, but it does not remove them; it scatters them into a random pattern that the eye reads as a deliberate finish.

Two practical consequences follow. The texture adds the thickness value to the outside of the part on every wall, so a 0.3 mm thickness makes a nominal 20.00 mm boss about 20.60 mm across unless you compensate. It also adds a large amount of path length, so print time rises sharply as the point distance falls.

OrcaSlicer's fuzzy skin paint tool, or a modifier mesh, lets you apply the texture only to grip panels and cosmetic faces while keeping bearing bores, threads, and mating surfaces smooth.

### 2.3 Adaptive layer height

On a dome or an organic fillet, a fixed layer height produces wide horizontal terraces. The horizontal width of each step is the layer height divided by the tangent of the surface angle, so the step width grows quickly as the surface approaches horizontal. This geometry is covered in [[05 - Layer Height and Nozzle Size]].

Adaptive layer height varies the layer height within the object. Thick layers are used where the walls are close to vertical and the steps are narrow, and thin layers are used where the surface is shallow and the steps would otherwise be wide. A typical setup for a 0.4 mm nozzle runs from about 0.24 mm on vertical walls down to 0.08 mm on shallow curves, with two or three smoothing passes so the transitions are gradual.

Apply it per object, then inspect the preview. The layer schedule changes for the whole plate, so every object and any prime tower must remain compatible with the new heights. Adaptive layer height also slightly changes the volumetric flow at each height, so a profile that is already at the flow limit may need a small speed reduction.

### 2.4 Wall ordering

The order in which the perimeters of a layer are printed changes both the surface finish and the overhang behavior.

- **Inner/Outer/Inner** prints one inner wall, then the outer wall, then the remaining inner walls. The outer wall is printed against a neighboring inner wall, and the last inner wall is then printed against its inside face, so the visible surface is less affected by over-extrusion from the wall behind it. This is the usual choice for three or more walls and gives the most consistent outer surface.
- **Inner/Outer** prints the inner walls first and the outer wall last. The outer wall has a solid neighbor to bond to on every pass, which helps on steep overhangs, but any over-extrusion in the inner walls can show through as a bulge on the outside.
- **Outer/Inner** prints the outer wall first while the nozzle is freshly primed. It gives the crispest external dimensions on flat vertical faces, but it performs worst on overhangs above about 40°, because the outer wall has nothing beside it to hold it up.

### 2.5 Zero-gap multi-material support interfaces

A normal support interface leaves an air gap of one or two layer heights, so the underside of the part is rough and the support is easy to break away. A zero-gap interface removes that air gap and prints the part directly onto a solid interface roof. The underside then takes the texture of the interface material, which can be almost as smooth as a build plate. The method only works when the interface material does not bond to the model material.

> [!tip] Why the Snapmaker U1 suits this technique
> On a single-nozzle printer with a filament changer, a dissimilar support material means a filament swap and a purge at every layer where the interface material appears. That is usually just the interface band rather than the whole print, but each of those layers still costs a swap of roughly 30–60 seconds depending on the machine and the flush settings, and it wastes filament on every purge.
>
> The U1 has four independent toolheads, so a model material and an interface material sit in separate hotends and never share a melt zone. Cross-contamination inside the nozzle is therefore not a concern, and a tool change takes seconds rather than tens of seconds. Ooze is still real, so a prime tower or a wipe sequence remains necessary, and the parked toolhead should be clean and dry.

#### Which pairs actually release

The pair that works reliably is PLA against PETG. The two polymers are chemically dissimilar and do not weld, so a solid PETG interface under a PLA part, or the reverse, peels away with little force and leaves a clean surface. Bambu Lab documents this pairing for its own printers, and Tom Sanladerer's multi-material tests reached the same conclusion: PLA does not stick well to anything except itself, which is exactly what a zero-gap interface needs.

Styrenics behave differently. PETG bonds strongly to ABS and ASA. In Tom Sanladerer's tests, a PETG interface welded to an ABS or ASA part firmly enough that separating them damaged the part, and reversing the order produced a weaker bond that was still far too strong to release cleanly. PETG is therefore not a release interface for styrenics, even though it is often suggested as one.

For ABS and ASA, the practical options are HIPS or a dedicated breakaway support material. HIPS is a styrenic and does bond to ABS and ASA; it works as a support because it dissolves in d-limonene, not because it refuses to stick. That distinction matters when the interface is in a cavity that the solvent cannot reach. A dedicated breakaway compound, which is formulated to adhere weakly, is the better choice for inaccessible interfaces.

PLA under ABS or ASA does release reasonably well in tests, but the 100 °C bed that ABS needs is above the glass transition of PLA, so a PLA interface can soften during a long print. Treat it as a fallback for short interface runs rather than a default.

#### OrcaSlicer settings

1. Assign the model and the support base to one toolhead and the interface material to another. Printing the support base in the model material saves tool changes and keeps the support tower rigid.
2. Set `Top Z distance` and `Bottom Z distance` to **0.00 mm**.
3. Set `Top interface layers` to **2–3** layers and `Top interface spacing` to **0.00 mm**, which makes the interface solid.
4. Set the interface pattern to `Rectilinear` or `Concentric`. Rectilinear is the safer default; concentric follows the outline and can leave a gap at the center of wide areas.
5. Set `Support/object XY distance` to **0.35–0.50 mm** so the support body does not fuse to the vertical walls.
6. Leave `Don't support bridges` unchecked only if you want a support shelf under bridges as well. Otherwise enable it, because a bridge printed in air is usually cleaner than a bridge printed on a dissimilar material.

A zero-gap interface is unforgiving in one respect: if the pair does bond, the part tears. Test the pair on a small L-shaped specimen before committing a long print.

| Model material (toolhead 1) | Interface material (toolhead 2) | Removal and caveats |
| :--- | :--- | :--- |
| [[01 - PLA (Polylactic Acid - Standard, High-Speed, and Tough PLA+)\|PLA]], matte PLA, or silk PLA | [[05 - PETG (Polyethylene Terephthalate Glycol-Modified)\|PETG]] | Peels off by hand and leaves a smooth underside. Dry the PETG, because wet PETG oozes onto the interface. |
| [[05 - PETG (Polyethylene Terephthalate Glycol-Modified)\|PETG]] or [[06 - PCTG (Polycyclohexylenedimethylene Terephthalate Glycol-Modified)\|PCTG]] | [[01 - PLA (Polylactic Acid - Standard, High-Speed, and Tough PLA+)\|PLA]] | Peels off cleanly. Keep the bed at about 60 °C so the PLA interface does not soften. |
| [[07 - ABS (Acrylonitrile Butadiene Styrene)\|ABS]] or [[08 - ASA (Acrylonitrile Styrene Acrylate)\|ASA]] | [[22 - Water-Soluble and Chemical-Soluble Support Filaments (PVA Polyvinyl Alcohol, BVOH Butenediol Vinyl Alcohol Copolymer, HIPS High Impact Polystyrene)\|HIPS]] or a dedicated breakaway support | HIPS dissolves in d-limonene, which is flammable, so keep the bath away from ignition sources and wear gloves. HIPS does bond to ABS and ASA, so it is a soluble support rather than a non-stick one. Do not use PETG here. |
| [[10 - PA (Polyamide - Nylon 6, Nylon 12, and Nylon 6-66 Copolymers)\|PA and PA-CF]] | A dedicated breakaway support, or BVOH for short interfaces | Nylon bonds to very little, so breakaway interfaces work well. BVOH and PVA must be kept extremely dry and dissolve in warm water. |

### 2.6 Brick layers and non-planar ironing

Brick layers reorder the print moves so that every other perimeter is offset vertically by half a layer height, in the same way that a mason staggers courses. The planar cleavage plane that normally runs across the whole part becomes a zig-zag, so a crack has to travel through more bonded surface.

The published measurements come from CNC Kitchen's 2024 tests at 0.25 mm layers with four perimeters and no infill. PLA rose from 944 N to 1072 N, an increase of about 14 %, and PETG rose by about 10 %. The same tests at 0.20 mm and 0.30 mm layers were inconsistent, possibly because of wet filament, and the differences there were not statistically significant. The technique therefore works best with tall layers, where the half-layer offset is a meaningful fraction of the bead height, and it should not be sold as a fixed percentage gain across all materials and layer heights.

Brick layers are not a stock OrcaSlicer feature. They come from a post-processing script, an experimental fork, or a separate slicing workflow. OrcaSlicer's `Staggered inner seams` option is a different and much smaller change: it moves the seam of each inner wall along the loop so that the seams do not all line up, which improves strength and water tightness but does not stagger whole perimeters.

Non-planar ironing is a research technique rather than a production setting. The toolpath moves X, Y, and Z together so that the nozzle follows a shallow curve and irons a dome instead of its terraces. It works only on shallow curvature, because the nozzle body and heater block collide with anything steeper, and it needs a slicer that supports Z-varying paths. Stock OrcaSlicer does not expose it as a normal option.

---

## 3. Applying these techniques to the Snapmaker U1

### 3.1 Nozzle sizes and multi-material jobs

The U1 ships with four 0.4 mm stainless steel hotends, each an integrated assembly in which the nozzle is not separately replaceable. Official hardened steel hotends are available in 0.2, 0.4, 0.6, and 0.8 mm, and they are sold as four-packs of a single diameter.

Snapmaker's official position is that different nozzle diameters cannot be used in the same print, so a plan that combines a 0.2 mm toolhead for fine detail with 0.4 mm and 0.6 mm toolheads for the body is not supported. OrcaSlicer 2.2 and later has a workaround based on percentage line widths and a shared layer height, and users have reported it working for a 0.4 mm and a 0.6 mm combination. That is a community workaround, not a stock capability, and it does not extend to a 0.2 mm nozzle.

For ironing, a small nozzle needs proportionally tighter spacing, but not arbitrarily tight. A 0.05 mm spacing on a 0.2 mm nozzle means many overlapping passes at a very low flow rate, which lengthens the dwell time and raises the risk of heat creep and clogging for no visible benefit. Around 0.10 mm, half the nozzle diameter, already gives roughly two overlapping passes per bead.

### 3.2 Drying and ooze

Dry PETG before a zero-gap job, and dry PLA as well if it has been exposed to humid air. Wet PETG foams and oozes while the toolhead waits on its dock, and a single string dragged across a zero-gap interface becomes a visible scar on the finished underside. See [[01 - Drying Filament]] and [[22 - Water-Soluble and Chemical-Soluble Support Filaments (PVA Polyvinyl Alcohol, BVOH Butenediol Vinyl Alcohol Copolymer, HIPS High Impact Polystyrene)|the soluble support note]] for drying schedules.

### 3.3 Chamber and bed temperature

The U1 has no stock chamber heater. The optional Top Cover provides passive chamber warming up to about 50 °C and adds filtration, which is useful for ABS and ASA emissions but must be vented or removed for long PLA prints.

A BIQU Panda Breath can raise the chamber further, but the stock firmware does not control it. It requires community firmware such as paxx12's Snapmaker U1 Extended Firmware in Panda Breath WebSocket mode, or DragonBreath, and active motherboard cooling is mandatory before any chamber heater is used, because the RK3562 begins thermal throttling at 85 °C. For a PLA and PETG job, leave any chamber heater off entirely.

When PLA and PETG are combined, the bed temperature has to suit both. Bambu Lab's mutual support guide uses 60 °C for both scenarios, which is a workable compromise on a smooth or textured PEI plate and stays well inside the U1's 100 °C limit. PLA is the more heat-sensitive of the two, so keep the chamber cool and watch the PLA toolhead for heat creep during long ironing passes. The relevant background is in [[06 - Heating and Temperatures - Nozzle, Bed, and Chamber]].

---

## Related notes

- [[04 - Nozzles and Their Types]]
- [[05 - Layer Height and Nozzle Size]]
- [[06 - Heating and Temperatures - Nozzle, Bed, and Chamber]]
- [[07 - Print Speeds and Volumetric Flow]]
- [[09 - Post-Processing - Matte, Shiny, and Surface Finishing]]
- [[10 - Common Printing Issues, Debugging, and Physical Limits]]
- [[01 - Drying Filament]]
- [[22 - Water-Soluble and Chemical-Soluble Support Filaments (PVA Polyvinyl Alcohol, BVOH Butenediol Vinyl Alcohol Copolymer, HIPS High Impact Polystyrene)]]

## Sources

All links were checked in October 2026.

1. [Ironing settings reference — OrcaSlicer Wiki](https://www.orcaslicer.com/wiki/print_settings/quality/quality_settings_ironing.html)
2. [Seam and scarf joint settings reference — OrcaSlicer Wiki](https://www.orcaslicer.com/wiki/print_settings/quality/quality_settings_seam.html)
3. [Guide to ironing: how to make top surfaces super smooth with PrusaSlicer — Prusa Research blog](https://blog.prusa3d.com/make-top-surfaces-super-smooth-ironing-prusaslicer-2-3-beta_41506/)
4. [Ironing — Prusa Knowledge Base](https://help.prusa3d.com/article/ironing_177488)
5. [Scarf seam settings to hide Z-seams — SpoolHound](https://spoolhound.com/seam-guide)
6. [Try these filament combinations for multi-material and supports — Tom's 3D](https://toms3d.org/2024/12/06/try-these-filament-combinations-for-multi-material-and-supports)
7. [Printing guide for using PLA Basic and PETG as mutual supports — Bambu Lab Wiki](https://wiki.bambulab.com/en/filament-acc/filament/h2d-pla-and-petg-mutual-support)
8. [Brick layers: make 3D prints stronger — CNC Kitchen](https://www.cnckitchen.com/blog/brick-layers-make-3d-prints-stronger)
9. [BrickLayers without the code — Minimal 3DP](https://minimal3dp.com/blog/3d-printing-bricklayers/)
10. [Brick Layer Slicing model files — Printables](https://www.printables.com/model/769028-brick-layer-slicing)

## Videos

1. [Guide to Ironing. How to make top surfaces smooth with PrusaSlicer — Prusa 3D](https://www.youtube.com/watch?v=xa8jNJjowvI)
2. [Master Ironing for Perfectly Smooth Top Layer 3D Prints! — Uncle Jessy](https://www.youtube.com/watch?v=zqJxxJwK8To)
3. [You're doing Ironing wrong: How to achieve ultra-smooth 3D printed top surfaces! — JanTec Engineering](https://www.youtube.com/watch?v=rVwqmRiioig)
4. [Eliminate seams in your 3D prints with scarf joint seams — Teaching Tech](https://www.youtube.com/watch?v=vl0FT339jfc)
5. [Best seam settings - hide them completely! 3DP101 — Maker's Muse](https://www.youtube.com/watch?v=V4c_ueUnP_Y)
6. [Hiding Seams in Orca Slicer with Scarf Joints — Fischer 3D](https://www.youtube.com/watch?v=TMmIN4UQzFc)
7. [Mastering fuzzy skin — Teaching Tech](https://www.youtube.com/watch?v=UpRy_-K3lq8)
8. [Try these filament combinations for Multi-Material and Supports! — Made with Layers](https://www.youtube.com/watch?v=5VV2fbJ0apg)
9. [Mixing PLA and PETG is the Best Thing We've Ever Done — Core Electronics](https://www.youtube.com/watch?v=hterSQceh28)
10. [Exploring Brick Layers in OrcaSlicer — CNC Kitchen](https://www.youtube.com/watch?v=dDgA51zdfLc)
11. [Super Smooth 3D Prints: Non-Planar Ironing on Every 3D Printer — JanTec Engineering](https://www.youtube.com/watch?v=VwKHgLqRezk)
