# TROY Music Export

이 폴더는 실제 음악 생성 테스트와 제작 전달용 묶음을 담는다.

현재 묶음:

- `character_lock_pack/`
- `arin_album_vol1_pilot/`
- `arin_album_vol1_second_pass/`
- `arin_album_vol1_third_pass/`
- `arin_album_vol1_fourth_pass/`

역할:

- `ops`의 설계 문서를 production-facing bundle로 다시 묶는다
- 생성 테스트는 이 폴더를 기준으로 진행한다
- 얼굴/캐릭터 일관성은 `character_lock_pack/`에서 먼저 잠근다

character lock pack 안에는:

- Arin face lock card
- Seojun face lock card
- tool reference routing card
- face drift verdict sheet
- `export/visual/` continuity board 연동

현재 파일럿 번들 안에는:

- generation card 3종
- session result log
- integrated media packet index
- 곡 / 이미지 / 영상 통합 생성 패킷 3종
- pilot generation console

second-pass 번들 안에는:

- generation card 3종
- integrated media packet index
- session result log
- 곡 / 이미지 / 영상 통합 생성 패킷 3종

third-pass 번들 안에는:

- generation card 3종
- integrated media packet index
- session result log
- 곡 / 이미지 / 영상 통합 생성 패킷 3종

fourth-pass 번들 안에는:

- generation card 3종
- integrated media packet index
- session result log
- 곡 / 이미지 / 영상 통합 생성 패킷 3종

현재 상태:

- `pilot + second_pass + third_pass + fourth_pass`로 아린 1집 12트랙 전부가 generation-ready packet 상태까지 올라왔다
- 현재 판단은 `go-live ready`이며, 다음 실제 시작 순서는 `E054 -> E113 -> E050`이다
- 현재 파일럿 3곡 queue:
  - `E054-A01`
  - `E113-A01`
  - `E050-A01`
- 세 queued run 모두 verdict는 `pending`이며, 실제 생성 음원 청취 후에만 `pass / revise / reject`를 기록한다

운영 문서:

- `arin_album_vol1_master_generation_board.md`
- `arin_album_vol1_master_session_log.md`
- `arin_album_vol1_direction_note_template.md`
- `arin_album_vol1_first_execution_wave_sheet.md`
- `arin_album_vol1_pilot/11_EXTERNAL_AUDIO_INTAKE.md`
- `../tools/Test-PilotAudioIntake.ps1`
- `../tools/Get-PilotVerdictWorksheet.ps1`
- `../tools/Invoke-PilotVerdictAssist.ps1`
- `../media_modules/`

오케스트라 잠금 문서:

- `ops/arin_inworld_album_vol1_full_generation_runway.md`
- `ops/arin_inworld_album_vol1_first_execution_wave.md`
- `ops/orchestra_album_generation_expert_check_2026_04_11.md`
- `ops/arin_album_generation_go_live_readiness_audit_2026_04_11.md`
- `ops/arin_album_pilot_queue_preflight_audit_2026_04_12.md`
- `ops/media_orchestra_command_hierarchy.md`
- `ops/tool_specific_prompt_optimization_matrix.md`
- `ops/character_face_lock_harness.md`
- `ops/character_face_lock_expert_check_2026_04_11.md`
- `ops/media_tool_module_system.md`
