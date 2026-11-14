---
title: "05 - Layer Height and Nozzle Size"
tags:
  - 3d-printing
  - filaments
  - nozzle-size
  - layer-height
  - line-width
  - arachne
  - volumetric-flow
  - snapmaker-u1
---

| Scope | Key numbers | What it is good for | Additional notes |
| :--- | :--- | :--- | :--- |
| Layer height on the stock 0.4 mm hotend | 0.10–0.30 mm, with 0.20 mm as the general recommendation | Everyday functional and decorative parts | Snapmaker quotes 25–70% of the nozzle diameter. OrcaSlicer allows 0.08–0.32 mm as hard limits. |
| Layer height on the other hardened hotends | 0.05–0.12 mm for 0.2 mm, 0.15–0.45 mm for 0.6 mm, 0.20–0.60 mm for 0.8 mm | Fine detail, structural work and fast draft work respectively | Each diameter is sold as a four-pack, so a full set of four means four hotends of that one size. |
| Line width | 105–120% of the nozzle diameter for outer walls, and up to about 150% for maximum layer adhesion | Stronger walls and thicker perimeters without changing the nozzle | Surface artefacts begin at roughly 160%, so a 200% line width is not a clean setting. |
| Volumetric flow | Flow in mm³/s equals layer height × line width × print speed | Predicting the linear speed that a given layer height and line width can reach | The U1 hotend is rated at 32 mm³/s with Snapmaker ABS at 280 °C, and the real limit is lower for other materials. |
| Mixed nozzle diameters in one print | Not supported by Snapmaker | Nothing on stock firmware and stock slicer profiles | An OrcaSlicer 2.2 or newer workaround exists, but it needs a shared layer height, and 0.2 mm and 0.8 mm nozzles have no overlap at all. |

> [!abstract] Overview
> Layer height and nozzle diameter are linked, but they do different jobs. Nozzle diameter and line width set how wide each bead of plastic is, which governs wall thickness, corner sharpness and how much material is deposited per pass. Layer height sets how tall each layer is, which governs vertical detail and how many times the part is built up. Neither setting makes a part stronger on its own: strength follows the amount of material in the wall and the quality of the bond between layers. Thicker layers are faster and usually weaker, while wider lines add material and can improve bonding up to a point. This note explains the geometry, the practical limits for each nozzle size, and what the Snapmaker U1 can and cannot do with its four toolheads.

## The shape of an extruded bead

A nozzle does not lay down a cylinder. The flat ring around the orifice presses the molten bead against the layer below, so the bead spreads sideways into a shape with a rectangular middle and two rounded edges. Slicers model this as a stadium or discorectangle, and the cross-sectional area is:

$$A = (w - h)h + \pi\left(\frac{h}{2}\right)^2 = wh - h^2\left(1 - \frac{\pi}{4}\right)$$

Here $w$ is the line width and $h$ is the layer height, both in millimetres. The flat part of the bead has width $w - h$, and that width is what presses against the layer underneath. That contact patch is the reason layer height and line width cannot be chosen independently. A tall layer leaves very little flat contact, and a short layer leaves a wide one.

The slicer converts this area into extruder movement. The volume of plastic required per millimetre of travel is the cross-sectional area, which is close to $w \times h$, so the filament feed rate rises with both settings. This is the basis of the flow maths used by Slic3r, PrusaSlicer and OrcaSlicer.

## Layer height: how thick a layer can be

### The working range

Snapmaker publishes explicit recommendations for each U1 hotend: 0.05–0.12 mm for the 0.2 mm nozzle, 0.1–0.3 mm for the 0.4 mm nozzle, 0.15–0.45 mm for the 0.6 mm nozzle and 0.2–0.6 mm for the 0.8 mm nozzle, with general targets of 0.1, 0.2, 0.3–0.4 and 0.4–0.5 mm. Those ranges work out to roughly 25–70% of the nozzle diameter, although the stated 0.4 mm range reaches 75% at its top. OrcaSlicer uses a wider envelope of 20–80% for general guidance and lists hard limits of 0.04–0.16 mm, 0.08–0.32 mm, 0.12–0.48 mm and 0.16–0.64 mm for the four sizes. The two sets of numbers are close enough to be used together: treat roughly 25–70% as the range where the U1 behaves well and 20–80% as the outer edge.

### Why very thick layers fail

As layer height approaches the nozzle diameter, the flat contact patch $w - h$ shrinks toward zero. At $h = 0.36$ mm on a 0.4 mm nozzle with a 0.42 mm line width, the flat contact is only 0.06 mm wide. The bead is then almost circular in cross-section and sits on the previous layer like a rope laid on a rope. There is little downward pressure from the nozzle flat and little area for polymer chains to diffuse across the interface, so the part delaminates along the layer lines. Overhangs also sag because each layer has less support from the one below.

OrcaSlicer's own guidance is that layer heights above 80% of the nozzle diameter raise the risk of poor layer adhesion. In practice, a 0.4 mm nozzle should not go above 0.30 mm, and 0.20 mm is a better ceiling for parts that will carry load.

### Why very thin layers fail

Below roughly 20% of the nozzle diameter, the gap between the nozzle tip and the previous layer becomes a very restrictive passage. The resistance to radial squeeze flow rises roughly with the inverse cube of that gap, so the extruder has to push much harder for the same volume. The excess pressure forces plastic out past the edges of the nozzle flat and leaves raised ridges that the next pass drags through, producing rough top surfaces and the fine "fish scale" pattern that OrcaSlicer warns about. Flow also becomes inconsistent because the extruder is running near its minimum reliable step rate.

Very thin layers additionally reduce volumetric flow to a trickle. At very low flow rates the filament spends a long time in the hot zone, heat conducts upward through the filament core, and the filament can soften inside the heat break. That is the classic heat-creep jam. It is a hotend and cooling problem rather than a layer-height problem as such, but thin layers make it much more likely.

### What the measurements show

Stefan Hermann at CNC Kitchen printed standing and lying test hooks with a 0.4 mm hardened steel nozzle at layer heights of 0.05, 0.10, 0.15, 0.20, 0.30 and 0.40 mm. All samples from 0.05 to 0.20 mm failed at similar loads, with 0.15 mm the strongest. The 0.30 mm samples carried only about half the load, and the 0.40 mm samples carried almost nothing. Even the lying samples, where the load does not pull directly across the layer interfaces, lost strength above 0.20 mm.

Two conclusions matter for the U1. First, thin layers below 0.15 mm buy surface finish and overhang quality but no extra strength, so they cost time for a cosmetic gain. Second, thick layers are faster but weaker, not faster and stronger. A 0.24–0.30 mm layer height is a reasonable choice for a draft part or for the straight vertical sections of an adaptive print, but it should not be described as a strength setting.

## Line width: where strength actually comes from

### The normal range

A line width slightly wider than the nozzle orifice, typically 105–120%, presses the bead under the flat land of the nozzle. This closes the gaps between adjacent perimeters, improves overhangs and gives a more consistent surface. For a 0.4 mm nozzle, that means about 0.42–0.48 mm. OrcaSlicer recommends 105–120% for outer walls and 100–105% for top surfaces, where the narrower line gives a smoother finish.

### Wider lines and the real limits

A 0.4 mm nozzle has a flat tip considerably wider than its orifice, so it can spread plastic well beyond the bore. CNC Kitchen tested extrusion widths from 90% to 250% of the nozzle diameter on a 0.4 mm nozzle. Prints looked essentially identical up to 140%. At 160%, artefacts began to appear in overhanging regions, and at 250% the surface was visibly textured and partly under-extruded. Layer adhesion rose from 90% and peaked at about 150%, then fell again, probably because the rougher surface created stress risers.

The practical reading is that about 150% is a sensible maximum for strength and that 200% is in the range where surface artefacts appear. A 0.80 mm line from a 0.40 mm nozzle is therefore not a clean general-purpose setting, even though the slicer accepts it and a simple vertical part may hold together. The old rule that a 0.4 mm nozzle prints 0.80 mm lines cleanly at 2.00 times the diameter is too optimistic.

The hook tests also show why wider lines help. Two perimeters at 100% width failed at about 20 kg, four perimeters at 100% at about 33 kg, three perimeters at 133% at about 37 kg, and two perimeters at 200% at about 39 kg. The 200% sample was the strongest, but its wall was twice as thick as the two-perimeter baseline, so the result reflects the extra material rather than a better bond between layers.

### What a bigger nozzle does and does not do

CNC Kitchen's comparison of a 0.4 mm and a 0.8 mm nozzle at equal wall thickness found no strength advantage for the larger nozzle. At 0.84 mm walls the two nozzles averaged the same load, and at 1.68 mm walls all variants landed between 347 N and 380 N. A 0.4 mm nozzle run at 210% extrusion width matched the real 0.8 mm nozzle. The advantage of the large nozzle is speed: at double the line width and double the layer height it deposits about four times the material in the same time, so it reaches a given strength much faster.

That is the correct way to state the benefit. Large nozzles are stronger per hour, not stronger per gram. If a part must be as strong as possible at a fixed wall thickness, the nozzle diameter matters much less than the number of perimeters and the line width used to build that thickness.

### Arachne and variable line width

Older slicers offset the model outline by a fixed width. Thin walls, text and small logos then produced gaps, which were filled with short zig-zag moves that cause vibration and weak spots. Arachne, which is the default perimeter generator in PrusaSlicer 2.5 and later and is also used in OrcaSlicer and Bambu Studio, varies the extrusion width along each perimeter instead. It widens the bead where there is room and thins it where the feature is narrow, so a 1.0 mm wall on a 0.4 mm nozzle can be printed as two continuous 0.50 mm perimeters rather than one perimeter plus a gap fill.

Arachne has configurable limits. Minimum feature size sets the thinnest feature that will be printed, and minimum perimeter width sets the width used to replace features at that limit. Both can be expressed as a percentage of the nozzle diameter. This is why Arachne can produce finer detail than a fixed-width perimeter at the same nozzle size, and why the minimum corner radius is not simply half the nozzle diameter.

## Nozzle size comparison

| Nozzle | Layer height (Snapmaker range) | Practical line width | Best use | Filled filament suitability | Main limitation |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 0.2 mm hardened steel | 0.05–0.12 mm, general 0.1 mm | 0.20–0.26 mm | Miniatures, small text, lithophanes, fine gears | Not suitable; Snapmaker specifies plain, particle-free filament | Very low flow, long print times, fragile beads |
| 0.4 mm stainless or hardened steel | 0.10–0.30 mm, general 0.2 mm | 0.40–0.60 mm | Everyday functional parts, the U1 default | Minimum practical size, with a real clog risk on long-fibre or heavily loaded grades | The stock stainless hotend wears quickly on abrasives |
| 0.6 mm hardened steel | 0.15–0.45 mm, general 0.3–0.4 mm | 0.60–0.90 mm | Structural parts, composites, large functional prints | The recommended size for carbon-fibre and glass-fibre filament | Small text and sharp internal corners lose definition |
| 0.8 mm hardened steel | 0.20–0.60 mm, general 0.4–0.5 mm | 0.80–1.20 mm | Large enclosures, draft parts, vase mode | Tolerates filled filament well | Noticeable layer lines and poor small detail |

The table deliberately leaves out a "maximum volumetric speed" row. Melt rate is not a property of the nozzle diameter. It is set by the heater, the melt zone length, the thermal conductivity of the material, the temperature and the pressure the extruder can generate. A 0.8 mm nozzle on a weak hotend can flow less than a 0.4 mm nozzle on a strong one. The U1 figure of 32 mm³/s was measured by Snapmaker with Snapmaker ABS at 280 °C, and it falls with smaller nozzles, abrasive-filled materials and lower temperatures.

## Filled and abrasive filaments

Chopped carbon fibre and glass fibre change the nozzle requirement more than any other material class. Bambu Lab's filament guide is unusually direct about this: do not use a 0.2 mm nozzle with carbon-fibre, glass-fibre or particle-filled filament, do not use stainless steel or brass because they wear too quickly, and use a hardened steel nozzle. It names the 0.6 mm hardened steel nozzle as its first choice and the 0.4 mm hardened steel nozzle as its second choice, and notes that clogging risk falls as the diameter increases from 0.4 to 0.6 to 0.8 mm.

A 0.2 mm nozzle with carbon-fibre filament is a high risk, not a guaranteed instant clog. Some finely milled, lightly loaded grades may pass a short print, but the margin is small and a blockage can appear at any point. The honest description is that 0.4 mm is the practical minimum and 0.6 mm is the recommended size.

The old rule that the orifice must be three to five times the fibre length does not survive arithmetic. Fibre length in commercial filaments is rarely published, but the values usually quoted for chopped carbon and glass fibre are in the region of 0.1–0.3 mm. A 0.6 mm orifice is twice the top of that range, and a 0.4 mm orifice is only about 1.3 times it. Clogging depends on the full length distribution, the loading by weight, how well the fibres are dispersed, the taper angle inside the nozzle, retraction behaviour and moisture. A single ratio cannot capture that, and a 0.6 mm nozzle does not guarantee trouble-free printing of a poor-quality composite.

Hardened steel is mandatory for these materials because stainless steel and brass erode at the orifice, which enlarges the hole and changes flow over time. Drying matters as much as nozzle size, because moisture in a hygroscopic nylon composite causes foaming, poor surface finish and feed stalls that are easily mistaken for a nozzle clog.

## XY and Z resolution are related, not independent

It is common to say that XY resolution is set by the nozzle and Z resolution by the layer height, as if the two were completely separate. They are largely separate in everyday printing, but the statement is too strong, for three reasons.

The first is that one nozzle sets both limits. A 0.2 mm nozzle gives the finest practical walls and the lowest maximum layer height, 0.12 mm in Snapmaker's range. Choosing it for XY detail therefore caps vertical speed and forces long print times. A 0.8 mm nozzle does the opposite. The two axes are coupled through the hardware even though the slicer exposes them as separate settings.

The second is that corner radius follows the extrusion width, not half the nozzle diameter. The outside of a corner printed with a single bead is rounded by roughly half the bead width, so a 0.42 mm line gives about a 0.21 mm radius. Arachne can thin the bead at a corner, which reduces the radius further, and a 0.2 mm nozzle helps mainly because it can sustain a thin bead reliably. The formula $r_{\min} = d/2$ confuses the nozzle radius with the printed corner radius; the corner follows the line width and the slicer's corner settings.

The third is that sloped and curved surfaces depend on both settings. On a surface inclined at angle $\theta$ from the build plate, each layer advances horizontally by a step of:

$$s = \frac{h}{\tan(\theta)}$$

At 75–90° the step is tiny even with 0.3 mm layers. At 10° with a 0.20 mm layer height the step is about 1.13 mm, which is clearly visible as a contour ring on a shallow dome. Reducing layer height is the only way to shrink that step, and it is the reason adaptive layer height exists.

Adaptive or variable layer height, available in OrcaSlicer and PrusaSlicer, prints steep walls and straight sections at a fast, thick layer height and reduces the layer height only across domes, fillets and shallow curves. It is a genuine time saver, but it does not make thick layers strong; it simply avoids paying for fine layers where they are not visible. Pairing it with ironing or a concentric top-surface pattern handles the remaining stair-stepping, as described in [[08 - Surface Smoothing Slicer Techniques - Ironing and Beyond]].

## Volumetric flow and speed

The flow relationship is simple and is the most useful equation in this note:

$$Q = h \times w \times v$$

where $Q$ is volumetric flow in mm³/s, $h$ is layer height in mm, $w$ is line width in mm and $v$ is toolhead speed in mm/s. Rearranged, the maximum speed for a given flow limit is $v = Q / (h w)$.

Suppose a material is limited to 18 mm³/s in the hotend. With a 0.4 mm nozzle at 0.20 mm layers and 0.42 mm lines, the cross-section is 0.084 mm², so the toolhead would have to travel at about 214 mm/s. With a 0.6 mm nozzle at 0.30 mm layers and 0.63 mm lines, the cross-section is 0.189 mm² and the same flow is reached at about 95 mm/s. The large nozzle lays down more plastic per millimetre of travel, so it needs fewer passes, fewer layers and less machine motion for the same part.

That is also why a big nozzle can look slower in the slicer and still finish first. The limiting factor is melt rate, not the speed number in the profile. The U1's 500 mm/s toolhead limit and 20,000 mm/s² acceleration matter mostly on long, straight moves; small features never reach the requested speed because the toolhead runs out of distance first.

Nozzle bore also affects the pressure the extruder must generate. For a capillary at a fixed flow, the Hagen–Poiseuille relation gives $\Delta P \propto 1/r^4$, so doubling the diameter reduces the pressure drop by about sixteen times, and going from 0.4 mm to 0.6 mm reduces it by about five times. Real hotends have converging inlets and shear-thinning polymers, so the exponent is smaller in practice, but the direction is correct: small nozzles demand more extruder torque and are more prone to grinding or skipping on stiff engineering materials.

On the U1, the practical flow ceiling is 32 mm³/s as measured by Snapmaker with Snapmaker ABS at 280 °C. That number should not be treated as a material-independent rating. A 0.2 mm nozzle cannot reach it, a carbon-fibre composite will not reach it, and a lower nozzle temperature reduces it. The calibration procedure in [[07 - Print Speeds and Volumetric Flow]] is the reliable way to find the real limit for a specific spool.

## Using the Snapmaker U1's four toolheads

The U1 has four independent toolheads, a 270 × 270 × 270 mm build volume, a maximum nozzle temperature of 300 °C and a maximum bed temperature of 100 °C. The stock hotends are four 0.4 mm stainless steel units. Each hotend is an integrated assembly with the heat sink, heat break, heater block and nozzle joined together, so a diameter change means changing the whole hotend, not unscrewing a nozzle. Snapmaker sells hardened steel hotends in 0.2, 0.4, 0.6 and 0.8 mm, and each size is sold as a four-pack of that single diameter.

### Mixed diameters are not supported

Snapmaker's U1 hot end guide states plainly that mixing different nozzle diameters in the same print job is not supported, and repeats the warning in more than one place. The practical consequence is that a job is designed around one diameter. If a part needs a 0.2 mm outer wall and a 0.6 mm infill, the stock answer is to print it in one diameter and accept the compromise, not to assign different sizes to different toolheads.

### The OrcaSlicer workaround

Mainline OrcaSlicer has supported mixed nozzle sizes since version 2.2.0-beta. The setup is described in the OrcaSlicer wiki. Each extruder is given its own nozzle diameter in the machine settings, and every line-width field in the process profile is converted to a percentage of the nozzle diameter, so a 0.40 mm line on a 0.4 mm nozzle becomes 100% and a 0.48 mm line becomes 120%. Pressure advance has to be calibrated per extruder because it changes with nozzle size. Each toolhead also carries its own minimum and maximum layer height, which limits what it can print.

This is a slicer feature, not a Snapmaker-supported configuration. The printer's own documentation still says the combination is unsupported, and the Snapmaker Orca fork may not expose the same workflow. Treat it as an experiment for parts where the benefit is worth the risk, test on a small model first, and do not present it as a standard capability of the machine.

### The shared layer height is the hard constraint

Because the whole object is built in one Z stack, every toolhead has to agree on layer height. Using Snapmaker's published ranges, the overlap windows are:

| Combination | Shared layer-height window | Practical comment |
| :--- | :--- | :--- |
| 0.4 mm + 0.6 mm | 0.15–0.30 mm | The widest window, and the combination most likely to succeed. |
| 0.4 mm + 0.8 mm | 0.20–0.30 mm | Workable, but the 0.4 mm nozzle is forced toward its coarse end. |
| 0.6 mm + 0.8 mm | 0.20–0.45 mm | Comfortable for both, with limited detail benefit. |
| 0.2 mm + 0.4 mm | 0.10–0.12 mm | Very narrow, and both nozzles sit near an edge of their range. |
| 0.2 mm + 0.6 mm | None | The 0.2 mm maximum is below the 0.6 mm minimum. |
| 0.2 mm + 0.8 mm | None | No shared layer height exists, so the combination cannot be sliced. |

These windows are calculated from the published ranges and are not the result of Snapmaker testing. Even where a window exists, one shared layer height pushes the small nozzle toward the coarse end of its range and the large nozzle toward the fine end, which is where surface quality and layer adhesion are weakest.

### Practical job profiles

The honest way to use four toolheads is to keep one diameter installed across all four and use the toolchange for material, colour and support strategy.

| Job profile | Installed diameter | Typical assignment | Why it works |
| :--- | :--- | :--- | :--- |
| Everyday multi-material | 4 × 0.4 mm | PLA or PETG in two colours, plus a support material | Full material freedom with the best detail the stock hotends can give. |
| Composite engineering | 4 × 0.6 mm hardened | PA-CF or PPA-CF main body, ASA or PC accents, HIPS or breakaway support | The 0.6 mm bore is the recommended size for fibre-filled filament and is fast enough for structural work. |
| Fine detail | 4 × 0.2 mm hardened | Small models, text, lithophanes, one or two colours | Maximum XY detail, at the cost of very long print times and no filled materials. |
| Fast draft | 4 × 0.8 mm hardened | Large enclosures, jigs, vase-mode vessels | Highest deposition rate, with visible layer lines and poor small detail. |

A toolchanger still earns its place in these profiles. It allows PLA and PETG to be used as zero-gap support interfaces without cross-contamination in a shared melt zone, it allows soluble supports, and it greatly reduces the purge waste of a single-nozzle multi-material system. It does not remove the need for a prime tower or a wipe sequence, and it does not provide zero ooze.

When a hotend is changed, the U1 needs its nozzle diameter set in the firmware, a repeat of the multi-toolhead offset calibration and bed levelling, and a dynamic flow calibration. Skipping the calibration step is a common cause of first-layer problems after a swap.

## Setting checklist

- Choose one nozzle diameter for the job before choosing any other setting, because it caps both the finest wall and the thickest layer.
- Keep layer height between 25% and 70% of the nozzle diameter, and stay at or below 0.20 mm on a 0.4 mm nozzle for load-bearing parts.
- Set outer walls to 105–120% of the nozzle diameter and internal walls up to about 150% when extra strength matters.
- Add perimeters before adding infill; wall thickness is the dominant strength variable in fused deposition modelling (FDM) parts.
- Calculate the required flow as layer height × line width × speed, and keep it below the calibrated limit for the material and hotend.
- Use adaptive layer height to spend fine layers on curves and coarse layers on straight walls, not to make the whole part stronger.
- Use hardened steel and at least 0.4 mm for any filled filament, and prefer 0.6 mm for carbon-fibre and glass-fibre grades.

## Related notes

- [[00 - Filament Master Index]]
- [[04 - Nozzles and Their Types]]
- [[06 - Heating and Temperatures - Nozzle, Bed, and Chamber]]
- [[07 - Print Speeds and Volumetric Flow]]
- [[08 - Surface Smoothing Slicer Techniques - Ironing and Beyond]]
- [[10 - Common Printing Issues, Debugging, and Physical Limits]]
- [[12 - Carbon Fiber and Glass Fiber Reinforced Composites (PLA-CF, PETG-CF, ABS-GF, ASA-CF, PA-CF, PAHT-CF, PC-CF)]]
- [[22 - Water-Soluble and Chemical-Soluble Support Filaments (PVA Polyvinyl Alcohol, BVOH Butenediol Vinyl Alcohol Copolymer, HIPS High Impact Polystyrene)]]
- [[01 - Drying Filament]]
- [[02 - Storing Filament]]

## Sources

1. [Snapmaker U1 Hot End Guide](https://wiki.snapmaker.com/en/snapmaker_u1/hot_end_guide). Nozzle diameters, recommended layer-height ranges, filament compatibility and the statement that mixing diameters in one print is not supported.
2. [OrcaSlicer Wiki: Mixed Nozzle Sizes](https://www.orcaslicer.com/wiki/guides/mixed_nozzle_sizes). Per-extruder nozzle diameters, percentage line widths and pressure-advance calibration for mixed-nozzle printing since version 2.2.0-beta.
3. [OrcaSlicer Wiki: Layer Height](https://www.orcaslicer.com/wiki/print_settings/quality/quality_settings_layer_height). The 20–80% guidance, hard limits per nozzle size and first-layer recommendations.
4. [OrcaSlicer Wiki: Line Width](https://www.orcaslicer.com/wiki/print_settings/quality/quality_settings_line_width). Percentage line widths, the 100% starting point and the warning about values above 150%.
5. [Prusa Knowledge Base: Arachne Perimeter Generator](https://help.prusa3d.com/article/arachne-perimeter-generator_352769). Variable extrusion width, minimum feature size and minimum perimeter width.
6. [Prusa Knowledge Base: Variable Layer Height](https://help.prusa3d.com/article/variable-layer-height-function_1750). Adaptive layer height and how the transition between layer heights is handled.
7. [Slic3r Manual: Flow Math](https://manual.slic3r.org/advanced/flow-math). The stadium cross-section model and the calculation of extruded volume from line width and layer height.
8. [CNC Kitchen: The influence of layer height on the strength of FDM 3D prints](https://www.cnckitchen.com/blog/the-influence-of-layer-height-on-the-strength-of-fdm-3d-prints). Layer heights from 0.05 to 0.40 mm on a 0.4 mm nozzle, with 0.15 mm strongest and 0.30 mm at about half.
9. [CNC Kitchen: The effect of extrusion width on strength and quality](https://www.cnckitchen.com/blog/the-effect-of-extrusion-width-on-strength-and-quality-of-3d-prints). Extrusion widths from 90% to 250%, with a clean range to about 140%, artefacts at 160% and peak layer adhesion near 150%.
10. [CNC Kitchen: Big nozzles, how do they make your 3D prints stronger?](https://www.cnckitchen.com/blog/big-nozzles-how-do-they-make-your-3d-prints-stronger). A 0.4 mm and a 0.8 mm nozzle at equal wall thickness, and the emulation of a large nozzle with a 210% extrusion width.
11. [Bambu Lab Wiki: Filament Guide and Material Table](https://wiki.bambulab.com/en/general/filament-guide-material-table). The instruction not to use a 0.2 mm nozzle with fibre-filled filament, the hardened-steel requirement and the preference for 0.6 mm.
12. [Prusa Knowledge Base: Different nozzle types](https://help.prusa3d.com/article/different-nozzle-types_2193). Nozzle materials and the effect of abrasive filament on brass and hardened steel.

## Videos

1. [Which LAYER HEIGHT gives you the STRONGEST 3D prints?](https://www.youtube.com/watch?v=fbSQvJJjw2Q) by CNC Kitchen. A direct test of layer height against part strength.
2. [Extrusion Width - The magic parameter for strong 3D prints?](https://www.youtube.com/watch?v=9YaJ0wSKKHA) by CNC Kitchen. The video version of the extrusion-width study.
3. [BIG nozzles - HOW they (can) make your 3D prints STRONGER](https://www.youtube.com/watch?v=QfASQ8VgAbk) by CNC Kitchen. Why large nozzles improve strength per unit time rather than strength per gram.
4. [Fast 3D printing is bad for Strength! (and how to fix it!)](https://www.youtube.com/watch?v=qBvTWFEd7rk) by CNC Kitchen. The trade-off between print speed and layer bonding.
5. [0.4mm nozzles just became obsolete](https://www.youtube.com/watch?v=WgXM2zPusXo) by Made with Layers (Thomas Sanladerer). A discussion of why the default 0.4 mm nozzle may no longer be the best default choice.
6. [Get the benefits of a 0.6mm nozzle with a 0.4?](https://www.youtube.com/watch?v=nmigF5qyJ4M) by Made with Layers (Thomas Sanladerer). Using a smaller nozzle at a wider line width to imitate a larger one.
7. [Five ways to reduce layer lines on your 3D prints - Adaptive layer height and more!](https://www.youtube.com/watch?v=cnujGcSmAjI) by Teaching Tech. Practical methods for smoothing visible layer stepping.
8. [What layer height should you use? 3D Printing Mastery](https://www.youtube.com/watch?v=0TLCu7qG3Rg) by Maker's Muse. A general explanation of layer-height choices and their trade-offs.
9. [What is Layer Height and Nozzle Diameter? - 3D Printing 101](https://www.youtube.com/watch?v=eAEHHzUPChY) by Maker's Muse. A beginner-level explanation of the two settings.
10. [3×0.4 vs 2×0.6 Walls: Strength & Layer Adhesion Tested](https://www.youtube.com/watch?v=A7m8H8jKucA) by My Tech Fun. A controlled comparison of wall thickness built with different nozzle sizes.
11. [0.4 vs 0.6 vs 0.8 Nozzles in Vase Mode – Which Is Stronger?](https://www.youtube.com/watch?v=2C_KGNTgc_c) by My Tech Fun. Strength comparison of three nozzle diameters in single-wall prints.
12. [Reliable Printing! How to Calculate MAXIMUM FLOW RATE and Print Speed for your 3D Printer](https://www.youtube.com/watch?v=WBCpNe3Bkqg) by Callum Coles. A practical method for finding a machine's flow ceiling.
13. [Calibrate your Max Volumetric Flowrate with Orca Slicer!](https://www.youtube.com/watch?v=XqRlV3HpYE8) by The Buildplate Brain. Step-by-step volumetric flow calibration in OrcaSlicer.
14. [Print simultaneously with different sized nozzles](https://www.youtube.com/watch?v=xJ0GmXukqgQ) by Keith Wakeham. A demonstration of printing with different nozzle sizes in the same job.
15. [I Tested Variable Layer Height, Is the Quality Worth the Time?](https://www.youtube.com/watch?v=wi8P6FZjXe0) by CAD with Jordan. A quality and time comparison for variable layer height.
