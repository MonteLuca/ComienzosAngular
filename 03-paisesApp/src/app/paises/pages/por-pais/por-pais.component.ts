import { Component } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { Country } from '../../interfaces/paises.interfaces';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})

export class PorPaisComponent {

  termino : string = '';

  bandera : boolean = false;
  
  paises : Country[] = [];

  paisesSugeridos : Country[] = [];

  mostrarSugeridos: boolean = false;

  constructor ( private PaisesService : PaisesService ) {} //Realizamos la inyeccion de los servicios

  buscar( termino: string ) {

    this.bandera = false;
    
    this.termino = termino;

    this.mostrarSugeridos = false;

    this.PaisesService.buscarPais(termino) //Para que el observable se dispare tenemos que tener un subscribe por lo menos
      .subscribe( ( paises ) => {
        console.log( paises );
        this.paises = paises;
      }, (err) => { //Utilizo el segundo parametro de suscribe que nos permite manejar los errores
        this.bandera = true;
        this.paises = [];
      } );

  }

  sugerencias( termino : string ) {

    this.bandera = false;
    
    this.termino = termino;
    
    this.mostrarSugeridos = true;

    this.PaisesService.buscarPais(termino)
    .subscribe( paises =>
      this.paisesSugeridos = paises.splice(0,5),
      (err) => this.paisesSugeridos = []
    )

  }

  buscarSugerido( termino: string ) {

    this.buscar(termino);

  }

}