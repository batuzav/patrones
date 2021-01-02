class MiClase {
    constructor(p1, p2){
        this.propiedad = p1;
        this.propiedad2 = p2;
    }

    metodo() {
        console.log('metodo');
    }
}

const instancia = new MiClase(4, 6);
console.log('instancia', instancia.__proto__);

// objeto prototipo

const perro = {
    raza = "pastro alemám",
    ladrar = function () {
        console.log(`guau!, soy ${this.raza}`);
    },
}

const killtro = Object.create(perro);

killtro.ladrar();
