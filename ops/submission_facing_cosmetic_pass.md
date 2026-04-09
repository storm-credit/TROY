# Submission-Facing Cosmetic Pass

## 1. Purpose

이 문서는 `TROY` 소설의 submission-facing cosmetic pass 결과를 잠근다.

목표:

- full-book merged export를 외부 제출 친화형 copy로 변환한다
- 제목 페이지와 상단 안내를 최소한으로 추가한다
- episode heading 표현을 덜 작업용으로 보이게 정리한다

## 2. Output

생성 경로:

- `export/submission/너라는운율_submission_draft_v1.md`
- `export/submission/README.md`

선행 의존:

- `export/full_book/TROY_full_book_E001-E120_export.md`
- `ops/full_book_merged_export.md`

## 3. Harness Run

- orchestra mode: `전문가 감사 포함 오케스트라 모드`
- truth source:
  - `export/full_book/TROY_full_book_E001-E120_export.md`
  - `ops/full_book_merged_export.md`
  - locked manuscript source in `manuscript/`
- MCP used:
  - no available MCP resources in this pass
  - local repo truth source used
- skills run:
  - no dedicated skill used
  - 이유: 이번 패스는 cosmetic export transformation 작업이다
- agent reviews:
  - one expert audit used for last-mile cosmetic risk scan
- hook checks:
  - submission file existence check
  - first page/title block sanity check
  - last-page continuity spot check
  - export README boundary check
- director lock note:
  - submission draft remains derived output only
  - repo manuscript and export full-book remain upstream truth sources

## 4. Applied Cosmetic Rule

- add simple title page block
- keep work title visible at top
- retain full reading range note
- transform `# Episode NN - 제목` to `## NN. 제목`
- do not alter prose body, paragraphing, or ending meaning

## 5. Lock Judgment

Status:

- pass with submission-facing draft v1 complete

결론:

- 외부 제출 직전 검토용 copy가 준비됐다
- 남은 건 표제지, 저자명, 장 구분 presentation 같은 완전한 submission styling 여부뿐이다
