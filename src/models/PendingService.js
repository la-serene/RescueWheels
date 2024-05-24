import mongoose from "mongoose"

const pendingServiceSchema = new mongoose.Schema({
    from: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Provider"
    },
    to: {
        type: mongoose.Schema.Types.ObjectId,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 86400
    }
})

const PendingService = mongoose.model("PendingService", pendingServiceSchema)
export default PendingService