//especificamo los tipos en los paramatrros
function sumar(a: number, b: number): number {
    return a + b;
}

//especificamo los tipos en los paramatrros
const sumar2 = function (a: number, b: number): number {
    return a + b;
};

//especificamo los tipos en los paramatrros
const sumar3 = (a: number, b: number): number => {
    return a + b;
};

//otras formas de crear function
const sumar4 = (a: number, b: number): number => a + b;

const resultado = sumar(1220, 20);

console.log(resultado.toString());

//parametros con valor por defectos y opcionales con "?"
function multiplicar(num1: number, num2?: number, base: number = 10) {

    return num1 * base;
}

multiplicar(5, 2) // esto es igual a 50 ya que la funcion toma la base

interface Player2 {

    nombre: string,
    puntosVida: number,
    saltar: () => void

}

const jugador: Player2{
    nombre: number = 1,

}

function curar(personaje: Player2, curarX): void {

    personaje.puntosVida += 10

}