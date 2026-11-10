import { Component, afterNextRender, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-hydration-let-array-mutation');

  todos = Array.from({ length: 8 }, (_, i) => ({ id: i, title: 'todo ' + i }));

  constructor() {
    // Browser only. Each todo should only have `id` and `title`.
    afterNextRender(() => setInterval(() => console.log(this.todos), 5000));
  }
}
