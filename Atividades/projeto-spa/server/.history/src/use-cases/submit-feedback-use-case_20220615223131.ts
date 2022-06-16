interface SubmitFeedbackRequest{
    name: string;
    email: string;
    type: string;
    comment: string;
    datatual?: string;
    screenshot?: string;
}

export class SubmitFeedbackUseCases{
    async execute(date: FeedbackCreateDate){

    }
}