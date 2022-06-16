
interface SubmitFeedbackRequest{
    name: string;
    email: string;
    type: string;
    comment: string;
    datatual?: string;
    screenshot?: string;
}

export class SubmitFeedbackUseCases{
    constructor(){
        feedbacksRepository: Feedback
    }

    async execute(request: SubmitFeedbackRequest){
        const {name, email, type, comment, datatual, screenshot} = request;
    }   
}