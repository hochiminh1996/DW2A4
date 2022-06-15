import { prisma } from "./prisma";
import express from "express"

const app = express();
app.use(express.json());

// POST : CADASTRAR
// GET : BUSCAR
// PUT : ATUALIZAR INFORMAÇÕES
// PATCH :  ATUALIZAR UMA INFORMAÇÃO ÚNICA
// DELETE 



app.post("/feedbacks", async (req, res) => {
  prisma.feedback.create({
    data:{
      name: req.body.name,
      email: req.body.email,
      type: req.body.type,
      
    }
  })
  return req.body;
})

app.listen(3333, () => {
  console.log("HTTP SERVER RUNNING");
});