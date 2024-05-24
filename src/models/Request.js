import mongoose from "mongoose"

const locationSchema = new mongoose.Schema({
    latitude: {
        type: Number,
        required: true,
    },
    longitude: {
        type: Number,
        required: true,
    }
}, {_id: false});

const requestSchema = new mongoose.Schema({
    from: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    location: {
        type: locationSchema,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Request = mongoose.model("Request", requestSchema)
export default Request