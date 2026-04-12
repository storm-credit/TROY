# TROY Visual Export

## purpose

- 이 폴더는 TROY 이미지와 MV 제작에서 캐릭터 얼굴/장면 연속성을 관리한다
- 음악 패킷은 `export/music/`에 있고, 얼굴/시각 연속성 보드는 이 폴더를 기준으로 추적한다

## folders

- `character_master/`
- `character_sheets/`
- `stills/`
- `i2v/`
- `12_REFERENCE_IMAGE_INTAKE.md`

## board

- `mv_character_continuity_board.md`

## source lock

- `ops/character_face_lock_harness.md`
- `ops/character_face_lock_expert_check_2026_04_11.md`
- `ops/media_tool_module_system.md`
- `export/media_modules/`
- `export/music/character_lock_pack/`
- `../tools/Test-VisualReferenceIntake.ps1`
- `../tools/Get-VisualReferenceWorksheet.ps1`
- `../tools/Invoke-VisualReferenceAssist.ps1`
- `../tools/Invoke-MediaIntakeDashboard.ps1`
- `../tools/Invoke-ExternalAssetOperatorSession.ps1`
- `../tools/Export-ExternalAssetActionPacket.ps1`
- `../tools/Export-ExternalAssetVerdictTemplate.ps1`
- `../tools/Export-ExternalAssetUpdateDraft.ps1`
- `../ops/external_asset_update_map_2026_04_12.md`
- `../ops/external_asset_operator_session_audit_2026_04_12.md`
- `../ops/external_asset_update_draft_audit_2026_04_12.md`

## current state

- face lock harness is ready
- actual master reference images are not yet present in the workspace
- next practical move is to drop reference images into `local/generated_visual/character_lock/`
- once images arrive, run `Test-VisualReferenceIntake.ps1` and `Invoke-VisualReferenceAssist.ps1` before updating the continuity board
- if the operator wants a one-command session bundle first, run `Invoke-ExternalAssetOperatorSession.ps1`
- if a same-session operator packet is needed, run `Export-ExternalAssetActionPacket.ps1` and then follow `external_asset_update_map_2026_04_12.md`
- if a fillable review skeleton is needed, run `Export-ExternalAssetVerdictTemplate.ps1` in the same session
- if file-by-file continuity update scaffolds are needed, run `Export-ExternalAssetUpdateDraft.ps1`
