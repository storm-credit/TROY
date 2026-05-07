# E001 Suno Paste Card v2 — 무료한 일상

> Suno 앞에 앉아서 이 파일 1개만 열고 진행. 가사 v8 + style prompt v2 + 런플랜 통합.
> Source: `ops/E001_lyrics_v8.md`, `ops/E001_suno_style_prompt_v2.md`

---

## 🎤 STEP 1 — Suno UI 4 필드 (3 버전 공통)

| 필드 | 값 |
|---|---|
| **Title** | 무료한 일상 |
| **Vocal Gender** | Female |
| **Weirdness** | 40 |
| **Style Influence** | 70 |
| **Persona** | (비워둠) |
| **Model** | v5 |
| **Lyrics Mode** | Manual |

---

## 🎵 STEP 2 — Lyrics 필드 (3 버전 모두 동일, 그대로 paste)

```
[verse 1]
잘 지내냐는 말에 잘 지낸다고 답했어
누가 들을까 봐 작게 웃어 두었어
방은 조용한데 머릿속이 시끄러워서
이불을 한 번 더 끌어안고 누웠어
오늘도 안부 같은 것들이 도착했고
나는 읽었다는 표시만 남겨 두었어
대답할 말이 없는 게 아니라
대답할 기운이 남아 있지 않아서

[pre-chorus]
가까이 오는 건 다 무거운 것 같아
멀리 있어도 다 들리는 것 같아
괜찮다는 말이 입에서 자꾸 굳어
괜찮지 않다는 말이 더 무서워서

[chorus]
마음들이 너무 많아서
나는 내 귀부터 닫고 살았어
닿지 않아도 알아 버려서
모르는 척이 더 편했어
오늘도 같은 자리에서
같은 표정을 골라 입었어

[verse 2]
거울 속 얼굴이 한 박자 늦게 웃어
누구의 하루를 따라 입은 건지 몰라
창문은 열려 있는데 바람은 안 들어와
계절이 나만 빼고 지나가는 것 같아
누가 부르는 소리에 돌아보지 않았어
대답하면 더 멀어질 것 같아서
가만히 있는 게 가장 안전했어
가만히 있는 게 가장 외로웠어

[chorus]
마음들이 너무 많아서
나는 내 귀부터 닫고 살았어
닿지 않아도 알아 버려서
모르는 척이 더 편했어
오늘도 같은 자리에서
같은 표정을 골라 입었어

[bridge]
어쩌면 나는 듣고 싶었던 건지도 몰라
내가 먼저 닫아 둔 문 너머의 소리를
누가 두드려 주기를 기다린 건 아닌데
누가 두드릴까 봐 더 깊이 잠겼어
그게 다정인지 도망인지
나도 잘 모르겠어

[final chorus]
마음들이 너무 많아서
나는 내 귀부터 닫고 살았어
닿지 않아도 알아 버려서
모르는 척이 더 편했어
같은 자리에 오래 앉아 있으면
조금은 괜찮아질 줄 알았어
나는 내 귀부터 닫아 두었어
```

---

## 🎚️ STEP 3 — Styles 필드 (버전별로 다름, 8-12 take 씩)

### Run 1: Master (BPM 75) — 8-12 takes

```
Korean modern indie folk, intimate restrained lane, gray late-spring campus air, closed emotionally tired, not redemptive. 75 bpm slow walking pulse, no uplift, D minor feel, 4/4 breathing rubato. Female intimate withdrawn alto, close-mic, dry, audible breath, soft consonants, vocal forward in mix, no vibrato gloss, conversational Korean, tense-consonant clarity. Intro under 6 sec: single warm fingerpicked nylon guitar, vocal enters by 0:07 with the hook as first sung phrase. Nylon counterpoint, muted felt-damper upright piano, low brushed snare ghost only, faint room, no pad, no synth, no strings. Dry close intimate mix, narrow stereo, subtle room, no reverb tail, no key change, no drum kit, no swell beyond a small bloom. Earphone-wire hiss, paper-thin air, cafeteria-corner stillness. Avoid ballad gloss, EDM, gospel choir, soaring final.
```

### Run 2: Variation A Lo-fi (BPM 70) — 5-8 takes

위 Master 블록에서 **`75 bpm slow walking pulse`** 부분만 아래로 교체:

```
70 bpm slow walking pulse, lo-fi tape feel, soft vinyl crackle bed, narrowed stereo, slight tape saturation
```

나머지 모두 동일 (vocal·mix·intro 룰·instrumentation 그대로 — Locking rule).

### Run 3: Variation B Alt-folk (BPM 80) — 5-8 takes

위 Master 블록에서 **`75 bpm slow walking pulse`** 부분을 아래로 교체:

```
80 bpm gentle alt-folk pulse, low brushed drum ghost present (still ghost, never kit), wider stereo image but still dry
```

추가로 `low brushed snare ghost only` → `low brushed snare and rim ghost, still subdued` 로 교체. 나머지 동일.

---

## ✅ STEP 4 — 큐레이션 룰 (각 take 30초 안에 판단)

생성된 take 별로 다음 6항목 순서대로:

1. ❌ **Vocal entry 0:10 이후** → SKIP
2. ❌ **Vocal 멀거나 wet (잔향 길거나 mix 뒤)** → SKIP
3. ❌ **첫 사창 라인 (`잘 지내냐는 말에...`) 정서 안 잡힘** → SKIP
4. ❌ **드럼 킷 / 패드 / 스트링 / 키 체인지 등장** → SKIP (Phase 1 lift 금지 위반)
5. 🟡 **survivors A/B** — 아래 캘리브 곡 #1·#4 의 첫 8-12초 첫인상 기준
6. ✅ **버전당 top 1-2 만 통과** → TROY 콘솔 워크벤치 (`http://localhost:3211/episode/E001/workbench`) 에 업로드 (`E001_master.mp3` / `E001_var_a_lofi.mp3` / `E001_var_b_altfolk.mp3`)

### 캘리브레이션 곡 (사용자 듣고 first-impression 기준 잡기)

| # | 곡 | 듣고 체크할 것 |
|---|---|---|
| 1 | 검정치마 - 강아지 | 0:08 안에 nylon + 보컬, 친밀 거리감 |
| 2 | 검정치마 - Everything | 0:00 부터 dry close vocal |
| 3 | 9와 숫자들 - 보물 | sparse, 첫 phrase 가 hook |
| 4 | **정밀아 - 그리운 그대** | breath-forward female, 즉시 intimacy |
| 5 | 짙은 - 우리의 밤은 당신의 낮보다 아름답다 | felt-piano 절제, swell 없음 |
| 6 | 신해경 - 나는 | dry close, paper-thin air |

→ **#1 + #4** 특히 비교 기준 (#4 가 female 대조군). 새 take 가 #1·#4 옆에서 멀게 느껴지면 skip.

---

## 🎯 Run Goal (성공 기준)

- 총 18-28 generations
- 버전당 살아남는 후보 ≥ 1
- final 후보 3개 (Master / Var A / Var B 각 1) 워크벤치 업로드
- 그 중 1 개를 E001 main mp3 로 lock → 가사·곡 lock 후 storyboard·MV 단계 진입

---

## 📓 Conductor 노트

- **첫인상 fix 3 가지 (style prompt v2 핵심):**
  1. Hard-coded `vocal enters by 0:07 with the hook as first sung phrase` — Suno 의 디폴트 긴 인트로 차단
  2. `close-mic, dry, audible breath, no vibrato gloss` + `no reverb tail, narrow stereo, subtle room` — vocal 묻힘·wet 차단
  3. `fingerpicked nylon guitar, muted felt-damper upright piano, low brushed snare ghost only` — Suno 의 평균값 발라드 piano-pad 함정 차단
- **가사 v8 핵심:**
  - 첫 줄 hook: `잘 지내냐는 말에 잘 지낸다고 답했어` — 한국 보편 거짓말, 0초 즉발
  - chorus emotion line `내 귀부터 닫고 살았어` 3회 verbatim + final 1회 변형 lift
  - 작품 신 / 캐릭터 / 이어폰 / 공감각 직접 언급 0건 (universal 100%)
- **운영 룰:** 3 버전 vocal config 동일, BPM 만 다름. 절대 두 변수 동시 흔들지 말 것.

---

## 🚦 사용자 다음 행동

1. Suno 가서 **Master (BPM 75)** 부터 8-12 take
2. 큐레이션 룰로 즉시 SKIP/KEEP 판단
3. survivors top 2 후, **Var A Lo-fi (BPM 70)** 5-8 take
4. **Var B Alt-folk (BPM 80)** 5-8 take
5. 최종 후보 3 개 (`E001_master.mp3` 등) → 워크벤치 드롭
6. 1 개 lock → Conductor 에 보고 → 가사·곡 lock → 다음 단계 (storyboard 12-14)
