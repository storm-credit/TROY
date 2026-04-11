# E030 Integrated Media Packet

## 0. orchestration harness

- orchestra mode:
  - second-pass integrated generation packet
- director intent:
  - lock a careful-answer packet for song, stills, and MV
- truth source:
  - `ops/E030_song_brief.md`
  - `ops/E030_visual_cut_list.md`
  - `ops/E030_inworld_song_final_lock.md`
  - `ops/E030_inworld_suno_final.md`
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
  - warmth must stay cautious, not couple-finale

## 1. episode identity

- episode id:
  - `E030`
- fixed song title:
  - `천천히 열어 둔 문`
- role:
  - Arin careful yes / relationship transition track
- emotional thesis:
  - 대답은 끝이 아니라 서로의 속도를 맞추기 시작하는 문

## 2. music generation packet

### producer stack

- luminous pop restraint producer
- vocal narrative producer

### lyric hook

- `대답은 문을 닫지 않고, 천천히 열어 두었어`

### final lyrics

#### verse 1

컵 가장자리에 남은 온도를
괜히 한 번 더 손끝으로 짚고
나는 너무 빠른 문장 대신
조금 느린 대답을 먼저 골랐어

#### pre-chorus

좋다는 말 하나로
모든 불안을 다 접진 못하겠지만
오늘의 저녁만큼은
문을 닫지 않는 쪽으로 두고 싶었어

#### chorus

대답은 문을 닫지 않고
천천히 열어 두었어
같이 걷는 쪽으로 마음이 기울어도
서두르지 않는 바람을 남겨 두었어

카페 문을 나서던
저녁 공기가 달라진 것처럼
나는 네 쪽을 보면서도
내 속도의 모양을 같이 들고 있었어

#### verse 2

두 잔의 컵은 가까웠지만
아직 서로의 가장자리를 지켰고
그 조심스러운 간격이 오히려
오늘의 말을 더 오래 믿게 했어

#### pre-chorus 2

기쁜 마음이 와도
그걸 곧장 끝처럼 부르진 않을래
열어 둔 문 하나쯤은
천천히 지나야 진짜 내 것이 되니까

#### chorus 2

대답은 문을 닫지 않고
천천히 열어 두었어
나란히 걷는 거리 안에서도
조심스러운 숨 하나를 남겨 두었어

카페 문을 나서던
저녁 공기가 우리를 밀어도
나는 네 쪽으로 가면서
내 걸음의 속도도 같이 믿어 보았어

#### bridge

누군가는 이 순간을
이제 다 괜찮아진 장면처럼 말하겠지만
나는 알아
좋은 대답도 천천히 걸을 때 더 진짜가 된다는 걸

#### final chorus

대답은 문을 닫지 않고
천천히 열려 있었어
같이 걷는 저녁의 공기 안에서
나는 너무 빨리 이름 붙이지 않기로 했어

카페 문을 나서던
그 달라진 공기를 안고서
나는 네 쪽과 내 쪽 사이를
조금 덜 틀리게 걸어 보고 싶었어

### final music prompt

```text
Original Korean in-world relationship song sung by a young female vocalist. Cafe evening, warm piano, soft guitar, small string lift, restrained room tone, close warm vocal. Mood: receiving and giving a careful yes that opens a door slowly, not a finale and not a solved love song. Images: two cups, cafe door, evening street air, side-by-side walking with a careful gap. Keep it warm but cautious, tender without triumph. Avoid destiny, forever, perfect answer, happy-ending declaration, artist imitation, cover language, and oversized couple-song energy.
```

## 3. still image generation packet

### master look prompt

```text
Cinematic live-action Korean campus cafe evening, two cups, warm indoor yellow light fading into cool blue street air, realistic young adults, careful answer, restrained emotional transition, no logos, no readable signage, no triumphant couple coding.
```

### priority cuts

- hero:
  - cut 7
- support:
  - cut 1
  - cut 5
  - cut 9
  - cut 10

### cut-by-cut image prompts

1. Table silence
   ```text
   Same cafe table after confession, two cups in frame, warm indoor light, tension quiet but changed, realistic and restrained.
   ```
2. Arin's hand
   ```text
   Close shot of Arin's hand near a cup as she chooses her words, subtle movement, intimate cafe atmosphere.
   ```
3. Seojun listening
   ```text
   Seojun looking at Arin rather than reading ahead, attentive and careful, warm light across table edge.
   ```
4. Window light
   ```text
   Warm cafe light softening across the table and window edge, time suspended, emotional caution in the air.
   ```
5. Small nod
   ```text
   Arin giving a small active answer without melodrama, realistic face, gentle but clear agency.
   ```
6. Two cups
   ```text
   Two cups closer in the frame but still clearly separate, relationship geometry preserved.
   ```
7. Cafe door
   ```text
   Hero frame of cafe door opening into evening street air, warm interior behind and cool blue outside, transitional emotional geometry.
   ```
8. Street outside
   ```text
   Cool blue evening street outside the cafe, changed air after the answer, calm not celebratory.
   ```
9. Walking gap
   ```text
   Seojun and Arin walking side by side with careful space between them, early relationship caution, no triumph.
   ```
10. Changed air
   ```text
   Empty street frame after they pass, warm light behind and cool air ahead, the answer remains in the air without closure.
   ```

## 4. video generation packet

### MV mode

- format:
  - cafe-to-street transition MV
- runtime target:
  - `30-40 sec`
- ending frame:
  - changed air remains after they pass

### video prompt blocks

#### block 1 - answer at the table

```text
Use stills from cuts 1 through 5. Hold on the two cups, Arin's hand, Seojun listening, the table light, and the small nod. The emotional job is to show a yes that is active but careful. No melodramatic confession acting.
```

#### block 2 - door opens slowly

```text
Use stills from cuts 6, 7, and 8. Let the two cups remain separate, then move to the cafe door opening and the changed evening street outside. Motion should feel like air changing rather than plot resolving.
```

#### block 3 - walking with a gap

```text
Use stills from cuts 9 and 10. Keep the pair side by side but careful, then let the changed air remain after they pass. End on transition, not on couple victory.
```

## 5. production order

1. run music prompt test
2. reject if warm yes becomes finale glow
3. generate stills for cuts 5, 7, 9, 10 first
4. expand to full 10-cut set
5. assemble 30-40 sec MV
