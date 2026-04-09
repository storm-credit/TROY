# Chapter Bundle Export Copies

## 1. Purpose

이 문서는 `TROY` 소설 원고의 chapter bundle export copies 생성 결과를 잠근다.

목표:

- 외부 전달용 chapter bundle 6개를 안정적으로 생성한다
- repo 원고와 export copy의 경계를 유지한다
- 제출 전 검토와 편집 이관에 바로 쓸 수 있는 기본 묶음을 만든다

## 2. Output

생성 경로:

- `export/chapter_bundles/chapter1_E001-E020_bundle.md`
- `export/chapter_bundles/chapter2_E021-E040_bundle.md`
- `export/chapter_bundles/chapter3_E041-E060_bundle.md`
- `export/chapter_bundles/chapter4_E061-E080_bundle.md`
- `export/chapter_bundles/chapter5_E081-E100_bundle.md`
- `export/chapter_bundles/chapter6_E101-E120_bundle.md`
- `export/README.md`

## 3. Harness Run

- orchestra mode: `전문가 감사 포함 오케스트라 모드`
- truth source:
  - `manuscript/chapter1` to `manuscript/chapter6`
  - `ops/export_facing_layout_prep.md`
  - `manuscript/README.md`
- MCP used:
  - no available MCP resources in this pass
  - local repo truth source used
- skills run:
  - no dedicated skill used
  - 이유: 이번 패스는 prose export assembly 작업이다
- agent reviews:
  - one expert audit used for export handoff risk scan
- hook checks:
  - chapter bundle file existence check
  - chapter range consistency check
  - export boundary doc check
  - README link and package note check
- director lock note:
  - export copy is derived output, not new canon source
  - chapter bundle order follows locked manuscript order

## 4. Assembly Rule

- one merged file per chapter range
- episode blocks remain in ascending `E###` order
- each episode keeps its original heading line
- blank lines between episode blocks are preserved
- bundle header includes chapter label and episode range only

## 5. Lock Judgment

Status:

- pass with chapter bundle export copies complete

결론:

- 외부 전달용 기본 패키지 A가 준비됐다
- 다음 단계는 `full-book merged export` 또는 `submission-facing title page package`다
