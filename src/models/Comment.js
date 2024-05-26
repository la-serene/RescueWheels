import mongoose from "mongoose"

const commentSchema = new mongoose.Schema({
    fromUserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    belongToFeedbackId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Feedback"
    },
    commentDescription: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Comment = mongoose.model("Comment", commentSchema)
export default Comment