




interface Pasajero {
    nombre: string;
    hijos?: string[] //no todos los pasajeros tienen hijos
}

const pasajero1: Pasajero = {
    nombre: "Fernando"
}

const pasajero2: Pasajero = {
    nombre: ' Melissa ',
    hijos: [' Natalia ', ' Gabriel ']
}


function imprimeHijos(pasajero: Pasajero): void {

    //Encadenamiento opcional o secured operator ?
    //con el signo interrogacion'?' si viene valor pues lee el tamaño, y con || sino le asigna 0;
    const cuantosHijos = pasajero.hijos?.length || 0;

    console.log(cuantosHijos);
}


imprimeHijos(pasajero1)