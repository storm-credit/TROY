---
description: Generate illustration for a track scene
---

> 🔁 **TROY mode**: 본 명령의 `localhost:8899/api/generate/image` · `outputs/stills/` · `outputs/registry/` 는 oddengine 전용. TROY 는 외부 도구(MJ/Imagen/NB) 결과를 `export/` 로 회수하는 방식. 트랙 ID 는 `KR-XX` 가 아닌 TROY 12 트랙 ID (E054/E113/...). 매핑은 `CLAUDE.md §13` 참조.
Generate image for track $ARGUMENTS scene.

Usage: /generate-image {track_id} {scene_id} [prompt] [style_ref]
Example: /generate-image KR-01 KR-01-SHOT-005

1. Parse arguments: track_id and scene_id are required. Extract any additional
   tokens as optional prompt override and style_ref.

2. Load conti: outputs/conti/{track_id}_conti.yaml
   - Find scene entry matching scene_id
   - Extract: description, shot family, camera_notes, visual_bible_ref

3. Load visual bible: {market_dir}/{track_id}_비주얼_바이블.md
   - Extract canonical locks (face, object, light, space)
   - Extract color system, texture rules, shot families
   - Extract prompt guardrails (allowed + prohibited keywords)

4. Load character sheet (if exists): {market_dir}/{track_id}_캐릭터_시트.md
   - Use as style_ref anchor if style_ref input is not provided

5. Build generation prompt:
   - Combine scene description + camera notes + canonical rules
   - Apply visual bible allowed/prohibited keyword filter
   - If prompt argument was provided, use it directly (still apply prohibited filter)

6. Call generation API (try engines in order: imagen4 → nano_banana → dalle3):
   curl -X POST http://localhost:8899/api/generate/image \
     -H "Content-Type: application/json" \
     -d '{"track_id":"{track_id}","scene_id":"{scene_id}","prompt":"...","engine":"imagen4"}'

7. Verify output:
   - Confirm response contains output_path or asset_id
   - Check resolution >= 1080px short side
   - Log generation metadata (engine, prompt, seed)

8. Upload to assets:
   - Move/copy file to outputs/stills/{track_id}/{scene_id}.png
   - Update outputs/registry/stills_{track_id}.yaml
   - Update outputs/manifests/{track_id}.yaml (visual.planned_stills)
   - Update conti scene still_status to 'generated'

9. Report: Print asset_id, resolution, engine used, and any consistency flags.
