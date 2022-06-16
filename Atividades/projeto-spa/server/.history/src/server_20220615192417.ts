import { prisma } from "./prisma";// importa a possibilidade de inserção 
import express from "express";
import nodemailer from "nodemailer"

const app = express();
app.use(express.json());//verificar se no corpo há JSON

app.post("/feedbacks", async (req, res) => {
    console.log(req.body)
    await prisma.feedback.create({
        data: {
            name: req.body.name,
            email: req.body.email,
            type: req.body.type,
            comment: req.body.comment,
            datatual: req.body.datatual,
            screenshot: req.body.screenshot
        }
    })
    return res.send("SUCESSO")

})
app.listen(3333, () => {
    console.log("HTTP SERVER RUNNING");
});