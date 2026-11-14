---
title: "09 - Post-Processing - Matte, Shiny, and Surface Finishing"
tags:
  - 3d-printing
  - filaments
  - post-processing
  - vapor-smoothing
  - sanding
  - electroplating
  - annealing
  - snapmaker-u1
  - solvent-safety
  - paints-and-coatings
---

| Scope | Key numbers | What it is good for | Additional notes |
| :--- | :--- | :--- | :--- |
| Matte finish from the printer | Nozzle 10–15 °C below the top of the material range; outer wall 150–220 mm/s; fuzzy skin 0.1 mm | Hiding layer lines without paint or solvent | Cooling the weld between layers costs strength, so keep load-bearing parts hot |
| Matte finish by hand | Wet 220 → 400 → 600 grit; grey or maroon Scotch-Brite pad | Uniform satin on curved and detailed surfaces | Sand wet; dry sanding generates dust and friction heat |
| Gloss finish from the printer | Nozzle near the top of the range; outer wall 30–50 mm/s; reduced part cooling | Silk PLA, clear PETG, transparent parts | Too much heat causes droop, stringing and corner bulging |
| Acetone vapour smoothing | 20–40 minutes exposure, then 12–24 hours degassing | Seamless gloss on ABS and ASA | Acetone flash point is about −20 °C; outdoors only; no motor inside the chamber |
| Isopropyl alcohol smoothing | 90–99 % IPA, misted directly onto the part | Glass-like finish on PVB | IPA is flammable; this does not work on PLA or PETG |
| D-Limonene smoothing | 10–20 second dip, then hours to days of drying | HIPS | Flash point about 45–48 °C; skin sensitiser |
| Primer and paint | 25–50 µm added per high-build coat | Filling layer lines before a coloured topcoat | Expect several coats plus sanding for 0.2 mm lines |
| Epoxy and UV resin coating | XTC-3D at 2A:1B by volume, 3.5 hours thin-film cure | A hard glass shell on PLA, PETG and composite prints | Epoxy amines and acrylate resins are sensitisers |
| Wet sanding and polishing | 120 → 3000 grit, then a plastic compound | A mirror finish on unpainted plastic | Keep power tools below about 1,500 rpm |
| Annealing in an oven | 90–110 °C for 45–60 minutes, then slow cooling | Raising PLA's heat deflection temperature | Expect 1–10 % shrinkage and warping; stiffness gain is small |
| Salt remelting | 180–210 °C, more than four hours to reach core temperature, then overnight cooling | Near-isotropic PLA, PETG and ABS parts | Requires 100 % infill and a dedicated oven |
| Electroplating | 0.02–0.05 A/cm² after a conductive base coat | Copper, nickel and decorative gold shells | Acid baths and metal salts need proper waste handling |

> [!abstract] Overview
> Surface appearance is controlled by how light meets the surface at a microscopic scale. A rough surface scatters light in many directions and looks matte. A very smooth surface reflects light at the angle of incidence and looks glossy, so it shows colour more deeply and can look wet or metallic.
>
> Two different toolkits follow from that. Mechanical and coating methods change the surface topography directly: sanding, blasting, primer, matte clear coat, epoxy or polishing. Solvent methods soften the outer skin of a compatible polymer so that surface tension pulls the layer ridges flat. Heat treatment is a separate topic that happens to live in the same workflow, because annealing and salt remelting change the inside of the part rather than its appearance.
>
> The single most important rule in this note is compatibility. Acetone dissolves ABS and ASA. It does not dissolve PLA or PETG, no matter how long the part soaks. Every solvent process also carries a fire risk that is easy to underestimate, and every sanding process carries a dust risk. Both are covered in the safety section at the end.

## 1. Why Matte and Gloss Look Different

A printed surface is a stack of rounded beads. The ridges between them act as tiny cylindrical lenses, and the top skin often shows visible extrusion marks, seams and vertical fine artefacts (VFAs). Whether the eye reads that texture as matte or glossy depends on the scale of the roughness compared with the wavelength of visible light, which is roughly 0.4–0.7 µm.

- A matte surface has roughness comparable to or larger than a few micrometres, so incoming light is scattered in many directions. Layer lines disappear visually because the whole surface is already scattering.
- A glossy surface has roughness well below a micrometre, so reflection stays specular. Any remaining scratch, seam or layer ridge becomes far more visible, because it is the only thing interrupting the reflection.

This is why polishing makes defects more obvious rather than less, and why painting a glossy part requires more surface preparation than painting a matte one.

## 2. Making a Print Matte

### 2.1 Matte Finish Directly From the Printer

You can push most filaments towards a satin or matte skin at the nozzle, using the settings discussed in [[06 - Heating and Temperatures - Nozzle, Bed, and Chamber]] and [[07 - Print Speeds and Volumetric Flow]]. The mechanism is straightforward. A cooler bead is more viscous and freezes sooner, so it cannot flow out and level against its neighbour, and the resulting surface is slightly rougher.

- Set the nozzle 10–15 °C below the top of the manufacturer's range, for example 195–205 °C for PLA or 225–235 °C for PETG. Do not go below the bottom of the range, because layer adhesion falls quickly.
- Raise the outer wall speed to 150–220 mm/s and disable the "slow down for outer walls" option in OrcaSlicer so that the shear rate stays consistent from layer to layer.
- Enable fuzzy skin at roughly 0.10 mm point distance and 0.06–0.08 mm thickness, as described in [[08 - Surface Smoothing Slicer Techniques - Ironing and Beyond]], to break up specular reflection along the Z axis.

> [!warning] Matte Printing Costs Strength
> Printing cooler and faster reduces polymer chain diffusion across layer boundaries, so inter-layer strength falls. The loss grows the further the nozzle temperature drops below the recommended range and is largest in materials with poor intrinsic layer adhesion. Print structural parts hot, then apply a mechanical or coating-based matte finish afterwards.

### 2.2 Mechanical Matte Finishing

1. **Non-woven scuff pads.** A grey ultra-fine 3M Scotch-Brite pad, roughly equivalent to 800–1000 grit, or a maroon very-fine pad, roughly 320–400 grit, conforms to curves and knocks the gloss off PLA, PETG and ABS in under a minute. Work under warm soapy water and keep the pressure light.
2. **Wet sanding to a satin finish.** Progress 220 → 400 → 600 grit and stop at 400 or 600. Always wet sand thermoplastics, using silicon carbide waterproof paper dipped in water with a drop of dish soap. Dry sanding generates local frictional heat that can exceed PLA's glass transition of about 55–60 °C, which gums the paper and smears the plastic.
3. **Media blasting.** Blasting at 40–60 psi with fine glass beads (70–140 mesh) or crushed walnut shell gives an even, isotropic matte texture similar to an SLS nylon part. This is a workshop process, not a kitchen-table one, because of the dust.

### 2.3 Primer, Paint and Matte Clear Coats

**Filler primer.** A high-build acrylic primer such as Rust-Oleum 2-in-1 Filler and Sandable Primer, or Tamiya Fine Surface Primer for small parts, fills surface texture with suspended talc and resin solids. Realistic expectations matter here. A high-build coat adds roughly 25–50 µm of film, so a 0.2 mm layer valley needs several coats, each sanded back, rather than one thick pass. Spray two or three light coats, wet sand at 400 then 600 grit until only the valleys still hold primer, and repeat if the lines are still visible.

**Matte clear coat.** A silica-flattened clear acrylic turns a glossy print dead matte in a couple of minutes and preserves the underlying filament colour, which matters for multi-colour prints. Two light mist coats are enough. Widely used products include Mr. Hobby Mr. Super Clear Flat, Krylon Matte Finish 1311 and Montana Varnish Matt. Waterborne polyurethane varnishes such as AK Interactive Ultra Matte also work and can be brushed or airbrushed.

Matte clear coats hide layer lines only slightly. They change the reflection, not the geometry, so sand or prime first if the lines are physically deep.

## 3. Making a Print Glossy

### 3.1 Gloss Directly From the Printer

To get the most natural shine out of the material, do the opposite of the matte recipe. This matters most for [[02 - Silk PLA (Elastomer-Modified High-Gloss Polylactic Acid Blend)|silk PLA]], translucent [[05 - PETG (Polyethylene Terephthalate Glycol-Modified)|PETG]], [[06 - PCTG (Polycyclohexylenedimethylene Terephthalate Glycol-Modified)|PCTG]] and clear [[11 - PC (Polycarbonate and PC-ABS, PC-PBT Engineering Alloys)|polycarbonate]].

- Run the nozzle towards the top of the recommended range, for example 225–235 °C for silk PLA and 240–255 °C for PETG, while staying inside the manufacturer's limits.
- Slow the outer wall to 30–50 mm/s. In silk PLA, slower extrusion reduces shear stress in the die and lets the elastomer-modified skin level into a smoother, more reflective surface.
- Reduce part cooling by roughly 20–40 % on layers without overhangs, which gives the outer skin slightly more time to level before it freezes.

The trade-off is the opposite of the matte recipe: more heat means more stringing, more corner rounding and more sag on overhangs.

## 4. Solvent Smoothing

Solvent smoothing softens only the outer skin. The part keeps its overall dimensions, but sharp edges round slightly and thin details can slump if the exposure is too long. The result is a smooth, often glossy surface with the layer structure no longer visible.

| Filament | Solvent | Practical at home? | What happens |
| :--- | :--- | :---: | :--- |
| [[07 - ABS (Acrylonitrile Butadiene Styrene)\|ABS]] and [[08 - ASA (Acrylonitrile Styrene Acrylate)\|ASA]] | Acetone (CH₃COCH₃) | Possible outdoors with strict fire control | The styrenic skin dissolves and surface tension pulls ridges flat. A cold vapour chamber takes 20–40 minutes. |
| [[17 - PVB (Polyvinyl Butyral - Isopropyl Alcohol Smoothable Filament)\|PVB]] | Isopropyl alcohol, 90–99 % | Yes, the least hazardous option | IPA softens PVB readily. Direct misting from a spray bottle or an ultrasonic nebuliser works faster than vapour alone, which can take several hours. |
| [[22 - Water-Soluble and Chemical-Soluble Support Filaments (PVA Polyvinyl Alcohol, BVOH Butenediol Vinyl Alcohol Copolymer, HIPS High Impact Polystyrene)\|HIPS]] | D-Limonene | Yes, with skin protection | A 10–20 second dip followed by hours or days of drying gives a satin-gloss finish and leaves a citrus smell. |
| [[10 - PA (Polyamide - Nylon 6, Nylon 12, and Nylon 6-66 Copolymers)\|PA (nylon)]] | Formic acid, m-cresol, or industrial solvent vapour | No | Polyamides resist mild solvents but not strong acids or phenols. Formic acid dissolves PA6 and PA66, and m-cresol attacks them as well. Both are far too hazardous for home use, so industrial vapour smoothing is the only realistic route. |
| [[01 - PLA (Polylactic Acid - Standard, High-Speed, and Tough PLA+)\|PLA]] and [[05 - PETG (Polyethylene Terephthalate Glycol-Modified)\|PETG]] | Acetone does not work. Ethyl acetate softens some PLA grades; THF and dichloromethane work but are laboratory chemicals | No for DCM and THF | PLA and PETG do not dissolve in acetone. Ethyl acetate vapour can reduce PLA roughness, but results vary by grade and parts often come out sticky or deformed. Dichloromethane is a suspected carcinogen and a hepatotoxin, and THF is flammable and forms explosive peroxides on storage. Use PVB with IPA, or an epoxy or resin coating, instead. |

> [!danger] Two Rules That Prevent Most Accidents
> Never heat a solvent to speed up smoothing, and never put any electrical device inside a vapour chamber. A "small 5 V brushless fan" still contains a motor, a cable and a connector, and inside a chamber full of flammable vapour any of those can produce a spark or a hot spot. If you need air movement, use a fan outside the chamber, rated for flammable atmospheres, with the chamber sealed and the fan blowing across the outside of the container. The simpler and safer choice is no fan at all.

### 4.1 Cold Acetone Vapour Smoothing for ABS and ASA

1. **Work outdoors.** Set up on a balcony, in a garage with the door open, or under an extraction hood. Keep the area free of pilot lights, water heaters, space heaters, grinders and anything else that can spark. Acetone vapour is about twice as heavy as air and pools in low places, so do not work in a basement pit or a closed room.
2. **Build the chamber.** Line the walls of a polypropylene (recycling code 5) or glass container with paper towel. Hold the towel in place with magnets or clips rather than adhesive. Do not use polystyrene or polycarbonate containers, because acetone attacks them.
3. **Wet the towel, do not pool the solvent.** Use 20–30 mL of pure acetone on the towel and never let liquid acetone collect around the base of the print. Liquid contact softens the part unevenly and can collapse the bottom layers.
4. **Support the part above the liquid.** Stand the print on aluminium foil or a metal wire rack so that only vapour reaches it.
5. **Close the lid and wait.** Inspect every 10 minutes. Twenty to forty minutes is typical for a first attempt. Over-exposure rounds edges and can melt fine surface detail.
6. **Degas before touching.** When the part comes out, the outer half millimetre or so is swollen with acetone and as soft as rubber. Do not touch it, and do not judge the finish yet. Leave it in a ventilated place for 12–24 hours until the hardness returns.

Acetone smoothing works on ABS and ASA because both are styrenic. It does not work on PLA, PETG, PCTG, polycarbonate, nylon or polypropylene.

### 4.2 Isopropyl Alcohol and PVB

PVB is the easiest material to smooth at home. Print it like PLA, then mist 90 % or stronger IPA onto the surface from about 20 cm, let it flash off, and repeat. The surface reflows into a glass-like finish. An ultrasonic nebuliser inside a closed container, as used by the Polymaker Polysher, gives a more even result than a spray bottle. IPA vapour alone is slow because the vapour pressure is lower than acetone's.

IPA is still flammable, with a flash point around 12 °C, so the same ignition rules apply, but it is far less aggressive to skin and plastics than acetone.

### 4.3 D-Limonene and HIPS

D-Limonene is a terpene solvent derived from citrus peel. It dissolves HIPS and is usually applied by dipping the part for 10–20 seconds, then allowing it to dry for hours to days. The surface stays slightly tacky for a long time, and the part keeps a citrus odour.

Two hazards are easy to miss. The flash point is only about 45–48 °C, so it is a flammable liquid at normal summer temperatures, and it is a skin sensitiser. Repeated skin contact can produce an allergic reaction that later extends to citrus peel and fragrances. Wear nitrile gloves, work with ventilation, and keep it away from heat.

## 5. Coatings: Epoxy, UV Resin and 2K Clear

### 5.1 Two-Part Epoxy (XTC-3D)

Smooth-On XTC-3D is a brush-on epoxy designed for 3D prints. Mix Part A and Part B at 2:1 by volume (100:42 by weight) for at least one minute, scraping the sides and bottom of the cup. Pot life in a cup is about 10 minutes, thin-film working time about 20 minutes, and a thin layer cures tack-free in roughly two hours and fully in about 3.5 hours.

Apply it with a foam brush in a coat thinner than 1/64 inch, which is about 0.4 mm. That is the manufacturer's maximum for a single pass, not a guarantee that a 0.3 mm layer line disappears in one coat. Deep striations need two or more thin coats, applied while the previous coat is still tacky, or a sanding step in between. The cured film is hard, sandable and paintable.

XTC-3D is exothermic. A large mass left in a mixing cup can get hot enough to melt the cup or ignite nearby paper, so mix small batches and pour the mixture into a foil tray to extend working time.

### 5.2 UV-Cured Resin

A thin coat of clear 405 nm resin brushed onto PLA or PETG will wick into layer lines by capillary action, then cure in two to three minutes under a 405 nm lamp or a wash-and-cure station. Mixing roughly 10–20 % talc or baby powder into the resin produces a thixotropic paste that can be spread as a sandable filler. This is a useful trick for filling a seam or a deep gouge rather than coating a whole part.

Uncured resin is an acrylate sensitiser. Wear nitrile gloves, avoid skin contact, and cure the coating fully before sanding, because sanding partly cured resin creates an irritating dust.

### 5.3 2K Catalysed Clear Coat

A catalysed urethane clear such as SprayMax 2K Glamour Gloss gives an automotive wet-look finish with UV protection. It is a two-component isocyanate product. An organic-vapour respirator cartridge is not sufficient protection against isocyanate aerosol or vapour. Use supplied air, or a properly fitted respirator with an isocyanate-specific combination cartridge under a written respiratory protection programme, and spray outdoors or in a spray booth. Do not spray 2K products in a garage with the door cracked open.

## 6. Wet Sanding and Polishing to a Mirror Finish

This is the most reliable way to get optical gloss on an unpainted print, and the only method that works on transparent [[16 - Glass-Like and Optically Transparent Filaments (PMMA Polymethyl Methacrylate, Clear PC, Transparent PETG, Transparent PCTG)|PMMA, clear PC and transparent PETG]].

1. **Level the surface.** Wet sand 120 → 240 → 400 grit. Change the sanding direction by 90° at each grit so that the previous grit's scratches become visible and you can tell when they are gone.
2. **Refine.** Wet sand 600 → 800 → 1000 → 1500 → 2000 → 3000 grit. Cushioned abrasives such as 3M Trizact or Micro-Mesh pads make the finer steps much easier and reduce the risk of sanding a flat spot into a curve.
3. **Compound.** Buff by hand with a microfiber cloth, or at low speed on a loose cotton wheel below about 1,500 rpm, using a plastic polish sequence such as Novus #3 heavy scratch remover, then #2 fine scratch remover, then #1 clean and shine, or Meguiar's PlastX.
4. **Do not use a rotary tool at full speed.** A felt bob at 15,000 rpm will friction-melt a trench into the part within a second.

Keep the paper wet throughout. Rinse the part and change the water often, because trapped plastic particles act as extra grit and scratch the surface you are trying to polish.

## 7. Flame Polishing and Heat Reflow

A quick pass with a butane micro-torch or a heat gun at around 300 °C will vaporise fine stringing, reflow a crazed or chalky stress mark, and restore colour depth after sanding or support removal. The window is short: roughly 0.2–0.5 seconds per pass, with the flame or nozzle kept moving.

> [!warning] Fire and Distortion Risk
> Butane torches burn at over 1,000 °C and are a serious fire hazard. Work outdoors or in a well-ventilated area, away from solvent containers, solvent-soaked paper towel, acetone vapour chambers and any other flammable material. Never flame-polish a part that has just come out of a solvent bath, because residual solvent vapour is still present. Keep a fire extinguisher within reach, wear eye protection, and hold the part with metal tongs rather than your fingers. The margin between a reflowed surface and a melted corner is very small, so practise on a scrap print and keep the torch moving.

## 8. Electroplating

Electroplating can produce a genuine metal shell, but it magnifies every surface defect, so preparation is most of the work.

1. Sand, prime or resin-coat the print until the surface is smooth. Any layer line left at this stage will still be visible under the metal.
2. Apply a conductive base coat of graphite spray, conductive copper paint or silver conductive ink, then burnish it gently with a soft cloth to bring sheet resistance down. A roughly uniform, low-resistance coat is what makes an even plate possible.
3. Suspend the part as the cathode in an acidic copper sulfate bath with a phosphorised copper anode, at a current density of roughly 0.02–0.05 A/cm², until a 50–150 µm copper layer has formed. Nickel or gold can follow as a decorative or wear layer.

The bath contains sulfuric acid and metal salts. Nickel salts are sensitisers and known carcinogens in some forms, and the waste must not go down a drain. Work with gloves and eye protection, in a ventilated area, and take the spent bath to a household hazardous waste facility.

## 9. Annealing and Salt Remelting

### 9.1 What Heat Treatment Can and Cannot Do

Semi-crystalline polymers such as [[01 - PLA (Polylactic Acid - Standard, High-Speed, and Tough PLA+)|PLA]], [[10 - PA (Polyamide - Nylon 6, Nylon 12, and Nylon 6-66 Copolymers)|PA6, PA12 and PA-CF]], and [[14 - PPA (Polyphthalamide - High-Performance High-Temp Nylon PPA-CF and PPA-GF)|PPA-CF]] cool quickly during printing and end up partly amorphous with locked-in stress. Holding them above the glass transition temperature lets the chains rearrange into crystalline lamellae.

Two claims need to be separated carefully.

- **Heat deflection temperature really does rise.** Annealing PLA raises its HDT substantially, from about 55 °C to figures that depend on grade, crystallinity and the measurement method, often in the 80–110 °C range and sometimes higher for highly crystalline grades. HDT is measured at 0.45 MPa deflection, so it is not a continuous service temperature and does not mean the part can carry load at that temperature.
- **Stiffness and strength barely move.** In CNC Kitchen's measurements, PLA annealed at 100 °C for 45 minutes gained about 7.5 % in tensile strength and roughly 7 % in stiffness. Layer adhesion did not improve at all. Claims of 25–40 % stiffness gain and an HDT of 110–150 °C for ordinary PLA are not supported by that data.

Annealing also warps. Dimensional change of up to about 10 % is common, with shrinkage in X and Y and expansion in Z, and it is not consistent enough to compensate by scaling. Leaving the part on its build plate with supports attached reduces but does not eliminate the problem.

### 9.2 Packing Medium: Salt or Plaster

A rigid packing medium supports the part while it softens, which is the only practical way to keep thin features from slumping.

- **Powdered salt.** Grind table salt in a blender in small batches, around 300–400 g at a time, because it clumps and smears. The dust is unpleasant, dries the skin and rusts nearby steel, so wear gloves and keep a vacuum nearby. Fine, sharp crystals compact into a rigid mass; coarse table salt does not.
- **Plaster.** Plaster of Paris sets around the part and gives good support, as shown in CNC Kitchen's plaster annealing test. It is messier to remove and cannot be reused, but it does not rust tools.
- **Silica sand.** Sand is easier to handle but compacts less well than powdered salt, so it supports the part less effectively at high temperature.

### 9.3 Annealing Schedule

| Polymer | Temperature | Soak | Cooling |
| :--- | :---: | :---: | :--- |
| PLA crystallisation anneal | 90–110 °C | 45–60 minutes | Switch the oven off and cool inside the packing to below 40 °C, which takes 2–3 hours |
| PA6, PA12, PA-CF stress relief | 90–120 °C | 2–4 hours | Cool slowly inside the oven to below 45 °C, then condition in ambient air |
| PC and PC-CF stress relief | 110–125 °C | 1–2 hours | Slow cool; this reduces the internal stress that causes stress cracking around bolts |
| PPA-CF and PPS-CF | 120–160 °C | 2–4 hours | Slow cool; this raises crystallinity, stiffness and chemical resistance |

The [[15 - PPS (Polyphenylene Sulfide - PPS and PPS-CF)|PPS]] and PPA entries are at or beyond the limit of a domestic oven's accuracy and are best treated as industrial processes.

### 9.4 Salt Remelting

Salt remelting goes further than annealing: the part is heated above its melting point until the layers fuse into a solid, nearly isotropic body. It only works on parts printed at 100 % infill. Anything less leaves voids where the molten polymer flows away, and the result is unpredictable.

The published schedule is often quoted as 190–220 °C for 60–90 minutes. That under-cures the part in practice, because salt conducts heat poorly. In CNC Kitchen's tests, a non-convection laboratory oven set to 210 °C took more than four hours for the core of the salt block to approach the setpoint, and a forced-convection kitchen oven still took about two hours. Useful numbers from that work:

- PLA and PETG remelt well at 180–210 °C.
- ABS needed 190 °C and above.
- At 230 °C parts brown and the smell becomes bad.
- Put a barbecue thermometer into the salt and switch the oven off when the core is about 10 K below the target, rather than timing the process.
- Cool overnight in the salt, then rinse the part under warm water to dissolve the remaining salt.

Dimensional change stayed below about 1 % in those tests, but threads come out tight and the surface is slightly porous.

> [!warning] Oven and Fume Safety
> Do not use a food oven for salt remelting or for annealing prints that may carry resin, paint or unknown additives. Buy a dedicated toaster oven or use a laboratory oven, place it under extraction or outdoors, and never leave it running unattended. Polymer degradation products from an overheated batch are irritating and can be harmful, and the salt dust rusts everything nearby.

## 10. Applying This to the Snapmaker U1

1. **Preserve multi-colour work.** The U1 has four independent toolheads, so a print can carry four colours or materials without painting. Wet sand the surface flush at 320 → 600 → 1000 grit, wash off the dust, and finish with a matte clear coat to keep the colours, or a gloss clear coat to deepen them. Sanding a multi-material print flat also removes the slight step where one toolhead meets another.
2. **Acetone smoothing of four-colour ABS or ASA.** Print the part in ABS or ASA with the Top Cover fitted, then smooth it in a cold acetone vapour chamber as described in section 4.1. Do this outdoors, with gloves and goggles, with no fan inside the chamber, and allow 12–24 hours of degassing. A 25-minute bath is a reasonable starting point for a small part, but check the surface every 10 minutes, because over-exposure rounds edges and can blur the boundaries between colours. The solvent acts on the styrenic polymer rather than on the pigment, so the colours normally survive the process.
3. **The chamber heater is a community modification.** The BIQU Panda Breath is a 300 W PTC heater with HEPA and carbon filtration, and its maximum chamber temperature is 60 °C. Stock U1 firmware does not control it. It requires community firmware, either paxx12's Snapmaker U1 Extended Firmware in Panda Breath WebSocket mode or DragonBreath, which is the recommended option.
4. **Motherboard cooling is mandatory before using a chamber heater.** The RK3562 processor begins thermal throttling at 85 °C, and there are documented mid-print failures. A 6015 fan that cools only the stepper drivers does not cool the RK3562 and is not sufficient on its own. A full-board cooler is required. Elevated chamber temperature also accelerates wear, and thermal damage is unlikely to be covered by warranty.
5. **Do not call in-chamber annealing what the U1 cannot do.** Holding a finished print at 60 °C is a stress-relief and drying hold, not annealing. PLA needs 90–110 °C, polyamide needs 90–120 °C and polycarbonate needs 110–125 °C, all of which exceed the U1's 60 °C chamber limit. For those materials, remove the part and use a dedicated oven with the schedules in section 9.3. The bed can be held at up to 100 °C, which is useful for drying but is not a substitute.
6. **Choose the finishing route by material.** ABS and ASA take acetone. PVB takes IPA. HIPS takes D-Limonene. PLA, PETG, PCTG, PC and PA need mechanical finishing, a coating, or a laboratory solvent process. [[12 - Carbon Fiber and Glass Fiber Reinforced Composites (PLA-CF, PETG-CF, ABS-GF, ASA-CF, PA-CF, PAHT-CF, PC-CF)|CF and GF composites]] should be wet sanded, never dry sanded, because the dust is abrasive and an inhalation irritant.

## 11. Safety

This section is not optional reading. Every process above has a failure mode that causes injury or property damage, and most of them fail suddenly.

### 11.1 Solvent Fire and Vapour Control

- Acetone has a flash point of about −20 °C and an explosive range of roughly 2.5–13 % in air. At room temperature it is already producing flammable vapour, so "I am not heating it" is not a safety argument.
- IPA has a flash point around 12 °C, ethyl acetate around −4 °C, and D-Limonene around 45–48 °C. Acetone, IPA and ethyl acetate are already giving off flammable vapour at normal room temperature, and D-Limonene reaches that condition on a warm day or near a heat source.
- Work outdoors or under extraction. Never in a bedroom, basement, bathroom or attached garage with the door closed.
- Remove ignition sources: pilot lights, gas water heaters, furnaces, space heaters, angle grinders, vacuum motors, switched lamps, and any fan or pump inside the vapour chamber.
- Bond and ground metal containers when handling more than a litre, and use non-sparking tools.
- Keep a dry powder or CO₂ extinguisher within reach. Do not use a water jet on a solvent fire.
- Store solvents in their original, closed containers, away from heat and sunlight, and never in a container that looks like a drinks bottle.

### 11.2 Skin, Eyes and Respiratory Protection

- Acetone passes through nitrile gloves in minutes. For anything more than a splash, use butyl rubber or a laminated film glove. Nitrile is acceptable for IPA and D-Limonene for short handling.
- Wear sealed goggles rather than safety glasses when pouring or spraying solvent, and add a face shield for larger volumes.
- A NIOSH organic-vapour cartridge respirator helps with short exposures to acetone or IPA, but it is not a substitute for ventilation, and it offers no protection against isocyanates.
- D-Limonene is a skin sensitiser. Once sensitised, a person can react to citrus peel and fragrances permanently.

### 11.3 Sanding, Blasting, and Dust

- Sanding any plastic produces respirable dust. Wet sanding is the default method in this note because it suppresses dust and prevents friction melting at the same time.
- When dry sanding is unavoidable, wear at least an N95 or P2 respirator, sealed eye protection, and work with extraction or outdoors.
- Carbon fibre and glass fibre dust is abrasive, electrically conductive in the case of carbon, and an inhalation irritant. Keep composites wet, sand slowly, clean with a wet wipe rather than compressed air, and wear N95/P2 or better plus goggles.
- Media blasting with silica sand can cause silicosis. Use a blasting cabinet with extraction and supplied air, or a CE-approved blasting hood. Never blast in the open with a household dust mask.
- Vaporised primer and paint from a heat gun or torch is worse than the dust. Do not flame-polish or heat a painted part without respiratory protection and ventilation.

### 11.4 Epoxy, UV Resin and 2K Paint

- Epoxy hardeners are amine sensitisers. Once sensitised, a person can react to epoxy for years, and the reaction can be severe. Wear nitrile gloves, cover the arms, and avoid any skin contact with mixed resin.
- UV resins are acrylate sensitisers and irritants. Do not cure resin on skin, and do not sand partly cured resin without a respirator.
- Two-part isocyanate clear coats require supplied air. An organic-vapour cartridge alone is not sufficient protection against isocyanates, and isocyanate sensitisation can cause occupational asthma.

### 11.5 Heat and Ovens

- Butane torches, heat guns, ovens and molten salt all cause serious burns. Use tongs, leather gloves and eye protection, and keep a fire extinguisher nearby.
- A dedicated oven is required for polymer work. Do not use the kitchen oven, and do not store food in an oven that has been used for salt remelting.
- Powdered salt and plaster dust are respiratory irritants. Mix them outdoors or under extraction, and wear a dust mask.

## Related Notes

- [[00 - Filament Master Index]]
- [[08 - Surface Smoothing Slicer Techniques - Ironing and Beyond]]
- [[06 - Heating and Temperatures - Nozzle, Bed, and Chamber]]
- [[07 - Print Speeds and Volumetric Flow]]
- [[05 - Layer Height and Nozzle Size]]
- [[04 - Nozzles and Their Types]]
- [[01 - Drying Filament]]
- [[10 - Common Printing Issues, Debugging, and Physical Limits]]
- [[07 - ABS (Acrylonitrile Butadiene Styrene)]]
- [[08 - ASA (Acrylonitrile Styrene Acrylate)]]
- [[17 - PVB (Polyvinyl Butyral - Isopropyl Alcohol Smoothable Filament)]]
- [[10 - PA (Polyamide - Nylon 6, Nylon 12, and Nylon 6-66 Copolymers)]]
- [[12 - Carbon Fiber and Glass Fiber Reinforced Composites (PLA-CF, PETG-CF, ABS-GF, ASA-CF, PA-CF, PAHT-CF, PC-CF)]]

## Sources

1. [Improve your 3D prints with chemical smoothing — Prusa Research](https://blog.prusa3d.com/improve-your-3d-prints-with-chemical-smoothing_36268)
2. [Testing the strength of 3D prints re-melted in salt — CNC Kitchen](https://www.cnckitchen.com/blog/testing-the-strength-of-3d-prints-re-melted-in-salt)
3. [Better performing 3D prints with annealing, Part 1: PLA — CNC Kitchen](https://www.cnckitchen.com/blog/better-performing-3d-prints-with-annealing-but-part-1-pla)
4. [How to improve your 3D prints with annealing — Prusa Research](https://blog.prusa3d.com/how-to-improve-your-3d-prints-with-annealing_31088/)
5. [PC-Core ABS: annealing without the warping — CNC Kitchen](https://www.cnckitchen.com/blog/pc-core-abs-testing-dual-material-filament-for-warp-less-annealing)
6. [Does a heated chamber make your 3D prints stronger? — CNC Kitchen](https://www.cnckitchen.com/blog/does-a-heated-chamber-make-your-3d-prints-stronger)
7. [XTC-3D technical bulletin — Smooth-On](https://www.smooth-on.com/tb/files/XTC3D_TB.pdf)
8. [Reforming 3D prints with salt and heat — Hackaday](https://hackaday.com/2020/09/23/reforming-3d-prints-with-salt-and-heat)
9. [The complete guide to 3D printing post-processing — Wevolver](https://www.wevolver.com/article/the-ultimate-guide-to-3d-printing-post-processing-techniques)
10. [3D print post-processing: 16 ways — BigRep](https://bigrep.com/post-processing)
11. [How to smooth 3D prints: sanding to vapour smoothing — Additive Manufacturing Technologies](https://amtechnologies.com/learn/how-to-smooth-3d-prints)
12. [DragonBreath and Panda Breath chamber heater — Snapmaker U1 Extended Firmware](https://snapmakeru1-extended-firmware.pages.dev/panda_breath)

## Videos

1. [3DJake — 3D Print Smoothing with Acetone: The BEST Method Revealed!](https://www.youtube.com/watch?v=w8UoZHZCMJQ)
2. [Frankly Built — Smooth 3D Prints with NO SANDING! Vapor Smoothing Tutorial](https://www.youtube.com/watch?v=0PnX-zLpX1E)
3. [DIY Perks — Simple way to make ultra-smooth 3D prints at home](https://www.youtube.com/watch?v=6xFUNFG-UKE)
4. [GoEngineer — How to Smooth 3D Printed Parts the Easy Way](https://www.youtube.com/watch?v=XdfygdtRtsE)
5. [MatterHackers — How to Use XTC-3D to Smooth 3D Printed Parts](https://www.youtube.com/watch?v=ChkHuFU90WE)
6. [Smooth-On — How to Add Color and Effects to a 3D Printed Part Using XTC-3D Coating](https://www.youtube.com/watch?v=JaDVCq4QUH8)
7. [HEN3DRIK — How to Mirror Electroplate FDM 3D Prints, Full Tutorial](https://www.youtube.com/watch?v=7PFHT02n5V8)
8. [HEN3DRIK — Electroplating Cheap 3D Prints to Real Gold](https://www.youtube.com/watch?v=-dUYuYNoM3g)
9. [CNC Kitchen — The Strength of 3D Prints Remelted in Salt](https://www.youtube.com/watch?v=DyAKtS1b3SQ)
10. [free spirit 1 — Remelting 3D Printed Thermoplastics, the Salt Method](https://www.youtube.com/watch?v=nRLJ4ylGTFc)
11. [CNC Kitchen — Triple Your Layer Strength by Annealing 3D Prints in Plaster](https://www.youtube.com/watch?v=bG8dlxTX3AI)
12. [CNC Kitchen — Strong 3D Prints Through Annealing, Part 1: PLA](https://www.youtube.com/watch?v=dOzVuoBP9gY)
