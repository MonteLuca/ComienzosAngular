import { Component } from '@angular/core';
import { Country } from '../../interfaces/paises.interfaces';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})

export class PorCapitalComponent {

  termino : string = '';

  bandera : boolean = false;

  paises : Country[] = [];

  constructor ( private paisesService: PaisesService ) {} //Realizamos la inyeccion de los servicios

  buscar( termino: string ) {

    this.bandera = false;

    this.termino = termino

    this.paisesService.buscarCapital(termino) //Para que el observable se dispare tenemos que tener un subscribe por lo menos
      .subscribe( ( paises ) => {
        this.paises = paises;
      }, (err) => { //Utilizo el segundo parametro de suscribe que nos permite manejar los errores
        this.bandera = true;
        this.paises = [];
      } );

  }

  sugerencias( termino : string) {
    this.bandera = false;
  }


}
