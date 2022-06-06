import { IProducto, calImpuestoDeVentaYTotal } from "./06-destructuracion_funcion";


const producto1: IProducto = {
    desc: "Telefono",
    precio: 1000
}

const producto2: IProducto = {
    desc: "Tableta",
    precio: 5000
}

const arrCarritoDeComprar: IProducto[] = [producto1, producto2];

const [imp, total] = calImpuestoDeVentaYTotal(arrCarritoDeComprar);

console.log(imp, total);

