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
            return this.parent.likeList.length
        },

        likeFeedback: async function (userId) {
            let feedback = this.parent
            if (!feedback.likeList.includes(userId)) {
                feedback.likeList.push(userId)
                await feedback.save()
            } else {
                console.log("You already liked this feedback.")
            }
        }
    }
})

const Feedback = mongoose.model("Feedback", feedbackSchema)
export default Feedback