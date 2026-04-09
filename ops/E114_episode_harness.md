# E114 Episode Harness - 마지막 시험

## Orchestration Harness

- orchestra mode: 전문가 에이전트 모드
- director intent: 과거 습관으로 돌아가지 않는 작은 질문을 결말 직전의 시험으로 잠근다
- truth source: Obsidian/04-스토리/111-120화 상세 줄거리.md; Obsidian/10-집필/Chapter6/E114_마지막시험_정본초고.md; project/TROY/ops/E113_episode_harness.md; project/TROY/ops/E112_episode_harness.md; project/TROY/ops/orchestra_harness_contract.md
- MCP used: local source read only
- skills run: episode-harness-fill, suno-brief-builder, mv-cutlist-builder
- agent reviews: habit relapse, question ethics, phase-6 tone
- hook checks: harness-required-fields; forbidden-language-guard; naming-and-archive-check
- escalation status: none
- director lock note: 과거 방식으로 돌아가지 않는 질문만 남긴다

## 1. Episode Identity

- episode id: E114
- movement: 제6악장: 늦가을의 종지
- chapter: CH23
- phase: Phase 6 - late autumn cadence
- phase purpose: 습관의 재발을 질문으로 멈춘다
- episode logline: 연락이 늦어지는 순간 서준은 예전처럼 이유를 추적하려는 습관을 알아차리고, 왜 그랬어 대신 괜찮아?를 남긴다
- emotional thesis: 시험은 돌아가지 않는 데 있다

## 2. TROY Input Packet

- canon version: TROY lock v1
- series truth source: project/TROY/ops/orchestra_harness_contract.md + Obsidian Chapter6 source
- relationship delta: 아린의 자기 선택 -> 과거 습관과의 결별
- hearing / silence state: Stage 5 threshold, 말이 늦어도 습관으로 돌아가지 않는다
- reveal state: 서준은 추적보다 질문을 택한다
- motif set (1-3): 뒤집힌 휴대폰, 이어폰으로 가는 손, 지워진 문장
- continuity notes: 과장된 희망 금지, 통제적 집착 금지, 결말 선반영 금지
- allowed interpretation range: 작고 실제적인 자기 제어
- must include: 괜찮아?, 메시지 삭제, 되돌아가지 않기
- must not include: 추궁, 질투 폭발, 완전한 해소

## 3. Story Core

- scene goal: 과거 습관을 끊는 짧은 선택을 보여준다
- conflict: 불안이 즉시 이유를 추적하게 만든다
- turn: 질문이 추적보다 먼저 간다
- residue: 크게 바뀌지 않아도 되돌아가지 않는 힘
- payoff link: E115 붙잡지 않는 증명

## 4. Character State

- Seojun state before: 이유를 캐려는 사람
- Seojun state after: 질문 하나로 멈출 수 있는 사람
- Arin state before: 연락의 늦음이 관계를 흔들 수 있는 사람
- Arin state after: 늦음보다 태도로 읽히는 사람
- support cast function: 없음, 내부 습관과의 싸움이 핵심

## 5. Canon Check

- world rule touched: 묻는 사랑의 후반 회수
- fade stage touched: Stage 5 threshold
- location used: 실내와 메시지 화면
- continuity risk: 갈등 확대나 추궁 장면으로 오독될 위험
- locked decision affected: 과거 방식으로 돌아가지 않는다

## 6. Music Engine Module

- music engine role: Seojun inner monologue
- song function: Seojun inner monologue
- lyric theme: 질문이 과거를 이기는 연습
- chorus emotion line: 왜 그랬어 대신 괜찮아?를 남기는 연습
- sound pressure: low, taut, controlled
- sonic palette: sparse piano, clipped breath, low room hum, restrained unresolved tail
- refrain seed / echo / payoff: seed=괜찮아?; echo=지워지는 문장; payoff=되돌아가지 않기
- vocal point of view: close internal voice
- vocal distance: medium-close
- forbidden cliches: jealousy, accusation, certainty lock
- Suno prompt status: ready

## 7. Image Engine Module

- image engine role: still-memory translation
- hero cut vs bridge cut ratio: 3:5
- master visual motif: 뒤집힌 휴대폰과 멈춘 손
- key prop: 휴대폰, 지워진 메시지, 이어폰
- location geometry: 책상 위의 정적과 좁은 실내
- seasonal palette: 늦가을의 회색과 탁한 청록
- light / weather: 낮은 실내광
- image tool plan: Midjourney exploration, Nano Banana production, Imagen optional hero frame
- continuity anchors: 손이 이어폰으로 가도 끼지 않음

## 8. Video Engine Module

- video engine role: 습관 멈춤의 순서화
- MV cut count: 8
- slot map: 연락 지연 -> 추적 충동 -> 휴대폰 뒤집기 -> 메시지 삭제 -> 짧은 질문 -> 숨 고르기 -> 시선 정리 -> 잔향
- expectation / reality mode: expectation of conflict resisted, restraint centered
- memory structure if used: none
- ending frame type: 지워진 문장
- carry-over continuity: E115의 증명으로 이어짐

## 9. Prose Module

- dominant sensory field: 화면, 손, 낮은 호흡
- key metaphor family: 멈춤, 삭제, 질문
- must-avoid jargon: test as punishment, closure, jealousy
- ending sentence mode: 멈춘 뒤의 조용한 확인

## 10. Delivery Gate

- orchestration pass: yes
- canon pass: yes
- structure pass: yes
- pre-gen gate: no relapse into suspicion
- music pass: yes
- visual pass: yes
- post-gen gate: yes
- release gate: pass if question outruns accusation
- prose pass: yes
- hook pass: yes
- director approval: pending lock

이 템플릿을 통과한 회차만 `official in-engine episode`로 간주한다.

추가 원칙:

- `MCP used`, `skills run`, `agent reviews`, `hook checks` 중 생략한 항목이 있으면 이유를 남긴다
- `director lock note`가 비어 있으면 release 직전 초안으로 본다

