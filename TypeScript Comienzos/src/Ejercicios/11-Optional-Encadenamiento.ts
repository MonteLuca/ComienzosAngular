/*
===== Código de TypeScript =====
*/

interface Pasajero {
  nombre: string;
  hijos?: string[];
  //El signo de pregunta dice que un pasajero puede o no tener hijos
}

const pasajero1: Pasajero = {
  nombre: 'Fernando'
}

const pasajero2: Pasajero = {
  nombre: 'Melissa',
  hijos: ['Natalia','Gabriel']
}

function imprimirHijos (pasajero: Pasajero): void {

  const cuantosHijos = pasajero.hijos?.length || 0;
  //Si el pasajero tiene hijos, avanza hacia el .lenght, sino es undefined
  console.log( cuantosHijos );

}

imprimirHijos(pasajero1);