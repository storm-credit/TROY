# TROY Image Engine

## 1. Definition

`이미지 엔진`은 작품의 감정, 장소, 인물, 계절을 still image 언어로 고정하는 하위 비주얼 엔진이다.

상위 원칙:

- image is memory fragment, not full recap
- realism before prettiness
- continuity before novelty

## 2. Function

- 캐릭터/장소/계절의 시각 언어를 고정한다
- 회차별 이미지 생성 프롬프트의 연속성을 관리한다
- 모티프가 화면 안에서 어떻게 반복되는지 통제한다

## 3. Core Rules

### A. Base Look

- cinematic live-action style
- realistic Korean youth-film texture
- no full-anime house style

### B. Continuity Rule

- same character face logic
- same outfit logic when same-day sequence continues
- same location geometry
- same seasonal palette per phase

### C. Motif Rule

이미지는 아래를 반복적으로 호출할 수 있어야 한다.

- earphones
- paper
- windows
- corridors
- stairs
- wind
- Cafe Dal light

### D. Tool Rule

- Midjourney: look exploration
- Nano Banana: main still production
- Imagen: hero shot refinement

## 4. Composition Methods

### A. Character Continuity Matrix

인물은 매 화마다 새 얼굴이 아니라, 같은 사람의 다른 표정이어야 한다.

운영 필드:

- face logic
- posture logic
- emotional expression range
- lighting tolerance

### B. Spatial Geometry Layer

주요 장소는 감정뿐 아니라 거리와 원근의 구조로 기억되어야 한다.

운영 필드:

- location
- intimacy distance
- light angle
- depth shape
- recurring camera lane

### C. Seasonal Palette Set

계절 팔레트는 장식이 아니라 정서 진행의 시각 증거다.

운영 필드:

- phase
- palette family
- warmth/coolness rule
- transition marker

### D. Motif Placement Rule

모티프는 예쁜 소품이 아니라 장면의 감정 방향을 바꿔야 한다.

원칙:

- seed placement
- altered echo placement
- ending residue placement

운영 필드:

- motif
- placement cut
- foreground/background
- meaning at this episode

### E. Hero Cut vs Bridge Cut

모든 컷을 히어로컷처럼 만들지 않는다.

분류:

- hero cut: 감정 정점, 얼굴/사물 기억용
- bridge cut: 이동, 전환, 공기 유지용

운영 필드:

- cut type
- focus depth
- memory priority
- motion carry note

## 5. Inputs

- visual bible
- motif ledger
- campus/location docs
- episode harness

## 6. Outputs

- master look prompt
- recurring character prompt
- location prompt set
- continuity notes
- key still prompts per episode

## 7. Main Documents

- `ops/visual_bible.md`
- `ops/E001_visual_cut_list.md`
- `ops/E002_visual_cut_list.md`
- `ops/E003_visual_cut_list.md`
- `ops/E004_visual_cut_list.md`
- `ops/E005_visual_cut_list.md`
- `ops/E006_visual_cut_list.md`
- `ops/media_engine_contract.md`

## 8. Engine Question

이 이미지는 예쁘기만 한가, 아니면 이 작품만의 공기와 잔향을 기억하게 만드는가?
