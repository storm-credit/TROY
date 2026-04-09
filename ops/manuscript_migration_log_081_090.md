# Manuscript Migration Log - E081-E090

## 1. Scope

- Range: E081-E090
- Source root: `C:\Users\Storm Credit\Desktop\Novel\너라는운율\Obsidian\10-집필\Chapter5`
- Target root: `project/TROY/manuscript/chapter5`
- Migration mode: copy only

## 2. Director Decision

The director opened `project/TROY/manuscript/chapter5/` for the first Chapter5 migration batch.

Reason:

- E081-E090 belongs to the external `Chapter5` source folder
- `project/TROY/manuscript/chapter5/` did not exist before this pass
- chapter-level folders keep source grouping aligned with TROY migration logs

## 3. Migrated Files

| Episode | Target File | Status |
|---|---|---|
| E081 | `project/TROY/manuscript/chapter5/E081_침묵이후_정본초고.md` | copied |
| E082 | `project/TROY/manuscript/chapter5/E082_익숙하지않은평온_정본초고.md` | copied |
| E083 | `project/TROY/manuscript/chapter5/E083_남겨진습관_정본초고.md` | copied |
| E084 | `project/TROY/manuscript/chapter5/E084_혼자서배우는언어_정본초고.md` | copied |
| E085 | `project/TROY/manuscript/chapter5/E085_작은성숙_정본초고.md` | copied |
| E086 | `project/TROY/manuscript/chapter5/E086_과거의직면_정본초고.md` | copied |
| E087 | `project/TROY/manuscript/chapter5/E087_기억의장소_정본초고.md` | copied |
| E088 | `project/TROY/manuscript/chapter5/E088_아린없는세계_정본초고.md` | copied |
| E089 | `project/TROY/manuscript/chapter5/E089_관계의의미_정본초고.md` | copied |
| E090 | `project/TROY/manuscript/chapter5/E090_다음문턱_정본초고.md` | copied |

## 4. Validation

Pre-copy validation:

- source file count: 10
- target folder did not exist before this pass

Post-copy validation:

- copied file count: 10
- all copied files match source byte size
- all copied files match source SHA256 hash
- blocking keyword sweep: no blocking keywords found

Checked blocking patterns:

- `능력 회복`
- `운명`
- `재결합`
- `해피엔드`
- `성균관`
- `김은지`
- `상태창`
- `스킬`
- `레벨업`

## 5. Lock Note

This migration opens the approved chapter5 manuscript migration and extends the copied manuscript range to E001-E090.

It does not mark prose as final.
