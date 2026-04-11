# E011 Integrated Media Packet

## 0. orchestration harness

- orchestra mode:
  - second-pass integrated generation packet
- director intent:
  - lock a stage-intimacy packet for song, stills, and MV
- truth source:
  - `ops/E011_song_brief.md`
  - `ops/E011_visual_cut_list.md`
  - `ops/E011_inworld_song_final_lock.md`
  - `ops/E011_inworld_suno_final.md`
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
  - performance must stay intimate, not spectacle

## 1. episode identity

- episode id:
  - `E011`
- fixed song title:
  - `남은 소리`
- role:
  - Arin debut spark / stage entrance track
- emotional thesis:
  - 많은 소리 속에서도 늦게까지 남는 한 줄의 무대 공기

## 2. music generation packet

### producer stack

- acoustic intimacy producer
- vocal narrative producer

### lyric hook

- `많은 소리 사이에서, 늦게까지 남은 소리가 있었어`

### final lyrics

#### verse 1

조명이 먼저 내려앉은 저녁에
나는 숨보다 가벼운 첫 박을 세고
많은 얼굴 사이를 지나가던 공기가
이상하게 한 줄만 남아 있었어

#### pre-chorus

큰 소리는 금방 흩어졌는데
조용한 떨림은 늦게까지 남아서
마이크 끝에 닿은 내 목소리가
누구보다 먼저 나를 붙들었어

#### chorus

많은 소리 사이에서
늦게까지 남은 소리가 있었어
환한 조명보다 오래
한 줄의 공기가 나를 따라왔어

아무 일 없는 노래처럼
가볍게 지나갈 수도 있었는데
그날의 무대 끝에서
나는 처음으로 내 숨을 또렷이 들었어

#### verse 2

웃음과 박수는 뒤로 번지고
케이블 그림자가 바닥을 스쳤고
나는 넘기듯 불렀던 한 문장이
이상하게 더 천천히 돌아왔어

#### pre-chorus 2

누군가를 향한 노래라기보다
그 순간의 공기에 가까웠는데
끝나고 나서야 알겠더라
남는 건 louder가 아니라 clearer라는 걸

#### chorus 2

많은 소리 사이에서
늦게까지 남은 소리가 있었어
먼저 사라진 건 빛이고
끝내 남은 건 얇은 저녁의 결이었어

아무 일 없는 노래처럼
스쳐 갈 수도 있었던 순간인데
그날의 무대 끝에서
나는 조금 더 분명한 쪽으로 걸어갔어

#### bridge

누군가는 그 밤을
그저 작은 공연 하나쯤으로 기억하겠지만
나는 알아
사람 많은 방 안에서도
한 줄의 숨은 오래 남는다는 걸

#### final chorus

많은 소리 사이에서
늦게까지 남은 소리가 있었어
돌아가는 발걸음 위로
첫 무대의 공기가 조용히 따라왔어

아무 일 없는 노래처럼
끝났다고 말할 수는 없었어
그날의 무대 끝에서
나는 내 안쪽의 떨림을 처음 믿어 두었어

### final music prompt

```text
Original Korean in-world campus performance song sung by a young female vocalist. Late spring evening, small university club room, intimate vocal, soft piano, clean electric guitar swells, light room ambience, restrained strings after chorus. Mood: a first small stage where noise fades and one clear line of air remains. Keep it quietly memorable, not an anthem and not idol-glossy. Images: stage light, microphone dust, crowded room, one clear breath left after sound. Avoid destiny, miracle, forever, superstar energy, artist imitation, cover language, and triumphant debut framing.
```

## 3. still image generation packet

### master look prompt

```text
Cinematic live-action Korean campus club-room stills, late spring evening, small performance room, pale yellow stage light, gray-blue shadows, realistic young-adult faces, microphone stand and cable detail, Arin on a modest stage, Seojun at the edge of the room, no idol gloss, no readable signage, no brand marks.
```

### priority cuts

- hero:
  - cut 4
- support:
  - cut 1
  - cut 5
  - cut 6
  - cut 10

### cut-by-cut image prompts

1. Wide room texture
   ```text
   Wide still of a small Korean university club performance room at late spring evening, students gathering, soft stage light, cinematic realism, intimate room scale.
   ```
2. Seojun edge frame
   ```text
   Young Korean male student in muted charcoal clothes near the wall, watching without wanting to watch, room light soft and indirect, realistic and restrained.
   ```
3. Microphone dust
   ```text
   Close-up of a microphone stand under pale yellow light, dust floating in the air, stage detail intimate not glamorous, no text.
   ```
4. Arin first frame
   ```text
   Hero medium shot of Arin on a small stage, half-lit by late spring stage light, realistic and human, first clear performance presence without idol styling.
   ```
5. Crowd blur
   ```text
   Blurred shoulders in the foreground, Arin clear in the distance, observed-point-of-view framing, one person becoming clear inside a crowd.
   ```
6. Seojun reaction
   ```text
   Restrained close-up of Seojun, face still but eyes caught by the sound, emotional narrowing without melodrama.
   ```
7. Hands on cable
   ```text
   Cable and instrument detail under soft stage light, performance texture, tactile and modest, no brand marks.
   ```
8. Stage light after note
   ```text
   Empty strip of light across the stage floor after a phrase ends, lingering sound translated into light residue.
   ```
9. Arin leaving stage
   ```text
   Medium-wide shot of Arin leaving the stage with an ordinary smile, crowd soft around her, not triumphant.
   ```
10. Afterimage
   ```text
   Empty microphone and dimming room with one clear line of yellow light left in gray-blue air, the sound remains after people fade.
   ```

## 4. video generation packet

### MV mode

- format:
  - observed stage-memory MV
- runtime target:
  - `30-40 sec`
- ending frame:
  - empty microphone with remaining light

### video prompt blocks

#### block 1 - room gathers

```text
Use stills from cuts 1, 2, and 3. Build the club room slowly with bodies gathering, the watcher at the edge, and microphone dust under stage light. Keep the atmosphere intimate and observational, never hype-driven.
```

#### block 2 - one person comes forward

```text
Use stills from cuts 4, 5, and 6. Let Arin become visually clear while the room softens behind her. Then cut to Seojun's restrained reaction. Motion should feel like perception narrowing, not love-at-first-sight spectacle.
```

#### block 3 - the note remains

```text
Use stills from cuts 7, 8, 9, and 10. Translate performance residue into cable detail, stage light after the note, Arin leaving stage, and the empty microphone afterimage. End on what stays in the air, not on applause.
```

## 5. production order

1. run music prompt test
2. choose accepted intimacy balance
3. generate stills for cuts 4, 5, 6, 10 first
4. expand to full 10-cut set
5. assemble 30-40 sec MV
