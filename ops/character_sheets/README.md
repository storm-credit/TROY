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
| 2 | **지아린** (Ji Arin) | 메인 여주, vol1 가창자 | ✅ prompt-ready (v2) | ⚠️ v1 calibrating · v2 pending | `ji_arin_sheet_v2.md` |
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

## Calibration History

### 지아린 v1 → v2 (2026-04-30)

**v1 sheet 결과 평가** (사용자 보고): "너무 밋밋하고 수수해, 청바지 때문인가, 볼륨감이 없어"

**오케스트라 5팀 점검 결과** — v1 캐논 lock 위반 3건:
1. ❌ **밴드 보컬 visible trait** (canon §3) — 무대 의상이 sub
2. ❌ **image keyword "warmth"** (canon §3) — cream 위주, 노란/코랄 약함
3. ❌ **밝고 사교적 surface** (canon §3) — baseline 차분 과함

**캐논 사전 read 추가 발견** (E002 §46, §145, E003 §15, §32, §69, §90, face_lock_harness §4, §7):
1. ⭐ **"옅은 노란 가디건"** lock (E002 §46) — v1 의 cream + 청바지가 가장 큰 미스
2. ⭐ **"긴 머리"** lock (E002 §46) — v1 의 shoulder-length 보다 길어야
3. ⭐ **기타 케이스 signature prop** (E003 §15) — v1 누락
4. **expression set 4 canonical** (face_lock §4): calm / hidden thought / quiet selfhood / private pause — v1 6개와 미스매치
5. **outfit anchor 3** (face_lock §4): music room / campus walking ⭐MAIN / private room
6. **신체 습관**: 발끝 박자 (E003 §15), 무심코 흥얼 (E003 §90), 부름 직전 (E003 §69)
7. **anti-rule** (face_lock §7): NO performance flex, subject-not-object, NO possessive romance pose

**v2 통합 보정 10개**: 위 발견 모두 prompt 에 lock. Marketing 의 "강한 무대 hook" 권고는 face_lock §7 위반이라 부분 reject — 대신 "옅은 노란빛 = 유일한 발신자" 캐논 lock 이 진짜 hook.

**v2 산출 권장 위치**: `export/music/character_lock_pack/ji_arin_sheet_v2.png` (face_lock_harness §10 표준 위치)
