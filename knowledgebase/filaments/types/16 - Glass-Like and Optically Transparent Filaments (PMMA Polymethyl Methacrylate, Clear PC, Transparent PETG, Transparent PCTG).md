---
title: "16 - Glass-Like and Optically Transparent Filaments (PMMA Polymethyl Methacrylate, Clear PC, Transparent PETG, Transparent PCTG)"
tags:
  - 3d-printing
  - filaments
  - pmma
  - polycarbonate
  - petg
  - pctg
  - transparent
  - optical
  - snapmaker-u1
---

| Nozzle temperature | Chamber temperature | Post-print temperature resistance | What it is good for | Additional notes |
| --- | --- | --- | --- | --- |
| 245–260 °C for PMMA. | About 50 °C with the Top Cover alone; 55–60 °C with a Panda Breath on community firmware. Keep the chamber at or below 60 °C. | About 60–80 °C continuous. The HDT at 0.45 MPa is 90–100 °C and the glass transition is 100–108 °C. HDT is not a service limit. | Light pipes, LED diffusers, display windows, scratch-resistant clear covers and decorative glazing. | PMMA is brittle. Dry it at 75–80 °C for 8–12 hours. It has good UV resistance but yellows slowly outdoors. It is not pressure-rated. |
| 270–290 °C for clear PC. | 50–60 °C. The Top Cover alone gives about 50 °C. A 60 °C chamber needs a Panda Breath and full motherboard cooling. | About 100–120 °C continuous. The HDT at 0.45 MPa is 110–140 °C. The glass transition is about 145–150 °C for pure PC and lower for easy-print blends. | Impact-resistant machine guards, clear covers for warm areas, tough windows and protective visors that are not safety-rated. | PC warps strongly. Dry it at 80–90 °C for 8–12 hours. It yellows in UV unless stabilized or coated. It is not pressure-rated. |
| 235–250 °C for transparent PETG. | Not required. Ambient 20–30 °C is ideal. The Top Cover is optional and mainly keeps dust off the print. | About 50–60 °C continuous. The HDT at 0.45 MPa is 68–76 °C and the glass transition is 78–81 °C. | Low-cost light diffusers, decorative windows, translucent panels and visual prototypes. | Dry it at 65 °C for 8–12 hours. It softens in a hot car. It is not pressure-rated. |
| 250–270 °C for transparent PCTG. | Not required. Ambient is suitable. The Top Cover is optional. | About 60–70 °C continuous. The HDT at 0.45 MPa is about 76 °C for Fiberlogy PCTG. The glass transition is higher and grade-dependent. | Tough clear parts, light pipes, non-food containers and parts that need more impact resistance than PETG. | Dry it at 60–65 °C for 6–8 hours. It is tougher than PETG. It is not pressure-rated. |

> [!abstract] Glass-like filaments in one paragraph
> PMMA, clear polycarbonate (PC), transparent PETG and transparent PCTG are amorphous thermoplastics, so their bulk resin can transmit most visible light instead of scattering it from crystals. A fused-filament print is still not a sheet of glass. The layer boundaries, the tiny gaps between adjacent beads and the rough top and bottom surfaces scatter light, which is why an untreated print looks hazy or frosted even when the spool is water-clear. The practical goal is a translucent-to-clear part with good light transmission, not a laboratory-grade optical component. You can get impressive results on a Snapmaker U1 with dry filament, a slow and fully solid aligned-rectilinear toolpath, no part cooling and a smooth build plate. You cannot remove every internal void, and a surface coating only fixes the surface.

## 1. What "clear" means for a 3D print

A transparent polymer is not automatically a transparent print. Light travelling through a printed part meets four kinds of obstacle:

1. **The polymer itself.** Amorphous polymers such as PMMA, PC, PETG and PCTG do not contain crystalline regions large enough to scatter visible light. Their bulk transmission is high, and their refractive indices are given in the table below.
2. **The interfaces between polymer and air.** Every gap between two extrusion beads, every incomplete fusion between layers and every internal void has a polymer-to-air boundary. The refractive index changes from about 1.49–1.59 in the polymer to 1.00 in air, so light bends and scatters at each boundary. A hundred small boundaries produce haze even when each boundary is tiny.
3. **Surface roughness.** Layer lines act as tiny cylindrical lenses. A rough top surface and a rough bottom surface send light in many directions. Polishing or coating can fix this part of the problem.
4. **Pigment, contamination and degradation.** Carbonised specks, dust, pigment particles and yellowed or degraded polymer absorb or scatter light. Clean, natural or clear resin and a clean hotend matter more than most slicer settings.

The bulk transmission figures quoted by manufacturers are measured on moulded plaques, not on printed parts. A resin with 92% bulk transmission can produce a print with far less useful transmission because of the boundaries described above. Treat the figures as an upper bound and as a way to compare polymers, not as a prediction of printed clarity.

### Typical optical and thermal properties

| Polymer | Bulk luminous transmission at about 2 mm | Refractive index, n_D | HDT at 0.45 MPa | Practical continuous service, not a design limit | UV and outdoor behaviour | Impact behaviour |
| --- | --- | --- | --- | --- | --- | --- |
| PMMA | 91–92% | 1.491 | 90–100 °C | About 60–80 °C | Good for an organic plastic, but it yellows slowly and can chalk after years outdoors. | Brittle. It chips and cracks rather than yielding. |
| Clear PC | 88–89% | 1.585 | 110–140 °C | About 100–120 °C | Poor unless the grade is UV-stabilised or the part is coated. It yellows and embrittles outdoors. | Very tough in bulk, but printed layer adhesion and defects reduce that advantage. |
| Transparent PETG | 88–90% | 1.570 | 68–76 °C | About 50–60 °C | Moderate. It is more resistant than PC but not a long-term outdoor material. | Tough and ductile. |
| Transparent PCTG | 90–91% | 1.565 | About 70–76 °C | About 60–70 °C | Good, broadly similar to PETG, although not a permanent outdoor material. | Very tough. Fiberlogy quotes a notched Izod value of about 92 kJ/m² for its PCTG, but that figure cannot be compared directly with Charpy values from another datasheet. |

The glass transition temperature is not a working temperature. PMMA softens near 100–108 °C, PETG near 78–81 °C, and pure PC near 145–150 °C. Easy-print PC blends can have a glass transition in the 113–125 °C range. A part that feels rigid at room temperature can creep or sag well below its glass transition when it carries a load.

### What each polymer is actually good at

- **PMMA** is the clearest of the four in bulk, and its surface is the hardest. It is the best choice for a decorative window, a light guide or a display cover that will be handled and polished. Its weakness is impact: a sharp knock can crack it, and a printed PMMA part is weaker across the layers than the bulk datasheet suggests.
- **Clear PC** is the choice when impact resistance and heat resistance matter more than ultimate clarity. It is not a substitute for polycarbonate sheet in a safety application, and a printed PC window is not bullet-resistant.
- **Transparent PETG** is the easiest and cheapest route to a clear-ish part. It prints on the stock U1 hotend, is less sensitive to moisture than PC or PMMA, and produces good light diffusers and decorative panels. It still needs drying, and it is not a high-temperature material.
- **Transparent PCTG** sits between PETG and PC in toughness and heat resistance. It is tougher than PETG, slightly clearer in many grades and still easy to print. It costs more and is sold by fewer brands.

## 2. Printing clear parts on the Snapmaker U1

The U1 has a maximum nozzle temperature of 300 °C, a maximum bed temperature of 100 °C and no stock chamber heater. All four polymers fit inside those limits, but clear PC and PMMA need care because they warp and because the U1 cannot reach the chamber temperatures that large PC parts would prefer. The stock hotends are 0.4 mm stainless steel units, and the optional hardened-steel hotends are sold as four-packs of one diameter. Snapmaker does not support mixing nozzle diameters in one print.

### 2.1 Drying

Moisture is the most common cause of a hazy or bubbly clear print. Water absorbed by the filament turns to steam in the melt, and the steam forms bubbles that scatter light. The effect is much more visible in a clear part than in a black one.

| Polymer | Drying temperature | Drying time | Notes |
| --- | --- | --- | --- |
| PMMA | 75–80 °C | 8–12 hours | The 3Diakon datasheet recommends 70–80 °C for 6–12 hours. Stay at the lower end if the spool is not rated for 80 °C. |
| Clear PC | 80–90 °C | 8–12 hours | PC needs thorough drying, but check the spool and dryer ratings before running at 90 °C. |
| Transparent PETG | 65 °C | 8–12 hours | Do not exceed about 70 °C, or the strands can soften and fuse on the spool. |
| Transparent PCTG | 60–65 °C | 6–8 hours | Fiberlogy lists 60 °C for 4 hours; a longer cycle is reasonable for an optical print. |

Use a dryer that can actually reach the setpoint. Not every single-spool dryer reaches 80–90 °C, and a dryer that claims 70 °C may not hold that temperature with a full spool inside. Store the spools at 10–15% relative humidity or lower, and feed the printer from a sealed dry box when a print lasts many hours. See [[01 - Drying Filament]], [[02 - Storing Filament]] and [[03 - Combining Storing and Drying - Science and Rational Approach]].

### 2.2 Hotend and nozzle

- The stock 0.4 mm stainless steel hotend is suitable for all four polymers. A nickel-plated copper nozzle is not mandatory. What matters is that the melt path is clean and that the nozzle tip is free of carbonised residue.
- If you print clear filament often, dedicate one toolhead to it. Dark pigment residue in a shared melt zone can appear as grey streaks in the first part of a clear print. The U1 is a toolchanger, so a dedicated clear toolhead is practical.
- Clean the nozzle with a nylon brush or a clean cloth. Avoid a brass brush on a hot nozzle, because bristles can shed metal fragments or wear the tip.
- A cold pull with nylon cleaning filament removes burnt specks from the melt zone. Do this before a long optical print rather than after the first bad part.
- A 0.6 mm or 0.8 mm nozzle reduces the number of perimeter-to-infill boundaries and can make a part look clearer, but the wider bead is harder to squeeze into a solid wall without leaving gaps. The 0.4 mm nozzle remains the best starting point. If you change diameter, fit a complete official hotend; do not assume that a mixed-diameter print is supported.
- Abrasive clear composites are uncommon, but if you use one, fit a hardened-steel hotend. Unfilled PMMA, PC, PETG and PCTG do not need one.

### 2.3 The solid-glass slicer recipe

The recipe below is the one popularised by Rygar1432's "How To Print Glass" model and tested by CNC Kitchen. It works because it reduces the number of air-polymer boundaries and gives the molten bead time to wet the previous track.

- **Layer height:** 0.10–0.12 mm. Thin layers flatten the roughly cylindrical gap between adjacent beads and make the top surface less stepped.
- **Line width:** 0.50 mm on a 0.4 mm nozzle. This is 125% of the nozzle diameter. The wide bead presses against its neighbour and helps fill the triangular gap between passes.
- **Flow ratio:** 101–103%. This is deliberate slight over-extrusion. More than that causes ridges, blobs and a worse top surface; less leaves gaps.
- **Infill:** 100%, with **aligned rectilinear** at the same angle on every layer. Do not use grid, cubic, gyroid or crosshatch. Those patterns cross each other and trap a regular grid of voids at every intersection.
- **Top and bottom shells:** zero top and zero bottom shells, so the aligned infill runs from the bottom to the top of the part. The top surface will be rough until it is ironed or sanded.
- **Walls:** one or two perimeters, with 25–35% infill-to-wall overlap. More walls add more vertical boundaries and can make a small part hazier.
- **Part cooling:** 0%. The hotend heatsink fan must stay on, but the part-cooling fan should be off. Forced air freezes the bead surface before it can level and traps voids.
- **Speed:** about 20 mm/s for the solid optical region. This is slow enough for the bead to wet its neighbour. The exact limit depends on the hotend and the polymer; 15–25 mm/s is the useful range.
- **Volumetric flow:** cap the optical region at about 1.5–2.5 mm³/s. For ordinary structural clear parts, 8–12 mm³/s is a reasonable ceiling.
- **Retraction:** 0.4–0.6 mm at about 25 mm/s. Disable Z-hop. A short retraction leaves fewer marks, and avoiding Z-hop reduces the chance of dragging a blob or pulling air into the melt.
- **Ironing:** optional. A top-surface iron at about 20 mm/s, 18–22% flow and 0.10 mm spacing can flatten the top, but it can also add haze if the temperature is too high. Test it on a scrap block.

For a thin-walled vase or lamp shade, a 0.6 mm or 0.8 mm nozzle with a 0.28–0.35 mm layer and a 0.80–1.00 mm line width produces a single wall with no internal grid. It is usually more translucent than a solid block, but it is still not optically clear. Keep the speed low enough that the volumetric rate stays modest.

### 2.4 Nozzle, bed and chamber temperatures

| Polymer | Nozzle | Bed | Chamber |
| --- | --- | --- | --- |
| PMMA | 245–260 °C | 95–100 °C. Use 100 °C only if the plate and adhesive are rated for it; that is the U1 maximum. | About 50 °C with the Top Cover; 55–60 °C with a Panda Breath on community firmware. |
| Clear PC | 270–290 °C | 90–100 °C. Do not use the 105–115 °C figures from generic PC profiles; the U1 cannot reach them. | 50–60 °C. The Top Cover alone is marginal for large parts. |
| Transparent PETG | 235–250 °C | 70–80 °C | Not required. Ambient is fine. |
| Transparent PCTG | 250–270 °C | 85–90 °C | Not required. Ambient is fine. |

Use a smooth PEI sheet or a clean glass plate for the bottom face. A textured plate imprints a matte pattern that is very difficult to polish out. A thin layer of glue stick or PVA serves two purposes: it helps the first layer stick, and it acts as a release layer so that a large PC or PMMA part does not tear the plate or crack as it cools. Do not use a solvent or a release agent that attacks the polymer.

> [!warning] Chamber limits on the U1
> The U1 has no stock chamber heater. The optional Top Cover is passive and raises the chamber to about 50 °C at best. The BIQU Panda Breath can hold up to 60 °C, but only with community firmware: paxx12's Snapmaker U1 Extended Firmware in WebSocket mode, or DragonBreath. Stock U1 firmware does not control it. Before fitting a chamber heater, add a full motherboard cooling solution. The RK3562 begins thermal throttling at 85 °C, and there are documented mid-print failures. A 6015 fan that cools only the stepper drivers does not cool the RK3562 and is not sufficient. Do not set a 65 °C chamber profile; the machine cannot hold it, and the added heat increases wear.

### 2.5 Multi-toolhead printing

A toolchanger is useful for clear parts because each material has its own melt zone. A clear toolhead does not have to purge out black pigment from a previous opaque print, so the first clear layer is clean. That is a real advantage over a single-nozzle printer with a shared melt zone.

It is not a zero-purge system. A toolchange still needs a prime and wipe, and a wipe tower or a purge block is still necessary. Keep the clear toolhead's nozzle clean, and sequence the print so that the clear material is not left hot and idle for a long time. Printing an opaque housing with one toolhead and a clear window or light pipe with another is a good use of the U1, provided the two materials bond well enough for the application. PLA and PETG, for example, do not bond strongly, so a mechanical interlock is safer than relying on adhesion.

## 3. Polymer notes

### 3.1 PMMA

PMMA, or polymethyl methacrylate, is the polymer sold as acrylic, Plexiglas and Lucite. Its refractive index is 1.491 and its Abbe number is about 58, which is why cast acrylic is used for lenses and light guides. The bulk polymer transmits about 92% of visible light at 2 mm, and it is harder and more scratch-resistant than PC or PETG.

PMMA is also brittle. A sharp impact can chip or crack it, and a printed part has weak layer bonds that make the problem worse. Design with generous fillets, avoid sharp internal corners and do not use PMMA for a part that will be dropped or hit. Its thermal expansion is relatively high, so large parts can warp and crack during cooling. An enclosure and a slow cooling cycle help, but they do not make PMMA tough.

PMMA has good UV and weathering resistance for a thermoplastic, but "good" does not mean permanent. Outdoor exposure causes slow yellowing and surface chalking over years, and the rate depends on the grade, the intensity of the sunlight and how the part is cleaned. A PMMA window that faces the sun every day will not stay water-clear forever. This is still better than unstabilised PC, which yellows much faster.

Print PMMA at 245–260 °C with a bed at 95–100 °C. The 3Diakon datasheet gives 245–265 °C and a 100 °C bed, so the U1 can print it at the top of the range. Dry it at 75–80 °C for 8–12 hours. Use a chamber at about 50 °C if you have only the Top Cover, and 55–60 °C if you have a Panda Breath with the required firmware and motherboard cooling. PMMA gives off methyl methacrylate vapour when it is heated, so print it with ventilation and filtration, not in a bedroom.

PMMA can be wet-sanded and polished to a high gloss, and it can be flame-polished with a small butane torch. Flame polishing is a skill: too much heat warps the part, and a sooty flame deposits carbon. Practise on scrap, keep the torch moving and do not flame-polish PC, PETG or PCTG.

### 3.2 Clear polycarbonate

Polycarbonate is an amorphous engineering thermoplastic with a refractive index of 1.585 and a bulk transmission of about 88–89% at 2 mm. Pure PC has a glass transition near 145–150 °C, a high HDT and very high impact resistance. Easy-print PC blends trade some heat resistance for lower warping and lower printing temperatures.

PC is the most difficult of the four on a U1 because many generic profiles assume a hot chamber and a bed above 100 °C. The U1 has no stock chamber heater, and its bed stops at 100 °C. A practical U1 profile uses a 270–290 °C nozzle, a 90–100 °C bed and a 50–60 °C chamber. Large parts may still warp. Use a brim, a glue-stick release layer and a slow first layer, and let the part cool slowly with the Top Cover closed.

Dry clear PC at 80–90 °C for 8–12 hours. Moisture in PC hydrolyses the carbonate groups at printing temperature, which reduces molecular weight and impact strength even before bubbles become visible. The same moisture also creates the haze that ruins a clear part. Print PC with ventilation and particle filtration; fused-filament printing emits ultrafine particles, and a printer running for hours in a closed room is not a good idea.

PC yellows and embrittles under UV unless the grade contains a UV stabiliser or the part is coated. A clear PC window that faces sunlight should have a UV-blocking clear coat, and even then it is not a permanent outdoor material. PC is also susceptible to environmental stress cracking. Acetone and some other solvents can craze a stressed part, and IPA can do the same to a part that already carries moulding or printing stress. Wipe PC gently and avoid solvent soaking.

A printed PC part is not bullet-resistant, safety glass or a pressure window. The bulk polymer is tough, but a printed part contains layer boundaries and voids that concentrate stress. Use PC for a machine guard, a decorative cover or a warm-environment window, not for a safety barrier.

### 3.3 Transparent PETG

PETG is the easiest of the four. It has a refractive index of 1.570, a bulk transmission of about 88–90% at 2 mm, a glass transition of 78–81 °C and an HDT of 68–76 °C at 0.45 MPa. It prints at 235–250 °C on a 70–80 °C bed, needs no chamber and tolerates a wider range of cooling and speed than PMMA or PC.

The catch is heat resistance. PETG creeps under sustained load and softens in a hot car. A clear PETG window that is exposed to direct summer sun can sag or distort. It is also more prone to stringing and blobbing than PLA, and those blobs become visible defects in a clear part. Dry it at 65 °C for 8–12 hours, keep the nozzle clean and use the slow solid recipe for the optical region.

PETG is the best budget choice for light diffusers, decorative panels and visual prototypes. It is not the best choice for a part that must hold a load at 60 °C, and it is not a pressure material.

### 3.4 Transparent PCTG

PCTG is a copolyester in the same family as PETG. It replaces more of the ethylene glycol with cyclohexanedimethanol, which gives a more irregular chain and a higher glass transition. The bulk transmission is about 90–91% at 2 mm and the refractive index is 1.565. Fiberlogy lists an HDT of 76 °C at 0.45 MPa and a notched Izod impact strength of about 92 kJ/m² for its PCTG. Those are manufacturer figures for a specific grade, not universal constants.

PCTG is tougher than PETG and has a higher HDT, so it is a better choice for a clear part that will be handled or that will see warm conditions. It prints at 250–270 °C on an 85–90 °C bed and does not require a chamber. Fiberlogy recommends 60 °C for 4 hours of drying; 60–65 °C for 6–8 hours is a reasonable optical cycle.

PCTG is not immune to UV, heat or creep. Its UV resistance is broadly similar to PETG, and a clear PCTG part left outdoors for years will eventually change. It is also not a pressure material. The Pure TR grade from Fiberlogy is marketed as suitable for food contact, but a printed part is not automatically food-safe because the layer boundaries can harbour bacteria and because the hotend and environment add contamination. Do not use a printed PCTG part for food or drinking water without a specific certification.

## 4. Post-processing

### 4.1 Wet sanding and polishing

Wet sanding is the most reliable way to improve the surface of a clear print. Work through 400, 600, 800, 1000, 1500, 2000 and 3000 grit silicon carbide paper under soapy water. Keep the paper wet and the part wet. Dry sanding heats the polymer, clogs the paper and produces a deeper haze. If any dry sanding is unavoidable, wear a dust mask and eye protection.

After sanding, polish with a plastic polish such as Novus #2 or an automotive headlight compound on a soft cotton wheel at low speed. Finish with a fine polish or a plastic cleaner. The result can be optically clear on the surface, but the interior of the part will still contain the layer boundaries and voids that the sanding cannot reach.

### 4.2 Clear coatings

A clear coat can fill the surface grooves and make a sanded or lightly textured part look much clearer. A two-part urethane clear, a low-viscosity UV-curable resin or a thin epoxy can all work. The coating should be thin, applied in several coats and tested on scrap first. A coating with a refractive index near 1.5 is close to PMMA and PETG; it is less close to PC, but it still fills the grooves and reduces surface scattering.

A coating fixes the surface only. It does not remove internal voids, layer boundaries or contamination. A print that is milky because of wet filament or a bad infill pattern will still be milky after coating. A dip or spray cannot turn a milky print into a crystal-clear one; it only improves the surface.

Two-part urethane clear coats contain isocyanates and solvents. Wear gloves and eye protection, and work in a ventilated space. UV resins can cause skin sensitisation. Follow the manufacturer's safety data.

### 4.3 Flame polishing

Flame polishing works on PMMA because the surface melts and flows before the bulk distorts. Use a small butane micro-torch, keep the flame moving and make short passes. Practise on a scrap piece. Too much heat warps the part, and a sooty flame leaves carbon in the surface. Do not flame-polish PC, PETG or PCTG; those polymers bubble, soot or distort before they gloss over.

### 4.4 What not to do

- Do not wipe a stressed PMMA or PC part with acetone. It can craze or dissolve the surface.
- Do not soak a stressed PC part in IPA. It can produce environmental stress cracking.
- Do not dry-sand clear polymers. The heat and the dust make the haze worse.
- Do not use a coating to hide wet-filament bubbles. Dry the filament instead.
- Do not assume that a polished print is an optical lens. A lens needs a designed surface, a controlled focal length and both faces polished.

## 5. Applications and honest limits

Clear FFF parts are good for:

- **Light pipes and LED diffusers.** PMMA and PC have low bulk attenuation, and a short, thick light pipe with smooth walls can carry light around a bend by total internal reflection. Layer boundaries still leak light, so keep the pipe short and the walls smooth.
- **Display windows and decorative panels.** A thin clear PETG, PCTG or PMMA window is fine for a model, a display case or a lamp. It is not a structural window.
- **Machine guards and covers.** Clear PC is the best choice when impact resistance matters, provided the part is not a safety barrier and does not need a pressure rating.
- **Visual prototypes.** A clear print lets you see internal features, fluid paths or assembly fit. This is useful even when the part is not optically perfect.
- **Atmospheric-pressure fluid visualisation.** A clear printed channel can show liquid flow or bubbles at ambient pressure. It is not a sight glass for a pressurised line.

Clear FFF parts are not suitable for:

- **Pressure sight glasses, pressure gauges, autoclave windows or any pressurised vessel.** An FDM part has layer boundaries and voids, and it has no pressure rating. A leak or a sudden failure can release hot fluid or steam. Use certified glass or a rated metal window for the pressure boundary, and print only the frame or the gasket holder.
- **Safety glasses, face shields or ballistic protection.** A printed part is not certified and its layer adhesion is not predictable.
- **Food or drinking-water contact** unless the entire process and material are certified. A "food-safe" filament label does not make a printed part food-safe.
- **High-temperature structural parts.** PMMA, PETG and PCTG soften well below the temperatures that PC can survive, and PC is limited by the U1's 60 °C chamber and 100 °C bed.
- **Precision optical instruments.** Printed lenses need grinding and polishing, and even then the surface quality and dimensional control are far below a glass or resin lens. Print the mount, not the imaging element.

## 6. Snapmaker U1 hardware settings

| U1 subsystem | Setting for clear filament |
| --- | --- |
| Hotend and nozzle | Use the stock 0.4 mm stainless steel hotend, or a dedicated clear hotend. A 0.6 mm or 0.8 mm official hotend can reduce boundaries, but different diameters cannot be mixed in one official print. |
| Build plate | Smooth PEI or clean glass. Use a glue stick or PVA release layer. The bed maximum is 100 °C. |
| Top Cover | Close it for PMMA and PC to hold about 50 °C and keep dust off. It is optional for PETG and PCTG. |
| Panda Breath | Off for PETG and PCTG. For PMMA and PC, 55–60 °C is possible only with community firmware and full motherboard cooling. Stock firmware does not control it. |
| Dryer | Use an active dryer or dry box that reaches the setpoint: 75–80 °C for PMMA, 80–90 °C for PC, 65 °C for PETG and 60–65 °C for PCTG. |
| Toolheads | Dedicate one toolhead to clear material if possible. Use a prime and wipe sequence; the toolchanger is not a zero-purge system. |
| Firmware | Stock U1 firmware does not control the Panda Breath. Use paxx12's Snapmaker U1 Extended Firmware or DragonBreath, and add motherboard cooling before running a chamber heater. |
| Cooling | Part-cooling fan off for the optical region. The hotend heatsink fan must remain on. |

## 7. Real demonstration models

1. **[How To Print Glass](https://www.printables.com/model/15310-how-to-print-glass)** by Rygar1432 is the best-known clear-print guide and test block. It popularised the slow, fully solid, aligned-rectilinear approach with no top or bottom shells. The page includes the original settings and a printable test piece.
2. **[Test Model for Transparent PETG printing](https://www.printables.com/model/273948-test-model-for-transparent-petg-printing)** by CNC Kitchen is a small test part for dialling in clear PETG or PCTG. The published baseline is a 0.4 mm nozzle, 230 °C, an 80 °C bed, 0.12 mm layers, one perimeter, zero top and bottom layers, 100% aligned rectilinear infill, 102% flow, 0% cooling and 15 mm/s. It is a useful calibration print before a larger optical part.
3. **[LED Light Pipe and Lens for Original Prusa MMU3](https://www.printables.com/model/889847-led-light-pipe-and-lens-for-original-prusa-mmu3)** by dteng is a light-pipe and lens insert for an MMU3 cover. The designer printed it in MatterHackers translucent clear PETG at 0.2 mm with five perimeters. It demonstrates light transmission and a simple lens shape, not a polished imaging lens.
4. **[Clear as glass PETG](https://makerworld.com/en/models/725342-clear-as-glass-petg)** is a sample model and profile for clear PETG. The designer uses a 0.1 mm layer, 100% infill and a smooth plate, and notes that a textured plate leaves a frosted bottom face. It is a good demonstration of why the build surface matters.
5. **[Photography LED Light Diffuser](https://makerworld.com/en/models/1965637-photography-led-light-diffuser)** is a vase-mode diffuser printed in clear PETG with fuzzy skin. It is a good example of a translucent diffuser rather than a clear window, and it shows how wall count, fuzzy skin and colour affect the light.

## 8. Videos

1. **[Transparent FDM 3D Prints are Clearly Stronger!](https://www.youtube.com/watch?v=9qb25Gi4Jv0)** by CNC Kitchen tests clear PETG and the aligned-infill parameter, and links both the Rygar1432 settings and a small test model. It is the best single explanation of why the slow solid recipe works.
2. **[How to create transparent 3D prints!](https://www.youtube.com/watch?v=QkfQri2B0PY)** by Made with Layers (Thomas Sanladerer) is a practical guide to clearer FFF parts. It covers the material and slicer choices, and it shows what can and cannot be achieved with clear filament.
3. **[Transparent Filament 3D Printing: 6 Tips for Actually Clear Prints](https://www.youtube.com/watch?v=u6_MopcjhBw)** by Shreyash Gupta covers drying, layer alignment, wall thickness, cooling, orientation and support placement. It is useful because it treats clear printing as a whole workflow rather than a single slicer trick.
4. **[Comparing Transparent Filament | PCTG vs PETG vs PC (on Prusa Core One)](https://www.youtube.com/watch?v=Ojc5wNo6cxE)** by The Scrappy Creative compares 3D-Fuel Pro PCTG, ELEGOO PC and VOXEL PETG+. The conclusion is that none of them is best for every use; the choice depends on clarity, toughness and heat resistance.
5. **[Transparent Filaments | Tips to Improve See Through 3D Prints](https://www.youtube.com/watch?v=lnQb7pMPY3I)** by Core Electronics is an overview of the settings that make translucent parts clearer. It is a good companion to the model pages above.

## 9. Commercially available clear filaments

The links below were checked in October 2026. Prices change frequently, so the table does not quote them. Check the linked page for the current price and spool size.

| Brand | Product | Polymer | Notes | Link |
| --- | --- | --- | --- | --- |
| FormFutura | 3Diakon | PMMA | A PMMA filament made with Mitsubishi Chemical resin. The datasheet gives 91.5% transmission, a 245–265 °C nozzle, a 100 °C bed and 70–80 °C drying for 6–12 hours. | [FormFutura](https://formfutura.com/product/3diakon/) |
| JUSBER | PMMA Filament, Clear | PMMA | A clear PMMA on a 1 kg spool with a claimed diameter tolerance of ±0.03 mm. The published data is thin, so dry it and test it before a large print. | [Amazon](https://www.amazon.com/dp/B0BJ1DXRW1) |
| Polymaker | PolyLite PC, Transparent | Clear PC | A clear polycarbonate sold on a 1 kg spool. It is a good starting point for a tough clear part, but it needs drying and a warm chamber. | [Amazon](https://www.amazon.com/dp/B09KKMLKRF) |
| ELEGOO | PC Filament, Transparent | Clear PC | A clear PC marketed for light-transmitting parts. It is another option for a tough clear part. | [Amazon](https://www.amazon.com/dp/B0DSHXHMJ9) |
| kexcelled | PC Filament, Clear | Clear PC | A clear PC with a claimed diameter tolerance of ±0.03 mm. It is another option for impact-resistant clear parts. | [Amazon](https://www.amazon.com/dp/B09FDRMQDG) |
| Creality | Hyper PC, Clear | Clear PC | A clear PC marketed for high-speed printing up to 300 mm/s. That is a machine-speed claim, not a guarantee at a 0.4 mm nozzle, and clear parts still need slow solid infill. | [Amazon](https://www.amazon.com/dp/B0DJ2NBGWN) |
| Overture | High Speed PETG, Transparent | Transparent PETG | A high-flow clear PETG. The clear-print guides used Overture PETG, but this listing is the high-speed version, so start with a test block rather than assuming identical behaviour. | [Amazon](https://www.amazon.com/dp/B07SB761QR) |
| Prusa Polymers | Prusament PETG Clear | Transparent PETG | In-house extruded PETG with a stated diameter tolerance of ±0.02 mm and a well-documented profile. It is a reliable reference material for clear PETG. | [Prusa e-shop](https://www.prusa3d.com/product/prusament-petg-clear-1kg/) |
| SUNLU | PETG, Transparent | Transparent PETG | A clear PETG with a claimed diameter tolerance of ±0.02 mm. It is widely available and works well for diffusers and decorative parts. | [Amazon](https://www.amazon.com/dp/B085TGGV3L) |
| ELEGOO | Rapid PETG, Transparent | Transparent PETG | A high-flow clear PETG marketed for speeds up to 600 mm/s. The high-flow formulation is convenient, but the optical region should still be printed slowly. | [Amazon](https://www.amazon.com/dp/B0D7QF9JN7) |
| Bambu Lab | PETG Translucent, Clear | Transparent PETG | A translucent PETG rather than a water-clear one. It is a good diffuser material and is easy to source, but do not expect the clarity of a well-tuned clear PETG block. | [Bambu Lab](https://us.store.bambulab.com/products/petg-translucent) |
| Fiberlogy | PCTG Pure TR | Transparent PCTG | A clear PCTG with a 250–270 °C nozzle, a 90 °C bed and an HDT of 76 °C at 0.45 MPa. The maker lists the Pure TR grade as suitable for food contact, but a printed part is not automatically food-safe. | [Fiberlogy](https://fiberlogy.com/en/filaments/pctg-en/pctg-pctg-en/) |
| extrudr | PCTG, Transparent | Transparent PCTG | An Austrian-made clear PCTG on a 0.8 kg spool. It is a good European option for tough clear parts. | [Amazon](https://www.amazon.com/dp/B0BQYX681S) |
| 3D BEST-Q | PCTG, Clear | Transparent PCTG | A clear PCTG. The listing claims resistance to 100 °C, but that is a marketing claim, not a continuous service rating. | [Amazon](https://www.amazon.com/dp/B08TW5BSFN) |

## 10. Related notes

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
- [[05 - PETG (Polyethylene Terephthalate Glycol-Modified)]]
- [[06 - PCTG (Polycyclohexylenedimethylene Terephthalate Glycol-Modified)]]
- [[11 - PC (Polycarbonate and PC-ABS, PC-PBT Engineering Alloys)]]
- [[13 - PET (Polyethylene Terephthalate - Unmodified Crystalline PET and PET-CF)]]
- [[17 - PVB (Polyvinyl Butyral - Isopropyl Alcohol Smoothable Filament)]]

## 11. Sources

- FormFutura, *3Diakon PMMA filament* product page and technical datasheet. [formfutura.com](https://formfutura.com/product/3diakon/)
- Fiberlogy, *PCTG* product page and technical data. [fiberlogy.com](https://fiberlogy.com/en/filaments/pctg-en/pctg-pctg-en/)
- Prusa Research, *Materials guide*. [help.prusa3d.com](https://help.prusa3d.com/materials)
- Snapmaker, *Snapmaker U1 Toolchanger 3D Printer* specifications. [snapmaker.com](https://www.snapmaker.com/snapmaker-u1)
- CNC Kitchen, *Transparent FDM 3D Prints are Clearly Stronger!* article. [cnckitchen.com](https://www.cnckitchen.com/blog/transparent-fdm-3d-prints-are-clearly-stronger)
- Rygar1432, *How To Print Glass*, Printables model 15310. [printables.com](https://www.printables.com/model/15310-how-to-print-glass)
