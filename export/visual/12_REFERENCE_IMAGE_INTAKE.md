# TROY Visual Reference Image Intake

## 1. purpose

이 문서는 아린/서준 face lock에 필요한 실제 reference image를 어디에 두고 어떤 이름으로 관리할지 정한다.

## 2. local drop location

실제 이미지 파일은 git에 올리지 않는다.

권장 로컬 위치:

- `local/generated_visual/character_lock/`

이 위치는 `.gitignore`의 `local/` 규칙 안에 있으므로, png/jpg/webp 파일이 실수로 커밋되지 않는다.

## 3. expected reference files

| character | shot | expected file |
| --- | --- | --- |
| Arin | master front | `local/generated_visual/character_lock/ARIN_MASTER_FRONT_v01.*` |
| Arin | master 3/4 | `local/generated_visual/character_lock/ARIN_MASTER_34_v01.*` |
| Seojun | master front | `local/generated_visual/character_lock/SEOJUN_MASTER_FRONT_v01.*` |
| Seojun | master 3/4 | `local/generated_visual/character_lock/SEOJUN_MASTER_34_v01.*` |

확장자는 사용하는 툴 출력에 맞춘다.

- `.png`
- `.jpg`
- `.jpeg`
- `.webp`

## 4. after drop

이미지를 넣은 뒤 오케스트라는 아래 순서로 점검한다.

0. optional check:
   - `tools/Test-VisualReferenceIntake.ps1`
1. `export/visual/mv_character_continuity_board.md`
2. `export/visual/character_master/arin_master_face.md`
3. `export/visual/character_master/seojun_master_face.md`
4. `export/visual/character_sheets/arin_sheet_v01.md`
5. `export/visual/character_sheets/seojun_sheet_v01.md`

## 5. gate rule

- reference image가 들어왔다고 바로 `reference pass`로 올리지 않는다
- 얼굴 동일성, 나이감, 아이돌화 여부, 주체성 손상 여부를 보고 `pass / revise / reject`를 결정한다
- accepted still locked 없이는 I2V 또는 MV production으로 가지 않는다

## 6. helper command

PowerShell:

```powershell
.\tools\Test-VisualReferenceIntake.ps1
```

이 명령은 expected reference file 4종이 실제로 들어왔는지 바로 보여 준다.
