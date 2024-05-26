import { createNotification } from "../controllers/notificationController.js"
import { likeFeedback } from "../controllers/feedbackController.js"

export default function feedbackHandler(socket) {
    socket.on("like_feedback", (request) => {
        const fromUserId = request.fromUserId
        const toUserId = request.toUserId
        const feedbackId = request.feedbackId

        socket.to(toUserId).emit("feedback_liked", request)
        createNotification(fromUserId, toUserId, feedbackId, "like").then()
        likeFeedback(fromUserId, feedbackId).then()
    })
}