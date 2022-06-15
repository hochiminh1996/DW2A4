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

  const feedback = await prisma.feedback.create({
    data:{
      
    }
  })
  return res.status(201).json({data : feedback})

})

app.listen(3333, () => {
  console.log("HTTP SERVER RUNNING");
});