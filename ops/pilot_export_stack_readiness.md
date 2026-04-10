# pilot export stack readiness

## 1. purpose

- 이 문서는 `package pilot triplet`을 실제 export-ready stack으로 잠근다
- 목적:
  - `E011 / E054 / E118`을 downstream package flagship 3종으로 고정
  - music lane pilot 6곡과 package pilot triplet의 역할 차이를 분리
  - export 순서와 release gate를 한 장에서 확인 가능하게 만든다

## 2. truth source

- `ops/downstream_package_orchestra_opening.md`
- `ops/package_readiness_audit_pilot_triplet.md`
- `ops/manuscript_master_handoff_001_120.md`
- package source packets:
  - `ops/E011_episode_harness.md`
  - `ops/E011_song_brief.md`
  - `ops/E011_visual_cut_list.md`
  - `ops/E054_episode_harness.md`
  - `ops/E054_song_brief.md`
  - `ops/E054_visual_cut_list.md`
  - `ops/E118_episode_harness.md`
  - `ops/final_song_brief.md`
  - `ops/E118_visual_cut_list.md`

## 3. lane distinction

- `package pilot triplet`:
  - 목적: 작품 전체를 대표하는 story-song-MV bundle 3종을 먼저 고정
  - 선택 회차:
    - `E011`
    - `E054`
    - `E118`
- `music lane pilot 6곡`:
  - 목적: 음원 제작 우선순위와 상업적 훅을 먼저 시험
  - 선택 회차:
    - `E001`
    - `E029`
    - `E040`
    - `E078`
    - `E110`
    - `E120`
- 결론:
  - 둘은 충돌하지 않는다
  - `triplet`은 package flagship
  - `6곡 pilot`은 music-first production queue

## 4. readiness check

- `E011`
  - harness: ready / normalized
  - song brief: ready
  - visual cut list: ready
  - export role: first-performance flagship
  - package promise: `public foregrounding without idolization`
- `E054`
  - harness: ready / normalized
  - song brief: ready
  - visual cut list: ready
  - export role: summer-peak flagship
  - package promise: `peak brightness with faint shadow`
- `E118`
  - harness: ready / strongest reference packet
  - song brief source: `ops/final_song_brief.md`
  - visual cut list: ready
  - export role: ending flagship
  - package promise: `approval without reunion`

## 5. export order

1. `E118`
2. `E011`
3. `E054`

이 순서를 권장하는 이유:

- `E118`:
  - house ethics를 가장 정확히 보여 주는 기준 packet이다
  - ending tone guardrail이 가장 선명하다
- `E011`:
  - 초반 대표 packet으로 작품의 첫 인상을 가장 빠르게 전달한다
  - 공연 scale과 인간적 거리감 규칙을 세우기 좋다
- `E054`:
  - mid-phase brightness를 대표하지만,
    `결말처럼 과열되면 안 된다`는 가드가 필요하다
  - 따라서 기준 packet 둘을 먼저 세운 뒤 export하는 편이 안전하다

## 6. release gate

- common gate:
  - manuscript truth를 넘어서 canon을 새로 암시하지 않는다
  - `운명`, `능력 회복`, `재결합`, `해피엔드`를 직접/간접으로 밀지 않는다
  - downstream prompt가 story tone보다 더 뜨거워지면 reject한다
- `E011` gate:
  - 공연을 스타 탄생처럼 키우지 않는다
  - crowd-noise 안의 selective foregrounding이 남아야 한다
  - 아린은 인간적 scale을 유지해야 한다
- `E054` gate:
  - brightest memory가 final closure처럼 보이면 reject
  - 아린의 창작은 서준의 소유 증거처럼 보이면 reject
  - shadow under brightness가 남아야 한다
- `E118` gate:
  - approval and separation이 동시에 남아야 한다
  - reunion fantasy, sequel bait, triumphant ending glow 금지
  - `ops/final_song_brief.md`는 사실상 `E118 ending song brief`로 취급한다

## 7. export notes

- current blocker:
  - 없음
- naming note:
  - `E118` song source만 파일명이 `final_song_brief.md`라서,
    export 시 alias를 명시해야 혼선이 없다
- house reference:
  - schema depth는 `E118`
  - opening-scale restraint는 `E011`
  - brightness-shadow balance는 `E054`
- manifest:
  - `ops/pilot_export_stack_manifest.md`

## 8. director verdict

- pilot export stack:
  - approved
- current judgment:
  - 지금 필요한 건 새 감정 발명이나 원고 수정이 아니라
    `flagship 3종을 어떤 순서와 규칙으로 밖으로 뽑을지`의 명문화다
- next:
  1. `E118` export naming alias 고정
  2. wider packet family가 열리면 `E118` schema depth를 기준으로 확장
  3. music lane 6곡과 package triplet을 혼동하지 않도록 downstream 문서에 cross-reference 유지
