// const resultado =(() => {
//     const x = {}
//     return {
//         a: () => console.log('x: ', x),
//         b: (key, val) => x[key] = val
//     }
// })(); 


const user = (()=>{
    const recurso = "/user";
    return {
        listar: async  () => {
            return await fetch(recurso).then(x => x.json()); 
        },
        crear: async () => {
            return await fetch(recurso, { type: "POST", body: JSON,stringify(data) }).then(x => x.json());
        }
    }

})();