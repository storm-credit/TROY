# Novel Post-Lock Expert Audit - 2026-04-09

## 1. Purpose

이 문서는 `TROY` 소설이 post-lock 상태에서 추가 보강이 필요한지, 그리고 지금 미디어 오케스트라로 넘어가도 되는지를 오케스트라 하네스로 재판정한다.

주의:

- 이 문서는 `novel-only` 품질 판정이다
- music / image / MV 품질 평가는 포함하지 않는다
- 제출용 cosmetic 상태와 소설 본문 상태를 구분해서 본다

## 2. Truth Source

- `ops/novel_orchestra_report_001_120.md`
- `ops/novel_line_edit_sweep_001_120.md`
- `ops/print_facing_paragraph_rhythm_pass_anchors.md`
- `ops/read_aloud_cadence_pass_anchors.md`
- `ops/export_facing_layout_prep.md`
- `ops/full_book_merged_export.md`
- `ops/submission_facing_cosmetic_pass.md`
- representative prose anchors:
  - `manuscript/chapter1/E001_무료한일상_정본초고.md`
  - `manuscript/chapter1/E012_방음실의고백_정본초고.md`
  - `manuscript/chapter2/E029_고백_정본초고.md`
  - `manuscript/chapter4/E078_결별_정본초고.md`
  - `manuscript/chapter6/E101_재회의예감_정본초고.md`
  - `manuscript/chapter6/E110_다시이어지는리듬_정본초고.md`
  - `manuscript/chapter6/E118_마지막재회_정본초고.md`
  - `manuscript/chapter6/E119_침묵의완성_정본초고.md`
  - `manuscript/chapter6/E120_에필로그_정본초고.md`
- export representatives:
  - `export/full_book/TROY_full_book_E001-E120_export.md`
  - `export/submission/너라는운율_submission_draft_v1.md`

## 3. Harness Run

- orchestra mode: `전문가 에이전트 요청 + director fallback synthesis`
- MCP used:
  - `list_mcp_resources`
  - 결과: available resources 없음
  - director 판단: 로컬 repo truth source 사용
- skills run:
  - no dedicated skill used
  - 이유: 이번 패스는 생성보다 post-lock quality judgment다
- agent reviews:
  - canon / ending-lock expert: request issued
  - prose / reading expert: request issued
  - export / submission expert: request issued
  - callback status: time-box within this pass not fully returned
  - director action: same truth source로 close read fallback synthesis 수행
- hook checks:
  - ending-language context recheck on `E110`
  - representative anchor close read
  - export boundary close read
  - README / checklist state consistency check
- director lock note:
  - 에이전트 응답 지연은 있었다
  - 최종 판정은 time-boxed expert 요청 + director synthesis 기준으로 잠근다

## 4. Findings

### Blocking Issues

- none found

판정 근거:

- 구조, 캐논, 결말 의미, 관계 결론이 이미 충분히 잠겨 있다
- representative anchor 회차들에서 장면 기능이 무너지거나 감정선이 흔들리는 문제를 찾지 못했다
- `E110`의 `재결합`은 여전히 부정 문맥이라 비차단이다

### Recommended Improvements

- none required for novel lock

판정 근거:

- 현재 남아 있는 조정점은 `본문 보강`이 아니라 `외부 전달 형식 polish`에 가깝다
- 소설 자체를 더 고치지 않아도 media downstream 작업으로 넘어가는 데 문제 없다

### Optional Polish

- `full-book read-aloud cadence pass`
  - 조건: 낭독, 오디오북, 라이브 리딩을 염두에 둘 때
- `submission-facing cosmetic finalization`
  - 조건: 실제 투고, 편집자 전달, 공모 제출이 임박했을 때
  - 범위: 저자명, 표제지, blank-line normalize, chapter presentation styling
- `sample submission packet`
  - 조건: 전체본이 아니라 샘플 제출 전략이 필요할 때

## 5. Final Verdict

Status:

- pass

결론:

- 소설 본문은 추가 보강 없이도 잠금 유지가 가능하다
- 지금 시점의 남은 일은 소설 수정보다 packaging / delivery 성격이다
- 따라서 다음 오케스트라 단계는 `media-separated track`으로 넘어가는 것이 적절하다

Director recommendation:

1. novel prose is frozen
2. media orchestra opens as separate track
3. submission polish is parked until real external handoff timing exists
