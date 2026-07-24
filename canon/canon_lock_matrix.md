# Canon Lock Matrix

이 문서는 설정 잠금 순서와 우선순위를 명확히 하기 위한 총괄 매트릭스다.

## 1. Lock Order

1. ending model
2. world rules
3. lead characters
4. relationship canon
5. 120-episode structure
6. support character roles
7. audiovisual standards
8. media/index synchronization

locked so far:
- ending model A
- 120 episodes / 6 chapters / 6 phases (2026-07-21 정합: 원고·악장·phase 전부 6단위. 구 "24 chapters" 폐기)
- Kim Eunji removed from current canon branch
- final song meaning locked
- MV house mode locked

## 2. World Rules

| Topic | Current status | Priority | Action |
|---|---|---:|---|
| core ability definition | mostly stable | P0 | lock one source of truth |
| self-hearing prohibition | stable | P0 | keep absolute |
| hearing triggers | conflicting in detail docs | P0 | define priority order |
| multi-person hearing | missing | P0 | add hard rule |
| range and environment | partial | P0 | define crowd and performance behavior |
| lie / self-deception logic | partial | P1 | formalize error cases |
| deep sea mechanics | ambiguous | P1 | define metaphor vs functioning state |
| Arin exception | locked at high level | P0 | refine wording only |
| fade stages | locked at high level | P0 | mirror into source docs |

## 3. Character Lock

| Character | Tier | Priority | Lock need |
|---|---|---:|---|
| 윤서준 | core | P0 | ending state, power end-state, trauma source |
| 지아린 | core | P0 | endpoint, exception meaning, silence meaning |
| 강도현 | support | P1 | rival vs projection definition |
| 최이든 | support | P1 | knowledge map, mini-arc scope |
| 송유빈 | support | P1 | explicit first-love identity |
| 배소나 | support | P2 | intervention boundaries |
| 이태율 | cut | P2 | 삭제 확정 (2026-07-21, 원고 0건) |
| 김은지 | removed | P0 | cut from current canon |

## 4. Structure Lock

| Topic | Decision |
|---|---|
| total episodes | 120 |
| total chapters | 6 |
| chapter size | 20 episodes |
| total phases | 6 |
| milestone model | confession around 30, breakup around 80, re-encounter around 103, ending around 120 |

## 5. Audiovisual Lock

| Topic | Priority | Note |
|---|---:|---|
| silence vs melody motif | P0 | fixed series signature |
| grey vs warm color grammar | P0 | fixed series signature |
| dissonance to harmony arc | P0 | fixed emotional music rule |
| Suno doc format | P1 | standardize now |
| MV doc format | P1 | standardize now |
| seed / cref / negative rules | P1 | standardize globally |
| per-arc style checkpoints | P2 | required for 120-episode drift control |

## 6. Rewrite Order

1. `canon/series.md`
2. `canon/world.md`
3. `canon/characters.md`
4. `canon/style.md`
5. high-level source docs outside repo
6. macro outline
7. phase docs
8. episode detail docs
9. media index and episode-level media docs

## 7. Blocking Decisions

These are the decisions that stop all downstream work if unresolved.

resolved:
- final ending is `Seojun-Arin beautiful separation`
- the ability ends in `청취 소실`, and the ending meaning is `침묵의 완성`
- Arin's exception is primarily about `relationship-state`
- `Kim Eunji` is removed from current canon
- final song meaning
- Taeyul is cut from active canon (2026-07-21, 원고 0건 — ethical-mirror 기능 미집행 확정)
- visual house mode = TWO TRACKS (prose 실사 / MV 일러스트, `style.md §6` Z갈래, 2026-04-30~07-21 정합)
- support cast exit timing → resolved in `ops/support_exit_map.md`
- final scene physical form → resolved in `ops/ending_scene_lock.md`
- prose house bible expansion → resolved in `ops/prose_house_bible.md`

still blocking:
- 없음 (2026-07-21 기준 downstream 차단 결정 없음)
