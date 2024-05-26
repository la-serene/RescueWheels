import mongoose from "mongoose"

const feedbackSchema = new mongoose.Schema({
    fromUserId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    toUserId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Provider"
    },
    feedbackDescription: {
        type: String,
        required: true,
    },
    listComment: [
        {
            type: mongoose.Schema.Types.ObjectId,
            default: [],
            ref: "Comment"
        }
    ],
    listLike: [
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
        likeFeedback: async function (userId) {
            if (!this.listLike.includes(userId)) {
                this.listLike.push(userId)
                await this.save()
            }
        },

        addCommentId: async function (commentId) {
            if (!this.listComment.includes(commentId)) {
                this.listComment.push(commentId)
                await this.save()
            }
        },

        getNumberOfLike: async function () {
            return this.listLike.length
        },
    }
})

const Feedback = mongoose.model("Feedback", feedbackSchema)
export default Feedback
