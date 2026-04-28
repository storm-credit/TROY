---
description: Orchestra 전체 감사 — L2 팀장 5명 병렬 실행 → L3 전문가 17명 점검 → 통합 리포트 저장
argument-hint: "[track_id]"
---

# /orchestra-audit — Orchestra Full Audit

L1 Conductor가 **전 팀(5)·전 전문가(17)** 를 한 번에 점검하는 스킬.
기본 대상은 `$1` 트랙 (생략 시 `KR-01`). 전체 프로젝트는 `all`.

---

## 실행 구성도

```
 /orchestra-audit [track_id]
 ├── (1) 사전 체크 (Bash)        ── 3초
 ├── (2) 팀장 5명 병렬 위임 (Task × 5, 같은 메시지)  ── 핵심
 │        ├─ creative  → story-director / lyrics-director / mv-director
 │        ├─ visual    → art-director / character-designer / motion-director / prompt-engineer
 │        ├─ tech      → backend-engineer / frontend-engineer / devops / vfx-engineer*
 │        ├─ production→ producer / sound-sync / marketing-director*
 │        └─ qa        → visual-qa / code-reviewer / security*
 ├── (3) 결과 표준화 (PASS / WARN / FAIL + 근거 1줄 + 액션 1줄)
 ├── (4) Conductor 통합 리포트 작성
 └── (5) outputs/audits/ORCHESTRA_AUDIT_<date>.md 저장
```

L3 전문가에게 직접 지시 금지 — **팀장만** 호출한다. 팀장이 자기 팀 전문가 역할을 겸임하며 결과를 모아 반환한다.

---

## 단계별 실행 규칙

### 1. 사전 체크 (Bash)

아래를 **한 번에** 실행하고 결과를 요약 저장:

```bash
docker ps --filter "name=oddengine" --format "{{.Names}} {{.Status}}"
curl -sf http://localhost:8899/api/health
docker exec oddengine-backend env | grep -iE "vertex|google_app"
git -C "C:/Users/Storm Credit/Desktop/Music/oddengine" status --short | head -20
git -C "C:/Users/Storm Credit/Desktop/Music/oddengine" log --oneline -5
```

실패(Docker down, API 404, Vertex 미설정) 시 **즉시 리포트에 🔴 BLOCKER로 기록하고 2단계 진행**. 중단 금지.

### 2. 팀장 5명 병렬 위임

**한 메시지 안에 `Task` 호출 5개**를 동시에 쏜다 (의존성 없음).

각 Task 프롬프트 템플릿 (팀 이름만 바꿔 사용):

```
당신은 Odd Engine L2 {TEAM} 팀장입니다.
.claude/teams/{TEAM}/team_lead.md + .claude/teams/{TEAM}/*.md 을 읽고
팀 소속 L3 전문가 전원의 역할로 {TARGET}을 점검하세요.

점검 대상:
- TARGET = $1 (또는 "all")
- 관련 아티팩트: briefs/, outputs/conti/, outputs/characters/, web/, frontend/

각 전문가별 출력 형식(JSON-like):
{
  "expert": "<expert-name>",
  "status": "PASS" | "WARN" | "FAIL",
  "evidence": "<한 줄 근거, 파일경로:라인 포함 권장>",
  "action": "<다음 액션 1줄, 없으면 빈 문자열>"
}

마지막에 팀 요약 1줄과 우선순위 액션 top 3 반환.
점검만 하고 코드/파일은 수정하지 마세요.
```

Task subagent_type: `general-purpose` (병렬 실행).
5개 Task는 **같은 assistant 메시지에서 병렬 호출**이 원칙 — 순차 호출 금지.

### 3. 결과 표준화

각 팀장 응답을 아래 표로 정규화:

| team | expert | status | evidence | action |
|------|--------|--------|----------|--------|
| creative | story-director | PASS | outputs/conti/KR-01_conti_v7.yaml:14 (22컷 확인) | — |
| visual | art-director | WARN | 캐릭터 시트 라이팅 일관성 부족 | S08 히어로 컷 재조명 |
| … | … | … | … | … |

`WARN`/`FAIL`은 **반드시 action 칸을 채운다**. 비면 리포트 반려하고 팀장에 재질의.

### 4. 통합 리포트 (Conductor 작성)

마크다운 골격:

```md
# ORCHESTRA AUDIT — <TRACK> — <YYYY-MM-DD HH:MM>

## Executive Summary
- 총 전문가 17명 / PASS N / WARN M / FAIL K / SKIPPED S
- BLOCKER: <있으면 bullet>
- GO / NO-GO: <최종 판단 한 줄>

## Pre-flight
- Docker: …
- API health: …
- Vertex: …
- Git: <미커밋 M개, HEAD=…>

## Team Reports
### Creative (L2)
<표>
**팀 요약:** …
**Top actions:** …

### Visual (L2)
…

### Tech (L2)
…

### Production (L2)
…

### QA (L2)
…

## Conductor Decision
- 즉시 조치: …
- 다음 게이트까지: …
- 파킹(나중): …
```

### 5. 저장

```bash
mkdir -p outputs/audits
# 파일명: ORCHESTRA_AUDIT_<TRACK>_<YYYYMMDD-HHMM>.md
```

저장 후 **파일 경로만 마크다운 링크로 한 줄 응답**. 장황한 재요약 금지 — 리포트 파일이 정답이다.

---

## 사용 예시

```
/orchestra-audit KR-01            # 저승DM 트랙 전면 점검
/orchestra-audit KR-02            # 도깨비 편의점 트랙 점검
/orchestra-audit all              # 트랙 무관 인프라/파이프라인 전역 점검
```

## 금기 사항

- ❌ L3 전문가에게 직접 Task 쏘기 (팀장만 경유)
- ❌ 순차 Task 호출 (반드시 5개 병렬)
- ❌ 점검 중 파일 수정 (리드온리)
- ❌ "대충 OK" 같은 애매한 status — 반드시 PASS/WARN/FAIL 3택
- ❌ WARN/FAIL 인데 action 누락
