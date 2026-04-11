# E064 Integrated Media Packet

## 0. orchestration harness

- orchestra mode:
  - fourth-pass integrated generation packet
- director intent:
  - lock a blur-instability packet for song, stills, and MV
- truth source:
  - `ops/E064_song_brief.md`
  - `ops/E064_visual_cut_list.md`
  - `ops/E064_inworld_song_final_lock.md`
  - `ops/E064_inworld_suno_final.md`
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
  - blurred trust must not become full loss or glitch drama

## 1. episode identity

- episode id:
  - `E064`
- fixed song title:
  - `흔들리는 운율`
- role:
  - Arin pre-loss instability track
- emotional thesis:
  - 익숙했던 결이 사라진 게 아니라 믿기 어려울 만큼 흐려진다

## 2. music generation packet

### producer stack

- tension minimalism producer
- vocal narrative producer

### lyric hook

- `늘 알던 결이, 유리 너머의 빛처럼 멀어졌어`

### final lyrics

#### verse 1

늘 같은 쪽으로 기울던 공기가
오늘은 조금 늦게 따라왔고
나는 아무 일 없단 얼굴로
흔들리는 결 하나를 오래 붙들었어

#### pre-chorus

사라진 건 아닌데
전처럼 믿을 수는 없어서
익숙했던 리듬마저
유리 너머의 빛처럼 얇아졌어

#### chorus

늘 알던 결이
유리 너머의 빛처럼 멀어졌어
잡히지 않는 silence보다
흐려진 운율이 더 오래 남았어

한쪽 이어폰 끝에서
낯익은 공기만 조금 흔들렸고
나는 그 작은 어긋남을
아직 이름 붙이지 못한 채 걷고 있었어

#### verse 2

버스 손잡이 하나가
내 손보다 먼저 미세하게 흔들리고
창에 걸린 그림자 선들이
오늘의 말을 자꾸 늦게 들려줬어

#### pre-chorus 2

너를 의심한 건 아니야
다만 내가 알던 방식이
이제는 전처럼 정확하지 않다는 걸
몸이 먼저 겁내기 시작했을 뿐이야

#### chorus 2

늘 알던 결이
유리 너머의 빛처럼 멀어졌어
사라진 게 아니라
가까이 두기 어려운 blur로 남아 있었어

한쪽 이어폰 끝에서
미세한 불안이 오래 흔들렸고
나는 그 낯선 늦음을
설명보다 먼저 몸으로 배우고 있었어

#### bridge

누군가는 이런 변화를
그냥 피곤한 하루쯤으로 넘길지 몰라도
나는 알아
조금 흐려진 믿음 하나가
사람을 얼마나 오래 붙드는지

#### final chorus

늘 알던 결이
유리 너머의 빛처럼 흔들렸어
끝난 건 아니지만
전처럼 쉽게 안심할 수도 없었어

한쪽 이어폰 끝에서
낯익은 리듬이 늦게까지 흔들렸고
나는 그 어긋난 저녁을
조금 더 오래 기억하게 될 것 같았어

### final music prompt

```text
Original Korean subtle relationship-tension song sung by a young female vocalist. Delayed pulse, thin string pad, unstable piano attack, missing high motif fragment, close slightly diffused vocal. Mood: familiar feeling becoming blurred behind glass, one earbud, swaying handrail, and a small emotional delay that makes trust feel less certain. Keep it uneasy but humane, never glitchy and never melodramatic. Avoid deafness effects, complete silence language, broken-system wording, dramatic glitch, artist imitation, and cover language.
```

## 3. still image generation packet

### master look prompt

```text
Cinematic live-action Korean relationship-tension stills, blurred glass, blind-shadow lines, one earbud, swaying bus handle, subtle handheld feeling, realistic faces, no magical aura, no deafness visual effect, no logos.
```

### priority cuts

- hero:
  - cut 2
- support:
  - cut 3
  - cut 5
  - cut 9
  - cut 10

### cut-by-cut image prompts

1. Familiar face
   ```text
   Arin in a familiar campus frame, ordinary and recognizable, with unease coming only from the air around the moment.
   ```
2. Glass reflection
   ```text
   Hero frame of Arin's outline softened by reflected glass, familiar but less trustworthy, realism over effect.
   ```
3. One earbud
   ```text
   Seojun holding or wearing one earbud, intimate prop detail, no sound-wave graphics or effect coding.
   ```
4. Hand on rail
   ```text
   Bus or stair rail swaying slightly under a hand, subtle instability, no danger spectacle.
   ```
5. Focus close-up
   ```text
   Seojun trying too hard to read the moment, close-up with visible strain, no panic.
   ```
6. Blurred light
   ```text
   Thin light losing its edge on glass, familiar scene turning slightly untrustworthy.
   ```
7. Arin discomfort
   ```text
   Arin feeling watched without knowing why, protected human discomfort, not supernatural.
   ```
8. Seojun stare
   ```text
   His attention becoming too visible, emotional overfocus without melodrama.
   ```
9. Line shadow
   ```text
   Blind-shadow lines crossing a wall like broken staff lines, subtle motif, realistic environment.
   ```
10. Unresolved cut
   ```text
   Her figure behind glass, not gone and not unreachable, only blurred and unsettled.
   ```

## 4. video generation packet

### MV mode

- format:
  - blurred-trust MV
- runtime target:
  - `35-40 sec`
- ending frame:
  - figure behind glass unresolved

### video prompt blocks

#### block 1 - familiar frame destabilizes

```text
Use stills from cuts 1, 2, and 3. Begin with a familiar campus presence, then soften access through glass reflection and one-earbud detail. Motion should feel emotionally late, not flashy.
```

#### block 2 - body learns unease first

```text
Use stills from cuts 4, 5, and 6. Let the swaying rail, overfocused face, and blurred light carry the instability. The emotional job is to make trust feel less reliable without explaining why.
```

#### block 3 - blur remains unresolved

```text
Use stills from cuts 7, 8, 9, and 10. Let Arin's discomfort, Seojun's visible attention, the line shadows, and the unresolved figure behind glass end the scene. No full-loss cue, no dramatic reveal.
```

## 5. production order

1. run music prompt test
2. reject if blur becomes glitch effect
3. generate stills for cuts 2, 3, 9, 10 first
4. expand to full 10-cut set
5. assemble 35-40 sec MV
