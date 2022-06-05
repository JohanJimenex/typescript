

interface IReproductor {
    volumen: number,
    reproduciendo: boolean,
    reproducir: (cancion: ICancion) => void,
    detener: () => void,
    pausar: () => void,
}

interface ICancion {
    nombreCancion: string,
    duracion: number,
    artista: string,
    fechaLanzamiento: number
    imgCover: string,
    valoracion: number
}

const reproductor: IReproductor = {

    volumen: 50,
    reproduciendo: false,

    reproducir: function (cancion: ICancion) {
        console.log(`Reproduciendo cancion: ${cancion.nombreCancion}, Artista: ${cancion.artista} `);
        this.reproduciendo = true;
    },

    detener: function () {
        console.log("Detener cancion");
        this.reproduciendo = false;
    },

    pausar: function () {
        console.log("Pausar cancion");
        this.reproduciendo = false;
    },
}

const objCancion: ICancion = {
    nombreCancion: "klk",
    duracion: 3,
    artista: "Johan",
    fechaLanzamiento: 20220101,
    imgCover: "/img/cover1.jpg",
    valoracion: 0
}

reproductor.reproducir(objCancion);

//Desestructuracion de objetos: EcmaScript 2020
const { volumen, reproduciendo } = reproductor;
const { artista, nombreCancion, duracion: nuevoDuracion } = objCancion; //cambiar nombre con dos puntos":"

// para desestructurar un valor que está dentro de otro objeto anidado y ademas cambiarle el nombre (opcional)
// const { x: { z:nuevoNombre } } = objetoX;


