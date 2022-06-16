import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer 

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "b7e1c14fe8aba4",
        pass: "af865f08d71f97"
    }
});


export class NodemailerMailAdapter implements MailAdapter{
    async sendMail: (data: SendMailData){
        
    // ENVIO DE E-MAIL
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
    };
}