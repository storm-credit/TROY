# Main Release Log - 2026-04-11

## Release Baseline

- source branch: `codex/120-canon-master-plan`
- target branch: `main`
- initial released commit: `84cfb37` `Lock push and main release gate`
- current released commit: `2d68470` `Add external asset update draft exporter`
- release method: fast-forward push from `HEAD` to `main`

## Scope

이번 main 반영은 TROY 원고/하네스/패키지/미디어 모듈 작업을 현재 안정 기준점으로 올린 것이다.

포함 범위:

- `E001-E120` manuscript safe-line 상태
- chapter/range gate reports
- submission/export packets
- Arin in-world album production docs
- media orchestra module system
- character face lock harness
- external asset intake dashboard / review run / snapshot export
- external asset action packet / verdict template / operator session bundle
- audio / visual intake helper stack and intake routing docs
- push / main release gate
- main release log
- README release baseline update
- export package status README update

## Verification

- length gate:
  - `E001-E120` all `safe-line candidate`
- forbidden pattern gate:
  - `E001-E120` all `PASS`
- external asset blocked-path harness:
  - `.\tools\Test-ExternalAssetIntakeHarness.ps1 -AsJson` `pass`
- external asset synthetic ready-path harness:
  - `.\tools\Test-ExternalAssetReadyPath.ps1 -AsJson` `pass`
- external asset operator session bundle:
  - `01_review_snapshot.md`
  - `02_action_packet.md`
  - `03_verdict_template.md`
  - `04_update_draft.md`
  - blocked path and synthetic ready path both `pass`
- git state before main push:
  - worktree clean
  - `origin/main` was ancestor of working branch
  - ahead count: `1`

## Main Release Rules Applied

- no force push to `main`
- no unrelated dirty files included
- branch push completed before main reflection
- main was updated only after hook verification and fast-forward eligibility check

## Release Extension Commits

- `aa315d4` `Record main release baseline`
- `ee46097` `Update TROY release baseline docs`
- `b261b0c` `Update export package status docs`
- `74d1266` `Lock external asset intake release readiness`
- `bc28bc2` `Add external asset first-arrival runbook`
- `b56ec10` `Add external asset action packet exporter`
- `9e8c8d6` `Add external asset update map`
- `bb337bb` `Link external asset operator flow in readmes`
- `2b89ec9` `Add external asset verdict template exporter`
- `dd56f8e` `Align media routing with verdict template flow`
- `44b26ca` `Add external asset operator session bundle`
- `5997ed3` `Update main release baseline docs`
- `2d68470` `Add external asset update draft exporter`

These commits extend the original main baseline into the media intake operator-ready release state.

## Next Action

- 이후 작업은 다시 `codex/120-canon-master-plan`에서 계속한다.
- 다음 큰 기준점이 잠기면 작업 브랜치에 먼저 푸시하고, stable baseline이면 main 반영 가능성도 함께 확인한다.

#main-release #TROY #orchestra-lock
