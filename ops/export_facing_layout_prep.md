# Export-Facing Layout Prep

## 1. Purpose

이 문서는 `TROY` 소설 원고를 외부 편집, 검토, 제출 포맷으로 넘기기 전에 필요한 `export-facing layout` 기준을 잠근다.

목표:

- repo 내부 원고와 외부 전달 원고의 역할을 분리한다
- 내보내기 순서, 파일 묶음, 표기 규칙을 고정한다
- 캐논과 문장 의미를 바꾸지 않고 전달용 레이아웃만 정리한다

## 2. Scope

대상:

- `manuscript/chapter1` to `manuscript/chapter6`
- `manuscript/README.md`
- export planning docs in `ops/`

비대상:

- story rewrite
- canon change
- media package merge

## 3. Harness Run

- orchestra mode: `전문가 감사 포함 오케스트라 모드`
- truth source:
  - `README.md`
  - `manuscript/README.md`
  - `ops/manuscript_migration_checklist.md`
  - chapter manuscript files already locked in repo
- MCP used:
  - no available MCP resources in this pass
  - local repo truth source used
- skills run:
  - no dedicated skill used
  - 이유: 이번 패스는 생성형 포맷 작성보다 운영 기준 잠금이다
- agent reviews:
  - one expert audit used for export handoff risk scan
- hook checks:
  - filename stability check
  - chapter range consistency check
  - README link check
- director lock note:
  - repo manuscript remains the truth source
  - export copy must not overwrite repo manuscript

## 4. Export Layout Standard

- export unit:
  - default unit is `chapter bundle`
  - chapter bundle contains one folder or one merged document per chapter range
- chapter ranges:
  - `chapter1 = E001-E020`
  - `chapter2 = E021-E040`
  - `chapter3 = E041-E060`
  - `chapter4 = E061-E080`
  - `chapter5 = E081-E100`
  - `chapter6 = E101-E120`
- file order:
  - episode ids remain ascending
  - no title-only renaming allowed
  - exported filenames must preserve `E###` prefix
- heading rule:
  - keep episode heading line at top of each source file during export assembly
  - if merged by chapter, preserve one blank line between episode blocks
- paragraph rule:
  - use the locked manuscript paragraphing from repo
  - do not collapse blank lines during export cleanup
  - preserve dialogue line breaks that were added in rhythm and cadence passes
- metadata rule:
  - export-facing copy may add title page or chapter cover sheet
  - do not insert production notes, harness data, song data, or MV data into prose export
  - do not include repo governance docs in submission package
- naming boundary:
  - repo source filenames remain `E###_*_정본초고.md`
  - export package may use reader-facing labels such as `chapter bundle`, `full manuscript`, `submission draft`
  - export labels must not replace or overwrite repo source filenames

## 5. Export Package Recommendation

권장 순서:

1. chapter bundle export
2. full-book merged export
3. submission-specific cosmetic formatting

권장 패키지:

- Package A:
  - `chapter1` to `chapter6` as six chapter bundles
- Package B:
  - full-book merged manuscript for editor or alpha reader
- Package C:
  - sample packet using `E001-E010` and `E101-E120` for opening/ending spot review

경계 규칙:

- repo manuscript is internal truth source
- export package is external delivery copy
- external package must read independently without Obsidian or repo path context

## 6. Pre-Export Gates

내보내기 전에 확인:

- source file names remain stable
- chapter range labels match repo reality
- no unresolved canon dispute exists
- no media-facing annotations are mixed into prose
- latest prose lock docs are linked in `README.md`

## 7. Lock Judgment

Status:

- pass with export-facing layout prep locked

결론:

- 소설 원고는 이제 `repo truth source -> export copy` 흐름으로 넘길 수 있다
- 남은 일은 실제 export copy 생성이지 기준 재논의가 아니다

## 8. Optional Next

- create chapter-bundle export copies
- create full-book merged export manuscript
- add submission-facing title page package
