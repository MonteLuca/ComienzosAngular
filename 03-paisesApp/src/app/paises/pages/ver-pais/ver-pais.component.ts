import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';

import { PaisesService } from '../../services/paises.service';
import { Country } from '../../interfaces/paises.interfaces';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})

export class VerPaisComponent implements OnInit {
  
  pais!: Country[];

  constructor( private activatedRoute: ActivatedRoute, private paisesServices: PaisesService ) {} //Nos permite hacer suscribe a todos los URL

  ngOnInit(): void {
    
    // this.activatedRoute.params.subscribe( ({id}) => {
    //   this.paisesServices.getPaisPorCodigo(id).subscribe(pais => {
    //     console.log(pais
    //       );      
    //   })
    // } )

    this.activatedRoute.params //params toma como argumento los parametros que definimos en las rutas 
    .pipe( //.pipe especifico cualquier cantidad de operadores que van a trabajar con el producto del Observable
      switchMap( ({id}) => this.paisesServices.getPaisPorCodigo( id ) ), //switchMas nos permite recibir un Observable y regresar otro
      tap( console.log ) //tap imprime en consola lo que responda el Observable
    )
    .subscribe ( pais => this.pais = pais)
  }

}