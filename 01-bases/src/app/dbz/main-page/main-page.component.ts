import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from './../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  // get personajesDBZ():Personaje[] {
  //   return this.dbzService.personajesDBZ
  // }

  //Esto es una inyeccion de dependencias
  constructor() {
    
  }
}