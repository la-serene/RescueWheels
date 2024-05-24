import Feedback from "../models/Feedback.js";

export const createFeedback = async (req, res) => {
    const fromId = req.params.from
    const toId = req.params.to
    const description = req.body.description

    await new Feedback({
        from: fromId,
        to: toId,
        description: description
    }).save()

    res.status(200).json({
        message: "Feedback created."
    })
}