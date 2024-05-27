import Feedback from "../models/Feedback.js"
import {createComment} from "./commentController.js"

export const createFeedback = async (req, res) => {
    const fromUserId = req.params.fromUserId
    const toUserId = req.params.toUserId
    const feedbackDescription = req.body.feedbackDescription

    try {
        const feedback = await new Feedback({
            fromUserId,
            toUserId,
            feedbackDescription
        }).save()

        res.status(200).json({
            message: "Feedback created.",
            feedback: feedback
        })
    } catch (e) {
        console.log(e.message)
        res.status(400).json({
            message: "Failed to create feedback."
        })
    }
}

export const getFeedbackByFeedbackId = async (req, res) => {
    const feedbackId = req.params.feedbackId

    try {
        const feedback = await Feedback.findById(feedbackId).exec()

        res.status(200).json({
            feedback: feedback,
            message: "Feedback retrieved."
        })
    } catch (e) {
        console.log(e.message)
        res.status(400).json({
            message: "Failed to retrieve feedback."
        })
    }
}

export const getFeedbackByQuantity = async (req, res) => {
    let page = req.query.p
    const quantity = req.params.q
    const fromUserId = req.params.fromUserId

    if (page === undefined || page === "null" || page === 0 || page === 1) {
        page = 1
    }

    try {
        let feedbacks
        if (fromUserId === undefined) {
            feedbacks = await Feedback.find()
                .skip((page - 1) * quantity)
                .limit(parseInt(quantity)).exec()
        } else {
            feedbacks = await Feedback.find({ fromUserId })
                .skip((page - 1) * quantity)
                .limit(quantity)
                .exec()
        }

        res.status(200).json({
            feedbacks: feedbacks,
            message: "Feedbacks retrieved."
        })
    } catch (e) {
        console.log(e.message)
        res.status(400).json({
            message: "Failed to retrieve feedbacks."
        })
    }
}

export const likeFeedback = async (req) => {
    const fromUserId = req.fromUserId
    const toFeedbackId = req.toFeedbackId

    try {
        const feedback = await Feedback.find({ toFeedbackId }).exec()
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
        const feedback = await Feedback.findOne({ toFeedbackId }).exec()
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