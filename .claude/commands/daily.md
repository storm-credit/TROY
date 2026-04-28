---
description: Generate today's production plan
---

> 🔁 **TROY mode**: 본 명령의 `python scripts/daily_plan.py` 와 `localhost:8899/api/daily/today` 는 oddengine 전용. TROY 환경에선 Conductor 가 `master_generation_board.md` + `ops/orchestra_*` 직접 읽고 작성. 매핑은 `CLAUDE.md §13` 참조.
Generate the daily production plan:

1. Generate plan: python scripts/daily_plan.py
2. Show plan: curl -s http://localhost:8899/api/daily/today | python -m json.tool
3. Display task queue with priorities and owners
4. Highlight blocked tracks or overdue gates
