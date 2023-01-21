import { Component } from '@angular/core';

import { GameFunctionality } from '../GameFunctionality.service';
import {
  buttonState,
  counterState,
  initilizeTimer,
  scoreState,
  moleStatus,
} from '../speldata';

@Component({
  selector: 'app-heads-up-display',
  template: `
    <h2>Time remaining: {{ timer.timer }}</h2>
    <h2>Score: {{ points.points }}</h2>

    <button
      type="button"
      class="btn btn-lg"
      (click)="onBtnClick()"
      [disabled]="disableButton.disableButton"
    >
      Start Game
    </button>
  `,
  styles: [
    `
      .btn {
        margin-top: 2rem;
        text-transform: uppercase;
        font-weight: bold;
        background-color: rgb(111, 167, 111);
      }
    `,
  ],
})
export class HeadsUpDisplayComponent {
  //TIMER
  init: initilizeTimer = { init: 60 };
  timer: counterState = { timer: 60 };
  disableButton: buttonState = { disableButton: false };

  //TA BORT SEDAN
  moleCounter: moleStatus = { howManyMoles: 0 };

  //SCORE: POINTS++
  points: scoreState = { points: 0 };

  constructor(private _GameService: GameFunctionality) {
    this.init = this._GameService.init;
    this.timer = this._GameService.timer;
    this.disableButton = this._GameService.disableButton;
    this.points = this._GameService.points;
    this.moleCounter = this._GameService.moleCounter;
  }

  // <span>HOW MANY MOLES: {{ moleCounter.howManyMoles }}</span>

  // //Method to initilize the timer
  // newGame() {
  //   this._GameService.resetTimer(); //Varför e dessa här??
  // }
  // //Method that handles the countdown
  // startTimer() {
  //   this._GameService.runCountdown();
  // }

  onBtnClick() {
    this._GameService.startGame();
  }
}
