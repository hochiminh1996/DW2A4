import express from "express";
import { prisma } from "./prisma";// importa a possibilidade de inserção 
import nodemailer from "nodemailer";

export const routes = express.Router()

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "b7e1c14fe8aba4",
        pass: "af865f08d71f97"
    }
});


routes.post("/feedbacks", async (req, res) => {
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
    await transport.sendMail({
        from: 'Equipe Feedget : <ambrsp@hotmail.com>',
        to: 'Felippe <ambrsp@hotmail.com>',
        subject: 'Novo Feedback',
        html: [
            `<div style="padding: 5px; font-family: arial; font-size: 16px;">`,
            `<p>Nome: ${req.body.name}</p>`,
            `<p>Email: ${req.body.email}</p>`,
            `<p>Tipo do Feedback : ${req.body.type}</p>`,
            `<p>Comentário : ${req.body.comment}</p>`,

            `</div>`
        ].join('\n')

    })
    return res.send("SUCESSO")
})