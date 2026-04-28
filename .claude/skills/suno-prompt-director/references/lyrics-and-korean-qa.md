# Lyrics And Korean QA

## Basic Section Tags

Use simple, consistent tags first:

```text
[Intro]
[Verse 1]
[Pre-Chorus]
[Chorus]
[Verse 2]
[Pre-Chorus]
[Chorus]
[Bridge]
[Instrumental Break]
[Final Chorus]
[Outro]
```

For short hooks or BGM tests, use fewer sections. For 3:30+ pop forms, include at least two verses, repeated chorus, bridge, and final chorus.

## Vocal Assignment

For duets and multi-vocal songs, repeat vocal assignments per section:

```text
[Verse 1: Female]

[Verse 2: Male]

[Bridge: Male whisper-rap]

[Final Chorus: Duet - Female lead + Male harmony]
```

Keep tags practical. Treat detailed labels as steering prompts, not guaranteed product syntax.

## Call And Response

Use parentheses only when they are clear backing responses:

```text
[Final Chorus: Duet]
읽씹 읽씹 읽씹 (읽었어)
또 한 번 읽씹 (답 못했어)
```

Avoid heavy punctuation, nested parentheses, or slash-separated lyric fragments.

## Korean Lyric QA

- [ ] Each line can be sung in one breath.
- [ ] Each line carries one main idea.
- [ ] Dense nouns and long modifiers are split across lines.
- [ ] Numbers, percentages, dates, and times are rewritten in natural Korean unless the exact number is essential. **Sino vs Native 한국어 숫자 혼용 주의** (예: '세 번째' Native + '2시 47분' Sino → 일관성 검토).
- [ ] English mixing is intentional, usually hook-focused, and not scattered through every verse.
- [ ] Formality is consistent: 반말, 해요체, or poetic diction shifts only by intent.
- [ ] Tricky consonant clusters are not stacked across multiple lines.
- [ ] Repeated endings are musical, not accidental monotony.
- [ ] Brand names, app names, platform names, artist names, and proper nouns are necessary or removed.
- [ ] Duplicate lines are intentional hook repetition, not copy drift.
- [ ] **No raw Hangul jamo emoticons (ㅎㅎ/ㅋㅋ/ㅠㅠ/ㅜㅜ/ㄷㄷ) in sung lines** — Suno reads them as 'hieut-hieut' (히읗히읗) or omits them. Convert to spelled-out form or remove entirely.
- [ ] **Stage directions in parentheses** (예: `(한숨)`, `(폰 알림음)`, `(ding)`) are **steering hints, not guaranteed SFX**. Suno may sing them as lyrics. Use only at section boundaries (Intro/Outro), never mid-verse.

## Pronunciation Risk Controls

Prefer:

- `밤새`, `방금`, `아직`, `끝내`, `몇 번` over Arabic numerals.
- Koreanized phrasing when English weakens flow.
- Short hook phrases with clear vowels and consonants.

Use caution with:

- Acronyms such as DM, SNS, BGM in sung lines.
- Rapid clusters like `읽씹`, `끝끝내`, `흐릿한`, `스쳐`, `그때`.
- Long Sino-Korean abstractions in fast sections.
- Too many loanwords in one verse.
- **Numbers requiring Sino vs Native disambiguation** — `2시 47분` (Suno may read English "two-forty-seven"), `3시 정각` (Sino: 삼시 vs Native: 세 시), `세 번째` ~ `여덟 번째` (Native counting). When mixing, lock one convention per song.
- **Repeated 된소리 hook** — if hook repeats 6+ times (like `읽씹` x 8 in KR-03), verify Suno keeps tense-consonant clarity across all reps (not softening to `익십`). Add Style cue: "Korean tense-consonant clarity preserved".

## Jamo Emoticon Conversion Table

| Raw jamo | Sung-safe form | When to use |
|---|---|---|
| `ㅎㅎ` | `하하` or remove | Conversational laugh in verse |
| `ㅋㅋ` | `크크` or `풉` | Internal monologue, ironic |
| `ㅠㅠ` | `으으` or `흑흑` | Crying gesture (use only if vocal coach can sell it) |
| `ㅜㅜ` | `우` or remove | Same as ㅠㅠ |
| `ㄷㄷ` | `덜덜` | Trembling reaction |

If the original draft contains raw jamo, **rewrite the line entirely** rather than substituting one-for-one — the spelled-out version often needs different syllable weight to fit the melody.

## Hook Test

Before final output, read the chorus aloud twice:

1. Does the hook land without explaining the plot?
2. Can the key phrase survive repetition?
3. Is the rhythm clear without the track?
4. Are backing responses short enough to parse?
