# TROY Character Lock Pack

## purpose

- 이 폴더는 아린/서준 MV 제작에서 얼굴과 인물 동일성을 유지하기 위한 실행 패킷이다
- 텍스트 프롬프트만으로 얼굴을 유지하지 않고, reference image 기반으로 생성/보정/영상화를 진행한다

## files

1. `01_ARIN_FACE_LOCK_CARD.md`
2. `02_SEOJUN_FACE_LOCK_CARD.md`
3. `03_TOOL_REFERENCE_ROUTING_CARD.md`
4. `04_FACE_DRIFT_VERDICT_SHEET.md`

## operating order

1. master face reference 후보 생성
2. master face reference pass/revise/reject
3. character sheet 생성
4. priority still 생성
5. face drift verdict
6. accepted still만 Kling/Higgsfield로 영상화

## source lock

- `ops/character_face_lock_harness.md`
- `ops/character_face_lock_expert_check_2026_04_11.md`
- `ops/media_orchestra_command_hierarchy.md`
- `ops/tool_specific_prompt_optimization_matrix.md`
- `export/visual/mv_character_continuity_board.md`
