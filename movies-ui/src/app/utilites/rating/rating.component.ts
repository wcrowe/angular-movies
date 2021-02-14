import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnInit {
  constructor() {}

  @Input()
  maxRating = 5;
  @Input()
  previousRate = 0;
  selectedRate = 0;
  maxRatingArr = [];

  @Output()
  onRating: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
    this.maxRatingArr = Array(this.maxRating).fill(0);
  }

  handleMouseEnter(index: number) {
    this.selectedRate = index + 1;
  }

  handleMouseLeave() {
    if (this.previousRate !== 0) {
      this.selectedRate = this.previousRate;
    } else {
      this.selectedRate = 0;
    }
  }

  rate(index: number) {
    this.selectedRate = index + 1;
    this.previousRate = this.selectedRate;
    this.onRating.emit(this.selectedRate);
    // use empty emit and non typed emitter EventEmitter<>
    // to fire and event like warning wihtou sending data
  }
}
