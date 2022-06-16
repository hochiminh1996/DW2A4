import { FeedbackRepository } from "../repositories/feedbacks-repository";

interface SubmitFeedbackRequest{
    name: string;
    email: string;
    type: string;
    comment: string;
    datatual?: string;
    screenshot?: string;
}

export class SubmitFeedbackUseCases{
    private feedbacksRepository: 
    constructor(feedbacksRepository : FeedbackRepository){
        this.
    }

    async execute(request: SubmitFeedbackRequest){
        const {name, email, type, comment, datatual, screenshot} = request;
    }   
}