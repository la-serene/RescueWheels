import User from "../models/UserAccount.js"
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'

export const signUp = async (req, res) => {
    const { email, password, ...rest } = req.body

    if (await User.findOne({ email: email }) !== null) {
        res.status(400).json({
            message: "Email already exists"
        })
    } else {
        const salt = 10
        const user = new User({
            email: email,
            password: await bcrypt.hash(password, salt),
            ...rest
        })
        await user.save()

        res.status(200).json({
            message: "Successfully create new account!"
        })
    }
}

export const signIn = async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email: email })

    const isMatch = await bcrypt.compare(password, user.password)
    if (isMatch) {
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '720h' });
        res.status(200).json({
            message: "Successfully sign in!",
            token: token,
            userId: user._id
        })
    } else {
        res.status(400).json({
            message: "Invalid email or password."
        })
    }
}