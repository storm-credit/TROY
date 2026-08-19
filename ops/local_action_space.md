# Local Action Space Map — TROY

> **역할**: `minimum-action-agent-os` 어댑터. "어떻게 일할지"만 규정한다.
> **도메인 정본이 아니다.** 작품 내용의 정본은 언제나 `canon/`, `ops/prose_house_bible.md`, `ops/ten_point_upgrade_plan_2026_04_11.md`, 원고다.
> OS 원문: `storm-credit/minimum-action-agent-os` (`AGENT_OS_SPEC.md`, `rules/local-action-space.md`). **본 문서에 OS 전문을 복사하지 않는다.**

## 1. 불변 조건 (요약)

각 reasoning node가 **한 번에 직접 선택할 수 있는** 행동(서브에이전트·툴·MCP 액션·스킬·기타 callable)을 기본 **5개 이하**로 유지한다.

- 이는 **로컬 제한**이다. 전체 Agent 총수에는 제한이 없다 (TROY 현행 **27명** = Conductor 1 + 팀장 5 + 전문가 21 유지).
  - ⚠️ `.claude/roster.yaml`의 `summary:` 블록은 `on_demand_specialists: 3` / `grand_total_including_conductor: 26`으로 적혀 있으나, 실제 명단은 on-demand 4명(vfx-engineer, code-reviewer, visual-qa, security) / 총 27명이다. **기존 구조는 손대지 않는다** — 여기 기록만 남기고 수정 여부는 작성자 판단에 맡긴다.
- 초과 시 조치 순서: ① 불필요한 툴 제거 → ② Skill로 묶기 → ③ 역할 분리 → ④ Router 계층화.
- 그래도 초과가 필요하면 §4에 사유와 트레이드오프를 기록한다.

## 2. Audit — 2026-08-06

| Node | 직접 보이는 Agent | Tool | Skill | 기타 callable | 총계 | 판정 |
|---|---:|---:|---:|---:|---:|---|
| **A. Main session** (레포 루트) | 0 | (harness 내장) | 14 | 슬래시 22 + MCP 서버 3 | **39+** | **REVIEW** |
| B. L1 Conductor (`/orchestra`) | 5 (팀장) | 0 | 0 | 0 | **5** | PASS |
| C. L2 creative | 4 | 0 | 0 | 0 | **4** | PASS |
| D. L2 visual | 5 | 0 | 0 | 0 | **5** | PASS |
| E. L2 tech | 5 (vfx=on-demand) | 0 | 0 | 0 | **5** | PASS |
| F. L2 production | 3 | 0 | 0 | 0 | **3** | PASS |
| G. L2 qa | 4 | 0 | 0 | 0 | **4** | PASS |
| H. 낭독 검수 노드 (현행 주작업) | 0 | Read/Write/Glob | 1 (`troy-read-aloud-reviewer`) | 0 | **4** | PASS |
| I. `/orchestra-audit` 팬아웃 | 5 → 각 팀장이 하위 분배 | 0 | 0 | 0 | **5** | PASS |

**결론: 9개 노드 중 8개 PASS. REVIEW는 Node A 하나.**

- L1→L2→L3 3-tier(`.claude/roster.yaml`)는 이미 OS의 "hierarchy로 확장" 패턴을 만족한다. **손대지 않는다.**
- Node H는 8축 절차를 스킬 하나로 묶어 둔 상태 = 이미 ②Skill 묶기가 적용됨. **손대지 않는다.**
  - **계상 근거**: 게이트(`Test-EpisodeLengthGate`/`Test-ForbiddenPatterns`)·번들 재생성·커밋은 `troy-read-aloud-reviewer` SKILL 3단계 **내부 절차**이므로 peer로 중복 계상하지 않는다(OS `rules/local-action-space.md`: "Do not double-count internal implementation details hidden behind one coherent action"). 남는 peer 선택지는 파일 프리미티브 3 + 스킬 1 = 4.
- Node A만 flat toolbelt(음악·MV 트랙 자산 36+개가 소설 작업과 동일 평면에 노출).

## 3. Node A 조치 — Track Router (④ 계층화, 문서 계약)

OS는 markdown/config-first다(SPEC §10: 런타임 오케스트레이터를 새로 만들지 않는다). 따라서 물리적 삭제 대신 **진입 라우팅 계약**으로 경계를 만든다. 세션 시작 시 Main은 아래 **4개 트랙 중 하나만** 선택하고, 그 트랙의 자산만 활성으로 취급한다.

| Track | 활성 자산 (이 트랙에서만 직접 선택) | 정본 |
|---|---|---|
| **T1 소설 (기본)** | `troy-read-aloud-reviewer` 스킬 + 파일 프리미티브(Read/Write/Glob) = **4**. 게이트(`Test-EpisodeLengthGate`/`Test-ForbiddenPatterns`)·번들 재생성·커밋은 **스킬 3단계 내부 절차**이므로 peer로 세지 않는다(§2 Node H 계상 근거와 동일). 스킬 밖에서 단독 게이트만 돌릴 때는 그 호출 1개가 peer가 된다. | `canon/`, `manuscript/`, `ops/prose_house_bible.md` |
| **T2 음악** | `suno-prompt-director` 스킬 · suno MCP · `ops/E###_song_brief.md` | `export/music/...master_generation_board.md` |
| **T3 영상/MV** | `video-orchestrator` 스킬(하위 veo/kling/seedance/sora/runway를 내부 라우팅) · `ops/E###_visual_cut_list.md` | `export/media_modules/09_MODULE_ROUTING_BOARD.md` |
| **T4 총괄/감사** | `/orchestra` · `/orchestra-audit` · `/status` | `.claude/roster.yaml` |

**규칙**
1. 기본 트랙은 **T1**이다 (`CLAUDE.md §1` 소설 우선). 사용자가 명시하지 않으면 T1로 간주한다.
2. 다른 트랙 자산은 **삭제되지 않았고**, 사용자가 그 트랙을 지정하면 즉시 활성화된다.
3. T3의 개별 모델 디렉터(veo/kling/seedance/sora/runway/kling-multishot/runway-character/seedance-continuity)는 **`video-orchestrator`를 통해서만** 선택한다. 이들을 Main에 peer로 노출하지 않는다.
4. 트랙 전환은 명시적으로 보고한다(§5 이탈 로그 대상).

이 계약을 적용하면 Main의 직접 선택지는 **트랙 4개** → 트랙 내부 **≤5**로 유지된다.

## 4. 예외 기록

- **없음.** 현재 5 초과를 유지해야 하는 노드는 없다.

## 5. 기존 작업규칙과의 관계 (중복 생성 금지)

OS 워크플로 프리미티브는 **이미 TROY에 존재**한다. 새로 만들지 않고 매핑만 한다.

| OS 프리미티브 | TROY 기존 위치 | 상태 |
|---|---|---|
| Intent Interview | `CLAUDE.md §14-4` 나를(저자) 인터뷰 | 보존 |
| Blindspot Scan | `CLAUDE.md §14-1` 맹점 훑기 / `§18` 착수 전 캐논 스윕 | 보존 |
| Preflight Trap Check | `CLAUDE.md §14-2` 함정 우선 제시 | 보존 |
| Four Alternatives | `CLAUDE.md §14-3` 시안 4개 | 보존 |
| Exemplar Research | `CLAUDE.md §14-5` 본보기(참고작) / `prose_house_bible §9` 문체 앵커 | 보존 |
| Meta Prompting | `CLAUDE.md §17` | 보존 |
| Independent Evaluation | `.claude/teams/qa/*` · `/orchestra-audit` · 블라인드 콜드리드 선례 | 보존 (§6 참조) |
| Harness / Golden Case | `tools/Test-EpisodeLengthGate.ps1`, `Test-ForbiddenPatterns.ps1`, `New-RangeGateReport.ps1`, `ops/orchestra_harness_contract.md` | 보존 |
| State / Canon Update | `CLAUDE.md §16` · 메모리 `troy-project-state.md` · `ops/change_control.md` | 보존 |
| Plan Drift Log | `CLAUDE.md §15` 이탈 로그 | 보존 |

## 6. 독립 Critic

TROY는 QA 팀(L2)과 다레인 감사로 독립 평가를 이미 운영한다. **중복 에이전트를 새로 만들지 않는다.**
OS 플러그인 설치 시에는 `minimum-action-agent-os:independent-critic`을 *추가 옵션*으로 쓸 수 있다(빌더 근거를 넘기지 말고 산출물+수용 기준만 전달).

## 7. 재감사 트리거

다음 중 하나가 발생하면 §2 표를 갱신한다.

- 슬래시 커맨드/스킬/MCP 서버가 새로 추가될 때
- `.claude/roster.yaml`의 팀 구성이 바뀔 때 (특히 한 팀장의 하위가 6명 이상이 될 때)
- 새 트랙이 생길 때
