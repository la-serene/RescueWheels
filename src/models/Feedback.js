import mongoose from "mongoose"

const feedbackSchema = new mongoose.Schema({
    from: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: ["User", "Provider"]
    },
    to: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: ["User", "Provider"]
    },
    content: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
        enum: ["feedback", "report"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Feedback = mongoose.model("Feedback", feedbackSchema)
export default Feedback