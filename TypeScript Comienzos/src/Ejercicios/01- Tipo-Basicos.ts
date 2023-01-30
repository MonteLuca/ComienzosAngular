/*
    ===== Código de TypeScript =====
*/

//Para asignar el tipo de dato a una variable se debe poner al lado del nombre el tipo de dato que es ya sea string, number o boolean (number aplica tanto para int como float)

let nombre: string = 'Straider';

//Podemos asigar 2 tipos de datos en una misma variable, podemos decirle que sea number o ( | ) string 

let hp: number | string = 95;

let estaVivo: boolean = true;

//El valor de hp lo vamos a cambiar a String y no deberia afectar ya que le dijimos que acepte number | string

hp = 'FULL';


console.log(nombre, hp);