import Feedback from "../models/Feedback.js"
import { createComment } from "./commentController.js"

export const createFeedback = async (req, res) => {
    const fromUserId = req.params.fromUserId
    const toUserId = req.params.toUserId
    const feedbackDescription = req.body.feedbackDescription

    const feedback = await new Feedback({
        fromUserId,
        toUserId,
        feedbackDescription
    }).save()

    res.status(200).json({
        message: "Feedback created.",
        feedback: feedback
    })
}

export const getFeedbackFromUserIdByQuantity = async (req, res) => {
    const fromUserId = req.params.fromUserId
    const quantity = req.params.quantity

    const feedbacks = await Feedback.find({
        fromUserId
    }).limit(parseInt(quantity)).exec()

    res.status(200).json({
        feedbacks: feedbacks,
        message: "Feedbacks retrieved."
    })
}

export const likeFeedback = async (req) => {
    const fromUserId = req.fromUserId
    const toFeedbackId = req.toFeedbackId

    try {
        const feedback = await Feedback.findById(toFeedbackId).exec()
        await feedback.likeFeedback(fromUserId)
    } catch (e) {
        throw new Error(e.message)
    }
}

export const commentFeedback = async (req) => {
    const {
        fromUserId,
        toFeedbackId,
        commentDescription
    } = req

    try {
        const feedback = await Feedback.findById(toFeedbackId).exec()
        const newCommentId = await createComment({
            fromUserId,
            toFeedbackId,
            commentDescription
        })
        await feedback.addCommentId(newCommentId)
    } catch (e) {
        throw new Error(e.message)
    }
}