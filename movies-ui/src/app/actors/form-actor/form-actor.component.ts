import { Component, Input, Output } from '@angular/core';
import { EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { actorCreateDTO } from '../actors.model';

@Component({
  selector: 'app-form-actor',
  templateUrl: './form-actor.component.html',
  styleUrls: ['./form-actor.component.css'],
})
export class FormActorComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  @Input()
  model: actorCreateDTO;


  @Output()
  onSaveChanges = new EventEmitter<actorCreateDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [
        '',
        {
          validators: [Validators.required],
        },
      ],
      dateOfBirth: '',
      picture: '',
      biography: '',

    });
    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }

  onImageSelected(image) {
    if (image) {
      this.form.get('picture').setValue(image);
    }
  }

  changeMarkdown(content){
    this.form.get('biography').setValue(content);
  }

  saveChanges() {
    this.onSaveChanges.emit(this.form.value);
  }
}
