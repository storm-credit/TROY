# Episode Packet Index: E101-E110

## 1. Purpose

이 문서는 `E101-E110` 패킷의 제작 상태를 한눈에 보기 위한 인덱스다.

`TROY 엔진` 기준으로 한 화의 기본 패킷은 아래 세 가지를 가진다.

- episode harness
- song brief
- visual cut list

## 2. Scope

- movement: 제5악장 가을의 잔향 -> 제6악장 늦가을의 종지
- episodes: E101-E110
- story role: 재회를 재결합과 분리한 채 `다시 말할 수 있는 상태`를 확보하고, 제6악장에서는 재접속 규칙, 예외의 관계적 의미, 확신 없는 신뢰, 거리와 예의, 같은 방향의 리듬까지 잠그는 전환 패킷이다.

## 3. Packet Table

| Episode | Title Anchor | Harness | Song Brief | Visual Cut List | Engine Status |
|---|---|---|---|---|---|
| E101 | 재회의 예감 | `ops/E101_episode_harness.md` | `ops/E101_song_brief.md` | `ops/E101_visual_cut_list.md` | complete |
| E102 | 다시 만난 두 사람 | `ops/E102_episode_harness.md` | `ops/E102_song_brief.md` | `ops/E102_visual_cut_list.md` | complete |
| E103 | 재회 | `ops/E103_episode_harness.md` | `ops/E103_song_brief.md` | `ops/E103_visual_cut_list.md` | complete |
| E104 | 말로 묻기 | `ops/E104_episode_harness.md` | `ops/E104_song_brief.md` | `ops/E104_visual_cut_list.md` | complete |
| E105 | 남겨진 감정 | `ops/E105_episode_harness.md` | `ops/E105_song_brief.md` | `ops/E105_visual_cut_list.md` | complete |
| E106 | 재접속 | `ops/E106_episode_harness.md` | `ops/E106_song_brief.md` | `ops/E106_visual_cut_list.md` | complete |
| E107 | 예외의 의미 | `ops/E107_episode_harness.md` | `ops/E107_song_brief.md` | `ops/E107_visual_cut_list.md` | complete |
| E108 | 들리지 않아도 | `ops/E108_episode_harness.md` | `ops/E108_song_brief.md` | `ops/E108_visual_cut_list.md` | complete |
| E109 | 거리와 예의 | `ops/E109_episode_harness.md` | `ops/E109_song_brief.md` | `ops/E109_visual_cut_list.md` | complete |
| E110 | 다시 이어지는 리듬 | `ops/E110_episode_harness.md` | `ops/E110_song_brief.md` | `ops/E110_visual_cut_list.md` | complete |

## 4. Function Balance

Song functions:

- Ending reflection: E101
- Relationship theme: E102, E103, E105, E106, E108, E109, E110
- Seojun inner monologue: E104, E107

판단:

- E101-E103은 `재회의 예감 -> 첫 대면 -> 선택된 재회` 흐름이지만, 관계 복구나 운명적 재시작으로는 밀지 않는다.
- E104-E105는 감정을 알아듣는 능력이 아니라 묻고 말하는 문법과 낮은 약속을 새 기준으로 잠근다.
- E106-E107은 제6악장 진입 직후 재접속 규칙과 `예외 = 관계 상태`를 회수하는 핵심 구조 구간이다.
- E108-E110은 확신 없는 신뢰, 거리와 예의, 같은 방향의 리듬을 통해 마지막 10화를 버틸 감정 바닥을 만든다.

## 5. Visual Production Notes

Cut count:

- 8 cuts: E101, E102, E107, E108
- 9 cuts: E105, E106, E109
- 10 cuts: E103, E104, E110

Tool logic:

- Midjourney: look exploration
- Nano Banana: production stills
- Imagen: hero shot refinement only when needed, especially E101 halted-step frame, E103 low-lit reunion table, E104 listening-face frame, E107 realization frame, E110 same-direction walk frame

주의:

- 재결합 확정, 능력 회복, 운명적 재회, 침묵의 완성 선반영은 금지한다.
- E101-E105는 `다시 시작`이 아니라 `다시 말할 수 있는 상태`까지로 잠근다.
- E106-E110은 희망 톤을 올리되 봉합 엔딩처럼 찍지 않는다.
- 예외의 의미는 사람의 초월성이 아니라 관계의 상태로 유지한다.

## 6. Engine Use

이 구간을 제작하거나 수정할 때 반드시 아래 문서를 함께 본다.

- `ops/orchestra_harness_contract.md`
- `ops/troy_engine_method.md`
- `ops/media_engine_contract.md`
- `ops/music_engine.md`
- `ops/refrain_reprise_register.md`
- `ops/image_engine.md`
- `ops/video_engine.md`
- `canon/motif_ledger.md`
- `ops/relationship_thermometer_120.md`
- `ops/reveal_matrix_120.md`
- `ops/silence_transition_map.md`

## 7. Next Step

다음 패킷 확장 후보:

- E111-E120 episode harness conversion
- E111-E120 song briefs
- E111-E120 visual cut lists

권장 순서:

1. E111-E115 harness / song / visual
2. E116-E120 harness / song / visual
3. final packet audit for E111-E120
