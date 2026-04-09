# Manuscript Migration Log - E001-E010

## 1. Scope

- Range: E001-E010
- Source root: `C:\Users\Storm Credit\Desktop\Novel\너라는운율\Obsidian\10-집필\Chapter1`
- Target root: `project/TROY/manuscript/chapter1`
- Migration mode: copy only

## 2. Director Decision

The director selected `project/TROY/manuscript/chapter1/` instead of the dry-run default `project/TROY/manuscript/`.

Reason:

- chapter-level folders scale better for 120 episodes
- source Obsidian manuscripts are already grouped by chapter
- post-migration validation stays smaller and easier to audit

## 3. Migrated Files

| Episode | Target File | Status |
|---|---|---|
| E001 | `project/TROY/manuscript/chapter1/E001_무료한일상_정본초고.md` | copied |
| E002 | `project/TROY/manuscript/chapter1/E002_서점에서의충격_정본초고.md` | copied |
| E003 | `project/TROY/manuscript/chapter1/E003_아린이라는존재_정본초고.md` | copied |
| E004 | `project/TROY/manuscript/chapter1/E004_네가들리는거리_정본초고.md` | copied |
| E005 | `project/TROY/manuscript/chapter1/E005_내일을기다리며_정본초고.md` | copied |
| E006 | `project/TROY/manuscript/chapter1/E006_문학과철학_정본초고.md` | copied |
| E007 | `project/TROY/manuscript/chapter1/E007_같은조가되다_정본초고.md` | copied |
| E008 | `project/TROY/manuscript/chapter1/E008_도서관첫미팅_정본초고.md` | copied |
| E009 | `project/TROY/manuscript/chapter1/E009_마음의비밀_정본초고.md` | copied |
| E010 | `project/TROY/manuscript/chapter1/E010_특별한관심_정본초고.md` | copied |

## 4. Validation

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

This migration copies manuscript source files into TROY for the approved pilot range only.

It does not mark prose as final.

