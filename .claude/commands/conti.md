---
description: Generate or review a conti/shot list for a track
---

> 🔁 **TROY mode**: 본 명령의 `outputs/manifests/`, `outputs/conti/` 경로는 oddengine 전용. TROY는 `ops/E###_visual_cut_list.md`, `export/music/.../generation_card.md` 사용. 매핑은 `CLAUDE.md §13` 참조.
Generate a conti (shot list) for track $ARGUMENTS.

1. Load manifest: outputs/manifests/{trackId}.yaml
2. Load visual bible from 10_{market}/ directory
3. Load story sheet from 10_{market}/ directory
4. Map each planned still to a story beat and shot family (hook/face/object/space/chorus)
5. Create shot sequence with scene descriptions, framing, and duration
6. Output YAML to outputs/conti/{trackId}_conti.yaml
7. Output human-readable to outputs/conti/{trackId}_conti.md
8. Update manifest with conti reference
