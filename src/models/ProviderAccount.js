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
    },
    longitude: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {
    methods: {
        getInsensitiveInfo: function() {
            return {
                "id": this._id,
                "name": this.name,
                "email": this.email,
                "phoneNumber": this.phoneNumber,
                "address": this.address,
                "location": {
                    "latitude": this.latitude,
                    "longitude": this.longitude
                }
            }
        }
    }
})

const Provider = mongoose.model("Provider", providerSchema)
export default Provider
