import mongoose from "mongoose"
import validator from "validator";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Invalid email format');
            }
        }
    },
    password: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isAlphanumeric(value)) {
                throw new Error('Invalid password format');
            }
        }
    },
    firstName: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isAlpha(value)) {
                throw new Error('Invalid firstName format');
            }
        }
    },
    lastName: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isAlpha(value)) {
                throw new Error('Invalid lastName format');
            }
        }
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isAlphanumeric(value)) {
                throw new Error('Invalid phoneNumber format');
            }
        }
    },
    gender: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isAlpha(value)) {
                throw new Error('Invalid gender format');
            }
        }
    },
    address: {
        type: String,
        validate(value) {
            if (!validator.isAlpha(value)) {
                throw new Error('Invalid address format');
            }
        }
    },
    avatar: {
        type: String
    },
    cover: {
        type: String
    },
}, {
    methods: {}
})

const User = mongoose.model("User", userSchema)
export default User