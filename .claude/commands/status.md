---
description: Show full system status
---
Show oddengine production system status:

1. Docker: docker ps --filter name=oddengine --format "{{.Names}}: {{.Status}}"
2. API health: curl -s http://localhost:8899/api/health
3. Tracks: curl -s http://localhost:8899/api/tracks
4. Pipeline: curl -s http://localhost:8899/api/harness/stages
5. Gates: curl -s http://localhost:8899/api/gates
6. Today: curl -s http://localhost:8899/api/daily/today
