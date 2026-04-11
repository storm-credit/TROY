# E022 Integrated Media Packet

## 0. orchestration harness

- orchestra mode:
  - third-pass integrated generation packet
- director intent:
  - lock an absence-memory packet for song, stills, and MV
- truth source:
  - `ops/E022_song_brief.md`
  - `ops/E022_visual_cut_list.md`
  - `ops/E022_inworld_song_final_lock.md`
  - `ops/E022_inworld_suno_final.md`
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
  - absence must stay ordinary and human

## 1. episode identity

- episode id:
  - `E022`
- fixed song title:
  - `없는 시간에도`
- role:
  - Arin voice-memory / absence track
- emotional thesis:
  - 익숙해진 목소리의 부재가 안심보다 먼저 두려움을 데려온다

## 2. music generation packet

### producer stack

- vocal narrative producer
- tension minimalism producer

### lyric hook

- `네 목소리가 없는 시간에도, 나는 그쪽을 기다렸어`

### final lyrics

#### verse 1

아무 말도 없는 교실에
늦은 빛만 책상을 스치고
나는 네가 없는 시간에도
자꾸 그쪽의 공기를 먼저 보게 돼

#### pre-chorus

익숙해진다는 건 아마
편해지는 일만은 아닌가 봐
없어도 괜찮아야 하는데
조용한 오후가 조금 덜 완전해져

#### chorus

네 목소리가 없는 시간에도
나는 그쪽을 기다렸어
울리지 않는 화면보다 먼저
방 안의 공기가 네 쪽으로 기울었어

아무 일 없는 빛 아래서
나는 더 천천히 불안을 배웠어
익숙하단 말 하나가
이렇게 오래 남을 줄은 몰랐어

#### verse 2

의자 하나 비어 있는 자리와
창문에 얇게 걸린 반사광과
손을 대지 않은 휴대폰까지
전부 같은 방향을 가리키는 것 같았어

#### pre-chorus 2

믿고 싶은 건 사실
목소리보다 그 뒤의 생활인데
나는 가끔 그 평범함조차
잃을까 봐 먼저 조용해졌어

#### chorus 2

네 목소리가 없는 시간에도
나는 그쪽을 기다렸어
읽지 않은 알림보다 먼저
내 하루가 네 자릴 비워 두고 있었어

아무 일 없는 저녁에도
나는 조금씩 기다림을 배웠어
익숙하단 말 하나가
안심보다 두려움에 가까웠어

#### bridge

누군가는 이런 마음을
그냥 습관쯤으로 부를지 몰라도
나는 알아
사라진 게 아니라 남아 있는 쪽도
사람을 오래 흔들 수 있다는 걸

#### final chorus

네 목소리가 없는 시간에도
나는 그쪽을 먼저 보았어
조용한 방의 얇은 빛마저
네가 있던 자리 쪽으로 기울었어

아무 일 없는 하루에도
나는 조금 덜 태연해졌어
익숙하단 말 하나를
이제는 쉽게 안심으로 부를 수 없었어

### final music prompt

```text
Original Korean intimate relationship song sung by a young female vocalist. Close piano, soft guitar, faint ambient phone-light texture, slow observant tempo, withheld close vocal. Mood: becoming used to someone's voice and feeling quiet fear in its absence, empty desk, late-afternoon classroom, window light, and waiting air. Keep it human, subtle, and inward, not obsessive and not supernatural. Avoid ringtone hooks, addiction framing, certainty, artist imitation, cover language, and dramatic explanation.
```

## 3. still image generation packet

### master look prompt

```text
Cinematic live-action Korean campus stills, quiet classroom, empty desk, late-afternoon window light, phone glow without readable text, realistic restrained camera, gray-blue palette with thin warm light, no logos or readable messages.
```

### priority cuts

- hero:
  - cut 6
- support:
  - cut 1
  - cut 3
  - cut 7
  - cut 8

### cut-by-cut image prompts

1. Empty desk
   ```text
   Quiet classroom desk in late-afternoon light, ordinary emptiness, one absence changing the room's feeling.
   ```
2. Phone glow
   ```text
   Close-up of a phone face down or blurred with a faint glow, no readable content, no message emphasis.
   ```
3. Arin profile
   ```text
   Arin speaking in soft side profile, ordinary and clear, no dramatization, memory-like but grounded.
   ```
4. Seojun listening
   ```text
   Seojun near a window, guarded expression softening under thin light, attention moving toward sound rather than sight.
   ```
5. Empty chair
   ```text
   A chair beside him left open, mundane but slightly charged, no melodrama.
   ```
6. Window reflection
   ```text
   Hero still of Seojun in faint window reflection looking toward where the sound had been, subtle and human.
   ```
7. Hand above phone
   ```text
   Seojun's hand pausing before touching the phone, withheld action, waiting implied.
   ```
8. Quiet bench
   ```text
   Campus bench after the light has cooled, waiting air implied, no dramatic loneliness pose.
   ```

## 4. video generation packet

### MV mode

- format:
  - waiting-air MV
- runtime target:
  - `30-35 sec`
- ending frame:
  - quiet bench with cooled light

### video prompt blocks

#### block 1 - ordinary absence

```text
Use stills from cuts 1, 2, and 5. Build the classroom with an empty desk, unreadable phone glow, and an open chair. The emotional job is to show absence as ordinary incompleteness, not as melodrama.
```

#### block 2 - memory of voice

```text
Use stills from cuts 3, 4, and 6. Let Arin's ordinary side profile and Seojun's window-reflection listening carry the memory of a voice. Motion should stay inward, slow, and observed.
```

#### block 3 - waiting air remains

```text
Use stills from cuts 7 and 8. Pause on the hand above the phone and end on the campus bench after light cools. The room and the day should feel subtly incomplete, nothing more.
```

## 5. production order

1. run music prompt test
2. reject if absence becomes obsession coding
3. generate stills for cuts 1, 6, 7, 8 first
4. expand to full 8-cut set
5. assemble 30-35 sec MV
