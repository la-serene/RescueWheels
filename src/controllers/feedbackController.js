import Feedback from "../models/Feedback.js"

export const createFeedback = async (req, res) => {
    const fromId = req.params.from
    const toId = req.params.to
    const description = req.body.description

    const feedback = await new Feedback({
        from: fromId,
        to: toId,
        description: description
    }).save()

    res.status(200).json({
        message: "Feedback created."
    })
}

export const likeFeedback = async (req) => {
    const userId = req.params.userId
    const feedbackId = req.params.feedbackId

    const feedback = await Feedback.findById(feedbackId).exec()
    await feedback.likeFeedback(userId)

    return {
        message: "Feedback liked."
    }
}