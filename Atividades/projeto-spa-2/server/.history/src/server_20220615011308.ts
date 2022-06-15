import express from "express"

const app = express();

// POST : CADASTRAR
// GET : BUSCAR
// PUT : ATUALIZAR INFORMAÇÕES
// PATCH :  ATUALIZAR UMA INFORMAÇÃO ÚNICA
// DELETE 

app.post("/users", (req, res) => {
    return res.send("Olá, mundo")

})

app.listen(3333, () =>{
    console.log("HTTP SERVER RUNNING");
});