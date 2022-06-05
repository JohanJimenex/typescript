interface ISuperHero {
    nombre: string,
    edad: number,
    direccion: IDireccion,
    informacion: () => string

}

interface IDireccion {
    calle: string,
    ciudad: string,
    pais: string
}


const SuperHero1: ISuperHero = {
    nombre: "Spider Man",
    edad: 30,
    direccion: {
        calle: "14 st",
        ciudad: "NY",
        pais: "USA"
    },
    informacion: function () {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, Direccion: ${this.direccion.pais}`;
    }
}

console.log(SuperHero1.informacion);

