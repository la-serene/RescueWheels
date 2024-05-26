import Comment from "../models/Comment.js"

export const createComment = async (req) => {
    const from = req.params.from
    const feedbackId = req.params.feedbackId
    const description = req.body.description

    try {
        const comment = await new Comment({
            from: from,
            belongTo: feedbackId,
            description: description
        }).save()

        return comment._id
    } catch (e) {
        console.log(e.message)
        return null
    }
}