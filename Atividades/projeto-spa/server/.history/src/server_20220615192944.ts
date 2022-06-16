import { prisma } from "./prisma";// importa a possibilidade de inserção 
import express from "express";
import nodemailer from "nodemailer"

const app = express();
app.use(express.json());//verificar se no corpo há JSON

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "b7e1c14fe8aba4",
        pass: "af865f08d71f97"
    }
});

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
    transport.sendMail({
        from : 'Equipe Feedget : <ambrsp@hotmail.com>',
        to : 'Felippe <ambrsp@hotmail.com>',
        subject : 'Novo Feedback',
        html:[
            `<div>`
                `<p>`

            `</div>`
        ]

    })
    return res.send("SUCESSO")

})
app.listen(3333, () => {
    console.log("HTTP SERVER RUNNING");
});