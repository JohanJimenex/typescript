//Genericos

// <T> la 'T' se es una convencion por decir "tipo", se usa para que la funcion pueda retornar el tipo de dato
//si no se especifica esto entonces el tipo de ndato que retorne será "any", (en javascript si funcionaria sin <T> )
function queTipoSoy<T>(parametro: T) {
    return parametro;
}


let soyString = queTipoSoy("Hola");
let soyNumero = queTipoSoy(100);
let soyArregloNumero = queTipoSoy([1, 2, 3]);

let soyExplicito = queTipoSoy<number>(10)



