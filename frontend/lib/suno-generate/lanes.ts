/**
 * Lane spec table — embedded TS for runtime use.
 * Source of truth: frontend/design/music/GENRE_WHEEL.md.
 * If the markdown is updated, mirror changes here.
 */

import type { LaneKey, LaneSpec } from './types'

const FOLK_MASTER =
  `Korean modern indie folk, intimate restrained lane, gray late-spring campus air, closed emotionally tired, not redemptive. {bpm} bpm slow walking pulse, no uplift, D minor feel, 4/4 breathing rubato. Female intimate withdrawn alto, close-mic, dry, audible breath, soft consonants, vocal forward in mix, no vibrato gloss, conversational Korean, tense-consonant clarity. Intro under 6 sec: single warm fingerpicked nylon guitar, vocal enters by 0:07 with the hook as first sung phrase. Nylon counterpoint, muted felt-damper upright piano, low brushed snare ghost only, faint room, no pad, no synth, no strings. Dry close intimate mix, narrow stereo, subtle room, no reverb tail, no key change, no drum kit, no swell beyond a small bloom. Earphone-wire hiss, paper-thin air, cafeteria-corner stillness. Avoid ballad gloss, EDM, gospel choir, soaring final.`

const BALLAD_MASTER =
  `Korean acoustic ballad, intimate piano-led lane, restrained chamber warmth, tender not anthemic. {bpm} bpm slow rubato, no uplift, A minor feel, 4/4 breathing pulse. Female intimate withdrawn alto, close-mic, dry, audible breath, soft consonants, vocal forward, no vibrato gloss, slightly sustained vowel ends, conversational Korean. Intro under 4 sec: felt-damper grand piano holding one open chord, vocal enters by 0:05 as first sung phrase. Felt grand lead with audible hammer-felt softness, very low cello sustain at chorus only, single violin double-stop bloom at chorus peak only. Dry intimate mix, narrow stereo, light room only, no plate tail, no key change, no drum kit, no synth pad, no choir. Paper-thin air, late evening lamp stillness. Avoid power-ballad gloss, anthemic build, gospel swell, snare buildup, K-OST cliche piano arpeggios.`

const DREAM_MASTER =
  `Korean dream pop, hazy atmospheric lane, gentle reverberant warmth, drifting introspective, not shoegaze. {bpm} bpm gentle drift pulse, no uplift, F major feel, 4/4 floating rubato. Female intimate withdrawn alto, close-mic with light short-plate reverb (vocal-only modifier), audible breath, soft consonants, octave doubling on chorus only, no vibrato gloss, conversational Korean. Intro under 5 sec: hazy clean electric with slow tremolo and chorus pedal, vocal enters by 0:06 with soft melodic line. Clean electric (tremolo plus chorus), warm low-passed pad bed, fingerpicked acoustic counter, brushed snare ghost only. Atmospheric narrow-to-medium stereo, short plate on vocal only, slap delay tail OK, no key change, no drum kit, no synth lead. Late afternoon haze, dust motes. Avoid shoegaze wall, fuzz, EDM, gospel choir, anthemic final.`

const LOFI_MASTER =
  `Korean lo-fi bedroom pop, intimate tape-feel lane, narrow restrained warmth, hushed late-night solitary. {bpm} bpm slow gentle pulse, no uplift, E minor feel, 4/4 simple rubato. Female intimate withdrawn alto, very close-mic, dry, audible breath, soft consonants, vocal forward, light lo-fi tape coloration on vocal, no vibrato gloss, hushed conversational Korean. Intro under 4 sec: muted upright with audible tape wow and flutter, vocal enters by 0:05 as first sung phrase. Muted upright with felt-damper plus tape coloration, soft vinyl crackle bed low, single fingerpicked nylon. Lo-fi mono-leaning narrow stereo, gentle tape saturation, no reverb tail, no key change, no drum kit, no synth pad, no strings. Bedroom intimacy, midnight desk-lamp stillness. Avoid clean studio polish, drum machine boom-bap, lo-fi chill-beats trope, EDM, gospel.`

const BOSSA_MASTER =
  `Korean bossa-folk fusion, gentle restrained groove lane, intimate-but-walking warmth, bittersweet not lounge. {bpm} bpm gentle bossa nova pulse, no uplift, G minor feel, 4/4 light syncopation on weak beats. Female intimate withdrawn alto, close-mic, dry, audible breath, soft consonants, vocal forward, slight melodic glide on phrase ends, no vibrato gloss, conversational Korean. Intro under 4 sec: nylon classical with bossa fingerpicking (bass-thumb plus chord-pluck), vocal enters by 0:05 as first sung phrase. Nylon classical (bossa fingerpicking), upright bass walking sparsely on roots and fifths, very light brushed snare with rim-click ghost. Warm narrow-to-medium stereo, gentle room only, no plate tail, no key change, no drum kit, no synth, no horn. Late-afternoon cafe stillness. Avoid Latin big-band, samba percussion, lounge cocktail.`

const AMBIENT_MASTER =
  `Korean ambient piano lane, sparse minimal warmth, suspended not climactic, almost zen empty-room stillness. {bpm} bpm very slow rubato, no uplift, C minor feel, 4/4 free pulse with long held notes and decay-listening pauses. Female intimate withdrawn alto, very close-mic, dry, audible breath, soft consonants, vocal forward, melodic phrases short and breath-spaced, no vibrato gloss, hushed conversational Korean. Intro under 6 sec: felt-damper grand with one held note ringing into its decay, vocal enters by 0:07 carrying short held phrase. Felt grand alone with audible hammer-felt and pedal-action, very subtle low room tone, occasional cello sub-bass at bridge only. Extremely dry narrow stereo, no reverb tail, no key change, no drum, no synth, no swell, no melodic lead. Suspended winter air. Avoid Einaudi-style lead, percussion, new-age.`

const FOLKE_MASTER =
  `Korean folk-electronic, restrained hybrid lane, intimate-but-tense warmth, strained pre-loss instability, not redemptive. {bpm} bpm slow walking pulse over electronic underlay, no uplift, F# minor feel, 4/4 controlled tension. Female intimate withdrawn alto, close-mic, dry, audible breath, soft consonants, vocal forward, no vibrato gloss, conversational Korean with slight harmonic strain. Intro under 5 sec: muted upright joined by low warm analog synth pulse (sub-bass), vocal enters by 0:06 as first sung phrase. Muted upright lead, low warm analog synth pulse beneath, fingerpicked nylon, faint granular texture-wash low in bed. Hybrid narrow-to-medium stereo, subtle room, no delay tail, no sidechain pump, no key change, no drum kit, no synth lead, no pad wash. Low subharmonic late-night unease. Avoid EDM, dubstep, drop, four-on-the-floor.`

const SOUL_MASTER =
  `Korean quiet K-soul, intimate soulful lane, restrained warmth with melodic depth, measured not show-off. {bpm} bpm slow soulful pulse, no uplift, B-flat minor feel, 4/4 subtle behind-the-beat swing. Female intimate withdrawn alto with soulful melodic lean (vocal-modifier lane), close-mic, dry, audible breath, soft consonants, slight glide between notes, controlled riffs only at phrase ends, no vibrato gloss, conversational Korean. Intro under 4 sec: muted upright with light tine-Rhodes underneath, vocal enters by 0:05 with soulful inflection. Muted upright plus light tine-Rhodes, fingerpicked nylon, low warm bass sustain, soft brushed snare ghost. Intimate narrow-to-medium stereo, very light plate on tail only, no big reverb, no key change, no drum kit, no horn. Late evening, contained. Avoid R&B acrobatics, melisma, gospel choir.`

const CHAMBER_MASTER =
  `Korean chamber pop, intimate orchestral-lite lane, restrained warmth with string color, rich not dramatic. {bpm} bpm slow chamber pulse, no uplift, D minor feel, 4/4 controlled rubato. Female intimate withdrawn alto, close-mic, dry, audible breath, soft consonants, vocal forward, melodic with slight sustain on phrase ends, no vibrato gloss, conversational Korean. Intro under 5 sec: felt-damper grand with single sustained chord, vocal enters by 0:06 as first sung phrase. Felt grand lead, small string section (2vn + 1va + 1vc, chamber not orchestral, audible bow-rosin), fingerpicked nylon. Medium stereo, strings panned soft-wide, light hall on strings only, vocal dry and forward, no big plate, no key change, no drum kit, no synth pad, no full ensemble, no swell beyond gentle bloom. Gallery stillness. Avoid full orchestra, Hollywood swell.`

const VINTAGE_MASTER =
  `Korean 90s vintage ballad, restrained chamber warmth lane, dignified measured, not 90s power-ballad. {bpm} bpm slow vintage ballad pulse, no uplift, A minor feel, 4/4 chamber rubato. Female intimate withdrawn alto, close-mic, dry with slight vintage tape warmth, audible breath, soft consonants, vocal forward, melodic with controlled sustain, no vibrato gloss, conversational Korean with vintage phrasing. Intro under 5 sec: felt grand with single open chord, vocal enters by 0:06 as first sung phrase. Felt grand lead, single low cello sustain, light hollow-body electric (clean vintage tone, no distortion), fingerpicked nylon. Vintage narrow-to-medium stereo, gentle tape warmth on master, light plate on tail, no key change, no gated snare, no drum kit. Cassette-era hush. Avoid 90s power-ballad swell, gated snare, gospel choir, sax solo.`

export const LANES: Record<LaneKey, LaneSpec> = {
  'korean-indie-folk': {
    key: 'korean-indie-folk',
    nameKo: '한국 인디 포크',
    nameEn: 'Korean indie folk',
    bpmRange: { min: 70, max: 80, sweet: 75 },
    styleBlockMaster: FOLK_MASTER,
    varASwap: [{
      target: '{bpm} bpm slow walking pulse, no uplift, D minor feel, 4/4 breathing rubato.',
      replacement: '{bpm-7} bpm slow walking pulse, lo-fi tape feel, soft vinyl crackle bed, narrowed stereo, slight tape saturation.',
    }],
    varBSwap: [{
      target: '{bpm} bpm slow walking pulse, no uplift, D minor feel, 4/4 breathing rubato.',
      replacement: '{bpm+5} bpm gentle alt-folk pulse, low brushed drum ghost present (still ghost, never kit), wider stereo image but still dry.',
    }],
    varBExtraSwap: [{
      target: 'low brushed snare ghost only',
      replacement: 'low brushed snare and rim ghost, still subdued',
    }],
  },
  'acoustic-ballad': {
    key: 'acoustic-ballad',
    nameKo: '어쿠스틱 발라드',
    nameEn: 'Acoustic ballad',
    bpmRange: { min: 60, max: 75, sweet: 65 },
    styleBlockMaster: BALLAD_MASTER,
    varASwap: [{
      target: '{bpm} bpm slow rubato, no uplift, A minor feel, 4/4 breathing pulse.',
      replacement: '{bpm-5} bpm slow rubato, lo-fi felt piano, soft tape hiss, narrowed stereo, slight tape saturation.',
    }],
    varBSwap: [{
      target: '{bpm} bpm slow rubato, no uplift, A minor feel, 4/4 breathing pulse.',
      replacement: '{bpm+5} bpm gentle chamber pulse, single cello played pizzicato lightly at verse only, broader stereo, still dry.',
    }],
  },
  'dream-pop': {
    key: 'dream-pop',
    nameKo: '드림 팝',
    nameEn: 'Dream pop',
    bpmRange: { min: 65, max: 80, sweet: 72 },
    styleBlockMaster: DREAM_MASTER,
    varASwap: [{
      target: '{bpm} bpm gentle drift pulse, no uplift, F major feel, 4/4 floating rubato.',
      replacement: '{bpm-5} bpm gentle drift pulse, lo-fi tape hiss layer, narrowed stereo, slight saturation.',
    }],
    varBSwap: [{
      target: '{bpm} bpm gentle drift pulse, no uplift, F major feel, 4/4 floating rubato.',
      replacement: '{bpm+5} bpm slightly fuller drift pulse, broader stereo, more tremolo depth on electric, still no drum kit.',
    }],
  },
  'lofi-bedroom': {
    key: 'lofi-bedroom',
    nameKo: 'Lo-fi 베드룸 팝',
    nameEn: 'Lo-fi bedroom pop',
    bpmRange: { min: 60, max: 72, sweet: 68 },
    styleBlockMaster: LOFI_MASTER,
    varASwap: [{
      target: '{bpm} bpm slow gentle pulse, no uplift, E minor feel, 4/4 simple rubato.',
      replacement: '{bpm-3} bpm slow pulse, deeper tape saturation, more vinyl crackle, mono-leaning even narrower stereo.',
    }],
    varBSwap: [{
      target: '{bpm} bpm slow gentle pulse, no uplift, E minor feel, 4/4 simple rubato.',
      replacement: '{bpm+5} bpm slightly more present pulse, brushed snare ghost added, slightly less tape saturation.',
    }],
  },
  'bossa-folk': {
    key: 'bossa-folk',
    nameKo: '보사노바 포크',
    nameEn: 'Bossa-folk',
    bpmRange: { min: 80, max: 95, sweet: 85 },
    styleBlockMaster: BOSSA_MASTER,
    varASwap: [{
      target: '{bpm} bpm gentle bossa nova pulse, no uplift, G minor feel, 4/4 light syncopation on weak beats.',
      replacement: '{bpm-7} bpm slower bossa pulse with more rubato, narrower stereo, brushed snare removed.',
    }],
    varBSwap: [{
      target: '{bpm} bpm gentle bossa nova pulse, no uplift, G minor feel, 4/4 light syncopation on weak beats.',
      replacement: '{bpm+5} bpm slightly faster bossa pulse, light shaker subtle bed, broader stereo, still no drum kit.',
    }],
  },
  'ambient-piano': {
    key: 'ambient-piano',
    nameKo: '앰비언트 피아노',
    nameEn: 'Ambient piano',
    bpmRange: { min: 55, max: 70, sweet: 62 },
    styleBlockMaster: AMBIENT_MASTER,
    varASwap: [{
      target: '{bpm} bpm very slow rubato, no uplift, C minor feel, 4/4 free pulse with long held notes and decay-listening pauses.',
      replacement: '{bpm-3} bpm even slower rubato, lo-fi tape coloration on piano, mono-leaning stereo, deeper decay-listening pauses.',
    }],
    varBSwap: [{
      target: '{bpm} bpm very slow rubato, no uplift, C minor feel, 4/4 free pulse with long held notes and decay-listening pauses.',
      replacement: '{bpm+3} bpm slow rubato with low cello sustain extending into chorus only, slightly broader stereo, still no drum.',
    }],
  },
  'folk-electronic': {
    key: 'folk-electronic',
    nameKo: '포크 일렉트로닉',
    nameEn: 'Folk-electronic',
    bpmRange: { min: 70, max: 85, sweet: 78 },
    styleBlockMaster: FOLKE_MASTER,
    varASwap: [{
      target: '{bpm} bpm slow walking pulse over electronic underlay, no uplift, F# minor feel, 4/4 controlled tension.',
      replacement: '{bpm-5} bpm slower stripped pulse, synth pulse removed, piano-forward, narrower stereo.',
    }],
    varBSwap: [{
      target: '{bpm} bpm slow walking pulse over electronic underlay, no uplift, F# minor feel, 4/4 controlled tension.',
      replacement: '{bpm+5} bpm slightly more present pulse, synth pulse plus low warm pad layer, broader stereo, still no drum.',
    }],
  },
  'k-soul-quiet': {
    key: 'k-soul-quiet',
    nameKo: '조용한 K-soul',
    nameEn: 'K-soul quiet',
    bpmRange: { min: 65, max: 80, sweet: 73 },
    styleBlockMaster: SOUL_MASTER,
    varASwap: [{
      target: '{bpm} bpm slow soulful pulse, no uplift, B-flat minor feel, 4/4 subtle behind-the-beat swing.',
      replacement: '{bpm-5} bpm slower stripped pulse, Rhodes removed, piano-forward, narrower stereo, subtle swing retained.',
    }],
    varBSwap: [{
      target: '{bpm} bpm slow soulful pulse, no uplift, B-flat minor feel, 4/4 subtle behind-the-beat swing.',
      replacement: '{bpm+5} bpm slightly more present pulse, slight horn ghost (very subtle bed, no melody), broader stereo, still no drum kit.',
    }],
  },
  'chamber-pop': {
    key: 'chamber-pop',
    nameKo: '체임버 팝',
    nameEn: 'Chamber pop',
    bpmRange: { min: 70, max: 85, sweet: 76 },
    styleBlockMaster: CHAMBER_MASTER,
    varASwap: [{
      target: '{bpm} bpm slow chamber pulse, no uplift, D minor feel, 4/4 controlled rubato.',
      replacement: '{bpm-5} bpm slower stripped pulse, strings removed, piano plus nylon only, narrower stereo.',
    }],
    varBSwap: [{
      target: '{bpm} bpm slow chamber pulse, no uplift, D minor feel, 4/4 controlled rubato.',
      replacement: '{bpm+5} bpm slightly more present pulse, strings slightly more prominent in bow texture, broader stereo, still no drum kit.',
    }],
  },
  '90s-vintage-ballad': {
    key: '90s-vintage-ballad',
    nameKo: '90 년대 빈티지 발라드',
    nameEn: '90s vintage ballad',
    bpmRange: { min: 65, max: 80, sweet: 73 },
    styleBlockMaster: VINTAGE_MASTER,
    varASwap: [{
      target: '{bpm} bpm slow vintage ballad pulse, no uplift, A minor feel, 4/4 chamber rubato.',
      replacement: '{bpm-5} bpm slower stripped pulse, hollow-body electric removed, piano plus cello only, narrower stereo.',
    }],
    varBSwap: [{
      target: '{bpm} bpm slow vintage ballad pulse, no uplift, A minor feel, 4/4 chamber rubato.',
      replacement: '{bpm+5} bpm slightly more present pulse, vintage warmth more prominent on master, light vintage chorus pedal on hollow-body electric, broader stereo.',
    }],
  },
}
