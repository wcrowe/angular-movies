import {
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { RatingComponent } from '../utilites/rating/rating.component';

@Component({
  selector: 'app-lifecycletest',
  templateUrl: './lifecycletest.component.html',
  styleUrls: ['./lifecycletest.component.css'],
})
export class LifecycletestComponent
  implements OnInit, OnChanges, OnDestroy, DoCheck, AfterViewInit {
  @Input()
  title: string;

  @ViewChild(RatingComponent)
  rating: RatingComponent;

  private _timer: ReturnType<typeof setInterval>;
  public get timer(): ReturnType<typeof setInterval> {
    return this._timer;
  }
  public set timer(value: ReturnType<typeof setInterval>) {
    this._timer = value;
  }
  // Not life cycle envet

  // Not life cycle envet
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('On Change');
    console.log(changes);
  }
  ngOnDestroy(): void {
    clearInterval(this.timer);
    console.log('On Destroy');
  }
  ngDoCheck(): void {
    console.log('On Do Check');
  }
  ngAfterViewInit(): void {
    console.log('On View Init');
    console.log(this.rating);
  }
  ngOnInit(): void {
    console.log('On Init');
    console.log(this.rating);
    this.timer = setInterval(() => console.log(new Date(), 1000));
  }
}
