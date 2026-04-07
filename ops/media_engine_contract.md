# TROY Media Engine Contract

## 1. Purpose

상위 `TROY 엔진`과 하위 `music / image / video` 엔진 사이의 입력/출력 계약을 고정한다.

핵심:

- sub-engine may interpret
- sub-engine may not alter canon

## 2. Hierarchy

- canon
- episode packet
- media brief
- asset outputs

모든 하위 엔진은 같은 truth source를 공유해야 한다.

## 3. Required Input Packet

필수 입력:

- series canon version
- phase id
- chapter id
- episode id
- episode logline
- emotion thesis
- relationship delta
- hearing/silence state
- motif set
- reveal state
- continuity notes

## 4. Required Outputs

### Music Output

- song function
- lyric theme
- chorus emotion line
- sound pressure
- forbidden language

### Image Output

- master look prompt
- character continuity prompt
- location geometry prompt
- motif placement notes
- still prompt set

### Video Output

- cut count
- slot map
- expectation/reality mode
- ending frame type
- continuity carry-over

## 5. Gates

### Pre-Gen Gate

- canon check
- timeline check
- reveal alignment
- emotion budget check

### Post-Gen Gate

- novel vs song consistency
- novel vs image consistency
- novel vs video consistency
- motif match
- forbidden element check

### Release Gate

- readability / viewability
- repetition risk
- naming and archive check
- residue quality

## 6. Override Rule

override levels:

- cosmetic
- interpretive
- canonical

rule:

- cosmetic: local approval
- interpretive: orchestra note required
- canonical: forbidden without TROY approval

## 7. Feedback Loop

각 화가 끝나면 아래를 남긴다.

- what worked
- what broke
- repetition risk
- update target
- next engine adjustment
