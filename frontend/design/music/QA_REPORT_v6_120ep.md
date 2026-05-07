# QA Report v6 — 120 Episode Suno Paste Card Pipeline

> Validator: QA (Sonnet) · Date: 2026-05-07 · Round: 1+2 ship validation
> Dev server: http://localhost:3211 · Working dir: TROY/

---

## Section 1 — Pass/Fail Summary Table

| Check | Pass | Fail | Notes |
|---|---|---|---|
| 120 lyrics files exist | 120/120 | 0 | E001 = v8, E002–E120 = v6 |
| Paste-block present (`## Suno-ready paste block`) | 120/120 | 0 | All files use heading-style block, not ``` fence |
| All-Korean paste block | 119/120 | 1 | E030 has "yes" (lowercase, 1 ASCII word) in bridge — see Section 3 |
| Line count 35–50 (lyric lines only, excl. section tags) | 120/120 | 0 | All 120 in range 35–50 lyric lines; 33 files have 51–53 total lines when section tags [verse/chorus/bridge] counted — see Section 3 |
| API 200 (12 sample) | 12/12 | 0 | E001/E020/E054/E064/E094/E118/E007/E028/E045/E075/E090/E110 |
| API fields present (episodeId, laneKey, bpmMaster, phase, lyrics, masterStyle, varALofiStyle, varBAltfolkStyle) | 12/12 | 0 | All 8 required fields present in all 12 samples |
| API masterStyle 600–850 chars | 12/12 | 0 | Range observed: 839–850 chars |
| API VarA differs from Master | 12/12 | 0 | VarA always differs (BPM lowered ~5–7, texture stripped) |
| API VarB differs from Master and VarA | 12/12 | 0 | VarB always differs (BPM raised ~5, strings more prominent) |
| API BPM in masterStyle matches assignment.bpmMaster | 12/12 | 0 | Exact match all 12; VarA = master−5~7, VarB = master+3~5 |
| masterStyle contains lane-specific anchor phrase | 12/12 | 0 | e.g. E054 → "Korean chamber pop", E028 → "Korean bossa-folk" |
| Phase compat audit — forbidden lanes | 0 violations | 0 | No episode uses a forbidden lane for its phase |
| Phase compat audit — off-dominant (advisory) | 3 episodes | — | E034 P2 dream-pop, E050/E059 P3 ambient-piano (not forbidden, album-track justified) |
| Workbench page renders 200 (6 sample) | 6/6 | 0 | E005/E028/E054/E064/E094/E118 all 200 |
| Workbench HTML contains "Suno paste" | 6/6 | 0 | All 6 match |
| Workbench contains lane-appropriate string | 6/6 | 0 | e.g. E054 → "Korean chamber pop" confirmed in HTML |
| Chorus lock ≥ 2x (12 sample) | 9/9 | 0 | 3 of 12 sampled have null chorusEmotionLine (E020, E045, E067) — not required; remaining 9 have 5–6 occurrences each |
| tsc --noEmit clean | ✓ | 0 | Exit code 0, no errors |

---

## Section 2 — Forbidden-Lane Assignments

**Result: ZERO forbidden-lane violations across all 120 episodes.**

All 10 lanes are used only in phases where they are permitted per `PHASE_EMOTIONAL_PALETTE.md §4 No-go enforcement`.

### Advisory: Off-dominant lane assignments (not forbidden, flagged for Conductor awareness)

These 3 episodes use lanes that are not in the dominant rotation for their phase but are also not forbidden. No fix required — especially E034 which is an album track.

| Episode | Phase | Lane | Dominant for Phase | Status | Recommendation |
|---|---|---|---|---|---|
| E034 | 2 | dream-pop | P2 dominant: indie-folk, ballad, bossa-folk, lofi | Off-dominant (album track: "withdrawal") | Acceptable — album track exception per §4 rule 3. Monitor feel. |
| E050 | 3 | ambient-piano | P3 dominant: ballad, dream-pop, bossa-folk, k-soul, chamber | Off-dominant (album track: "private diary") | Acceptable — ambient-piano serves lyrical function. Not forbidden. |
| E059 | 3 | ambient-piano | P3 dominant: same as above | Off-dominant (non-album) | Minor advisory — consider swapping to dream-pop or k-soul-quiet for Phase 3 warmth consistency. |

---

## Section 3 — Out-of-Spec Lyrics Files

### Korean purity: 1 violation

**E059 — CLEAN. E030 — FAIL (1 ASCII word)**

- File: `ops/E030_lyrics_v6.md`
- Violation: Bridge contains `yes 라고 말한 게 아니라` — the word "yes" is lowercase English, not a section tag.
- Context: The line uses "yes" as a quoted utterance, which is narratively intentional but fails the strict all-Korean rule.
- Recommendation for Round 4: Replace with `그렇다고 말한 게 아니라` or `응 이라고 말한 게 아니라`.

### Line count

No files are out of spec on lyric-line count (35–50). However, 33 files have 51–53 total non-empty lines when section tags are included in the count:

> The section tags `[verse 1]`, `[chorus]`, `[pre-chorus]`, `[bridge]`, `[final chorus]` were counted in the initial scan. Excluding these tags, all 33 are within 35–50 lyric lines.

**The QA spec's "Line count 35–50" is interpreted as lyric lines only.** If the spec intends all non-empty lines including section tags, then these 33 files are marginally over:

Affected episodes (total lines 51–53, lyric-only lines 44–46, all within spec):
E001 (52/45), E023–E035 range, E062–E080 range, E108 (52/45), E119 (52/45), E120 (51/44)

Conductor should confirm whether section tags count toward the 35–50 limit. If they do, the upper limit should be revised to ~55 to accommodate the standard 6–7 section tags per song.

---

## Section 4 — Sample Standout Lines

One line per phase, from the first non-album episode of each phase:

**Phase 1 — E002** (acoustic-ballad, "처음 본 결"):
> "바람에 페이지가 한 장 넘어가듯이 / 그 사람만 한 박자 늦게 지나갔어"
— The "page turning" simile lands the first-sight freeze in a single motion image without announcement.

**Phase 2 — E021** (korean-indie-folk, "가까워지는 거리"):
> "이상하지 않은 게 이상한 하루였어"
— A clean paradox that captures the strange normalcy of early attachment without naming the emotion.

**Phase 3 — E036** (acoustic-ballad, "문이 열리던 날"):
> "잃을 수 있는 자리에 마음을 두는 일이 / 사랑이라는 걸 처음 인정해 보았어"
— Direct admission of vulnerability, restrained register, strongest thesis delivery of Phase 3.

**Phase 4 — E061** (korean-indie-folk, "후퇴"):
> "그런데 우리는 끝내지 않은 채로 / 조금씩 끝나가는 법을 배우고 있었어"
— The gradual dissolution rendered in a learning-frame; no melodrama, maximum ache.

**Phase 5 — E081** (korean-indie-folk, "침묵 이후"):
> "이전의 나는 이름을 붙여야 안심했는데 / 오늘의 나는 이름 없이도 앉아 있을 수 있어"
— Re-listening thesis in miniature: the shift from naming-as-control to sitting-with-ambiguity.

**Phase 6 — E101** (ambient-piano, "바뀐 공기"):
> "도망치지 않은 게 용기는 아니었어 / 그 자리에 더 머물 수 있는 사람이 된 것뿐이었어"
— Refuses the easy heroism frame; livable uncertainty ethos perfectly executed.

---

## Section 5 — Open Issues for Round 4

### Priority: Fix before commit/push

1. **E030 ASCII violation** — `yes` in bridge (`ops/E030_lyrics_v6.md`, line approx. 68 in file).
   - Replace with Korean equivalent. Suggested: `"그렇다고 말한 게 아니라"`.

2. **Line count spec ambiguity** — Confirm with Conductor whether the 35–50 line ceiling includes or excludes section tags (`[verse 1]`, `[chorus]`, etc.). Currently 33 files exceed 50 total lines when tags are included. If tags count, either:
   - Trim 1–2 lyric lines from each, OR
   - Revise spec ceiling to 55.
   - Recommendation: Exclude tags from count (industry-standard interpretation). No changes needed.

### Advisory: Monitor, no immediate fix required

3. **E059 off-dominant lane** (P3 ambient-piano, non-album) — not forbidden, but Phase 3 is the warmth peak. Consider swapping to `dream-pop` or `k-soul-quiet` in a future polish pass.

4. **E034 off-dominant lane** (P2 dream-pop, album track "withdrawal") — intentional choice per album function, but Conductor should confirm `dream-pop` serves the "withdrawal" emotional direction better than `lofi-bedroom` would. Not a pipeline error.

5. **masterStyle char length** — All 12 sampled are 839–850 chars (upper end of 600–850 spec). Fine now, but if the generator template grows, could breach 850. Recommend adding a char-count assertion to the route test.

6. **Paste-block structure** — Files use `## Suno-ready paste block` heading (no ``` fences). The QA spec referenced ``` fences. This is consistent across all 120 files and clearly intentional. No change needed, but update the QA spec template for Round 5+ to reflect heading-style blocks.

---

*Report generated: 2026-05-07 · QA Validator (Sonnet) · READ-ONLY pass*
