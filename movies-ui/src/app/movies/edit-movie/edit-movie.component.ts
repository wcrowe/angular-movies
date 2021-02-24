import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieCreationDTO, movieDTO } from '../movies.model';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css'],
})
export class EditMovieComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  model: movieDTO = {
    title: 'Spider-Man',
    inTheaters: true,
    summary: 'whatever',
    releaseDate: new Date(),
    trailer: 'Too long ago',
    poster: '/assets/img/spiderman.jpg',
  };

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params.id);
    });
  }

  saveChanges(movieDTO: movieDTO) {
    console.log(movieDTO);
  }
}
