---
title: "TRELLIS 2.0"
tags:
  - 3d-modelling
  - image-to-3d
  - trellis
  - apple-silicon
  - snapmaker-u1
---

[TRELLIS.2-4B on Hugging Face](https://huggingface.co/microsoft/TRELLIS.2-4B)

Microsoft's 4B image-to-3D model. It generates textured meshes with PBR materials through a sparse O-Voxel representation. In the Archdevil experiments it produced the most complete overall shape and the best back-side detail, but the surface is faceted and not print-ready without remeshing.

## Local setup

Tested on a **MacBook Pro Mac16,8**: Apple **M4 Pro**, 12-core CPU (8 performance + 4 efficiency), **24 GB unified memory**, macOS **26.6.2** (25G83). Runs used MPS with `low_vram=True` and the naive attention backend.

## Settings that worked

- **512 pipeline, 12 steps** — about 240–251 s; roughly 1.0–1.06 M vertices and 2.13–2.35 M triangles.
- **512 pipeline, 20 steps** — about 318 s; more detail, seed 777 was the useful comparison variant.
- **640 × 640 upper-body crop, 512 pipeline, 20 steps** — about 209 s; 262 k vertices / 523 k triangles. Good for detail tests, but only the upper body.
- Seeds **42, 123 and 777** all completed at 512/12.

## Limits

- **1024 cascade fails on 24 GB.** The local run hit MPS OOM: 2.04 GiB allocated, 27.19 GiB other allocations, 30.19 GiB maximum. Do not rely on the high-watermark override; it risks the whole machine.
- Initial setup needed Hugging Face access for gated DINOv3 and RMBG/BiRefNet weights.
- The output is dense and faceted; plan on remesh/decimation before printing.

For the Archdevil print, the final 4-colour 3MF came from the CC0 Printables sculpt. The TRELLIS runs were comparison and reference experiments, not the printed mesh.
