import mongoose from "mongoose"

const feedbackSchema = new mongoose.Schema({
    from: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    to: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Provider"
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
            default: [],
            ref: "User"
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {
    methods: {
        getNumberOfLike: async function () {
            const likeList = this.parent.likeList.length
        }
    }
})

const Feedback = mongoose.model("Feedback", feedbackSchema)
export default Feedback