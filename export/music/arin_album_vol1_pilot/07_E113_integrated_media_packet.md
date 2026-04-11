# E113 Integrated Media Packet

## 0. orchestration harness

- orchestra mode:
  - pilot integrated generation packet
- director intent:
  - lock a selfhood-forward production packet for song, stills, and MV
- truth source:
  - `ops/E113_song_brief.md`
  - `ops/E113_visual_cut_list.md`
  - `ops/E113_inworld_song_final_lock.md`
  - `ops/E113_inworld_suno_final.md`
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
  - selfhood must read as luminous, not defensive

## 1. episode identity

- episode id:
  - `E113`
- fixed song title:
  - `나를 잃지 않는 일`
- role:
  - Arin selfhood declaration single
- emotional thesis:
  - 사랑 안에 들어가면서도 자기 크기를 줄이지 않겠다는 선명한 선택

## 2. music generation packet

### producer stack

- vocal narrative producer
- luminous pop restraint producer
- album arc producer

### lyric hook

- `선배가 좋아도, 나는 나를 잃고 싶지 않아`

### final lyrics

#### verse 1

좋아하는 마음 하나로
하루를 전부 설명할 수는 없어서
나는 내일의 과제와 연습과
늦은 버스 시간도 같이 적어 둬

#### pre-chorus

네 곁에 가고 싶지만
내 발의 크기를 먼저 지우진 않을래
사랑이란 이름이 와도
내 목소리까지 바꾸게 두진 않을래

#### chorus

선배가 좋아도
나는 나를 잃고 싶지 않아
같이 걷는 쪽으로 마음이 기울어도
내 걸음의 모양은 남겨 두고 싶어

네가 소중해도
그 말이 나를 줄이는 뜻은 아니야
좋아하는 일과 살아남는 호흡까지
함께 데리고 가는 쪽을 택할 거야

#### verse 2

가끔은 다정한 말보다
조용히 열어 둔 시간이 더 믿음직했고
나는 그 틈 안에서 조금씩
내가 어떤 사람인지 다시 배워 갔어

#### pre-chorus 2

가까워진다는 이유로
내 안의 방들을 다 비워 두진 않을래
사랑은 커져도 돼
하지만 내가 작아지는 쪽은 아닐 거야

#### chorus 2

선배가 좋아도
나는 나를 잃고 싶지 않아
손을 내밀 수 있는 내일이라면
내 이름도 같이 선명해야 하니까

네가 소중해도
그 말이 나를 지우는 뜻은 아니야
밴드 연습과 다음 학기와 내 숨까지
함께 데리고 가는 쪽을 택할 거야

#### bridge

누군가는 사랑을 위해
조금쯤은 작아져도 된다고 말하지만
나는 알아
끝까지 남는 건 지워지지 않은 마음이라는 걸

#### final chorus

네가 좋아도
나는 나를 잃지 않을 거야
같이 걷는 길이 더 멀어질수록
내 그림자도 나란히 두고 싶어

사랑이 와도
나는 나를 접어 두지 않을 거야
네가 있는 쪽과 내가 되는 쪽을
같이 붙잡는 일이 내 대답이야

### final music prompt

```text
Original Korean female vocal relationship track, airy piano, restrained strings, soft low tone, medium-close assured vocal, minimal swell. Mood: fresh campus air, next semester plans, band practice, and a self-preserving line inside love. The song should sound humane, clear, and quietly strong, not defensive and not triumphant. Images: open air, walking forward, leaving room for love without shrinking the self. Avoid sacrifice framing, breakup alarm, possessive romance, destiny language, famous-song imitation, and anthem-sized emotional victory.
```

### reject if

- breakup alarm tone
- slogan-like preachiness
- romance payoff dominates selfhood

## 3. still image generation packet

### master look prompt

```text
Cinematic live-action Korean campus stills, clear open air, next-semester planning materials, band bag or instrument case, realistic faces, grounded summer-to-late-term campus feeling, Arin standing as herself inside love, no sacrifice glow, no logos, no readable signage, no melodramatic breakup coding.
```

### priority cuts

- hero:
  - cut 6
- support:
  - cut 1
  - cut 3
  - cut 5
  - cut 8

### cut-by-cut image prompts

1. Clear air
   ```text
   Wide Korean campus walkway with clear breathable air, light wind, realistic university environment, emotional openness without spectacle, cinematic realism.
   ```
2. Planning detail
   ```text
   Tabletop still of schedule notes, notebook, and daily planning details, next-semester feeling, real life continuing alongside romance, no readable private text.
   ```
3. Band carry
   ```text
   Arin carrying a band bag or instrument case across campus, natural posture, grounded routine, love is present in life but not replacing it.
   ```
4. Self-name
   ```text
   Medium-close portrait of Arin after saying something important about herself, steady expression, open air behind her, identity landing as fact rather than drama.
   ```
5. Calm response
   ```text
   Seojun listening quietly with acceptance, not taking over the scene, respectful emotional distance, real campus light, no possessive energy.
   ```
6. No shrinking
   ```text
   Hero still of Arin standing as herself in open space, luminous but undramatic, calm confidence, no sacrifice framing, no romance pose dependency.
   ```
7. Approval beat
   ```text
   Two-person frame where the answer feels like permission rather than ownership, relaxed body language, emotional clarity without climax acting.
   ```
8. Forward frame
   ```text
   Final campus frame with open path continuing behind Arin, forward movement implied, realistic future air, not an ending but an ongoing life.
   ```

## 4. video generation packet

### MV mode

- format:
  - clear-air campus lyrical MV
- runtime target:
  - `30-40 sec` pilot cut
- ending frame:
  - forward path remains open behind Arin

### video prompt blocks

#### block 1 - life stays wide

```text
Use stills from cuts 1, 2, and 3. Start with open campus air, then move to planning details and the band bag carried through space. Motion should feel like real life continuing, not romance montage. Gentle walking pace, clean natural light, restrained edit rhythm.
```

#### block 2 - selfhood lands

```text
Use stills from cuts 4 and 6. Let Arin's self-defining line become the visual center. Camera should slowly settle rather than rush in. The mood is quietly strong, humane, and self-possessed, not defensive, not slogan-like.
```

#### block 3 - listening without ownership

```text
Use stills from cuts 5 and 7. Seojun listens and the emotional beat reads as permission, not possession. Keep body language realistic and soft. No grand reconciliation staging, no melodramatic close-up abuse.
```

#### block 4 - future remains open

```text
Use still from cut 8 as the ending anchor. Let the path behind Arin stay visible and breathable. The ending should feel like selfhood preserved inside love, with room for tomorrow rather than finale closure.
```

## 5. production order

1. run music prompt test
2. accept or reject slogan/preachiness risk
3. generate stills for cuts 1, 5, 6, 8 first
4. expand to full 8-cut still set
5. assemble 30-40 sec selfhood MV pilot

## 6. negative rules

- no breakup alarm tone
- no sacrifice glow
- no possessive romance acting
- no anthem-sized climax
- no selfhood becoming lecture
