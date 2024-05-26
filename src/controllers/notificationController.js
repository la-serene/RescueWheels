import Notification from "../models/Request.js"

export const createNotification = async (req) => {
    const from = req.userId
    const type = req.type

    let description
    if (type === "feedback_comment") {
        description = "You have a new comment on your feedback."
    } else if (type === "feedback_like") {
        description = "Someone liked your feedback."
    }

    await new Notification({
        from: from,
        type: type,
        description: description
    }).save()
}
