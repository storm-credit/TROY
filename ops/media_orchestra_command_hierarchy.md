# media orchestra command hierarchy

## 1. purpose

- 이 문서는 TROY 음악/이미지/뮤비 제작 단계의 지휘 계층을 고정한다
- 목표:
  - 오케스트라가 총괄한다는 원칙을 잃지 않는다
  - 음악 감동 지휘와 뮤비 감동 지휘를 분리한다
  - 각 툴 전문가는 지휘 라인 아래에서만 움직인다

## 2. command tree

```text
오케스트라 총괄
  |
   |-- 음악 감동 지휘
   |     |-- Suno 전문가
   |     |-- 가사 전문가
   |     |-- 보컬 디렉션 전문가
   |     |-- 음악 프로듀서 전문가
   |     |-- 믹스/편곡 감각 전문가
   |     |-- 저작권/모사 방지 전문가
   |
   |-- 운영 인테이크 지휘
   |     |-- asset intake 전문가
   |     |-- verdict routing 전문가
   |     |-- dashboard/status 전문가
   |     |-- action packet 전문가
   |     |-- verdict template 전문가
   |
   |-- 뮤비 감동 지휘
         |-- Midjourney 전문가
        |-- Nano Banana / Gemini Image 전문가
        |-- Imagen 전문가
        |-- Kling 전문가
        |-- Higgsfield 전문가
        |-- Veo 전문가
        |-- Sora 전문가
        |-- MV 연출 전문가
        |-- 비주얼 연속성 전문가
        |-- 컷 편집/리듬 전문가
        |-- 저작권/브랜드/실존장소 방지 전문가
```

## 3. orchestra role

- 전체 순서 결정
- 어느 전문가를 언제 호출할지 결정
- `pass / revise / reject` 최종 판정
- manuscript canon과 media output 사이의 불일치 차단
- 툴별 결과가 좋아 보여도 작품의 감정 방향에서 벗어나면 reject
- blocked state도 숨기지 않고 그대로 표기
- ready asset이 생기면 operator packet과 fillable verdict template까지 같은 세션 안에서 뽑아 준다

## 4. music emotional direction

- 역할:
  - 곡의 감정 온도와 아린 authored voice를 지휘한다
- 하위 전문가:
  - Suno 전문가:
    - docs 최적화 style prompt
    - custom lyrics 구조
    - first attempt / retry wording
  - 가사 전문가:
    - 제목과 가사 잠금 유지
    - 과잉 설명과 slogan drift 차단
  - 보컬 디렉션 전문가:
    - vocal distance
    - belting / whisper / speechiness 조절
  - 음악 프로듀서 전문가:
    - track temperature separation
    - title / selfhood / diary / parting role separation
  - 믹스/편곡 감각 전문가:
    - density
    - lift
    - room tone
  - 저작권/모사 방지 전문가:
    - real artist imitation 차단
    - cover-language 차단

## 5. MV emotional direction

- 역할:
  - 음악의 감정을 화면 흐름으로 번역한다
- 하위 전문가:
  - Midjourney 전문가:
    - key visual
    - style exploration
    - `--ar / --style / --sref / --cref / --no` 슬롯 분리
  - Nano Banana / Gemini Image 전문가:
    - reference image 기반 보정
    - 인물/소품/장소 유지
    - 표정, 구도, 손, 빛 수정
  - Imagen 전문가:
    - clean text-to-image still
    - structured prompt attributes
    - realistic scene still
  - Kling 전문가:
    - image-to-video
    - camera motion
    - subject consistency
    - multi-shot / start frame / end frame 관리
  - Higgsfield 전문가:
    - character-centric cinematic motion
    - face / fashion / performance shot
    - reference-driven motion test
  - Veo 전문가:
    - cinematic short video
    - reference-guided clip
    - atmosphere / camera test
  - Sora 전문가:
    - storyboard-based shot
    - recut / remix style iteration
    - first-frame or reference-driven scene test
  - MV 연출 전문가:
    - cut order
    - music-screen sync
    - 30-45 sec pilot rhythm
  - 비주얼 연속성 전문가:
    - face
    - outfit
    - prop
    - light
    - place continuity
  - 컷 편집/리듬 전문가:
    - still-first edit flow
    - transition density
    - emotional pacing
  - 저작권/브랜드/실존장소 방지 전문가:
    - no logos
    - no real campus identifiers
    - no visible copyrighted marks

## 6. phase order

1. music attempt
2. music verdict
3. accepted direction note
4. visual tool split
5. priority still generation
6. still verdict
7. short MV test
8. MV verdict
9. master board update

## 7. stop rule

- 음악이 `pass` 또는 `strong revise`가 아니면 visual/MV로 가지 않는다
- priority still에서 character continuity가 깨지면 전체 cut set으로 확장하지 않는다
- 영상이 예뻐도 곡의 감정선을 바꾸면 reject한다
- 툴별 docs 최적화를 하더라도 canon, voice, restraint보다 우선하지 않는다

## 8. current lock

- manuscript:
  - `E001-E120` complete and locked
- album:
  - Arin in-world album vol.1 12 tracks generation-ready
- pilot:
  - `E054 / E113 / E050`
- current next layer:
  - tool-specific prompt split for Suno / Midjourney / Nano Banana / Imagen / Kling / Higgsfield / Veo / Sora
- face/character lock:
  - `ops/character_face_lock_harness.md`
  - `export/music/character_lock_pack/`
- media modules:
  - `ops/media_tool_module_system.md`
  - `export/media_modules/`
