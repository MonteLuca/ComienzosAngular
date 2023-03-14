import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})

export class NoComunesComponent {

  flag: boolean = false;

  //i18nSelect
  nombre: string = 'Roberto';
  genero: string = 'masculino';

  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //118nPlural
  clientes: string[] = ['Maria','Pedro','Hernando','Ruben', 'Ricardo'];
  clientesMap = {
    '=0' : 'no tenemos ningun cliente esperando',
    '=1' : 'tenemos un cliente esperando',
    '=2' : 'tenemos 2 clientes esperando',
    'other' : 'tenemos # clientes esperando',
  }

  cambiarPersona() {
    if (!this.flag) {

      this.nombre = 'Jimena'
      this.genero = 'femenino'
      this.flag = true;

    } else {

      this.nombre = 'Roberto'
      this.genero = 'masculino'
      this.flag = false

    }
  }

  eliminarCliente() {
    this.clientes.splice(1,1)
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Luca',
    edad: 35,
    direccion: 'Ottawa, Canada',
  }

  //Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: 'true'
    },
    {
      nombre: 'Superman',
      vuela: 'true'
    },
    {
      nombre: 'Superman',
      vuela: 'true'
    }
  ]

  //Async Pipe
  miObservable = interval(1000); //0,1,2,3,4,5,6 ...

  valorPromesa = new Promise((resolve , reject) => {

    setTimeout(() => {
      resolve('Tenemos data sobre la promesa')
    }, 3500);
    
  })
}