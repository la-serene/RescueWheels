import Comment from "../models/Comment.js"

export const createComment = async (req) => {
    const {
        fromUserId,
        belongToFeedbackId,
        commentDescription
    } = req

    try {
        const comment = await new Comment({
            fromUserId,
            belongToFeedbackId,
            commentDescription
        }).save()

        return comment._id
    } catch (e) {
        console.log(e.message)
        return null
    }
}