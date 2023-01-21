import { Component } from '@angular/core';

@Component({
  selector: 'app-hole',
  template: `
    <p>hole works!</p>
    <div class="hole"></div>
  `,
  styles: [
    `
      .hole {
        position: relative;
        overflow: hidden;
        background-color: rgb(165, 85, 11);
        border-radius: 50%;
        box-shadow: inset 0 10px 7px rgb(53, 21, 6),
          inset 0 20px 20px 15px rgba(0, 0, 0, 0.3), 0 0 5px rgba(0, 0, 0, 0.5);
      }
    `,
  ],
})
export class HoleComponent {
  //Detta är då en child till playfield
  //Ska jag använda holes här?
  //Ska det finnas en mole här i??
}
