import { Component } from '@angular/core';
//Para crear un componente de forma automatica se colocal en la terminal ng generate component y la URL
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman','IronMan','Hulk','BlackWidow']
  heroeEliminado: string = '';
  borrarHeroe() {
    this.heroeEliminado = this.heroes.shift() || ''; 
    //this.heroes.shift() remueve el primer elemento del array y lo retorna
  }
}