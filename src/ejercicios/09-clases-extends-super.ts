class EnemigoBase {

    constructor(
        public nombre: string,
        public puntosVida: number
    ) { }
}

class Murcielago extends EnemigoBase {

    constructor(public nombre: string, puntosVida: number, public volando: boolean) {

        super(nombre, puntosVida);
    }

}

const murcielago1 = new Murcielago("Murcielago 1", 5, true);

console.log(murcielago1.nombre);
