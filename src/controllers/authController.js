import User from "../models/UserAccount.js"
import bcrypt from "bcrypt"

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
        console.log(user)
        await user.save()

        res.status(200).json({
            message: "Done"
        })
    }
}