import User from "../models/UserAccount.js"
import bcrypt from "bcrypt"

export const signUp = async (req, res) => {
    const email = req.body.email
    let password = req.body.password

    try {
        if (await User.findOne({email: email}).lean() === null) {
            const salt = 10
            bcrypt.hash(password, salt, (err, hash) => {
                if (err) {
                    console.error(err);
                } else {
                    password = hash
                }
            })
            const user = new User({
                email: email,
                password: password,
                ...req.body
            })
            await user.save()

            res.status(200).json({
                message: "Successful sign up."
            })
        } else {
            res.status(400).json({
                message: "Email already exists."
            })
        }
    } catch (err) {
        console.error(err)
    }
}