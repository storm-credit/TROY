# character face lock harness

## 1. purpose

- 이 문서는 TROY MV 제작에서 아린/서준의 얼굴과 캐릭터 동일성을 유지하기 위한 하네스다
- 핵심 원칙:
  - 텍스트 프롬프트만으로 얼굴을 유지하려고 하지 않는다
  - 캐릭터 기준 이미지 세트를 먼저 잠근다
  - accepted still만 영상화한다
  - 얼굴 drift가 발생하면 MV로 확장하지 않는다

## 2. command ownership

- 오케스트라 총괄:
  - face lock 진행 순서와 최종 pass/reject 결정
- 뮤비 감동 지휘:
  - 얼굴 동일성이 감정 연출을 방해하지 않게 컷 흐름 조정
- 비주얼 연속성 전문가:
  - face / hair / outfit / prop / light / place consistency 체크
- Midjourney 전문가:
  - character reference 또는 omni reference 슬롯 기반 still 후보 생성
- Nano Banana / Gemini Image 전문가:
  - accepted face reference 기반 보정과 변형
- Imagen 전문가:
  - clean still 또는 subject reference 기반 이미지 후보 생성
- Kling 전문가:
  - accepted still 기반 image-to-video와 subject consistency 관리
- Higgsfield 전문가:
  - character-centric close-up motion test
- Veo 전문가:
  - accepted still 또는 reference 기반 cinematic clip test
- Sora 전문가:
  - storyboard 또는 first-frame 기반 shot test

## 3. face lock order

1. character identity brief
2. master face reference 후보 생성
3. master face reference 1장 또는 2장 선정
4. character sheet 생성
5. tool reference slots 작성
6. pilot priority still 생성
7. face drift verdict
8. accepted still만 I2V로 이동
9. short MV block 생성
10. MV drift verdict

## 4. required reference set

### Arin

- master face front:
  - 정면, 눈/코/입/얼굴형이 명확한 기준 이미지
- master face 3/4:
  - 3/4 각도, 같은 인물로 인식 가능한 기준 이미지
- expression set:
  - calm
  - hidden thought
  - quiet selfhood
  - private pause
- outfit anchor:
  - music room outfit
  - campus walking outfit
  - private room outfit

### Seojun

- master face front:
  - 정면, 차분한 관찰자 인상
- master face 3/4:
  - 3/4 각도, 과도한 로맨스 포즈 없음
- expression set:
  - quiet listening
  - respectful acceptance
  - distance without coldness
- outfit anchor:
  - campus casual
  - music room casual

## 5. reference image quality gate

- pass:
  - face is centered and unobstructed
  - eyes, nose, mouth, jawline are clear
  - no sunglasses, mask, heavy occlusion
  - no logos or real campus identifiers
  - character dignity and story tone are intact
- revise:
  - identity is close but hair, age, or expression is unstable
  - lighting is useful but face angle is weak
  - outfit is usable but scene tone needs correction
- reject:
  - face changes into another person
  - idol/advertising gloss overtakes story realism
  - expression contradicts the episode emotion
  - visible text/logos/campus identifiers appear

## 6. tool routing

### Midjourney

- use:
  - first hero still candidates
  - character look exploration
  - key visual
- required slots:
  - subject
  - scene
  - lens/framing
  - light
  - character reference slot
  - style reference slot
  - negative slot
  - aspect ratio
- rule:
  - do not rely on text description alone for a recurring character

### Nano Banana / Gemini Image

- use:
  - face correction
  - expression correction
  - same character in alternate framing
  - prop/light continuity repair
- required slots:
  - input reference image
  - preserve identity instruction
  - change instruction
  - negative instruction
  - output verdict
- rule:
  - change only the requested layer, preserve identity and scene logic

### Imagen

- use:
  - clean realistic stills
  - background-safe scene stills
  - subject reference still variants when available
- required slots:
  - subject
  - context
  - style attributes
  - camera/framing
  - lighting
  - mood
  - negative prompt
  - reference numbers if using subject reference
- rule:
  - use structured prompt attributes and negative prompt fields

### Kling

- use:
  - accepted still to short motion
  - 4-6 sec block movement
  - restrained camera motion
- required slots:
  - source still
  - subject consistency instruction
  - camera motion
  - duration
  - start/end frame intention
  - negative motion guardrails
- rule:
  - never generate a full MV from text only

### Higgsfield

- use:
  - character-centric close-up
  - subtle performance movement
  - face/emotion motion test
- required slots:
  - reference face/still
  - motion style
  - face preservation
  - cinematic direction
  - anti-ad-gloss guardrail
- rule:
  - if it turns into fashion campaign energy, reject

### Veo

- use:
  - cinematic atmosphere clip
  - establishing motion
  - reference-guided short video
- required slots:
  - accepted still or reference image
  - subject continuity instruction
  - camera direction
  - motion objective
  - duration
  - negative video guardrails
- rule:
  - cinematic quality cannot override face lock or canon

### Sora

- use:
  - storyboard shot
  - first-frame video test
  - recut/remix style variation
- required slots:
  - storyboard beat
  - accepted first frame or reference still
  - subject continuity instruction
  - camera/framing
  - timing
  - negative story guardrails
- rule:
  - do not accept invented plot beats even if the clip looks good

## 7. drift checklist

- face:
  - same eye shape
  - same nose bridge
  - same mouth shape
  - same jawline
  - same apparent age
- hair:
  - same length family
  - same parting logic
  - no sudden idol styling drift
- body / pose:
  - body language matches episode emotion
  - no possessive romance pose
  - no performance flex unless the episode calls for it
- outfit / prop:
  - no unexplained wardrobe shift inside the same MV block
  - notebook, instrument, bag, desk light remain consistent
- scene:
  - no real campus identifiers
  - no readable lyrics or private diary text
  - no logo or brand marks
- emotion:
  - Arin remains subject, not object
  - Seojun listens without owning the frame
  - scene does not become finale / reunion / happy-ending coded

## 8. verdict rule

- pass:
  - same character identity is stable across priority stills
  - emotional function matches the track
  - image can safely move into short I2V
- revise:
  - identity is close but one feature or expression needs correction
  - repair with Nano Banana / Gemini Image before I2V
- reject:
  - face reads as a different person
  - identity changes across cuts
  - motion creates uncanny or inconsistent face
  - scene violates canon, dignity, or negative lock

## 8A. state tracking

- status values:
  - `face-lock pending`
  - `reference set ready`
  - `test still generated`
  - `accepted still locked`
  - `drift reject`
  - `revision needed`
  - `production approved`
- required fields:
  - `character`
  - `face_lock_version`
  - `reference_set_path`
  - `accepted_still_path`
  - `drift_reason`
  - `replacement_target`
  - `approval_owner`
  - `approved_date`
  - `episode_id`
  - `scene_id`
  - `still_id`
  - `prompt_version`
  - `model/tool`
  - `seed_or_job_id`
  - `source_packet`

## 8B. production hard gate

- `accepted still locked` 없이는 MV production 금지
- `drift reject`는 반드시 `drift_reason + replacement_target`을 기록한다
- 같은 MV 안에서 얼굴, 체형, 머리 길이, 표정 온도, 의상 디테일이 흔들리면 `motion reject`로 처리한다
- 아이돌화 / 성숙화 / 서구화 / 과한 미화 / 다른 사람처럼 보임 / 로맨틱 과열은 즉시 reject한다

## 9. official reference anchors

- Midjourney docs:
  - `https://docs.midjourney.com/`
- Gemini image generation:
  - `https://ai.google.dev/gemini-api/docs/image-generation`
- Vertex AI subject customization / Imagen:
  - `https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/subject-customization`
- Kling multi-image reference announcement:
  - `https://ir.kuaishou.com/news-releases/news-release-details/kuaishou-kling-ai-unveils-multi-image-reference-feature-further`
- Higgsfield:
  - `https://higgsfield.ai/`
- Veo:
  - `https://ai.google.dev/gemini-api/docs/video`
- Sora:
  - `https://platform.openai.com/docs/guides/video-generation`

## 10. next output

- `export/music/character_lock_pack/`
  - Arin face lock card
  - Seojun face lock card
  - tool reference routing card
  - face drift verdict sheet
