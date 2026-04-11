# external asset intake live sequence 2026-04-12

## 1. purpose

- 이 문서는 오케스트라 관점에서 `EXTERNAL_ASSET_INTAKE_MODULE`을 실제 운영 단계로 옮길 때의 live sequence를 잠근다
- 목표는 `외부 산출물 도착 -> readiness 확인 -> worksheet 연결 -> 로그/보드 갱신`을 한 번에 흔들리지 않게 진행하는 것이다

## 2. sequence

1. external asset drop
2. dashboard check
3. lane-specific assist
4. verdict update
5. board / log update
6. rerun dashboard
7. next-stage open or hold

## 3. command path

### baseline check

```powershell
.\tools\Invoke-MediaIntakeDashboard.ps1
.\tools\Invoke-ExternalAssetReviewRun.ps1
.\tools\Export-ExternalAssetReviewSnapshot.ps1
.\tools\Export-ExternalAssetActionPacket.ps1
.\tools\Test-ExternalAssetIntakeHarness.ps1
```

- audio / visual ready count를 동시에 본다
- 아무 것도 없으면 그대로 blocked 상태를 유지한다
- one-command orchestration이 필요하면 `Invoke-ExternalAssetReviewRun.ps1`를 우선 사용한다
- session handoff or audit trail이 필요하면 `Export-ExternalAssetReviewSnapshot.ps1`로 markdown snapshot을 남긴다
- operator-facing checklist가 필요하면 `Export-ExternalAssetActionPacket.ps1`로 이번 세션의 update target과 review 순서를 한 장으로 뽑는다
- 하네스 수정 직후에는 `Test-ExternalAssetIntakeHarness.ps1`로 dashboard / review run / snapshot export / action packet export가 모두 통과하는지 확인한다

### audio lane

```powershell
.\tools\Test-PilotAudioIntake.ps1
.\tools\Invoke-PilotVerdictAssist.ps1
.\tools\Get-PilotVerdictWorksheet.ps1 -RunId E054-A01
```

- 실제 오디오가 들어온 run만 verdict 대상으로 올린다
- update target:
  - `export/music/arin_album_vol1_pilot/04_SESSION_RESULT_LOG.md`
  - `export/music/arin_album_vol1_first_execution_wave_sheet.md`
  - `export/music/arin_album_vol1_master_session_log.md`
  - `export/music/arin_album_vol1_master_generation_board.md`

### visual lane

```powershell
.\tools\Test-VisualReferenceIntake.ps1
.\tools\Invoke-VisualReferenceAssist.ps1
.\tools\Get-VisualReferenceWorksheet.ps1 -BaseName ARIN_MASTER_FRONT_v01
```

- 실제 reference image가 들어온 base name만 review 대상으로 올린다
- update target:
  - `export/visual/mv_character_continuity_board.md`
  - `export/visual/character_master/arin_master_face.md`
  - `export/visual/character_master/seojun_master_face.md`
  - `export/visual/character_sheets/arin_sheet_v01.md`
  - `export/visual/character_sheets/seojun_sheet_v01.md`

## 4. live control points

- control point A:
  - dashboard가 ready라고 보여 준 asset만 review에 올렸는가
- control point B:
  - worksheet의 pass anchor / reject signal을 보고 판정했는가
- control point C:
  - audio 결과는 music logs에, visual 결과는 continuity board에 같은 세션 안에서 반영됐는가
- control point D:
  - accepted still lock 없이 video module을 열지 않았는가
- control point E:
  - music pass 또는 strong revise 전에는 visual production으로 뛰지 않았는가

## 5. success condition

- dashboard가 ready / waiting을 거짓 없이 분리해 보여 준다
- ready asset마다 review worksheet와 update target이 즉시 연결된다
- blocked state면 그대로 hold, ready state면 즉시 review로 넘어간다
- operator가 다음 액션을 추측하지 않아도 된다

## 6. orchestra note

- 이 시퀀스의 목적은 새 문서를 더 만드는 것이 아니라, 이미 만들어 둔 intake helpers와 module routing을 실무 순서로 연결하는 것이다
- 다음 유의미한 변화는 실제 external audio 또는 reference image가 들어왔을 때 발생한다
