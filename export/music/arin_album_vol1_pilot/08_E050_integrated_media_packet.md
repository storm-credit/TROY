# E050 Integrated Media Packet

## 0. orchestration harness

- orchestra mode:
  - pilot integrated generation packet
- director intent:
  - lock a private literary diary packet for music, stills, and MV
- truth source:
  - `ops/E050_song_brief.md`
  - `ops/E050_visual_cut_list.md`
  - `ops/E050_inworld_song_final_lock.md`
  - `ops/E050_inworld_suno_final.md`
- MCP used:
  - none
- skills run:
  - `suno-brief-builder`
  - `mv-cutlist-builder`
  - `episode-harness-fill`
- agent reviews:
  - not run in this packet build
- hook checks:
  - canon-preserving packet merge only
- director lock note:
  - privacy and unreadability are more important than plot explanation

## 1. episode identity

- episode id:
  - `E050`
- fixed song title:
  - `접힌 문장`
- role:
  - Arin private diary track
- emotional thesis:
  - 누구에게도 직접 말하지 못한 문장이 밤에 접혀 남는다

## 2. music generation packet

### producer stack

- literary residue producer
- vocal narrative producer
- acoustic intimacy producer

### lyric hook

- `어떻게 알았을까, 끝내 묻지 못한 문장이 접혔어`

### final lyrics

#### verse 1

책상 위에 남은 불빛이
오늘을 너무 천천히 접고
나는 읽히지 않을 문장을
모서리 안쪽으로 밀어 넣었지

#### verse 2

창문 밖은 다 잠든 것처럼
늦은 바람만 커튼을 건드리고
말이 되지 못한 몇 개의 마음이
종이 끝에서 오래 망설였어

#### pre-chorus

묻지 못한 이유들은
이상하게 밤이 되면 더 또렷해져서
아무도 보지 않을 데에
나는 오늘의 숨을 작게 적어 두었어

#### chorus

어떻게 알았을까
끝내 묻지 못한 문장이 접혔어
읽히지 않아도 좋을 만큼 조용한 밤에
나는 내 마음을 먼저 접어 두었어

닫힌 페이지 사이로
한 줄의 공기만 오래 남았어
아무에게도 닿지 못한 말이라도
오늘의 나를 지워 버리진 않았어

#### verse 3

이름을 쓰지 않은 여백이
오히려 더 많은 걸 기억했고
나는 그 빈칸 하나에 기대어
말하지 않은 쪽의 나를 세웠어

#### chorus 2

어떻게 알았을까
끝내 닿지 못한 문장이 접혔어
책상 끝에 기대어 잠든 빛 아래서
나는 내일보다 오늘을 먼저 적었어

닫힌 페이지 사이로
작은 저녁 하나 오래 남았어
누구에게도 읽히지 않은 말이라도
오늘의 나를 조용히 붙들고 있었어

#### bridge

비밀이라기엔 너무 연약했고
고백이라기엔 아직 이름이 없어서
나는 그냥 종이를 접듯
오늘의 마음을 덜 상하게 남겨 두었어

#### final chorus

어떻게 알았을까
언젠가 묻힐 것 같은 문장이 접혔어
읽히지 않아도 사라지지 않는 밤에
나는 내 안쪽의 빛을 먼저 믿어 두었어

닫힌 페이지 사이로
끝내 접히지 않는 숨이 남았어
아무에게도 가지 않은 말이라도
오늘의 나를 여기까지 데려왔어

### final music prompt

```text
Original Korean private literary song with intimate restrained female vocal, soft electric piano, paper texture, low room tone, sparse strings, almost no percussive push. Mood: a diary line written at night, a folded sentence, desk light, unreadable words, and a quiet room that protects what was not said. Keep it close and delicate, but emotionally durable, like a page closing without becoming a mystery reveal. Avoid thriller cues, supernatural reveal, detective language, destiny, dramatic climax, artist imitation, and oversung confession.
```

### reject if

- mystery / thriller drift
- too much underscore, not enough song
- too fragile to leave a line behind

## 3. still image generation packet

### master look prompt

```text
Cinematic live-action Korean private diary scene at night, small desk light, closed notebook, pen, unreadable handwriting, quiet room air, curtain moving softly, Arin's interiority protected, Seojun absent or in a separate unaware frame, no readable text, no mystery-thriller styling, no supernatural reveal coding.
```

### priority cuts

- hero:
  - cut 5
- support:
  - cut 1
  - cut 4
  - cut 7
  - cut 10

### cut-by-cut image prompts

1. Desk light
   ```text
   Small pool of desk light in a quiet Korean room at summer night, notebook, pen, and paper edges visible, literary stillness, intimate realism.
   ```
2. Pen moving
   ```text
   Close shot of Arin's hand writing in a notebook, pen moving slowly, text unreadable, warm desk light, privacy protected.
   ```
3. Unreadable line
   ```text
   Diary page seen at an angle so handwriting is visible as texture but cannot be read, warm light on paper, no legible words.
   ```
4. Arin pause
   ```text
   Medium close-up of Arin pausing above the page, private expression, late-night stillness, emotional interiority without crying performance.
   ```
5. Closed notebook
   ```text
   Hero still of a diary or notebook closing gently under desk light, page edges catching warm glow, literary residue, secrecy without thriller tone.
   ```
6. Seojun elsewhere
   ```text
   Separate night frame of Seojun in another place, unaware and absent from the diary scene, quiet distance, no intercut suspense feeling.
   ```
7. Window at night
   ```text
   Dark window beside the desk, curtain moving slightly, city or campus night beyond, reflective but not ominous.
   ```
8. Paper edge
   ```text
   Close still of paper edge under warm light, slight fold, tactile page texture, intimate and quiet.
   ```
9. Hand leaving notebook
   ```text
   Arin's hand moving away from the closed notebook, restraint and privacy, action completed without dramatic gesture.
   ```
10. Light off
   ```text
   Desk light fading or switched off, room returning to darkness softly, privacy intact, no reveal energy, no suspense.
   ```

## 4. video generation packet

### MV mode

- format:
  - still-image-first private literary MV
- runtime target:
  - `35-45 sec` pilot cut
- ending frame:
  - light off, privacy intact

### video prompt blocks

#### block 1 - room of unreadable words

```text
Use stills from cuts 1, 2, and 3. Build a quiet night room around a desk light, pen movement, and unreadable page texture. Motion should be extremely restrained, almost held-breath slow, with no thriller suspense and no mystery reveal cues.
```

#### block 2 - private pause

```text
Use stills from cuts 4 and 5. Let Arin pause above the page, then close the notebook gently. The emotional job is to protect what cannot yet be said, not to dramatize secrecy. Soft push-in only, warm light, paper texture preserved.
```

#### block 3 - elsewhere and window

```text
Use stills from cuts 6, 7, and 8. Briefly show Seojun elsewhere and unaware, then return to the night window and paper edge. This contrast should read as distance and privacy, not parallel suspense.
```

#### block 4 - leave it folded

```text
Use stills from cuts 9 and 10. Arin's hand leaves the notebook, the desk light fades, and the room keeps the folded sentence to itself. End on protected interiority, not on revelation or closure.
```

## 5. production order

1. run music prompt test
2. reject mystery/thriller drift first
3. generate stills for cuts 1, 4, 5, 10 first
4. expand to full 10-cut still set
5. assemble 35-45 sec diary MV pilot

## 6. negative rules

- no readable diary text
- no thriller scoring logic
- no reveal-song framing
- no supernatural cues
- no overacted crying confession
