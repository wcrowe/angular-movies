import { Component, OnInit } from '@angular/core';
import { movielist } from '../utilities/generic-list/generic-list.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.moviesInTheator = [
      {
        title: 'Spider Man',
        releaseDate: new Date(),
        price: 14.99,
        poster: './assets/img/spiderman.jpg',
      },
      {
        title: 'Bat Man',
        releaseDate: new Date('2018-01-01'),
        price: 13.99,
        poster: './assets/img/superhero.jpg',
      },
    ];
    this.moviesFutureRelease = [];
  }

  moviesInTheator: movielist[];
  moviesFutureRelease: movielist[];
}
