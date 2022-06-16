
interface FeedbackCreateDate {
    name: string;
    email: string;
    type: string;
    comment: string;
    screenshot?: string;
    datatual?: string;
}


export interface FeedbackRepository {
    create: (date : FeedbackCreateDate) => void;
}