import express from "express";
import { prisma } from "./prisma";// importa a possibilidade de inserção 
import nodemailer from "nodemailer";
import { SubmitFeedbackUseCases } from "./use-cases/submit-feedback-use-case";
import { PrismaFeedbacksRepository } from "./repositories/prisma/prisma-feedbacks-repository";

export const routes = express.Router()



routes.post("/feedbacks", async (req, res) => {
    const {name, email, type, comment, datatual, screenshot} = req.body;

    const prismaFeedbacksRepository = new PrismaFeedbacksRepository();

    const submitFeedbackUseCase = new SubmitFeedbackUseCases(prismaFeedbacksRepository);

    //--------------------
    await submitFeedbackUseCase.execute({
        name, email, type, comment, datatual, screenshot
    })

    return res.send("SUCESSO")


    // ENVIO DE E-MAIL
    // await transport.sendMail({
    //     from: 'Equipe Feedget : <ambrsp@hotmail.com>',
    //     to: 'Felippe <ambrsp@hotmail.com>',
    //     subject: 'Novo Feedback',
    //     html: [
    //         `<div style="padding: 5px; font-family: arial; font-size: 16px;">`,
    //         `<p>Nome: ${req.body.name}</p>`,
    //         `<p>Email: ${req.body.email}</p>`,
    //         `<p>Tipo do Feedback : ${req.body.type}</p>`,
    //         `<p>Comentário : ${req.body.comment}</p>`,

    //         `</div>`
    //     ].join('\n')

    // })
})