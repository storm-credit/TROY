---
description: Advance a track to the next pipeline stage
---
Advance track $ARGUMENTS to the next harness stage:

1. Check current stage: curl -s http://localhost:8899/api/tracks/{trackId}
2. Check next stage validity: curl -s http://localhost:8899/api/harness/next/{trackId}
3. If gate required, verify gate status first
4. Execute advance: python scripts/advance_stage.py {trackId}
5. Verify result: curl -s http://localhost:8899/api/tracks/{trackId}
