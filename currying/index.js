const suma = (a, b) => a + b;

suma(1, 5); 

//example of currying 

const curryingSuma = a => b => a + b; 
curryingSuma(1)(5);

// another example 
const curryingSuma1 = suma(1);
suma(5); 