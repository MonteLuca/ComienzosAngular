/*
===== Código de TypeScript =====
*/
//El generico toma el tipo de dato en base al argumento que recibe
function queTipoSoy<T>(argumento: T){
    return argumento;
}

let soyString = queTipoSoy('Hola mundo');
let soyNumber = queTipoSoy(100);
let soyBoolean = queTipoSoy(true);
let soyArreglo = queTipoSoy([1,2,3,4,5,6,7,8,9,10])

let soyExplicito = queTipoSoy<number>(500);