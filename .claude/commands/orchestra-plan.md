---
description: 트랙 초기 기획(또는 재설계) — 전문가 5팀 병렬 의견 수렴 → 통합 콘티 + 실행 계획 생성
argument-hint: "<track_id>"
---

> 🔁 **TROY mode**: 본 명령의 `briefs/songs/${TRACK}_*.md` 는 oddengine 전용. TROY 는 `ops/E###_song_brief.md` 또는 `export/music/arin_album_vol1_*/suno_copy_cards/` 사용. 트랙 ID 는 TROY 12 트랙 ID(E054/E113/E050/E011/E030/E118/E014/E022/E034/E064/E094/E108). 매핑은 `CLAUDE.md §13` 참조.

# /orchestra-plan — Orchestra Planning Workflow

새 트랙 **기획** 또는 기존 트랙 **재설계**를 위해 L2 팀장 5명의 의견을 수렴해 **통합 콘티 + 실행 계획**까지 만드는 스킬.

차이점 요약:
- `/orchestra` = Conductor 역할 문서 (원칙)
- `/orchestra-audit` = 이미 만든 것 **점검** (READ-ONLY)
- `/orchestra-plan` = 아직 없는 것 **설계** ← 이 스킬 (WRITE)

---

## 실행 구성도

```
 /orchestra-plan <track_id>
 ├── (1) 사전 체크 — brief 존재 + 대시보드 canonical identity 확인
 ├── (2) Brief Intake — STARTER_PACK + SUNO_PASTE 읽어 Conductor가 컨텍스트 요약
 ├── (3) 팀장 5명 병렬 설계 위임 (Task × 5, 같은 메시지)
 │        ├─ creative   → 스토리 아크 + 훅 포인트 + 22컷 비트 설계
 │        ├─ visual     → 캐릭터 시트 초안 + 스타일 앵커 + 조명 레퍼런스
 │        ├─ production → 예산 / BPM↔cut timing / 썸네일 전략 / 발매 일정
 │        ├─ tech       → 엔진 라우팅 / aspect 세트 / 파이프라인 리스크
 │        └─ qa         → 단계별 게이트 기준 + 일관성 체크리스트
 ├── (4) 충돌 조정 — 공간·톤·캐릭터 교차 이슈를 Conductor가 결정
 ├── (5) Conductor 통합 — 콘티 YAML + 실행 계획 MD 초안 작성
 └── (6) 저장 — 3개 파일 출력
```

L3 전문가 직접 지시 금지. 팀장만 호출하면 팀장이 L3 역할을 겸임해 반환한다.

---

## 단계별 실행 규칙

### 1. 사전 체크 (Bash)

```bash
TRACK="$1"
grep -n "$TRACK" 10_KR/KR_CHANNEL_DASHBOARD.md | head -5
ls briefs/songs/${TRACK}_*.md
ls outputs/conti/${TRACK}_*.yaml 2>/dev/null
curl -sf http://localhost:8899/api/tracks/$TRACK | python -m json.tool | head -10
```

- 대시보드에 트랙이 없으면 **중단하고 사용자에게 확인** 요청 (title · market · 목적).
- 브리프가 없으면 `briefs/songs/<TRACK>_STARTER_PACK.md` 를 새로 작성하도록 먼저 요청 (프롬프트 템플릿 제공).
- 기존 콘티 버전(`_v1.yaml` ~ `_vN.yaml`)을 감지하면 **다음 버전 번호를 결정**하고 "재설계"로 플래그.

### 2. Brief Intake (Conductor)

Conductor가 STARTER_PACK + SUNO_PASTE를 직접 읽고 **200 단어 이내** 컨텍스트 요약 작성. 요약에 반드시 포함:
- canonical title (대시보드 기준)
- emotional thesis 1줄
- hook lock 키워드
- 아직 미결정 요소 (공간/캐릭터 수/스토리 아크 등)

이 요약을 그대로 5개 Task 프롬프트에 공통 컨텍스트로 주입한다.

### 3. 팀장 5명 병렬 위임

**한 메시지에 `Task` 호출 5개**. subagent_type: `general-purpose`.

각 Task 공통 프롬프트 골격:

```
당신은 Odd Engine L2 {TEAM} 팀장입니다.
.claude/teams/{TEAM}/team_lead.md + 팀 내 L3 전문가들 역할을 겸임해
트랙 <TRACK_ID> 를 설계하세요.

### 트랙 컨텍스트 (Conductor 요약)
{CONDUCTOR_SUMMARY}

### 읽을 레퍼런스
- briefs/songs/<TRACK>_STARTER_PACK.md
- briefs/songs/<TRACK>_SUNO_PASTE_PACK.md
- briefs/system/MV_COMPOSITION_FORMULA.md
- (재설계라면) outputs/conti/<TRACK>_v<prev>.yaml

### 반환 구조 (JSON-like)
{
  "team": "{TEAM}",
  "proposal": {
    // 팀 고유 섹션 — 아래 "팀별 요구 필드" 참고
  },
  "risks": ["<리스크 한 줄>", ...],
  "dependencies_on": ["<다른 팀 결정 필요 항목>", ...],
  "one_line_summary": "<팀 관점의 핵심 주장 한 줄>"
}
```

#### 팀별 요구 필드 (`proposal` 섹션)

| 팀 | 필수 필드 |
|----|----------|
| creative | `story_arc` (3막 or loop), `hook_points` (컷 번호 + 이유), `shot_beats` (22컷 story_beat 초안), `emotional_anchor_cuts` (성숙 톤 분리 컷) |
| visual | `characters` (이름/수/톤), `style_anchor` (프롬프트 앵커 문장), `lighting_refs`, `sheet_plan` (시트 종류 × 컷수), `color_palette` |
| production | `budget_estimate_usd`, `bpm_cut_map` (비트 ↔ 컷 매칭), `thumbnail_strategy` (훅 축 컷 + 플랫폼), `release_window` |
| tech | `engine_route` (stills/characters/videos 각각 엔진), `aspect_matrix`, `pipeline_risks`, `fallback_plan` |
| qa | `gate_checklist` (stage × PASS 기준), `consistency_checks`, `blocker_signals` |

### 4. 충돌 조정 (Conductor)

팀별 `proposal` + `dependencies_on`을 표로 정리. 충돌 범주 4가지:
- **공간 충돌** — creative의 hero 공간 vs visual의 배경 지정
- **톤 충돌** — creative의 emotional_anchor vs visual의 style_anchor
- **예산/기술 충돌** — production의 영상 컷수 vs tech의 Veo 할당량
- **일정 충돌** — production의 release_window vs qa의 게이트 기간

각 충돌은 **Conductor 단독 결정**(증거 1줄 + 결정 1줄)으로 해결. 팀에 재질의 금지.

### 5. 통합 산출 (3개 파일 생성)

#### (A) 콘티 YAML — `outputs/conti/<TRACK>_v<N>.yaml`
기존 v7 템플릿 구조 준수:
```yaml
track_id: <TRACK>
title: <저승DM>
conti_version: <N>
composition_type: TYPE_A | TYPE_B
composition_name: <VIBE_LOOP | NARRATIVE>
decision_note: "<Conductor 선택 근거 1줄>"
total_shots: <N>
total_duration_seconds: <N>
continuity_anchors: { ... }
shots:
  - shot_id: S01
    section: intro
    time_start: "0:00"
    time_end: "0:08"
    screen_duration: 8
    tag: BG | FEMALE | FX
    loop_family: <A0|B1|C1|...>
    story_beat: "..."
    tool: <Nano Banana | Imagen 4>
```

#### (B) 실행 계획 — `outputs/conti/<TRACK>_v<N>_execution_plan.md`
섹션 고정:
1. 요약 (Conductor)
2. Phase A: Preflight (캐릭터 시트 재/신규 생성)
3. Phase B: Stills (컷별 프롬프트 매핑)
4. Phase C: Videos (img2vid 라우팅)
5. Phase D: 편집 (Remotion)
6. Phase E: QA + 퍼블리시
7. 예산 · 리스크 · 게이트 체크포인트

#### (C) 감사 로그 — `outputs/audits/ORCHESTRA_PLAN_<TRACK>_<DATE>.md`
- 참여 전문가 표 (team / L3 포함 / task-id / one_line_summary)
- 팀별 proposal 요약 (원문 일부 인용)
- 충돌 조정 기록
- Conductor 최종 결정

### 6. 마무리 응답

사용자 응답은 **3개 파일 경로 마크다운 링크** + **한 줄 요약** + **다음 액션 1줄**만. 재요약 금지.

---

## 사용 예시

```
/orchestra-plan KR-01     # 저승DM 재설계 (v8 등 다음 버전으로)
/orchestra-plan KR-02     # 도깨비 편의점 초기 기획
/orchestra-plan KR-03     # 새 트랙 (브리프 먼저 요청)
```

## 금기 사항
- ❌ L3 직접 지시 (팀장만)
- ❌ 순차 Task (5개 병렬 필수)
- ❌ 팀에 재질의 루프 (충돌은 Conductor가 단독 결정)
- ❌ 콘티 파일에 이전 버전 내용 **복붙** (반드시 컨텍스트 재검토 후 새로 작성)
- ❌ "대충 BPM 92" 같은 추정 — 수치는 brief/STARTER_PACK에서 인용
