import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { actorCreateDTO } from '../actors.model';

@Component({
  selector: 'app-create-actor',
  templateUrl: './create-actor.component.html',
  styleUrls: ['./create-actor.component.css'],
})
export class CreateActorComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  saveChanges(actorCreateDTO: actorCreateDTO) {
    console.log(actorCreateDTO);
    this.router.navigate(['/actors']);
  }
}
