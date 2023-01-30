import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})

export class AgregarComponent {

  @Input('nuevoInput')
  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  // @Output() //Funciona para emitir eventos hacia al padre
  // onNuevoPersonaje: EventEmitter <Personaje> = new EventEmitter();

  constructor(private DbzService: DbzService) {

  }

  agregar() {
    //event?.preventDefault(); //Esto se hace para que el navegador no haga un refresh 
    if (this.nuevo.nombre.trim().length === 0){
      return;
    };
    
    this.DbzService.agregarPersonaje(this.nuevo);
    // this.onNuevoPersonaje.emit(this.nuevo)
    this.nuevo = {
      nombre: '',
      poder: 0
    };
  }
}