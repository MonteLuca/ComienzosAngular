/*
    ===== Código de TypeScript =====
*/

//A los argumentos se les declara el tipo de dato y fuera del parentesis se coloca lo que va a retornar 
function sumar (a : number,b : number): number {
    return (a + b);
}

const sumarFlecha = (a:number ,b: number) : number => {
    return a + b;
}

//Dentro de las funciones tambien se puede especificar si un parametro es opcional con el simbolo ?, tambien se puede definir el valor de un argumento por defecto asignandolo como al parametro de base, que dice que si no se manda un numero por defecto es un 2.

function multiplicar (numero : number, otroNumero?: number, base : number = 2): number {
    return numero * base;
}

//const resultado = multiplicar(5,0,10);

//console.log(resultado);

//Esto es un objeto
interface PersonajeSW {
    nombre:string;
    pv:number;
    mostrarPV: () => void; //Es una funcion dentro de un objeto 
}

//Para trabajar con objetos al parametro que espera la funcion se le indica que esta esperando al objeto
function curar(personaje : PersonajeSW, curarX: number):void {
    personaje.pv += curarX;
}

const nuevoPersonaje: PersonajeSW = {
    nombre: 'Strider',
    pv: 50,
    mostrarPV() {
        console.log('Puntos de vida ' + this.pv);
    }
};

curar(nuevoPersonaje, 20);

nuevoPersonaje.mostrarPV();