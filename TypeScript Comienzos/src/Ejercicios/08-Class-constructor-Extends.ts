/*
===== Código de TypeScript =====
*/

class PersonaNormal {
    constructor(
        public nombre: string,
        public direccion: string   
    ) {}
}

//La diferencia entre Interface y class es que las interface no existen en JavaScript a difrrencia de las class
//Las class me sirven para crear instancias, las interface no
class Heroe extends PersonaNormal {
    // //Private significa que solo va a ser visible en esta clase
    // alterEgo: string;
    // //Public significa que alguien fuera de la clase va a poder acceder a esta propiedad
    // edad: number;
    // //SIgnifica que voy a poder acceder al valor de esta propiedad sin crear una instancia de la clase
    // nombreReal: number;
    
    //Podemos hacer lo mismo pero dentro de los argumentos del constructor
    constructor (
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
    ) {
        super(nombreReal,'New York, USA');
    }
}
//La clase PersonaNormal extiende sobre Heroe, brindando asi sus argumentos
const ironMan = new Heroe('IronMan',45,'Tony Stark');

console.log(ironMan);