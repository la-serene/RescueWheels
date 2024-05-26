import { createNotification } from "../controllers/notificationController.js"
import { likeFeedback, commentFeedback } from "../controllers/feedbackController.js"

export default function feedbackHandler(socket) {
    socket.on("like_feedback", (request) => {
        const fromUserId = request.fromUserId
        const toFeedbackId = request.toFeedbackId
        const toUserId = request.toUserId

        socket.to(toUserId).emit("feedback_liked", request)
        createNotification({
            ...request,
            notificationType: "like",
            notificationSource: "feedback"
        }).then()
        likeFeedback({
            fromUserId,
            toFeedbackId
        }).then()
    })

    socket.on("comment_feedback", (request) => {
        const {
            fromUserId,
            toFeedbackId,
            toUserId,
            commentDescription
        } = request

        socket.to(toUserId).emit("feedback_commented", request)
        createNotification({
            fromUserId,
            toFeedbackId,
            toUserId,
            notificationType: "comment",
            notificationSource: "feedback"
        }).then()
        commentFeedback({
            fromUserId,
            toFeedbackId,
            commentDescription
        }).then()
    })
}