import { Component, OnInit, Input } from '@angular/core';
//import { timer } from 'rxjs';

@Component({
  selector: 'app-heads-up-display',
  template: `
    {{ timer }}

    <button
      type="button"
      class="btn btn-primary btn-lg"
      (click)="onBtnClick()"
      [disabled]="disableButton"
    >
      Play
    </button>
  `,
  styles: [``],
})
//007 youtube nedan
//export class HeadsUpDisplayComponent implements OnInit {
export class HeadsUpDisplayComponent {
  //export class HeadsUpDisplayComponent {
  // ngOnInit(): void {
  //   this.startTimer();
  // }

  @Input() init: number = 10;
  public timer: number = 10;
  public disableButton: boolean = false;

  constructor() {}
  //Method to initilize the timer
  resetTimer() {
    if (this.init && this.init > 0) {
      this.timer = this.init;
    }
  }
  //Method that handles the countdown
  runCountdown() {
    setTimeout(() => {
      this.timer = this.timer - 1;
      this.counter();
    }, 1000);
  }

  //Method that checks if the timer has finished
  counter() {
    if (this.timer === 0) {
      this.disableButton = false;
      this.resetTimer();
    } else {
      this.runCountdown();
      this.disableButton = true;
    }
  }

  onBtnClick() {
    this.counter();
  }
}
