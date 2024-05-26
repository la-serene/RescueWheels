import mongoose from "mongoose"

const serviceSchema = new mongoose.Schema({
    fromProviderId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Provider"
    },
    serviceName: {
        type: String,
        required: true,
    },
    serviceDescription: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Service = mongoose.model("Service", serviceSchema)
export default Service