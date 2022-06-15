import { prisma } from "./prisma";
import express from "express"

const app = express();

// POST : CADASTRAR
// GET : BUSCAR
// PUT : ATUALIZAR INFORMAÇÕES
// PATCH :  ATUALIZAR UMA INFORMAÇÃO ÚNICA
// DELETE 

app.use(express.json());


app.post("/feedbacks", (req, res) => {
  const {type, comment, screenshot} = req.body;

  
 
})

app.listen(3333, () => {
  console.log("HTTP SERVER RUNNING");
});