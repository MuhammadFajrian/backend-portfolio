---
title: "Laravel Performance Optimization Tips"
excerpt: "Practical techniques to improve Laravel application performance including query optimization, caching, and eager loading"
date: "2024-06-10"
tags:
  - "Laravel"
  - "PHP"
  - "Performance"
  - "Optimization"
---

## Introduction

Laravel is powerful but can be slow if not optimized. Here are proven techniques to boost performance.

## 1. Eager Loading (Fix N+1 Queries)

### Bad: N+1 Problem

```php
$users = User::all();

foreach ($users as $user) {
    echo $user->posts->count(); // N queries!
}
```

### Good: Eager Loading

```php
$users = User::with('posts')->get();

foreach ($users as $user) {
    echo $user->posts->count(); // 1 query!
}
```

## 2. Query Optimization

### Select Only Needed Columns

```php
// Bad
$users = User::all();

// Good
$users = User::select('id', 'name', 'email')->get();
```

### Use Chunk for Large Datasets

```php
User::chunk(1000, function ($users) {
    foreach ($users as $user) {
        // Process user
    }
});
```

## 3. Caching

### Query Result Caching

```php
$users = Cache::remember('active_users', 3600, function () {
    return User::where('status', 'active')->get();
});
```

### View Caching

```bash
php artisan view:cache
```

### Route Caching

```bash
php artisan route:cache
```

## 4. Database Indexing

```php
Schema::table('users', function (Blueprint $table) {
    $table->index('email');
    $table->index(['status', 'created_at']);
});
```

## 5. Optimize Composer Autoloader

```bash
composer dump-autoload --optimize
```

## 6. Use Queue for Heavy Tasks

```php
// Instead of processing immediately
Mail::to($user)->send(new WelcomeEmail());

// Queue it
Mail::to($user)->queue(new WelcomeEmail());
```

## 7. Config Caching

```bash
php artisan config:cache
```

## 8. Use Redis for Sessions

```php
// config/session.php
'driver' => env('SESSION_DRIVER', 'redis'),
```

## Performance Checklist

- ✅ Enable OPcache in production
- ✅ Use eager loading to prevent N+1
- ✅ Cache configuration and routes
- ✅ Add database indexes
- ✅ Use queue for async tasks
- ✅ Enable Redis for cache/sessions
- ✅ Optimize Composer autoloader
- ✅ Use CDN for assets

## Monitoring

Use Laravel Telescope or Debugbar to identify bottlenecks:

```bash
composer require laravel/telescope --dev
php artisan telescope:install
```

## Results

Applying these techniques typically results in:
- 50-70% reduction in response time
- 40-60% reduction in database queries
- Better user experience
