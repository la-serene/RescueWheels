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
    description: {
        type: String,
        required: true,
    },
    comment: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: ["Comment"]
        }
    ],
    likeList: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Feedback = mongoose.model("Feedback", feedbackSchema)
export default Feedback