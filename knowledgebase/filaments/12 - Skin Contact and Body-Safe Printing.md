---
title: "12 - Skin Contact and Body-Safe Printing"
tags:
  - 3d-printing
  - filaments
  - skin-contact
  - body-safe
  - biocompatibility
  - wearables
  - nickel-allergy
  - acrylate-allergy
  - porosity
  - medical-adjacent
  - snapmaker-u1
  - safety
---

| Scope | Key numbers | What it is good for | Additional notes |
| :--- | :--- | :--- | :--- |
| Material safety versus part safety | A filament certificate covers a grade of resin; a part is judged as a whole device | Understanding why a safe polymer can still make an unsafe part | No desktop FDM print is certified biocompatible. ISO 10993 is applied to a finished device in a defined contact category, not to a spool. |
| Contact duration | Limited contact up to 24 hours; prolonged contact from 24 hours to 30 days; long-term contact beyond 30 days | Deciding how much care a part deserves | A watch band worn every day is prolonged contact. A cosplay earring worn for an evening is limited contact. |
| Lowest-risk polymers | PLA, PETG, PCTG, PP, PEBA and TPU with declared colourants | Short-wear jewellery, decorative parts and trial-fit pieces | Chemistry is only half of the answer. Porosity, pigments and cleaning decide the rest. |
| Polymers to avoid against skin | ABS, ASA, POM, damp PA, PC with residual bisphenol A, unknown composites | Nothing that touches skin for hours at a time | Styrene, formaldehyde, caprolactam and residual monomers are the main concerns. |
| Porosity | Layer valleys of roughly 0.1 to 0.3 mm; both PLA and PETG support *Staphylococcus aureus* biofilm | Understanding why washing does not sterilise a print | Smoothing reduces the problem. It does not produce a sterile or cleanable surface. |
| Pigments | Lead chromate and cadmium pigments still appear in low-cost filament | Choosing a colour for a body-contact part | Buy named colours from established brands, and avoid glitter, metallic, glow and wood additives for skin contact. |
| Nickel | 0.5 µg/cm² per week for prolonged skin contact; 0.2 µg/cm² per week for posts in pierced ears | Earrings, watch hardware, glasses frames and metal inserts | Nickel is the most common contact allergen worldwide. Roughly 8 to 19 percent of European adults are sensitised. |
| Acrylates | Uncured SLA resin; HEMA, HPMA and related methacrylates | Understanding resin-printer risk and coating risk | Acrylates are potent sensitisers. FDM filament is not resin, but adhesives, UV coatings and some paints contain acrylates. |
| Barrier coatings | Platinum-cure silicone at roughly 0.3 to 1 mm, fully cured before wear | Sealing a porous part that must stay against skin for hours | Epoxy and polyurethane hardeners are sensitisers, and a cracked coating is worse than no coating. |
| Snapmaker U1 workflow | 300 °C maximum nozzle, 100 °C maximum bed, 60 °C maximum chamber, four toolheads | Planning a body-contact print on this machine | Printing does not sterilise anything. Use a clean hotend and plate, purge colour changes, and keep adhesives off the contact face. |

> [!abstract] Overview
> "Skin-safe" is not a property that a filament has. It is a judgement about a finished object, a particular person and a particular kind of contact. A polymer can be chemically benign in bulk and still cause dermatitis because of a residual monomer, a heavy-metal pigment, a sensitiser in a coating, a rough surface that traps sweat, or a colony of bacteria living in the gaps between layers. The material and the part are two different questions, and almost every mistake in this area comes from answering only the first one.
>
> This note is written for someone printing watch bands, glasses, earrings, mask frames, orthotics and other objects that sit against skin. It separates the four things that are often mixed together: irritation, allergic contact dermatitis, cytotoxicity and infection. It explains what the relevant standards actually test, why a "biocompatible" resin certificate does not travel to a printed part, and where the real risks sit for each application. It also gives the honest limits. A desktop FDM printer is a good tool for a custom-fit mask frame or a decorative earring. It is not a medical manufacturing system, and no amount of careful processing changes that.
>
> The practical conclusion is not that printing for skin contact is impossible. It is that the material choice is the easy part. The hard parts are pigment selection, surface finish, coating integrity, metal hardware, cleaning and honest expectations about how long a porous plastic can stay hygienic.

## 1. What "Skin-Safe" Actually Means

The phrase is used in at least four different ways, and they are not interchangeable.

**Irritation** is damage to skin caused directly by a substance or by friction, heat or moisture. It is not an immune response, it can happen to anybody, and it usually settles once the cause is removed. A rough print edge rubbing a wrist is an irritant problem. So is a mask frame that traps sweat under pressure for eight hours.

**Allergic contact dermatitis** is an immune reaction that develops after repeated exposure. The first exposures may cause nothing. At some point the immune system becomes sensitised, and after that even a tiny exposure can produce redness, swelling, itching, vesicles and cracking. Nickel and acrylates are the two classic examples in this field. Sensitisation is usually lifelong.

**Cytotoxicity** is toxicity to cells. It is measured in a laboratory by exposing cultured cells to an extract of a material and looking for cell death or reduced growth. It is a useful screening test and it is one component of biocompatibility, but a material can be non-cytotoxic in a short test and still cause dermatitis in a person who is sensitised to one of its additives.

**Infection risk** is a separate axis entirely. It depends on whether micro-organisms can survive and multiply on the object, whether the object can be cleaned, and whether the wearer's skin is intact. A chemically inert print with deep layer gaps is a good place for bacteria to live and a poor place for skin to recover.

There is also a distinction between **local** and **systemic** effects. Most skin-contact concerns are local: dermatitis at the site of contact. Systemic absorption of a pigment or plasticiser through intact skin is generally small, but it is not zero, and it matters much more when the skin is broken, when the contact area is large, or when the wearer is a small child.

Finally, **skin is not a uniform barrier**. The face, neck and inner wrist are thinner and more permeable than the palm. Skin that is wet, occluded under a band, or abraded by friction absorbs more. Small molecules, roughly below 500 daltons, cross the outer layer more readily than large ones. Sweat, heat and occlusion all increase penetration. This is why the same object can be fine on a wrist for an hour and a problem under a mask frame for a day.

## 2. Material Safety Is Not Part Safety

A filament manufacturer can tell you what is in the resin. It cannot tell you what is in your part.

The chain from pellet to skin has several steps, and each one can add something:

- **The resin** contains the base polymer, its residual monomers and oligomers, polymerisation catalysts and stabilisers. This is the part a material datasheet describes.
- **The colourant and additives** include masterbatch pigments, dyes, lubricants, nucleating agents, impact modifiers, flame retardants and antimicrobial packages. These are often proprietary and rarely disclosed in full.
- **The printing process** adds hotend wear, contamination from previous filament, dust and the thermal history of the polymer. A brass nozzle that has worn can deposit copper, zinc and lead into the melt stream.
- **The surface** has a layer geometry, a roughness and micro-voids that can trap debris.
- **Post-processing** adds sanding dust, solvents, primers, adhesives and coatings.
- **Use** adds sweat, sebum, friction, heat, cleaning agents and time.

A certificate for a filament usually covers the first item, sometimes the second, and essentially never the rest. The phrase on the box might be "ISO 10993 tested", "biocompatible", "food grade" or "skin safe". Those phrases are not equivalent, and none of them certifies the object you printed.

The correct mental model is that biocompatibility is a property of a **finished device in a defined use**, not of a plastic. ISO 10993-1 makes this explicit: the tests required depend on what tissue the device contacts and for how long. A material that is appropriate for intact skin for an hour is not automatically appropriate for a wound, a mucous membrane or a thirty-day implant.

## 3. The Five Failure Paths in a Printed Part

When a printed object causes a skin reaction, the cause is usually one of five things. Working through them in order is faster than guessing.

### 3.1 Residual chemistry

Every polymer contains some unreacted material. Polylactic acid can retain lactide and low-molecular-weight oligomers. PETG can retain acetaldehyde and antimony catalyst residues. ABS can retain styrene and acrylonitrile, and ASA can retain styrene and acrylate monomers. Polyamide can retain caprolactam. Polyoxymethylene can release formaldehyde when it is overheated. Thermoplastic polyurethane can retain traces of isocyanate if the polymerisation was incomplete. None of these are present in large amounts in a well-made filament, but "well-made" is doing a lot of work in that sentence, and cheap filament is not always well made.

### 3.2 Additives and pigments

This is the most underrated path. A pigment is not a cosmetic detail; it is a chemical with its own toxicology. Lead chromate pigments are still used in some low-cost yellow and red masterbatches. Cadmium pigments appear in cheap orange and red. Cobalt, chromium and copper compounds are used in blues and greens. Some of these are bound tightly in the polymer matrix and some are not, especially at the surface of a worn part.

Additives bring their own issues. Impact modifiers can contain residual styrene or acrylate monomers. Flame retardants can contain halogenated compounds. Antimicrobial additives, usually silver or zinc based, are designed to leach slowly at the surface, which is exactly what you do not want against broken skin without evidence.

### 3.3 Porosity and layer geometry

FDM builds an object from stacked beads. The bonds between beads are partial, and the surface is a series of valleys roughly the depth of a layer height plus the roughness of the extruded strand. Even at high infill, the interior contains voids. The surface is therefore both rough and penetrable.

This matters for skin in two ways. Friction against a rough surface causes mechanical irritation. And the valleys hold moisture, sebum, soap residue and micro-organisms where a cloth cannot reach. Studies of printed PLA and PETG show that both support *Staphylococcus aureus* biofilm, with PLA tending to show higher early adhesion and denser biofilm in static tests. Printing does not make a part hygienic.

### 3.4 Surface finish and fit

A sharp edge, a support scar, a Z-seam or a stray blob will rub. On a wrist or behind an ear, a fraction of a millimetre is enough to produce a red line over a day. Fit matters as much as finish: a band that is slightly too tight creates pressure, occlusion and heat, and pressure plus moisture is the setup for both irritation and infection.

### 3.5 Contamination after printing

The printer is a workshop tool. The spool has been handled, the feeder gears are exposed, the build plate carries adhesive residue, and the finished part is handled during support removal and fitting. Printing at 200 to 300 °C does not sterilise the filament, the path or the part. A part that leaves the printer is clean-looking, not clean.

## 4. Materials for Skin Contact

The table below is a starting point for intact skin. It is not a ranking of "safe" and "unsafe", because a well-processed part in a mid-ranking polymer can be better than a badly processed part in a top-ranking one.

| Material | Typical suitability for intact skin | Main risk | Coating or barrier | Notes for the U1 |
| :--- | :--- | :--- | :--- | :--- |
| PLA | Good for short and occasional contact; the most common decorative material | Softens at 55 to 60 °C, so it deforms in a hot car and can soften under a hot band; brittle, so edges chip | Usually unnecessary for short contact; a silicone barrier helps for long wear | Prints easily on the stock stainless hotend at 200 to 220 °C. |
| PLA+ and impact-modified PLA | Similar to PLA, but the additive package is usually undisclosed | Unknown impact modifier; slightly lower stiffness; the same low heat limit | As for PLA | Treat the modifier as an unknown until the manufacturer names it. |
| PETG | Good; widely used for wearable prototypes and orthotic shells | Antimony catalyst residues; strings and blobs create rough contact points; scratches hold moisture | Silicone or a smooth finish for prolonged contact | Prints at 230 to 250 °C; dry it, because moisture causes bubbles and rough surfaces. |
| PCTG | Good; tougher and more heat resistant than PETG | Fewer known sensitisers than styrenics, but pigment risk remains | Useful where a PETG part would creep or deform | Prints at 250 to 270 °C; good choice for a mask frame or a band buckle. |
| TPU and TPE | Good for flexible contact surfaces when the grade is plasticiser-free | Residual isocyanate in some grades; soft grades trap sweat and dirt; creep under load | Often used as the contact layer itself; a textile or silicone liner helps | Dry thoroughly and print slowly. Shore 95A is the practical starting point. |
| PP | Very good chemical resistance and low water uptake | Difficult to print; low surface energy; poor layer adhesion; pigmentation still matters | Not usually needed | Warps badly without a chamber; the U1 can print it but fit and finish are harder. |
| PEBA | Good; used in footwear and flexible medical tubing | Few FDM grades; hygroscopic; limited long-term skin data as a printed material | Usually unnecessary | Rare in filament form. Treat any spool as a specialty material and dry it aggressively. |
| PA (nylon) | Fair to good for dry, short contact; poor for wet or occluded contact | Absorbs water and stays damp; caprolactam residue; softens and creeps when wet | A barrier is advisable for prolonged contact | Very hygroscopic. Print from a dryer and anneal only if the geometry allows. |
| PC | Fair; rigid and heat resistant, but not a first choice for skin | Residual bisphenol A; scratches; brittle edges | A barrier is advisable for prolonged contact | Requires a hot chamber and good drying. |
| ABS and ASA | Poor for prolonged skin contact | Styrene and acrylonitrile residues; strong smell; irritation and sensitisation potential | Avoid, or seal fully and accept that the seal can fail | Print with filtration and a chamber, not in a living space. |
| PMMA | Fair; cast PMMA is well tolerated in dentistry, but printed PMMA is not the same material | Residual methyl methacrylate monomer is a sensitiser; brittle | A barrier helps for prolonged contact | Rare as FDM filament; more common in resin form. |
| PVDF | Good chemically; very inert | Processing fumes; expensive; few skin-contact data for printed parts | Usually unnecessary | High temperatures and good ventilation. Overheating a fluoropolymer can release hydrogen fluoride, which is a separate and more serious hazard. |
| PCL | Fair for splints and temporary supports | Melts around 60 °C, so it deforms in a warm car or against a hot surface; softens and creeps under load | A fabric liner is sensible | Low melting point makes it easy to shape, and easy to ruin. |
| Silicone-like TPE | Variable; depends entirely on the grade | It is not silicone; it may contain mineral oil or plasticiser; "silicone-like" is marketing | Use a real platinum-cure silicone if the contact is prolonged | Printability varies from easy to impossible; test a small part first. |
| Composite and metal-filled filament | Poor for skin contact | Carbon and glass fibres are skin irritants; metal powders can release nickel, copper or iron; glow powders are abrasive | Avoid for skin contact | Abrasive fillers also wear the hotend faster. |

Three general rules follow from the table.

First, **the softer and more flexible the material, the more it behaves like a gasket**. It conforms to skin, traps moisture and heat, and holds debris. That is good for comfort and bad for hygiene. A rigid part with a smooth contact face is often easier to keep clean than a soft one.

Second, **heat resistance is a skin-safety issue, not just a printing issue**. Body surface temperature is around 32 to 35 °C, and under occlusion it can approach 37 °C. A dark car interior can exceed 60 °C. PLA and PCL both soften in that range, and a band that deforms under tension will create a pressure point.

Third, **the pigment is part of the material**. A natural or clearly declared colour from an established brand is a better bet than an unnamed fluorescent or metallic colour from a marketplace listing. This is not snobbery; it is the only practical way to reduce heavy-metal risk.

## 5. The Specific Hazards

### 5.1 Residual monomers and oligomers

Residual monomers are the unreacted building blocks left after polymerisation. They are usually present at parts-per-million to parts-per-thousand levels. The ones that matter most for skin are small, mobile molecules that can migrate to the surface and partition into sweat.

- **Styrene** from ABS and ASA is a known irritant and a possible sensitiser. It also gives those materials their distinctive smell, which is a useful warning that volatile organic compounds are present.
- **Acrylonitrile** from ABS is an irritant and a suspected human carcinogen, although residual levels in commercial resin are low.
- **Caprolactam** from nylon is an irritant and gives nylon its characteristic odour when wet.
- **Lactide and oligomers** from PLA are generally low-risk, which is one reason PLA has a good record for incidental contact.
- **Bisphenol A** can remain in polycarbonate and in some epoxy resins. It is a suspected endocrine disruptor and a contact irritant.

Residual chemistry is one reason to prefer established filament brands with published safety data over the cheapest spool. It is also a reason to ventilate the printing space, although that is a respiratory issue rather than a skin one.

### 5.2 Acrylates and photoinitiators

Acrylates and methacrylates are the most important sensitisers in the whole additive-manufacturing field. They are the reactive monomers in SLA and DLP resins, in UV-curable coatings, in some adhesives and in artificial nail products. HEMA (2-hydroxyethyl methacrylate) and HPMA (2-hydroxypropyl methacrylate) are common patch-test markers, and isobornyl acrylate has been identified as the primary allergen in many cases of dermatitis from continuous glucose monitors.

Liquid resins also contain photoinitiators, such as TPO or BAPO, which absorb the curing wavelength and start the reaction. These are sensitisers in their own right, and they can remain at the surface of a print that was not fully post-cured. This is one reason why a tacky resin print is a hazard rather than a cosmetic nuisance.

The clinically important point is that acrylate allergy is **life-long and cross-reactive**. A person sensitised by nail products or a resin printer can later react to dental materials, bone cement, hearing-aid shells and some adhesives. Once sensitised, the avoidance list is long.

FDM filament is not liquid resin, and a PLA or PETG print does not contain HEMA. But acrylates can still appear in the workflow:

- UV-curable resins are sometimes used to smooth or coat an FDM part.
- Cyanoacrylate adhesives are used to join printed pieces.
- Some primers, clear coats and two-part paints contain acrylates.
- Resin-printed parts can carry acrylates if they were not fully washed and post-cured.

Uncured or partly cured resin is the hazard. Fully cured resin is much less reactive, but "fully cured" is a process claim that requires the correct wavelength, intensity, time and post-cure temperature. A tacky surface, a strong smell or a soft film means the cure is incomplete.

### 5.3 Plasticisers and other additives

Phthalate plasticisers are mainly a concern in flexible PVC, which is not a normal FDM material. They can appear in cheap flexible compounds and in some coatings. DEHP and related phthalates are restricted in many consumer applications, and the precautionary approach is to avoid unnamed soft filaments for prolonged skin contact.

Other additives deserve a mention. Mineral oil is used in some soft TPE compounds and can migrate. Slip agents such as erucamide bloom to the surface, which is why some prints feel greasy. Antioxidants and UV stabilisers are usually bound in the polymer but can migrate slowly. None of these are automatically dangerous, but none of them are disclosed on a typical spool label either.

### 5.4 Heavy-metal pigments

Colour is the least regulated part of the filament supply chain. Lead chromate, cadmium sulphide and cadmium selenide pigments have been used in plastics for decades because they are stable, bright and cheap. They are restricted in many jurisdictions, particularly in toys and articles for children, but enforcement is uneven and online marketplaces are full of filament with no meaningful pigment disclosure.

The risk is highest when the pigment is at the surface of a worn part, when the part is used in a hot and sweaty environment, and when the wearer is a child. It is lower for a decorative object that is handled briefly. The practical controls are simple: buy from brands that name their colourants, avoid bright yellows, oranges and reds from unknown sources, and avoid metallic and glitter compounds for anything that touches skin.

### 5.5 Nickel and other metals

Nickel is the most frequent cause of contact allergy worldwide. The European general population prevalence is approximately 8 to 19 percent in adults and 8 to 10 percent in children and adolescents, with a strong female predominance. Once sensitised, a person can react to watch backs, earring posts, glasses frames, belt buckles, coins and the metal inserts in a printed part.

The EU restriction sets a nickel release limit of 0.5 µg/cm² per week for articles intended to come into direct and prolonged contact with skin, and 0.2 µg/cm² per week for posts inserted into pierced ears and other pierced body parts. The test methods are EN 1811 for release and EN 12472 for simulated wear. These limits apply to the finished article, not to the raw metal.

The materials picture is more complicated than the marketing suggests.

- **Titanium** in Grade 1, Grade 2 or Grade 23 is the usual low-risk choice for earring posts, clasp pins and inserts. Implant-grade titanium contains no intentional nickel and is well tolerated.
- **Niobium** is soft, available in small gauges and is a good alternative for pierced ears.
- **316L stainless steel** contains roughly 10 to 14 percent nickel. It releases less nickel than 304 or cheap plated alloys, but it is not nickel-free, and scratched or worn 316L can release more.
- **"Surgical steel"** is a marketing term, not a standard. It tells you nothing about nickel release.
- **Nickel silver** contains copper, zinc and nickel, and no silver at all. It is common in cheap jewellery findings.
- **Plated zinc alloy** is the typical material behind a shiny, inexpensive earring post. The plating wears through, and the alloy underneath is often high in nickel.
- **Sterling silver** contains copper, which can itself cause reactions, and it scratches and wears relatively easily.

A dimethylglyoxime (DMG) spot test is a cheap screening tool. It turns pink in the presence of releasable nickel. It is not a substitute for EN 1811, but it will quickly identify the worst offenders in a box of findings.

### 5.6 Formaldehyde from POM

Polyoxymethylene, also called acetal or Delrin, is an engineering plastic with excellent dimensional stability and low friction. It is also thermally unstable at the top of its processing range and can depolymerise to formaldehyde. Formaldehyde is a strong irritant, a sensitiser and a known human carcinogen.

The risk in normal printing is mainly respiratory, from fumes at the nozzle, and it is a reason to print POM with ventilation and filtration. The skin-contact risk is more subtle: a part that was overheated during printing, or that is used in a hot environment, can continue to release formaldehyde from its surface. POM is therefore a poor choice for a body-contact part regardless of how well it is printed.

### 5.7 Isocyanates in TPU and coatings

Isocyanates are the reactive component in polyurethane chemistry. Fully reacted TPU is a stable polymer, and most printed TPU is not a meaningful isocyanate source. The risk rises in three situations: poorly polymerised TPU with residual monomer, two-part polyurethane coatings that are not fully cured, and polyurethane adhesives used to bond a liner to a printed shell.

Isocyanate sensitisation is serious. It can cause occupational asthma, and once sensitised a person may react to very low concentrations. Dermatitis from isocyanate is also well documented. Two-part polyurethane products should be mixed, applied and cured according to the manufacturer's instructions, with gloves and ventilation, and they should not be used as a skin-contact coating unless the cured film is explicitly intended for that use.

### 5.8 Carbon fibre and glass fibre

Carbon fibre and glass fibre composites are excellent for stiffness. They are poor for skin contact. The fibres are typically 5 to 10 µm in diameter, which is small enough to penetrate skin and large enough to resist breakdown. A broken or sanded composite part releases fibre fragments that lodge in the skin, cause irritation and can produce granulomas. The problem is worse at cut edges, at support scars and anywhere the part has been abraded.

If a composite part must be used near skin, seal the surface and all cut edges with a compliant coating, wet sand rather than dry sand, and never wipe the part with a bare hand or a dry cloth. The same logic applies to glass-filled materials and to some mineral-filled filaments.

### 5.9 Antimicrobial additives

Filaments marketed as antimicrobial usually contain silver ions, silver zeolite, zinc compounds or, less commonly, organic biocides. The claim is that the surface inhibits bacterial growth. The reality is more limited. The additive must be present at the surface to work, it leaches over time, and it does nothing about the layer gaps where bacteria actually accumulate. An antimicrobial print is not a substitute for cleaning, and it is not a reason to use a porous part for a wound or a baby.

There is also a regulatory dimension. Claims such as "kills 99.9 percent of bacteria" are treated as biocidal claims in many jurisdictions and require evidence. A filament spool is not the place to look for that evidence.

### 5.10 Micro-organisms

The final hazard is the one that has nothing to do with polymer chemistry. A worn part is warm, damp and covered in skin flora. If it has crevices, it will develop a biofilm that is difficult to remove and can cause odour, irritation and, on broken skin, infection.

Printed PLA and PETG both support *S. aureus* biofilm. Under flow conditions, biofilm burden increases compared with static conditions, which is a laboratory way of saying that a sweaty, moving watch band is a better incubator than a dry shelf. Smooth surfaces, drainage, breathability and regular cleaning are the defences. Sterility is not achievable at home, and a part that has been next to broken skin should be treated as contaminated and replaced rather than scrubbed.

## 6. Standards, Certificates and What They Do Not Cover

### 6.1 ISO 10993

ISO 10993 is the international framework for biological evaluation of medical devices. It is a risk-management process, not a single pass or fail test, and it is applied to a finished device with a defined contact category.

- **ISO 10993-1** defines the evaluation and testing strategy. It classifies devices by the nature of body contact (surface, externally communicating, implant) and by duration: limited contact up to 24 hours, prolonged contact from 24 hours to 30 days, and long-term contact beyond 30 days. For a watch band or a mask frame, the relevant category is surface contact with intact skin, and the duration depends on how the object is worn.
- **ISO 10993-5** is the in vitro cytotoxicity test. Cells are cultured in contact with an extract of the material, and the test looks for cell death, reduced viability or growth inhibition. It is a sensitive general screen for leachable toxicants.
- **ISO 10993-10** covers skin sensitisation. The 2021 edition deals with sensitisation only; irritation was moved to **ISO 10993-23** in the same revision. The older 2010 edition covered both, which is why older certificates often cite "-10" for irritation and sensitisation together.
- **ISO 10993-12** defines how the extract is prepared, including the surface-area-to-volume ratio, the extraction solvent and the temperature. The result depends heavily on those choices.

What these standards do is provide a structured way to ask whether a material releases something that harms cells, irritates skin or sensitises an immune system. What they do not do is certify a printed part. The tests are run on extracts and standardised specimens, in a laboratory, under a specified protocol. They do not account for layer gaps, surface roughness, cleaning, wear, or the interaction between a porous plastic and a wearer's sweat.

A device can pass cytotoxicity and still be a bad watch band, because the test says nothing about whether bacteria can live in the layer lines.

### 6.2 The EU nickel restriction

The REACH restriction on nickel release is the closest thing to a directly applicable skin-contact rule for printed wearables, because it applies to the finished article and to metal parts that touch skin. The limits are 0.5 µg/cm² per week for prolonged skin contact and 0.2 µg/cm² per week for pierced-ear posts. It covers watch hardware, earring findings, glasses frames and metal inserts.

It does not cover the plastic. There is no equivalent release limit for pigments or residual monomers in a printed polymer intended for skin contact.

### 6.3 OEKO-TEX Standard 100

OEKO-TEX Standard 100 is a certification for textiles and textile accessories. It tests for more than 1,000 harmful substances and divides products into classes based on the intensity of skin contact, with the strictest class for articles for babies and children under three. It also has an optional route for items such as orthopaedic aids and prams.

It is a useful model of what a real skin-contact certificate looks like: a defined scope, a defined list of substances, a defined test method and a class that reflects contact intensity. It is not a 3D-printing standard, and a printed plastic part cannot be certified to it in the ordinary way. A filament sold with an OEKO-TEX claim is making a claim about a textile-related material, not about your print.

### 6.4 Food-contact rules are not skin-contact rules

The FDA's food-contact framework under 21 CFR 174 to 178, and the EU framework under Regulation (EC) No 10/2011, regulate substances that migrate into food. They are concerned with ingestion, not with dermal sensitisation. A material can be suitable for food contact and still be a poor choice against skin, and the reverse is also true.

This matters because "food safe" is the most common proxy people use for "skin safe". It is not a valid proxy. A food-contact certificate tells you something about migration into a food simulant under specified conditions. It tells you nothing about nickel release, acrylate sensitisation, or bacterial colonisation of a porous surface.

### 6.5 Terms that do not mean what they appear to mean

- **"Medical-grade"** is not a regulated term for filament. It may mean the supplier has a quality system, or it may mean nothing.
- **"Biocompatible"** on a spool is a claim, not a certification. Ask which standard, which test, which contact category and which laboratory.
- **"Hypoallergenic"** is not defined for plastics or metals. For jewellery it usually means "we hope so".
- **"BPA-free"** addresses one substance and ignores the rest of the formulation.
- **"Antimicrobial"** is a biocidal claim that needs evidence and does not replace cleaning.
- **"Food grade"** is about food contact, not skin.
- **UL 94** is a flammability rating. It has nothing to do with skin safety.
- **RoHS** restricts substances in electrical and electronic equipment. It is not a skin-contact standard.

## 7. Porosity, Biofilm and Cleaning

A printed surface is not smooth at the scale that matters to a micro-organism. The extrusion lines create grooves, the layer boundaries create ledges, and the surface skin often has small pits and voids. The groove depth is on the order of the layer height, so a 0.2 mm layer leaves valleys that are roughly 0.2 mm deep, plus the roughness of the strand itself.

Those valleys do three things. They reduce the real contact area between skin and plastic, which increases pressure at the high points. They hold sweat and sebum. And they shelter bacteria from the mechanical action of washing.

Biofilm is the relevant form of microbial life here. Bacteria attach to a surface, secrete a matrix of polysaccharides and proteins, and become much more tolerant of disinfectants than free-floating cells. Once a biofilm is established in a layer gap, a wipe with alcohol will reduce it but will not remove it. The part may look clean and still be a reservoir.

This is why smoothing helps but does not solve the problem. A smoothed surface has fewer niches, dries faster and is easier to wipe. It is still not sterile, and a smoothed part with a scratch or a crack is back to being porous in the places that matter.

Cleaning a wearable should follow a fixed routine:

1. **Rinse immediately after wear**, before sweat dries. Lukewarm water is enough. Do not use hot water on PLA, PETG or PCTG.
2. **Wash with mild soap and a soft brush**, working along the layer lines rather than across them. A soft toothbrush is useful for narrow channels.
3. **Rinse thoroughly.** Soap residue is itself an irritant.
4. **Shake off excess water and air dry completely** before storing. A damp part in a closed box grows biofilm faster than a dry one.
5. **Use isopropyl alcohol only on non-porous or coated surfaces**, and let it evaporate fully. Alcohol is a disinfectant, not a sterilant, and it does not penetrate biofilm reliably.
6. **Inspect for cracks, fuzzing, discolouration and odour.** Any of these means the part should be retired.

What not to do:

- Do not put PLA or PETG in a dishwasher. The cycle temperature exceeds their glass transition, and the part will warp.
- Do not boil a printed part. Boiling water will deform PLA, PETG and PCTG.
- Do not rely on UV-C. It penetrates poorly, degrades many polymers and does not clean crevices.
- Do not share a body-contact print between people. It is a personal item, like a toothbrush.
- Do not use a part that has been against broken skin without treating it as contaminated. Replacement is usually cheaper than decontamination.

## 8. Coatings, Smoothing and Sealing

A coating can turn a porous surface into a cleanable one, but only if it is the right coating, applied correctly, and intact. The wrong coating adds a sensitiser and a failure mode.

### 8.1 Platinum-cure silicone

Platinum-cure silicone is the best general-purpose barrier for skin contact. It is flexible, thermally stable, chemically inert once cured and available in skin-safe grades. Smooth-On Dragon Skin, for example, is a platinum-cure silicone marketed as certified skin safe and used for prosthetic and special-effects work.

The practical issues are adhesion and thickness. Silicone does not bond well to PLA or PETG without a primer or a mechanical key, so the printed surface should be roughened and cleaned first. A thickness of roughly 0.3 to 1 mm gives a durable film without making the part bulky. The silicone must be mixed at the correct ratio, degassed if possible, and fully cured before it touches skin. A tacky silicone surface is uncured silicone, and uncured silicone can contain reactive components and catalyst residues.

Do not substitute a hardware-store silicone sealant. Acetoxy-cure sealants release acetic acid, often contain fungicides, and are not formulated for skin contact.

### 8.2 Epoxy

Epoxy is hard, glossy and easy to apply, which makes it popular for smoothing prints. It is also a common cause of allergic contact dermatitis. Amine hardeners are sensitisers, and once a person is sensitised, reactions can be severe and long-lasting.

A fully cured epoxy is much less reactive than the mixed resin, but "fully cured" means the correct ratio, the correct temperature and enough time. Many epoxies are also brittle, and a brittle coating on a flexible part will crack. A cracked coating is worse than an uncoated porous surface because it hides contamination and creates a new crevice.

If epoxy is used at all, it should be on a rigid part, away from flexing areas, and it should be allowed to cure for longer than the label suggests before contact with skin.

### 8.3 Polyurethane and acrylic coatings

Two-part polyurethanes can be durable and flexible, but they bring isocyanate risk during application and require a full cure. Acrylic clear coats are usually solvent-borne and are not intended for prolonged skin contact. UV-curable acrylate coatings carry the acrylate sensitiser risk described earlier.

The general rule is that a coating intended for skin contact should say so, on the product, with a standard and a contact category. A coating intended for furniture, cars or floors should not be used on a wearable.

### 8.4 Solvent smoothing and residue

Solvent smoothing improves surface finish and reduces the number of niches, but it leaves residue.

- **Acetone** works on ABS and ASA. It is highly flammable, and it is a respiratory and skin irritant. After smoothing, the part should be ventilated for at least 24 hours, and longer for a thick or hollow part.
- **Isopropyl alcohol** works on PVB and is a mild irritant. It evaporates quickly, but it should still be allowed to dry fully.
- **D-Limonene** works on HIPS. It is a skin sensitiser, and it oxidises in air to hydroperoxides that are more sensitising than the original terpene. Parts smoothed with limonene need a long purge, and the process is a poor choice for anything worn against skin.

Solvent smoothing also changes the surface chemistry. A smoothed ABS part still contains styrene, and the solvent may draw residual monomer to the surface. Smoothing is a cosmetic and hygienic improvement, not a detoxification step.

### 8.5 Mechanical finishing

Wet sanding is the default. It suppresses dust and prevents friction melting. Progress from 220 to 400 to 600 grit for a comfortable satin surface, and go finer only if the application needs it. Work under running water with a drop of dish soap, and rinse the part thoroughly afterwards.

Dry sanding produces respirable plastic dust, and composite dust is worse. If dry sanding is unavoidable, use an N95 or P2 respirator, eye protection and extraction. Do not use compressed air to clean a part; it drives dust into the air and into the layer gaps.

## 9. Wearables and Medical-Adjacent Uses

### 9.1 Watch bands

A watch band is prolonged contact under occlusion, with friction and sweat. The band material matters, but the hardware matters more. The lugs, clasp, pins and buckle are usually metal, and cheap plated hardware is a common nickel source.

For the band itself, TPU, PETG, PCTG and PP are reasonable. PLA is a poor choice because it softens in a hot car and against a warm wrist, and because it is brittle at the buckle holes. Print the band flat so that its length lies in the XY plane. The bending load then runs in-plane, where the material is strongest, instead of peeling the layers apart. A band printed upright will delaminate at the buckle.

Clean the band after every wear, especially in summer. A band that smells musty is holding biofilm and should be replaced. If the clasp or lugs are unknown metal, replace them with titanium or 316L hardware, or coat them and accept that the coating will wear.

### 9.2 Glasses and sunglasses

Nose pads and temple tips touch skin for hours. The printed frame itself is usually fine in PETG, PCTG or a flexible TPE. The metal hinges and screws are the nickel risk, and nose pads are often the place where dermatitis starts.

A printed frame should be smooth at the nose and ears, with no support scars. A silicone or TPE pad is more comfortable and easier to clean than a bare printed surface. Do not use a rigid, rough print against the bridge of the nose; the skin there is thin and pressure damage appears quickly.

### 9.3 Earrings

Earrings combine a porous plastic front with a metal post, and the post is the part that matters. Pierced ears are the classic route to nickel sensitisation, and the EU limit for posts is two and a half times stricter than the limit for ordinary prolonged contact.

Use titanium or niobium posts. Avoid plated zinc alloy, nickel silver and unidentified "surgical steel". If the decorative front is printed, seal it or keep it away from the piercing channel. Clean the post with alcohol before the first wear and periodically afterwards. Once a person is sensitised to nickel, no amount of cleaning makes a nickel-releasing post safe.

Printed earrings are also a choking and pinch hazard for small children, and the dye or pigment may be mouthed. They are not a children's product.

### 9.4 Orthotics and insoles

An orthosis is a load-bearing, long-wear, sweat-exposed device. The material must resist creep, because a shell that slowly flattens stops doing its job. TPU, PA, PP and PEBA are the usual candidates; PLA will creep and soften.

The skin side needs breathability, a smooth finish and, usually, a replaceable top cover. A closed-cell foam or fabric liner is more comfortable and more hygienic than bare printed plastic, and it can be replaced when it wears out. Sharp edges at the heel cup and the arch are common causes of blisters.

A printed orthosis made at home is a craft object. A prescription orthosis is a medical device, and the difference is not the printer; it is the assessment, the prescription, the quality system and the follow-up. If the wearer has diabetes, peripheral neuropathy or poor circulation, a pressure point can become an ulcer, and that is not a DIY project.

### 9.5 Prosthetic sockets and liners

A prosthetic socket is a high-load, long-term, occluded interface with skin that is often scarred or insensate. It is a medical device in every meaningful sense. Printed sockets exist, but they are designed, fitted and finished by prosthetists, usually in PA or a composite, with a defined liner system.

A home-printed socket is not a safe substitute. The failure modes are pressure injury, shear, moisture and infection, and they can appear before the wearer feels them.

### 9.6 Mask frames and ear savers

Mask frames and ear savers became common during the COVID-19 pandemic. They are a good example of a part that is simple to print and easy to get wrong. The contact areas are the bridge of the nose, the cheeks and behind the ears, all of which are thin-skinned and pressure-sensitive.

Use PETG, PCTG or a flexible TPU rather than PLA, because PLA softens with body heat and with the warm, humid air inside a mask. Smooth the contact surfaces, avoid sharp edges and keep the frame thin enough to flex. Clean it daily, and do not share it.

A printed mask frame is not personal protective equipment. It does not seal, it is not certified, and it does not turn a cloth mask into a respirator.

### 9.7 Helmet liners and padding

Helmet liners sit against skin under pressure, heat and sweat. Printed liners are usually rigid shells or spacers, with a soft liner between the print and the skin. The printed part should be smooth, ventilated and easy to remove for cleaning. The soft liner is the part that touches skin and the part that should be replaced regularly.

### 9.8 Baby products

The honest answer for babies and young children is to avoid printed plastic in the mouth and against skin for long periods. Children have thinner skin, a higher surface-area-to-mass ratio and a greater tendency to mouth objects. Teethers, pacifier clips and bottle parts are not appropriate printed projects. Decorative items that do not touch skin or the mouth are a different matter, but they still need to be free of small parts and sharp edges.

## 10. Nickel and Metal Allergy in Practice

Nickel allergy is common, permanent and preventable. The clinical picture is usually a red, itchy, sometimes weeping rash exactly where the metal touches skin: the earlobe, the wrist under a watch, the bridge of the nose, the navel. It can spread, and in severe cases it becomes hand eczema.

The prevention strategy is straightforward:

- **Choose the metal before the design.** Titanium, niobium and good-quality 316L are the practical low-nickel options. Avoid plated zinc, nickel silver and unknown alloys.
- **Test unknown metal.** A DMG spot test is cheap and takes a minute. It will not quantify release, but it will flag the worst offenders.
- **Seal the metal, not just the plastic.** A coated metal part is only protected while the coating lasts. Once it wears through, the nickel is exposed again.
- **Avoid metal inserts in printed parts where possible.** If an insert is needed, use titanium and seal the interface so sweat cannot reach it.
- **Do not trust "hypoallergenic".** It is not a defined claim.
- **Respect the difference between sensitised and not.** A person who is already sensitised needs strict avoidance, not a barrier cream.

If a rash appears, stop wearing the item, keep the area clean and dry, and see a clinician if it does not settle. Patch testing is the way to identify the specific allergen, and it is worth doing if the reaction is severe or recurrent.

## 11. The Snapmaker U1 Workflow

The U1 is a four-toolhead machine with a 300 °C nozzle limit, a 100 °C bed limit and a 60 °C chamber limit with a chamber heater. Those numbers are useful for printing, and irrelevant to sterility. Nothing about a 300 °C hotend makes a part safe for skin.

**Hotend and contamination.** The stock hotends are stainless steel, which is a better starting point than brass because brass wears and can deposit copper, zinc and lead. Stainless steel is not a guarantee: it contains nickel, and the alloy and surface finish vary between hotends. Snapmaker does not certify the hotend for food or skin contact, and neither does any other desktop printer maker.

**Colour and material carry-over.** The U1 has four independent toolheads and two filament feeders. Each toolhead has its own melt zone, which is an advantage for pairing incompatible materials, but colourant carry-over still happens within a toolhead when one colour follows another. Use a prime and wipe tower, purge into infill, and print the body-contact face with the cleanest filament. A purge tower reduces colour bleed; it does not clean the hotend.

**Build plate.** The build plate is PEI-coated spring steel. Glue stick, Magigoo and hairspray are not skin-safe, and their residue transfers to the underside of the part. Wash the part thoroughly, and consider a dedicated plate for body-contact work.

**Drying.** Wet filament prints with bubbles, stringing and a rough surface, all of which are bad for skin contact. Dry hygroscopic materials before printing, especially PA, TPU and PC.

**Annealing.** The U1 has no annealing oven. Its bed reaches 100 °C and its chamber reaches 60 °C only with a chamber heater and community firmware, which is not enough for the higher-temperature anneals used for some polymers. If a part needs annealing, use a dedicated oven, never a kitchen oven, and remember that annealing does not sterilise.

**Print orientation.** For flexible parts, orient the part so that the main flex direction is in the XY plane. Layer adhesion is the weak axis, and a band or a clip that flexes across layer lines will fail at the seam.

**Nozzle choice.** A 0.4 mm nozzle is a good compromise for wearables. A 0.2 mm nozzle gives a smoother surface but slows the print and increases the chance of clogging with filled materials. A 0.6 mm nozzle produces stronger parts with more visible layer lines.

**Ventilation.** ABS, ASA, POM, PC and some TPU grades produce irritating or harmful fumes. Use the Top Cover with filtration, or vent the room. Filtration reduces respiratory exposure; it does not make the printed part safer to wear.

## 12. A Decision Table

| Scenario | What is reasonable | What to avoid | Extra controls |
| :--- | :--- | :--- | :--- |
| Single short contact, such as a decorative earring for an evening | PLA, PETG or PCTG with a declared colour and a titanium post | Unknown pigments, plated findings, rough edges | Smooth the contact face, clean before use, remove if itching starts. |
| Intermittent contact, such as a watch band worn during the day | TPU, PETG or PCTG with titanium or 316L hardware | PLA, chrome-plated pot metal, absorbent liners | Rinse after wear, dry fully, inspect the clasp and lugs for wear. |
| Prolonged contact, such as a mask frame or an orthosis worn all day | PETG, PCTG, PP, PEBA or TPU with a smooth or coated skin face | Bare porous prints, sharp edges, rigid pressure points | Fit check, pressure check, daily cleaning, replaceable liner. |
| Broken or inflamed skin | Nothing printed should touch the area | Any printed part, any coating, any adhesive | Use a clinically approved dressing and get medical advice. |
| Child under three, or any mouthing | Avoid printed plastic entirely | Teethers, clips, bottle parts, small decorations | Use products made and certified for children. |
| Medical or therapeutic use, such as a prescription orthosis or a prosthesis | A device made under a medical quality system | Home-printed substitutes for a prescribed device | Work with a clinician or prosthetist; do not self-prescribe. |

The table is deliberately conservative. It is easier to justify a part for an evening than for a month, and easier to justify a part on intact skin than on skin that is already damaged.

## 13. A Practical Protocol

If you are going to print something that touches skin, this is the sequence that gives the best odds.

1. **Define the contact.** Write down where it touches, for how long and under what conditions. A part that touches the wrist for an hour is a different problem from one that touches the face for eight hours.
2. **Choose the polymer for the contact, not the look.** Prefer PLA, PETG, PCTG, PP, PEBA or TPU for intact skin. Avoid ABS, ASA, POM, composites and unknown blends.
3. **Buy a known filament.** Use a brand that names the polymer and the colour, and avoid glitter, metallic, glow and wood additives for skin contact.
4. **Dry the filament.** Moisture produces rough surfaces and weak parts.
5. **Print hot enough for layer fusion, and slow the outer wall.** A well-bonded, smooth part is stronger and easier to clean.
6. **Orient for flex.** Keep the main bending direction in the XY plane.
7. **Remove supports carefully.** Support scars are abrasive. Sand them wet.
8. **Wet sand the contact face.** Progress from 220 to 600 grit, then rinse.
9. **Seal if the contact is prolonged.** Use a platinum-cure silicone intended for skin contact, and cure it fully. Do not use hardware sealant, furniture epoxy or UV nail resin.
10. **Purge solvents.** After any solvent process, ventilate the part for at least 24 hours, and longer for limonene or thick sections.
11. **Clean before first use.** Wash with mild soap, rinse, and dry completely.
12. **Do a short wear trial.** Wear the part for an hour, then a few hours, and watch for redness, itching, heat or pressure marks. Stop at the first sign.
13. **Set a replacement interval.** A watch band or a mask frame is a consumable. Replace it when it cracks, smells, discolours or stops fitting.
14. **Do not share.** Body-contact prints are personal items.

> [!warning] The limits of this workflow
> This protocol reduces risk. It does not certify anything. A printed part can be made from a well-characterised polymer, printed cleanly, sanded smooth, sealed with skin-safe silicone and still cause a reaction in a sensitised person. If the wearer has a known nickel or acrylate allergy, a history of contact dermatitis, broken skin, or a medical condition that affects healing, the right move is to use a commercially made, certified product rather than a print.

## 14. The Honest Summary

The material question has a reasonably clear answer. For intact skin and short-to-moderate contact, PLA, PETG, PCTG, PP, PEBA and plasticiser-free TPU are the sensible choices. ABS, ASA, POM, damp nylon, polycarbonate with residual bisphenol A, and composite or metal-filled filaments are poor choices. Pigments and additives matter as much as the base polymer, and a named colour from an established brand is worth more than a fancy effect from an unknown one.

The part question is harder. FDM surfaces are porous, they harbour biofilm, and they cannot be sterilised at home. Smoothing and coating help, but a coating that cracks is worse than no coating. Metal hardware is often the real allergen source, and nickel release limits apply to the finished article, not to the spool.

The standards question is the one most often answered dishonestly. ISO 10993 is a framework for evaluating a finished medical device. It is not a label that a filament can carry into your workshop. OEKO-TEX Standard 100 is a textile standard. FDA and EU food-contact rules are about food, not skin. None of them certifies a 3D print.

The practical answer is therefore modest and useful. Print the parts that do not need to be sterile, choose the polymer and the pigment carefully, keep the contact face smooth, use titanium or good stainless hardware, clean the part properly and replace it when it wears. For anything that involves broken skin, a child's mouth, a prescription orthosis or a prosthesis, use a product made for that purpose. A desktop printer is a wonderful tool for making a custom-fit object. It is not a medical device manufacturing system, and it should not pretend to be one.

## Related notes

- [[00 - Filament Master Index]]
- [[13 - Food Contact and Food-Safe Printing]]
- [[11 - Annealing and Heat Treatment]]
- [[09 - Post-Processing - Matte, Shiny, and Surface Finishing]]
- [[08 - Surface Smoothing Slicer Techniques - Ironing and Beyond]]
- [[06 - Heating and Temperatures - Nozzle, Bed, and Chamber]]
- [[04 - Nozzles and Their Types]]
- [[10 - Common Printing Issues, Debugging, and Physical Limits]]
- [[01 - PLA (Polylactic Acid - Standard, High-Speed, and Tough PLA+)]]
- [[05 - PETG (Polyethylene Terephthalate Glycol-Modified)]]
- [[06 - PCTG (Polycyclohexylenedimethylene Terephthalate Glycol-Modified)]]
- [[09 - TPU and TPE (Thermoplastic Polyurethane and Thermoplastic Elastomer - 95A, 85A, High-Speed TPU, Foaming LW-TPU)]]
- [[23 - PP and POM Low-Friction Polyolefins and Acetals (Polypropylene, Olefin Block Copolymer OBC, and Polyoxymethylene Acetal Delrin)]]
- [[12 - Carbon Fiber and Glass Fiber Reinforced Composites (PLA-CF, PETG-CF, ABS-GF, ASA-CF, PA-CF, PAHT-CF, PC-CF)]]
- [[16 - Glass-Like and Optically Transparent Filaments (PMMA Polymethyl Methacrylate, Clear PC, Transparent PETG, Transparent PCTG)]]
- [[24 - Fluoropolymers, Ultra-Polymers, and Specialty Functional Filaments (PVDF Polyvinylidene Fluoride, PEEK Polyether Ether Ketone, PEI Polyetherimide Ultem, PCL Polycaprolactone, and Nylon Purge Cleaning Filament)]]
- [[10 - PA (Polyamide - Nylon 6, Nylon 12, and Nylon 6-66 Copolymers)]]
- [[11 - PC (Polycarbonate and PC-ABS, PC-PBT Engineering Alloys)]]
- [[07 - ABS (Acrylonitrile Butadiene Styrene)]]
- [[08 - ASA (Acrylonitrile Styrene Acrylate)]]

## Sources

1. [Use of International Standard ISO 10993-1, biological evaluation of medical devices, part 1 — U.S. Food and Drug Administration](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/use-international-standard-iso-10993-1-biological-evaluation-medical-devices-part-1-evaluation-and)
2. [3D Printing of Medical Devices — U.S. Food and Drug Administration](https://www.fda.gov/medical-devices/products-and-medical-procedures/3d-printing-medical-devices)
3. [Cytotoxicity Test, ISO 10993-5 — Nelson Labs](https://www.nelsonlabs.com/tests/cytotoxicity/)
4. [Sensitization or Hypersensitivity Testing, ISO 10993-10 — Nelson Labs](https://www.nelsonlabs.com/tests/sensitization/)
5. [Food safe FDM printing — Prusa Knowledge Base](https://help.prusa3d.com/article/food-safe-printing_112313)
6. [Food Contact Materials — European Commission](https://food.ec.europa.eu/food-safety/chemical-safety/food-contact-materials_en)
7. [OEKO-TEX STANDARD 100 — OEKO-TEX](https://www.oeko-tex.com/en/our-standards/oeko-tex-standard-100)
8. [Nickel allergy — DermNet](https://dermnetnz.org/topics/nickel-allergy)
9. [Allergy to acrylates — DermNet](https://dermnetnz.org/topics/allergy-to-acrylate)
10. [Allergic contact dermatitis to isocyanate — DermNet](https://dermnetnz.org/topics/allergic-contact-dermatitis-to-isocyanate)
11. [Nickel allergy and allergic contact dermatitis: a clinical review of immunology, epidemiology, exposure, and treatment — Ahlström et al., Contact Dermatitis, 2019](https://pubmed.ncbi.nlm.nih.gov/31140194/)
12. [Acrylate and methacrylate contact allergy and allergic contact disease: a 13-year review — Spencer et al., Contact Dermatitis, 2016](https://pubmed.ncbi.nlm.nih.gov/27402324/)
13. [Allergic contact dermatitis to components of wearable adhesive health devices — Khatsenko et al., Dermatitis, 2020](https://pubmed.ncbi.nlm.nih.gov/32209871/)
14. [Wear and flare: allergic contact dermatitis to personal electronic devices — Hussain et al., Cutis, 2025](https://pubmed.ncbi.nlm.nih.gov/41056118/)
15. [Comparative in vitro Staphylococcus aureus biofilm evaluation on 3D-printed PLA and PETG surfaces — Tuon et al., Journal of Visualized Experiments, 2026](https://pubmed.ncbi.nlm.nih.gov/42008411/)
16. [Nickel allergic contact dermatitis: identification, treatment, and prevention — Silverberg et al., Pediatrics, 2020](https://pubmed.ncbi.nlm.nih.gov/32341178/)
17. [Dragon Skin series, platinum-cure silicone — Smooth-On](https://www.smooth-on.com/product-line/dragon-skin/)
18. [Formaldehyde, overview — U.S. Occupational Safety and Health Administration](https://www.osha.gov/formaldehyde)

## Videos

1. [Prusa 3D — How to make food-safe 3D printed models](https://www.youtube.com/watch?v=D-SKMdlegdU)
2. [My Tech Fun — About food safe 3D printing](https://www.youtube.com/watch?v=lFtMIo00tfY)
3. [Carbon — Biocompatible 3D Printing Materials for Implants & Skin Contact](https://www.youtube.com/watch?v=0P85Ra-2QZk)
4. [Formlabs — Material Scientist Answers Most Asked Resin Safety Questions](https://www.youtube.com/watch?v=iNcmhUTnWBE)
5. [Nickel Institute — Nickel allergy, what you need to know](https://www.youtube.com/watch?v=8CqKQpg3Tvs)
6. [Nickel Institute — Nickel allergy and ear piercings](https://www.youtube.com/watch?v=6kLbxxArmOk)
7. [Mayo Clinic — Are you allergic to jewelry?](https://www.youtube.com/watch?v=4CGUF18PoZQ)
8. [Nathan Builds Robots — Carbon In My Skin. These Wounds, They Will Not Heal.](https://www.youtube.com/watch?v=ddwNZ12_qX8)
9. [Nathan Builds Robots — The Truth About 3D Printing (Health and Safety)](https://www.youtube.com/watch?v=U7DF3DkpmhU)
10. [Phil Nolan — 3D Printing My New Watch Band With Siraya Tech TPU](https://www.youtube.com/watch?v=GI-3OkvTqVE)
11. [3DShoemaker — How to 3D Print Orthotics on Desktop 3D Printers](https://www.youtube.com/watch?v=KRIfQRlHSpU)
12. [Mayo Clinic — 3D-printed cast makes for a more hygienic recovery](https://www.youtube.com/watch?v=cRvlT-32D5A)
13. [My Tech Fun — 3D printed objects coated with epoxy resin, but why?](https://www.youtube.com/watch?v=ItJcpBjP2h0)
14. [Brandwood CKC — Verification of 3D printed devices: Biocompatibility, Biomechanics and Sterilisation](https://www.youtube.com/watch?v=2tHNgr_rK6A)
