import Comment from "../models/Comment.js";

export const createComment = async (req, res) => {
    const from = req.params.from
    const feedbackId = req.params.feedbackId
    const description = req.body.description

    await new Comment({
        from: from,
        belongTo: feedbackId,
        description: description
    }).save()

    res.status(200).json({
        message: "Feedback created."
    })
}