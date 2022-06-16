import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "b7e1c14fe8aba4",
        pass: "af865f08d71f97"
    }
});


export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData): Promise<void> {
        await transport.sendMail({
            from: "Equipe Feedget <oi@feedget.com>",
            to: "Felippe Marques <ambrsp@hotmail.com>",
            subject: "Novo Feedback",
            html: [
                `<div style="padding: 5px; font-family: arial; font-size: 16px;">`,
                `<p>Nome: ${name}</p>`,
                `<p>Email: ${email}</p>`,
                `<p>Tipo do Feedback : ${type}</p>`,
                `<p>Comentário : ${comment}</p>`,
                `</div>`
            ].join("\n");
        });
    }
}