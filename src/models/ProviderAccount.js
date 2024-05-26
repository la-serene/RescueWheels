import mongoose from "mongoose"

const providerSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
    },
    address: {
        type: String,
    },
    latitude: {
        type: Number,
        default: 0,
        required: true,
    },
    longitude: {
        type: Number,
        default: 0,
        required: true,
    },
})

const Provider = mongoose.model("Provider", providerSchema)
export default Provider
