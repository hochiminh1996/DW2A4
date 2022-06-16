export interface SendMailData{
    subject: string;
    body: string;
}

export interface MilAdapter{
    sendMail: ()=>void;
}