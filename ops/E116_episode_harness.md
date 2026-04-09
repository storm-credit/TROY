# E116 Episode Harness - 마지막 화음의 시작

## Orchestration Harness

- orchestra mode: 전문가 에이전트 모드
- director intent: 마지막 재회를 앞두되 아직은 준비와 속도 조절만 남긴다
- truth source: Obsidian/04-스토리/111-120화 상세 줄거리.md; Obsidian/10-집필/Chapter6/E116_마지막화음의시작_정본초고.md; project/TROY/ops/E111_episode_harness.md; project/TROY/ops/E115_episode_harness.md; project/TROY/ops/orchestra_harness_contract.md; project/TROY/ops/final_episodes_scene_sheet_118_120.md; project/TROY/ops/final_song_brief.md
- MCP used: local source read only
- skills run: episode-harness-fill, suno-brief-builder, mv-cutlist-builder
- agent reviews: final-prep tone, no reunion inflation, approval vs possession
- hook checks: harness-required-fields; forbidden-language-guard; naming-and-archive-check
- escalation status: none
- director lock note: 마지막 재회는 준비일 뿐, 결말 선반영은 금지

## 1. Episode Identity

- episode id: E116
- movement: 제6악장: 늦가을의 종지
- chapter: CH24
- phase: Phase 6 - late autumn cadence
- phase purpose: 마지막 대화를 위한 속도 조절을 세운다
- episode logline: 서준은 카페 달 앞에서 기대 대신 마지막으로 제대로 말하기를 준비하며, 붙잡기 위한 무기가 아니라 상대를 다치게 하지 않기 위한 속도 조절을 익힌다
- emotional thesis: 마지막 시작은 조용한 준비다

## 2. TROY Input Packet

- canon version: TROY lock v1
- series truth source: project/TROY/ops/orchestra_harness_contract.md + Obsidian Chapter6 source + final scene sheet
- relationship delta: 증명 -> 마지막 준비
- hearing / silence state: Stage 5 threshold, 결말을 앞두고도 공백을 과장하지 않는다
- reveal state: 마지막 재회는 준비의 결과가 아니라 준비의 태도다
- motif set (1-3): 카페 달 앞 골목, 주머니 속 종이, 해질녘 그림자
- continuity notes: 운명적 재결합 금지, 해피엔드 선반영 금지, 능력 회복 금지
- allowed interpretation range: 낮고 맑은 준비, 속도 조절
- must include: 마지막으로 제대로 말하기, 함께 가지 않더라도, 상대를 다치게 하지 않기
- must not include: 결말 확정, 감정 폭발, 재회 선언

## 3. Story Core

- scene goal: 마지막 대화를 위한 준비를 세운다
- conflict: 기대가 다시 위험해지려 한다
- turn: 준비를 붙잡기의 반대로 정의한다
- residue: 조용하고 성실한 마지막 준비감
- payoff link: E117 끝을 말하는 이유

## 4. Character State

- Seojun state before: 기대하면 위험해지는 사람
- Seojun state after: 속도 조절로 상대를 다치게 하지 않으려는 사람
- Arin state before: 아직 만나지 않았지만 마지막 대화의 기준이 되는 사람
- Arin state after: 준비된 만남을 받게 될 사람
- support cast function: 골목과 늦은 해질녘 공기

## 5. Canon Check

- world rule touched: 마지막 재회의 윤리
- fade stage touched: Stage 5 threshold into final stretch
- location used: 카페 달 앞 골목
- continuity risk: 재결합이나 결말 선언으로 오독될 위험
- locked decision affected: 준비는 붙잡기가 아니다

## 6. Music Engine Module

- music engine role: final setup theme
- song function: Relationship theme
- lyric theme: 마지막 대화를 위한 속도 조절
- chorus emotion line: 기대 대신 마지막으로 제대로 말하기를 준비했다
- sound pressure: low, poised, calm
- sonic palette: sparse piano, muted low strings, dry evening air, restrained tail
- refrain seed / echo / payoff: seed=마지막으로 제대로 말하기; echo=상대를 다치게 하지 않기; payoff=속도 조절
- vocal point of view: medium-close, reflective
- vocal distance: medium-close
- forbidden cliches: destiny reunion, final embrace, triumphant swell
- Suno prompt status: ready

## 7. Image Engine Module

- image engine role: still-memory translation
- hero cut vs bridge cut ratio: 3:5
- master visual motif: 골목의 해질녘과 주머니 속 종이
- key prop: 종이, 골목, 그림자
- location geometry: 카페 달 앞 골목의 대각선 구도
- seasonal palette: 늦가을의 서늘한 황갈색과 회색
- light / weather: 해질녘 그림자
- image tool plan: Midjourney exploration, Nano Banana production, Imagen optional hero frame
- continuity anchors: 준비, 속도 조절, 붙잡지 않기

## 8. Video Engine Module

- video engine role: 마지막 준비 순서화
- MV cut count: 8
- slot map: 골목 멈춤 -> 종이 만지기 -> 준비 문장 -> 속도 조절 -> 다치지 않기 -> 그림자 이동 -> 숨 고르기 -> 잔향
- expectation / reality mode: expectation restrained, preparation centered
- memory structure if used: none
- ending frame type: 준비된 골목의 정적
- carry-over continuity: E117 종지로 이어짐

## 9. Prose Module

- dominant sensory field: 해질녘 공기, 종이, 그림자
- key metaphor family: 준비, 속도, 조절
- must-avoid jargon: climax, reunion, fate, closure
- ending sentence mode: 조용한 준비의 문장

## 10. Delivery Gate

- orchestration pass: yes
- canon pass: yes
- structure pass: yes
- pre-gen gate: no reunion inflation
- music pass: yes
- visual pass: yes
- post-gen gate: yes
- release gate: pass if preparation stays humble
- prose pass: yes
- hook pass: yes
- director approval: pending lock

이 템플릿을 통과한 회차만 `official in-engine episode`로 간주한다.

추가 원칙:

- `MCP used`, `skills run`, `agent reviews`, `hook checks` 중 생략한 항목이 있으면 이유를 남긴다
- `director lock note`가 비어 있으면 release 직전 초안으로 본다

