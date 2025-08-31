import { Component, OnInit } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-counter',
  template: `
    <div class="card">
      <div class="card-header">
        <h3 class="text-center">Simple Counter</h3>
      </div>
      <div class="card-body text-center">
        <div *ngIf="error" class="alert alert-danger">{{ error }}</div>

        <div class="my-4">
          <h1 class="display-1 text-primary">{{ counter }}</h1>
          <p class="text-muted">Current Counter Value</p>
        </div>

        <div class="d-grid gap-2 d-md-flex justify-content-md-center">
          <button
            class="btn btn-primary btn-lg me-md-2"
            (click)="increment()"
            [disabled]="loading">
            <span *ngIf="loading" class="spinner-border spinner-border-sm me-2"></span>
            {{ loading ? 'Incrementing...' : 'Increment Counter' }}
          </button>

          <button
            class="btn btn-outline-secondary btn-lg"
            (click)="loadCounter()">
            Refresh
          </button>
        </div>

        <div class="mt-4">
          <small class="text-muted">
            MongoDB + Express + Angular + Node.js Monolith
          </small>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .display-1 {
      font-size: 4rem;
      font-weight: bold;
    }
  `]
})
export class CounterComponent implements OnInit {
  counter = 0;
  loading = false;
  error: string | null = null;

  constructor(private counterService: CounterService) {}

  ngOnInit() {
    this.loadCounter();
  }

  loadCounter() {
    this.counterService.getCounter().subscribe({
      next: (response) => {
        this.counter = response.count;
        this.error = null;
      },
      error: (error) => {
        this.error = 'Error loading counter: ' + error.message;
      }
    });
  }

  increment() {
    this.loading = true;
    this.error = null;

    this.counterService.incrementCounter().subscribe({
      next: (response) => {
        this.counter = response.count;
        this.loading = false;
      },
      error: (error) => {
        this.error = 'Error incrementing counter: ' + error.message;
        this.loading = false;
      }
    });
  }
}
