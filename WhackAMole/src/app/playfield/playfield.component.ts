import { Component } from '@angular/core';
import { GameFunctionality } from '../GameFunctionality.service';
import { moleHoleState } from '../speldata';

@Component({
  selector: 'app-playfield',
  template: `
    <div class="backgroundField">
      <ng-container *ngFor="let displayedHoles of renderHoles; let i = index">
        <div class="hole">
          <ng-container *ngIf="displayedHoles.available">
            <img
              class="mole"
              (click)="onMoleWhack(i)"
              src="https://www.clipartmax.com/png/full/181-1815733_mole-clipart-earthbound-cartoon-mole-transparent-background.png"
            />
          </ng-container>
        </div>
      </ng-container>
    </div>
  `,
  styleUrls: ['./playfield.component.css'],
})
export class PlayfieldComponent {
  //Klassattribut av datatyp för rendering
  renderHoles: moleHoleState = [];

  //construktor som tar imot service
  constructor(private _GameService: GameFunctionality) {
    this.renderHoles = this._GameService.moleHoles;
  }

  onMoleWhack(id: number) {
    this._GameService.onMoleClick(id);
  }
}
