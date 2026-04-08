# Orchestra Expert Audit 001

## 1. Purpose

이 문서는 `TROY 엔진`이 실제로 오케스트라 방식으로 운영되고 있는지 점검한 기록이다.

핵심 결론:

- 반복 제작 작업은 총괄 오케스트라가 직접 처리하는 것이 효율적이다.
- 다만 엔진/작법/복선/음악/MV 방향은 전문가 파트별 점검 기록을 별도로 남겨야 한다.
- 앞으로는 `직접 제작`과 `전문가 점검`을 명확히 분리한다.

## 2. Expert Lanes

### A. 장편 작법 / 복선 회수 전문가

점검 대상:

- `ops/troy_engine_method.md`
- `ops/troy_engine_extensions.md`
- `ops/foreshadow_plan_120.md`
- `canon/motif_ledger.md`
- `ops/relationship_thermometer_120.md`
- `ops/reveal_matrix_120.md`
- `ops/episode_packet_index_001_010.md`
- `ops/episode_packet_index_011_020.md`
- `ops/episode_packet_index_021_030.md`

판단:

- `역설계`, `Seed -> Echo -> Payoff`, `관계 온도계`, `정보/폭로 매트릭스`, `모티프 장부`, `침묵 전환`, `감정 예산`이 이미 들어 있어 장편 작법 엔진의 핵심은 충분하다.
- E001-E030은 결말을 직접 드러내지 않으면서 `듣는 사랑 -> 말하는 사랑 -> 묻는 사랑`으로 이동하는 초기 설계가 살아 있다.
- 단, `relationship_thermometer_120.md`와 `reveal_matrix_120.md`는 아직 샘플 중심이므로 E021-E040 이후 확장이 필요하다.

위험:

- 중간 이후 패킷이 늘어날수록 모티프 장부와 reveal matrix가 따라오지 않으면, 패킷은 많지만 회수 구조가 느슨해질 수 있다.

### B. 음악 드라마투르그 / Suno 브리프 전문가

점검 대상:

- `ops/music_engine.md`
- `ops/episode_song_system_120.md`
- `ops/E001_song_brief.md` through `ops/E030_song_brief.md`
- `ops/media_engine_contract.md`

판단:

- `1화 = 1곡`, `one emotional thesis`, `safe prompt rule`은 적절하다.
- E021-E030은 고백 구간임에도 `운명`, `영원`, `대형 고백송`으로 흐르지 않도록 가드레일이 잘 잡혀 있다.
- 아린의 in-world song을 초반에 아껴 둔 판단은 좋다.

위험:

- E031-E040부터 연애 시작/첫 키스 구간으로 넘어가면서 곡이 모두 달콤한 relationship theme으로 쏠릴 위험이 있다.
- E034 같은 닫힘 회차는 반드시 `complete silence`가 아니라 `blurred distance` 질감으로 유지해야 한다.
- E001-E030에서 `piano / guitar / restrained strings / close vocal` 조합이 반복되므로, 장기 120곡 운영에서는 사운드 피로 관리가 필요하다.

추가 반영:

- `ops/music_sound_arc_001_030.md`
- `ops/refrain_reprise_register.md`
- `ops/arin_in_world_song_map_120.md`

### C. 이미지 / MV 스토리보드 전문가

점검 대상:

- `ops/image_engine.md`
- `ops/video_engine.md`
- `ops/visual_bible.md`
- `ops/E001_visual_cut_list.md` through `ops/E030_visual_cut_list.md`
- `ops/media_engine_contract.md`

판단:

- 시네마틱 실사풍, Nano Banana 메인 생산, Midjourney 룩 탐색, Imagen 히어로 컷 보강 구조는 적절하다.
- E018, E029처럼 중요한 회차의 컷 수를 늘린 판단은 맞다.
- 실제 학교명/로고/간판을 피하고 `Hyedam University`를 쓰는 규칙도 유지되고 있다.

위험:

- cut list가 회차별로 늘어날수록 캐릭터 얼굴/의상/장소 연속성 문서가 별도로 필요해진다.
- 아직 `character visual continuity sheet`와 `location geometry sheet`가 완전한 별도 파일로 분리되어 있지 않다.

## 3. Orchestra Decision

앞으로 운영 방식:

- 반복 제작:
  - episode harness
  - song brief
  - visual cut list
  - packet index
  - 총괄 오케스트라가 직접 처리한다.

- 전문가 점검:
  - TROY 엔진 변경
  - 결말/복선 구조 변경
  - 음악 엔진 변경
  - 영상미/툴 체계 변경
  - 캐논 충돌 의심
  - 10화 또는 20화 단위 패킷 완료 후 audit

## 4. Missing Modules

추가하면 좋은 모듈:

- `character_visual_continuity_sheet.md`
- `location_geometry_sheet.md`
- `relationship_thermometer_021_040_update`
- `reveal_matrix_021_040_update`
- `motif_ledger_021_040_update`
- `music_sound_arc_001_030.md` 완료
- `refrain_reprise_register.md` 완료
- `arin_in_world_song_map_120.md` 완료

우선순위:

1. E031-E040 song brief
2. E031-E040 visual cut list
3. E031-E040 packet index
4. character visual continuity sheet
5. location geometry sheet

## 5. Risk Level

현재 위험도: medium-low

이유:

- 상위 작법 엔진은 충분히 잘 잡혀 있다.
- E001-E030 제작 패킷도 story/music/MV가 같은 방향을 보고 있다.
- 다만 전문가 점검 로그와 연속성 관리 문서가 별도 산출물로 부족했다.

대응:

- 10화 단위 패킷 완료 후 `orchestra expert audit` 문서를 남긴다.
- 반복 제작은 직접 처리하되, 엔진 변경은 전문가 점검을 거친다.
