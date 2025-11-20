---
title: "RESTful API Design Best Practices"
excerpt: "Essential principles for designing clean, maintainable, and scalable REST APIs that developers love to use"
date: "2024-09-15"
tags:
  - "API Design"
  - "REST"
  - "Backend"
  - "Best Practices"
---

## Introduction

Good API design is crucial for developer experience and system maintainability. Here are the principles I follow.

## 1. Use Proper HTTP Methods

```http
GET    /users          # List users
GET    /users/123      # Get specific user
POST   /users          # Create user
PUT    /users/123      # Update user (full)
PATCH  /users/123      # Update user (partial)
DELETE /users/123      # Delete user
```

## 2. Consistent Response Format

```json
{
  "data": {
    "id": 123,
    "name": "John Doe"
  },
  "meta": {
    "timestamp": "2024-09-15T10:30:00Z"
  }
}
```

### Error Response

```json
{
  "error": {
    "code": "USER_NOT_FOUND",
    "message": "User with ID 123 not found",
    "details": []
  }
}
```

## 3. Use HTTP Status Codes Correctly

- **200 OK**: Successful GET, PUT, PATCH
- **201 Created**: Successful POST
- **204 No Content**: Successful DELETE
- **400 Bad Request**: Invalid input
- **401 Unauthorized**: Missing authentication
- **403 Forbidden**: Insufficient permissions
- **404 Not Found**: Resource doesn't exist
- **500 Internal Server Error**: Server error

## 4. Pagination

```http
GET /users?page=1&limit=20
```

```json
{
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 100,
    "totalPages": 5
  }
}
```

## 5. Filtering and Sorting

```http
GET /users?status=active&sort=-createdAt
```

## 6. Versioning

```http
GET /api/v1/users
GET /api/v2/users
```

## 7. Rate Limiting

```http
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1634567890
```

## Key Principles

- Be consistent across all endpoints
- Use nouns for resources, not verbs
- Provide clear error messages
- Document your API (OpenAPI/Swagger)
- Version your API from day one
