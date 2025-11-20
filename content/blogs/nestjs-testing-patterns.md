---
title: "NestJS Testing Patterns: Unit & Integration Tests"
excerpt: "Best practices for testing NestJS applications with examples of unit tests, integration tests, and mocking strategies"
date: "2024-10-25"
tags:
  - "NestJS"
  - "TypeScript"
  - "Testing"
  - "Best Practices"
---

## Introduction

Testing is crucial for maintaining reliable NestJS applications. This guide covers practical testing patterns I use in production.

## Unit Testing Services

### Basic Service Test

```typescript
import { Test } from '@nestjs/testing';
import { UserService } from './user.service';
import { getModelToken } from '@nestjs/mongoose';

describe('UserService', () => {
  let service: UserService;
  let model: Model<User>;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getModelToken(User.name),
          useValue: {
            find: jest.fn(),
            findById: jest.fn(),
            create: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    model = module.get(getModelToken(User.name));
  });

  it('should find user by id', async () => {
    const mockUser = { id: '1', name: 'John' };
    jest.spyOn(model, 'findById').mockResolvedValue(mockUser);

    const result = await service.findById('1');
    expect(result).toEqual(mockUser);
  });
});
```

## Mocking Dependencies

### External API Mocking

```typescript
describe('PaymentService', () => {
  let service: PaymentService;
  let httpService: HttpService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        PaymentService,
        {
          provide: HttpService,
          useValue: {
            post: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<PaymentService>(PaymentService);
    httpService = module.get<HttpService>(HttpService);
  });

  it('should process payment successfully', async () => {
    const mockResponse = { data: { status: 'success' } };
    jest.spyOn(httpService, 'post').mockReturnValue(of(mockResponse));

    const result = await service.processPayment({ amount: 100 });
    expect(result.status).toBe('success');
  });
});
```

## Integration Testing

### E2E Controller Test

```typescript
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('UserController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/users (GET)', () => {
    return request(app.getHttpServer())
      .get('/users')
      .expect(200)
      .expect((res) => {
        expect(res.body).toBeInstanceOf(Array);
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
```

## Testing Best Practices

### 1. Use Test Fixtures

```typescript
const createMockUser = (overrides = {}) => ({
  id: '1',
  email: 'test@example.com',
  name: 'Test User',
  ...overrides,
});
```

### 2. Test Error Cases

```typescript
it('should throw error when user not found', async () => {
  jest.spyOn(model, 'findById').mockResolvedValue(null);
  
  await expect(service.findById('invalid'))
    .rejects
    .toThrow(NotFoundException);
});
```

### 3. Test Guards and Interceptors

```typescript
it('should deny access without JWT', () => {
  return request(app.getHttpServer())
    .get('/protected')
    .expect(401);
});
```

## Key Takeaways

- Mock external dependencies
- Test both success and error cases  
- Use fixtures for test data
- Write integration tests for critical flows
- Maintain high test coverage (80%+)
