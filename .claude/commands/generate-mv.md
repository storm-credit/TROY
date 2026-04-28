---
description: Generate complete MV for a track (full pipeline)
---

> 🔁 **TROY mode**: 본 명령의 `outputs/songs|videos|conti|registry/` 와 `npx remotion render` 는 oddengine 전용. TROY 편집 스택은 미정(외부 NLE 사용 예정), 자산은 `export/music/...` 로 회수. 트랙 ID 는 TROY 12 트랙 ID(E054~E108). 매핑은 `CLAUDE.md §13` 참조.
Generate complete music video for track $ARGUMENTS.

Usage: /generate-mv {track_id}
Example: /generate-mv KR-01

Estimated time: 2-4 hours | Estimated cost: $20-35

1. Verify song exists (check audio assets):
   - Check outputs/songs/{track_id}/ for an audio file
   - Read manifest outputs/manifests/{track_id}.yaml → confirm audio.status is 'approved' or 'candidate'
   - If not found or status is 'not_started'/'rejected': STOP and tell user to complete song gate first

2. Load conti (22 scenes):
   - Read outputs/conti/{track_id}_conti.yaml
   - Verify shot count is between 18–28 (target 22)
   - If conti missing or fewer than 18 shots: STOP and tell user to run /conti first

3. Generate all 22 illustrations (run /generate-image for each scene):
   - Process scenes in batches of 4 to respect rate limits
   - For each scene in conti: /generate-image {track_id} {scene_id}
   - Track success/failure per scene
   - If more than 5 scenes fail: stop and report which scenes failed

4. Generate all 22 motion clips (run /generate-video for each scene):
   - Process scenes in batches of 2 (video generation is slower)
   - For each successfully generated still: /generate-video {track_id} {scene_id} {asset_id}
   - Track success/failure per clip
   - If more than 5 clips fail: stop and report which clips failed

5. Prepare lyrics timing data:
   - Load lyrics from manifest or {market_dir}/{track_id} lyrics document
   - Align lines to audio timestamps using beat markers from conti
   - Output to outputs/videos/{track_id}/{track_id}_lyrics_timing.json
   - If no timing data available: auto-distribute across audio duration and flag for review

6. Render with Remotion OddFullMV composition:
   npx remotion render OddFullMV \
     --props='{"trackId":"{track_id}","clipsDir":"outputs/videos/{track_id}/","audioPath":"{audio_path}","lyricsTiming":"outputs/videos/{track_id}/{track_id}_lyrics_timing.json"}' \
     --output outputs/videos/{track_id}/{track_id}_mv_final.mp4 \
     --codec h264

7. Upload final MV to assets:
   - Register in outputs/registry/release_registry.yaml
   - Update manifest: render.status = 'candidate', add final video path

8. Report: Print final video path, total scenes generated, total clips generated,
   engines used, any failures or review flags, and estimated total cost.
