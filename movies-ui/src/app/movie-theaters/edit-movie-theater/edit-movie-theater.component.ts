import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { movieTheaterDTO } from '../movie-theater.model';

@Component({
  selector: 'app-edit-movie-theater',
  templateUrl: './edit-movie-theater.component.html',
  styleUrls: ['./edit-movie-theater.component.css']
})
export class EditMovieTheaterComponent  implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder  ) {}

  model: movieTheaterDTO = {name: 'AMC Theaters'};
  form: FormGroup;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params.id);
    });
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }
  saveChanges(movieTheaterDTO: movieTheaterDTO) {
    console.log(movieTheaterDTO)
  }
}

