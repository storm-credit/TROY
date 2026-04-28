---
description: Generate today's production plan
---
Generate the daily production plan:

1. Generate plan: python scripts/daily_plan.py
2. Show plan: curl -s http://localhost:8899/api/daily/today | python -m json.tool
3. Display task queue with priorities and owners
4. Highlight blocked tracks or overdue gates
