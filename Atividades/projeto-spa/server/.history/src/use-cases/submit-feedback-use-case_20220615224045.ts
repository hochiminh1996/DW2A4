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
    constructor(private feedbacksRepository: FeedbackRepository) {
        this.feedbacksRepository = feedbacksRepository;
    }

    async execute(request: SubmitFeedbackRequest) {
        const { name, email, type, comment, datatual, screenshot } = request;
    }
}