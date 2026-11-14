---
title: "11 - Annealing and Heat Treatment"
tags:
  - 3d-printing
  - filaments
  - annealing
  - heat-treatment
  - crystallinity
  - post-processing
  - polymer-physics
  - snapmaker-u1
---

| Scope | Key numbers | What it is good for | Additional notes |
| :--- | :--- | :--- | :--- |
| **What annealing is** | A hold at or above the glass transition temperature for a semi-crystalline polymer, and at or just below it for an amorphous one. Typical holds are 60–140 °C for 1–16 hours, with some PPS grades at 180–220 °C. | Raising crystallinity and heat deflection temperature in semi-crystalline polymers, and relieving residual stress in amorphous ones. | Annealing is not drying, tempering, remelting or sintering. It does not fuse layers, and it cannot make an amorphous polymer semi-crystalline. |
| **Snapmaker U1 limits** | Bed maximum 100 °C. Chamber maximum 60 °C with a Panda Breath and community firmware. No annealing oven. | Nothing that needs a uniform soak above 60 °C. | PLA, PET-CF, PPS-CF, PPA-CF and PC all need a separate convection or laboratory oven. The U1 itself cannot anneal. |
| **Typical gains and costs** | PLA HDT rises from about 55–60 °C to roughly 95–135 °C. PET-CF rises from about 70–110 °C to 130–155 °C for common grades. PPS-CF reaches about 250–264 °C at 0.45 MPa after 125 °C for 16 hours. PC, ABS and ASA gain stress relief but little HDT. | Heat-resistant jigs, under-hood brackets, drone frames, electrical housings, and parts that sit near motors or hot electronics. | Expect 1–3% shrinkage in X and Y on compact parts, and up to 5–10% distortion on thin or asymmetric parts. HDT is a 0.45 MPa deflection datum, not a continuous service temperature. |
| **Main risks** | Ovens overshoot by 5–10 °C. Salt and plaster lag the oven by hours. Impact strength can fall sharply in PPA and PLA. | Deciding whether a cosmetic, tolerance-critical or shock-loaded part should be annealed at all. | Dry the part first, support it, ramp and cool slowly, and test a coupon. Do not anneal installed inserts, magnets, electronics, batteries or dissimilar polymers unless every material allows it. |

> [!abstract] Overview
> Annealing is a controlled thermal cycle applied after printing. In a semi-crystalline polymer it grows crystals, raises the heat deflection temperature and increases stiffness. In an amorphous polymer it relaxes the residual stress left by layered deposition and fast cooling, which improves dimensional stability and resistance to environmental stress cracking. It is a real and useful process, but it is also widely oversold. Annealing does not fuse layers, does not make an amorphous polymer crystalline, does not flatten a part that has already warped, and does not turn a printed part into a food-safe or sterilised object.
>
> The Snapmaker U1 cannot perform the heat treatments that matter for engineering materials. Its bed stops at 100 °C and its chamber reaches 60 °C only with a BIQU Panda Breath, community firmware and full mainboard cooling. Neither is a uniform air oven, and a 60 °C chamber is below the annealing window of PLA, PET, PPS and PPA. Every practical schedule in this note therefore requires a separate convection oven, laboratory oven or dedicated toaster oven. The U1's job ends when the part is printed, dried and removed from the build plate.

## 1. What Annealing Is, and What It Is Not

### 1.1 A controlled thermal cycle

Annealing means heating a part to a chosen temperature below its melting point, holding it there long enough for the polymer chains to move, and then cooling it slowly enough that the new structure is retained. Three variables define the cycle:

1. **The hold temperature.** This sets how mobile the chains become and which crystal form grows. For a semi-crystalline polymer it sits above the glass transition temperature $T_g$ and below the melting temperature $T_m$. For an amorphous polymer it sits below $T_g$, often 10–20 °C below, because the goal is stress relaxation rather than crystallisation. A high-$T_g$ polymer such as PC may be held much further below $T_g$ when the part enters the oven hot and cools slowly.
2. **The hold time.** This sets how far the transformation proceeds. Crystallisation is time-dependent, and thick parts need longer because the core heats more slowly than the skin.
3. **The heating and cooling rates.** These set the thermal gradient through the part. A fast ramp can warp or crack a part before the hold even begins, and a fast cooldown can reintroduce the stress that the hold was meant to remove.

A useful anneal is therefore a schedule, not a single temperature. "Bake it at 100 °C for an hour" is not a schedule, because it says nothing about how the part got to 100 °C, how long the core stayed there, or how it cooled.

### 1.2 Annealing, stress relief, drying, tempering, remelting and sintering

These terms are often used interchangeably in hobby printing, and that causes real mistakes. They describe different processes with different temperatures and different purposes.

| Process | Typical temperature | What changes | What it is used for | Important distinction |
| :--- | :--- | :--- | :--- | :--- |
| **Drying** | 40–120 °C | Absorbed water leaves the polymer. | Preventing hydrolytic chain scission and steam bubbles during printing. | Drying does not intentionally change crystallinity. A dryer hot enough to dry nylon can anneal a PLA part by accident. |
| **Stress relief** | Below $T_g$ for amorphous polymers, often 10–20 °C below; above $T_g$ for semi-crystalline ones | Residual molecular orientation and moulded-in stress relax. | Dimensional stability, reduced warping after machining, better resistance to environmental stress cracking. | Stress relief is a subset of annealing. It changes stress, not necessarily crystal content. |
| **Annealing** | Between $T_g$ and $T_m$ for semi-crystalline polymers; below $T_g$ for amorphous stress relief | Crystallinity, crystal perfection and residual stress all change. | Raising HDT and stiffness in semi-crystalline polymers; relaxing stress in amorphous ones. | Annealing is the general term used in this note. The result depends on the polymer and the schedule. |
| **Tempering** | Ambiguous in polymers; usually 60–120 °C | In metallurgy, tempering follows hardening. In polymer processing, the word is sometimes used for stress relief. | Nothing standardised in FDM printing. | Treat "tempering" in a filament advertisement as a marketing word until the datasheet gives a temperature and time. |
| **Remelting** | Above $T_m$, often 180–230 °C for PLA and PETG | The printed structure flows and the layers fuse. | The salt and plaster methods that produce near-isotropic strength. | Remelting is not annealing. It destroys fine dimensions and can embrittle PLA. |
| **Sintering** | Above $T_m$, or 1100–1400 °C for metal and ceramic filaments | Particles fuse into a solid, usually after debinding. | Metal and ceramic FDM, and powder-bed processes. | Sintering is not a post-print treatment for unfilled PLA, PETG, PC or nylon. |
| **Quenching** | Fast cooling, often in water or air | A non-equilibrium structure is frozen in, often with new residual stress. | Rare in FDM, and usually undesirable. | Quenching is the opposite of slow annealing. |

The practical consequence is simple. If a guide tells you to bake PLA at 200 °C in salt to "anneal" it, that guide is describing remelting. It may produce a strong part, but it is not the process described in most of this note, and it is not a route to a dimensionally accurate part.

### 1.3 What annealing can and cannot do

Annealing can do the following:

- **Raise crystallinity and HDT in semi-crystalline polymers.** PLA, PET, PPS, PPA, PA6 and PA12 can all grow crystals when held between $T_g$ and $T_m$. The increase in HDT can be large. A PPS-CF part that is nearly amorphous after printing can reach an HDT above 250 °C at 0.45 MPa after a 125 °C hold for 16 hours.
- **Increase stiffness and dimensional stability.** Crystals act as physical cross-links and carry load above $T_g$. A well-annealed semi-crystalline part is usually stiffer and less prone to creep than the same part as printed.
- **Relieve residual stress in amorphous polymers.** PC, ABS, ASA, PMMA, PETG and PCTG do not crystallise, but they do accumulate stress during printing. A hold below $T_g$, followed by slow cooling, lets that stress relax, which reduces cracking around fasteners and improves resistance to environmental stress cracking.
- **Improve chemical stress-crack resistance in some polymers.** Annealed PC and ABS are less likely to craze when exposed to solvents, adhesives or threadlockers, because the residual stress that drives crack opening is lower.
- **Make the part more thermally stable in service.** A part that has already seen its annealing temperature is less likely to creep or distort at a lower service temperature.

Annealing cannot do the following:

- **Make an amorphous polymer semi-crystalline.** PETG, PCTG, PC, ABS, ASA and PMMA have no crystalline phase to grow. Annealing them near $T_g$ changes stress and free volume, not crystallinity, so their HDT barely moves.
- **Raise a polymer above its own melting point.** Above $T_m$ the crystals melt and the part loses its shape. No schedule can make a PLA part serviceable at 200 °C, and no schedule can make PEEK printable on a 300 °C machine.
- **Fix a part that has already warped.** A warped part has already found a new shape. Annealing may relax it further, but it will not pull it flat. In many cases it makes the warp worse, because the part softens and sags under its own weight.
- **Fuse the layers.** Annealing can improve the bulk properties of the material, but it does not heal the weak interface between layers in the way that remelting does. CNC Kitchen measured 42 kg of layer strength before and 42 kg after annealing, with every sample failing between layers.
- **Guarantee better impact strength.** Increased crystallinity often reduces ductility. PPA-CF notched impact strength can fall by roughly half after annealing, and PLA can become more brittle even when its tensile strength rises.
- **Sterilise a part or make it food-safe.** Annealing is not a sterilisation process, and it does not seal the pores between layers. A printed part that was not food-safe before annealing is not food-safe afterwards.
- **Replace a heated chamber during printing.** Annealing is a post-print treatment. It cannot prevent warping in a part that is still being built, and it cannot substitute for a chamber that holds the part warm during the print.
- **Remove moisture.** In fact, a wet part can be damaged by annealing. Water turns to steam, causes bubbles, and accelerates hydrolysis in PET, PA and PC. Dry first.

## 2. The Physics Behind the Schedule

### 2.1 Glass transition and melting are not the same thing

Every thermoplastic has a glass transition temperature $T_g$. Below $T_g$ the amorphous regions are glassy and the chains cannot move far. Above $T_g$ the amorphous regions become rubbery, and the chains can move, diffuse and rearrange. $T_g$ is not a melting point. An amorphous polymer does not have a sharp melting point at all. It softens gradually over a range, and its mechanical properties fall continuously as it passes through $T_g$.

A semi-crystalline polymer has both a $T_g$ and a melting temperature $T_m$. The amorphous regions soften at $T_g$, but the crystals remain intact until $T_m$. That is why a PPS part with a $T_g$ near 90 °C can have an HDT above 250 °C: the crystals carry load well above the glass transition. It is also why the same part can creep badly under a sustained load at 150 °C, because the amorphous phase between the crystals is soft even though the crystals have not melted.

Typical values for the materials in this note are:

| Polymer | $T_g$ | $T_m$ | Crystalline? |
| :--- | :---: | :---: | :--- |
| PLA and PLA+ | 55–65 °C | 150–170 °C | Semi-crystalline, but often nearly amorphous as printed |
| PETG | 75–85 °C | None | Amorphous |
| PCTG | 85–95 °C | None | Amorphous |
| PET and PET-CF | 75–80 °C | 245–260 °C | Semi-crystalline |
| ABS | 100–105 °C | None | Amorphous |
| ASA | 100–108 °C | None | Amorphous |
| PC | 145–150 °C | None | Amorphous |
| PA6 | 45–60 °C | About 220 °C | Semi-crystalline |
| PA12 | 40–50 °C | 178–180 °C | Semi-crystalline |
| PPA | 85–125 °C | 280–315 °C | Semi-crystalline |
| PPS | 85–100 °C | 280–285 °C | Semi-crystalline |
| PMMA | 100–110 °C | None | Amorphous |
| PVDF | About −40 °C | 160–180 °C | Semi-crystalline |
| PCL | About −60 °C | About 60 °C | Semi-crystalline |
| TPU | Below −20 °C for the soft phase | 150–220 °C for the hard phase, depending on grade | Phase-separated |

These are typical ranges, not specifications. A single spool can sit at the edge of a range, and a copolymer can have a $T_g$ that is nowhere near the homopolymer value. The filament datasheet always outranks this table.

### 2.2 Cold crystallisation and crystal growth

When a semi-crystalline polymer is heated above $T_g$ but kept below $T_m$, the chains gain enough mobility to pack into crystals. This is called cold crystallisation when it happens during heating rather than during cooling from the melt. The process has two parts:

1. **Nucleation.** Small ordered regions form. Nucleating agents, carbon fibres, glass fibres and residual crystals from the print all provide surfaces where nucleation can start. This is why filled grades and nucleated grades crystallise faster and more uniformly than unfilled ones.
2. **Growth.** Chains add to the growing crystals. Growth is faster at higher temperatures, because the chains are more mobile, but the driving force falls as the temperature approaches $T_m$. The result is a window of practical annealing temperatures rather than a single best value.

The kinetics are usually described by an Avrami-type model, in which the fraction crystallised depends on time raised to a power and on a rate constant that is strongly temperature-dependent. The practical reading is more useful than the equation:

- **Just above $T_g$, nucleation is favoured and growth is slow.** Many small crystals form. The part gains HDT and stiffness without becoming extremely brittle, but the hold may need to be long.
- **Higher in the window, growth is faster.** A shorter hold can reach a similar crystallinity, but the crystals are fewer and larger, and the part may be more brittle.
- **Close to $T_m$, the driving force is small and the risk of partial melting is high.** The part can sag or lose its shape before it gains useful crystallinity.

For PLA there is an additional complication. PLA crystallised below roughly 100–110 °C forms a disordered $\alpha'$ phase, while PLA crystallised above roughly 110–120 °C forms the more compact $\alpha$ phase. The $\alpha'$ phase is less ordered and less stiff than the $\alpha$ phase. A 2026 study of FDM-printed PLA+ found that the best tensile strength came from a moderate anneal at 70 °C for 60 minutes, while the highest crystallinity came from 90 °C for 80 minutes and was dominated by the $\alpha'$ form. That is a useful reminder that "more crystallinity" is not the same as "better part," and that a higher $\alpha$ fraction is not automatically better.

### 2.3 What crystallinity actually changes

Crystallinity affects four properties that matter in a printed part:

- **Stiffness and strength above $T_g$.** Crystals act as physical cross-links. A semi-crystalline part retains modulus above $T_g$ because the crystals hold the network together. An amorphous part does not.
- **HDT.** The heat deflection temperature rises because the crystals resist deflection under load. The increase can be dramatic in PPS, PPA and PET-CF, and moderate in PLA.
- **Density and shrinkage.** The crystalline phase packs more densely than the amorphous phase. Crystallisation therefore shrinks the part. The exact amount depends on the polymer, the filler, the orientation and the constraint.
- **Ductility.** Crystals can embrittle the amorphous regions between them. A part that was tough as printed can become notch-sensitive after annealing, especially if the hold was long or hot.

A differential scanning calorimetry (DSC) measurement makes the change visible. The instrument heats a small sample at a controlled rate and records the heat flow. The glass transition appears as a step, cold crystallisation as an exothermic peak, and melting as an endothermic peak. The degree of crystallinity is usually calculated as:

$$X_c = \frac{\Delta H_m - \Delta H_{cc}}{\Delta H_m^\circ} \times 100\%$$

Here $\Delta H_m$ is the measured enthalpy of melting in J/g, $\Delta H_{cc}$ is the enthalpy of cold crystallisation during the same heating scan, and $\Delta H_m^\circ$ is the enthalpy of fusion of a fully crystalline reference. For PLA, a common convention is $\Delta H_m^\circ = 93.6\ \text{J/g}$. The absolute value depends on which reference enthalpy and which crystal form are assumed, so compare samples measured the same way rather than treating the number as an absolute truth.

### 2.4 Shrinkage and residual stress

Every printed layer is deposited hot and then constrained by the layer below. As it cools, it wants to contract, but the constraint prevents free contraction. The result is residual stress: the part is holding itself in a slightly stretched or compressed state. The stress is highest near the build plate, around sharp corners, and in parts with large differences in wall thickness.

Annealing gives the chains enough mobility to relax that stress. The part changes shape as it does so. Three things follow:

1. **The part shrinks in X and Y.** Crystallisation packs the chains more densely, and stress relaxation allows the printed strands to contract. A compact PLA part typically loses 1.5–2.5% in X and Y. Thin, long or asymmetric parts can distort much more. CNC Kitchen reported dimensional changes of up to 10% on some PLA samples, and gave the example of a 50 mm feature that came out at about 45 mm.
2. **The part often grows in Z.** The layers were pressed together by the nozzle, so they carry a small compressive stress in the build direction. When that stress relaxes, the stack can expand. Prusa measured Z growth in annealed PLA and PETG, and a common design allowance is a slight reduction in the Z scale factor.
3. **The part can warp if the shrinkage is uneven.** A thin wall heats and cools faster than a thick boss. A part with one large flat face and one intricate face shrinks differently on each side. Support media, slow ramps and symmetric geometry reduce the gradient, but they do not eliminate it.

This is why annealing is a design decision, not just a post-processing step. A part that must fit a bearing, a screw hole or another printed component should be annealed as a coupon first, measured, and then reprinted with an allowance. Annealing the final part and hoping the dimensions come back is not a plan.

### 2.5 Creep, HDT and continuous service temperature

Heat deflection temperature is measured by ASTM D648 or ISO 75. A standard bar is loaded in three-point bending under a fixed stress, usually 0.45 MPa or 1.8 MPa, and heated at a controlled rate. The HDT is the temperature at which the bar deflects by a specified amount. It is a short-term, fixed-load, fixed-geometry test.

The standard itself is explicit about the limit. ASTM D648 says that the data "shall not be used to predict the behavior of plastic materials at elevated temperatures except in applications in which the factors of time, temperature, method of loading, and fiber stress are similar to those specified in this test method," and that the data "are not intended for use in design or predicting endurance at elevated temperatures."

That warning matters because a part in service is not a small bar under a fixed load for a few minutes. It is a real geometry under a real load for hundreds or thousands of hours. The failure mode at temperature is usually creep, not immediate softening. A material can pass an HDT test at 250 °C and still creep unacceptably at 120 °C under a bolt preload.

Use three different numbers, and do not confuse them:

- **HDT at 0.45 MPa** is a comparative datum for stiff, lightly loaded parts. It is useful for ranking materials and for showing the effect of annealing.
- **HDT at 1.8 MPa** is a more demanding comparative datum, closer to a structural load. It is often 30–75 °C lower than the 0.45 MPa value, though the gap can be larger for some polymers.
- **Continuous service temperature** is a long-term rating that accounts for creep, oxidation and load. It is only meaningful if the manufacturer publishes it, usually as a UL relative thermal index or a long-term creep curve. If no such rating exists, use a qualified range and test the actual part.

For the materials in this note, a safe engineering approach is to keep sustained loads well below the 0.45 MPa HDT, and to derate further when the part is thick, the load is constant, or the environment is hot. A PPS-CF bracket with a 250 °C HDT is not a 250 °C bracket. It is a bracket that may survive a short excursion to 200 °C, and that should be tested under its real load before it is trusted at 150 °C.

### 2.6 Why annealing does not fuse layers

The weak point in an FDM part is usually the interface between layers, not the bulk polymer. Annealing can improve the bulk properties, but it does not close that interface. The reason is that the interface is already a physical boundary with trapped voids, incomplete chain diffusion and sometimes oxidised polymer. Heating the part above $T_g$ gives the chains some mobility, but it does not give them the time or the driving force to diffuse across a gap that has already solidified and contracted away from the layer below.

CNC Kitchen tested this directly. PLA hooks printed upright failed at 42 kg before annealing and 42 kg after annealing, and every fracture ran between the layers. Higher temperatures of 140 °C and 180 °C in sand did not change the result. The same study found a 7.5% gain in XY tensile strength and a 16% gain in a lying hook, which shows that annealing can improve the bulk material while leaving the layer interface unchanged.

This is the honest dividing line:

- **Annealing** improves crystallinity, HDT, stiffness and residual stress. It does not make a part isotropic.
- **Remelting in salt or plaster** can fuse the layers, because the polymer actually flows. It also destroys fine dimensions and is a different process with different risks.

If layer strength is the problem, the solution is in the print: higher nozzle temperature within the material's window, slower volumetric flow, more overlap, a larger nozzle, a hotter chamber, and a dry spool. Annealing is not a substitute for a well-bonded print.

## 3. Material-by-Material Schedules

The table below gives practical starting points. It assumes a well-dried part, a dedicated oven with an independent thermometer, and a support medium or fixture for anything thin or asymmetric. "Ramp" and "cool" are the rates of change of the oven air temperature, not the rate at which the part's core changes. A salt or plaster bed will lag well behind the oven.

| Material | Oven temperature | Hold | Ramp | Cool | Expected benefit | Main risk | Can the U1 do it? |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **PLA** | 95–110 °C | 45–90 min for a 3 mm wall; add about 30 min per additional 3 mm | 1–2 °C/min | 0.5–1 °C/min to below 40 °C | HDT from about 55–60 °C to roughly 95–135 °C; higher modulus; the part becomes opaque as it crystallises | Sagging, 1.5–2.5% XY shrinkage, Z growth, and up to 5–10% distortion on thin or asymmetric parts; possible embrittlement | No. The chamber stops at 60 °C and the bed at 100 °C, and neither is a uniform air oven. |
| **PLA+ and HTPLA** | 95–110 °C | 6–60 min depending on grade; HTPLA is nucleated and can use 6–10 min in a preheated oven | 1–2 °C/min | 0.5–1 °C/min | HDT gain and faster crystallisation than ordinary PLA; HTPLA is designed for this | Warping; the impact modifier in some PLA+ grades limits crystallinity; over-annealing can reduce toughness | No. Use an external oven. |
| **PETG** | 65–70 °C | 1–2 h | 0.5–1 °C/min | 1 °C/min | Stress relief only. HDT stays around 70 °C. | Distortion near $T_g$; no meaningful HDT gain; Prusa found that 110 °C improved impact but caused severe warping | Not properly. The bed can hold 65–70 °C, but it heats one face and the chamber cannot soak the part. |
| **PCTG** | 65–70 °C | 1–2 h | 0.5–1 °C/min | 1 °C/min | Stress relief only. HDT stays around 80 °C. Clarity may drop. | Distortion; loss of clarity; no HDT gain | Not properly. The bed can reach the temperature, but it is not an air oven. |
| **PET and PET-CF** | 120 °C typical; some grades specify 80–140 °C | 6–12 h; Polymaker specifies 10 h at 120 °C for PET-CF17 | 1–2 °C/min | 0.5–1 °C/min | HDT from about 70–110 °C to 130–155 °C for common grades; Bambu publishes 205 °C at 0.45 MPa for its PET-CF. Higher stiffness and better dimensional stability. | 1–1.5% XY shrinkage; warping of thin or asymmetric parts; holes shrink; over-annealing near $T_m$ | No. 120 °C is above both the bed and the chamber limits. |
| **ABS** | 80–90 °C | 1–2 h | 1 °C/min | 1 °C/min | Stress relief and better dimensional stability; some improvement in resistance to environmental stress cracking. HDT stays around 90–105 °C. | Warping; the benefit is modest and Prusa found ABS unsuitable for annealing in their tests | No. The bed reaches 90 °C, but there is no controlled air oven. |
| **ASA** | 80–95 °C | 1–2 h | 1 °C/min | 1 °C/min | Stress relief; HDT stays around 95–105 °C. | Warping; colour shift; little HDT gain | No. Same reason as ABS. |
| **PC and PC-ABS** | 90 °C for modified PC; 110–120 °C for some pure-PC datasheets | At least 2 h; 2–3 h for the higher pure-PC schedule | 0.5–1 °C/min | 1 °C/min or slower | Stress relief, better dimensional stability and improved resistance to environmental stress cracking. HDT stays around 120–135 °C. | Sagging of thin sections; new stress if cooled quickly; the higher pure-PC schedule is close to the limit of a kitchen oven | No. 90–120 °C spans the bed limit and is far above the chamber limit, and even 90 °C cannot be held uniformly in air. |
| **PA6, PA12 and PA-CF** | 80–100 °C | 4–8 h; 6–16 h for full crystallinity, depending on the datasheet | 1 °C/min | 1 °C/min | Higher crystallinity, HDT and stiffness; better creep resistance when dry. | 1–2% shrinkage; loss of impact strength when bone dry; moisture must be restored afterwards | No. 80–100 °C is at the bed limit, but the bed is not an oven. |
| **PPA-CF and PPA-GF** | 100–140 °C, depending on grade; Bambu specifies 120–140 °C | 6–12 h | 1 °C/min | 1 °C/min | Higher HDT and stiffness; HDT at 0.45 MPa can be 185–240 °C depending on grade and anneal. | Notched impact strength can fall by roughly half; warping; loss of toughness | No. Far above the machine limits. |
| **PPS and PPS-CF** | 125 °C for Polymaker Fiberon PPS-CF10; 180–220 °C for Bambu PPS-CF | 16 h at 125 °C; 6–12 h at 180–220 °C | 1–2 °C/min | 1 °C/min | HDT from about 90 °C to 250–264 °C at 0.45 MPa; higher crystallinity and chemical resistance. | Shrinkage, warping, and a large difference between grades; 220 °C is within 60 °C of the melting point and needs tight control | No. 125–220 °C is far above anything the U1 can produce. |
| **PMMA** | 80–90 °C | 1–2 h | 0.5–1 °C/min | 1 °C/min | Stress relief only. HDT stays around 90–105 °C. | Sagging, crazing and loss of clarity; the benefit is small | No. 80–90 °C is below the bed limit, but it cannot be held uniformly in air. |
| **PVDF** | 100–130 °C | 2–4 h | 1 °C/min | 1 °C/min | Modest increase in crystallinity and HDT; better dimensional stability. | Deformation near $T_m$; HF release only if overheated far above the annealing range, roughly above 350 °C | No. Far above the machine limits. |
| **PCL** | Not applicable | Not applicable | Not applicable | Not applicable | None. PCL melts at about 60 °C, so warming it above roughly 45–50 °C erases detail. | Melting and loss of shape | No, and the attempt would melt the part. Keep PCL below 45 °C in service. |
| **TPU and TPE** | 50–60 °C, optional | 1–2 h | 0.5–1 °C/min | 1 °C/min | Slight stress relief; no meaningful HDT gain. | Compression set, loss of elasticity, and deformation of thin walls | No. A 60 °C chamber is within range, but it cannot hold a part uniformly and the benefit is marginal. |

### 3.1 Notes on the table

**PLA is the material most often annealed, and the one most often ruined.** The HDT gain is real, but the dimensional change is real too. A simple, thick, symmetric part in a salt bed can come out close to its original size. A thin, long or detailed part usually warps. If the goal is maximum HDT, use 100–110 °C. If the goal is a stronger part with less risk, a moderate anneal at 70–90 °C for about an hour can raise crystallinity and tensile strength without pushing the part as far into the softening range. The two goals are not identical, and the right schedule depends on which one matters.

**PLA+ and HTPLA are not the same as standard PLA.** HTPLA is nucleated to crystallise quickly, and some manufacturers recommend a short hold in a preheated oven, in the range of 6–10 minutes at 95–115 °C for thin parts. Ordinary PLA+ may contain an impact modifier that limits crystallinity, so it behaves more like standard PLA. Follow the spool's instructions rather than assuming that every "PLA+" is annealable to the same HDT.

**PETG and PCTG are amorphous.** They cannot grow crystals, so annealing does not raise their HDT. A gentle hold just below $T_g$ can relieve stress, but the window is narrow and the part is already soft. Prusa found that PETG annealed at 110 °C improved impact strength but warped badly. For most PETG parts, the honest advice is to design for the HDT you already have, not to anneal.

**PET and PET-CF are the clearest case for annealing on a 300 °C printer.** The part prints at 260–295 °C, comes out largely amorphous, and gains a large HDT increase after a 120 °C hold. The exact schedule varies by manufacturer. Bambu specifies 80–140 °C for 6–12 hours. Polymaker specifies 120 °C for 10 hours for PET-CF17. UltiMaker uses 120 °C for 2 hours with a controlled ramp and cool. Those are not equivalent, and the difference is grade and test specimen, not a typo. Start with the TDS, then verify on a coupon.

**ABS and ASA are poor candidates for annealing.** They are amorphous, so the HDT does not rise. The stress-relief benefit is real but modest, and the warping risk is high. Prusa tested both and concluded that they were unsuitable for annealing because the deformation outweighed the gain. If a part needs better heat resistance than ABS or ASA can give, change material rather than anneal harder.

**PC is a special case because its $T_g$ is high.** Polymaker's schedule is 90 °C for at least 2 hours, applied immediately after printing, with the part transferred while still hot. The purpose is to keep the part warm and slow its cooling, so that the stress locked in during printing has time to relax; the oven does not take the part above $T_g$. A PC part that has already cooled to room temperature and is then put in a 90 °C oven will relieve only part of its stress. Some pure-PC datasheets use 110–120 °C for 2–3 hours, but that is close to the practical limit of a kitchen oven and can sag thin sections. Support the part and cool it slowly.

**PA, PPA and PPS are the materials where annealing is part of the process rather than an optional upgrade.** A PPS-CF part printed into a 50–60 °C chamber is largely amorphous, and the 125 °C hold is what develops its published HDT. PPA-CF gains HDT and stiffness but loses impact strength. PA6 and PA12 gain crystallinity and creep resistance, but they also dry out during the anneal, so they must be moisture-conditioned afterwards.

**The PPS schedule is the strongest warning against generic recipes.** Polymaker specifies 125 °C for 16 hours for Fiberon PPS-CF10. Bambu specifies 180–220 °C for 6–12 hours for its PPS-CF. Both are below the melting point of the base polymer, but they are different processes with different crystal growth rates and different risks. A single "PPS anneal at 125 °C" recipe is not universally correct, and a single "PPS anneal at 200 °C" recipe can deform a grade that was not designed for it.

**PMMA, PVDF and PCL are niche cases.** PMMA is amorphous and gains little. PVDF is semi-crystalline but is usually chosen for chemical resistance, not HDT, and its annealing window is narrow. PCL melts at about 60 °C, so it should not be annealed at all; it is a hand-mouldable polymer, not a heat-resistant one.

**TPU is not a candidate for HDT improvement.** Its hard domains can melt over a wide range, but the useful property is elasticity, not stiffness at temperature. A 50–60 °C hold may relieve a little stress, but it can also cause compression set. Leave TPU as printed unless the manufacturer gives a specific schedule.

### 3.2 If your material is not listed

Use the following decision rule, then confirm it with the datasheet:

1. **Is the polymer semi-crystalline?** If yes, anneal between $T_g$ and $T_m$, usually 20–40 °C above $T_g$ for a first trial. If no, anneal at or just below $T_g$ for stress relief only.
2. **What does the datasheet say?** A manufacturer's annealing schedule overrides every generic table, including this one. The grade, the fibre loading and the nucleating package can change the optimum by tens of degrees.
3. **How thick is the part?** Add hold time for thickness. A 3 mm wall and a 30 mm solid block do not reach the same core temperature on the same schedule.
4. **How asymmetric is the part?** The more uneven the wall thickness, the slower the ramp and cool, and the more likely the part needs a support medium.
5. **What is the failure mode you are trying to prevent?** If it is heat deflection, anneal for crystallinity. If it is cracking around a screw, anneal for stress relief. If it is layer adhesion, annealing will not fix it.

## 4. Methods and Equipment

### 4.1 Convection ovens, laboratory ovens and kitchen ovens

A **forced-air convection oven** is the best practical choice. The fan moves air across the part, reduces hot spots, and shortens the time needed for the core to reach the setpoint. A dedicated countertop convection oven with a mechanical thermostat and an independent thermometer is enough for most work, provided it holds within about ±5 °C. A **laboratory oven** with a PID controller and ±1 °C uniformity is better, especially for PPS and PPA, but it is expensive and usually larger than a hobbyist needs.

A **kitchen oven** is the most common choice and the least satisfactory. Three problems matter:

- **Hot spots.** Heating elements cycle on and off, and the air near an element can be much hotter than the displayed temperature. Polymaker notes variations of 5–10 °C and warns about hot spots near the elements.
- **Poor low-temperature control.** Many kitchen ovens are designed for 180–250 °C and hold 90–120 °C badly. The dial may say 100 °C while the actual air swings between 85 and 120 °C. A separate oven thermometer is mandatory.
- **Contamination.** Polymer volatiles, carbon-fibre dust, salt and plaster can deposit on the oven walls and racks. Bambu Lab states that a kitchen oven is not compatible for annealing its PET-CF, PPA-CF and PPS-CF, and that a forced-air drying oven is required. Prusa recommends an electric oven rather than a gas oven, because a gas oven is less even and less safe. If you use a kitchen oven for polymer work, do not use it for food afterwards, and accept that the oven is now a workshop tool.

A **gas oven** is a poor choice for a different reason: the combustion products and the cycling temperature make the atmosphere less predictable, and the flame adds a safety risk if a part outgasses or a solvent residue ignites. Use electric heat.

Whatever oven you use, calibrate it. Put a thermocouple or a good oven thermometer at the position where the part will sit, run the oven at the target temperature for 30 minutes, and record the swing. Do this before the first real part, not after it sags.

### 4.2 Salt, sand and plaster

Support media do two jobs: they hold the part in shape while it softens, and they conduct heat into the part. They also add thermal lag, dust and cleanup work. The choice depends on the geometry and on whether you are annealing or remelting.

**Fine salt** is the classic medium for PLA. The part is buried in dry, fine salt in a stainless steel or borosilicate container, and the salt is tapped and compacted so that it fills the cavities. The salt supports thin walls and reduces warping. It is also corrosive: salt dust rusts steel tools, oven racks and any carbon-steel inserts, and it can leave a residue in deep crevices. Use stainless containers, rinse the part thoroughly after annealing, and dry it before use. Do not use salt with a part that contains steel inserts, magnets or electronics.

**Sand** is cheaper and reusable. It has a higher thermal mass than salt and can hold a part steadily, but it is a poorer conductor and can scratch the surface. Fine, dry sand is better than coarse builder's sand. It does not dissolve, so cleaning is mechanical. It is a reasonable choice for large, simple parts where a little surface marking does not matter.

**Plaster of Paris or investment powder** gives the most rigid support. The part is cast into a plaster block, the block is dried thoroughly, and the part is heated inside it. The plaster holds fine detail and prevents sagging even at temperatures where the polymer is soft. The costs are significant: the plaster must be dried for a day or more, the block is heavy, the dust is a respiratory irritant, and removing the plaster without damaging the part is slow work. CNC Kitchen found that plaster residues were difficult to remove and that wet plaster can hydrolyse the polymer if the block is not fully dry. Plaster is best reserved for parts that cannot be supported any other way, and it should be used with a dedicated oven, not a kitchen oven.

The important distinction is between **support-medium annealing** and **support-medium remelting**. Salt at 95–110 °C supports a PLA part while it crystallises. Salt at 180–210 °C remelts the polymer and fuses the layers. The first is annealing. The second is a different process with different results. Do not confuse the two, and do not use a remelting schedule on a part that has to fit.

### 4.3 The printer chamber, the build plate and hot air

The Snapmaker U1 has a 100 °C bed and, with a BIQU Panda Breath and community firmware, a 60 °C chamber. Those numbers are useful for printing, not for annealing.

- **The chamber** is a 60 °C air environment at best. It is below the annealing window of PLA, PET, PPS and PPA, and it is not uniform enough to soak a part. A 60 °C chamber may relieve a little stress in PETG or PCTG at the top of their ranges, but the part is already near $T_g$ and the risk of distortion is high. It is not a substitute for an oven.
- **The build plate** reaches 100 °C, but it heats one face by conduction. The top of the part is exposed to 25–60 °C air, so the part develops a steep thermal gradient. A part left on the bed at 100 °C is not being annealed uniformly; it is being baked on one side. Do not put the U1's magnetic spring-steel plate in an external oven either, because the magnet is not rated for repeated high-temperature cycles.
- **A hot-air gun** is useful for local bending, shrinking heat-shrink tubing or softening a joint. It is not an annealing tool. The air stream is uneven, the temperature is uncontrolled, and the surface will overheat before the core is affected.

If you want to use the U1 for low-temperature stress relief, the honest statement is that it is a compromise, not a capability. The machine can hold a bed at 65–70 °C and a chamber at 50–60 °C, but it cannot guarantee a uniform part temperature. For anything that matters, use an external oven.

### 4.4 Water and oil baths

A water bath or sous-vide cooker can hold a precise temperature and heats a part evenly, which makes it attractive for low-temperature stress relief. It is practical for PETG, PCTG and other polymers whose annealing range is below 100 °C. The drawbacks are that the part must be fully dried afterwards, that hard water can leave mineral marks, and that the part must not touch the bottom or the heating element. It is not suitable for PLA at 100 °C or for PET at 120 °C, because water boils at 100 °C at atmospheric pressure.

An oil bath can go above 100 °C, but it is messy, a fire risk, and difficult to clean out of a porous printed part. It is not recommended for hobby work. If you use one, use a high-flash-point oil, a dedicated vessel, a thermometer and a fire extinguisher, and never leave it unattended.

### 4.5 Choosing a method

| Method | Best for | Advantages | Problems |
| :--- | :--- | :--- | :--- |
| **Forced-air convection oven** | Most parts, especially PET-CF, PPS-CF, PPA-CF and PC | Even air, good control, short recovery time | Needs calibration; a kitchen oven contaminates food; a cheap oven may overshoot |
| **Laboratory oven** | PPS, PPA and precision work | Tight uniformity and programmable ramps | Cost and size; still needs a support medium for thin parts |
| **Salt bed** | PLA, small and medium parts | Supports thin walls, dissolves out, cheap | Corrosive dust, residue in crevices, thermal lag, not for steel inserts |
| **Sand bed** | Large simple parts, PLA and PETG | Reusable, good thermal mass, cheap | Scratches, dust, thermal lag, hard to clean |
| **Plaster cast** | Complex or delicate parts that cannot sag | Rigid support, preserves detail | Dust, long drying, difficult removal, hydrolysis risk if wet |
| **Heated chamber** | Marginal PETG or PCTG stress relief, at best | Uses the printer | 60 °C ceiling, not uniform, cannot anneal PLA, PET, PPS or PPA |
| **Heated bed** | Nothing that needs uniform annealing | Uses the printer | One-sided heating, steep gradient, not an oven |
| **Hot-air gun** | Local forming and bending | Fast, cheap | Uncontrolled, surface-only, not annealing |
| **Water bath** | PETG and PCTG stress relief below 100 °C | Even and precise | Part must be dried; not for >100 °C; mineral marks |
| **Oil bath** | Almost nothing in a home workshop | High temperature and even heat | Fire risk, mess, cleanup, not recommended |

## 5. Process Recipes

The recipes below are starting points for a well-dried part in a calibrated oven. They assume a 3 mm wall unless stated otherwise. A manufacturer's TDS overrides every one of them. If the TDS gives a different temperature, time or ramp, use the TDS.

### 5.1 PLA salt-pack annealing

This is true annealing at 95–110 °C, not salt remelting at 180–210 °C.

1. **Dry the part.** Hold it at 40–50 °C for 2–4 hours to remove surface and absorbed moisture. Do not exceed 55 °C, because the part can soften before it is supported.
2. **Prepare a stainless or borosilicate container.** It should leave at least 20 mm of salt around the part on every side. The container must be rated for the oven temperature.
3. **Add a base layer of fine, dry salt.** Use plain table salt or a fine salt that has been sieved to remove clumps. Do not use salt with anti-caking additives if you can avoid it, and do not use wet salt.
4. **Bury the part.** Place it in the container, then add salt in small increments, tapping the container gently so that the salt fills the cavities. Do not press hard enough to deform the part. Leave at least 20 mm of salt above the part.
5. **Set the oven target to 100 °C.** Put an oven thermometer or thermocouple in the salt, near the part. The salt will lag the oven by a long time, so the thermometer in the salt is the number that matters.
6. **Ramp at 1–2 °C/min.** If the oven has a programmable ramp, put the part in and use it. If it does not, put the part in a cold oven and let the oven come up slowly with the door closed. Do not put a cold part into a preheated oven unless the part is thick and symmetric.
7. **Hold at 95–110 °C for 45–90 minutes** for a 3 mm wall. Add about 30 minutes for each additional 3 mm of wall thickness. A 20 mm solid section may need 3–4 hours, and the salt may need longer to equalise.
8. **Cool at 0.5–1 °C/min to below 40 °C.** The simplest reliable method is to switch the oven off and leave the door closed overnight. Do not open the door, do not move the container, and do not quench.
9. **Remove the part and clean it.** Brush off the salt, rinse with warm water, and dry at 40–50 °C for 2–4 hours. Inspect deep pockets for salt residue.
10. **Measure it.** Record X, Y and Z at the same points you measured before annealing. Expect 1.5–2.5% XY shrinkage on a compact part and Z growth of a few tenths of a percent. If the part must fit, drill or ream holes after annealing, not before.

> [!warning] Salt remelting is not this recipe
> Heating PLA in salt at 180–210 °C is a remelting process. It can produce near-isotropic strength, but it also destroys fine dimensions and can make PLA brittle. CNC Kitchen's salt tests used 180–210 °C and kept dimensional changes below 1% with a rigid salt bed, but that is not the same as a dimensionally neutral process. Do not use that schedule on a part with tolerances.

### 5.2 PET-CF annealing

1. **Dry the part and the filament.** PET-CF is hygroscopic enough that moisture causes bubbles and hydrolysis. Dry the spool at 80 °C for 8–12 hours before printing, and dry the printed part at 80 °C for 2 hours before annealing if it has absorbed moisture.
2. **Relax the part before the high hold.** Polymaker recommends either waiting at least 24 hours after printing or holding the part at 80 °C for 2 hours to remove printing stress before the main anneal. This reduces the risk of warping when the part reaches 120 °C.
3. **Support the part.** Place it flat on a ceramic tile or in a thin bed of salt or sand. PET-CF parts are stiff but thin sections can still sag.
4. **Ramp at 1–2 °C/min to 120 °C.** Use the manufacturer's temperature if it differs. Bambu allows 80–140 °C; Polymaker specifies 120 °C; UltiMaker uses 120 °C.
5. **Hold for 6–12 hours.** Polymaker specifies 10 hours at 120 °C for PET-CF17. Bambu specifies 6–12 hours. UltiMaker uses 2 hours at 120 °C after a slow ramp for its own grade, which is a shorter hold and is not directly interchangeable with the other schedules. Start with the TDS, and use the longer hold for thicker parts.
6. **Cool at 0.5–1 °C/min to below 50 °C.** Leave the part in the oven. A fast cool can warp it and reintroduce stress.
7. **Measure and machine.** Expect about 1–1.5% XY shrinkage. Holes shrink, so drill or ream them after annealing. Check flatness on a surface plate.

### 5.3 PPS-CF annealing

1. **Dry the part.** PPS absorbs little water, but surface moisture and fibre sizing should still be removed. A 100 °C hold for 2–4 hours is a reasonable minimum for a printed part; follow the TDS for the spool.
2. **Choose the schedule from the TDS.** Polymaker Fiberon PPS-CF10 uses 125 °C for 16 hours. Bambu PPS-CF uses 180–220 °C for 6–12 hours. These are not interchangeable.
3. **Support the part.** PPS-CF is stiff but can warp during crystallisation. A salt or sand bed, or a flat ceramic tile, is sensible for large or thin parts.
4. **Ramp at 1–2 °C/min.** For the 125 °C schedule, a slow ramp is easy. For the 180–220 °C schedule, stay well below the grade's melting point and watch the part during the first hour.
5. **Hold for the full time.** At 125 °C, PPS-CF needs many hours to reach the crystallinity behind its published HDT, and a short 2–3 hour hold will not get there. Polymaker is explicit that 16 hours is the schedule for its PPS-CF10.
6. **Cool at 1 °C/min to below 60 °C.** Do not open the oven early. PPS parts can warp if the surface cools before the core.
7. **Measure and inspect.** Expect shrinkage and a change in colour or surface sheen. A well-crystallised PPS part often rings when tapped, but the ring is an anecdotal check, not a measurement.

### 5.4 PPA-CF annealing

1. **Dry the part.** PPA absorbs moisture. Dry at 80–100 °C for 4–8 hours before annealing if the part has been exposed to room air.
2. **Choose the schedule from the TDS.** Bambu specifies 120–140 °C for 6–12 hours. Polymaker's general nylon guidance is 80–100 °C for 6–16 hours, and some PPA-CF datasheets specify a shorter 4–8 hour hold at the lower end of that range. The grade matters.
3. **Support the part.** PPA-CF is stiff but can warp, especially in thin walls.
4. **Ramp at 1 °C/min to the hold temperature.**
5. **Hold for 6–12 hours.** Do not shorten the hold if the datasheet calls for the longer time.
6. **Cool at 1 °C/min to below 60 °C.**
7. **Moisture-condition the part afterwards.** Annealing dries the nylon. A dry PPA-CF part is stiffer but more brittle. Let it reabsorb moisture from the air for about 48 hours, or use a warm water soak if the manufacturer allows it, before testing impact strength.

### 5.5 PC stress relief

1. **Transfer the part hot.** The best time to start is immediately after printing, while the part is still on a warm build plate. Polymaker recommends moving the part directly from the printer to a 90 °C oven.
2. **Support the part.** PC softens near $T_g$, and thin sections can sag. A flat ceramic tile or a sand bed helps.
3. **Ramp at 0.5–1 °C/min to 90 °C** for modified PC. For a pure-PC grade whose datasheet calls for 110–120 °C, use that temperature and a slower ramp.
4. **Hold for at least 2 hours.** Three hours is reasonable for a thick part.
5. **Cool at 1 °C/min or slower to below 50 °C.** This is the most important step. A fast cool reintroduces the stress and can cause cracking.
6. **Do not quench, and do not open the oven to check the part.** Let the schedule finish.

### 5.6 PA6, PA12 and PA-CF

1. **Dry the part.** PA is hygroscopic. Dry at 80 °C for 4–8 hours before annealing.
2. **Support the part.** Nylon is prone to warping, especially PA6. A salt or sand bed is useful for thin walls.
3. **Ramp at 1 °C/min to 80–100 °C.**
4. **Hold for 4–8 hours.** Polymaker's general guidance is 6–16 hours for full crystallinity. A 4–6 hour hold is a reasonable starting point for a thin part; a thick part needs longer.
5. **Cool at 1 °C/min to below 50 °C.**
6. **Moisture-condition the part.** A dry, annealed PA6 part is brittle. Let it reabsorb moisture for about 48 hours, or follow the manufacturer's conditioning procedure, before using it in an impact application.

### 5.7 Low-temperature stress relief for PETG, PCTG, ABS and ASA

These polymers do not gain HDT from annealing. The goal is to relax residual stress without softening the part enough to distort it.

1. **Dry the part at 50 °C for 2 hours.** This is optional for PETG and PCTG, but it removes surface moisture.
2. **Support the part on a flat, heat-resistant surface.** A ceramic tile is enough for a flat part. A sand bed is better for a thin or asymmetric part.
3. **Ramp at 0.5–1 °C/min to 65–70 °C for PETG or PCTG, 80–90 °C for ABS, or 80–95 °C for ASA.**
4. **Hold for 1–2 hours.**
5. **Cool at 1 °C/min to below 40 °C.**
6. **Measure the part before and after.** The dimensional change should be small. If the part distorts, the temperature was too close to $T_g$ or the support was inadequate.

For PETG, Prusa's tests at 110 °C showed a large impact-strength gain but severe warping. That is a very hot anneal for a thin test bar, not a practical schedule for a real part. The safer stress-relief range is 65–70 °C.

### 5.8 Materials that should not be annealed

- **PCL** melts at about 60 °C. Warming it above 45–50 °C erases detail. It is a hand-mouldable polymer, not a heat-resistant one.
- **POM** should not be heated for annealing. It can release formaldehyde above roughly 230 °C, and a solvent-contaminated POM part is a fire risk. Keep POM well below its degradation range and do not use a kitchen oven.
- **PVB** softens at a low temperature and is sensitive to alcohol. Annealing is not a useful route to better properties, and the part may lose detail.
- **TPU** gains little and can take a permanent compression set. Leave it as printed unless the TDS gives a specific schedule.
- **PLA-CF and PETG-CF** are not good annealing candidates. The fibre reduces shrinkage slightly, but the gain in HDT is small and the risk of distortion is high. Follow the matrix TDS if the manufacturer insists.
- **Metal-filled and conductive filaments** should not be annealed without a specific TDS. Metal fillers oxidise, and the difference in thermal expansion between the filler and the polymer can crack the part. Conductive carbon-black compounds can change resistance after a heat cycle.
- **Parts with electronics, batteries, magnets or heat-set inserts** should not be annealed as assembled. Batteries can vent or catch fire. Neodymium magnets lose strength above their maximum operating temperature, which is often around 80 °C for standard grades. Metal inserts expand more than the polymer and can crack the surrounding wall.

### 5.9 Manufacturer schedules override these recipes

A datasheet schedule is not a suggestion. It is the result of the manufacturer's own testing on a specific grade. If the TDS says 120 °C for 10 hours, do not substitute 100 °C for 6 hours because it is more convenient. If the TDS says 180–220 °C for PPS-CF, do not use a 125 °C recipe from a different grade. The polymer may be the same family, but the crystallinity, nucleation and fibre loading can be different enough that the schedule matters.

## 6. Measurement and Verification

### 6.1 Dimensional change and warpage

Measure the part before annealing at 20 ± 2 °C, using the same calipers and the same datum points. Mark the points with a pencil or a small dot of paint so that you can find them again. Record X, Y and Z, plus the diameter of any critical hole.

After annealing and cooling, measure the same points again. Do not measure while the part is still warm, because thermal expansion will confuse the result. For nylon, wait until the part has reabsorbed moisture, or measure both the dry and conditioned states.

For warpage, put the part on a surface plate or a piece of float glass and try to slide a feeler gauge under the corners. A 0.1 mm feeler gauge is a practical threshold for a small part. For a large part, use a height gauge or a straight edge and measure the gap at several points. Record the direction of the warp, not just the maximum gap.

### 6.2 Heat deflection temperature

HDT is measured on a standard test bar, not on a finished part. Use ASTM D648 or ISO 75, at 0.45 MPa and 1.8 MPa, and compare annealed and unannealed bars from the same spool. The test is comparative: the absolute number depends on the specimen, the load and the heating rate, and it is not a service rating.

If you do not have a universal testing machine, you can still do a **comparative heat-sag test**:

1. Print two identical bars, about 80 × 10 × 4 mm.
2. Anneal one bar with the schedule you intend to use. Leave the other as printed.
3. Clamp both bars horizontally as cantilevers, with 60 mm protruding.
4. Put a small weight on the free end, for example 20–50 g.
5. Put both bars in an oven and raise the temperature at 2 °C/min.
6. Record the temperature at which each bar deflects by 2 mm.

This is not an HDT measurement, because the load and geometry are not standard. It is a direct comparison of the two states of the same material, and it is often more useful than a datasheet number.

### 6.3 Differential scanning calorimetry

DSC is the best way to see whether the anneal actually changed the crystallinity. A laboratory will take a 5–10 mg sample, seal it in an aluminium pan, and heat it at 10 °C/min under nitrogen. The first heating scan shows the thermal history of the printed and annealed part. The glass transition, cold crystallisation peak and melting peak are integrated, and the crystallinity is calculated from the equation in section 2.3.

Three practical cautions:

- **Use the first heating scan.** A second scan erases the thermal history and tells you about the material, not the part.
- **Use the same reference enthalpy for every sample.** The absolute crystallinity depends on the reference value and the crystal form. Compare like with like.
- **Take the sample away from the fracture zone and away from the surface.** The surface may have oxidised or absorbed contamination.

### 6.4 Visual checks and a before-and-after test print

PLA becomes more opaque and whiter as it crystallises. A translucent PLA part that turns milky after annealing has almost certainly increased its crystallinity. PPS and PPA may change colour or surface sheen. PC may become slightly more yellow. These are useful qualitative checks, but they are not measurements.

Print a small test artefact with the same material and the same settings as the real part. A 40 mm cube with a 10 mm hole, a 20 mm cantilever and a 5 mm wall covers the common failure modes. Anneal the artefact, measure it, and compare it with an unannealed copy. If the artefact warps, the real part will warp more.

### 6.5 Record keeping

Keep a log with the following fields:

- Material, brand, grade and spool number.
- Print settings, especially nozzle temperature, chamber temperature and infill.
- Part mass and maximum wall thickness.
- Oven, support medium and thermocouple position.
- Ramp rate, hold temperature, hold time and cool rate.
- Dimensions before and after, including the direction of change.
- Warpage before and after.
- Any colour, gloss or surface change.
- The test result that matters for the application.

A log turns annealing from folklore into a process. It also lets you repeat a good result when the next spool arrives.

## 7. Failure Modes

| Failure | What it looks like | Likely cause | Prevention |
| :--- | :--- | :--- | :--- |
| **Sagging** | The part droops, thin walls bow, holes close | The hold temperature is too close to $T_g$ or $T_m$, or the part is unsupported | Lower the temperature, support the part, use a salt or plaster bed, slow the ramp |
| **Shrinkage** | The part is smaller in X and Y, holes are undersized | Crystallisation and stress relaxation | Allow 1–3% shrinkage, anneal a coupon, drill holes after annealing |
| **Warping** | Corners lift, a flat face becomes curved | Uneven heating or cooling, asymmetric wall thickness, one-sided support | Slow the ramp and cool, support both sides, symmetric design, anneal a test piece |
| **Embrittlement** | The part snaps instead of yielding; notched impact falls | Too much crystallinity, too long a hold, too high a temperature, loss of moisture in PA | Use the mildest schedule that meets the requirement, moisture-condition PA, do not over-anneal |
| **Colour shift** | Yellowing, browning, loss of gloss | Pigment degradation, oxidation, surface overheating | Lower the temperature, shorten the hold, use a convection oven, avoid direct radiant heat |
| **Spool welding** | Filament strands fuse on the spool; the spool flanges deform | Annealing or drying a spool above the filament's $T_g$ or the spool's rating | Never anneal filament on the spool; dry at the manufacturer's temperature and no higher |
| **Sticking to the medium** | Salt or plaster is fused to the surface; sand is embedded | The medium was wet, the temperature was too high, or the part was not protected | Dry the medium, use a release layer, keep the temperature below the medium's sintering point, clean promptly |
| **Over-annealing** | The part loses detail, becomes glossy or deformed, smells acrid | The temperature approached $T_m$, the hold was too long, or the oven overshot | Calibrate the oven, use a thermocouple, stay well below $T_m$, follow the TDS |
| **Under-annealing** | No HDT gain, the part still creeps or warps in service | The hold was too short, the core never reached temperature, or the polymer is amorphous | Extend the hold, measure the core, confirm that the polymer is semi-crystalline |
| **Cracking after annealing** | Fine cracks appear hours or days later | Fast cooling, residual stress, environmental stress cracking, or a solvent residue | Cool slowly, anneal before assembly, remove solvent, use a stress-relief schedule |
| **Bubbles or voids** | Blisters, steam pockets, a porous surface | Moisture in the part or in the support medium | Dry the part and the medium before annealing |
| **Distortion of a warped part** | The warp gets worse, not better | Annealing cannot reverse an existing warp | Do not anneal a warped part expecting it to flatten; fix the print or redesign |

Two failure modes deserve special mention.

**Annealing does not fix a warped part.** A warped part has already relaxed into a new shape. Heating it again gives it more freedom to move, not less. If the part warped during printing, the fix is in the print: a hotter chamber, a slower cooling rate, more adhesion, a different orientation, or a different material. Annealing the warp is not a repair.

**Over-annealing is easy to miss.** A part that has been held too long or too hot may look fine and measure close to nominal, but its impact strength can be much lower. PPA-CF is the clearest example: the HDT rises, the stiffness rises, and the notched impact strength can fall by half. If the part will take shock loads, anneal a coupon and test it, or do not anneal at all.

## 8. Safety

### 8.1 Burns and hot parts

An oven at 100–220 °C, a stainless container full of hot salt, and a part that looks cool can all cause serious burns. Use heat-resistant gloves and long tongs. Open the oven slowly and keep your face away from the opening. Let the part cool inside the oven to below 40 °C before handling it. Do not put a hot part on a plastic bench, a paper towel or a wooden surface.

### 8.2 Fumes and ventilation

All polymer heating produces some volatile organic compounds and ultrafine particles. The amount depends on the polymer and the temperature:

- **PLA** at 100–120 °C produces relatively little, but the smell is not proof of safety.
- **ABS and ASA** release styrene and acrylonitrile compounds, especially at higher temperatures. Annealing at 80–90 °C is milder than printing at 250 °C, but it is still not something to do in a sealed bedroom.
- **PA and PPA** can release caprolactam and other amide decomposition products.
- **PPS** can release sulfur-containing compounds if overheated.
- **PVDF** can release hydrogen fluoride if it is heated far above its normal processing range, roughly above 350 °C. Annealing at 100–130 °C is far below that, but the risk is why PVDF should never be overheated or burned.
- **POM** can release formaldehyde above roughly 230 °C. Do not anneal POM, and do not let a POM part touch a hot oven element.
- **Solvent-contaminated parts** are a fire and fume risk. Remove acetone, isopropyl alcohol, limonene or paint residue before annealing, and let the part dry completely.

Use a dedicated oven in a ventilated space, or extract the fumes. Do not rely on a HEPA and carbon filter to make an unventilated room safe. The filter reduces particles and some odours, but it does not turn the room into a laboratory.

### 8.3 Kitchen ovens and food contamination

A kitchen oven is a food appliance, and using it for polymer work contaminates it. Polymer volatiles can condense on the walls, carbon-fibre dust can settle on the racks, and salt or plaster can leave residues that are difficult to remove. Bambu Lab states plainly that a kitchen oven is not compatible for annealing its PET-CF, PPA-CF and PPS-CF, and that a forced-air drying oven is required. Prusa recommends an electric oven, not a gas oven.

The honest advice is to buy a dedicated countertop oven or a small laboratory oven. If that is impossible, use a kitchen oven only for parts that will never contact food, clean it thoroughly afterwards, and never use it for food again. Do not anneal a part that is intended for food contact in a kitchen oven. The food-contact note in this vault explains why a printed part is difficult to make food-safe even before the oven is considered.

### 8.4 Dust, salt and plaster

Fine salt, sand and plaster all produce dust. Plaster dust is a respiratory irritant and may contain crystalline silica, depending on the product. Salt dust is corrosive to steel and irritating to skin. Sand dust is a nuisance and a respiratory irritant.

- Wear an N95 respirator, eye protection and gloves when mixing, pouring or brushing these materials.
- Work in a ventilated area or outdoors.
- Clean with a wet cloth or a HEPA vacuum, not a dry brush.
- Keep salt away from steel tools, oven racks and inserts.
- Do not eat or drink in the work area.
- Dispose of plaster and salt according to local rules. Do not put large amounts down a drain.

### 8.5 Fire and pressure

- **POM and solvent-contaminated parts** are the highest fire risk. Do not anneal them in a kitchen oven, and do not leave them unattended.
- **Oil baths** add a fire risk. Use a high-flash-point oil, a dedicated vessel and a fire extinguisher, and never leave the bath unattended.
- **Sealed hollow parts** can build pressure and rupture. Drill a small vent hole, or do not anneal a sealed vessel.
- **A failed oven thermostat** can run the element continuously. Use an oven with a mechanical limit or a separate over-temperature cut-out if you are annealing expensive parts.
- Keep a fire extinguisher rated for electrical and grease fires near the oven. Do not use water on an electrical fire.

### 8.6 Electrical and installed components

Do not put electronics, batteries, magnets or sensors in an oven. Lithium batteries can vent, catch fire or explode. Neodymium magnets lose strength above their maximum operating temperature, which is often around 80 °C for standard grades, and they can also demagnetise irreversibly. Heat-set inserts, screws and metal bushings expand more than the polymer and can crack the surrounding wall. Remove them before annealing, or choose a schedule below their limit and accept that the insert may loosen.

### 8.7 Food contact and skin contact

Annealing does not make a part food-safe. It does not seal the pores between layers, it does not remove residual monomers or processing aids, and it does not sterilise the surface. A part that was not food-safe before annealing is not food-safe afterwards. The same logic applies to skin contact: annealing can change the surface and release volatiles, but it does not make a material biocompatible.

If the part is intended for food or skin contact, read [[13 - Food Contact and Food-Safe Printing]] and [[12 - Skin Contact and Body-Safe Printing]] before choosing a material or a post-processing schedule. Do not use a kitchen oven, a shared salt container or a plaster cast for a part that will contact food.

## 9. The Snapmaker U1 Workflow

### 9.1 What the U1 can and cannot do

The U1 is a four-toolhead CoreXY printer with a 270 × 270 × 270 mm build volume, a 300 °C maximum nozzle temperature, a 100 °C maximum bed temperature and no stock chamber heater. The optional Top Cover gives roughly 50 °C of passive chamber heating. A BIQU Panda Breath can hold 60 °C, but only with the paxx12 extended firmware or DragonBreath, and only after full mainboard cooling has been installed. The RK3562 processor begins thermal throttling at 85 °C, and the firmware documentation is explicit that additional mainboard cooling is required before a chamber heater is used.

None of that is an annealing oven. The U1 can hold a part warm during printing, which is valuable for ABS, ASA, PA, PC, PPA and PPS. It cannot soak a finished part at 100–140 °C in uniform air. A hardened-steel hotend is required to print the carbon-fibre grades, but it has no role in the anneal. The bed can reach 100 °C, but it heats one face. The chamber can reach 60 °C, but that is below the annealing window of PLA, PET, PPS and PPA, and it is not uniform enough for a reliable stress relief of PC.

The honest summary is:

- **The U1 can print the part.** It can also dry filament in a separate dryer, and it can keep a spool dry while printing.
- **The U1 cannot anneal the part.** A separate convection oven, laboratory oven or dedicated toaster oven is required for every schedule in this note that matters.
- **The U1's chamber is not a substitute for an oven.** Do not try to anneal on the bed or in the chamber and expect datasheet properties.

### 9.2 Step-by-step workflow

1. **Dry the filament before printing.** Use the schedule in [[01 - Drying Filament]] for the specific polymer. PET-CF, PPA-CF and PPS-CF are hygroscopic enough that moisture will cause bubbles and hydrolysis at print temperature.
2. **Print with the right chamber and bed.** Use the Top Cover and, if available, a Panda Breath for ABS, ASA, PA, PC, PPA and PPS. Keep PLA and PETG cool. The print itself determines the starting stress state, and annealing cannot fully undo a bad print.
3. **Design for shrinkage.** If the part has critical dimensions, print a coupon, anneal it, measure it, and scale the model. A 1.5–2.5% XY allowance is a reasonable starting point for PLA and about 1–1.5% for PET-CF; PPS and PPA may differ.
4. **Cool the part on the plate, then remove it.** Do not pry a hot part off the PEI sheet. Let it cool below 40 °C, then flex the plate. Remove glue stick, Magigoo or other adhesives with warm water and a soft brush; baked-on adhesive is difficult to remove and is not food-safe.
5. **Remove or protect anything that cannot take the heat.** Take out supports if they will melt, stick or constrain the part. Remove heat-set inserts, magnets, electronics, batteries and dissimilar polymer parts unless every material is rated for the anneal. If an insert must stay, check its expansion and the polymer's softening point.
6. **Dry the part if it is hygroscopic.** PET, PA, PPA and PC can absorb moisture between printing and annealing. Dry at 50–80 °C for 2–8 hours, depending on the polymer, before the high-temperature hold.
7. **Support the part.** Use a ceramic tile, a wire rack, a salt bed, a sand bed or a plaster cast. The support should contact the part evenly and should not press hard enough to deform it. For a flat part, a ceramic tile is often enough. For a thin or tall part, use a bed of salt or sand.
8. **Anneal in the external oven.** Follow the TDS schedule, or the recipe in section 5. Use an independent thermocouple in the oven or in the support medium. Ramp slowly, hold for the full time, and cool in the oven.
9. **Do not quench and do not open the door early.** Let the part cool to below 40 °C inside the oven. A fast cool is the most common cause of new stress and cracking.
10. **Re-check the fit and finish.** Measure the critical dimensions, check flatness, and inspect for cracks, colour change or surface damage. Drill, ream or tap holes after annealing, because they will have shrunk. Moisture-condition PA and PPA parts before impact testing or use.
11. **Record the result.** Keep the schedule and the measurements with the part or in a log. The next spool may need a different schedule, and a record is the only way to know.

### 9.3 Design rules for parts that will be annealed

- **Keep the wall thickness as uniform as possible.** A thin wall next to a thick boss heats and cools at a different rate, which causes warping.
- **Use fillets and chamfers instead of sharp internal corners.** Sharp corners concentrate residual stress and are the first place to crack.
- **Avoid large, flat, unsupported spans.** If the part must have one, design a support fixture or use a salt bed.
- **Orient the part so that the largest flat face can be supported.** A part that can lie flat on a ceramic tile is much easier to anneal than one that must stand on a thin edge.
- **Use 100% infill for critical parts.** Sparse infill can collapse or shrink unpredictably during annealing. The trade-off is more material and a longer print, but the dimensional result is more predictable.
- **Add a shrinkage allowance or plan to machine after annealing.** Holes and slots shrink. If the fit is critical, leave material and cut it after the anneal.
- **Avoid mixing materials in one annealed assembly.** A PLA hinge, a TPU gasket and a PC housing have different $T_g$ values and different expansion rates. Anneal the parts separately, then assemble.
- **Do not anneal a part that is already at its tolerance limit.** Annealing changes dimensions. If the part is already at the edge of the tolerance, the anneal will probably push it out.

## 10. Sources

1. [Prusa Research: How to improve your 3D prints with annealing](https://blog.prusa3d.com/how-to-improve-your-3d-prints-with-annealing_31088) reports annealing tests on PLA, PETG, ABS and ASA, including dimensional change, impact strength, tensile strength and heat resistance. It found that PLA warps badly above 70 °C and that ABS and ASA were unsuitable for annealing because the deformation outweighed the gain.
2. [CNC Kitchen: Better performing 3D prints with annealing, Part 1: PLA](https://www.cnckitchen.com/blog/better-performing-3d-prints-with-annealing-but-part-1-pla) documents a 100 °C, 45-minute PLA anneal, a 7.5% tensile gain, a 16% gain on a lying hook, no change in layer adhesion at 42 kg, and dimensional changes of up to 10% on thin parts.
3. [CNC Kitchen: Testing the strength of 3D prints re-melted in salt](https://www.cnckitchen.com/blog/testing-the-strength-of-3d-prints-re-melted-in-salt) describes salt remelting at 180–210 °C, not annealing. It reports near-flat-printed strength for PLA and PETG, a 150% gain in ABS layer adhesion, dimensional changes below 1% with a rigid salt bed, and salt dust that rusts steel.
4. [CNC Kitchen: Annealing 3D prints in Plaster](https://www.cnckitchen.com/blog/annealing-3d-prints-in-plaster) describes plaster casting at 200 °C. It reports PETG tensile strength rising from 30 to 41 MPa, PLA becoming brittle, a need for 36 hours of drying, and a 170 °C heat test on a plaster-supported PLA part.
5. [Polymaker Wiki: Annealing](https://wiki.polymaker.com/printing-tips/post-processing/annealing) gives 80–100 °C for 6–16 hours for nylon, 90 °C for at least 2 hours for PC applied immediately after printing, and a general recommendation to hold amorphous materials just below their glass transition temperature.
6. [Polymaker Wiki: Annealing tips](https://wiki.polymaker.com/printing-tips/post-processing/annealing/annealing-tips) recommends a forced-air oven, warns that kitchen ovens have hot spots and 5–10 °C variation, and describes sand, salt and water-bath support.
7. [Polymaker Fiberon PPS-CF10 technical data sheet](https://fiberon.polymaker.com/wp-content/uploads/TDS_FIBERON-PPS-CF10_V1.1_EN.pdf) specifies 125 °C for 16 hours, a glass transition of 97.7 °C, a melting temperature of 267.5 °C, and an HDT of 252.5 °C at 0.45 MPa after annealing.
8. [Polymaker Fiberon PPS-CF10 product wiki](https://wiki.polymaker.com/polymaker-products/polymaker-filaments/fiberon-tm/fiberon-tm-pps-cf10) repeats the 125 °C, 16-hour recommendation for best layer adhesion and temperature resistance.
9. [Polymaker Fiberon PET-CF17 technical data sheet](https://fiberon.polymaker.com/wp-content/uploads/TDS_FIBERON-PET-CF17_V1.0_EN.pdf) specifies 120 °C for 10 hours, a glass transition of 79.3 °C, a melting temperature of 238.4 °C, and an HDT of 105 °C at 1.8 MPa after annealing.
10. [Bambu Lab PET-CF technical data sheet](https://wiki.bambulab.com/filament-acc/petcf-ppacf/07689de83afd4cc480f136c7697e6de3.pdf) specifies 80–140 °C for 6–12 hours, gives an HDT of 205 °C at 0.45 MPa, and states that a microwave oven or kitchen oven is not compatible with the annealing process.
11. [Bambu Lab PPA-CF technical data sheet](https://wiki.bambulab.com/filament-acc/petcf-ppacf/c07c8b26f3ef44c8a2fcfc3fc11768b0.pdf) specifies 120–140 °C for 6–12 hours, gives an HDT of 227 °C at 0.45 MPa, and warns that toughness can decrease after annealing.
12. [Bambu Lab PPS-CF technical data sheet](https://wiki.bambulab.com/filament-acc/petcf-ppacf/26f4f40359484040a8660c9150a90fc0.pdf) specifies 180–220 °C for 6–12 hours, gives an HDT of 264 °C at 0.45 MPa, and states that a kitchen oven is not compatible.
13. [UltiMaker: How to anneal PET CF parts for better performance](https://ultimaker.com/learn/how-to-anneal-pet-cf-for-better-performance) gives a complete 8-hour ramp, hold and cool schedule, with a 2-hour hold at 120 °C and controlled cooling to 50 °C.
14. [MatterHackers: How to anneal Tough PLA and HTPLA](https://www.matterhackers.com/articles/how-to-anneal-tough-pla-and-htpla) recommends 95–115 °C for 6–10 minutes for Tough PLA and HTPLA, with 100% infill and a sand support bed.
15. [ASTM D648-18: Standard test method for deflection temperature of plastics under flexural load](https://www.astm.org/d0648-18.html) defines the HDT test and states that the data are not intended for design or for predicting endurance at elevated temperatures.
16. [Post-print annealing of FDM-printed polylactic acid: strength, crystallinity and polymorph composition](https://pmc.ncbi.nlm.nih.gov/articles/PMC13259426/) is a 2026 peer-reviewed study of PLA+ annealed at 70–90 °C for 40–80 minutes. It reports crystallinity rising from 8.6% to 41.8%, the best tensile result at 70 °C for 60 minutes, a cooling rate of 0.58 °C/min, and a shift from the $\alpha'$ to the $\alpha$ crystal form at higher temperatures.
17. [Snapmaker U1 product page](https://www.snapmaker.com/snapmaker-u1) describes the four-toolhead CoreXY machine, its 270 × 270 × 270 mm build volume and the optional Top Cover. The 300 °C nozzle, 100 °C bed and 60 °C chamber limits used in this note are the published machine limits.
18. [paxx12 Snapmaker U1 Extended Firmware: Panda Breath](https://snapmakeru1-extended-firmware.pages.dev/panda_breath) documents the 60 °C chamber limit, the need for community firmware such as DragonBreath, the RK3562 throttling at 85 °C, the requirement for full mainboard cooling, and the warranty implications of chamber heating.

## 11. Videos

1. [Strong 3D prints through ANNEALING, but... Part 1: PLA](https://www.youtube.com/watch?v=dOzVuoBP9gY) by CNC Kitchen. It shows the PLA annealing test behind the 7.5% tensile gain, the 42 kg layer-adhesion result and the severe warping of thin parts.
2. [Annealing: How to improve your 3D prints](https://www.youtube.com/watch?v=6YlGjEY7u38) by Prusa 3D. It covers the Prusa annealing tests, the dimensional changes in PLA, PETG, ABS and ASA, and why complex parts are poor candidates.
3. [The STRENGTH of 3D prints REMELTED in SALT](https://www.youtube.com/watch?v=DyAKtS1b3SQ) by CNC Kitchen. It demonstrates salt remelting at 180–210 °C and explains why that process is not the same as annealing.
4. [Triple (x3) your Layer Strength by Annealing 3D Prints in Plaster!](https://www.youtube.com/watch?v=bG8dlxTX3AI) by CNC Kitchen. It shows plaster casting, the need for thorough drying, and the difference between a supported remelt and a true anneal.
5. [PC-Core ABS - WARP-FREE annealing with Ingenious Dual-Material Filament](https://www.youtube.com/watch?v=z3aUGmfnmIg) by CNC Kitchen. It tests a dual-material filament designed to reduce annealing warpage and shows the limits of the approach.
6. [Everyone gets this Wrong when 3D Printing Carbon Fiber Nylon](https://www.youtube.com/watch?v=u8dIpwd6tzo) by CNC Kitchen. It covers moisture, creep, annealing and heat resistance in PA6-CF and PA12-CF.
7. [Annealing Fiberon PPS-CF10 | EDGE OF 3D](https://www.youtube.com/watch?v=Kx286aI1Dz0) by EDGE OF 3D. It explains why PPS-CF is annealed and what the 125 °C schedule does for crystallinity and heat resistance.
8. [Annealing your PET-CF Prints: Take Your Prints to the Next Level](https://www.youtube.com/watch?v=oGsSrOVA3k4) by Siraya Tech Official. It walks through the PET-CF annealing process and the crystallinity change behind the HDT gain.
9. [How To: Anneal Tough PLA and HTPLA](https://www.youtube.com/watch?v=n_bIXgjY-KM) by MatterHackers. It demonstrates the short, high-temperature HTPLA schedule and the sand-support method.
10. [Bake your PLA and have it outperform everything else! #Filaween](https://www.youtube.com/watch?v=CZX8eHC7fws) by Made with Layers (Thomas Sanladerer). It is an early, independent look at PLA annealing, dimensional change and strength.
11. [Review of Fiberon PET-CF17, a great technical filament by Polymaker](https://www.youtube.com/watch?v=_yHECdbbCfs) by My Tech Fun. It tests PET-CF17 strength and heat resistance, including the effect of annealing.
12. [BambuLab PET-CF filament review. But how does it compare to PPA-CF?](https://www.youtube.com/watch?v=H_3SPwlUv5Y) by My Tech Fun. It compares two high-temperature composites and shows why the matrix, not just the fibre, sets the annealing response.
13. [Annealing Nylon Prints To Solve Creep Issues | Does It Work?](https://www.youtube.com/watch?v=xPUcTm-tujo) by Hoffman Tactical. It tests whether annealing actually reduces creep in printed nylon parts.
14. [Annealing Amorphous Materials](https://www.youtube.com/watch?v=QuchYksmGfA) by Polymaker Lab. It explains why PC, ABS, ASA and PETG gain stress relief rather than crystallinity.

---

**Related notes:** [[00 - Filament Master Index]] | [[01 - Drying Filament]] | [[02 - Storing Filament]] | [[03 - Combining Storing and Drying - Science and Rational Approach]] | [[06 - Heating and Temperatures - Nozzle, Bed, and Chamber]] | [[09 - Post-Processing - Matte, Shiny, and Surface Finishing]] | [[10 - Common Printing Issues, Debugging, and Physical Limits]] | [[01 - PLA (Polylactic Acid - Standard, High-Speed, and Tough PLA+)]] | [[05 - PETG (Polyethylene Terephthalate Glycol-Modified)]] | [[06 - PCTG (Polycyclohexylenedimethylene Terephthalate Glycol-Modified)]] | [[07 - ABS (Acrylonitrile Butadiene Styrene)]] | [[08 - ASA (Acrylonitrile Styrene Acrylate)]] | [[09 - TPU and TPE (Thermoplastic Polyurethane and Thermoplastic Elastomer - 95A, 85A, High-Speed TPU, Foaming LW-TPU)]] | [[10 - PA (Polyamide - Nylon 6, Nylon 12, and Nylon 6-66 Copolymers)]] | [[11 - PC (Polycarbonate and PC-ABS, PC-PBT Engineering Alloys)]] | [[12 - Carbon Fiber and Glass Fiber Reinforced Composites (PLA-CF, PETG-CF, ABS-GF, ASA-CF, PA-CF, PAHT-CF, PC-CF)]] | [[13 - PET (Polyethylene Terephthalate - Unmodified Crystalline PET and PET-CF)]] | [[14 - PPA (Polyphthalamide - High-Performance High-Temp Nylon PPA-CF and PPA-GF)]] | [[15 - PPS (Polyphenylene Sulfide - PPS and PPS-CF)]] | [[16 - Glass-Like and Optically Transparent Filaments (PMMA Polymethyl Methacrylate, Clear PC, Transparent PETG, Transparent PCTG)]] | [[23 - PP and POM Low-Friction Polyolefins and Acetals (Polypropylene, Olefin Block Copolymer OBC, and Polyoxymethylene Acetal Delrin)]] | [[24 - Fluoropolymers, Ultra-Polymers, and Specialty Functional Filaments (PVDF Polyvinylidene Fluoride, PEEK Polyether Ether Ketone, PEI Polyetherimide Ultem, PCL Polycaprolactone, and Nylon Purge Cleaning Filament)]] | [[12 - Skin Contact and Body-Safe Printing]] | [[13 - Food Contact and Food-Safe Printing]]
