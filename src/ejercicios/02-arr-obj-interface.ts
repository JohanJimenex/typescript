//Practica Fernando Heerrera curso udemy

//===== Código de TypeScript =====

let arrHabilidades = []; //acepta cualqueit tipo
let arrHabilidades3: (number | string | boolean)[] = []; //especifica los tipos de datos que acepta
let arrHabilidades2: string[] = []; //Restringir el tipo de dato a uno solo


//Es como una clase que se usa para oblicar a otras clases a ue implementen las propeidades,
//pero no para crear objetos de él
//En TypeScript se usa para controlar las propiedades y tipos de los objetos
interface Player {
    nombre: string,
    edad: number,
    estado: boolean,
    habilidades: string[],
    funcSaltar?: ()=> void,
    ciudad?: string // ? es una propeidad opcional
}

const objPlayer: Player = { //any, nos pemirite agregar propiedades mas adelante
    // const objPlayer: Player = { //interface Player, solo nos permite agregar mas propeidades mas adelante si existe en la interface 
    nombre: "johan",
    edad: 30,
    estado: true,
    habilidades: ["Correr", "Saltar", "Atacar"]
}

objPlayer.ciudad = "Santo Domingo";

console.table(objPlayer);



