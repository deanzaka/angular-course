import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output('count') countOut = new EventEmitter<number>();
  count = 1;
  interval;


  // countEachSec() {
  //   console.log(this.count++);
  // }

  constructor() { }

  ngOnInit() {
  }

  onBtnStart() {

    // this.interval = setInterval(this.countEachSec(), 1000);
    // this was my attempt, it doesn't work, it won't reiterate somehoew
    // keep it here for future refferences

    this.interval = setInterval(() => {
      this.countOut.emit(this.count++);
    }, 1000);
  }

  onBtnStop() {
    clearInterval(this.interval);
  }

}
