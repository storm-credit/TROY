---
description: Convert still image to motion clip
---
Generate video from image for track $ARGUMENTS.

Usage: /generate-video {track_id} {scene_id} {image_asset_id} [motion_prompt] [duration_s]
Example: /generate-video KR-01 KR-01-SHOT-005 KR-01-SHOT-005

1. Parse arguments: track_id, scene_id, and image_asset_id are required.
   Extract optional motion_prompt override and duration_seconds (default 5).

2. Find source still image:
   - Resolve image_asset_id to outputs/stills/{track_id}/{image_asset_id}.png
   - Verify file exists and is >= 1080px on short side

3. Load motion direction from conti: outputs/conti/{track_id}_conti.yaml
   - Find scene entry matching scene_id
   - Extract: camera_notes (movement direction), scene description (character action),
     beat family (Face/Chorus/Object/Space — determines motion energy)

4. Build motion prompt:
   - If motion_prompt argument was provided, use it directly
   - Otherwise combine: camera movement from camera_notes + character action from
     description + emotion tag from shot family
   - Produce negative_motion_prompt (no jump cuts, no flicker, preserve face)

5. Call video generation API (try engines in order: veo3 → kling):
   curl -X POST http://localhost:8899/api/generate/video \
     -H "Content-Type: application/json" \
     -d '{"track_id":"{track_id}","scene_id":"{scene_id}","image_path":"...","motion_prompt":"...","duration_seconds":5,"engine":"veo3"}'

6. Verify output:
   - Confirm response contains output_path or asset_id
   - Check format: MP4, H.264, yuv420p (run ffprobe)
   - Check duration is within ±0.5s of target
   - Re-encode if format is not Remotion-compatible:
     ffmpeg -i {input} -c:v libx264 -pix_fmt yuv420p -crf 18 -movflags +faststart -an {output}

7. Upload to assets:
   - Move/copy clip to outputs/videos/{track_id}/{scene_id}.mp4
   - Update outputs/registry/videos_{track_id}.yaml
   - Update outputs/manifests/{track_id}.yaml (motion.planned_clips)
   - Update conti scene motion_status to 'generated'

8. Report: Print asset_id, duration, engine used, format check result, and any quality flags.
