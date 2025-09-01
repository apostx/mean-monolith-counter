import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  template: `
    <div class="container">
      <h1 class="text-center my-4">MEAN Stack Counter Application</h1>
      <app-counter></app-counter>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'Counter App';
}
