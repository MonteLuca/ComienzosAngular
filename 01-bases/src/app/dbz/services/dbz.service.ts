import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interfaces";

@Injectable() //Dice que la clase DbzService va a ser inyectable
export class DbzService {

    private _personajesDBZ: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 7500
        }
    ];

    get personajes(): Personaje[] {
        return [...this._personajesDBZ]; // Tenemos que tener cuidado porque aunque sea un getter, JS manda todo por referencia, y esto es un inconveniente ya que puede ser manipulado, para evitar romper esa relacion, se coloca [] de arreglo y los tres puntos . . . que es el operador spread(separa cada uno de los elementos independientes y crea uno nuevo), esto rompe la referencia.
    }

    constructor() {}

    agregarPersonaje( argumento: Personaje ) {
        this._personajesDBZ.push(argumento)
    }

}