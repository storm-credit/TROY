---
description: Run a full health check on a track
---
Run comprehensive health check on track $ARGUMENTS:

1. Validate manifest: python scripts/validate_manifest.py {trackId}
2. Check pipeline position: curl -s http://localhost:8899/api/harness/next/{trackId}
3. Check uploaded assets: curl -s http://localhost:8899/api/assets/{trackId}
4. Check gate history: curl -s http://localhost:8899/api/tracks/{trackId}/gate-history
5. Report blockers, missing requirements, and next actions
