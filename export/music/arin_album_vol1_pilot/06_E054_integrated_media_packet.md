# E054 Integrated Media Packet

## 0. orchestration harness

- orchestra mode:
  - pilot integrated generation packet
- director intent:
  - lock one-file production packet for music, image, and MV test
- truth source:
  - `ops/E054_song_brief.md`
  - `ops/E054_visual_cut_list.md`
  - `ops/E054_inworld_song_final_lock.md`
  - `ops/E054_inworld_suno_final.md`
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
  - Arin subjectivity must lead every medium layer

## 1. episode identity

- episode id:
  - `E054`
- fixed song title:
  - `밝은 창`
- role:
  - Arin in-world song
  - title-track-class candidate
- emotional thesis:
  - 가장 밝은 순간에도 말하지 않은 그림자가 함께 남아 있다

## 2. music generation packet

### producer stack

- luminous pop restraint producer
- vocal narrative producer
- acoustic intimacy producer

### lyric hook

- `빛이 너무 환해서, 남겨 둔 말들이 잘 보이지 않았어`

### final lyrics

#### verse 1

창문이 먼저 열리던 오후에
종이 위로 빛이 천천히 앉고
나는 아직 이름 없는 마음을
연필 끝으로만 밀어 두었지

#### pre-chorus

환한 건 쉬웠지만
끝까지 말하는 건 아직 어려워서
웃는 얼굴 뒤편으로
작은 그림자를 같이 눌러 적었어

#### chorus

빛이 너무 환해서
남겨 둔 말들이 잘 보이지 않았어
열린 창으로 여름이 들어오면
나는 조금 더 솔직해질 줄 알았는데

손에 남은 온기처럼
끝내 쓰지 못한 문장도 빛났어
아무 일 없던 노래처럼 들려도
그 안엔 내가 숨겨 둔 저녁이 있었어

#### verse 2

건반은 먼저 웃는 쪽을 알았고
목소리는 늦게 따라와 앉았어
가볍게 넘긴 한마디 뒤에도
내 마음은 오래 종이를 붙들었지

#### pre-chorus 2

예쁘게 부를수록 더
말하지 않은 데가 선명해져서
아무도 모를 정도로만
나는 안쪽의 숨을 조금 바꿔 두었어

#### chorus 2

빛이 너무 환해서
남겨 둔 말들이 잘 보이지 않았어
열린 창으로 웃음이 번져 와도
나는 전부 내어 놓지는 못했어

손에 남은 온기처럼
끝내 지우지 못한 문장도 빛났어
아무 일 없던 노래처럼 들려도
그 안엔 내가 붙잡아 둔 저녁이 있었어

#### bridge

누군가는 이 노래를
밝은 장면 하나쯤으로 기억하겠지만
나는 알아
빛이 닿는 자리마다 그림자도 같이 생긴다는 걸

#### final chorus

빛이 너무 환해서
숨겨 둔 말들이 더 늦게 보이더라도
열린 창으로 지나온 계절이 와도
나는 그 마음을 함부로 줄이지 않을 거야

손에 남은 온기처럼
끝내 사라지지 않는 저녁을 안고
아무 일 없던 노래처럼 불러도
그 안엔 분명히 내가 살아 있었어

### final music prompt

```text
Original Korean in-world song sung by a young female vocalist. Bright summer music room, clear intimate vocal, warm piano, light strings, subtle room ambience, restrained pop lift, no showy belting. Mood: the brightest point of a relationship with unspoken shadow still inside it. Images: bright window, notebook, hand on paper, held light, a small evening hidden behind a smiling song. Keep it luminous but not triumphant, intimate but not whispered, memorable but not like a finale. Avoid destiny, forever, perfect love, confession reprise, artist imitation, cover language, and oversized climax.
```

### reject if

- too musical-like
- happy-ending declaration energy
- production shine overwhelms Arin voice

## 3. still image generation packet

### master look prompt

```text
Cinematic live-action Korean university music-room stills, bright summer window, dust floating in warm light, notebook and instrument details, Arin as the creative subject, Seojun listening without owning the frame, luminous but restrained, realistic skin texture, no logos, no readable lyrics, no idol-stage gloss, no real campus identifiers.
```

### priority cuts

- hero:
  - cut 8
- support:
  - cut 1
  - cut 2
  - cut 9
  - cut 12

### cut-by-cut image prompts

1. Bright window
   ```text
   Wide still of a small Korean university music room in summer afternoon, bright window flooding the room with natural light, dust drifting in the beam, notebook and instrument nearby, cinematic realism, warm but not glossy.
   ```
2. Arin notebook
   ```text
   Close shot of Arin's hand resting near a notebook or lyric page on a table, pencil marks visible but unreadable, sunlit paper texture, intimate creative mood, no readable text.
   ```
3. Instrument detail
   ```text
   Detail still of keyboard edge, guitar body, or microphone stand in a modest music room, soft summer light, tactile surfaces, no brand marks, no stage glamour.
   ```
4. Seojun listening
   ```text
   Medium shot of Seojun inside the same room, listening with quiet attention, moved but not central, warm room light, emotionally present without taking the creative focus away from Arin.
   ```
5. Music room light
   ```text
   Atmospheric still of light and dust suspended in the room, chairs and equipment softly out of focus, summer brightness with a faint undertone of stillness.
   ```
6. Hand on paper
   ```text
   Arin's hand gently steadying a page on the table, sunlight touching fingers and paper edge, subtle tension between brightness and restraint, no readable writing.
   ```
7. Soft performance fragment
   ```text
   Arin singing or preparing to sing in a small room, intimate posture, no performance flex, no crowd, no stage styling, creative concentration instead of spectacle.
   ```
8. Warm close-up
   ```text
   Hero close-up of Arin in warm summer window light, expression calm and luminous with a trace of hidden thought, realistic cinematic portrait, emotionally open but not fully resolved.
   ```
9. Shared afterglow
   ```text
   Two-shot of Arin and Seojun in the same bright frame after the song moment, shared warmth without romantic overstatement, soft distance preserved, summer room atmosphere.
   ```
10. Faint shadow
   ```text
   Frame edge with a small shadow crossing a bright room, visualizing the unspoken tension inside a happy scene, restrained and subtle, not ominous.
   ```
11. Empty room
   ```text
   Empty music room after people leave, notebook or instrument still present, fading summer light, afterglow lingering in the space, quiet residue.
   ```
12. Held light
   ```text
   Final wide still of the bright window remaining after the moment has passed, room half-empty, warmth still there, memory-like but not final-ending coded.
   ```

## 4. video generation packet

### MV mode

- format:
  - still-image-first lyrical MV
- runtime target:
  - `35-45 sec` pilot cut
- ending frame:
  - held light in empty room

### video prompt blocks

#### block 1 - room opens

```text
Use stills from cuts 1, 2, and 3. Gentle slow dolly into a bright summer music room, dust moving in sunbeam, notebook and instrument details establishing Arin's creative space. Motion should feel breathable and intimate, not promotional. 24fps cinematic realism, warm highlights, no flashy transitions.
```

#### block 2 - Arin leads

```text
Use stills from cuts 6, 7, and 8. Focus on Arin's hand on paper, then a soft performance fragment, then a close-up in warm light. The scene should feel like a room opening through her voice, not a stage performance. Micro handheld sway, restrained push-in, no lip-sync exaggeration, preserve hidden-shadow undertone.
```

#### block 3 - shared brightness

```text
Use stills from cuts 4, 9, and 10. Seojun listens inside the same bright atmosphere, then move to a shared afterglow frame, then let a faint shadow edge enter the image. The emotional job is to show happiness with a small unspoken remainder. Keep camera motion minimal and honest.
```

#### block 4 - afterglow remains

```text
Use stills from cuts 11 and 12. Let the people leave the frame and hold on the empty room and the bright window. Ending should feel like memory residue, not finale closure. Slow fade or gentle exposure falloff only.
```

## 5. production order

1. run music prompt test
2. choose accepted vocal/arrangement direction
3. generate stills for cuts 1, 8, 9, 12 first
4. expand to full 12-cut still set
5. assemble 35-45 sec pilot MV

## 6. negative rules

- no idol-stage gloss
- no triumphant ending energy
- no readable lyrics
- no real artist imitation
- no final-love closure coding
