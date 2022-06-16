import { FeedbackCreateDate, FeedbackRepository } from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbackRepository{
    create(date: FeedbackCreateDate) {
        await prisma.feedback.create({
            data: {
                name: req.body.name,
                email: req.body.email,
                type: req.body.type,
                comment: req.body.comment,
                datatual: req.body.datatual,
                screenshot: req.body.screenshot
            }
        })        
    }
}
