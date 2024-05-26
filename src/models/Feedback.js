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
        ref: "User"
    },
    description: {
        type: String,
        required: true,
    },
    comment: [
        {
            type: mongoose.Schema.Types.ObjectId,
            default: [],
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
            return Comment.likeList.length
        },

        likeFeedback: async function (userId) {
            if (!this.likeList.includes(userId)) {
                this.likeList.push(userId)
                await this.save()
            } else {
                console.log("You already liked this feedback.")
            }
        }
    }
})

const Feedback = mongoose.model("Feedback", feedbackSchema)
export default Feedback