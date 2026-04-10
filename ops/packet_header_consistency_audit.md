# packet header consistency audit

## 1. purpose

- 이 문서는 pilot부터 wave4까지 merged packet 헤더의 일관성을 점검한 결과를 잠근다
- 목표:
  - 외부 전달용 packet 상단 형식이 wave별로 지나치게 흔들리지 않는지 확인한다

## 2. truth source

- `export/pilot_packets/`
- `export/wave1_packets/`
- `export/wave2_packets/`
- `export/wave3_packets/`
- `export/wave4_packets/`

sampled packets:

- `export/pilot_packets/TROY_PILOT_ENDING_E118/TROY_PILOT_ENDING_E118_packet.md`
- `export/wave1_packets/TROY_WAVE1_THRESHOLD_E040/TROY_WAVE1_THRESHOLD_E040_packet.md`
- `export/wave2_packets/TROY_WAVE2_MATURE_SILENCE_E119/TROY_WAVE2_MATURE_SILENCE_E119_packet.md`
- `export/wave3_packets/TROY_WAVE3_CHOSEN_REUNION_E103/TROY_WAVE3_CHOSEN_REUNION_E103_packet.md`
- `export/wave4_packets/TROY_WAVE4_SELF_STORY_ERROR_E097/TROY_WAVE4_SELF_STORY_ERROR_E097_packet.md`

## 3. audit result

- top header:
  - all checked packets use `# TROY ... Packet - ...` headline
- export label line:
  - present and readable across pilot to wave4
- export type line:
  - present and readable across pilot to wave4
- first section handoff:
  - all checked packets move cleanly into `## E###_episode_harness`

## 4. current judgment

- status:
  - pass / no urgent correction needed
- note:
  - wave3에는 `expert agent mode`, wave4에는 `직접 오케스트라 모드`처럼 source harness wording 차이는 남아 있지만, packet header layer 문제는 아니다

## 5. director note

- 지금은 merged packet 헤더를 더 통일하려고 건드릴 필요가 없다
- 다음 cosmetic pass는 header 자체보다 `outside-reader starter note` 쪽이 효율이 높다
