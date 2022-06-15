import { prisma } from "./prisma";
import express from "express"

const app = express();
app.use(express.json());

// POST : CADASTRAR
// GET : BUSCAR
// PUT : ATUALIZAR INFORMAÇÕES
// PATCH :  ATUALIZAR UMA INFORMAÇÃO ÚNICA
// DELETE 



app.post("/feedbacks",async (req, res) => {
  console.log(req.body)
  const await prisma.feedback.create({
    data:{
      name:req.body.name,
      email:req.body.email,
      type:req.body.type,
      comment:req.body.comment,
      datatual:req.body.datatual,
      screenshot:req.body.screenshot
  
    }
  })
  return res.send("Olá, mundo")

})

app.listen(3333, () => {
  console.log("HTTP SERVER RUNNING");
});