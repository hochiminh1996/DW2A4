export interface SendMailData{
    subject: string
}

export interface MilAdapter{
    sendMail: ()=>void;
}