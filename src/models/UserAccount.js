import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
    },
    gender: {
        type: Number,
        default: 0
    },
    address: {
        type: String,
    },
    avatar: {
        type: String
    },
    cover: {
        type: String
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
                "name": `${this.lastName} ${this.firstName}`,
                "email": this.email,
                "phoneNumber": this.phoneNumber,
                "gender": this.gender,
                "address": this.address,
                "cover": this.cover,
                "avatar": this.avatar
            }
        }
    }
})

const User = mongoose.model("User", userSchema)
export default User