# TROY Music Engine

## 1. Definition

`음악 엔진`은 소설의 감정을 회차별 곡으로 압축하는 하위 작법/제작 엔진이다.

상위 원칙:

- story truth first
- one episode, one emotional thesis
- song follows the episode, not the other way around

## 2. Function

- 화별 감정을 `1화 = 1곡` 체계로 번역한다
- 곡의 역할을 명확히 분리한다
- 곡이 본편을 스포일러하지 않고 잔향을 남기게 한다

## 3. Core Rules

### A. One Episode, One Song

- each episode owns exactly one theme song
- one song should carry one primary emotional function

### B. Allowed Song Functions

- Seojun inner monologue
- relationship theme
- Arin in-world song
- ending reflection

### C. Lyric Rule

- do not summarize plot
- prefer image, air, season, residue
- avoid direct copying logic from known songs
- avoid overusing fate/forever/destiny language

### D. Arrangement Rule

- arrangement must match the episode's emotional pressure
- intimacy beats spectacle
- recurrence is allowed through motif, not melody imitation

## 4. Composition Methods

### A. Emotion Line System

각 화의 곡은 먼저 `감정 한 줄`을 가져야 한다.

예:

- 설렘이 아니라 `가까워질수록 더 조심스러워지는 마음`
- 슬픔이 아니라 `놓아주면서도 거짓은 아니었다고 인정하는 마음`

운영 필드:

- episode id
- emotion thesis
- forbidden emotional drift
- target residue

### B. Refrain Design Rule

후렴은 줄거리 요약이 아니라 감정의 반복/변주/회수 장치다.

원칙:

- first use: seed
- middle use: altered echo
- last use: payoff or ironic reversal

운영 필드:

- refrain phrase
- first appearance
- variation point
- final return

### C. Motif Reproduction Protocol

곡 안에서도 모티프는 재현되되, 반복이 아니라 변주로 돌아와야 한다.

예:

- 이어폰 = 차단에서 해제 쪽으로
- 바람 = 불안에서 수용 쪽으로
- 종이 = 기록에서 잔향 쪽으로

운영 필드:

- motif
- sound texture
- lyric image
- episode reprise notes

### D. Vocal Perspective Grid

곡은 누가 부르느냐보다 `누구의 시점으로 들리느냐`가 더 중요하다.

분류:

- Seojun inward voice
- relational voice
- Arin authored voice
- epilogue voice

운영 필드:

- vocal point of view
- distance to mic/emotion
- allowed texture
- blocked texture

### E. Episode Sound Arc Tracker

회차를 넘어가는 사운드 아크를 별도로 관리한다.

원칙:

- 같은 감정이라도 같은 질감으로 반복하지 않는다
- 악장 단위로 sound pressure를 조절한다

운영 필드:

- current sound state
- next episode pressure
- chapter arc note
- callback allowed?

## 5. Inputs

- episode harness
- relationship thermometer
- reveal matrix
- emotion budget
- motif ledger

## 6. Outputs

- song function
- emotional thesis
- chorus emotion line
- safe Suno brief
- carry-over note for MV

## 7. Main Documents

- `ops/episode_song_system_120.md`
- `ops/episode_song_allocation_001_010.md`
- `ops/episode_song_prompt_sheet_001_010.md`
- `ops/final_song_brief.md`
- `ops/media_engine_contract.md`

## 8. Engine Question

이 곡은 `무슨 사건이 있었는가`가 아니라 `무슨 감정이 남았는가`를 노래하고 있는가?
