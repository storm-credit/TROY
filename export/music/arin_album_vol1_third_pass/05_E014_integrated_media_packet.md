# E014 Integrated Media Packet

## 0. orchestration harness

- orchestra mode:
  - third-pass integrated generation packet
- director intent:
  - lock a taste-intimacy packet for song, stills, and MV
- truth source:
  - `ops/E014_song_brief.md`
  - `ops/E014_visual_cut_list.md`
  - `ops/E014_inworld_song_final_lock.md`
  - `ops/E014_inworld_suno_final.md`
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
  - intimacy through taste, not duet drama

## 1. episode identity

- episode id:
  - `E014`
- fixed song title:
  - `이름 없는 노래`
- role:
  - Arin shy conversation / taste-intimacy track
- emotional thesis:
  - 음악 이야기를 핑계로 서로의 여백이 조금 열린다

## 2. music generation packet

### producer stack

- acoustic intimacy producer
- vocal narrative producer

### lyric hook

- `네가 좋아한 소리 옆에, 내 침묵도 잠깐 앉아 있었어`

### final lyrics

#### verse 1

반쯤 남은 커피 옆으로
햇빛이 노트 가장자릴 넘고
우린 좋아하는 소릴 말했지만
사실은 하루의 빈칸을 꺼내고 있었지

#### pre-chorus

이름을 붙이면 금방
설명으로 작아질 것 같아서
너와 내가 알게 된 공기는
그냥 모른 척 옆에 앉혀 두었어

#### chorus

네가 좋아한 소리 옆에
내 침묵도 잠깐 앉아 있었어
끝내 이름 없는 노래처럼
우린 작은 취향으로 서로를 열어 두었어

테이블 위의 빛처럼
조용히 번지는 얘기 사이에서
말보다 늦게 오는 안심이
조금씩 우리 쪽으로 기울고 있었어

#### verse 2

장르도 제목도 없는 채로
좋았던 순간만 남겨 두듯이
우린 너무 빨리 닮지 않으면서
비슷한 외로움을 천천히 듣고 있었어

#### pre-chorus 2

같은 노래를 듣는다고
같은 마음이 되는 건 아니지만
그날의 노트 여백엔 분명
혼자보다 덜 빈 공기가 남아 있었어

#### chorus 2

네가 좋아한 소리 옆에
내 침묵도 잠깐 앉아 있었어
끝내 부르지 못한 이름 대신
우린 조용한 리듬으로 서로를 기억했어

햇빛이 남은 자리처럼
쉽게 지워지지 않는 얘기 사이에서
나는 조금 더 너를 향해
설명보다 가까운 쪽으로 기울고 있었어

#### bridge

누군가는 이런 순간을
별것 아닌 대화라 부를지 몰라도
나는 알아
이름 없는 노래 하나가
사람 둘 사이를 먼저 바꿀 때가 있다는 걸

#### final chorus

네가 좋아한 소리 옆에
내 침묵도 오래 남아 있었어
끝내 제목 없는 노래처럼
우린 서로의 여백을 함부로 덮지 않았어

테이블 위의 빛처럼
늦게까지 따뜻한 얘기 안에서
나는 그날의 조용한 취향을
조금 더 오래 믿어 두고 싶었어

### final music prompt

```text
Original Korean acoustic in-world relationship song sung by a young female vocalist. Cafe afternoon, warm upright piano, nylon guitar, soft brushed percussion, minimal bass, close conversational vocal. Mood: two people talking about music while quietly revealing loneliness and taste, notebook margins, unfinished coffee, sunlight on a table, and an unnamed shared song. Keep it shy, warm, and intimate, never theatrical. Avoid artist names, song titles, genre lecture, big romantic promises, artist imitation, and duet-showcase energy.
```

## 3. still image generation packet

### master look prompt

```text
Cinematic live-action Korean campus cafe or quiet classroom stills, afternoon table light, notebooks, coffee cups, natural skin texture, soft warmth, shy conversation energy, no artist names, no readable song titles, no logos.
```

### priority cuts

- hero:
  - cut 6
- support:
  - cut 1
  - cut 4
  - cut 5
  - cut 8

### cut-by-cut image prompts

1. Table setup
   ```text
   Sunlit table with two notebooks and two half-full coffee cups in a campus cafe or classroom corner, quiet warmth, everyday intimacy.
   ```
2. Arin's hand
   ```text
   Arin's finger resting near a blank notebook margin, no readable title, warm afternoon light on paper and skin.
   ```
3. Seojun's glance
   ```text
   Seojun looking at the notebook instead of directly at Arin, guarded but interested, realistic campus closeness.
   ```
4. Shared listening pose
   ```text
   Two people at a table in a listening posture, not physically merged, distance intact, taste intimacy starting to form.
   ```
5. Sunlight strip
   ```text
   Warm light strip across the coffee surface and table edge, quiet visual rhythm, no overt romance staging.
   ```
6. Half-smile
   ```text
   Hero close-up of Arin speaking gently with a half-smile, afternoon light soft on the face, not flirt performance.
   ```
7. Seojun's answer
   ```text
   Seojun's guarded expression softening by a small degree, table still between them, realism first.
   ```
8. Empty table after
   ```text
   Notebook margin and cup ring left on the table after the conversation, residue of taste and quiet warmth.
   ```

## 4. video generation packet

### MV mode

- format:
  - quiet cafe-talk MV
- runtime target:
  - `30-35 sec`
- ending frame:
  - empty table with residue

### video prompt blocks

#### block 1 - table light

```text
Use stills from cuts 1, 2, and 5. Establish the table, the notebooks, the half-full cups, and the soft afternoon light. The emotional job is to show shared taste before overt intimacy.
```

#### block 2 - conversation opens a small space

```text
Use stills from cuts 3, 4, 6, and 7. Focus on the notebook glance, the shared listening pose, Arin's half-smile, and Seojun's slight softening. Keep motion minimal and conversational, never duet-like or theatrical.
```

#### block 3 - what remains unnamed

```text
Use still from cut 8 as the ending anchor. Let the empty table carry the warmth left after the conversation. End on residue and unnamed closeness, not confession.
```

## 5. production order

1. run music prompt test
2. reject if conversation turns into duet showpiece
3. generate stills for cuts 1, 4, 6, 8 first
4. expand to full 8-cut set
5. assemble 30-35 sec MV
