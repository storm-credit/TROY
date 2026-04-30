# Character Sheets — TROY 「너라는 운율」

> Face-lock reference sheets. **STEP 1 of 5-part production bible.**
> 모든 후속 작업 (storyboard sheet · video prompt) 의 reference image 로 attach.
>
> 도구: **GPT Image 2** (paste-ready prompts)
> 톤: **Modern Korean cinematic illustration** (Z 갈래 — 음악·MV 비주얼 모드 분리)
> 산출 위치: 사용자 자유 (권장: `export/characters/{name}_sheet_v{N}.png`)

## 진행 보드

| 우선순위 | 캐릭터 | 캐논 위치 | Prompt 상태 | Sheet 상태 | 파일 |
|---|---|---|---|---|---|
| 1 | **윤서준** (Yoon Seojun) | 메인 남주, 모든 트랙 | ✅ prompt-ready (v1) | ⏳ pending | `yoon_seojun_sheet_v1.md` |
| 2 | **지아린** (Ji Arin) | 메인 여주, vol1 가창자 | ⏳ pending | ⏳ pending | (다음) |
| 3 | **최이든** (Choi Iden) | 룸메, 조연 | ⏳ pending | ⏳ pending | (다음) |
| 4 | **강도현** (Kang Dohyun) | 연적, Phase 2-4 | ⏳ pending | ⏳ pending | (다음) |
| 5 | **배소나** (Bae Sona) | 아린 현실거울, Phase 2+ | ⏳ pending | ⏳ pending | (다음) |
| 6 | **송유빈** (Song Yubin) | 16세 첫사랑, Phase 4-5 | ⏳ pending | ⏳ pending | (다음) |
| 7 | **이태율** (Lee Taeyul) | 윤리적 거울, Phase 5-6 | ⏳ pending | ⏳ pending | (다음) |

## 상태 정의

- **pending** — 아직 prompt 안 만듦 또는 시트 안 받음
- **prompt-ready** — `.md` 파일에 GPT Image 2 paste-ready prompt 저장됨
- **sheet-generated** — 사용자가 paste → 시트 이미지 받음 (저장 위치 별도 기록)
- **calibrating** — 시트 받았지만 톤·디테일 보정 필요 (prompt v2 작성 중)
- **locked** — 시트 face-lock 완료, 후속 production bible reference 로 사용 가능

## 진행 룰

1. **순서 엄수** — 위 우선순위대로. 1번(윤서준) sheet locked 되어야 2번 prompt 진행
2. **톤 일관 강제** — 첫 sheet (윤서준) 가 baseline. 나머지 6명은 IDENTICAL art style (matching set)
3. **calibration 피드백 반영** — 첫 sheet 받고 톤 안 맞으면 v2 작성. 그 calibration 결과를 다음 캐릭터 prompt 에 자동 적용
4. **저장 위치 기록** — 시트 이미지 받으면 본 README 의 "Sheet 상태" 컬럼에 위치 적기

## 참조

- TROY 캐논: `canon/characters.md` (각 캐릭터 정의 baseline)
- 음악적 인상어: `canon/characters.md §5 Character Design Rule`
- Phase 팔레트: `canon/style.md §5 seasonal grammar`
- Production bible skill: `.claude/skills/troy-production-bible-builder/SKILL.md`
- 5 메커니즘 M1-M5: `.claude/skills/troy-production-bible-builder/SKILL.md` 상단

## Z 갈래 결정 (2026-04-30)

음악·MV 비주얼 모드 = Modern Korean cinematic illustration (도구: GPT Image 2 + Seedance 2.0 + Suno).
소설 prose 톤은 그대로 유지 (canon/style.md §6 의 cinematic live-action 은 prose 에만 적용).
별도 문서로 `canon/style.md §6` 갱신 예정 (다음 turn).
