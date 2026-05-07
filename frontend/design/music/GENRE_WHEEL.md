# TROY Genre Wheel — 10 Lanes

> 120화 OST 시리즈 운영용 음악 lane 사전. 모든 lane 은 **아린 (in-world) 의 단일 vocal identity** (female intimate withdrawn alto, close-mic, dry, audible breath, no vibrato gloss) 안에서만 변주된다. 가사 / 정서 / 본편 thesis 와 다른 변수만 lane 별로 흔들린다.
>
> 사용 룰: 1 episode = 1 lane × Phase 정서 (PHASE_EMOTIONAL_PALETTE.md 참조). 한 화 안에서 lane 두 개 섞지 않는다 (Locking Rule).
>
> Suno paste prompt 안에는 **artist 이름 절대 미포함**. Reference artists 는 §reference 에만 살고, 사용자 캘리브레이션용.

---

## Lane index

| Key | 한국어 / English | BPM 범위 | Phase 적합 |
|---|---|---|---|
| `korean-indie-folk` | 한국 인디 포크 / Korean indie folk | 70-80 | 1·2·4·5·6 |
| `acoustic-ballad` | 어쿠스틱 발라드 / Acoustic ballad | 60-75 | 1·2·3·5·6 |
| `dream-pop` | 드림 팝 / Dream pop | 65-80 | 3·4·5 |
| `lofi-bedroom` | Lo-fi 베드룸 팝 / Lo-fi bedroom pop | 60-72 | 1·2·5 |
| `bossa-folk` | 보사노바 포크 / Bossa-folk | 80-95 | 2·3 |
| `ambient-piano` | 앰비언트 피아노 / Ambient piano | 55-70 | 1·3·6 |
| `folk-electronic` | 포크 일렉트로닉 / Folk-electronic | 70-85 | 4 |
| `k-soul-quiet` | 조용한 K-soul / K-soul quiet | 65-80 | 3·5 |
| `chamber-pop` | 체임버 팝 / Chamber pop | 70-85 | 3·5·6 |
| `90s-vintage-ballad` | 90 년대 빈티지 발라드 / 90s vintage ballad | 65-80 | 4·6 |

---

## Lane 1 — `korean-indie-folk` (한국 인디 포크)

**Anchor lane. E001 v8 paste card 가 정의해 둔 baseline.**

### Reference artists (§reference only — Suno prompt 미포함)
- 검정치마 (강아지, Everything)
- 9와 숫자들 (보물)
- 정밀아 (그리운 그대)
- 짙은 (우리의 밤은 당신의 낮보다 아름답다)
- 신해경 (나는)

### Suno style prompt (Master, paste-ready, 850 chars)

```
Korean modern indie folk, intimate restrained lane, gray late-spring campus air, closed emotionally tired, not redemptive. {bpm} bpm slow walking pulse, no uplift, D minor feel, 4/4 breathing rubato. Female intimate withdrawn alto, close-mic, dry, audible breath, soft consonants, vocal forward in mix, no vibrato gloss, conversational Korean, tense-consonant clarity. Intro under 6 sec: single warm fingerpicked nylon guitar, vocal enters by 0:07 with the hook as first sung phrase. Nylon counterpoint, muted felt-damper upright piano, low brushed snare ghost only, faint room, no pad, no synth, no strings. Dry close intimate mix, narrow stereo, subtle room, no reverb tail, no key change, no drum kit, no swell beyond a small bloom. Earphone-wire hiss, paper-thin air, cafeteria-corner stillness. Avoid ballad gloss, EDM, gospel choir, soaring final.
```

### Var A Lo-fi swap (replace `{bpm} bpm slow walking pulse, no uplift, D minor feel, 4/4 breathing rubato`):
`{bpm-7} bpm slow walking pulse, lo-fi tape feel, soft vinyl crackle bed, narrowed stereo, slight tape saturation`

### Var B Alt-folk swap:
`{bpm+5} bpm gentle alt-folk pulse, low brushed drum ghost present (still ghost, never kit), wider stereo image but still dry`
(Also replace `low brushed snare ghost only` → `low brushed snare and rim ghost, still subdued`)

### Spec
- BPM range: 70-80, sweet spot 75
- Instrumentation core: muted felt-damper upright piano + fingerpicked nylon guitar; brushed snare ghost OK
- Vocal modifier: baseline (no shift)
- No-go: pad, synth, strings, drum kit, reverb tail, key change, soaring uplift
- Phase compatibility: 1 (anchor) · 2 · 4 · 5 · 6

---

## Lane 2 — `acoustic-ballad` (어쿠스틱 발라드)

피아노 멜로디 중심 lane. felt-damper grand 가 lead, 보컬과 1:1 대화. 가장 "고전적" 인 OST 톤이지만 power-ballad 함정에 절대 들어가지 않는다.

### Reference artists (§reference only)
- 정승환 (이 바보야) — 0:00 felt piano, 즉발 vocal, 발라드 OST 첫인상 표본
- 정밀아 (그리운 그대) — 첫 phrase 즉시 intimate female, breath-forward
- 토이 (집착) — 발라드 챔버 톤, 단일 피아노 + 미세 strings
- 헤리티지 (낯선 시간 속 너) — 절제된 felt grand, key change 없음
- 박혜진 박하잎 (미공개 demos) — late-evening lamp 톤 표본
- Adele "Someone Like You" — 톤 only, vocal gender 일치 caveat 없음 (mix character만 참조)

### First-impression diagnosis (this lane's risk modes)
1. Suno 가 "K-ballad" 입력 즉시 power-ballad piano arpeggio + strings ensemble swell 로 점프 → felt-damper / chorus-only-violin 으로 차단
2. 평균값 OST 의 0:08+ 긴 piano intro → "intro under 4 sec / vocal by 0:05" 로 hard-code
3. snare buildup 으로 anthemic 오해 → "no snare buildup" 명시
4. plate reverb 길게 끌리는 K-OST 함정 → "no plate tail" + "light room only"

### Suno style prompt (Master, paste-ready, 849 chars)

```
Korean acoustic ballad, intimate piano-led lane, restrained chamber warmth, tender not anthemic. {bpm} bpm slow rubato, no uplift, A minor feel, 4/4 breathing pulse. Female intimate withdrawn alto, close-mic, dry, audible breath, soft consonants, vocal forward, no vibrato gloss, slightly sustained vowel ends, conversational Korean. Intro under 4 sec: felt-damper grand piano holding one open chord, vocal enters by 0:05 as first sung phrase. Felt grand lead with audible hammer-felt softness, very low cello sustain at chorus only, single violin double-stop bloom at chorus peak only. Dry intimate mix, narrow stereo, light room only, no plate tail, no key change, no drum kit, no synth pad, no choir. Paper-thin air, late evening lamp stillness. Avoid power-ballad gloss, anthemic build, gospel swell, snare buildup, K-OST cliche piano arpeggios.
```

### Var A swap (replace `{bpm} bpm slow rubato, no uplift, A minor feel, 4/4 breathing pulse.`):
`{bpm-5} bpm slow rubato, lo-fi felt piano, soft tape hiss, narrowed stereo, slight tape saturation.`

### Var B swap:
`{bpm+5} bpm gentle chamber pulse, single cello played pizzicato lightly at verse only, broader stereo, still dry.`

### Spec
- BPM range: 60-75, sweet 65
- Instrumentation core: felt-damper grand piano + low cello sustain (chorus only) + single violin double-stop (chorus peak only)
- Vocal modifier: baseline + slightly sustained vowel ends
- No-go: drum kit, synth pad, ensemble strings, choir, key change, snare buildup, K-OST cliche piano arpeggios, power-ballad gloss
- Phase compatibility: 1 · 2 · 3 · 5 · 6

---

## Lane 3 — `dream-pop` (드림 팝)

흐릿하고 atmosphere 한 톤. 가사보다 분위기. 안개 속 보컬. 유일하게 vocal 에 short-plate reverb 가 허용되는 lane (vocal-modifier lane).

### Reference artists (§reference only)
- Wave to Earth (seasons) — 한국 dream pop 표본, hazy clean electric
- Adoy (Wonder) — chorus pedal + tremolo, 한국 인디
- Stella Jang (Colors) — soft female intimate, atmospheric
- 새소년 (집에) — 흐릿한 acoustic 텍스처 + female 동행 vocal
- Beach House (Space Song) — 톤 only (vocal gender mismatch noted, mix character 참조 only)

### First-impression diagnosis (this lane's risk modes)
1. Suno 가 "dream pop" 입력 시 shoegaze fuzz-wall 로 미끄러짐 → "not shoegaze, no fuzz" 명시
2. 보컬이 wet-out 되며 멀어짐 → "short-plate (vocal-only modifier)" 라고 정확 명시 + "vocal forward" 유지
3. 평균값 dream-pop 의 4분 reverb tail → "slap delay tail OK / no big reverb" 로 제한
4. Suno 가 dream-pop 을 EDM build 로 끝맺음 → "no anthemic final" + "no key change"

### Suno style prompt (Master, paste-ready, 844 chars)

```
Korean dream pop, hazy atmospheric lane, gentle reverberant warmth, drifting introspective, not shoegaze. {bpm} bpm gentle drift pulse, no uplift, F major feel, 4/4 floating rubato. Female intimate withdrawn alto, close-mic with light short-plate reverb (vocal-only modifier), audible breath, soft consonants, octave doubling on chorus only, no vibrato gloss, conversational Korean. Intro under 5 sec: hazy clean electric with slow tremolo and chorus pedal, vocal enters by 0:06 with soft melodic line. Clean electric (tremolo plus chorus), warm low-passed pad bed, fingerpicked acoustic counter, brushed snare ghost only. Atmospheric narrow-to-medium stereo, short plate on vocal only, slap delay tail OK, no key change, no drum kit, no synth lead. Late afternoon haze, dust motes. Avoid shoegaze wall, fuzz, EDM, gospel choir, anthemic final.
```

### Var A swap (replace `{bpm} bpm gentle drift pulse, no uplift, F major feel, 4/4 floating rubato.`):
`{bpm-5} bpm gentle drift pulse, lo-fi tape hiss layer, narrowed stereo, slight saturation.`

### Var B swap:
`{bpm+5} bpm slightly fuller drift pulse, broader stereo, more tremolo depth on electric, still no drum kit.`

### Spec
- BPM range: 65-80, sweet 72
- Instrumentation core: clean electric (tremolo+chorus pedal) + warm low-passed pad bed + fingerpicked acoustic counter + brushed snare ghost
- Vocal modifier: + light short-plate reverb (only lane with vocal reverb) + chorus-only octave doubling
- No-go: shoegaze wall-of-sound, fuzz pedal, drum kit, synth lead, EDM, gospel choir, anthemic final, big reverb wash
- Phase compatibility: 3 · 4 · 5

---

## Lane 4 — `lofi-bedroom` (Lo-fi 베드룸 팝)

테이프 hiss + narrow stereo. 누군가 작은 방에서 혼자 부른 noise floor 있는 톤. boom-bap lo-fi-hip-hop 트렌드와 정확히 거리.

### Reference artists (§reference only)
- 신해경 (나는) — paper-thin air, dry close, lo-fi 인접 톤
- Yerin Baek (Square) — 좁은 mix, intimate female demo 톤
- Standing Egg (lo-fi mode tracks) — bedroom intimacy
- Adoy (Wonder live demo) — narrow stereo, tape coloration
- Cigarettes After Sex — 톤 only (vocal gender mismatch noted, mix character 참조)

### First-impression diagnosis (this lane's risk modes)
1. Suno 가 "lo-fi" 입력 즉시 boom-bap 드럼 + jazz chord lo-fi-chill-beats 트랜드로 점프 → "no drum machine boom-bap, no chill-beats trope" 명시
2. tape coloration 이 vocal 까지 wet-out 시킴 → "light lo-fi tape coloration on vocal" 로 dose 제한 + "vocal forward in narrow mix"
3. Suno 가 lo-fi 를 깨끗한 studio polish 로 잘못 해석 → "mono-leaning narrow stereo / vinyl crackle bed low" 명시
4. nylon guitar 가 사라지고 piano-only 로 떨어짐 → "single fingerpicked nylon" 강조

### Suno style prompt (Master, paste-ready, 847 chars)

```
Korean lo-fi bedroom pop, intimate tape-feel lane, narrow restrained warmth, hushed late-night solitary. {bpm} bpm slow gentle pulse, no uplift, E minor feel, 4/4 simple rubato. Female intimate withdrawn alto, very close-mic, dry, audible breath, soft consonants, vocal forward, light lo-fi tape coloration on vocal, no vibrato gloss, hushed conversational Korean. Intro under 4 sec: muted upright with audible tape wow and flutter, vocal enters by 0:05 as first sung phrase. Muted upright with felt-damper plus tape coloration, soft vinyl crackle bed low, single fingerpicked nylon. Lo-fi mono-leaning narrow stereo, gentle tape saturation, no reverb tail, no key change, no drum kit, no synth pad, no strings. Bedroom intimacy, midnight desk-lamp stillness. Avoid clean studio polish, drum machine boom-bap, lo-fi chill-beats trope, EDM, gospel.
```

### Var A swap (replace `{bpm} bpm slow gentle pulse, no uplift, E minor feel, 4/4 simple rubato.`):
`{bpm-3} bpm slow pulse, deeper tape saturation, more vinyl crackle, mono-leaning even narrower stereo.`

### Var B swap:
`{bpm+5} bpm slightly more present pulse, brushed snare ghost added, slightly less tape saturation.`

### Spec
- BPM range: 60-72, sweet 68
- Instrumentation core: muted upright piano (felt-damper + tape coloration) + soft vinyl crackle bed + single fingerpicked nylon
- Vocal modifier: baseline + light tape coloration on vocal (dosed)
- No-go: clean studio polish, drum machine boom-bap, lo-fi chill-beats trope, drum kit, synth pad, ensemble strings, EDM, gospel
- Phase compatibility: 1 · 2 · 5

---

## Lane 5 — `bossa-folk` (보사노바 포크)

가벼운 samba groove. 슬프지만 발이 움직이는 톤. 변주용으로 귀중. **Phase 4·5·6 에서는 절대 사용 X** (PHASE_EMOTIONAL_PALETTE.md 강제).

### Reference artists (§reference only)
- 잔나비 (참 어른) acoustic samba mode — 한국 boss-folk 표본
- 박재정 (헤어지자 말해요 acoustic) — light groove + ballad
- 검정치마 (Hollywood) — bossa fingerpicking + intimate
- Karina (어떻게 사랑이 그래요 acoustic remake) — soft female bossa
- João Gilberto — 톤 only (vocal gender mismatch noted, fingerpicking pattern 참조)

### First-impression diagnosis (this lane's risk modes)
1. Suno 가 "bossa" 입력 즉시 Latin big-band + horn section 으로 점프 → "no Latin big-band, no horn, no samba percussion" 강조
2. lounge cocktail 트렌드로 미끄러져 emotional thesis 망가짐 → "not lounge" 명시
3. surdo / agogo 등 percussion 추가됨 → 명시 금지
4. 0:08+ 긴 bossa intro → "intro under 4 sec / vocal by 0:05" hard-code

### Suno style prompt (Master, paste-ready, 849 chars)

```
Korean bossa-folk fusion, gentle restrained groove lane, intimate-but-walking warmth, bittersweet not lounge. {bpm} bpm gentle bossa nova pulse, no uplift, G minor feel, 4/4 light syncopation on weak beats. Female intimate withdrawn alto, close-mic, dry, audible breath, soft consonants, vocal forward, slight melodic glide on phrase ends, no vibrato gloss, conversational Korean. Intro under 4 sec: nylon classical with bossa fingerpicking (bass-thumb plus chord-pluck), vocal enters by 0:05 as first sung phrase. Nylon classical (bossa fingerpicking), upright bass walking sparsely on roots and fifths, very light brushed snare with rim-click ghost. Warm narrow-to-medium stereo, gentle room only, no plate tail, no key change, no drum kit, no synth, no horn. Late-afternoon cafe stillness. Avoid Latin big-band, samba percussion, lounge cocktail.
```

### Var A swap (replace `{bpm} bpm gentle bossa nova pulse, no uplift, G minor feel, 4/4 light syncopation on weak beats.`):
`{bpm-7} bpm slower bossa pulse with more rubato, narrower stereo, brushed snare removed.`

### Var B swap:
`{bpm+5} bpm slightly faster bossa pulse, light shaker subtle bed, broader stereo, still no drum kit.`

### Spec
- BPM range: 80-95, sweet 85 (the only lane with notably higher BPM, but still NEVER above 95)
- Instrumentation core: nylon classical (bossa fingerpicking) + upright bass walking sparsely + brushed snare with rim-click
- Vocal modifier: baseline + slight melodic glide on phrase ends
- No-go: Latin big-band, samba percussion (surdo, agogo, tamborim), lounge cocktail, horn section, drum kit, synth, key change
- Phase compatibility: 2 · 3 (corrected — Phase 5 forbids bossa-folk per palette)

---

## Lane 6 — `ambient-piano` (앰비언트 피아노)

가장 sparse 한 lane. 거의 음악이 없는 음악. Phase 6 고요 수용 의 핵심.

### Reference artists (§reference only)
- 해변연구실 (Sea Lab — 겨울방) — sparse felt grand 한국 ambient
- 박혜진 박하잎 (quiet mode demo) — minimal vocal, breath-spaced
- 이주영 (피아노 OST tracks) — felt-damper grand only
- 김광민 (Inside) — empty room piano 톤
- Olafur Arnalds (saman — solo piano version) — 톤 only (instrumental, vocal mismatch N/A)
- Nils Frahm (Says) — 톤 only, hammer-felt + pedal-action 표본

### First-impression diagnosis (this lane's risk modes)
1. Suno 가 "ambient" 입력 시 new-age pad / synth wash 추가 → "no synth, no pad, no new-age" 명시
2. Einaudi-style melodic lead arpeggio 자동 점프 → "Einaudi-style lead 금지" 명시
3. 보컬이 너무 sustained 되어 ambient 가 ballad 로 바뀜 → "melodic phrases short and breath-spaced"
4. cinematic Olafur swell 로 끝남 → "no swell, no climactic build"

### Suno style prompt (Master, paste-ready, 847 chars)

```
Korean ambient piano lane, sparse minimal warmth, suspended not climactic, almost zen empty-room stillness. {bpm} bpm very slow rubato, no uplift, C minor feel, 4/4 free pulse with long held notes and decay-listening pauses. Female intimate withdrawn alto, very close-mic, dry, audible breath, soft consonants, vocal forward, melodic phrases short and breath-spaced, no vibrato gloss, hushed conversational Korean. Intro under 6 sec: felt-damper grand with one held note ringing into its decay, vocal enters by 0:07 carrying short held phrase. Felt grand alone with audible hammer-felt and pedal-action, very subtle low room tone, occasional cello sub-bass at bridge only. Extremely dry narrow stereo, no reverb tail, no key change, no drum, no synth, no swell, no melodic lead. Suspended winter air. Avoid Einaudi-style lead, percussion, new-age.
```

### Var A swap (replace `{bpm} bpm very slow rubato, no uplift, C minor feel, 4/4 free pulse with long held notes and decay-listening pauses.`):
`{bpm-3} bpm even slower rubato, lo-fi tape coloration on piano, mono-leaning stereo, deeper decay-listening pauses.`

### Var B swap:
`{bpm+3} bpm slow rubato with low cello sustain extending into chorus only, slightly broader stereo, still no drum.`

### Spec
- BPM range: 55-70, sweet 62
- Instrumentation core: felt-damper grand piano alone + occasional cello sub-bass (bridge only)
- Vocal modifier: baseline + breath-spaced phrasing (longer pauses)
- No-go: Einaudi-style melodic lead, cinematic Olafur swell, new-age pad, synth, drum, percussion, ensemble strings, melodic glide
- Phase compatibility: 1 · 3 · 6

---

## Lane 7 — `folk-electronic` (포크 일렉트로닉)

포크 위에 절제된 synth pulse. 어긋남·긴장 phase 4 의 핵심 lane. EDM 함정과 정확히 거리.

### Reference artists (§reference only)
- 실리카겔 (NO PAIN — quiet sections) — 한국 folk-electronic 인접 톤
- 이랑 (잘 알지도 못하면서) — folk + electronic underlay
- 새소년 (난춘) — quiet electronic-tinged
- Adoy (Beautiful) — clean folk + low synth pulse
- Bon Iver (715 - CR∑∑KS — 22, A Million era) — 톤 only (vocal gender mismatch noted, electronic underlay 참조)

### First-impression diagnosis (this lane's risk modes)
1. Suno 가 "electronic" 입력 즉시 four-on-the-floor EDM kick 로 점프 → "no four-on-the-floor, no EDM, no drop, no dubstep" 강조
2. synth lead solo 가 vocal 자리 빼앗음 → "no synth lead melody, no synth lead solo"
3. sidechain pump 로 mix 가 EDM-style 호흡 → "no sidechain pump"
4. electronic delay tail 이 vocal 묻음 → "no delay tail" + "subtle room only"

### Suno style prompt (Master, paste-ready, 849 chars)

```
Korean folk-electronic, restrained hybrid lane, intimate-but-tense warmth, strained pre-loss instability, not redemptive. {bpm} bpm slow walking pulse over electronic underlay, no uplift, F# minor feel, 4/4 controlled tension. Female intimate withdrawn alto, close-mic, dry, audible breath, soft consonants, vocal forward, no vibrato gloss, conversational Korean with slight harmonic strain. Intro under 5 sec: muted upright joined by low warm analog synth pulse (sub-bass), vocal enters by 0:06 as first sung phrase. Muted upright lead, low warm analog synth pulse beneath, fingerpicked nylon, faint granular texture-wash low in bed. Hybrid narrow-to-medium stereo, subtle room, no delay tail, no sidechain pump, no key change, no drum kit, no synth lead, no pad wash. Low subharmonic late-night unease. Avoid EDM, dubstep, drop, four-on-the-floor.
```

### Var A swap (replace `{bpm} bpm slow walking pulse over electronic underlay, no uplift, F# minor feel, 4/4 controlled tension.`):
`{bpm-5} bpm slower stripped pulse, synth pulse removed, piano-forward, narrower stereo.`

### Var B swap:
`{bpm+5} bpm slightly more present pulse, synth pulse plus low warm pad layer, broader stereo, still no drum.`

### Spec
- BPM range: 70-85, sweet 78
- Instrumentation core: muted upright piano + single low warm analog synth pulse (sub-bass) + fingerpicked nylon + faint granular texture
- Vocal modifier: baseline + slight harmonic strain on long notes
- No-go: EDM, dubstep, drop, four-on-the-floor, sidechain pump, drum kit, synth lead solo, pad wash, electronic delay tail
- Phase compatibility: 4

---

## Lane 8 — `k-soul-quiet` (조용한 K-soul)

소울 텍스처 + intimate 절제. 보컬이 조금 더 melodic 하게 미끄러짐. **vocal-modifier lane** (Lane 3 와 함께).

### Reference artists (§reference only)
- 이하이 (한숨 quiet sections) — soulful 절제 female alto
- 효린 (See the Light unplugged) — controlled soulful glide
- 거미 (다 알면서) — measured K-soul ballad lean
- 박재정 (헤어지자 말해요) — 보컬 glide + Rhodes hint
- 다비치 (안녕 이라고 말하지마 acoustic) — neo-soul 인접 톤

### First-impression diagnosis (this lane's risk modes)
1. Suno 가 "K-soul" 입력 즉시 R&B vocal acrobatics + melisma run 으로 폭발 → "controlled riffs only at phrase ends, no melisma" 명시
2. neo-soul horn stab 추가 → "no horn, no neo-soul horn stab" 명시
3. gospel choir 자동 추가 → "no choir, no gospel" 명시
4. Rhodes 가 너무 두꺼워져 piano 를 덮음 → "muted upright plus light tine-Rhodes" 로 dose 명시 (Rhodes 는 layer, lead 아님)

### Suno style prompt (Master, paste-ready, 842 chars)

```
Korean quiet K-soul, intimate soulful lane, restrained warmth with melodic depth, measured not show-off. {bpm} bpm slow soulful pulse, no uplift, B-flat minor feel, 4/4 subtle behind-the-beat swing. Female intimate withdrawn alto with soulful melodic lean (vocal-modifier lane), close-mic, dry, audible breath, soft consonants, slight glide between notes, controlled riffs only at phrase ends, no vibrato gloss, conversational Korean. Intro under 4 sec: muted upright with light tine-Rhodes underneath, vocal enters by 0:05 with soulful inflection. Muted upright plus light tine-Rhodes, fingerpicked nylon, low warm bass sustain, soft brushed snare ghost. Intimate narrow-to-medium stereo, very light plate on tail only, no big reverb, no key change, no drum kit, no horn. Late evening, contained. Avoid R&B acrobatics, melisma, gospel choir.
```

### Var A swap (replace `{bpm} bpm slow soulful pulse, no uplift, B-flat minor feel, 4/4 subtle behind-the-beat swing.`):
`{bpm-5} bpm slower stripped pulse, Rhodes removed, piano-forward, narrower stereo, subtle swing retained.`

### Var B swap:
`{bpm+5} bpm slightly more present pulse, slight horn ghost (very subtle bed, no melody), broader stereo, still no drum kit.`

### Spec
- BPM range: 65-80, sweet 73
- Instrumentation core: muted upright piano + light tine-Rhodes (layer not lead) + fingerpicked nylon + low warm bass sustain + soft brushed snare ghost
- Vocal modifier: + soulful melodic lean + slight glide between notes + controlled end-of-phrase riffs (only lane with riff allowance)
- No-go: R&B vocal acrobatics, melisma run, gospel choir, neo-soul horn stab, drum kit, synth pad, organ, big reverb
- Phase compatibility: 3 · 5

---

## Lane 9 — `chamber-pop` (체임버 팝)

현악 + 피아노. 편곡 가장 풍부한 lane (그러나 여전히 절제). 앨범 highlight 후보. E054 (밝은 창) title-track candidate 의 home lane.

### Reference artists (§reference only)
- 이바다 (Yia) — 한국 chamber pop, 절제된 현악
- 권진아 (운이 좋았지) — chamber arrangement + female intimate
- 정승환 (눈사람 chamber tracks) — felt grand + small string section
- 박원 (이대로 가자) — chamber pop walk-tempo
- 헤리티지 (낯선 시간 속 너) — small ensemble restraint
- Lana Del Rey (Mariners Apartment Complex) — 톤 only (vocal gender match, mix character 참조)

### First-impression diagnosis (this lane's risk modes)
1. Suno 가 "chamber pop" 입력 즉시 full Hollywood orchestra swell 로 점프 → "small string section (2vn + 1va + 1vc, chamber not orchestral)" 명시 + "no full ensemble"
2. 현악이 vocal 을 압도 → "vocal dry and forward" + "light hall on strings only" (vocal stays dry)
3. plate reverb 가 strings + vocal 모두 wet-out 시킴 → "no big plate"
4. cinematic Hollywood swell 로 끝남 → "no swell beyond gentle bloom"

### Suno style prompt (Master, paste-ready, 848 chars)

```
Korean chamber pop, intimate orchestral-lite lane, restrained warmth with string color, rich not dramatic. {bpm} bpm slow chamber pulse, no uplift, D minor feel, 4/4 controlled rubato. Female intimate withdrawn alto, close-mic, dry, audible breath, soft consonants, vocal forward, melodic with slight sustain on phrase ends, no vibrato gloss, conversational Korean. Intro under 5 sec: felt-damper grand with single sustained chord, vocal enters by 0:06 as first sung phrase. Felt grand lead, small string section (2vn + 1va + 1vc, chamber not orchestral, audible bow-rosin), fingerpicked nylon. Medium stereo, strings panned soft-wide, light hall on strings only, vocal dry and forward, no big plate, no key change, no drum kit, no synth pad, no full ensemble, no swell beyond gentle bloom. Gallery stillness. Avoid full orchestra, Hollywood swell.
```

### Var A swap (replace `{bpm} bpm slow chamber pulse, no uplift, D minor feel, 4/4 controlled rubato.`):
`{bpm-5} bpm slower stripped pulse, strings removed, piano plus nylon only, narrower stereo.`

### Var B swap:
`{bpm+5} bpm slightly more present pulse, strings slightly more prominent in bow texture, broader stereo, still no drum kit.`

### Spec
- BPM range: 70-85, sweet 76
- Instrumentation core: felt-damper grand piano + small string quartet (2vn + 1va + 1vc, chamber not orchestral) + fingerpicked nylon
- Vocal modifier: baseline + slight sustain on phrase ends
- No-go: full orchestra, cinematic Hollywood swell, drum kit, synth pad, horn, full string ensemble, anthemic build, gospel choir, big plate reverb, EDM
- Phase compatibility: 3 · 5 · 6 (corrected — Phase 5 lists chamber-pop as dominant per palette)

---

## Lane 10 — `90s-vintage-ballad` (90 년대 빈티지 발라드)

90 년대 한국 발라드 챔버 톤. 빈티지 따뜻함. 결말 phase 6 ending 적합. 90s power-ballad swell 함정과 정확히 거리.

### Reference artists (§reference only)
- 이문세 (옛사랑 90s era) — vintage chamber tone 표본
- 김광석 (서른 즈음에) — restrained chamber ballad
- 신승훈 (아이 빌리브 — early ballads) — cassette-era hush 표본
- 김동률 (다시 사랑한다 말할까) — chamber arrangement + dignified
- 변진섭 (희망사항 acoustic remake) — 90s vintage warmth + female 변주 인접

### First-impression diagnosis (this lane's risk modes)
1. Suno 가 "90s ballad" 입력 즉시 gated reverb snare + power-ballad swell 로 점프 → "no gated snare, no 90s power-ballad swell" 강조
2. sax solo 자동 추가 → "no sax solo" 명시 (90s ballad cliche)
3. plate reverb 가 vocal 까지 wet-out → "light plate on tail only" 로 dose 제한
4. distorted electric guitar 추가 → "clean vintage tone, no distortion" 명시 (hollow-body 만)

### Suno style prompt (Master, paste-ready, 844 chars)

```
Korean 90s vintage ballad, restrained chamber warmth lane, dignified measured, not 90s power-ballad. {bpm} bpm slow vintage ballad pulse, no uplift, A minor feel, 4/4 chamber rubato. Female intimate withdrawn alto, close-mic, dry with slight vintage tape warmth, audible breath, soft consonants, vocal forward, melodic with controlled sustain, no vibrato gloss, conversational Korean with vintage phrasing. Intro under 5 sec: felt grand with single open chord, vocal enters by 0:06 as first sung phrase. Felt grand lead, single low cello sustain, light hollow-body electric (clean vintage tone, no distortion), fingerpicked nylon. Vintage narrow-to-medium stereo, gentle tape warmth on master, light plate on tail, no key change, no gated snare, no drum kit. Cassette-era hush. Avoid 90s power-ballad swell, gated snare, gospel choir, sax solo.
```

### Var A swap (replace `{bpm} bpm slow vintage ballad pulse, no uplift, A minor feel, 4/4 chamber rubato.`):
`{bpm-5} bpm slower stripped pulse, hollow-body electric removed, piano plus cello only, narrower stereo.`

### Var B swap:
`{bpm+5} bpm slightly more present pulse, vintage warmth more prominent on master, light vintage chorus pedal on hollow-body electric, broader stereo.`

### Spec
- BPM range: 65-80, sweet 73
- Instrumentation core: felt grand piano + low cello sustain + light hollow-body electric (clean vintage tone) + fingerpicked nylon
- Vocal modifier: baseline + slight vintage tape warmth on vocal
- No-go: 90s power-ballad swell, gated reverb snare, sax solo, distortion, drum kit, synth pad, horn, choir, key change
- Phase compatibility: 4 · 6

---

## Lane selection rules (Conductor)

1. **1 episode = 1 lane.** Locking Rule. Don't blend lanes.
2. **3-version run pattern within each lane** = Master + Var A + Var B (lane-specific swap rules above).
3. **Vocal config locked across all lanes** — only instrumentation/genre/tempo varies. Lane 3 (`dream-pop`) and Lane 8 (`k-soul-quiet`) are the only lanes with explicit vocal modifier (light reverb / soulful glide). Other lanes use baseline vocal verbatim.
4. **No lane spans Phase 1+6 simultaneously.** Each lane has Phase compatibility — respect.
5. **Album track choices** are made from this Wheel — same lanes, polished selection.
6. **Lane rotation within a Phase** is encouraged — e.g., 20 episodes of Phase 1 should rotate 4-5 lanes.

## Update log

- 2026-05-06: v1 initial Wheel by Conductor (Opus quota hit, direct write). Lane 1 from E001 v8 anchor verbatim. Lanes 2-10 first draft. Style prompts paste-ready. Reference artists §reference only.
- 2026-05-07: v2 Sound Director audit + refine pass (Lanes 2-10). Each lane now matches Lane 1 craft depth: (a) first-impression diagnosis (2-4 risk modes per lane), (b) reference calibration (5-6 specific Korean tracks per lane with ≤12-word first-impression notes), (c) tightened anti-Suno-genre-average cues, (d) explicit "vocal enters by 0:0X" hard-code per lane, (e) lane-specific no-go list (5-9 items each), (f) Phase compatibility validated against PHASE_EMOTIONAL_PALETTE.md. Corrections: Lane 5 (`bossa-folk`) Phase 5 removed (palette forbids); Lane 9 (`chamber-pop`) Phase 5 added (palette dominant). All 9 master prompts re-fit to 600-850 char target (842-849 chars). TS mirror at `frontend/lib/suno-generate/lanes.ts` synced. Lane 1 untouched (anchor lock).
