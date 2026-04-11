# E034 Integrated Media Packet

## 0. orchestration harness

- orchestra mode:
  - third-pass integrated generation packet
- director intent:
  - lock a protected-interior packet for song, stills, and MV
- truth source:
  - `ops/E034_song_brief.md`
  - `ops/E034_visual_cut_list.md`
  - `ops/E034_inworld_song_final_lock.md`
  - `ops/E034_inworld_suno_final.md`
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
  - Arin's interiority must remain protected, not decoded

## 1. episode identity

- episode id:
  - `E034`
- fixed song title:
  - `유리 뒤의 여름`
- role:
  - Arin withdrawal / protected interior track
- emotional thesis:
  - 닫힘은 사라짐이 아니라 자기 안쪽을 보호하기 위한 거리다

## 2. music generation packet

### producer stack

- tension minimalism producer
- vocal narrative producer

### lyric hook

- `너는 거기 있었는데, 소리만 유리 뒤로 멀어졌어`

### final lyrics

#### verse 1

창문은 열려 있었는데도
여름은 조금 멀리서만 닿았고
나는 네 앞에 앉아 있으면서도
안쪽의 문 하나를 먼저 닫고 있었어

#### pre-chorus

차가워지고 싶은 건 아니었어
다만 너무 가까운 빛 앞에서는
내 마음의 얇은 결이
쉽게 흔들릴 것 같아 조용해졌어

#### chorus

너는 거기 있었는데
소리만 유리 뒤로 멀어졌어
사라진 게 아니라 조금 더 안쪽으로
내 계절을 숨겨 둔 것뿐이었어

닫힌 창은 아니지만
쉽게 손 닿을 거리도 아니었어
그 여름의 얇은 반사광 속에서
나는 나를 먼저 가려 두고 있었어

#### verse 2

대답하지 않은 얼굴과
천천히 멀어지는 빛의 가장자리
네가 틀린 건 아니란 걸 알면서도
나는 바로 설명할 힘이 모자랐어

#### pre-chorus 2

보이지 않는 쪽까지
전부 들켜 버릴 것만 같은 날엔
사람은 종종 silence보다
얇은 유리 한 장을 먼저 세우게 돼

#### chorus 2

너는 거기 있었는데
소리만 유리 뒤로 멀어졌어
떠난 게 아니라 조금 늦게
나를 다시 붙잡기 위해 물러난 거였어

창문엔 빛이 남아도
내 안쪽은 쉽게 열리지 않았어
그 여름의 흐린 반사광 속에서
나는 내 쪽의 숨을 먼저 지키고 있었어

#### bridge

누군가는 이런 순간을
갑작스런 침묵이라 부르겠지만
나는 알아
완전히 사라지지 않기 위해
조금 멀어지는 저녁도 있다는 걸

#### final chorus

너는 거기 있었는데
소리만 유리 뒤에 남아 있었어
끝난 게 아니라 너무 가까운 자리에서
잠깐 내 안쪽을 보호하고 있었어

닫힌 문은 아니었고
돌아오지 못할 거리도 아니었어
그 여름의 얇은 유리 너머로
나는 조금 늦게 나를 지키고 있었어

### final music prompt

```text
Original Korean restrained interior track sung by a young female vocalist. Glassy electric piano, low muted strings, airy pad, sparse brushed-metal texture, close but slightly filtered vocal as if behind thin glass. Mood: someone withdrawing inward without disappearing, window reflection, blurred light, unanswered pause, and summer air held at a distance. Keep it human and protective, not supernatural and not mystery-coded. Avoid complete silence, vanished person language, magic effects, artist imitation, cover language, and dramatic emotional blackout.
```

## 3. still image generation packet

### master look prompt

```text
Cinematic live-action Korean campus interior with glass and window motif, emotional withdrawal, muted summer edge light, realistic restraint, blurred light on glass, no supernatural effect, no complete-silence fantasy image, no logos.
```

### priority cuts

- hero:
  - cut 3
- support:
  - cut 2
  - cut 4
  - cut 7
  - cut 9

### cut-by-cut image prompts

1. Close conversation
   ```text
   Seojun and Arin seated or standing close in ordinary campus interior light, intimacy present but fragile, realism first.
   ```
2. Arin turns slightly
   ```text
   Arin looking slightly away, not cold but inward, subtle self-protective gesture, muted summer edge light.
   ```
3. Glass reflection
   ```text
   Hero frame where window glass shows Seojun's reflection instead of direct access to Arin, thin barrier, realistic and quiet.
   ```
4. Seojun tries to read
   ```text
   Restrained close-up of Seojun with anxiety beginning, no panic, only the first sense of losing access.
   ```
5. Blurred light
   ```text
   Light on glass becoming soft and distant, emotional distance shown as visual blur rather than darkness.
   ```
6. Hands not moving
   ```text
   Hands on table or at sides, no contact, tension held in stillness.
   ```
7. Window line
   ```text
   Vertical glass or window line dividing the composition, same room but altered access.
   ```
8. Widened distance
   ```text
   Same room with more space visible between them, emotional distance widening inside ordinary reality.
   ```
9. Unanswered face
   ```text
   Arin's expression protected and not decoded, realistic, inward, no mystery-device framing.
   ```
10. Corridor after
   ```text
   Quiet corridor after the moment, muted light and lingering distance, no supernatural emptiness.
   ```

## 4. video generation packet

### MV mode

- format:
  - glass-distance MV
- runtime target:
  - `35-40 sec`
- ending frame:
  - corridor after the moment

### video prompt blocks

#### block 1 - ordinary closeness tilts

```text
Use stills from cuts 1, 2, and 4. Start with ordinary closeness, then let Arin turn slightly away and Seojun begin to read the shift. The emotional job is not conflict explosion but access thinning.
```

#### block 2 - glass becomes grammar

```text
Use stills from cuts 3, 5, and 7. Let the glass reflection, blurred light, and vertical window line become the visual grammar for emotional withdrawal. No magic, no total silence fantasy, just protected distance.
```

#### block 3 - interior remains protected

```text
Use stills from cuts 8, 9, and 10. Widen the space, hold on Arin's unanswered face without decoding it, then end in the quiet corridor after the moment. The scene should protect her interior, not solve it.
```

## 5. production order

1. run music prompt test
2. reject if distance becomes mystery coding
3. generate stills for cuts 2, 3, 7, 9 first
4. expand to full 10-cut set
5. assemble 35-40 sec MV
