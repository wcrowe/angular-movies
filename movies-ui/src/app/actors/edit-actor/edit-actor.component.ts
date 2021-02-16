import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreateDTO, actorDTO } from '../actors.model';

@Component({
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrls: ['./edit-actor.component.css'],
})
export class EditActorComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  model: actorDTO = {
    name: 'Richard Hollad',
    dateOfBirth: new Date(),
    picture: './assets/img/superhero.jpg',
    biography: 'This is great?',
  };

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      //alert(params.id);
    });
  }

  saveChanges(actorCreateDTO: actorCreateDTO) {
    console.log(actorCreateDTO);
  }
}
