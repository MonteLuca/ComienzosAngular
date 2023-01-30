/*
    ===== Código de TypeScript =====
*/

/*
    ===== Desestructuracion de objetos =====
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles : {
        autor: 'Ed Sheran',
        anio: 2015
    }
}

/*Existen varias formas de desestructur el objeto
1:
const { volumen,segundo, cancion, detalles:{autor,anio} } = reproductor;
2:
const { volumen,segundo, cancion } = reproductor;
const { autor, anio } = detalles 
*/
//Forma de mostrarlo sin desestructurar el objeto
/*
console.log('El volumen actual es: ', reproductor.volumen)
console.log('El segundo actual es: ', reproductor.segundo)
console.log('La cancion actual es: ', reproductor.cancion)
console.log('El autor es: ', reproductor.detalles.autor)
*/

const { volumen,segundo, cancion, detalles } = reproductor;
const { autor, anio } = detalles 

//Forma de mostrarlo desestructurando el objeto 
// console.log('El volumen actual es: ', volumen)
// console.log('El segundo actual es: ', segundo)
// console.log('La cancion actual es: ', cancion)
// console.log('El autor es: ', autor)

/*
    ===== Desestructuracion de arreglos =====
*/

const dbz: string[] = ['Goku','Vegeta','Trunks'];

//Es igual que el de objetos solo que con llaves, como queda abajo toma los 3 elementos del arreglo, pero si solo quiero uno en particular se deja el espacio en blanco y se deja un coma por ejemplo asi
//const [ , ,p3] = dbz;

const [p1,p2,p3] = dbz;

console.log('Personaje 1: ', p1)
console.log('Personaje 2: ', p2)
console.log('Personaje 3: ', p3)