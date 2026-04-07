# TROY Orchestra Engine

## 1. Engine Purpose

이 문서는 `TROY 엔진`의 총괄 오케스트라 계층을 설명한다.

`너라는 운율`을 아이디어 묶음이 아니라 `지속적으로 생산 가능한 엔진`으로 운영하기 위한 총괄 규칙이다.

총괄 오케스트라의 역할:
- 결말을 보호한다
- 캐논을 기준으로 모든 파생물을 정렬한다
- 소설, 음악, MV를 하나의 감정 언어로 묶는다
- 중간 아이디어를 즉시 본체에 반영하지 않고 분류/통제한다

## 2. Five Core Engines

### Engine A. Canon Engine

관리 문서:
- `canon/series.md`
- `canon/world.md`
- `canon/characters.md`
- `canon/style.md`
- `canon/canon_lock_matrix.md`

역할:
- 작품의 정체성과 금지선을 고정한다
- 결말, 인물, 세계 규칙의 기준점을 유지한다
- 하위 엔진이 무엇을 해도 이 기준을 벗어나지 않게 한다

### Engine B. Structure Engine

관리 문서:
- `ops/master_plan_120.md`
- `ops/outline_skeleton_120.md`
- `ops/foreshadow_plan_120.md`
- `ops/movement_map_120.md`
- `ops/ending_reverse_design_120.md`
- `ops/relationship_thermometer_120.md`
- `ops/reveal_matrix_120.md`
- `ops/silence_transition_map.md`
- `ops/emotion_budget_120.md`
- `canon/motif_ledger.md`

역할:
- 120화 구조를 악장, 챕터, 마일스톤으로 유지한다
- 장기 복선의 심기-반향-회수를 관리한다
- 결말에서 역방향으로 앞부분을 설계한다
- 관계, 정보, 모티프, 침묵, 감정 고저를 별도 축으로 관리한다

### Engine C. Episode Harness Engine

관리 문서:
- `ops/episode_harness_template.md`
- 회차별 song/mv/scene sheet

역할:
- 한 화를 `story + song + mv + visual` 묶음으로 만든다
- 회차마다 빠짐없이 동일한 검수 항목을 통과시킨다
- 화 단위 생산물을 양산 가능한 포맷으로 유지한다

### Engine D. Audiovisual Engine

관리 문서:
- `ops/episode_song_system_120.md`
- `ops/episode_song_allocation_001_010.md`
- `ops/episode_song_prompt_sheet_001_010.md`
- `ops/final_song_brief.md`
- `ops/visual_bible.md`
- `ops/E001_visual_cut_list.md`
- `ops/E002_visual_cut_list.md`

역할:
- 1화 1곡 체계를 유지한다
- 소설 감정을 음악과 이미지로 번역한다
- 곡과 MV가 본문보다 앞서거나 어긋나지 않게 조절한다

### Engine E. Change Control Engine

관리 문서:
- `ops/change_control.md`
- `ops/external_rewrite_status.md`

역할:
- 새 아이디어를 `locked / parked / experimental`로 분류한다
- 본체 수정 전에 연쇄 영향 범위를 먼저 검사한다
- 외부 원본과 TROY 기준이 어긋나지 않게 추적한다

## 3. Production Flow

모든 회차는 아래 순서로 진행한다.

1. canon check
2. structure check
3. episode harness draft
4. song brief
5. mv cut list
6. prose draft
7. continuity pass
8. archive to canon-facing status log

## 4. Director Gates

총괄 오케스트라 승인 없이는 아래 항목을 바꾸지 않는다.

- ending model
- 120화 구조
- 6악장 체계
- 청취 소실 / 침묵의 완성 언어
- 주연 인물의 엔드포인트
- 공개용 캠퍼스와 핵심 장소 체계

## 5. Engine Success Condition

`TROY 엔진`이 제대로 작동하고 있다는 뜻은 아래와 같다.

- 회차 하나를 만들 때 무엇이 필요한지 늘 동일하게 설명 가능하다
- 새 아이디어가 들어와도 즉시 구조가 흔들리지 않는다
- 소설, 곡, MV가 서로 다른 이야기를 하지 않는다
- 결말에서 거꾸로 읽어도 복선이 맞물린다

## 6. Skills vs Agents

엔진은 `스킬`과 `에이전트`를 다르게 쓴다.

- skills: 반복 가능하고 형식이 중요한 작업
- agents: 해석과 선택이 중요한 작업
- director: 최종 잠금과 변경 통제

상세 분업표:
- `ops/skills_and_agents_architecture.md`
