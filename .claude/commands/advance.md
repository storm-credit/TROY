---
description: Advance a track to the next pipeline stage
---

> 🔁 **TROY mode**: 본 명령의 `localhost:8899` API · `scripts/*.py` · `outputs/*` 경로는 oddengine 전용. TROY 환경 매핑은 `CLAUDE.md §13` 참조.
Advance track $ARGUMENTS to the next harness stage:

1. Check current stage: curl -s http://localhost:8899/api/tracks/{trackId}
2. Check next stage validity: curl -s http://localhost:8899/api/harness/next/{trackId}
3. If gate required, verify gate status first
4. Execute advance: python scripts/advance_stage.py {trackId}
5. Verify result: curl -s http://localhost:8899/api/tracks/{trackId}
