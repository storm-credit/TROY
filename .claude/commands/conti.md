---
description: Generate or review a conti/shot list for a track
---
Generate a conti (shot list) for track $ARGUMENTS.

1. Load manifest: outputs/manifests/{trackId}.yaml
2. Load visual bible from 10_{market}/ directory
3. Load story sheet from 10_{market}/ directory
4. Map each planned still to a story beat and shot family (hook/face/object/space/chorus)
5. Create shot sequence with scene descriptions, framing, and duration
6. Output YAML to outputs/conti/{trackId}_conti.yaml
7. Output human-readable to outputs/conti/{trackId}_conti.md
8. Update manifest with conti reference
