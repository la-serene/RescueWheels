import mongoose from "mongoose"

const commentSchema = new mongoose.Schema({
    from: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: ["User", "Provider"]
    },
    description: {
        type: String,
        required: true,
    },
    belongTo: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Feedback"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Comment = mongoose.model("Comment", commentSchema)
export default Comment