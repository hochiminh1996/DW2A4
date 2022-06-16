import { prisma } from "../../prisma";
import { FeedbackCreateDate, FeedbackRepository } from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbackRepository {
    create({name, email, type, comment, datatual, screenshot}: FeedbackCreateDate) {
        await prisma.feedback.create({
            data: {
                name,
                email,
                type,
                comment,
                datatual: req.body.datatual,
                screenshot: req.body.screenshot
            }
        })
    }
}
