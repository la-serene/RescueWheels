import Comment from "../models/Comment.js"

export const createComment = async (req, res) => {
    const from = req.params.from
    const feedbackId = req.params.feedbackId
    const description = req.body.description

    const comment = await new Comment({
        from: from,
        belongTo: feedbackId,
        description: description
    }).save()

    return comment._id
}