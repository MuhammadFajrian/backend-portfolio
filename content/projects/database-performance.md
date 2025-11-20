---
title: "Database Query Optimization"
description: "Reduced query time from 8s to 200ms through indexing and caching"
date: "2024-08-10"
techStack:
  - "PostgreSQL"
  - "Go"
  - "Redis"
painPoints:
  - "Slow dashboard loading (8+ seconds)"
  - "Database CPU at 85% during peak"
  - "Complex JOIN queries causing locks"
solutions:
  - "Created composite indexes"
  - "Implemented Redis caching"
  - "Refactored N+1 queries"
---

## Problem

Reporting dashboard with 8+ second load times and high database CPU usage.

## Solution

### Index Optimization

```sql
CREATE INDEX idx_users_status_created 
  ON users(status, created_at);

CREATE INDEX idx_orders_user_id 
  ON orders(user_id);
```

### Query Refactoring

```go
func GetUserStats(db *sql.DB) ([]UserStat, error) {
    query := `
        SELECT u.id, u.name,
               COUNT(o.id) as orders,
               SUM(o.total) as revenue
        FROM users u
        LEFT JOIN orders o ON u.id = o.user_id
        GROUP BY u.id
    `
    rows, err := db.Query(query)
    return stats, nil
}
```

## Results

- Query time: 8.2s → 0.2s (97% improvement)
- CPU usage: 85% → 35%
- Cache hit rate: 92%
