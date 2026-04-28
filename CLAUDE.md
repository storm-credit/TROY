# TROY — Claude Code Operating Manual

> 「너라는 운율」 (You are the Rhyme) — 120화 시리얼 소설 + 화당 1곡 Suno + 화당 1 MV 패킷
> 본 문서는 Claude Code 하네스가 TROY 레포에서 어떻게 동작해야 하는지를 정의한다.

## 1. 무엇이 진실인가 (Source of Truth)

**캐논이 모든 것의 기준이다.** 음악·MV·미디어는 본편 캐논의 다운스트림이다.

- 시리즈 정체성: `canon/series.md`
- 세계관 규칙: `canon/world.md` (운율의 법칙, 침묵의 완성, 페이드 아크)
- 인물 락: `canon/characters.md` (윤서준 / 지아린 / 조연)
- 스타일: `canon/style.md` (시네마틱 라이브액션 베이스, 애니 비-기본)
- 모티프 원장: `canon/motif_ledger.md`
- 락 매트릭스: `canon/canon_lock_matrix.md`
- 미해결 질문: `canon/open_questions.md`

**노래·MV는 본편 캐논을 새로 만들면 안 된다.** (`series.md §10 Production Rule`)

## 2. Orchestra 시스템 (3-tier)

```
L1  CONDUCTOR (.claude/commands/orchestra.md)
    │
    ├── L2 CREATIVE     → .claude/teams/creative/team_lead.md
    │   └── story-director, lyrics-director, mv-director, subtitle-translator
    │
    ├── L2 VISUAL       → .claude/teams/visual/team_lead.md
    │   └── character-designer, art-director, motion-director, prompt-engineer, prompt-curator
    │
    ├── L2 TECH         → .claude/teams/tech/team_lead.md   (TROY-adapted: 엔진 문서 인프라)
    │   └── backend-engineer, frontend-engineer, devops, [vfx-engineer*], clip-matcher
    │
    ├── L2 PRODUCTION   → .claude/teams/production/team_lead.md
    │   └── producer, sound-sync, marketing-director
    │
    └── L2 QA           → .claude/teams/qa/team_lead.md
        └── [code-reviewer*], [visual-qa*], [security*], manifest-validator
```

전체 명단: `.claude/roster.yaml`
* = on-demand (필요시만)

### 위임 규칙 (절대 준수)
- ❌ Conductor가 L3 전문가에게 직접 지시 금지
- ✅ Conductor → 팀장 → 팀장이 L3에 분배
- ❌ 팀장이 타팀 L3 직접 호출 금지 (반드시 팀장끼리 협의)
- ✅ 최종 출시 승인은 Conductor 전용

## 3. TROY ↔ ODD ENGINE 차이점 (이식 시 주의)

본 `.claude/` 시스템은 ODD ENGINE에서 이식됨. 다음 차이를 항상 기억:

| 항목 | ODD ENGINE | TROY |
|---|---|---|
| 트랙 ID | `KR-01` ~ `KR-10` | `E054, E113, E050, E011, E030, E118, E014, E022, E034, E064, E094, E108` (12) |
| 세계관 | K-ghost (저승사자/도깨비/구미호 등) | 공감각 캠퍼스 로맨스 (윤서준×지아린) |
| 코드베이스 | Docker + Next.js + Vertex AI 백엔드 | 마크다운 캐논/원고/엔진 문서 (코드 없음) |
| 가수 | Suno 외부 가창 | **인-월드 아린** (캐릭터가 작중에서 부르는 노래) |
| 비주얼 베이스 | 자유 (애니/실사 혼합 가능) | **시네마틱 라이브액션** (애니는 회상·내청·상징 인서트만) |
| 이식된 skill 중 TROY 용어 변환 필요 | `oddengine-music-to-storyboard`, `oddengine-shot-builder`, `suno-prompt-director` | 호출 시 본 CLAUDE.md `§4 트랙 매핑` 참조 |

## 4. 트랙 매핑 (Skill 호출 시 사용)

ODD ENGINE 컨텍스트로 작성된 skill (`oddengine-*`, `suno-prompt-director`)을 호출할 때, KR-XX 참조는 다음과 같이 치환:

| TROY ID | 제목 | 역할 | 패킷 위치 |
|---|---|---|---|
| E054 | 밝은 창 | title-track candidate | `export/music/arin_album_vol1_pilot/` |
| E113 | 나를 잃지 않는 일 | selfhood declaration | `export/music/arin_album_vol1_pilot/` |
| E050 | 접힌 문장 | private diary | `export/music/arin_album_vol1_pilot/` |
| E011 | 남은 소리 | debut spark | `export/music/arin_album_vol1_second_pass/` |
| E030 | 천천히 열어 둔 문 | careful yes | `export/music/arin_album_vol1_second_pass/` |
| E118 | 같은 말을 하던 저녁 | dignified parting | `export/music/arin_album_vol1_second_pass/` |
| E014 | 이름 없는 노래 | shy conversation | `export/music/arin_album_vol1_third_pass/` |
| E022 | 없는 시간에도 | voice-memory | `export/music/arin_album_vol1_third_pass/` |
| E034 | 유리 뒤의 여름 | withdrawal | `export/music/arin_album_vol1_third_pass/` |
| E064 | 흔들리는 운율 | pre-loss instability | `export/music/arin_album_vol1_fourth_pass/` |
| E094 | 끝까지 들은 말 | correction / asking | `export/music/arin_album_vol1_fourth_pass/` |
| E108 | 정상인 불안 | livable uncertainty | `export/music/arin_album_vol1_fourth_pass/` |

마스터 보드: `export/music/arin_album_vol1_master_generation_board.md`

## 5. 미디어 모듈 (이미 존재 — 새로 만들지 말 것)

`export/media_modules/` 안에 10개 모듈이 이미 작성됨:
- 01 SUNO / 02 MIDJOURNEY / 03 NANO BANANA / 04 IMAGEN / 05 KLING I2V
- 06 HIGGSFIELD MOTION / 07 VEO CINEMATIC / 08 SORA STORYBOARD
- 09 MODULE ROUTING BOARD / 10 EXTERNAL ASSET INTAKE

**.claude/skills/** 의 prompt director 들은 위 모듈의 **호출 인터페이스**다.
모듈 정의는 `export/media_modules/`에서, 호출 인터페이스는 `.claude/skills/`에서.

## 6. 엔진 문서 (ops/) 와의 관계

TROY엔 이미 자체 "엔진 문서 시스템" 이 있음:
- `ops/orchestra_engine.md` — 디렉터/제어 레이어
- `ops/orchestra_harness_contract.md` — 하네스 계약
- `ops/troy_engine_method.md` — 엔딩-우선 역설계 작법
- `ops/music_engine.md`, `ops/image_engine.md`, `ops/video_engine.md` — 서브 엔진
- `ops/episode_harness_template.md` — 에피소드 단위 하네스
- `ops/episode_packet_index_001_120.md` — 12개 인덱스 (10화 단위)

**`.claude/commands/orchestra.md` (이식본)와 `ops/orchestra_engine.md` (TROY 원본)는 서로 보완**한다:
- `.claude/commands/`: Claude Code 슬래시 진입점 (실행)
- `ops/`: 엔진 정책·계약 정의 (정책)

충돌 시 `ops/` 가 우선. `.claude/commands/`는 `ops/` 정책의 실행 어댑터.

## 7. 변경 통제 (Change Control)

`README.md` 와 `ops/change_control.md` 의 룰을 따른다:
- locked decisions 는 함부로 바꾸지 않음
- 새 아이디어는 `locked` / `parked` / `experimental` 로 분류
- 캐논 변경은 orchestra Conductor 의 승인 사항

## 8. 생성 작업 시 강제 체크리스트

음악·이미지·영상 어떤 것이든 생성 전:
1. **캐논 위반 없는가** — 인물 외형, 세계관 규칙, 스타일 락
2. **계절 팔레트 일치** — Phase 1-6 의 시각/음악 톤
3. **트랙 ID 정합성** — `master_generation_board.md` 와 일치
4. **미디어 모듈 라우팅** — `09_MODULE_ROUTING_BOARD.md` 따라 적합한 도구 선택
5. **인-월드 룰** — 아린의 노래는 그녀가 작중에서 실제로 부르는 곡 (Suno 외주가 아님)

## 9. 자주 쓰는 슬래시

기획·운영:
- `/orchestra` — L1 점검·총괄
- `/orchestra-plan` — 트랙 초기 기획 (5팀 병렬 의견)
- `/orchestra-audit` — 전체 감사 (5 팀장 → 17 전문가)
- `/status` — 시스템 상태
- `/daily` — 오늘의 제작 계획

트랙 단위:
- `/check-track` — 단일 트랙 헬스체크
- `/conti` — 콘티 생성·리뷰
- `/generate-mv` — 트랙 풀 MV 파이프라인
- `/advance` — 다음 단계로

전문가 직접 호출 (필요시):
- `/lyrics-director`, `/mv-director`, `/story-director`
- `/character-designer`, `/art-director`, `/motion-director`, `/prompt-engineer`
- `/sound-sync`, `/producer`, `/marketing-director`
- `/tech-director`

## 10. 외부 소스

활성 원천 자료는 레포 외부:
- `C:\Users\Storm Credit\Desktop\Novel\너라는운율\기획`
- `C:\Users\Storm Credit\Desktop\Novel\너라는운율\Obsidian`

`TROY/` 는 위 자료에서 만들어진 **컨트롤된 워킹 마스터**다. 미가공 드래프트를 직접 옮기지 않는다 (`README.md §Repo Rule`).

## 11. 사용자 시작 전 액션 (USER REPLACE)

`.claude/roster.yaml` 안에 ODD ENGINE 시절의 `gemini-*-vertex` 모델 지정 6라인이 남아있다. **음악·MV 생성 시작 전 사용자가 직접 교체.**

| L | Specialist | 현재 | 사용자 교체 후 |
|---:|---|---|---|
| 94 | character-designer | `gemini-2.5-pro-vertex` | ? |
| 98 | art-director | `gemini-2.5-pro-vertex` | ? |
| 102 | motion-director | `gemini-2.5-flash-vertex` | ? |
| 106 | prompt-engineer | `gemini-2.5-flash-vertex` | ? |
| 110 | prompt-curator | `gemini-2.5-flash-vertex` | ? |
| 171 | visual-qa | `gemini-2.5-pro-vertex` | ? |

> 라인 번호는 헤더 추가/수정 시 시프트될 수 있음. 안전한 검색 패턴: `default_model: gemini-`

상세 정책: `.claude/roster.yaml § VERTEX / DOCKER DEPENDENCY POLICY`

## 12. SUSPENDED 항목 (TROY 무관 — Conductor 자동 SKIP)

ODD ENGINE 백엔드(Docker / FastAPI / Vertex SA-key) 점검을 위해 작성된 다음 항목들은 TROY에선 **무의미**하다. Conductor가 호출 받았을 때 "TROY 무관 → SKIP" 으로 판정해야 한다.

- `.claude/teams/tech/backend-engineer.md` — FastAPI/Vertex 백엔드
- `.claude/teams/tech/devops.md` — Docker/SA 키 로테이션
- `.claude/teams/qa/security.md` 의 Vertex SA 키 항목 (일반 .env 보안 룰은 유효)
- `.claude/commands/orchestra-audit.md` 의 `docker exec oddengine-backend ...` 라인
- `.claude/commands/orchestra.md` 의 `Vertex AI 설정 (.env, vertex-sa-key.json)` 점검
- `.claude/commands/tech-director.md` 전체 — 새 `.claude/teams/tech/team_lead.md` (TROY-adapted) 로 **대체됨**
- `.claude/commands/producer.md` 및 `.claude/teams/production/producer.md` 의 "Vertex 일일 쿼터" → "외부 생성 도구 크레딧" 으로 일반화 해석
- `.claude/teams/production/team_lead.md` 의 "Vertex 쿼터 예산" → 동일 해석

> 이 파일들은 삭제하지 않음 — 추후 TROY가 자체 백엔드를 가지게 될 때 재활성 가능.

## 13. oddengine → TROY 경로 매핑 표 (Conductor 필수 참조)

`.claude/commands/` 9개 명령은 oddengine 백엔드 (FastAPI `:8899` / `scripts/*.py` / `outputs/*`) 를 전제로 작성됨. TROY 에선 다음과 같이 치환해 실행한다.

### 영향받는 commands (9개)
`/advance`, `/check-track`, `/conti`, `/daily`, `/generate-image`, `/generate-mv`, `/generate-video`, `/orchestra-audit`, `/orchestra-plan`
(나머지 13개 — `/orchestra`, `/status`, `/lyrics-director`, `/mv-director`, `/story-director`, `/character-designer`, `/art-director`, `/motion-director`, `/prompt-engineer`, `/sound-sync`, `/producer`, `/marketing-director`, `/tech-director` — 는 가이드·체크리스트 문서라 그대로 OK.)

### 경로 매핑

| oddengine 경로/호출 | TROY 대응 |
|---|---|
| `briefs/songs/{trackId}_*.md` | `ops/E###_song_brief.md` 또는 `export/music/arin_album_vol1_*/suno_copy_cards/` |
| `briefs/system/*` (시스템 가이드) | `ops/orchestra_engine.md`, `ops/troy_engine_method.md`, `ops/media_subengines.md` |
| `outputs/manifests/{trackId}.yaml` | `export/music/arin_album_vol1_master_generation_board.md` (보드형) + per-track `generation_card.md` |
| `outputs/conti/{trackId}_conti.{yaml,md}` | `ops/E###_visual_cut_list.md` (이미 E001~E120 존재) |
| `outputs/songs/{trackId}/*.mp3` | 외부 저장 (Suno 다운로드) → `export/music/.../external_audio_intake/` 로 인테이크 |
| `outputs/stills/{trackId}/` | `export/` 하위 (정확 경로는 `09_MODULE_ROUTING_BOARD.md` 따라) — TROY 는 MJ/Imagen/NB 외부 도구 사용 |
| `outputs/videos/{trackId}/` | `export/` 하위 — Kling/Higgsfield/Veo/Sora 외부 도구 결과 회수 |
| `outputs/registry/release_registry.yaml` | `master_generation_board.md` 가 동일 역할 |
| `outputs/audits/ORCHESTRA_AUDIT_<date>.md` | `ops/novel_orchestra_report_*.md`, `ops/orchestra_expert_audit_*.md`, `ops/novel_post_lock_expert_orchestra_audit.md` 형식 따라 작성 |
| `outputs/characters/{char_id}/v1/turnaround/t_01_front.png` | TROY 는 `ops/character_face_lock_harness.md` 가 lock 정의. 실제 시트 이미지는 `export/` 또는 외부 저장 |
| `scripts/advance_stage.py {trackId}` | N/A — `master_generation_board.md` 의 status 컬럼을 수동 갱신 |
| `scripts/validate_manifest.py {trackId}` | manifest-validator (`.claude/teams/qa/manifest-validator.md`) 가 수동 점검 |
| `scripts/daily_plan.py` | N/A — Conductor 가 `master_generation_board.md` 직접 읽고 plan 작성 |
| `curl localhost:8899/api/...` (전부) | N/A — TROY 엔 백엔드 없음. 해당 라인은 SKIP 하고 마크다운 파일을 직접 읽는 것으로 대체 |
| `docker exec oddengine-backend ...` | N/A — SKIP |
| `npx remotion render ...` | N/A — TROY 편집 스택 미정. 사용자 외부 NLE 결정 대기 |

### Conductor 호출 시 행동 룰
1. 위 oddengine 경로가 등장하면 → 매핑 표대로 TROY 경로로 치환해 실행
2. `localhost:8899/api/*`, `docker exec`, `python scripts/*` → 무시 (대체 액션 수행)
3. 트랙 ID 가 `KR-XX` 형태면 → TROY 12 트랙 (E054/E113/E050/E011/E030/E118/E014/E022/E034/E064/E094/E108) 중 하나로 정규화
4. 캐릭터 ID 가 K-ghost 크루(저승사자/도깨비 등)면 → `canon/characters.md` 의 윤서준/지아린/조연으로 정규화
5. 매핑 불가 항목은 사용자에 명시적으로 보고 후 SKIP

### 향후 작업 (PR 후보)
- commands 9개를 TROY 경로로 풀 재작성 (현재는 노트로 가이드 + 매핑 표 의존). 안정화되면 별도 PR 로 일괄 교체 권장.
