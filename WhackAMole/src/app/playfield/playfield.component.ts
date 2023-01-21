import { Component, Input } from '@angular/core';
import { Mole } from '../speldata';
import { GameFunctionality } from '../GameFunctionality.service';
import { moleHoleState } from '../speldata';

@Component({
  selector: 'app-playfield',
  //under div .hole: <span class="objectObject"> {{ tepVar }}</span>
  template: `
    <div class="field">
      <ng-container class="" *ngFor="let tepVar of renderHoles; let i = index">
        <div class="hole">
          <ng-container *ngIf="tepVar.available">
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
//^Det är {{ attribut }} som displayar [object obejct]  Hur får jag bort det?^
export class PlayfieldComponent {
  //Klassattribut av datatyp för senare rendering? Bara en boolean?
  @Input() moles: Mole[] = []; //Denna används inte i nuläget
  renderHoles: moleHoleState = [];

  //construktor som tar imot service
  constructor(private _GameService: GameFunctionality) {
    this.renderHoles = this._GameService.moleHoles;
  }

  onMoleWhack(id: number) {
    this._GameService.onMoleClick(id);
  }
}
