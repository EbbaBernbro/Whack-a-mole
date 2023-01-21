import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-heads-up-display></app-heads-up-display>
    <app-playfield></app-playfield>
  `,
  styles: [``],
})
export class AppComponent {
  title = 'WhackAMole';
}
