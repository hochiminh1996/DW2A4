import { MailAdapter, SendMailData } from "../mail-adapter";



export class NodemailerMailAdapter implements MailAdapter {
    sendMail: (data: SendMailData) => void;
}
