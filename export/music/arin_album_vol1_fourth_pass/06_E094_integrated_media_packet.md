# E094 Integrated Media Packet

## 0. orchestration harness

- orchestra mode:
  - fourth-pass integrated generation packet
- director intent:
  - lock a correction-listening packet for song, stills, and MV
- truth source:
  - `ops/E094_song_brief.md`
  - `ops/E094_visual_cut_list.md`
  - `ops/E094_inworld_song_final_lock.md`
  - `ops/E094_inworld_suno_final.md`
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
  - correction and pause must outrank reconciliation feeling

## 1. episode identity

- episode id:
  - `E094`
- fixed song title:
  - `끝까지 들은 말`
- role:
  - Arin correction / asking track
- emotional thesis:
  - 다시 안 게 아니라, 끝까지 듣는 방식이 처음 생긴다

## 2. music generation packet

### producer stack

- literary residue producer
- vocal narrative producer

### lyric hook

- `이번엔 들은 게 아니라, 끝까지 들은 말이 있었어`

### final lyrics

#### verse 1

비스듬한 자리 사이로
먼저 오가는 건 말보다 숨이었고
나는 대답보다 오래
질문이 남아 있는 얼굴을 보고 있었어

#### pre-chorus

이번엔 빨리 정리하지 않고
조금 늦게 meaning을 남겨 두었어
끝까지 듣는다는 건
상처를 없애는 일보다 다르게 머무는 일이었어

#### chorus

이번엔 들은 게 아니라
끝까지 들은 말이 있었어
맞았던 기억보다 먼저
고쳐진 문장 하나가 오래 남아 있었어

다 안 것처럼 웃지 않고
조금 다른 gaze를 안고 돌아섰어
그날의 대화는 가까움보다
덜 틀리는 쪽으로 우리를 옮겨 두었어

#### verse 2

예전의 나는 아마
침묵보다 먼저 뜻을 붙였겠지만
이번엔 멈춘 자리를
그대로 비워 두는 쪽을 배워 보고 있었어

#### pre-chorus 2

아프지 않았던 건 아니야
다만 pain보다 certainty를 줄였고
그만큼 남은 말들이
조금 더 사람다운 속도로 들리기 시작했어

#### chorus 2

이번엔 들은 게 아니라
끝까지 들은 말이 있었어
다시 만난 장면보다 먼저
고쳐지는 태도 하나가 오래 남아 있었어

모든 걸 안 것처럼
쉽게 안심하는 표정은 아니었지만
그날의 대화는 적어도
예전보다 덜 서두르는 쪽으로 남아 있었어

#### bridge

누군가는 이런 변화를
대단하지 않은 대화라 부를지 몰라도
나는 알아
끝까지 듣고 남겨 두는 말 하나가
사람 사이의 윤리를 바꿀 때가 있다는 걸

#### final chorus

이번엔 들은 게 아니라
끝까지 들은 말이 있었어
같아진 미래보다 먼저
달라진 listening 하나가 우리를 남겨 두었어

다 이해한 얼굴은 아니어도
조금 덜 틀린 채 돌아설 수 있었어
그날의 말은 사랑보다 작았지만
이상하게 더 오래 남을 것 같았어

### final music prompt

```text
Original Korean restrained conversational reflection song sung by a young female vocalist. Transformed old motif timbre, sparse piano gaps, cold pad, short noise-breath, close unadorned vocal. Mood: angled conversation, correction, pause, and a different gaze after speaking, with language carrying more weight than certainty. Keep it ethically focused and emotionally exact, not victorious and not reconciliatory. Avoid total-understanding lyrics, melody-return framing, reconciliation swell, emotional victory cues, artist imitation, and cover language.
```

## 3. still image generation packet

### master look prompt

```text
Cinematic live-action Korean dialogue stills, 45-degree two-shot, listening face, correction beat, separate gaze after conversation, clean autumn interior light, realistic faces, no reconciliation climax, no hand-clasp payoff, no logos.
```

### priority cuts

- hero:
  - cut 5
- support:
  - cut 1
  - cut 4
  - cut 8
  - cut 10

### cut-by-cut image prompts

1. 45-degree approach
   ```text
   Conversation beginning at an angle rather than head-on, autumn interior light, caution and honesty in the geometry.
   ```
2. Held caution
   ```text
   Both bodies carrying restraint, not hostile and not open too easily, realistic emotional distance.
   ```
3. Question asked
   ```text
   One face opening without pressing forward, question energy without demand.
   ```
4. Correction beat
   ```text
   Subtle reaction to being corrected, no collapse, no triumph, just ethical impact landing.
   ```
5. Listening close-up
   ```text
   Hero close-up of a face that keeps listening long enough to hear correction through, emotionally exact and restrained.
   ```
6. No interruption
   ```text
   Open space between lines and bodies, pause visible, unresolved but held.
   ```
7. Answer arrives
   ```text
   Reaction delayed and partial, thought arriving after speech, no solved warmth.
   ```
8. Separate gaze
   ```text
   After speaking, both look away in different directions, changed but not merged.
   ```
9. Room remains
   ```text
   The room keeping quiet weight after the conversation, language heavier than atmosphere.
   ```
10. Unresolved exit
   ```text
   Departure without hand touch or embrace, only the ethical change remaining.
   ```

## 4. video generation packet

### MV mode

- format:
  - correction-and-pause MV
- runtime target:
  - `35-40 sec`
- ending frame:
  - unresolved exit after changed listening

### video prompt blocks

#### block 1 - angled start

```text
Use stills from cuts 1, 2, and 3. Begin with the angled geometry, held caution, and the question being asked without pressure. Motion should stay quiet and exact.
```

#### block 2 - correction lands

```text
Use stills from cuts 4, 5, and 6. Make the correction beat, the listening close-up, and the unbroken pause the emotional center. No reconciliation swell, no mutual-solution glow.
```

#### block 3 - changed but unfinished

```text
Use stills from cuts 7, 8, 9, and 10. Let delayed reaction, separate gazes, room weight, and unresolved exit carry the ending. The scene should feel more ethical, not more romantic.
```

## 5. production order

1. run music prompt test
2. reject if correction turns into reunion
3. generate stills for cuts 1, 4, 5, 10 first
4. expand to full 10-cut set
5. assemble 35-40 sec MV
