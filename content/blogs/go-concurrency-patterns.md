---
title: "Go Concurrency Patterns for Backend Development"
excerpt: "Practical patterns using goroutines and channels to build high-performance concurrent applications"
date: "2024-07-20"
tags:
  - "Go"
  - "Concurrency"
  - "Performance"
  - "Backend"
---

## Introduction

Go's concurrency model with goroutines and channels makes it perfect for backend systems. Let's explore practical patterns.

## Worker Pool Pattern

```go
func processJobs(jobs <-chan Job, results chan<- Result, numWorkers int) {
    var wg sync.WaitGroup
    
    for i := 0; i < numWorkers; i++ {
        wg.Add(1)
        go func() {
            defer wg.Done()
            for job := range jobs {
                result := job.Process()
                results <- result
            }
        }()
    }
    
    wg.Wait()
    close(results)
}
```

## Fan-Out, Fan-In Pattern

```go
func fanOut(input <-chan int, workers int) []<-chan int {
    outputs := make([]<-chan int, workers)
    
    for i := 0; i < workers; i++ {
        outputs[i] = worker(input)
    }
    
    return outputs
}

func fanIn(channels ...<-chan int) <-chan int {
    out := make(chan int)
    var wg sync.WaitGroup
    
    for _, ch := range channels {
        wg.Add(1)
        go func(c <-chan int) {
            defer wg.Done()
            for n := range c {
                out <- n
            }
        }(ch)
    }
    
    go func() {
        wg.Wait()
        close(out)
    }()
    
    return out
}
```

## Pipeline Pattern

```go
func pipeline(data []int) <-chan int {
    out := make(chan int)
    
    go func() {
        defer close(out)
        for _, n := range data {
            out <- n
        }
    }()
    
    return out
}

func square(in <-chan int) <-chan int {
    out := make(chan int)
    
    go func() {
        defer close(out)
        for n := range in {
            out <- n * n
        }
    }()
    
    return out
}
```

## Context for Cancellation

```go
func processWithTimeout(ctx context.Context) error {
    ctx, cancel := context.WithTimeout(ctx, 5*time.Second)
    defer cancel()
    
    resultCh := make(chan Result)
    
    go func() {
        result := expensiveOperation()
        resultCh <- result
    }()
    
    select {
    case result := <-resultCh:
        return nil
    case <-ctx.Done():
        return ctx.Err()
    }
}
```

## Best Practices

- Always close channels when done
- Use context for cancellation
- Limit goroutine count with worker pools
- Avoid goroutine leaks
- Use sync.WaitGroup for coordination
