import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { genreCreationDTO } from '../models/genres.model';


@Component({
  selector: 'app-edit-genre',
  templateUrl: './edit-genre.component.html',
  styleUrls: ['./edit-genre.component.css'],
})
export class EditGenreComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private el: ElementRef
  ) {}

  model: genreCreationDTO = {name: 'Drama'};
  form: FormGroup;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params.id);
    });
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }
  saveChanges(genreCreationDTO: genreCreationDTO) {
    console.log(genreCreationDTO.name)
    // const invalidControl = this.el.nativeElement.querySelector('.ng-invalid');
    // if (invalidControl) {
    //   invalidControl.focus();
    // }
    // if (this.form.valid) {
    //   console.log(this.form);
    //   this.router.navigate(['/genres']);
    // }
  }
}
