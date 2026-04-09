# Vocabulary / Style Consistency Pass - E001-E120

## 1. Purpose

이 문서는 `TROY` 원고 `E001-E120`에 대해 수행한 `vocabulary / style consistency pass` 결과를 잠근다.

목표:

- 명백한 오타와 비의도적 표현 흔들림을 정리한다
- 작품 보이스로 기능하는 반복 표현은 무리하게 평탄화하지 않는다
- selective line edit 이후의 소설 본문을 `novel-only locked prose` 상태로 올린다

## 2. Scope

- target range: `E001-E120`
- target folders:
  - `manuscript/chapter1`
  - `manuscript/chapter2`
  - `manuscript/chapter3`
  - `manuscript/chapter4`
  - `manuscript/chapter5`
  - `manuscript/chapter6`

## 3. Harness Run

- orchestra mode: `직접 오케스트라 모드`
- truth source:
  - migrated prose under `manuscript/chapter1` through `manuscript/chapter6`
  - `ops/novel_line_edit_sweep_001_120.md`
  - `ops/chapter_revision_memo_001_120.md`
  - `ops/manuscript_migration_checklist.md`
- MCP used:
  - no available MCP resources in this pass
  - local repo truth source used
- skills run:
  - no dedicated skill used
  - 이유: 이번 패스는 포맷 생성보다 표기/문체 일관성의 최종 잠금 패스다
- agent reviews:
  - subagent review attempted
  - usage limit blocked external expert completion in this pass
  - director performed final local audit and lock
- hook checks:
  - non-Korean residue scan
  - obvious repeated-token scan
  - foreign-script scan
  - ending-language guard spot check
  - file naming consistency check
- director lock note:
  - 이 패스는 `전면 재문체화`가 아니다
  - 보이스를 구성하는 반복 어휘는 유지하고, 비의도적 흔들림만 수정한다

## 4. Findings

판단:

- 전역 치환이 필요한 수준의 표기 붕괴는 없었다
- 외국어 잔재, 영문 대사 잔재, 결말 금지어 누수는 발견되지 않았다
- 다만 일부 회차에 `비의도적 중복 표현`과 `오타성 문장`이 남아 있었다

이번 패스에서 반영한 micro-fix:

- `chapter1/E010_특별한관심_정본초고.md`
  - `더 이상 이상하게`를 `더는 이상하게`로 정리
- `chapter2/E023_작은질투_정본초고.md`
  - `그 그런 거가`를 `그게`로 정리
- `chapter6/E110_다시이어지는리듬_정본초고.md`
  - `기울어지는 것 / 기울어지는 걸` 반복을 `서서히 기우는 것 / 그걸 인정하면`으로 정리
- `chapter5` revision memo file reference
  - `E090_대화없는계절` 오기재를 실제 파일명 `E090_다음문턱_정본초고.md`로 잠금

## 5. Non-Changes

아래는 의도적으로 전역 수정하지 않았다.

- `이상하게`, `생각보다`, `조금씩`, `다만`, `결국` 같은 반복 부사
  - 이유: 특정 국면에서 서준 시점의 망설임과 감각 전이를 구성하는 보이스로 기능한다
- 말줄임표 `…`
  - 이유: 인물의 주저, 숨 고르기, 미완의 감정 표현으로 일관되게 쓰이고 있다
- 짧은 선언형 종결 문장
  - 이유: 후반부 절제 톤과 결말 윤리를 지탱하는 산문 리듬이다

## 6. Judgment

Status:

- pass with targeted micro-fixes applied

결론:

- `E001-E120` 소설 본문은 selective line edit와 vocabulary/style consistency pass까지 완료했다
- 현재 상태는 `novel-only locked prose`로 취급 가능하다
- 추가 작업은 필수가 아니라 선택적 심화 교열 영역이다

## 7. Optional Next

선택 작업:

- line-by-line prestige polish on ending cluster `E101-E120`
- chapter opening cadence polish on `E001-E010`
- print-facing paragraph rhythm pass

분리 유지:

- media report
- music / image / MV 상태 보고
