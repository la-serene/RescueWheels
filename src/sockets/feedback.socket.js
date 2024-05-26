import { createNotification } from "../controllers/notificationController.js"
import { likeFeedback } from "../controllers/feedbackController.js"

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
        likeFeedback(fromUserId, toFeedbackId).then()
    })
}