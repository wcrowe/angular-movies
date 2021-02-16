import { EventEmitter, Input } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { movieTheaterDTO } from 'src/app/movie-theaters/movie-theater.model';
import { firstLetterUppercase } from 'src/app/validators/firstLetterUppercase';

@Component({
  selector: 'app-movie-theater-form',
  templateUrl: './movie-theater-form.component.html',
  styleUrls: ['./movie-theater-form.component.css']
})
export class MovieTheaterFormComponent implements OnInit {
  constructor(private router: Router, private formBuilder: FormBuilder) {}

  @Input()
  model: movieTheaterDTO;

  form: FormGroup;

  @Output()
  onSaveChanges: EventEmitter<movieTheaterDTO> = new EventEmitter<movieTheaterDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [
        '',
        {
          validators: [
            Validators.required,
            Validators.minLength(3),
            firstLetterUppercase(),
          ],
        },
      ],
    });

    if (this.model !== undefined){
      this.form.patchValue(this.model);
    }
  }
  saveChanges() {
    this.onSaveChanges.emit(this.form.value);
  }

  getErrorMessageFieldName() {
    const field = this.form.get('name');

    if (field.hasError('required')) {
      return 'The name field is required.';
    }
    if (field.hasError('minlength')) {
      return 'The name field must be at least 3 characters.';
    }
    if (field.hasError('firstLetterUppercase')) {
      return field.getError('firstLetterUppercase').message;
    }

    return '';
  }
}
