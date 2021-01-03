// class Macbook {
//     constructor() {
//         this.precio = 1000,
//         this.pantalla = 11.6
//     }
// }

// const macbook = new Macbook();

// macbook.agregarMemoria = function() {
//     this.precio += 100;
// }

// macbook.agregarMemoria();

// console.log(macbook.precio) 



class Macbook {
    precio(){
        return 1000
    }
}

const memoria = mac => {
    const y = mac.precio();
    mac.precio = function () {
        return y + 100
    }
}

const macbook = new Macbook();
memoria(macbook);
console.log(macbook.precio()); 