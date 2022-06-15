import express from "express"

const app = express();

// POST : CADASTRAR
// GET : BUSCAR
// PUT : ATUALIZAR INFORMAÇÕES
// PATCH :  ATUALIZAR UMA INFORMAÇÃO ÚNICA
// DELETE 

app.use(express.use)
app.post("/feedbacks", (req, res) => {
   console.log(req.body);
})

app.listen(3333, () =>{
    console.log("HTTP SERVER RUNNING");
});