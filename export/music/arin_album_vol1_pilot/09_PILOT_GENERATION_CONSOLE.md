# Arin Album Vol.1 Pilot Generation Console

## 1. purpose

- 이 문서는 파일럿 3곡을 실제 생성기에 넣을 때 사용하는 copy console이다
- 대상:
  - `E054 / 밝은 창`
  - `E113 / 나를 잃지 않는 일`
  - `E050 / 접힌 문장`
- 원칙:
  - music first
  - pass 또는 strong revise 이후에만 still / MV로 이동
  - 가사와 제목은 바꾸지 않는다

## 2. source lock

- first wave gate:
  - `ops/arin_inworld_album_vol1_first_execution_wave.md`
- master board:
  - `export/music/arin_album_vol1_master_generation_board.md`
- attempt sheet:
  - `export/music/arin_album_vol1_first_execution_wave_sheet.md`
- pilot session log:
  - `export/music/arin_album_vol1_pilot/04_SESSION_RESULT_LOG.md`
- Suno copy cards:
  - `export/music/arin_album_vol1_pilot/suno_copy_cards/`

## 3. run order

1. `E054 / 밝은 창`
2. `E113 / 나를 잃지 않는 일`
3. `E050 / 접힌 문장`

gate rule:

- `E054-E050` 중 최소 1곡이 `pass`여야 `E011 / E118`로 넘어간다
- 3곡 모두 `revise` 이하라면 producer stack wording을 먼저 재정비한다

## 4. global negative lock

- no destiny language
- no miracle framing
- no reunion coding
- no happy-ending declaration
- no famous artist imitation
- no cover-language prompt
- no oversized finale climax
- no male narrator ownership of Arin's voice

## 5. E054 console

### fixed fields

- title:
  - `밝은 창`
- role:
  - title-track-class candidate
- lyrics source:
  - `export/music/arin_album_vol1_pilot/06_E054_integrated_media_packet.md`
- generation card:
  - `export/music/arin_album_vol1_pilot/01_E054_generation_card.md`

### style prompt

```text
Original Korean in-world song sung by a young female vocalist. Bright summer music room, clear intimate vocal, warm piano, light strings, subtle room ambience, restrained pop lift, no showy belting. Mood: the brightest point of a relationship with unspoken shadow still inside it. Images: bright window, notebook, hand on paper, held light, a small evening hidden behind a smiling song. Keep it luminous but not triumphant, intimate but not whispered, memorable but not like a finale. Avoid destiny, forever, perfect love, confession reprise, artist imitation, cover language, and oversized climax.
```

### first-pass listening target

- pass if:
  - 밝지만 결말 선언처럼 들리지 않는다
  - 아린의 창작 주체성이 먼저 들린다
  - 후렴 첫 줄이 남는다
- revise if:
  - 좋은데 너무 반짝이거나 너무 공연곡처럼 크다
- reject if:
  - 해피엔드 선언처럼 들림
  - 뮤지컬 피날레처럼 커짐
  - 남성 청자의 감상곡처럼 무게 중심이 밀림

### after pass

- still priority:
  - cuts `1 / 8 / 9 / 12`
- MV runtime:
  - `35-45 sec`
- direction-note anchor:
  - bright room, unspoken shadow, Arin leads the light

## 6. E113 console

### fixed fields

- title:
  - `나를 잃지 않는 일`
- role:
  - selfhood declaration single
- lyrics source:
  - `export/music/arin_album_vol1_pilot/07_E113_integrated_media_packet.md`
- generation card:
  - `export/music/arin_album_vol1_pilot/02_E113_generation_card.md`

### style prompt

```text
Original Korean female vocal relationship track, airy piano, restrained strings, soft low tone, medium-close assured vocal, minimal swell. Mood: fresh campus air, next semester plans, band practice, and a self-preserving line inside love. The song should sound humane, clear, and quietly strong, not defensive and not triumphant. Images: open air, walking forward, leaving room for love without shrinking the self. Avoid sacrifice framing, breakup alarm, possessive romance, destiny language, famous-song imitation, and anthem-sized emotional victory.
```

### first-pass listening target

- pass if:
  - 자기 선언이 선명하지만 강의처럼 들리지 않는다
  - 사랑보다 selfhood가 먼저 남는다
  - 보컬이 단단하지만 승리 연설처럼 커지지 않는다
- revise if:
  - core는 맞지만 slogan-like하거나 후렴이 너무 직접적이다
- reject if:
  - breakup alarm tone
  - slogan-like preachiness
  - romance payoff dominates selfhood

### after pass

- still priority:
  - cuts `1 / 5 / 6 / 8`
- MV runtime:
  - `30-40 sec`
- direction-note anchor:
  - selfhood preserved inside love, open path remains

## 7. E050 console

### fixed fields

- title:
  - `접힌 문장`
- role:
  - private diary track
- lyrics source:
  - `export/music/arin_album_vol1_pilot/08_E050_integrated_media_packet.md`
- generation card:
  - `export/music/arin_album_vol1_pilot/03_E050_generation_card.md`

### style prompt

```text
Original Korean private literary song with intimate restrained female vocal, soft electric piano, paper texture, low room tone, sparse strings, almost no percussive push. Mood: a diary line written at night, a folded sentence, desk light, unreadable words, and a quiet room that protects what was not said. Keep it close and delicate, but emotionally durable, like a page closing without becoming a mystery reveal. Avoid thriller cues, supernatural reveal, detective language, destiny, dramatic climax, artist imitation, and oversung confession.
```

### first-pass listening target

- pass if:
  - 밤의 사적 문장이 보호된다
  - 곡으로 남지만 리빌처럼 들리지 않는다
  - 작아도 기억나는 한 줄이 있다
- revise if:
  - 너무 underscore처럼 흐르거나 너무 fragile해서 곡성이 약하다
- reject if:
  - mystery / thriller drift
  - too much underscore, not enough song
  - too fragile to leave a line behind

### after pass

- still priority:
  - cuts `1 / 4 / 5 / 10`
- MV runtime:
  - `35-45 sec`
- direction-note anchor:
  - privacy intact, unreadable words, no reveal energy

## 8. result logging order

1. update `export/music/arin_album_vol1_pilot/04_SESSION_RESULT_LOG.md`
2. update `export/music/arin_album_vol1_first_execution_wave_sheet.md`
3. update `export/music/arin_album_vol1_master_session_log.md`
4. update `export/music/arin_album_vol1_master_generation_board.md`
5. if pass:
   - fill `export/music/arin_album_vol1_direction_note_template.md` into a track-specific accepted note

## 9. orchestra verdict

- 현재 상태:
  - pilot music generation can start
- 아직 아님:
  - media assets generated
  - pass verdict validated
- 다음 오케스트라 행동:
  - 실제 attempt 결과를 듣고 `pass / revise / reject`를 기록한다

## 10. copy-card shortcut

- full lyrics 포함 copy card:
  - `suno_copy_cards/01_E054_SUNO_COPY_CARD.md`
  - `suno_copy_cards/02_E113_SUNO_COPY_CARD.md`
  - `suno_copy_cards/03_E050_SUNO_COPY_CARD.md`
- 생성기 입력은 위 copy card를 우선 사용한다
