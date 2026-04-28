---
name: suno-prompt-director
description: Suno v5/v5.5 음악 생성 전용 프롬프트 디렉터. K-pop/K-R&B/K-indie 가사 + Style prompt + 듀엣 가사 태그 + Run A/B 차별화 + ODD ENGINE KR-01~10 Paste Pack 작업 시 호출. 사용자가 "Suno로 곡 만들어줘", "이 가사 Suno에 어떻게 올려?", "혼성 듀엣 가사 구성", "Run A/B 차별화", "Style prompt 다듬어줘", "후크 더 중독성 있게", 또는 KR-XX track 작업 시 반드시 발동. 저작권 위험 아티스트 이름 자동 제거, 한국어 발음 리스크 (된소리/숫자/영어 혼용/자모 emoticon ㅎㅎ/ㅋㅋ/ㅠㅠ) 감지, 혼성 태그 문법 정확 적용, 훅-first 구조 강제 (서사 < 훅 중독성).
version: 2.1.0
---

# Suno Prompt Director

> 🔁 **TROY 모드**: TROY 레포에서 호출되는 경우 — `KR-XX` 트랙 참조는 TROY 12트랙 (E054/E113/E050/E011/E030/E118/E014/E022/E034/E064/E094/E108) 으로 치환. 모든 곡은 인-월드 가수 **지아린** 의 1집 트랙이므로 보컬은 여성 솔로 기본 (혼성 듀엣은 듀엣 화에 한해). 가사 페르소나·정서는 `canon/series.md`, `canon/characters.md (지아린 musical signature)` 에 충실. 페이스트 패킷 출력 위치는 `export/music/arin_album_vol1_*/suno_copy_cards/` (이미 존재). 매핑 표: `CLAUDE.md §4`.

Turn a song brief into a paste-ready Suno package: `Title`, `Style`, `Lyrics`, optional `Run A/B`, and a short QA audit. This skill is optimized for Korean K-pop, K-R&B, K-indie, and ODD ENGINE tracks, but keep the output portable enough for general Suno use.

## Operating Rule

Separate facts from house heuristics:

- **Confirmed product facts**: only state as fact when backed by current Suno docs or user-provided UI evidence.
- **House heuristics**: present style length, line count, tag behavior, and A/B rules as practical defaults, not guarantees.
- **If uncertain**: use shorter style prompts, simpler tags, clearer section labels, and one controlled comparison run before expanding variations.

## Load References

Load only what the request needs:

- [product-facts.md](references/product-facts.md): current Suno model/features, Custom Mode, duration, Extend, stems, Voices, source links.
- [ui-settings.md](references/ui-settings.md): Suno Create UI fields and settings such as Lyrics, Styles, Vocal Gender, Lyrics Mode, Weirdness, and Style Influence.
- [style-prompts.md](references/style-prompts.md): 7-block Style structure, length policy, compression, negative constraints.
- [lyrics-and-korean-qa.md](references/lyrics-and-korean-qa.md): lyric tags, duet handling, Korean pronunciation and singability QA.
- [arrangement-run-strategy.md](references/arrangement-run-strategy.md): BPM/key matrix, length planning, Run A/B strategy, Extend planning.
- [odd-engine-output-contract.md](references/odd-engine-output-contract.md): ODD ENGINE file pull rules and canonical paste-pack output.

## Hard Rules

1. **Hook-first 구조 강제 (ODD ENGINE 채널 DNA #1)** — Chorus는 30초 내 2-3회 반복 가능한 훅 구절 필수 (예: '읽씹 읽씹 읽씹'). Verses는 hook을 위해 존재하지, 서사를 위해 존재하지 않음. 우선순위: **훅 중독성 > 장르 다양성 > 서사**. 서사가 훅을 약화시키면 서사를 잘라낸다.
2. Do not imitate or name real artists, labels, songs, or signature vocal identities. Translate references into original genre, vocal, texture, and arrangement language.
3. For Korean lyrics, prioritize singability: one breath per line, one idea per line, stable diction, and intentional formality level.
4. Treat numbers, dates, percentages, acronyms, English code-switching, and **Hangul jamo emoticons (ㅎㅎ/ㅋㅋ/ㅠㅠ)** as pronunciation risks unless they are essential to the hook. Convert jamo to spelled-out form ('하하'/'크크') or remove from sung lines.
5. For duet or multi-vocal work, put vocal assignment in the lyrics section, not only in Style.
6. For target length, plan enough lyric and arrangement material, but never promise exact duration. Style prompt의 "X minute Y second" 지시는 Suno가 무시함 — 길이는 가사 볼륨 + Custom Mode Length 슬라이더로만 제어.
7. Run A/B variants must change only one or two variables so the user can judge the cause of improvement. **단, vocal config 변경 시 (solo→duet, mono→harmony) BPM과 key는 반드시 고정한다 — 변수 폭증 방지.**
8. Every final output must include an audit that names pass/revise items, including a **Hook Test**: chorus 첫 8초 안에 hook이 인지 가능한가, verse 줄수가 chorus 줄수를 초과하지 않는가.

## Workflow

1. Identify the song job: commercial hook, character theme, MV lead track, episode emotion, BGM/instrumental, remix/extend, or vocal test.
2. Choose the needed references. Do not load all references unless producing a full paste pack.
3. Produce or revise the `Title`, `Style`, and `Lyrics`.
4. Provide `Suno UI Settings` when the request is meant for direct Suno entry.
5. If the user asks for comparison, create Run A and Run B with only one or two controlled differences.
6. Run the audit: copyright safety, prompt length, Korean lyric QA, vocal tags, line volume, UI settings, BPM/key coherence, and paste readiness.

## Output Contract

For a full song package, return:

```md
## Title

## Hook Spec
- Phrase: [the core repeating hook line, Korean or bilingual]
- Repetition: [count in chorus, e.g. "3x consecutive + 2x in final chorus"]
- Syllable count: [target syllables per repetition for earworm window — 4-8 syllables ideal]
- Vocal placement: [downbeat / offbeat / call-and-response]

## Run A
### Style
### Lyrics
### Hook Audit
- [ ] Hook lands within first 8 seconds of chorus
- [ ] Verse line count ≤ chorus line count (hook-first)
- [ ] Repetition survives without padding
### Notes

## Run B
### Style
### Lyrics
### Hook Audit
[same checklist]
### Notes

## Run Goal
- A tests: [baseline goal]
- B tests: [the 1-2 controlled changes only]
- Choose B if: [specific listening criterion — hook recall after 1 listen / chorus density / vocal grab in first 8 bars]

## Suno UI Settings

## Audit
```

For a focused request, return only the relevant fields plus `Audit`.

## Quick Audit

- [ ] **Hook is repeatable, lands in first 8 sec of chorus, has clear earworm phrase (4-8 syllables).**
- [ ] **Verse line count ≤ chorus line count (hook-first ratio).**
- [ ] No artist/song/label imitation or named celebrity vocal target.
- [ ] Style is concise (600-850 chars), includes genre, instruments, mood, section arc, constraints, technical target. **No duration promises in Style.**
- [ ] Lyrics use clear section tags and enough material (45-55 lines for 3:30+, 55-65 for extended narrative).
- [ ] Korean lines are breathable, singable, pronunciation-safe. **No raw jamo (ㅎㅎ/ㅋㅋ/ㅠㅠ) in sung lines.**
- [ ] Duet/multi-vocal sections identify who sings what in lyrics tags (not only Style).
- [ ] Run A/B changes limited to 1-2 variables. **If vocal config changes, BPM and key locked.**
- [ ] UI settings provided: Lyrics Mode, Vocal Gender, Weirdness, Style Influence, model/version.
- [ ] Product claims framed as confirmed facts or house heuristics.
