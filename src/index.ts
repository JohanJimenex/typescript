



function sumar(a: number, b: number): number { //especificamo los tipos en los paramatrros
    return a + b;
}


const sumar2 = function (a: number, b: number): number { //especificamo los tipos en los paramatrros
    return a + b;
}


const sumar3 = (a: number, b: number): number => { //especificamo los tipos en los paramatrros
    return a + b;
}

const sumar4 = (a: number, b: number): number => a + b; //otras formas de crear function


const resultado = sumar(10, 20);

console.log(resultado.toString()); 
