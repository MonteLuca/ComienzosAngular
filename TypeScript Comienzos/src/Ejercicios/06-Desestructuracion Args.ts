/*
    ===== Código de TypeScript =====
*/

//export nos permite que otras clases accedan a esta interfaz
export interface Producto {
    desc: string;
    precio: number;
}

const telefono : Producto = {
    desc: 'Nokia A1',
    precio: 150
}

const tableta : Producto = {
    desc: 'iPad Air',
    precio: 350
}

export function calcularISV( productos: Producto[]): [number,number] {

    let total = 0;
    //No hace falta poner producto, ya que se sabe que el precio biene de los productos
    productos.forEach(({ precio }) => {
        total += precio;
    })

    return [total, total * 0.15];

}

// const articulos = [telefono, tableta];

// const [total,isv] = calcularISV(articulos);

// console.log('ISV: ', isv);
// console.log('TOTAL: ', total);