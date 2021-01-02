//problem to solve

app.get("/users", (req, res) => {
    //All code  
});

//Solution

const manejoResultado = (resultado) => {
    console.log('resultado', resultado)
}

app.get("/users", manejoResultado); 