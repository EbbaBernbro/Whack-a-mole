import { Injectable } from '@angular/core';
import { timeout } from 'rxjs';
import {
  buttonState,
  counterState,
  initilizeTimer,
  moleHoleState,
  scoreState,
  intervalState,
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

  //Interval test ANVÄNDS EJ TA BORT
  timeOut: intervalState = { timeOut: 0 };

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

  resetScore() {
    if (this.points.points > 0) {
      this.points.points = 0;
    }
  }

  //Method that handles the countdown
  runCountdown() {
    let gameTimer = setInterval(() => {
      this.timer.timer = this.timer.timer - 1;

      // let y = Math.floor(Math.random() * 40000 + 1000);
      // let moleInt = setInterval(() => {

      // }, y);
      //this.showMoleAtRandomTime();

      if (this.moleCounter.howManyMoles <= 2) {
        console.log('if kollas');
        this.moleInRandomHole(this.moleHoles);
      }

      if (this.timer.timer === 0) {
        console.log('Vi har nått 0');
        clearInterval(gameTimer);
        alert('Ta en titt på din score innan den försvinner');
        this.clearGame();
      }
    }, 1000);
  }

  clearGame() {
    setTimeout(() => {
      this.resetTimer();
      this.resetScore();
      this.disableButton.disableButton = false;
    }, 3000);
  }

  //Method that checks if the timer has finished
  startGame() {
    console.log('startGame');
    // if (this.timer.timer === 0) {
    //   this.disableButton.disableButton = false;
    // } else {
    this.runCountdown();
    this.disableButton.disableButton = true;
  }

  //V.1
  randomHole() {
    let holeArray = this.moleHoles;
    const x = Math.floor(Math.random() * holeArray.length);
    const randomHole = this.moleHoles[x];
    randomHole.available = true;

    let y = Math.floor(Math.random() * 4000 + 1000);
    const timerId = setInterval(this.randomHole, y);

    console.log(randomHole);
  }

  //V.2
  moleInRandomHole(moleHoles: moleHoleState) {
    console.log('Nu körs mole- Generatorn aka random');
    let i = Math.floor(Math.random() * moleHoles.length);
    let showMole = moleHoles[i];

    if ((showMole.available = true)) {
      this.moleCounter.howManyMoles++;
      setTimeout(() => {
        showMole.available = false;
        this.moleCounter.howManyMoles--;
      }, 4000);
    }
    console.log(showMole);
  }

  //startTimer method calls this one
  showMoleAtRandomTime() {
    // console.log('showMoleAtRandomTime');
    let y = Math.floor(Math.random() * 4000 + 1000);

    ////////
    //slumptal som hoppar över setInterval?
    setInterval(() => {
      this.moleInRandomHole(this.moleHoles);
    }, 1000); //1000 ist för y

    //()=>{}
  }

  nyFunktion() {
    //this.resetTimer();
    //this.resetScore();
    this.startGame();
    //this.moleInRandomHole(this.moleHoles);
  }

  onMoleClick(id: number) {
    if (this.moleHoles[id].available) {
      this.removeMole(id);
      this.points.points++;
      //this.moleCounter.howManyMoles--;
      // vad ska vara i ()?
      //clearTimeout();
    }
  }

  removeMole(id: number) {
    console.log('Nu körs removeMole');
    this.moleHoles[id].available = false;
  }
}
