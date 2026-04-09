# Full-Book Merged Export

## 1. Purpose

이 문서는 `TROY` 소설 원고의 full-book merged export copy 생성 결과를 잠근다.

목표:

- 외부 편집자나 알파리더가 한 파일로 읽을 수 있는 합본을 만든다
- chapter bundle export를 기반으로 안전하게 full-book copy를 조립한다
- repo truth source와 외부 전달본의 경계를 유지한다

## 2. Output

생성 경로:

- `export/full_book/TROY_full_book_E001-E120_export.md`

관련 문서:

- `export/README.md`
- `ops/export_facing_layout_prep.md`
- `ops/chapter_bundle_export_copies.md`

## 3. Harness Run

- orchestra mode: `전문가 감사 포함 오케스트라 모드`
- truth source:
  - `export/chapter_bundles/`
  - `ops/export_facing_layout_prep.md`
  - locked manuscript source in `manuscript/`
- MCP used:
  - no available MCP resources in this pass
  - local repo truth source used
- skills run:
  - no dedicated skill used
  - 이유: 이번 패스는 합본 export assembly 작업이다
- agent reviews:
  - one expert audit used for external handoff risk scan
- hook checks:
  - merged export file existence check
  - start/end continuity spot check
  - export README link check
  - chapter bundle dependency check
- director lock note:
  - full-book export is a derived delivery copy
  - repo manuscript remains the only editable truth source

## 4. Assembly Rule

- source order follows `chapter1` to `chapter6`
- episode order remains ascending `E001` to `E120`
- per-chapter export headers are stripped from the merged file
- per-episode headings remain intact
- blank-line rhythm from source export is preserved

## 5. Lock Judgment

Status:

- pass with full-book merged export complete

결론:

- 외부 전달용 Package B가 준비됐다
- 다음 단계는 제출용 표지, 표제지, 간단한 front matter를 얹는 cosmetic pass다

주의:

- 현재 합본은 episode heading을 유지한 읽기용 전달본이다
- submission 직전에는 heading presentation, blank-line normalize, title-page cosmetic pass를 별도로 수행한다
