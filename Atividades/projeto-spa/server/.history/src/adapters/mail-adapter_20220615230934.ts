export interface SendMailData{
    subject: string;
    body
}

export interface MilAdapter{
    sendMail: ()=>void;
}