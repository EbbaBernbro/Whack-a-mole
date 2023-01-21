import { Injectable } from '@angular/core';
import { timeout } from 'rxjs';
import {
  buttonState,
  counterState,
  initilizeTimer,
  moleHoleState,
  scoreState,
  endOfGameState,
  finalScore,
  moleStatus,
} from './speldata';

@Injectable({
  providedIn: 'root',
})
export class GameFunctionality {
  //TIMER
  init: initilizeTimer = { init: 60 };
  timer: counterState = { timer: 60 };
  disableButton: buttonState = { disableButton: false };

  //SCORE: POINTS++
  points: scoreState = { points: 0 };

  //COUNTER FOR GENERATED MOLES
  moleCounter: moleStatus = { howManyMoles: 0 };

  //END OF GAME REACHED
  gameOver: endOfGameState = { gameOver: 'GAME OVER!' };
  finalScore: finalScore = { scoreMessage: 'Your final score is:' };

  //HOLE OBJECTS
  moleHoles: moleHoleState = [
    //Rad 1
    { id: 1, available: false },
    { id: 2, available: false },
    { id: 3, available: false },
    { id: 4, available: false },
    { id: 5, available: false },
    //Rad 2
    { id: 6, available: false },
    { id: 7, available: false },
    { id: 8, available: false },
    { id: 9, available: false },
    { id: 10, available: false },
    //Rad 3
    { id: 11, available: false },
    { id: 12, available: false },
    { id: 13, available: false },
    { id: 14, available: false },
    { id: 15, available: false },
    //Rad 4
    { id: 16, available: false },
    { id: 17, available: false },
    { id: 18, available: false },
    { id: 19, available: false },
    { id: 20, available: false },
    //Rad 5
    { id: 21, available: false },
    { id: 22, available: false },
    { id: 23, available: false },
    { id: 24, available: false },
    { id: 25, available: false },
  ];

  constructor() {}

  //Method to initilize the timer
  resetTimer() {
    if (this.init.init && this.init.init > 0) {
      this.timer.timer = this.init.init;
    }
  }

  //Method to reset score
  resetScore() {
    if (this.points.points > 0) {
      this.points.points = 0;
    }
  }

  //Global variable
  randomInterval: any;

  //Method that handles the countdown
  runCountdown() {
    let gameTimer = setInterval(() => {
      this.timer.timer = this.timer.timer - 1;

      this.showMoleAtRandomInterval();

      if (this.timer.timer === 0) {
        clearInterval(gameTimer);
        clearInterval(this.randomInterval);
        this.clearGame();
      }
    }, 1000);
  }

  //When time is out, clears HUD for new game
  clearGame() {
    setTimeout(() => {
      this.resetScore();
      this.disableButton.disableButton = false;
    }, 3000);
  }

  //Method that checks if the timer has finished
  startGame() {
    this.resetTimer();
    this.runCountdown();
    this.disableButton.disableButton = true;
  }

  //Generates a random hole for a mole to pop up in
  moleInRandomHole(moleHoles: moleHoleState) {
    let i = Math.floor(Math.random() * moleHoles.length);
    let showMole = moleHoles[i];

    if ((showMole.available = true)) {
      setTimeout(() => {
        showMole.available = false;
        this.moleCounter.howManyMoles--;
      }, 4000);
    }
    console.log(showMole);
  }

  showMoleAtRandomInterval() {
    let randomNumber = Math.floor(Math.random() * (4000 - 1000) + 1000);
    this.randomInterval = setInterval(() => {
      if (this.moleCounter.howManyMoles <= 2 && this.timer.timer != 0) {
        this.moleInRandomHole(this.moleHoles);
        this.moleCounter.howManyMoles++;
      }
    }, randomNumber);
  }

  //When user whack a mole
  onMoleClick(id: number) {
    if (this.moleHoles[id].available) {
      this.removeMole(id);
      this.points.points++;
    }
  }

  removeMole(id: number) {
    console.log('Nu körs removeMole');
    this.moleHoles[id].available = false;
  }
}
