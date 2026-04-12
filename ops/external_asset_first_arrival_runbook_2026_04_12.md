# external asset first arrival runbook 2026-04-12

## 1. purpose

- 이 문서는 실제 외부 audio 또는 reference image가 처음 도착했을 때 오케스트라가 어떤 순서로 intake 하네스를 열어야 하는지 잠그는 first-arrival runbook이다.
- 목표는 `drop 확인 -> review 개시 -> 판정 반영 -> 다음 단계 hold/open`을 추측 없이 실행하는 것이다.

## 2. orchestra position

- 오케스트라 총괄이 최상위 판정을 가진다.
- `운영 인테이크 지휘`가 실제 파일 유입과 readiness 확인을 맡는다.
- `음악 감동 지휘`는 audio asset이 ready일 때만 열리고,
- `뮤비 감동 지휘`는 accepted still 또는 approved reference line이 생겼을 때만 열린다.

## 3. hard rule

- 실제 파일이 없는 asset은 어떤 경우에도 `ready`로 올리지 않는다.
- synthetic dry-run 결과만으로 실생산을 열지 않는다.
- audio는 music review verdict 전까지 MV 단계로 넘기지 않는다.
- visual reference는 continuity board 반영 전까지 production shot으로 넘기지 않는다.

## 4. first-arrival sequence

1. asset drop 확인
2. `Invoke-ExternalAssetReviewRun.ps1` 실행
3. ready item 수와 blocked/waiting 분리 확인
4. lane-specific assist 실행
5. worksheet 기준으로 `pass / revise / reject` 판정
6. 해당 보드와 세션 로그를 같은 세션 안에서 갱신
7. dashboard 재실행
8. 다음 단계 open 또는 hold 판정

## 5. command card

### baseline

```powershell
.\tools\Invoke-ExternalAssetOperatorSession.ps1
.\tools\Invoke-ExternalAssetReviewRun.ps1
.\tools\Export-ExternalAssetReviewSnapshot.ps1
.\tools\Export-ExternalAssetActionPacket.ps1
.\tools\Export-ExternalAssetVerdictTemplate.ps1
.\tools\Export-ExternalAssetUpdateDraft.ps1
```

- 첫 실행은 가능하면 `Invoke-ExternalAssetOperatorSession.ps1`로 시작한다.
- review state만 따로 보고 싶을 때는 `Invoke-ExternalAssetReviewRun.ps1`를 쓴다.
- snapshot이 필요하면 같은 세션에서 즉시 export한다.
- 세션 체크리스트와 update target 묶음이 필요하면 `Export-ExternalAssetActionPacket.ps1`를 바로 뽑는다.
- fillable verdict 초안이 필요하면 `Export-ExternalAssetVerdictTemplate.ps1`를 바로 뽑는다.
- target file별 입력 초안이 필요하면 `Export-ExternalAssetUpdateDraft.ps1`를 바로 뽑는다.
- 실제 필드 반영은 `ops/external_asset_update_map_2026_04_12.md`를 따른다.

### audio first arrival

```powershell
.\tools\Test-PilotAudioIntake.ps1
.\tools\Invoke-PilotVerdictAssist.ps1
.\tools\Get-PilotVerdictWorksheet.ps1 -RunId E054-A01
```

- update target:
  - `export/music/arin_album_vol1_pilot/04_SESSION_RESULT_LOG.md`
  - `export/music/arin_album_vol1_first_execution_wave_sheet.md`
  - `export/music/arin_album_vol1_master_session_log.md`
  - `export/music/arin_album_vol1_master_generation_board.md`

### visual first arrival

```powershell
.\tools\Test-VisualReferenceIntake.ps1
.\tools\Invoke-VisualReferenceAssist.ps1
.\tools\Get-VisualReferenceWorksheet.ps1 -BaseName ARIN_MASTER_FRONT_v01
```

- update target:
  - `export/visual/mv_character_continuity_board.md`
  - `export/visual/character_master/arin_master_face.md`
  - `export/visual/character_master/seojun_master_face.md`
  - `export/visual/character_sheets/arin_sheet_v01.md`
  - `export/visual/character_sheets/seojun_sheet_v01.md`

## 6. verdict routing

### if audio only arrives

- 음악 감동 지휘만 열고, 뮤비 감동 지휘는 hold 상태 유지
- strong revise 이상이 나오기 전까지 still production은 열지 않는다

### if visual only arrives

- continuity review만 진행한다
- accepted reference lock 전까지 Kling / Higgsfield / Veo / Sora는 열지 않는다

### if both arrive

- intake review는 같은 세션에서 함께 볼 수 있다
- 하지만 다음 단계 오픈은 `audio verdict`와 `visual continuity verdict`를 각각 분리해서 판정한다

## 7. success condition

- operator가 현재 상태를 `blocked / ready / hold / open` 중 하나로 바로 말할 수 있다
- ready asset마다 worksheet와 update target이 즉시 연결된다
- review 결과가 같은 세션 안에서 로그/보드에 남는다
- 다음 단계가 열리더라도 이전 단계 판정 근거를 잃지 않는다

## 8. one-line lock

> 실제 자산이 처음 도착하면, 오케스트라는 먼저 intake 하네스를 열고 그 다음에만 감동 지휘 라인을 연다.
