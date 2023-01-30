import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})

export class PersonajesComponent {
  //Le decimos a Angular, estos personajes vienen desde el componente padre 
  // @Input('personajesInput') //Entre los parentesis del Input puedo poner como quiero que se reconozca
  // personajes: Personaje[] = [];

  get personajes() {
    return this.DbzService.personajes;
  }

  constructor(private DbzService: DbzService) {
    
  }
}