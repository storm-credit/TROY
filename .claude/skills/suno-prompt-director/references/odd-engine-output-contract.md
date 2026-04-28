# ODD ENGINE Output Contract

## When To Use

Use this reference for ODD ENGINE tracks, especially `KR-01` through `KR-10`, Suno Paste Packs, MV music planning, and requests like:

- `KR-03 읽씹 Suno 가사 구성`
- `이 트랙 3분 30초 나오게 조정`
- `Run B 혼성으로 바꿔`
- `스타일 프롬프트 저작권 리스크 제거`

## Local Context To Pull

When available, inspect only the needed files:

- `10_KR/KR-XX_*.md`: track core, BPM, key, hook, character premise.
- `briefs/songs/KR-XX_*_SUNO_PASTE_PACK.md`: existing paste pack.
- `99_TEMPLATES/SONG_GATE_QA_TEMPLATE.md`: project QA format.

If files are missing, continue from the user's brief and mark assumptions.

## Canonical Full Output

```md
## Title
[short Korean or bilingual title]

## Hook Spec
- Phrase: [the core repeating hook line, 4-8 syllables ideal]
- Repetition: [count in chorus, e.g. "3x consecutive + 2x in final chorus"]
- Vocal placement: [downbeat / offbeat / call-and-response]
- Earworm test: [does the phrase survive without the track?]

## Run A
### Style
[compact Suno-ready style prompt, 600-850 chars, NO duration promise]

### Lyrics
[section-tagged lyrics, verse line count ≤ chorus line count]

### Hook Audit
- [ ] Hook lands in first 8 sec of chorus
- [ ] Verse ≤ chorus line count
- [ ] Repetition feels musical, not padded

### Notes
[production intent and what to listen for]

## Run B
### Style
[only one or two controlled changes from Run A]

### Lyrics
[changed only where the Run B goal requires it]

### Hook Audit
[same checklist]

### Notes
[what changed and why]

## Run Goal
- A tests: [baseline goal]
- B tests: [the 1-2 controlled changes only]
- Locked variables: [BPM/key locked if vocal config changes]
- Choose B if: [specific listening criterion — hook recall after 1 listen / chorus density / vocal grab in first 8 bars]

## Suno UI Settings
- Lyrics Mode: Manual
- Vocal Gender: [lead vocal setting; duet handled in lyrics tags if needed]
- Weirdness: [number]
- Style Influence: [number]
- Model/Feature Notes: [v5/v5.5/Voices/Extend assumptions if relevant]
- Styles length: [000/1000 characters when known]

## Audit
- Hook strength (8-sec test, verse≤chorus ratio): PASS/REVISE
- Copyright/artist safety: PASS/REVISE
- Style focus and length (≤850, no duration promise): PASS/REVISE
- Korean pronunciation (jamo emoticons, Sino/Native consistency): PASS/REVISE
- Lyric structure and line volume: PASS/REVISE
- Vocal tags: PASS/REVISE
- Run A/B comparison (1-2 vars, BPM/key locked if vocal changes): PASS/REVISE
- UI settings: PASS/REVISE
```

## Focused Output

If the user only asks for one item, return only that item plus audit:

- Style rewrite: `Style` + `Audit`
- Lyrics repair: `Lyrics` + `Korean Lyric QA`
- Duet conversion: `Vocal Plan` + revised tagged lyrics + `Audit`
- Suno setup: `Suno UI Settings` + any fields the user should paste.
- Prompt audit: findings first, then revised paste-ready block if needed.

## ODD ENGINE Channel DNA (불변 우선순위)

1. **훅 중독성** — 모든 곡에서 chorus가 verse보다 강해야 한다. 30초 내 2-3회 반복되는 훅 구절 없으면 재작업.
2. **장르 다양성** — KR-01~10이 같은 장르로 겹치지 않도록 각 트랙 독립 장르 배정 (심통봇 패턴).
3. **서사** (보조) — 캐릭터 이모션은 중심이지만, 서사가 훅을 약화시키면 서사를 잘라낸다.

## ODD ENGINE Tone Guardrails

- Keep character emotion central; do not turn mythic characters into generic pop stereotypes.
- Use modern Korean detail sparingly so the track stays singable and not skit-like.
- Avoid meme tone unless the user explicitly asks for comedy.
