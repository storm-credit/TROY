# TROY

`TROY` is the clean production repository for the novel project.

Current mode:
- canon first
- 120-episode target locked
- full manuscript migration complete: E001-E120
- no media asset commits yet
- story, music, and MV decisions must all follow one shared canon

## Repo Rule

Do not move raw drafts into this repo until the canon is locked.

This repository exists to answer these questions first:
- What is the final story identity?
- What are the non-negotiable world rules?
- Who are the core characters and their emotional arcs?
- How do novel, Suno music, and MV all express the same canon?
- How should the 120-episode structure be distributed for maximum payoff?

## Structure

```text
TROY/
  canon/
    series.md
    world.md
    characters.md
    style.md
    open_questions.md
    canon_lock_matrix.md
  ops/
    director_orchestra.md
    master_plan_120.md
    foreshadow_plan_120.md
```

## Working Principle

1. Lock canon.
2. Lock emotional identity.
3. Lock audiovisual grammar.
4. Lock the 120-episode structure and milestone beats.
5. Only then migrate episodes one by one.

## Change Control

This repo now follows a simple change-control rule.

- locked decisions are not changed casually
- new ideas are classified as `locked`, `parked`, or `experimental`
- the orchestra director decides when an idea changes the main canon

See:
- `ops/change_control.md`

## TROY Engine

This repo is now managed as a `TROY engine`, not a loose planning folder.

Core engine docs:
- `ops/orchestra_engine.md`
- `ops/orchestra_harness_contract.md`
- `ops/troy_engine_method.md`
- `ops/model_reasoning_policy.md`
- `ops/media_subengines.md`
- `ops/music_engine.md`
- `ops/music_sound_arc_001_030.md`
- `ops/refrain_reprise_register.md`
- `ops/arin_in_world_song_map_120.md`
- `ops/image_engine.md`
- `ops/video_engine.md`
- `ops/episode_harness_template.md`
- `ops/episode_packet_index_001_120.md`
- `ops/episode_packet_index_001_010.md`
- `ops/episode_packet_index_011_020.md`
- `ops/episode_packet_index_021_030.md`
- `ops/episode_packet_index_031_040.md`
- `ops/episode_packet_index_041_050.md`
- `ops/episode_packet_index_051_060.md`
- `ops/episode_packet_index_061_070.md`
- `ops/episode_packet_index_071_080.md`
- `ops/episode_packet_index_081_090.md`
- `ops/episode_packet_index_091_100.md`
- `ops/episode_packet_index_101_110.md`
- `ops/episode_packet_index_111_120.md`
- `ops/engine_gates.md`
- `ops/orchestra_expert_audit_101_120.md`
- `ops/manuscript_migration_checklist.md`
- `ops/continuity_sweep_111_120.md`
- `ops/manuscript_migration_dry_run_001_010.md`
- `ops/manuscript_migration_log_001_010.md`
- `ops/manuscript_migration_log_011_020.md`
- `ops/manuscript_migration_log_021_030.md`
- `ops/manuscript_migration_log_031_040.md`
- `ops/manuscript_migration_log_041_050.md`
- `ops/manuscript_migration_log_051_060.md`
- `ops/manuscript_migration_log_061_070.md`
- `ops/manuscript_migration_log_071_080.md`
- `ops/manuscript_migration_log_081_090.md`
- `ops/manuscript_migration_log_091_100.md`
- `ops/manuscript_migration_log_101_110.md`
- `ops/manuscript_migration_log_111_120.md`
- `ops/novel_orchestra_report_001_120.md`
- `ops/novel_line_edit_sweep_001_120.md`
- `ops/chapter_revision_memo_001_120.md`
- `ops/vocabulary_style_consistency_pass_001_120.md`
- `ops/ending_cluster_prestige_polish_101_120.md`
- `ops/opening_cluster_prestige_polish_001_010.md`
- `ops/print_facing_paragraph_rhythm_pass_anchors.md`
- `ops/read_aloud_cadence_pass_anchors.md`
- `ops/export_facing_layout_prep.md`
- `ops/chapter_bundle_export_copies.md`
- `ops/full_book_merged_export.md`
- `ops/submission_facing_cosmetic_pass.md`
- `ops/novel_postlock_expert_audit_2026_04_09.md`

This means:
- canon protects the project identity
- structure distributes payoff across 120 episodes
- each episode is produced through one shared harness
- song and MV are downstream of story truth
- music, image, and video each run on their own sub-engine
- the director controls change and final sign-off

Operating split:
- ChatGPT is strongest for upstream worldbuilding, plausibility comparison, and emotional-arc alternatives
- Codex is strongest for vault/repo execution, normalization, hooks, logs, and batch edits
- orchestra merges both and holds final canon sign-off

Inside this repo:
- `TROY engine` = ending-first reverse-design writing method system for this novel
- `orchestra engine` = director/control layer that operates the TROY engine

## Current Source Material

The active source material still lives outside this repo:
- `C:\Users\Storm Credit\Desktop\Novel\너라는운율\기획`
- `C:\Users\Storm Credit\Desktop\Novel\너라는운율\Obsidian`

`TROY` is the clean master copy we will build from those materials.
