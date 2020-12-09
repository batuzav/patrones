

// function miClase (){
    //    this.prop = 1 ;
    //    this.met = () => {
        
        //    }
        // }
        
        // const instancia = new miClase();
        // console.log('instancia', instancia);


class MiClase {
    constructor(p1, p2){
        this.propiedad = p1;
        this.propiedad2 = p2;
        this.metodo = () => {
            console.log('metodo');
        }
    }
}

const instancia = new MiClase(4, 6);
console.log('instancia', instancia);

// Constructor con Objeto. 
// class MiClase {
//     constructor({p1, p2}){
//         this.propiedad = p1;
//         this.propiedad2 = p2;
//         this.metodo = () => {
//             console.log('metodo');
//         }
//     }
// }

// const instancia = new MiClase({p2:4, p1:6});
// console.log('instancia', instancia);