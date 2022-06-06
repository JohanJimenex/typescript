//Destructuracion de Argumentos en funciones



export interface IProducto {
    desc: string,
    precio: number
}

const telefono: IProducto = {
    desc: "Nokia 1991",
    precio: 5000
}

const tablet: IProducto = {
    desc: "samsung 2020",
    precio: 10000
}


const porcentajeImpuesto: number = 0.15;

function calImpuestoDeVenta(producto: IProducto[]): number {

    let total: number = 0;

    //forma normal
    /*producto.forEach((producto, index) => {
        total += producto.precio;
    })    */

    producto.forEach(({ precio }, index) => { //se puede destructurar paramestros/argmentso tambien
        total += precio;
    });

    return total * porcentajeImpuesto;

}

let arrProducto: IProducto[] = [telefono, tablet];

let impAPagarXTotalProductos: number = calImpuestoDeVenta(arrProducto);

// console.log("Impuesto sobre venta:", impAPagarXTotalProductos);



//podemos rerotrnar tambien un arrgelo
// function calImpuestoDeVentaYTotal(producto: IProducto[]): [number,number] { //otra forma
export function calImpuestoDeVentaYTotal(producto: IProducto[]): number[] {

    let total: number = 0;

    producto.forEach(({ precio }, index) => { //se puede destructurar paramestros/argmentso tambien
        total += precio;
    });

    const impAPagar = total * porcentajeImpuesto;
    return [total, impAPagar];

}

const [imp, total] = calImpuestoDeVentaYTotal(arrProducto)
console.log(imp, total);

