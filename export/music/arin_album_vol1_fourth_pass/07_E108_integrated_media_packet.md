# E108 Integrated Media Packet

## 0. orchestration harness

- orchestra mode:
  - fourth-pass integrated generation packet
- director intent:
  - lock a livable-uncertainty packet for song, stills, and MV
- truth source:
  - `ops/E108_song_brief.md`
  - `ops/E108_visual_cut_list.md`
  - `ops/E108_inworld_song_final_lock.md`
  - `ops/E108_inworld_suno_final.md`
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
  - uncertainty must remain livable, not magically soothed

## 1. episode identity

- episode id:
  - `E108`
- fixed song title:
  - `정상인 불안`
- role:
  - Arin uncertainty-with-attitude track
- emotional thesis:
  - 확신은 줄어들었지만 태도는 더 분명해질 수 있다

## 2. music generation packet

### producer stack

- tension minimalism producer
- album arc producer

### lyric hook

- `들리지 않는 자리에 남은 건, 손을 빼지 않고 물어보는 쪽이었어`

### final lyrics

#### verse 1

평행한 걸음 사이로
늦가을 공기가 먼저 지나가고
나는 알 수 없는 것들보다
지금 남아 있는 태도를 더 오래 보고 있었어

#### pre-chorus

다 안다고 해야만
계속 걸을 수 있는 건 아니라서
확신보다 느린 마음도
사람을 끝까지 데려갈 수 있단 걸 배웠어

#### chorus

들리지 않는 자리에 남은 건
손을 빼지 않고 물어보는 쪽이었어
정상인 불안 하나쯤은
우리도 같이 안고 갈 수 있을 것 같았어

모든 걸 증명하지 않아도
평행한 걸음은 계속 이어졌고
그 늦은 웃음 하나가
proof보다 먼저 trust를 남겨 두었어

#### verse 2

조금 흔들리는 표정과
그게 정상이라는 낮은 대답
나는 그 짧은 문장 안에서
이상하게 더 오래 살아갈 힘을 들었어

#### pre-chorus 2

불안이 사라진 건 아니야
다만 예전처럼 panic이 먼저 오진 않았고
모르는 채로 걷는 일도
생각보다 덜 외로운 쪽이 될 수 있었어

#### chorus 2

들리지 않는 자리에 남은 건
손을 빼지 않고 묻는 태도였어
정상인 불안 하나쯤은
우리도 서로에게 말해 둘 수 있었어

다 안심한 얼굴은 아니어도
걸음은 예전보다 덜 흔들렸고
그 늦은 숨 하나가
certainty보다 먼저 사람다웠어

#### bridge

누군가는 이런 장면을
애매한 사랑이라 부를지 몰라도
나는 알아
모르면서도 같이 걷는 저녁이
오히려 더 실제일 때가 있다는 걸

#### final chorus

들리지 않는 자리에 남은 건
끝내 손을 빼지 않는 쪽이었어
정상인 불안 하나를 안고도
우린 조금 덜 무서운 pace를 골랐어

모든 걸 알지 못해도
평행한 길은 계속 이어졌고
그날의 늦은 웃음은
확신보다 오래 사람답게 남아 있었어

### final music prompt

```text
Original Korean relationship song sung by a young female vocalist. Open piano, light ambient field, soft pulse, clean unresolved tail, medium-close steady vocal. Mood: a parallel late-autumn walk, admitting uncertainty, hearing that uncertainty is normal, and choosing attitude over proof. Keep it humane, steady, and lightly warm, never magical and never certainty-coded. Avoid hearing-return cues, miracle reassurance, glowing romantic lock-in, artist imitation, cover language, and anthem certainty.
```

## 3. still image generation packet

### master look prompt

```text
Cinematic live-action Korean late-autumn walking stills, parallel steps, small smile, normal uncertainty, steady human faces, no miracle reassurance, no hearing-return cue, no logos, no readable signage.
```

### priority cuts

- hero:
  - cut 6
- support:
  - cut 1
  - cut 3
  - cut 4
  - cut 8

### cut-by-cut image prompts

1. Parallel steps
   ```text
   Two figures moving at the same pace on a late-autumn path, parallel steps, ordinary steadiness, no romance victory coding.
   ```
2. Small uncertainty
   ```text
   Profile line showing doubt without panic, uncertainty carried as a livable human expression.
   ```
3. Normalization beat
   ```text
   Soft moment where the line 'that is normal' lands, no therapy-poster glow, only human relief.
   ```
4. Breath and smile
   ```text
   A small smile answering anxiety, subtle warmth, not solved happiness.
   ```
5. No certainty close-up
   ```text
   Face staying human and unfinished, not radiant with solution.
   ```
6. Shared pace
   ```text
   Hero frame of both continuing at the same pace without needing proof, trust carried by movement rather than certainty.
   ```
7. Quiet hand line
   ```text
   Hands visible but not urgent, closeness without clutching or lock-in.
   ```
8. Final walk-off
   ```text
   The path continuing with ordinary steadiness after they move forward, uncertainty looking livable.
   ```

## 4. video generation packet

### MV mode

- format:
  - parallel-walk uncertainty MV
- runtime target:
  - `30-35 sec`
- ending frame:
  - ordinary steady walk continuing

### video prompt blocks

#### block 1 - uncertainty named softly

```text
Use stills from cuts 1, 2, and 3. Begin with parallel steps, let uncertainty show in profile, and make the normalization beat land softly. The emotional job is to make uncertainty look human, not dramatic.
```

#### block 2 - attitude stays

```text
Use stills from cuts 4, 5, and 6. Hold on the small smile, the unfinished face, and the shared pace that continues without proof. Keep motion patient and humane.
```

#### block 3 - livable ending

```text
Use stills from cuts 7 and 8. Let the visible but unurgent hands and the final walk-off end the scene. Uncertainty should remain, but it must look livable and real.
```

## 5. production order

1. run music prompt test
2. reject if uncertainty turns into certainty anthem
3. generate stills for cuts 1, 3, 6, 8 first
4. expand to full 8-cut set
5. assemble 30-35 sec MV
