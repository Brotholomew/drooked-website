---
title: "20 - High-Density Metal-Filled and Sinterable Metal Filaments (BronzeFill, CopperFill, BrassFill, 316L and 17-4PH Stainless Steel)"
tags:
  - 3d-printing
  - filaments
  - metal-filled
  - sintering
  - bronze
  - copper
  - stainless-steel
  - abrasive
---

| Nozzle temperature | Chamber temperature | Post-print temperature resistance | What it is good for | Additional notes |
| :--- | :--- | :--- | :--- | :--- |
| 195–220 °C for decorative metal-filled PLA | Not required; ambient is correct | About 50–55 °C continuous. The PLA/PHA matrix softens near 55–60 °C. | Statues, plaques, coins, jewellery, props, and handles that need real weight and a patina | A hardened-steel hotend is required. The part can be sanded, tumbled and polished, but it cannot be sintered. ColorFabb BrassFill is discontinued. |
| 215–250 °C for Ultrafuse 316L and 17-4PH, starting at 235–245 °C | 40–50 °C with the Top Cover. Active chamber heating is not required. | Sintered 316L resists oxidation to about 800 °C, but structural use is limited to roughly 400–500 °C. 17-4PH H900 is limited to about 300 °C. | Functional prototypes, jigs, fixtures, small gears, replacement parts and tools after sintering | The U1 prints only the green part. Debinding needs nitric acid at about 120 °C, and sintering needs 1300–1380 °C with hydrogen or argon. The U1 cannot do either step. MatterHackers recommends a 100–120 °C bed, while BASF's guideline gives 90–105 °C, so the U1's 100 °C bed is workable but at the lower end. |
| 210–230 °C for Filamet bronze, copper and stainless steel | Ambient to about 35 °C | Sintered bronze and copper are useful to roughly 200–300 °C in air, limited by oxidation. The green part is limited by its polymer binder. | Sculptures, jewellery, heat sinks, induction coils and decorative metal parts after kiln sintering | Do not dry Filamet; the manufacturer states that drying degrades the binder. A 0.6 mm hardened-steel nozzle is recommended. Sintered density is typically 90–95%. The U1 cannot sinter it. |

> [!abstract] Overview
> Metal-filled filaments look similar on a spool, but they belong to two different technologies. Decorative metal-filled PLA and PLA/PHA contain metal powder for weight, feel and finish. The printed part is still a polymer composite, and it is finished by sanding, tumbling and polishing. Sinterable bound-metal filaments contain much more metal and an engineered polymer binder. The printer makes a fragile "green part", which is then debound and sintered into dense metal in a furnace.
>
> The Snapmaker U1 can print both families. It cannot sinter either of them: the decorative grades are not sinterable at all, and the sinterable grades need a furnace that the U1 does not have. Its maximum nozzle temperature is 300 °C, its maximum bed temperature is 100 °C, and it has no chamber heater or furnace. The U1 also cannot perform catalytic debinding with nitric acid or supply a hydrogen or argon atmosphere. For sinterable steel, the realistic workflow is to print the green part on the U1 and send it to a debinding and sintering service, or to own a suitable furnace and gas-handling system.

## 1. Two families of metal filament

The first family is decorative. ColorFabb bronzeFill and copperFill, ColorFabb steelFill, FormFutura MetalFil and Proto-pasta Steel-filled PLA all use a thermoplastic matrix, usually PLA or a PLA/PHA blend, filled with fine metal powder. These materials print like a dense, abrasive PLA. They are heavier than ordinary PLA, they feel cold, and they can be polished until the metal particles form a bright surface. They are not sinterable. If you put one in a furnace, the polymer burns away and the remaining metal powder collapses into a porous, distorted lump.

The second family is sinterable. Forward AM Ultrafuse 316L and 17-4PH, and The Virtual Foundry's Filamet range, use a metal powder loading high enough that the particles can bond into a solid body during sintering. The printed part is called a green part. Debinding removes most of the polymer, leaving a brown part. Sintering then fuses the metal particles by solid-state diffusion. The result is a dense metal part with properties close to those of wrought or metal-injection-moulded alloys.

The practical difference is the volume fraction of metal, not just the weight percentage. A filament can be 80 wt% metal and still be mostly polymer by volume, because metal is much denser than plastic. That is why decorative metal-PLA cannot be sintered and why sinterable filaments need a carefully designed binder system.

| Family | Typical metal content | What the printer produces | What finishing can do | Can the U1 finish it? |
| :--- | :--- | :--- | :--- | :--- |
| Decorative metal-filled PLA/PHA | About 60–80 wt% metal | A polymer composite with metal particles suspended in the matrix | Sanding, tumbling and polishing expose and smear the metal particles | Yes, fully, apart from normal wear on the hotend |
| Sinterable bound metal | About 80–90 wt% metal | A fragile green part with metal particles packed in a multi-stage binder | Debinding and sintering are required; polishing alone only improves the green or brown surface | No. The U1 can print the green part, but it cannot debind or sinter it. |

## 2. Chemistry and metallurgy

### Decorative metal-filled PLA and PLA/PHA

ColorFabb bronzeFill uses fine bronze powder in a PLA/PHA blend. The current product page gives a density of 3.9 g/cm³ and describes the material as PLA/PHA with fine bronze powder. ColorFabb does not publish the exact bronze grade on that page, so it is better not to claim a specific CuSn number. copperFill uses fine copper powder in the same PLA/PHA family and is also listed at 3.9 g/cm³. steelFill uses fine steel powder in PLA/PHA and is listed at 3.13 g/cm³.

FormFutura MetalFil Ancient Bronze is described as PLA with 80% bronze filling. MetalFil Classic Copper is described as PLA with 60% copper filling. MetalFil Brass is still listed, but FormFutura does not state a percentage on the product page. ColorFabb BrassFill is discontinued; the old product URL now returns a 404. If you want a brass-filled decorative filament, FormFutura MetalFil Brass is the only brass-filled product verified for this note.

Proto-pasta's Steel-filled Metal Composite PLA uses real stainless-steel powder in PLA and is listed at approximately 2.30 g/cm³. Since late February 2025 the standard steel PLA has been made with 400-series stainless steel rather than 300-series. The 400-series material is magnetic, is not a permanent magnet, and contains no nickel. Older lots and the older 300-series product are different, so check the lot code if nickel content matters to you.

These decorative materials are composites, not alloys. The polymer matrix dominates the mechanical behaviour. The metal powder adds density, thermal mass and a metallic surface, but it does not make the part strong like metal. A BronzeFill part is brittle compared with PLA, and it creeps and softens at ordinary PLA temperatures.

### Sinterable bound-metal filaments

Forward AM Ultrafuse 316L and 17-4PH use a multi-component polymer binder designed for catalytic debinding. BASF describes the filament as more than 80 wt% metal. At a representative 88 wt% metal loading, the metal fraction is about 53 vol%, because steel is about 7.9 g/cm³ and the binder is close to 1.2 g/cm³. The binder is removed in a nitric-acid catalytic furnace, and the remaining brown part is sintered in hydrogen or argon.

The Virtual Foundry Filamet range uses a different binder and a thermal debinding route intended for kiln processing. The current product pages give 82.0–86.0% bronze in Bronze Filamet, 86.0–90.7% copper in Copper Filamet, 80.0–85.0% 316L in Stainless Steel 316L Filamet, and 80.0–85.0% 17-4 in Stainless Steel 17-4 Filamet. Filamet densities range from about 3.25 g/cm³ to 5.0 g/cm³ depending on the metal.

### Why weight percentage is not volume percentage

The binder volume calculation explains almost everything about these materials. Take BronzeFill at 80 wt% bronze. Bronze has a density of about 8.8 g/cm³, and the PLA/PHA matrix has a density of about 1.24 g/cm³. One hundred grams of filament contains 80 g of bronze and 20 g of polymer.

- The bronze volume is 80 ÷ 8.8 = 9.09 cm³.
- The polymer volume is 20 ÷ 1.24 = 16.13 cm³.
- The total volume is 25.22 cm³.
- The metal volume fraction is 9.09 ÷ 25.22 = 36%.

So an 80 wt% bronze filament is only about 36 vol% metal. Roughly 64% of the part is still polymer. That is enough metal to make the part heavy and polishable, but not enough to form a continuous metal skeleton during sintering. The polymer burns out and the metal particles are left too far apart to densify.

Now take a sinterable steel filament at 88 wt% steel. Steel has a density of about 7.9 g/cm³, and the binder is about 1.2 g/cm³. One hundred grams contains 88 g of steel and 12 g of binder.

- The steel volume is 88 ÷ 7.9 = 11.14 cm³.
- The binder volume is 12 ÷ 1.2 = 10.00 cm³.
- The total volume is 21.14 cm³.
- The metal volume fraction is 11.14 ÷ 21.14 = 53%.

The metal fraction is now slightly more than half the volume, and the particles are in contact after debinding. That is the structural reason sinterable filaments can become dense metal and decorative metal-PLA cannot.

### The alloys and what they mean

AISI 316L is a low-carbon austenitic stainless steel with about 16–18% chromium, 10–14% nickel, 2–3% molybdenum and no more than 0.03% carbon. It is ductile, corrosion resistant, weldable and essentially non-magnetic. It cannot be hardened by heat treatment. Sintered 316L is the better choice for corrosion resistance, ductility and general chemical exposure.

AISI 17-4PH, also called SAE Type 630, is a martensitic precipitation-hardening stainless steel with about 15–17.5% chromium, 3–5% nickel, 3–5% copper and 0.15–0.45% niobium plus tantalum. It can be solution annealed and then aged to high strength. The common H900 condition ages at 900 °F, or about 482 °C, for one hour and air cools. H900 gives roughly 1250 MPa ultimate tensile strength, about 1100 MPa yield strength and about 40 HRC hardness. The trade-off is lower corrosion resistance and lower ductility than 316L, and the aged alloy is magnetic.

Bronze and copper Filamet are different again. Bronze is a copper-tin alloy, and The Virtual Foundry specifies an 89/11 tin bronze for Bronze Filamet. The metal in Copper Filamet is pure copper. Both sinter at lower temperatures than steel and both are softer and more oxidation-prone in service. They are useful for appearance, thermal and electrical applications, not for structural joints.

## 3. Properties

The following values are typical manufacturer or supplier data. Sintered properties depend strongly on the debinding and sintering cycle, on part orientation, on wall thickness and on the density actually achieved. Treat them as a starting point, not as a guarantee for a particular print.

| Property | Decorative metal-filled PLA (bronzeFill / copperFill) | Ultrafuse 316L after sintering | Ultrafuse 17-4PH after sintering and H900 aging |
| :--- | :--- | :--- | :--- |
| Density | 3.9 g/cm³ for bronzeFill and copperFill; 3.13 g/cm³ for steelFill | About 7.85 g/cm³ | About 7.8 g/cm³ |
| Ultimate tensile strength | About 25–30 MPa | About 510–560 MPa | About 1250 MPa |
| Yield strength | About 22 MPa | About 215–250 MPa | About 1100 MPa |
| Young's modulus | About 4.2–4.5 GPa | About 193 GPa | About 197 GPa |
| Elongation at break | About 3–5.5% | About 35–53% | About 6–10% |
| Hardness | About 62 Shore D | About 130–145 HV10 | About 40 HRC |
| Practical temperature limit | About 50–55 °C continuous | Oxidation resistance to about 800 °C; structural use to about 400–500 °C | About 300 °C in the H900 condition |
| Magnetism | Bronze and copper are not magnetic; steelFill and 400-series steel PLA are magnetic | Essentially non-magnetic | Magnetic after aging |
| Electrical behaviour | Insulating, because the polymer separates the particles | Conductive, like the parent alloy | Conductive, like the parent alloy |

A few cautions about that table are important.

The 7.85 g/cm³ figure for 316L is close to the density of wrought 316L, which is about 7.9–8.0 g/cm³. It should not be described as "98% dense", because that makes a near-full-density result sound like a typical sintered result with 2% porosity. Sintered parts usually reach roughly 96–99% of theoretical density depending on the process, and a well-controlled cycle can be close to full density. The exact number should come from the sinter service or from a measured test coupon.

The 800 °C figure for 316L is an oxidation-resistance limit, not a load-bearing service temperature. Austenitic stainless steel can survive in air at high temperature, but its strength falls as temperature rises and creep becomes significant. Do not use a sintered 316L part to carry a significant load at 800 °C. For structural work, treat roughly 400–500 °C as the practical ceiling and verify the specific application.

The 300 °C figure for 17-4PH H900 is also a practical limit. Above that temperature the copper-rich precipitates overage and the alloy loses strength. It is not a ceramics-style refractory limit.

HDT is not a useful concept for a solid metal part. For the decorative composites, the relevant limit is the glass transition and softening of the PLA/PHA matrix, which is why the table uses a continuous service range rather than a single HDT number. A high HDT on a filled PLA data sheet would still not mean the part can carry load near that temperature.

## 4. Printing on the Snapmaker U1

### 4.1 Drying and storage

Metal-filled PLA/PHA is not as hygroscopic as nylon, but it can pick up enough moisture to spit and string. If the spool has been open for months, dry it at 40–45 °C for about four hours. Do not exceed 50 °C, because the PLA/PHA matrix can soften and the spool can deform.

Ultrafuse 316L and 17-4PH are different. BASF states that Ultrafuse does not require additional drying. If you suspect moisture, use no more than about 50 °C for two to four hours, and never exceed 60 °C. The binder contains low-molecular-weight components, and overheating can make the filament chalky or brittle.

Filamet should not be dried at all. The Virtual Foundry states that drying degrades the binder. Store it sealed and dry, but do not put it in a heated dryer.

Store all of these spools in a sealed box below about 20% relative humidity. The spools are heavy for their size, so do not hang them on a thin cantilevered arm. A 1 kg bronzeFill spool is compact, and a 3 kg Ultrafuse spool is much heavier. Use a ball-bearing spool holder and keep the filament path straight.

### 4.2 Hotend and nozzle

A hardened-steel hotend is mandatory. Bronze, copper and steel powders are abrasive. A brass nozzle can wear out after roughly 1 kg of Ultrafuse 316L, and decorative bronze and copper are also abrasive enough to open the orifice over time. The Snapmaker U1's stock 0.4 mm stainless-steel hotend is not the hardened-steel option. Use the official Snapmaker hardened-steel hotend in 0.4 mm or 0.6 mm.

Nozzle size choices are a compromise.

- A 0.2 mm nozzle is not recommended. The orifice is small enough that agglomerates and partially melted particles clog it easily.
- A 0.4 mm nozzle is the practical minimum for decorative parts and for detailed green parts. It gives the best surface finish but the highest clog risk.
- A 0.6 mm nozzle is the best all-round choice for sinterable filaments. The Virtual Foundry recommends a 0.6 mm hardened-steel nozzle for Filamet, and the larger orifice reduces clogging and allows more solid walls.
- A 0.8 mm nozzle is useful for large decorative pieces where detail matters less. It prints faster but leaves a coarser surface.

Snapmaker sells the hardened-steel hotends as four-packs of one diameter, and the company does not support mixing different diameters in the same print. Choose one diameter for the job and use it across the toolheads you plan to use. An OrcaSlicer workaround with percentage line widths exists, but it is a community workaround, not a stock capability.

A hardened-steel nozzle often runs a little cooler at the melt than a brass nozzle. If your temperature tower shows under-extrusion at the normal setting, add about 5–10 °C and recalibrate. Do not assume the offset is necessary; measure it.

### 4.3 Layer height, line width and infill

For decorative metal-PLA, use a layer height of 0.12–0.20 mm. Finer layers reduce the sanding needed before polishing. A line width of about 105–115% of the nozzle diameter works well. Two or three perimeters are usually enough, with 15–30% infill for a decorative object. The part is heavy, so a large print puts a lot of mass on the build plate and needs a strong first layer.

For sinterable Ultrafuse, use a layer height of 0.10–0.20 mm and a line width within about ±10–20% of the nozzle diameter. BASF recommends about 100–105% infill with lines or rectilinear patterns for solid parts. Any internal void can become a defect during debinding and sintering. A layer height of 0.15 mm or less gives a denser green part, but it also increases print time.

For Filamet, use a layer height of 0.15–0.25 mm and 100% infill for parts that will be sintered. The Virtual Foundry's profiles are a better starting point than a generic PLA profile.

### 4.4 Temperature settings

| Parameter | Decorative metal-filled PLA | Ultrafuse 316L / 17-4PH | Filamet |
| :--- | :--- | :--- | :--- |
| Nozzle temperature | 195–220 °C | 215–250 °C; start at 235–245 °C | 210–230 °C |
| Bed temperature | 50–60 °C | 100 °C on the U1; suppliers quote 90–120 °C | 50–60 °C |
| Chamber temperature | Ambient; Top Cover off | 40–50 °C with the Top Cover | Ambient to about 35 °C |
| Build surface | PEI with glue stick or Magigoo Pro Metal | PEI with Magigoo Pro Metal or PVP glue | PEI with glue stick |
| Part cooling | 50–100% | 0–20% | 0–30% |
| Print speed | 40–60 mm/s for walls; 60–80 mm/s for infill | 25–40 mm/s | 30–50 mm/s |
| Maximum volumetric flow | 6–10 mm³/s | 4–7 mm³/s | 4–6 mm³/s |
| Retraction | 0.5–0.8 mm at 25–35 mm/s | 1.0–1.5 mm at 30–45 mm/s | 1.0–1.5 mm at about 30 mm/s |
| Layer height | 0.12–0.20 mm | 0.10–0.20 mm | 0.15–0.25 mm |
| Infill | 15–30% for decorative objects | 100–105% lines or rectilinear | 100% for sintered parts |

The U1's maximum nozzle temperature is 300 °C, and none of these materials need more than about 250 °C. Nozzle temperature is not the limiting factor. The limiting factors are abrasion, bed temperature and the fact that the U1 cannot sinter.

The U1's maximum bed temperature is 100 °C. MatterHackers specifies 100–120 °C for Ultrafuse, while BASF's user guideline gives 90–105 °C. The U1's 100 °C bed is inside BASF's window and at the bottom of MatterHackers' window. Use a strong adhesion promoter and accept that large, flat green parts have a higher warping risk than they would on a 120 °C machine.

The U1 has no stock chamber heater. The optional Top Cover is passive and can hold roughly 40–50 °C with a 100 °C bed. That is enough to reduce drafts and slow cooling on Ultrafuse green parts. It is not a heated chamber, and it does not need to be. Do not add an active chamber heater without the community firmware and the mandatory motherboard cooling described in the U1 notes. If you do add one, keep it at or below 60 °C.

### 4.5 Cooling, speed, flow and retraction

Decorative metal-PLA behaves like a dense PLA. Use 50–100% part cooling, especially on overhangs and bridges. The melt is heavy, so unsupported bridges sag more than ordinary PLA. Keep unsupported bridges short and support overhangs beyond about 45°.

Ultrafuse should run with little or no part cooling. Start at 0–20%, and allow up to about 30% only on difficult overhangs. Excessive cooling causes green parts to contract and crack, and those cracks can open during sintering.

Filamet also prefers low cooling. Start at 0–30% and increase only if the overhangs need it.

Print speed for decorative metal-PLA can be fairly normal, around 40–60 mm/s for walls and 60–80 mm/s for infill. Ultrafuse is slower, around 25–40 mm/s, because a uniform shear rate helps keep the binder and powder together. Filamet sits in between at about 30–50 mm/s.

The volumetric flow limits are much lower than the U1's 32 mm³/s maximum. Snapmaker measured 32 mm³/s with Snapmaker ABS at 280 °C, and that number does not apply to abrasive, highly filled materials. Decorative metal-PLA runs at about 6–10 mm³/s, Ultrafuse at about 4–7 mm³/s and Filamet at about 4–6 mm³/s. A 0.4 mm nozzle at 0.2 mm layers and 40 mm/s is already about 3.2 mm³/s, so a modest speed increase reaches the lower end of the decorative range.

ColorFabb notes that bronzeFill needs about 4–8% more flow than ordinary PLA because the melt shows little die swell. Start with a flow ratio of about 1.04–1.08 and calibrate with a wall-thickness test. For Ultrafuse and Filamet, calibrate flow so that walls are solid and there are no gaps. Do not use a generic multiplier.

Retraction for decorative metal-PLA is typically 0.5–0.8 mm at 25–35 mm/s on a direct-drive toolhead. Ultrafuse prefers about 1.0–1.5 mm at 30–45 mm/s. Too much retraction can grind the filament or cause a clog. Pressure advance is usually in the 0.02–0.05 s range; calibrate it with a test print rather than copying a value.

### 4.6 Adhesion and first layer

The first layer matters more than usual. A green part with a weak first layer can warp, and a warped green part is very difficult to flatten after sintering. Clean the build plate, apply Magigoo Pro Metal or a PVP glue stick, and set the first layer with care.

For Ultrafuse, MatterHackers recommends a glass bed with Dimafix. The U1 does not ship with a glass bed, so use its PEI plate with Magigoo Pro Metal or a PVP glue instead. A 100 °C bed is hot enough to make the adhesive tacky, but it is cooler than the 120 °C that some metal-filament printers use.

Let the build plate cool until the part releases easily, usually below about 35 °C. Green parts are brittle, so do not pry a stuck part with a metal blade. If it is still stuck, rewarm the plate slightly or use a thin, flexible scraper.

### 4.7 Supports and scaling

For decorative parts, normal slicer supports are fine. Use a soluble support such as PVA if you dedicate a toolhead to it, or use the same metal-filled PLA and accept a rougher interface. Dry PVA thoroughly, because it is much more hygroscopic than metal-filled PLA.

For sinterable parts, design to avoid supports. A polymer support cannot survive debinding and sintering, and it can leave ash or contaminate the furnace. MatterHackers advises designing overhangs at 50° or steeper so that no support is needed. If a metal support is unavoidable, print it from the same metal filament so that it shrinks at the same rate, and place a ceramic release layer at the interface. Ultrafuse Support Layer is the BASF product for Ultrafuse parts; use the interface material that the filament maker specifies for other systems. Expect extra finishing and a higher failure rate.

Do not use PVA or another polymer support inside a part that will be sintered. The furnace process is designed for metal or ceramic interfaces, not for a polymer support that disappears unpredictably.

Scaling for sinterable parts is covered in section 6.1. Do not scale a decorative part for sintering; it will not shrink like metal, and the dimensions will be wrong in a different way.

### 4.8 What the U1 cannot do

The U1 is a good printer for these materials, but it has hard limits.

- It cannot reach the 120 °C top of the bed range that MatterHackers specifies for Ultrafuse. BASF's own guideline gives 90–105 °C, so the U1's 100 °C bed is workable.
- It cannot reach the 1300–1380 °C needed to sinter stainless steel, or the lower kiln temperatures used for bronze and copper. Its nozzle limit is 300 °C and its bed limit is 100 °C.
- It cannot perform catalytic debinding with nitric acid at about 120 °C.
- It cannot supply a hydrogen or argon atmosphere for sintering.
- It cannot guarantee sintered dimensions without a shrinkage calibration coupon and a controlled furnace cycle.

Those limits are not a reason to avoid the material. They are a reason to plan the post-processing before you buy the spool. If you want a metal part, budget for a sintering service or a furnace, not just for filament.

## 5. Post-processing decorative parts

### 5.1 Sanding

Wet sanding is the foundation of a good metal finish. Start at 180 or 240 grit and work through 320, 600 and 1200 grit. Keep the paper wet. The water carries away dust and prevents friction heat from softening the PLA/PHA matrix. If the surface starts to smear or turn glossy before the scratches are gone, you are pressing too hard or sanding too dry.

Sand in one direction per grit and rotate the part 90° between grits. That makes it easier to see when the previous scratches are gone. Rinse the part between grits so that loose abrasive does not contaminate the next step.

### 5.2 Tumbling and polishing

Rotary tumbling is the fastest way to a uniform metal look. Use a rotary barrel with stainless-steel pins or small ceramic media, water and a drop of dish soap. Run it for two to six hours and check every 30 minutes. Tumbling peens the metal particles and burnishes the surface, but it also rounds edges and can remove fine detail.

After tumbling, polish with a fine metal polish such as Brasso or Blue Magic on a microfiber cloth. Work by hand or at low speed. A high-speed Dremel buffing wheel generates friction heat quickly and can smear dark polymer across the metal. If the surface turns grey or smeared, stop, clean the wheel and go back to hand polishing.

ColorFabb's own advice is to sand from 120–180 grit up to 600 grit or higher, then polish with a soft cloth and copper polish. That sequence works for bronzeFill, copperFill and steelFill.

### 5.3 Patina

Bronze and copper parts can be patinated after polishing. A blue-green verdigris can be produced by suspending the part above a shallow dish of household ammonia with a little table salt in a sealed container. Check it every 30 minutes, because the colour develops quickly and can become uneven. Work outside or under strong ventilation, wear gloves and eye protection, and never mix ammonia with bleach.

A dark antique brown can be produced with a dilute liver of sulfur solution, which is potassium polysulfide. Brush it on, let it react, rinse thoroughly and buff the raised areas with fine steel wool. Liver of sulfur stains skin and clothing, so wear gloves and old clothes.

SteelFill can develop surface rust because the filler is steel. If you want a stable finish, seal it with a thin clear coat after polishing. Bronze and copper also oxidize over time, and a clear coat slows that down.

### 5.4 Sealing and handling

A clear acrylic or lacquer coat can protect a patina and reduce fingerprint marks. Apply thin coats and let them cure fully. Solvent-based clear coats can attack the PLA matrix if applied too heavily, so test on a scrap piece first.

Do not assume a decorative metal-filled part is food-safe, dishwasher-safe or weatherproof. The polymer matrix is still PLA/PHA, and the metal particles are not a continuous corrosion barrier. Treat these parts as decorative objects.

## 6. Sintering workflow for Ultrafuse and Filamet

### 6.1 Design for shrinkage

Sintering shrinks the part. The shrinkage is anisotropic because the printed layers compact differently in the Z direction. The exact amount depends on the printer, the layer height, the infill, the green density and the furnace cycle. You must calibrate it with a test coupon for your own process.

The two most useful published starting points are these:

| Axis | BASF process guideline | MatterHackers / DSH guidance |
| :--- | :--- | :--- |
| X and Y | 16.6% shrinkage, which corresponds to a 120% scale factor | 119.82% scale factor, which corresponds to about 16.5% shrinkage |
| Z | 19.3% shrinkage, which corresponds to a 124% scale factor | 126.10% scale factor, which corresponds to about 20.7% shrinkage |

Do not use a single 125.0% or 124.6% Z factor copied from an old profile. Those numbers are not a universal rule. Use the scale factor from the company that will sinter your parts. If you use MatterHackers' DSH service, start with 119.82% in X and Y and 126.10% in Z. If you use BASF's process guideline, start with 120% and 124%. Then print a test coupon, measure it after sintering, and correct the scale for your own machine and furnace.

Design rules that reduce sintering failures:

- Put one flat face on the build plate so that the part has a stable datum.
- Keep wall thickness at least 1.5 mm. Thinner walls can delaminate during sintering.
- Keep feature thickness as uniform as possible. A thick mass next to a thin feature sinters unevenly.
- Avoid thick solid sections. The debinding atmosphere must be able to reach the binder, and thick sections are slower and riskier to debind. Discuss section thickness with your sintering service.
- Avoid large overhangs. MatterHackers recommends 50° or steeper so that no support is needed.
- Avoid enclosed voids and trapped air. Any void becomes a defect or a crack.
- Keep the part within about 100 × 100 × 100 mm for a good first success. Larger parts can work, but the failure rate rises.
- Orient the part the way it will be sintered. If possible, debind and sinter it in the same orientation in which it was printed.

### 6.2 Print the green part

Print the green part with 100% infill, a clean nozzle and a clean build plate. Any contamination from another polymer can cause a defect or, in the worst case, a violent reaction in the furnace. MatterHackers specifically warns that foreign material can cause parts to explode during processing. Use a nozzle dedicated to metal filament, or purge it thoroughly before printing.

Green parts are brittle. Remove them from the plate carefully, bag them individually, and do not ship them loose in a box. MatterHackers recommends bubble-wrapping each part.

### 6.3 Debind

Ultrafuse uses catalytic debinding. BASF's 17-4PH process instructions specify debinding at about 120 °C with nitric acid at greater than 98% concentration. The acid attacks the primary binder and leaves a brown part held together by the remaining binder and metal particles. The process produces formaldehyde, and formaldehyde can react with the acid. BASF notes that the explosion limit of formaldehyde in oxygen is 4.5% by volume, which is why the acid feed, purge gas and exhaust must be controlled.

This is not a kitchen-oven process. It requires a sealed debinding furnace, an acid dosing system, a scrubber or exhaust treatment, temperature and gas interlocks, and appropriate personal protective equipment. BASF's process instructions describe a 50-litre furnace with a nitric acid feed of about 30 ml/h and a nitrogen purge of about 500 l/h as an example of a safe setup. Those numbers are not a DIY recipe; they show the level of control required.

Filamet uses a thermal debinding route in a kiln. The Virtual Foundry publishes debinding and sintering instructions for its materials. Follow those instructions rather than a generic furnace profile.

### 6.4 Sinter

Sintering temperatures depend on the alloy. Ultrafuse 316L and 17-4PH are sintered in the 1300–1380 °C range. BASF's 17-4PH process instructions give a typical cycle of room temperature to 600 °C at 5 K/min with a one-hour hold, then 600 °C to 1300 °C at 5 K/min with a three-hour hold, followed by furnace cooling. For Ultrafuse stainless steels, the atmosphere is 100% clean, dry hydrogen with a dew point below −40 °C, or argon. Alumina setters of about 99.6% purity are recommended. Filamet bronze and copper use lower kiln temperatures and the schedules published by The Virtual Foundry; Filamet stainless steels use the higher range.

The part must be supported on a flat, refractory setter so that it does not sag. Do not let the part rest on a material that reacts with the metal or sticks to it. Alumina powder or alumina setters are the usual choice.

Hydrogen is not a casual choice. It is flammable, odorless and explosive between about 4% and 75% in air. A hydrogen furnace needs a purge procedure, gas detection, flame arrestors, grounded piping and an exhaust that cannot accumulate gas. Argon avoids the explosion hazard but can asphyxiate in a confined space. Either way, the furnace must be rated for the atmosphere and the installation must be ventilated.

### 6.5 What comes back

Sintered Ultrafuse parts typically reach about 96–99% of theoretical density, depending on the cycle. Filamet parts typically reach about 90–95% density according to The Virtual Foundry. The surface is matte and slightly rough. Parts can be tumbled, bead-blasted, machined, ground or polished.

316L comes back in the as-sintered austenitic condition. It is ductile, corrosion resistant and weldable. 17-4PH needs a separate aging step to reach the quoted strength and hardness. If you need the full 1250 MPa ultimate strength and 40 HRC hardness, specify H900 aging and confirm that the sinter service includes it.

Do not assume a sintered part is pressure-tight or food-safe. At 90–99% density there is still porosity, and the pores can connect. Pressure testing, impregnation or a higher-density process may be needed for a seal.

### 6.6 Outsource or in-house

For most U1 owners, outsourcing is the sensible route. MatterHackers sells a BASF Ultrafuse processing ticket that covers up to 1 kg of green parts per ticket and ships the parts to DSH Technologies for debinding and sintering. The current guidance says runs are scheduled monthly, and return delivery is typically 2–5 business days after the run. The ticket must be used within three months of purchase. BASF also lists DSH Technologies and Elnik Systems as debinding and sintering partners.

For Ultrafuse, doing it in-house requires a catalytic debinding furnace, a high-temperature sintering furnace, hydrogen or argon handling, acid storage and disposal, and a lot of process development. That is a capital project, not an accessory purchase. If you only need a few parts, the service ticket is almost always cheaper than building the capability.

## 7. Safety

Metal-filled and sinterable filaments concentrate several hazards that are easy to underestimate. Read this section before buying a spool, not after.

1. **Hydrogen explosion.** Sintering in 100% hydrogen is one of the two atmospheres that BASF specifies for Ultrafuse, and hydrogen is explosive between about 4% and 75% in air. It is odorless, so you cannot smell a leak. Use only a furnace rated for hydrogen, with a written purge procedure, gas detection, flame arrestors, grounded piping and an exhaust that cannot accumulate gas. Never use a craft kiln, a forge or a garage furnace for hydrogen. If you cannot control hydrogen safely, use argon and manage the asphyxiation risk instead.

2. **Nitric acid debinding.** Catalytic debinding uses nitric acid at greater than 98% concentration and about 120 °C. The acid is strongly oxidizing and causes severe burns. The process releases formaldehyde and nitrogen oxides, and formaldehyde can react with the acid. BASF gives an explosion limit of 4.5% formaldehyde in oxygen. This requires a sealed, engineered furnace with acid dosing, purge gas, scrubbing and exhaust treatment. It is not a kitchen-oven or open-container process.

3. **High-temperature furnaces.** Stainless-steel sintering runs at 1300–1380 °C, and even the lower-temperature kilns used for bronze and copper are hot enough to cause instant burns and ignite nearby materials. Use a furnace with over-temperature protection, a clear cool-down procedure and a fire-resistant area. Wear heat-resistant gloves and a face shield when handling setters. Alumina refractory dust can be irritating, so handle broken setters carefully and avoid breathing the dust. If the furnace uses a combustible gas burner, carbon monoxide is also a hazard.

4. **Heavy-metal and nickel dust.** Sanding green parts or sintered parts produces dust containing nickel, chromium, copper or other metals. Nickel and chromium compounds can sensitize skin and respiratory tissue. Sand wet whenever possible, wear nitrile gloves, eye protection and an FFP3 or N95 respirator, and use a HEPA vacuum rather than compressed air. Do not eat, drink or smoke in the work area. Wash hands after handling. Dispose of metal-bearing dust and sludge as hazardous waste, not down the drain.

5. **Solvent debinding.** Some bound-metal systems use solvent debinding with acetone, isopropanol or similar solvents before thermal debinding. Those solvents are flammable, and their vapours can be narcotic or irritating. Use grounded metal containers, no sparks or open flames, good ventilation and the correct respirator. Store solvents in a fire cabinet and dispose of them through a hazardous-waste stream. Do not heat a solvent near a flame or a hot furnace.

6. **Printing fumes.** Metal-filled PLA/PHA emits the usual PLA/PHA volatiles when it is printed, and Ultrafuse binder can release irritants at 245 °C. Use the U1's HEPA and activated-carbon filtration if the Top Cover is fitted, and ventilate the room. Do not rely on filtration to make an unventilated closet safe.

7. **Patina chemicals.** Ammonia, liver of sulfur and metal polishes are irritating and can stain or burn skin. Wear gloves and eye protection, work outside or under strong ventilation, and never mix ammonia with bleach. Keep children and pets away from the containers.

8. **Food contact and skin contact.** Sintered parts are porous, and copper and nickel can leach. Do not use these parts for food contact, drinking water or prolonged skin contact without specific testing. Decorative metal-PLA is a polymer composite and is not food-safe either.

## 8. Snapmaker U1 integration

### 8.1 Toolheads and nozzles

Use the official Snapmaker hardened-steel hotend. The stock stainless-steel hotend is not the abrasion-resistant option, and the difference matters with bronze, copper and steel powders. A 0.4 mm hardened-steel hotend is the detail choice. A 0.6 mm hardened-steel hotend is the reliability choice, especially for Filamet and for large green parts.

Snapmaker does not support mixing nozzle diameters in one print. The hardened-steel hotends are sold as four-packs of a single diameter. Choose one diameter for the job and load it in every toolhead that will participate. The OrcaSlicer percentage-line-width workaround can produce useful results with 0.4 mm and 0.6 mm, but it is not an official capability and it needs its own calibration.

The U1's 300 °C maximum nozzle temperature is more than enough. These materials print between about 195 °C and 250 °C. The machine's limits are the 100 °C bed and the absence of a sintering furnace.

### 8.2 Spools and feeders

The U1 has two filament feeders and four toolheads. The left feeder serves toolheads 1 and 2, and the right feeder serves toolheads 3 and 4. There are four spool holders. The two feeders are not four independent feeders.

Metal-filled spools are heavy for their size. A 1 kg bronzeFill spool is compact, and a 3 kg Ultrafuse spool is much heavier. If the stock spool holder flexes or the spool drags, use an external ball-bearing holder and feed the filament into the U1 with a gentle path. Avoid sharp bends, because some metal-filled filaments are brittle and can snap or grind.

The filament is abrasive, and some metal-filled products are brittle. Keep the path short and clean, and do not over-tension the spool. A filament runout sensor is useful because a runout can ruin a long green-part print.

### 8.3 Chamber

For decorative metal-PLA, leave the Top Cover off and let the chamber run at ambient temperature. PLA/PHA is prone to heat creep, and a warm chamber makes stringing and jamming worse.

For Ultrafuse, fit the Top Cover and let the bed warm the chamber to about 40–50 °C. That reduces drafts and slows cooling on the green part. It is not a substitute for a heated chamber, and it does not need to be. If you add an active chamber heater, it requires community firmware and mandatory motherboard cooling, and it must stay at or below 60 °C. Stock U1 firmware does not control a Panda Breath or similar heater.

For Filamet, ambient is fine. A warm chamber is not required, and the material is less sensitive to drafts than Ultrafuse.

### 8.4 Multi-material

The toolchanger is genuinely useful for decorative metal parts. You can load bronzeFill in toolhead 1, copperFill in toolhead 2, steelFill in toolhead 3 and a plain PLA/PHA in toolhead 4 for contrast or support. Each toolhead has its own melt zone, so the colours and metal fillers do not cross-contaminate. A prime and wipe tower is still needed, and the first few lines after a tool change may show a seam.

For sinterable parts, load Ultrafuse 316L or 17-4PH in one toolhead and Ultrafuse Support Layer in another. The Support Layer is a ceramic-filled barrier that helps separate a metal support from the part during sintering. It is not a soluble support, and it does not remove the need to design for sintering.

Never combine decorative metal-PLA with a part that will be sintered. The decorative polymer will burn out, leave ash and create voids or contamination. If a part is going into a furnace, every gram of it must be a sinterable material.

### 8.5 Flow limit

The U1's 32 mm³/s maximum flow was measured with Snapmaker ABS at 280 °C. It is not a universal limit and it is far above what these materials can use. Decorative metal-PLA runs at about 6–10 mm³/s, Ultrafuse at about 4–7 mm³/s and Filamet at about 4–6 mm³/s. If you try to print metal-filled filament at 32 mm³/s, you will get under-extrusion, grinding or a clog.

## 9. Demo models

These five models are real Printables entries. They are not product listings. All five are explicitly intended for metal-filled filament or were printed in it.

1. **Chinese money (bronze filament)**. A model of Chinese money uploaded specifically as a bronze-filament print. It is a good test of flow, detail and polishing on a decorative metal-PLA.
   - [https://www.printables.com/model/59524-chinese-money-bronze-filament](https://www.printables.com/model/59524-chinese-money-bronze-filament)

2. **Copper Pumpkin**. A Proto-Pasta project printed in their copper filament, with a step-by-step finishing guide linked from the model page. It shows how a copper-filled part can be sanded and patinated.
   - [https://www.printables.com/model/298787-copper-pumpkin](https://www.printables.com/model/298787-copper-pumpkin)

3. **Droplet Vase**. A vase described by the designer as being for copperFill or bronzeFill printing. It is a useful shape for checking surface finish and for practising wet sanding on curved walls.
   - [https://www.printables.com/model/126215-droplet-vase](https://www.printables.com/model/126215-droplet-vase)

4. **Chess Set Steel**. A chess set designed and tested in PLA, then printed in BASF Ultrafuse 316L stainless steel. It is the clearest example in this list of a model that was printed in a sinterable metal filament.
   - [https://www.printables.com/model/47652-chess-set-steel](https://www.printables.com/model/47652-chess-set-steel)

5. **Protopasta Hex P paper weight and postcard stand**. A paperweight designed for metal powder-filled composites, with a slot for postcards. It is a simple, useful object that benefits from the extra mass of a metal fill.
   - [https://www.printables.com/model/288923-protopasta-hex-p-paper-weight-postcard-stand-great](https://www.printables.com/model/288923-protopasta-hex-p-paper-weight-postcard-stand-great)

## 10. Products and buying guide

This is a small niche. Only five manufacturers could be verified for this note: ColorFabb, Forward AM (BASF), FormFutura, Proto-pasta and The Virtual Foundry. There are not ten brands selling this material, and this note does not pretend otherwise. A ten-row brand table would have to include products that do not exist.

| Brand | Product | Metal and loading | Format and approximate price | Sinterable? | Link |
| :--- | :--- | :--- | :--- | :--- | :--- |
| ColorFabb | bronzeFill | Bronze powder in PLA/PHA; 80 wt%; 3.9 g/cm³ | 750 g at about €53.83; 1.5 kg at about €107.65 | No | [colorfabb.com/bronzefill](https://colorfabb.com/bronzefill) |
| ColorFabb | copperFill | Copper powder in PLA/PHA; 3.9 g/cm³ | 750 g at about €51.41; 1.5 kg at about €102.81 | No | [colorfabb.com/copperfill](https://colorfabb.com/copperfill) |
| ColorFabb | steelFill | Steel powder in PLA/PHA; 3.13 g/cm³ | 750 g at about €52.38; 1.5 kg at about €104.77 | No | [colorfabb.com/steelfill](https://colorfabb.com/steelfill) |
| FormFutura | MetalFil Ancient Bronze | 80% bronze in PLA | 250 g, 750 g and 1.5 kg spools; price varies by size | No | [formfutura.com/metalfil-ancient-bronze](https://www.formfutura.com/metalfil-ancient-bronze) |
| FormFutura | MetalFil Classic Copper | 60% copper in PLA | 250 g, 750 g and 1.5 kg spools; price varies by size | No | [formfutura.com/metalfil-classic-copper](https://www.formfutura.com/metalfil-classic-copper) |
| FormFutura | MetalFil Brass | Brass-filled PLA; loading not stated on the page | 250 g, 750 g and 1.5 kg spools; price varies by size | No | [formfutura.com/metalfil-brass](https://www.formfutura.com/metalfil-brass) |
| Proto-pasta | Steel-filled Metal Composite PLA | 400-series stainless steel in PLA; 2.30 g/cm³; nickel-free since February 2025 | 100 g coil to 2 kg spool; listed as sold out in October 2026 | No | [proto-pasta.com/products/stainless-steel-pla](https://www.proto-pasta.com/products/stainless-steel-pla) |
| Forward AM (BASF) | Ultrafuse 316L | 316L stainless steel in a catalytic-debinding binder; more than 80 wt% metal | 3 kg spool from distributors; price at checkout | Yes | [forward-am.com Ultrafuse 316L](https://forward-am.com/material-portfolio/ultrafuse-filaments-for-fused-filaments-fabrication-fff/metal-filaments/ultrafuse-316l/) |
| Forward AM (BASF) | Ultrafuse 17-4PH | 17-4PH stainless steel in a catalytic-debinding binder; more than 80 wt% metal | 3 kg spool from distributors; often out of stock | Yes | [forward-am.com Ultrafuse 17-4PH](https://forward-am.com/material-portfolio/ultrafuse-filaments-for-fused-filaments-fabrication-fff/metal-filaments/ultrafuse-17-4-ph/) |
| Forward AM (BASF) | Ultrafuse Support Layer | Ceramic-filled barrier filament for metal supports | Spool from distributors; price at checkout | Used with sinterable metal | [forward-am.com Ultrafuse Support Layer](https://forward-am.com/material-portfolio/ultrafuse-filaments-for-fused-filaments-fabrication-fff/metal-filaments/ultrafuse-support-layer/) |
| The Virtual Foundry | Bronze Filamet | 82.0–86.0% bronze, 89/11 tin bronze; 4.10–4.50 g/cm³ | 0.5 kg and 1 kg spools; from about $179.99 | Yes | [shop.thevirtualfoundry.com/products/bronze-filamet](https://shop.thevirtualfoundry.com/products/bronze-filamet) |
| The Virtual Foundry | Copper Filamet | 86.0–90.7% copper; 4.3–5.0 g/cm³ | 0.5 kg, 1 kg and 3 kg spools; from about $142.99 | Yes | [shop.thevirtualfoundry.com/products/copper-filamet](https://shop.thevirtualfoundry.com/products/copper-filamet) |
| The Virtual Foundry | Stainless Steel 316L Filamet | 80.0–85.0% 316L stainless steel; 3.45–3.55 g/cm³ | 0.5 kg and 1 kg spools; from about $210.99 | Yes | [shop.thevirtualfoundry.com/products/stainless-steel-316l-filamet](https://shop.thevirtualfoundry.com/products/stainless-steel-316l-filamet) |
| The Virtual Foundry | Stainless Steel 17-4 Filamet | 80.0–85.0% 17-4 stainless steel; 3.25–4.15 g/cm³ | 0.5 kg and 1 kg spools; from about $208.99 | Yes | [shop.thevirtualfoundry.com/products/stainless-steel-17-4-filamet](https://shop.thevirtualfoundry.com/products/stainless-steel-17-4-filamet) |

Prices are approximate and were seen on 25 October 2026. They exclude shipping, duty and any processing ticket. ColorFabb prices include EU VAT as displayed on its site; the other prices may exclude local taxes. The Virtual Foundry prices are "from" prices for the smallest spool.

A few buying notes are worth more than the table.

- ColorFabb BrassFill is discontinued. The old page returns a 404. Do not chase a discontinued spool expecting a current product; FormFutura MetalFil Brass is the only other brass-filled option verified for this note.
- Proto-pasta's steel PLA is decorative, not sinterable. It is a 400-series stainless-filled PLA at 2.30 g/cm³, and the 400-series material is nickel-free and magnetic. It is a good choice for props and jewellery, not for functional metal parts.
- The Virtual Foundry sells a three-material sampler that is a cheaper way to try bronze, copper and 316L before committing to a full spool. The current price is about $123.97.
- For sintered steel, the processing ticket and shipping can add a significant fraction of the total cost, especially for small parts. Get a quote for the part size and the number of parts before you design around the process.
- Avoid unbranded "metal PLA" with no loading figure or alloy identification. A bronze-coloured PLA with a low metal loading looks metallic but will not polish like BronzeFill, and it will not sinter.
- An eSUN "eCopper" or "eBronze" row from earlier versions of this note is not included. No such product could be verified, and the Amazon ASIN formerly used for it resolves to a 3 mm blue PLA PRO, not a metal filament.

## 11. Related notes

- [[00 - Filament Master Index|Filament Master Index]]
- [[01 - PLA (Polylactic Acid - Standard, High-Speed, and Tough PLA+)|PLA]]
- [[03 - Matte and Aesthetic Filled PLA (Matte, Wood, Marble, Glow-in-the-Dark, Sparkle PLA)|Matte and aesthetic filled PLA]]
- [[12 - Carbon Fiber and Glass Fiber Reinforced Composites (PLA-CF, PETG-CF, ABS-GF, ASA-CF, PA-CF, PAHT-CF, PC-CF)|Abrasive composite filaments]]
- [[19 - Magnetic and Ferromagnetic Iron-Filled Filaments (Paramagnetic Iron-PLA and Rustable Composites)|Magnetic iron-filled filaments]]
- [[21 - Ceramic, Stone, and Clay-Filled Filaments (Silica Ceramic PLA, Terracotta, Porcelain, and Sinterable Alumina-Zirconia)|Ceramic and stone-filled filaments]]
- [[01 - Drying Filament|Drying filament]]
- [[02 - Storing Filament|Storing filament]]
- [[03 - Combining Storing and Drying - Science and Rational Approach|Combining storage and drying]]
- [[04 - Nozzles and Their Types|Nozzles and their types]]
- [[05 - Layer Height and Nozzle Size|Layer height and nozzle size]]
- [[06 - Heating and Temperatures - Nozzle, Bed, and Chamber|Heating and temperatures]]
- [[07 - Print Speeds and Volumetric Flow|Print speeds and volumetric flow]]
- [[08 - Surface Smoothing Slicer Techniques - Ironing and Beyond|Surface smoothing and ironing]]
- [[09 - Post-Processing - Matte, Shiny, and Surface Finishing|Post-processing and surface finishing]]
- [[10 - Common Printing Issues, Debugging, and Physical Limits|Common printing issues and physical limits]]
- [[22 - Water-Soluble and Chemical-Soluble Support Filaments (PVA Polyvinyl Alcohol, BVOH Butenediol Vinyl Alcohol Copolymer, HIPS High Impact Polystyrene)|Water-soluble and chemical-soluble supports]]

## 12. Videos

1. **MatterHackers, "How to Succeed with 3D Printing Metal on a Desktop 3D Printer using BASF Ultrafuse 316L Filament"**. This video walks through the Ultrafuse 316L workflow, including the fact that the printed green part must be debound and sintered before it becomes metal.
   - [https://www.youtube.com/watch?v=xy9VrkW9k4k](https://www.youtube.com/watch?v=xy9VrkW9k4k)

2. **XERION BERLIN LABORATORIES GmbH, "Sintering of a 3D printed flow connector (17-4PH) in hydrogen atmosphere"**. This video shows a 17-4PH part being sintered in hydrogen and makes the atmosphere and furnace requirements concrete.
   - [https://www.youtube.com/watch?v=20OSnzZFHUM](https://www.youtube.com/watch?v=20OSnzZFHUM)

3. **ModBot, "This Filament Is Incredible! (CopperFill Printing)"**. This video shows CopperFill being printed on a desktop printer.
   - [https://www.youtube.com/watch?v=MK9LkYZZNsU](https://www.youtube.com/watch?v=MK9LkYZZNsU)

4. **Adafruit Industries, "How to polish copperFill & bronzeFill filament"**. This video demonstrates the sanding and polishing sequence that turns a matte metal-filled print into a bright metal surface.
   - [https://www.youtube.com/watch?v=AU8WvGveNj4](https://www.youtube.com/watch?v=AU8WvGveNj4)

5. **The Virtual Foundry, Inc., "Can you Sinter 3d Printed Bronze in a Forge?"**. This video tests whether a forge can sinter bronze Filamet and is useful for understanding the limits of DIY sintering.
   - [https://www.youtube.com/watch?v=AQqYCCsTfh4](https://www.youtube.com/watch?v=AQqYCCsTfh4)

## 13. Sources

- ColorFabb lists bronzeFill at 3.9 g/cm³ and describes it as PLA/PHA with fine bronze powder. The same page gives sanding, polishing and flow advice. https://colorfabb.com/bronzefill. Accessed 25 October 2026.
- ColorFabb lists copperFill at 3.9 g/cm³ and describes it as PLA/PHA with fine copper powder. https://colorfabb.com/copperfill. Accessed 25 October 2026.
- ColorFabb lists steelFill at 3.13 g/cm³ and describes it as PLA/PHA with fine steel powder. https://colorfabb.com/steelfill. Accessed 25 October 2026.
- FormFutura describes MetalFil Ancient Bronze as PLA with 80% bronze filling. https://www.formfutura.com/metalfil-ancient-bronze. Accessed 25 October 2026.
- FormFutura describes MetalFil Classic Copper as PLA with 60% copper filling. https://www.formfutura.com/metalfil-classic-copper. Accessed 25 October 2026.
- FormFutura lists MetalFil Brass as a brass-filled PLA but does not state a percentage on the page. https://www.formfutura.com/metalfil-brass. Accessed 25 October 2026.
- Proto-pasta lists its Steel-filled Metal Composite PLA at 2.30 g/cc and states that 400-series stainless steel replaced 300-series in February 2025. The 400-series material is nickel-free and magnetic. https://www.proto-pasta.com/products/stainless-steel-pla. Accessed 25 October 2026.
- The Virtual Foundry lists Bronze Filamet at 82.0–86.0% bronze and 4.10–4.50 g/cc, and it warns that the filament should not be dried. https://shop.thevirtualfoundry.com/products/bronze-filamet. Accessed 25 October 2026.
- The Virtual Foundry lists Copper Filamet at 86.0–90.7% copper and 4.3–5.0 g/cc, and it warns that the filament should not be dried. https://shop.thevirtualfoundry.com/products/copper-filamet. Accessed 25 October 2026.
- The Virtual Foundry lists Stainless Steel 316L Filamet at 80.0–85.0% 316L and 3.45–3.55 g/cc, with 90–95% sintered density. https://shop.thevirtualfoundry.com/products/stainless-steel-316l-filamet. Accessed 25 October 2026.
- The Virtual Foundry lists Stainless Steel 17-4 Filamet at 80.0–85.0% 17-4 and 3.25–4.15 g/cc, with 90–95% sintered density. https://shop.thevirtualfoundry.com/products/stainless-steel-17-4-filamet. Accessed 25 October 2026.
- The Virtual Foundry publishes its debinding and sintering instructions at https://thevirtualfoundry.com/debind-sinter/. Accessed 25 October 2026.
- Forward AM describes Ultrafuse 316L and its catalytic debinding and sintering route at https://forward-am.com/material-portfolio/ultrafuse-filaments-for-fused-filaments-fabrication-fff/metal-filaments/ultrafuse-316l/. Accessed 25 October 2026.
- Forward AM describes Ultrafuse 17-4PH and its processing route at https://forward-am.com/material-portfolio/ultrafuse-filaments-for-fused-filaments-fabrication-fff/metal-filaments/ultrafuse-17-4-ph/. Accessed 25 October 2026.
- Forward AM describes Ultrafuse Support Layer as a ceramic-filled barrier that helps separate metal supports during sintering at https://forward-am.com/material-portfolio/ultrafuse-filaments-for-fused-filaments-fabrication-fff/metal-filaments/ultrafuse-support-layer/. Accessed 25 October 2026.
- BASF's Ultrafuse Metal User Guideline gives the print parameters, the 90–105 °C bed temperature, the 16.6% XY and 19.3% Z shrinkage, and the 120% and 124% scale factors. https://move.forward-am.com/hubfs/AES%20Documentation/Metal%20Filaments/Ultrafuse_metal_User_Guideline.pdf. Accessed 25 October 2026.
- BASF's Ultrafuse 17-4 PH Process Instructions specify nitric acid debinding at 120 °C, give the formaldehyde explosion limit, and describe 1300 °C sintering in hydrogen or argon. https://forward-am.com/wp-content/uploads/2021/01/Process-Instructions-Ultrafuse-17-4-PH.pdf. Accessed 25 October 2026.
- MatterHackers lists Ultrafuse 17-4PH at 7800 kg/m³, with a 100–120 °C bed, a 230–250 °C nozzle and no part cooling. https://www.matterhackers.com/store/l/basf-ultrafuse-17-4-ph-metal-3d-printing-filament/sk/M0L4K2Z8. Accessed 25 October 2026.
- MatterHackers gives the 119.82% XY and 126.10% Z scale factors, the 100 °C minimum bed, the hardened-nozzle recommendation, the 1.5 mm minimum wall and the 100 mm cube guidance. https://www.matterhackers.com/support/how-to-succeed-with-3d-printing-metal-on-a-desktop-3d-printer. Accessed 25 October 2026.
- MatterHackers explains the processing ticket, the 1 kg limit per ticket, the contamination warning and the packaging guidance. https://www.matterhackers.com/articles/how-to-prepare-metal-3d-printed-basf-ultrafuse-316l-parts-for-debinding-and-sintering. Accessed 25 October 2026.
- The five Printables model pages were verified through the Printables GraphQL API on 25 October 2026: https://www.printables.com/model/59524-chinese-money-bronze-filament, https://www.printables.com/model/298787-copper-pumpkin, https://www.printables.com/model/126215-droplet-vase, https://www.printables.com/model/47652-chess-set-steel, https://www.printables.com/model/288923-protopasta-hex-p-paper-weight-postcard-stand-great.
- The five YouTube videos were verified through the YouTube oEmbed endpoint on 25 October 2026: https://www.youtube.com/watch?v=xy9VrkW9k4k, https://www.youtube.com/watch?v=20OSnzZFHUM, https://www.youtube.com/watch?v=MK9LkYZZNsU, https://www.youtube.com/watch?v=AU8WvGveNj4, https://www.youtube.com/watch?v=AQqYCCsTfh4.
