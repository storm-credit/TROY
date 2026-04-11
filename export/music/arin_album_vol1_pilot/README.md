# Arin Album Vol.1 Pilot Bundle

이 폴더는 아린 1집 파일럿 3곡의 generation-ready bundle이다.

순서:

1. `01_E054_generation_card.md`
2. `02_E113_generation_card.md`
3. `03_E050_generation_card.md`
4. `04_SESSION_RESULT_LOG.md`
5. `05_MEDIA_PACKET_INDEX.md`
6. `06_E054_integrated_media_packet.md`
7. `07_E113_integrated_media_packet.md`
8. `08_E050_integrated_media_packet.md`
9. `09_PILOT_GENERATION_CONSOLE.md`
10. `suno_copy_cards/`
11. `visual_mv_copy_cards/`

파일럿 목적:

- title-track-class candidate 검증
- selfhood declaration single 검증
- private diary b-side 검증

통합 패킷 역할:

- 음악 프롬프트, 가사, 컷별 이미지 프롬프트, 영상 블록 프롬프트를 한 파일에서 바로 확인
- 파일럿 3곡을 `music first -> stills -> short MV` 순서로 실제 생성 가능한 상태로 올림

실행 콘솔:

- `09_PILOT_GENERATION_CONSOLE.md`를 기준으로 생성기에 입력한다
- full lyrics 입력이 필요하면 `suno_copy_cards/`를 사용한다
- music pass 이후 still/MV 입력은 `visual_mv_copy_cards/`를 사용한다
- 툴별 docs 최적화 분화 기준은 `ops/tool_specific_prompt_optimization_matrix.md`를 따른다
- 얼굴/캐릭터 유지는 `../character_lock_pack/`와 `ops/character_face_lock_harness.md`를 먼저 따른다
- 결과는 `04_SESSION_RESULT_LOG.md`, `../arin_album_vol1_first_execution_wave_sheet.md`, `../arin_album_vol1_master_session_log.md` 순서로 기록한다
