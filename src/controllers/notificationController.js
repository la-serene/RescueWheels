import Notification from "../models/Request.js"

export const createNotification = async (request) => {
    const {fromUserId, toUserId, notificationType, notificationSource} = request

    const description = "You have a new " + notificationType + " from " + notificationSource + "."

    try {
        await new Notification({
            fromUserId,
            toUserId,
            notificationType,
            notificationSource,
            description
        }).save()
    } catch (e) {
        console.log(e.message)
    }
}
