# TROY Manuscript

This folder contains director-approved manuscript migrations from the external Obsidian source workspace.

Rules:

- preserve the original external source drafts
- migrate by approved range only
- keep stable episode ids in filenames
- run post-migration validation after every copy pass
- do not treat migration as prose finalization

Current migrated range:

- `chapter1/E001-E020`
- `chapter2/E021-E040`
- `chapter3/E041-E060`
- `chapter4/E061-E080`
- `chapter5/E081-E100`
- `chapter6/E101-E120`

Export rule:

- repo manuscript is the truth source
- export copies must preserve `E###` filename order
- chapter bundle export is the default external handoff shape
- export layout prep is locked in `ops/export_facing_layout_prep.md`
- generated chapter bundles live in `export/chapter_bundles/`
