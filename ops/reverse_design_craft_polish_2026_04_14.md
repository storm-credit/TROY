# reverse design craft polish 2026-04-14

## 1. purpose

- 이 문서는 결말 역산 / 복선 회수 / 작문 엔진 관점에서 열린 선별 polish 결과를 기록한다.
- 목표는 구조를 다시 짜는 것이 아니라, 이미 작동하는 엔진 위에서 문장 피로와 문서 정합성만 낮추는 것이다.

## 2. orchestra verdict

- 전면 수정:
  - `no`
- 구조 수정:
  - `no`
- 적용 방식:
  - `length-preserving line-fatigue polish`
  - `reverse-design document alignment`

## 3. expert lane summary

### reverse-design / foreshadow lane

- `E118-E120`은 주요 복선을 충분히 회수한다.
- 결말은 재결합 / 능력 회복 / 운명 회귀가 아니라,
  `덜 오해한 채 헤어질 수 있는 이해`로 닫힌다.
- 보강 필요 지점은 원고 구조보다 문서 표현이었다.

### narrative engine lane

- 현재 작문법은 `공감각 캠퍼스 로맨스 + 관계 윤리 slow-burn + 리빌 지연형 감정 압박`이다.
- 정치 스릴러 / 물리 생존 압박 / 사건형 장르로 바꾸면 작품 정체성이 약해진다.
- 수정 대상은 거의 전부 문장 피로와 결론 반복이었다.

### director lane

- `E001-E003`은 사건형 후킹으로 바꾸지 않는다.
- `E118-E120`은 더 뜨거운 재결합 엔딩으로 바꾸지 않는다.
- `E045 -> E058 -> E094 -> E113` 순서의 선별 polish만 허용한다.

## 4. manuscript changes

| episode | action | result |
|---|---|---|
| `E045` | repeated `수정` cadence lowered into earphone / blank-time action | pass |
| `E058` | repeated `오래 / 기억 / 남는다` ending lowered into unsent-message and waiting-space action | pass |
| `E094` | repeated definition lowered into notebook blank-space action | pass |
| `E113` | repeated trust / actuality confirmation lowered into Arin's own-time acceptance action | pass |
| `E119` | quiet body-memory residue added for sensory-origin payoff | pass |

## 5. document alignment

| file | change |
|---|---|
| `ops/ending_scene_lock.md` | clarified that `E119` is post-closure encounter, not reopened final face-to-face |
| `ops/ending_reverse_design_120.md` | changed ending lock from literal sentence to emotional line |
| `ops/foreshadow_plan_120.md` | marked Taeyul ethical mirror as provisional / inactive |
| `ops/motif_audit_seojun_sensory_origin.md` | locked any future reinforcement as quiet body-memory residue only |

## 6. verification

Commands:

```powershell
.\tools\Test-EpisodeLengthGate.ps1 -Paths manuscript\chapter3\E045_흔들리는해석_정본초고.md,manuscript\chapter3\E058_잘못읽은마음_정본초고.md,manuscript\chapter5\E094_말로하는이해_정본초고.md,manuscript\chapter6\E113_아린의선택_정본초고.md,manuscript\chapter6\E119_침묵의완성_정본초고.md -AsJson
.\tools\Test-ForbiddenPatterns.ps1 -Paths manuscript\chapter3\E045_흔들리는해석_정본초고.md,manuscript\chapter3\E058_잘못읽은마음_정본초고.md,manuscript\chapter5\E094_말로하는이해_정본초고.md,manuscript\chapter6\E113_아린의선택_정본초고.md,manuscript\chapter6\E119_침묵의완성_정본초고.md -AsJson
```

Result:

- `E045`: `4163` / safe-line candidate / forbidden pattern pass
- `E058`: `4164` / safe-line candidate / forbidden pattern pass
- `E094`: `4148` / safe-line candidate / forbidden pattern pass
- `E113`: `4083` / safe-line candidate / forbidden pattern pass
- `E119`: `4139` / safe-line candidate / forbidden pattern pass

## 7. lock note

- Do not reopen this pass for larger emotional heat.
- If future edits reopen the ending, protect `E119` low-tone completion first.
- If future platform sampling requires stronger hooks, create a separate sample-facing branch rather than rewriting the locked main manuscript.
