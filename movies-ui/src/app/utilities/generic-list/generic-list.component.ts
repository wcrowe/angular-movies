import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-list',
  templateUrl: './generic-list.component.html',
  styleUrls: ['./generic-list.component.css'],
})
export class GenericListComponent implements OnInit {
  constructor() {}

  @Input()
  list: movielist[];

  ngOnInit(): void {}
}

export interface movielist {
  title: string;
  releaseDate: Date;
  price: number;
  poster : string
}
