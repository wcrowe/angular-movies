import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { movielist } from 'src/app/utilities/generic-list/generic-list.component';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input()
  movies: movielist[] | undefined;

  remove(index: number) {
    if (this.movies) {
      this.movies.splice(index, 1);
    }
  }
}
