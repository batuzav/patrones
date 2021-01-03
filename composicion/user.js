const users = [
    {edad: 17, nombre: "Pedro", apellido: "Batuza" },
    {edad: 15, nombre: "Rebeca", apellido: "Melgar" },
    {edad: 10, nombre: "Maria", apellido: "Felix" },
    {edad: 2, nombre: "Sonia", apellido: "Reyes" },
]

const traerPrimerInfate = data => {
    const infantes = data.filter(x => x.edad < 3);
    const primerinfante = infantes[0];
    const infante = {
        nombreCompleto: `${primerinfante.nombre} ${primerinfante.apellido}`,
        edad: primerinfante.edad,
    }
    return `${infante.nombreCompleto} tiene ${infante.edad} año(s)`
}


// por funciones 


const head = xs => xs[0]; 
const formateo = x => ({
    nombreCompleto: `${x.nombre} ${x.apellido}`,
    edad: x.edad, 
});
const formato = x => `${x.nombreCompleto} tiene ${x.edad} año(s)`

const traerPrimerInfateFunc = data => formato(formateo(head(data.filter(x => x.edad < 3))));
// compose
const filter = f => xs => xs.filter(f);
const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x)
const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x)
const trace = x =>  y => console.log(x, y); 

const traerPrimerInfanteCOmpose =  compose(
    formato,
    formateo,
    head,
    filter(x => x.edad < 3),
);
const traerPrimerInfantePipe =  compose(
    filter(x => x.edad < 3),
    trace("despues de filter"),
    head,
    formateo,
    formato,
);