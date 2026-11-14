---
title: "22 - Water-Soluble and Chemical-Soluble Support Filaments (PVA Polyvinyl Alcohol, BVOH Butenediol Vinyl Alcohol Copolymer, HIPS High Impact Polystyrene)"
tags:
  - 3d-printing
  - filaments
  - support-materials
  - pva
  - bvoh
  - hips
  - soluble-supports
  - snapmaker-u1
---

| Nozzle temperature | Chamber temperature | Post-print temperature resistance | What it is good for | Additional notes |
| :--- | :--- | :--- | :--- | :--- |
| **PVA:** 210–230 °C; Bambu PVA 220–240 °C | Ambient, below 35 °C. Never approach 60 °C. | Not a structural material. Keep below about 40–50 °C and dry; absorbed water lowers the effective softening point sharply. | Soluble interfaces for PLA, TPU and PA; internal channels; blind cavities; sacrificial molds. | Bone-dry storage is mandatory. Use a 0.4 mm nozzle and a dedicated toolhead. Typical dissolution is 4–12 h in water. |
| **BVOH:** 195–225 °C | Ambient, below 35 °C. | Not a structural material. Softens near 90 °C by Vicat, but continuous service should stay below about 50–60 °C and dry. | Faster-dissolving interfaces for PLA, PETG, ABS, ASA, PA and TPU; delicate internal geometry. | More expensive than PVA. Typical dissolution is 2–6 h. Still highly hygroscopic. |
| **HIPS:** 230–250 °C | 45–55 °C with the Top Cover. Never above 60 °C. | HDT about 70–85 °C at 0.45 MPa. Practical continuous service about 60–70 °C. | Same-temperature support for ABS and ASA; breakaway support for PETG and PC; limonene-soluble internal supports. | Limonene is flammable and a skin sensitiser. Limonene also swells ABS and ASA, so it is not perfectly selective. |

> [!abstract] Overview
> PVA and BVOH are water-soluble support polymers. They let a multi-toolhead printer build sealed cavities, captured parts and internal channels that cannot be cleaned by hand. HIPS is a styrenic support that dissolves in d-limonene and prints at ABS temperatures. On the Snapmaker U1, the toolchanger removes cross-contamination from the melt zone, but it does not remove the need for a prime or wipe tower, dry filament and careful standby temperatures. PVA is on Snapmaker's official supported-material list. BVOH and HIPS are not, so treat them as community-tested materials and validate them on your own machine.

## 1. What these materials are and how they work

### PVA, polyvinyl alcohol

PVA is made by hydrolysing polyvinyl acetate. The polymer backbone carries pendant hydroxyl groups, which is why it hydrogen-bonds with water and dissolves. Fully hydrolysed PVA is highly crystalline and melts too close to its decomposition range for reliable melt extrusion. FDM grades are therefore partially hydrolysed, commonly around 88%, and the residual acetate groups lower the melting point to about 180–190 °C and suppress crystallinity enough for printing.

The hydroxyl groups also make PVA extremely hygroscopic. Dry PVA is hard and brittle; damp PVA becomes soft, sticky and prone to stringing, buckling in the feeder and clogging. Bambu Lab notes that at about 55% relative humidity, freshly dried PVA can absorb enough moisture to print badly within one to three hours. Storage is not a minor detail with this material.

The glass transition of dry PVA is about 60–75 °C. Absorbed water plasticises the polymer and can drop the effective softening point well below 40 °C, which is why a damp spool behaves so differently from a dry one.

The old claim that PVA has a sharp decomposition cliff at 208 °C is wrong. PVA does degrade when it is held hot for a long time, especially when moisture is present. The practical failure mode is crosslinking, yellowing and carbonised black plugs after prolonged residence in a hot nozzle, not an instant reaction at a specific temperature. Bambu Lab prints its PVA at 220–240 °C and Polymaker specifies 215–225 °C for PolyDissolve S1. A blanket setting of 185–202 °C is too cold for the U1's 0.4 mm stainless hotend and will underextrude, raise back pressure and encourage clogs. Some European PVA grades publish a 180–210 °C window, so follow the spool's TDS. On the U1, 210–230 °C is a reliable starting range for eSUN and most PVA grades, while Bambu PVA runs at 220–240 °C and PolyDissolve S1 at 215–225 °C.

### BVOH, butenediol vinyl alcohol copolymer

BVOH is a copolymer of butenediol and vinyl alcohol. The butenediol units disrupt crystallinity more effectively than the acetate groups in PVA, so BVOH dissolves faster and generally prints at slightly lower temperatures. Verbatim lists a glass transition temperature of 68 °C, a Vicat softening temperature of 92 °C and a density of 1.14 g/cm³. Fiberlogy recommends 190–220 °C with a 60 °C bed, and other suppliers give similar ranges.

BVOH is still a water-soluble support, not a structural plastic. It is expensive, it is hygroscopic, and it should be kept in the same bone-dry conditions as PVA. Its advantage is speed: thin BVOH supports usually clear in about 2–6 hours, roughly 1.5 to 3 times faster than PVA depending on thickness and agitation.

### HIPS, high-impact polystyrene

HIPS is polystyrene grafted with roughly 5–10% polybutadiene rubber particles. The rubber phase gives impact resistance, while the polystyrene matrix keeps the material stiff, light and easy to sand. It is amorphous, with a density near 1.05 g/cm³ and a glass transition temperature around 95–100 °C. Its heat deflection temperature is roughly 70–85 °C at 0.45 MPa, and practical continuous service is about 60–70 °C.

HIPS dissolves in d-limonene because both are non-polar hydrocarbon materials with similar solubility behaviour. Limonene swells the polystyrene phase, breaks the polymer network apart and carries it into solution. The process is not perfectly selective. Limonene also swells ABS and ASA, and long exposure can distort thin walls, so the old claim that ABS and ASA remain structurally intact is overstated. HIPS is most useful as a same-temperature support that can be snapped away. It is also useful as a limonene-soluble support for PETG, and it can be tried on PC only after a coupon test, with the soak kept short.

### Compatibility with model materials

| Model material | PVA | BVOH | HIPS |
| :--- | :--- | :--- | :--- |
| PLA | Best match. Strong interface and similar nozzle temperatures. | Excellent. | Possible as a breakaway support, but the higher HIPS temperature is unnecessary. |
| PETG | Poor adhesion and a temperature mismatch. Use BVOH instead. | Good, and the usual water-soluble choice for PETG. | Good selective pair. PETG is more resistant to limonene than ABS. |
| ABS | Not recommended. The chamber heat needed for ABS softens PVA, and adhesion is poor. | Usable at the low end of the chamber range, but test first. | Traditional pairing because the temperatures match, but limonene also attacks ABS. |
| ASA | Not recommended. | Usable with care. | Traditional pairing with the same caveat as ABS. |
| PA, nylon | Good adhesion. The chamber must stay cool enough to protect the PVA. | Good. | Not a good match. |
| TPU | Good adhesion. PVA is brittle when dry, so flex the part gently during removal. | Good. | Not recommended. |
| PC | Not recommended. | Test first. | Breakaway support is the safer use. Test limonene on a coupon because it can stress-crack some polycarbonates. |
| PVB | PolyDissolve S1 is listed as compatible. | Test first. | Not recommended. |

PVA and BVOH are support materials, not standalone model materials. Bambu Lab explicitly says its PVA is for support only. HIPS can be printed as a model material, but when it is used as a support it is not intended to carry load.

## 2. Printing on the Snapmaker U1

### Drying and storage

PVA and BVOH should be dried at 50–60 °C for 6–12 hours. Bambu Lab's own PVA guide allows drying at about 80 °C in an AMS HT, so a 60 °C dryer will not fuse a spool. The old warning that a 60 °C dryer turns the whole spool into a solid block is overstated. What can happen is that damp PVA softens, and a tightly wound spool can deform under its own weight if the spool hub is not rated for the temperature. Check the spool material and stay below its rating.

HIPS is much less hygroscopic and can be dried at 60–70 °C for 2–4 hours. It does not need the same aggressive drying schedule as PVA, but it should still be stored dry.

Store PVA and BVOH below 10% relative humidity in a sealed box with molecular sieve or freshly regenerated silica gel. Print directly from the dry box. A SnapDryer or a heated drybox is useful, but the important thing is that the filament path from the box to the toolhead is short and sealed. Do not leave a PVA spool on an open holder overnight.

### Nozzle, bed and chamber

Use the stock 0.4 mm stainless nozzle for PVA, BVOH and HIPS. These materials are not abrasive, so a hardened-steel nozzle is not required. A 0.6 mm nozzle is useful for support bases because it reduces residence time and prints faster, but 0.4 mm gives a better interface finish. A 0.2 mm nozzle is not recommended: the residence time is high, and Bambu Lab lists its 0.2 mm stainless hotend as incompatible with Bambu PVA. If you use a 0.2 mm nozzle with another brand, expect more clogs and more purging.

The PVA and BVOH bed should be set to 50–60 °C on PEI with a glue stick as a release layer. PVA can bond aggressively to bare PEI. HIPS should be printed at 95–100 °C on PEI with glue stick or a thin ABS slurry. The U1 bed maximum is 100 °C, so HIPS is at the limit of the machine. Some HIPS datasheets recommend 110 °C; the U1 cannot reach that, so expect slightly more warp risk on large parts. Allow the bed to soak at temperature before the first layer and use the bed mesh.

Chamber temperature is where the materials diverge:

- PVA and BVOH should be printed with the chamber at ambient temperature, below about 35 °C. PVA softens near 60 °C when dry and much lower when damp. A chamber at 60 °C is near the low end of the dry glass transition range of PVA and is not safe for the filament path. Do not run the Panda Breath with PVA in the machine.
- HIPS can use the passive Top Cover, which raises the chamber to about 50 °C. If you use active heating, 50–55 °C is enough. Do not exceed 60 °C.

If a job needs ABS or ASA at 50–55 °C and also needs PVA, the requirements conflict. Split the job, use a breakaway support for the ABS/ASA part, or accept that PVA is the wrong support for that combination.

### Cooling, speed and flow

PVA and BVOH need moderate part cooling. Use 50–100% fan with PLA and 30–50% with PETG or PA. HIPS needs only 10–30% fan inside a heated chamber; too much cooling causes layer splitting and warping.

Reasonable starting points on the U1 are:

- PVA prints at 20–40 mm/s with a volumetric limit of 3–6 mm³/s.
- BVOH prints at 30–60 mm/s with a volumetric limit of 5–8 mm³/s.
- HIPS prints at 60–120 mm/s with a volumetric limit of 12–18 mm³/s.

The U1's 32 mm³/s hotend limit was measured with Snapmaker ABS at 280 °C and does not apply to these materials at support speeds. PVA in particular has a low practical flow limit because it is viscous and prone to heat creep.

Use 0.8–1.2 mm of retraction at 25 mm/s for PVA and BVOH, and 0.8–1.0 mm for HIPS. PVA strings easily. A short retraction plus a wipe sequence is more effective than a very large retraction, which can pull molten PVA into the cold zone and cause a plug.

### Support interface settings

The interface is the part of the support that touches the model. It should be dense, smooth and easy to separate after dissolution. A practical starting point for OrcaSlicer or Snapmaker Orca is:

| Setting | Value | Reason |
| :--- | :--- | :--- |
| Support/object XY distance | 0.30–0.40 mm | Prevents the support wall from fusing to the model side. |
| Top Z distance | 0.00 mm | Gives a smooth underside with a soluble interface. |
| Bottom Z distance | 0.00 mm | Keeps the interface in contact with the support base. |
| Top interface layers | 3–4 layers | About 0.6–0.8 mm of soluble material. |
| Interface density | 100% | Creates a continuous shelf rather than a grid of contact points. |
| Interface pattern | Concentric or rectilinear | Concentric follows the part outline; rectilinear is faster. |
| Interface line width | 100–110% of nozzle diameter | Produces a continuous surface. |
| Support base material | Model material | Saves soluble filament. |
| Prime or wipe tower | On | The toolchanger does not eliminate ooze. |

Zero gap gives the best underside finish, but some material pairs bond too strongly. If the interface tears the model surface, open the top gap to 0.05–0.1 mm before changing other settings.

Bambu Lab recommends using PVA for both the support base and the interface. Interface-only printing saves a large amount of expensive filament, but it leaves a model-material base that must be broken away by hand. On the U1, interface-only is a reasonable compromise for large supports. Use PVA for the whole support when the geometry is delicate or the base would be difficult to reach.

### Toolhead management and standby

The U1 has four independent toolheads, but only two filament feeders: one for toolheads 1 and 2, and one for toolheads 3 and 4. There are four spool holders. You can keep PVA and a model filament loaded at the same time, but you cannot auto-feed four different materials at once. Plan which two feeders carry the soluble support and the main material.

Because each toolhead has its own melt zone, there is no cross-contamination of PVA into the PLA or PETG melt zone. That is a real advantage over a single-nozzle multiplexer, where residual PVA can destroy layer adhesion. It does not mean the U1 is ooze-free. PVA strings and drips, so use a prime or wipe tower and a wipe sequence before the PVA toolhead starts a new layer after a long park.

Set the PVA standby temperature to about 140–160 °C, not 200 °C. Leaving PVA stationary at printing temperature while the other toolheads work will bake it into an insoluble plug. Keep parked time short. If a print will spend hours on other toolheads, purge the PVA toolhead before it resumes, or design the job so the PVA sections are printed close together in time.

### Chamber heating and the Panda Breath

The U1 has no stock chamber heater. The optional Top Cover provides passive heating to about 50 °C plus HEPA and activated carbon filtration. The BIQU Panda Breath is a 300 W PTC heater with HEPA and carbon filtration, a maximum chamber temperature of 60 °C and a PTC limit of 105 °C. It is not a stock U1 accessory. Stock firmware does not control it. Community firmware such as paxx12's Snapmaker U1 Extended Firmware in Panda Breath WebSocket mode, or DragonBreath, is required.

Motherboard cooling is mandatory before running a chamber heater on the U1. The RK3562 begins thermal throttling at 85 °C, and there are documented mid-print failures. The firmware documentation says additional active cooling on the motherboard is required. A 6015 fan aimed only at the stepper drivers does not cool the RK3562 and is not sufficient on its own. Use a full-board cooler. Elevated chamber temperature also increases wear, and thermal damage is unlikely to be covered by warranty.

For HIPS, the passive Top Cover is usually enough. If you add the Panda Breath, run it at 50–55 °C and keep the full-board cooling in place. For PVA and BVOH, leave the chamber heater off.

### What not to do

- Do not print PVA at 185–202 °C on the U1. It underextrudes and clogs.
- Do not leave PVA hot and idle for long periods.
- Do not use a 0.2 mm nozzle with Bambu PVA.
- Do not run a 60 °C chamber with PVA in the machine.
- Do not assume the toolchanger removes the need for a prime or wipe tower.
- Do not assume HIPS is a perfectly selective support for ABS or ASA.
- Do not add an external stepper cooling mod as if it were a documented requirement. There is no documented requirement for one on the U1. If an extruder stepper runs hot, check driver current and tension first.

## 3. Post-processing: water and limonene

### Dissolving PVA and BVOH

Remove as much bulk support as possible with pliers before soaking. This reduces the amount of polymer that has to dissolve and keeps the bath cleaner.

Use at least 20 mL of water per gram of support, following Prusa's guidance for BVOH. A larger ratio is better. Warm water at 35–45 °C speeds dissolution, but keep it below 50 °C when the model is PLA, because PLA softens and warps above that range. For PETG, ABS or ASA parts, 45–50 °C is usually safe, but check the part's own heat resistance first.

Agitate the water with an aquarium pump, a magnetic stirrer or an ultrasonic cleaner. An ultrasonic cleaner can heat the water and can erode very fine details, so keep it at 40 °C or below and check the part often. Change the water when it becomes viscous, because saturated water slows dissolution dramatically.

With warm water and good agitation, a thin exposed interface can clear in about 1–3 hours and a dense interface in about 2–6 hours. Without agitation, the same print can take 4–12 hours, and thick blocks or blind cavities can take 12–24 hours. The claim that agitation cuts a 10 hour soak to 45–90 minutes is a best case for thin walls, not a general result. After dissolution, rinse with clean water and scrub gently with a soft brush. PVA residue can reharden as it dries.

BVOH usually clears faster and leaves less gel than PVA. It is the better choice for long, narrow channels and delicate internal geometry.

### Dissolving HIPS

Break away the bulk of the HIPS support first. Then submerge the part in d-limonene in a closed glass or HDPE container at room temperature. Agitate gently. Thin supports can clear in 4–12 hours; dense blocks can take up to 24 hours. Warm limonene speeds the process, but limonene is flammable and should not be heated near its flash point.

Limonene swells ABS and ASA. Check the part every hour and remove it as soon as the HIPS has softened. Do not leave an ABS or ASA part in limonene overnight and expect it to be unchanged. HIPS is more selective against PETG than against ABS and ASA, but test any PC part because limonene can stress-crack some polycarbonates.

After the soak, rinse the part with isopropyl alcohol to remove the citrus oil, then wash with warm soapy water. Limonene residue is sticky and can trap dust.

### Safety and disposal

Limonene is a flammable liquid and vapour. Its flash point is about 48 °C. Keep it away from heat, sparks, open flames, hot printer parts and direct sunlight. Do not use it near a heated chamber or a hot plate.

Limonene is also a skin sensitiser. Repeated skin contact can cause an allergic reaction. Wear nitrile gloves, not latex, and use eye protection. Work in a ventilated area. Store limonene in a closed glass or HDPE container, never in a polystyrene container, because it will dissolve the container.

Do not pour limonene or the HIPS-limonene gel down the drain. Filter and reuse the limonene if you can. When it is saturated, absorb it with an inert material such as vermiculite or sawdust, seal it in a labelled container and take it to household hazardous waste. Treat the gel as hazardous organic solvent waste.

PVA and BVOH are water-soluble and have low acute toxicity, but they are not fast-composting plastics. Small amounts of dilute solution can be flushed to a household drain with plenty of water where local rules allow. Do not pour large volumes onto soil, into a storm drain or into a septic system without checking local rules. For large batches, let the water evaporate in a ventilated area and dispose of the residue as solid waste, or take it to household hazardous waste.

HIPS prints with styrene emissions similar to ABS. Use the Top Cover with HEPA and carbon filtration, and ventilate the room. Do not print HIPS in a bedroom or an unventilated closet.

## 4. Demo models

These are real, publicly available models. The first three are explicit soluble-support tests. The last two are internal-cavity or internal-channel models that show the kind of geometry that justifies the technique; they are not supplied with a validated U1 profile. Internal manifolds, captured balls, blind cavities and sacrificial molds are the geometries that justify the cost and soak time of a soluble support.

1. **Impossible Ball Prison - PVA Support Test** by UrSafeWithMe, MakerWorld design 2854066.
   - The model is a 50 mm cage with a 30 mm ball, and the designer has already assigned a PVA support profile. The ball is sealed inside the cage and is freed by dissolving the PVA. This is a direct test of whether PVA can fill and then leave a sealed cavity.
   - [https://makerworld.com/en/models/2854066-impossible-ball-prison-pva-support-test](https://makerworld.com/en/models/2854066-impossible-ball-prison-pva-support-test)
2. **Just another D20 in a cage** by L0rdS474n, MakerWorld design 1356790.
   - The model is a captive twenty-sided die in a cage. The designer says it is intended to evaluate PVA as a support material and warns users to use bone-dry PVA and calibrated filament settings.
   - [https://makerworld.com/en/models/1356790-just-another-d20-in-a-cage](https://makerworld.com/en/models/1356790-just-another-d20-in-a-cage)
3. **Water-Soluble Support Test Model (水溶支撑测试模型)** by 长春广哥, MakerWorld design 2638237.
   - This is a test model specifically for water-soluble support. Use it to compare interface gap, purge settings and dissolution time before committing a large print.
   - [https://makerworld.com/en/models/2638237-pva-test-model](https://makerworld.com/en/models/2638237-pva-test-model)
4. **Organ-on-a-chip device**, Printables model 909782.
   - The model is a microfluidic organ-on-a-chip device. It represents the class of part where internal channels and blind cavities are central, and it is a useful check of whether a channel is clear after a soluble-support print.
   - [https://www.printables.com/model/909782-organ-on-a-chip-device](https://www.printables.com/model/909782-organ-on-a-chip-device)
5. **Water-soluble mold for cast-metal Benchy**, Printables model 1204211.
   - The model is a sacrificial PVA mold for casting a Benchy in a low-melting-point alloy. The mold and its support are dissolved in hot water after casting. This is the sacrificial-mold use case rather than a support-interface test.
   - [https://www.printables.com/model/1204211-water-soluble-mold-for-cast-metal-benchy](https://www.printables.com/model/1204211-water-soluble-mold-for-cast-metal-benchy)

## 5. Products

The soluble-support market is small. These are products with published data and broad availability. Prices change, so check the vendor page rather than relying on a figure here.

| Brand | Product | Type | Why it is listed | Link |
| :--- | :--- | :--- | :--- | :--- |
| Bambu Lab | PVA | Water-soluble PVA | 220–240 °C, smooth interface, 0.5 kg spool, widely used as a reference. | [Bambu Lab store](https://us.store.bambulab.com/products/pva) |
| Polymaker | PolyDissolve S1 | Water-soluble PVA | 215–225 °C, compatible with PLA, TPU, PVB and nylon. | [MatterHackers](https://www.matterhackers.com/store/l/polymaker-polydissolve-s1-support-filament-075kg/sk/MMKPV16P) |
| eSUN | Water Soluble PVA | Water-soluble PVA | Budget 0.5 kg spool with a broad 180–230 °C published window. | [eSUN official store](https://esun3dstore.com/products/pva) |
| Snapmaker | PVA Filament (500 g) | Water-soluble PVA | Listed by Snapmaker as compatible with the U1. | [3D Prima](https://www.3dprima.com/spare-parts-accessories/manufacturer/snapmaker/snapmaker-pva-500g_28922_10822) |
| Verbatim | BVOH 1.75 mm | Water-soluble BVOH | Tg 68 °C, Vicat 92 °C, 500 g spool, with a published TDS. | [Verbatim Europe](https://www.verbatim-europe.com/en/3d/products/verbatim-bvoh-filament-175-mm-natural-55903) |
| FormFutura | BVOH | Water-soluble BVOH | European BVOH in 1.75 mm and 2.85 mm, with a published TDS. | [FormFutura](https://www.formfutura.com/bvoh) |
| Fiberlogy | BVOH | Water-soluble BVOH | 190–220 °C, 60 °C bed, 500 g spool. | [Fiberlogy](https://fiberlogy.com/en/product/bvoh-filament/) |
| FormFutura | EasyFil HIPS | Limonene-soluble HIPS | 230–245 °C, 750 g and larger spools, European availability. | [FormFutura](https://www.formfutura.com/product/easyfil-hips) |
| Gizmo Dorks | HIPS | Limonene-soluble HIPS | Budget US option in 1 kg spools. | [Gizmo Dorks](https://gizmodorks.com/hips-3d-printer-filament/) |

eSUN also sells HIPS, but its product page blocks automated checks, so it is not linked here. If you buy it, verify the spool's TDS before using it as a support. Polymaker's support range is built around PolyDissolve S1 for water-soluble support and PolySupport for breakaway support rather than HIPS.

## 6. Videos

1. **BCN3D Filaments: BVOH vs PVA** by BCN3D. The video compares the dissolution behaviour and compatibility of BVOH and PVA.
   - [https://www.youtube.com/watch?v=vziEOh4fWKU](https://www.youtube.com/watch?v=vziEOh4fWKU)
2. **Ultimaker PVA Explained - Water-soluble support material** by UltiMaker. The video explains how PVA support is printed on a dual-extrusion printer.
   - [https://www.youtube.com/watch?v=0ENgGkPP94w](https://www.youtube.com/watch?v=0ENgGkPP94w)
3. **How to 3D Print TPU Filament with PVA Soluble Support** by Zortrax. The video shows PVA support with a flexible model material.
   - [https://www.youtube.com/watch?v=maBwaXams7M](https://www.youtube.com/watch?v=maBwaXams7M)
4. **PolyDissolve S1 - PLA Skeleton** by Polymaker. The video shows PolyDissolve S1 in a PLA skeleton print.
   - [https://www.youtube.com/watch?v=suTg71kwRPM](https://www.youtube.com/watch?v=suTg71kwRPM)
5. **3D print complex objects with dissolvable supports!** by Hoffman Engineering. The video shows HIPS as a dissolvable support in limonene.
   - [https://www.youtube.com/watch?v=JhlPFAVo33Q](https://www.youtube.com/watch?v=JhlPFAVo33Q)

## 7. Related notes

- [[00 - Filament Master Index|Filament master index]]
- [[01 - Drying Filament|Drying filament]]
- [[02 - Storing Filament|Storing filament]]
- [[03 - Combining Storing and Drying - Science and Rational Approach|Combining storage and drying]]
- [[04 - Nozzles and Their Types|Nozzles and their types]]
- [[05 - Layer Height and Nozzle Size|Layer height and nozzle size]]
- [[06 - Heating and Temperatures - Nozzle, Bed, and Chamber|Heating and temperatures]]
- [[07 - Print Speeds and Volumetric Flow|Print speeds and volumetric flow]]
- [[08 - Surface Smoothing Slicer Techniques - Ironing and Beyond|Slicer smoothing and support interfaces]]
- [[09 - Post-Processing - Matte, Shiny, and Surface Finishing|Post-processing]]
- [[10 - Common Printing Issues, Debugging, and Physical Limits|Common printing issues]]
- [[01 - PLA (Polylactic Acid - Standard, High-Speed, and Tough PLA+)|PLA]]
- [[05 - PETG (Polyethylene Terephthalate Glycol-Modified)|PETG]]
- [[07 - ABS (Acrylonitrile Butadiene Styrene)|ABS]]
- [[08 - ASA (Acrylonitrile Styrene Acrylate)|ASA]]
- [[10 - PA (Polyamide - Nylon 6, Nylon 12, and Nylon 6-66 Copolymers)|PA]]
- [[11 - PC (Polycarbonate and PC-ABS, PC-PBT Engineering Alloys)|PC]]
- [[12 - Carbon Fiber and Glass Fiber Reinforced Composites (PLA-CF, PETG-CF, ABS-GF, ASA-CF, PA-CF, PAHT-CF, PC-CF)|CF and GF composites]]
- [[23 - PP and POM Low-Friction Polyolefins and Acetals (Polypropylene, Olefin Block Copolymer OBC, and Polyoxymethylene Acetal Delrin)|PP and POM]]
- [[24 - Fluoropolymers, Ultra-Polymers, and Specialty Functional Filaments (PVDF Polyvinylidene Fluoride, PEEK Polyether Ether Ketone, PEI Polyetherimide Ultem, PCL Polycaprolactone, and Nylon Purge Cleaning Filament)|Fluoropolymers and specialty filaments]]

## 8. Sources

All links were checked in October 2026. Model pages that block ordinary browser requests were verified through the MakerWorld and Printables APIs. Manufacturer pages and TDS documents were used for temperatures, densities and compatibility; the U1 specifications page was used for machine limits.

- [Snapmaker U1 specifications](https://www.snapmaker.com/snapmaker-u1/specs)
- [Bambu Lab PVA product page](https://us.store.bambulab.com/products/pva)
- [Bambu Lab PVA printing guide](https://wiki.bambulab.com/en/filament-acc/filament/pva-printing-guide)
- [Polymaker PolyDissolve S1 technical data sheet](https://polymaker.com/wp-content/uploads/TDS_Polymaker_PolyDissolveS1_V5.5_2025-12-10_EN.pdf)
- [eSUN water-soluble PVA](https://esun3dstore.com/products/pva)
- [Snapmaker PVA 500 g at 3D Prima](https://www.3dprima.com/spare-parts-accessories/manufacturer/snapmaker/snapmaker-pva-500g_28922_10822)
- [Verbatim BVOH 1.75 mm](https://www.verbatim-europe.com/en/3d/products/verbatim-bvoh-filament-175-mm-natural-55903)
- [Fiberlogy BVOH](https://fiberlogy.com/en/product/bvoh-filament/)
- [FormFutura BVOH](https://www.formfutura.com/bvoh)
- [FormFutura EasyFil HIPS](https://www.formfutura.com/product/easyfil-hips)
- [Gizmo Dorks HIPS](https://gizmodorks.com/hips-3d-printer-filament/)
- [Prusa Knowledge Base: HIPS and limonene](https://help.prusa3d.com/article/hips_167118)
- [Prusa Knowledge Base: water-soluble BVOH and PVA](https://help.prusa3d.com/article/water-soluble-bvoh-pva_167012)
- [PubChem: d-limonene](https://pubchem.ncbi.nlm.nih.gov/compound/Limonene)
- [BIQU Panda Breath specifications](https://global.bttwiki.com/Panda_Breath.html)
