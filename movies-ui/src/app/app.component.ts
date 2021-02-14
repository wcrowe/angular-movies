import { Component, OnInit } from '@angular/core';
import { movielist } from './utilites/generic-list/generic-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.moviesInTheator = [
      {
        title: 'Spider Man',
        releaseDate: new Date(),
        price: 14.99,
      },
      {
        title: 'Bat Man',
        releaseDate: new Date('2018-01-01'),
        price: 13.99,
      },
      {
        title: 'Spider Man',
        releaseDate: new Date(),
        price: 14.99,
      },
      {
        title: 'Bat Man',
        releaseDate: new Date('2018-01-01'),
        price: 13.99,
      },
    ];
    this.moviesFutureRelease = [
      {
        title: 'Iron Man',
        releaseDate: new Date('2019-02-02'),
        price: 14.99,
      },
      {
        title: 'Crazy Man',
        releaseDate: new Date('2021-01-20'),
        price: 0.99,
      },
    ];
  }

  moviesInTheator : movielist[];
  moviesFutureRelease : movielist[];
  title = 'movies app';
  display = true;

  handleRating(rate: number) {
    alert(`The user selected ${rate}`);
  }
}
