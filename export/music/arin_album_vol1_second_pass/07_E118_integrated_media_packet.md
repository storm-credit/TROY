# E118 Integrated Media Packet

## 0. orchestration harness

- orchestra mode:
  - second-pass integrated generation packet
- director intent:
  - lock a dignified parting packet for song, stills, and MV
- truth source:
  - `ops/E118_song_brief.md`
  - `ops/E118_visual_cut_list.md`
  - `ops/E118_inworld_song_final_lock.md`
  - `ops/E118_inworld_suno_final.md`
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
  - mutual truth must not slip into reunion coding

## 1. episode identity

- episode id:
  - `E118`
- fixed song title:
  - `같은 말을 하던 저녁`
- role:
  - Arin final dignified parting track
- emotional thesis:
  - 진짜였음을 인정하되 함께 가는 미래까지는 고르지 않는 저녁

## 2. music generation packet

### producer stack

- literary residue producer
- album arc producer

### lyric hook

- `우린 같은 말을 하던 저녁에, 같은 미래를 고르진 않았어`

### final lyrics

#### verse 1

문 앞에서 잠깐 멈춘 저녁이
우리보다 먼저 숨을 고르고
나는 오래 미뤄 둔 문장들을
이번에는 너무 늦지 않게 꺼냈어

#### pre-chorus

좋았던 것도 진짜였고
아팠던 것도 진짜였다는 말 앞에서
우리는 처음으로
서로를 덜 고치고 끝까지 들었어

#### chorus

우린 같은 말을 하던 저녁에
같은 미래를 고르진 않았어
창가의 짧은 빛 아래서도
서로의 진실은 분명히 남아 있었어

다시 걷는 쪽보다
끝까지 인정하는 쪽을 택했어
그날의 저녁은 이상하게도
헤어지면서 더 정확해졌어

#### verse 2

손은 끝내 닿지 않았지만
그 거리마저 더는 서럽지 않았고
긴 그림자가 골목으로 번질 때
우린 말보다 늦게 같은 숨을 골랐어

#### pre-chorus 2

돌아갈 수 없다는 말이
곧 거짓이었다는 뜻은 아니라서
나는 마지막의 진실도
조금 낮은 목소리로 믿어 두었어

#### chorus 2

우린 같은 말을 하던 저녁에
같은 내일을 약속하진 않았어
카페 문을 닫는 바람 안에서도
서로의 표정은 조금 덜 무서워졌어

다시 시작보다
끝까지 듣는 쪽을 택했어
그날의 저녁은 조용했지만
이상하리만큼 오래 남을 것 같았어

#### bridge

누군가는 이런 장면을
너무 늦은 사랑이라고 부르겠지만
나는 알아
같은 말을 할 수 있게 된 것만으로도
충분히 진짜인 저녁이 있다는 걸

#### final chorus

우린 같은 말을 하던 저녁에
같은 길을 고르진 않았어
그래도 짧은 창가의 빛 아래서
서로의 계절을 함부로 지우진 않았어

다시 만날 promise 대신
끝내 남는 진실을 안고 갔어
그날의 저녁은 헤어짐이었지만
이상하게도 처음보다 덜 틀렸어

### final music prompt

```text
Original Korean dignified parting song sung by a young female vocalist. Sparse piano, restrained strings, soft late-evening air, medium-close thoughtful vocal, controlled lift only. Mood: Cafe Dal entrance, a short-lit window table, and a long-shadow alley where two people finally say the same truth without choosing the same future. Keep it honest, low, and emotionally exact, not melodramatic and not reunion-coded. Avoid reunion language, closure glow, final victory, artist imitation, cover language, and oversized finale emotion.
```

## 3. still image generation packet

### master look prompt

```text
Cinematic live-action Korean late-autumn stills, Cafe Dal entrance, short-lit window table, long alley shadow, honest faces, realistic separation dignity, no reunion glow, no logos, no readable signage, no final-kiss coding.
```

### priority cuts

- hero:
  - cut 8
- support:
  - cut 1
  - cut 2
  - cut 6
  - cut 10

### cut-by-cut image prompts

1. Entrance pause
   ```text
   Both people hesitate at the Cafe Dal door, late-autumn air, realistic faces, emotional gravity without melodrama.
   ```
2. Window table
   ```text
   The conversation starts at a window table with short light, warm interior but restrained, no reunion coding.
   ```
3. Recognition line
   ```text
   One person acknowledging memory without softening it, face plain and honest, realistic emotional restraint.
   ```
4. Listening beat
   ```text
   Each person listening all the way through, no interruption energy, medium-close stills with quiet dignity.
   ```
5. Hand distance
   ```text
   Hands staying separate on or near the table, distance visible and intentional, no touching cue.
   ```
6. Alley shift
   ```text
   The pair moving into the long shadow outside, warm interior behind, cooler shadow ahead, transition without reunion signal.
   ```
7. No reunion cue
   ```text
   Frame that refuses to signal return: same air, same people, but no kiss, no embrace, no victory glow.
   ```
8. Final face look
   ```text
   Hero close or medium-close frame where they see each other plainly, mutual truth without promise, emotionally exact.
   ```
9. Parting step
   ```text
   Their walk splits at the end of the alley, realistic spacing, quiet dignity, no dramatic collapse.
   ```
10. Residue frame
   ```text
   The same late-evening air remains after separation, window light behind, alley shadow ahead, truth staying in the space.
   ```

## 4. video generation packet

### MV mode

- format:
  - dignified parting MV
- runtime target:
  - `35-45 sec`
- ending frame:
  - residue air remains after separation

### video prompt blocks

#### block 1 - before the table

```text
Use stills from cuts 1 and 2. Begin at the entrance pause, then the short-lit window table. The emotional job is to show shared seriousness without reunion promise. Keep motion slow, clear, and unsentimental.
```

#### block 2 - truth is heard through

```text
Use stills from cuts 3, 4, and 5. Let the recognition line, the listening beat, and the hand distance carry the scene. No crying collapse, no climactic embrace. The room should feel exact and low.
```

#### block 3 - outside without return

```text
Use stills from cuts 6, 7, and 8. Move into the alley shadow and insist visually on no reunion cue. Then hold on the final face look where the mutual truth lands.
```

#### block 4 - separation with residue

```text
Use stills from cuts 9 and 10. Let the walk split and then hold on the same air after separation. End on residue, not closure glow.
```

## 5. production order

1. run music prompt test
2. reject if dignity turns into melodrama
3. generate stills for cuts 2, 6, 8, 10 first
4. expand to full 10-cut set
5. assemble 35-45 sec MV
