---
title: "Pixal 3D"
tags:
  - 3d-modelling
  - image-to-3d
  - pixal3d
  - apple-silicon
  - snapmaker-u1
---

[Pixal3D on Hugging Face](https://huggingface.co/TencentARC/Pixal3D)

Tencent ARC's image-to-3D model, built on the TRELLIS.2 backbone. It uses pixel-aligned back-projection, so the front view follows the input image more closely than TRELLIS.2. The trade-offs are weaker texture quality, back-side hallucination without multi-view input, and a mesh that still needs cleanup.

## Local setup

The local experiments used the Apple Silicon **MLX** port on a **MacBook Pro Mac16,8**: Apple **M4 Pro**, 12-core CPU, **24 GB unified memory**, macOS **26.6.2**. The verified recipe in the local port docs is a **512 / INT4 / 1024² texture** run.

## Settings that worked

- **Resolution 512, INT4 flow layers, 1024² PBR atlas, seed 42**, all geometry and texture stages.
- Close memory-heavy apps first; the 16 GB M3 reference needed that and still used swap.
- The 16 GB M3 reference completed in **592.5 s** at **11.18 GiB peak MLX allocation**, **11.80 GiB peak process footprint**, **+1.82 GiB swap**, with 307 k triangles.
- A corrected export replay from cached outputs took about **43.5 s** at **9.14 GiB** and no added swap.

## Limits

- **1024 is not viable on 24 GB.** The port reports roughly **33 GB** peak at 1024; the official pipeline only targets 1024/1536.
- **FP16 at 512** completed geometry but stopped in texture sampling at the local swap safety limit.
- **Not watertight**: residual non-manifold edges remain; remove/remesh before printing.
- No M4 Pro-specific peak-memory log was kept for Pixal3D; the memory numbers above are from the verified 16 GB M3 reference run and the local 512 comparison artifacts.

For the Archdevil print, the final 4-colour 3MF came from the CC0 Printables sculpt. The Pixal3D runs were comparison and reference experiments, not the printed mesh.
