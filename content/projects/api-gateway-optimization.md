---
title: "API Gateway Performance Optimization"
description: "Reduced API response time by 65% through caching strategies and connection pooling"
date: "2024-10-15"
techStack:
  - "Java"
  - "Spring Boot"
  - "Redis"
  - "PostgreSQL"
  - "Docker"
painPoints:
  - "API response times averaging 800ms under load"
  - "Database connection pool exhaustion during peak hours"
  - "Redundant database queries for frequently accessed data"
solutions:
  - "Implemented Redis caching layer with TTL-based invalidation"
  - "Optimized HikariCP connection pool configuration"
  - "Added response compression and HTTP/2 support"
---

## Overview

Built a high-performance API gateway serving 50K+ requests/minute for a fintech application. The system handles authentication, rate limiting, and request routing to multiple microservices.

## The Challenge

The existing API infrastructure struggled during peak trading hours:
- Average response time: 800ms
- P95 latency: 2.3 seconds
- Frequent database connection timeouts
- High memory usage causing JVM garbage collection pauses

## Solution Architecture

### 1. Multi-Layer Caching Strategy

Implemented a sophisticated caching system using Redis:

```java
@Cacheable(value = "users", key = "#userId", unless = "#result == null")
public User getUserById(Long userId) {
    return userRepository.findById(userId)
        .orElseThrow(() -> new UserNotFoundException(userId));
}

@CacheEvict(value = "users", key = "#user.id")
public User updateUser(User user) {
    return userRepository.save(user);
}
```

### 2. Connection Pool Optimization

Tuned HikariCP for optimal performance:

```yaml
spring:
  datasource:
    hikari:
      maximum-pool-size: 20
      minimum-idle: 10
      connection-timeout: 30000
      idle-timeout: 600000
      max-lifetime: 1800000
```

### 3. Request/Response Compression

Enabled gzip compression for responses over 1KB:

```java
@Configuration
public class CompressionConfig {
    @Bean
    public FilterRegistrationBean<GzipFilter> gzipFilter() {
        FilterRegistrationBean<GzipFilter> registration = new FilterRegistrationBean<>();
        registration.setFilter(new GzipFilter());
        registration.addUrlPatterns("/api/*");
        return registration;
    }
}
```

## Results

- ✅ Response time: **280ms** (65% improvement)
- ✅ P95 latency: **450ms** (80% improvement)
- ✅ **Zero** connection timeouts
- ✅ **3x** increase in throughput
- ✅ Memory usage reduced by 40%

## Key Learnings

1. **Profile before optimizing**: Used JProfiler to identify actual bottlenecks rather than guessing
2. **Cache invalidation is hard**: Implemented event-driven cache updates using Redis pub/sub
3. **Monitor everything**: Added Prometheus metrics for real-time visibility
4. **Load test early**: Discovered issues before production using K6

## Tech Insights

**Redis Configuration:**
- Used Redis Cluster for high availability
- Configured eviction policy: `allkeys-lru`
- Set appropriate TTL based on data update frequency

**Database Optimization:**
- Added composite indexes on frequently queried columns
- Implemented read replicas for read-heavy endpoints
- Used database connection pooling efficiently
