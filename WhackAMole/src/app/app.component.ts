import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="siteGrid">
      <div class="hud">
        <div><h1 class="title">whack a mole</h1></div>
        <app-heads-up-display></app-heads-up-display>
      </div>
      <div class="playfield"><app-playfield></app-playfield></div>
    </div>
  `,
  styles: [
    `
      .title {
        text-transform: uppercase;
        margin-bottom: 3rem;
        font-weight: bolder;
        color: rgb(130, 81, 58);
        font-size: 3rem;
      }

      .siteGrid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(1, 1fr);
        gap: 10px;
      }

      .hud {
        margin: auto;
      }
    `,
  ],
})
export class AppComponent {
  title = 'WhackAMole';
}
