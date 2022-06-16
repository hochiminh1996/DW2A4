import { MailAdapter } from "../adapters/mail-adapter";
import { FeedbackRepository } from "../repositories/feedbacks-repository";

interface SubmitFeedbackRequest {
    name: string;
    email: string;
    type: string;
    comment: string;
    datatual?: string;
    screenshot?: string;
}

export class SubmitFeedbackUseCases {
    constructor(private feedbacksRepository: FeedbackRepository,
        private mailAdapter: MailAdapter,
    ) {
        this.feedbacksRepository = feedbacksRepository;
    }

    async execute(request: SubmitFeedbackRequest) {
        const { name, email, type, comment, datatual, screenshot } = request;

        await this.feedbacksRepository.create({
            name, email, type, comment, datatual, screenshot
        })

        await this.mailAdapter.sendMail({
            subject: "Novo Feedback",
            body: [
                `<div style="padding: 5px; font-family: arial; font-size: 16px;">`,
                `<p>Nome: ${req.body.name}</p>`,
                `<p>Email: ${req.body.email}</p>`,
                `<p>Tipo do Feedback : ${req.body.type}</p>`,
                `<p>Comentário : ${req.body.comment}</p>`,

                `</div>`
            ]
        })
    }
}