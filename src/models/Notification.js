import mongoose from "mongoose"

const notificationSchema = new mongoose.Schema({
    fromUserId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: ["User", "Provider"]
    },
    toUserId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: ["User", "Provider"]
    },
    notificationType: {
        type: String,
        required: true,
    },
    notificationSource: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    isViewed: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Notification = mongoose.model("Notification", notificationSchema)
export default Notification