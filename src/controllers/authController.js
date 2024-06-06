import User from "../models/UserAccount.js"
import Token from "../models/Token.js"
import bcrypt from "bcrypt"
import crypto from "crypto"
import jwt from 'jsonwebtoken'
import {sendMail} from "../services/send.mail.js"

export const signUp = async (req, res) => {
	const {email, password, ...rest} = req.body

	try {
		const user = await User.findOne({email: email}).exec()
		if (user != null) {
			return res.status(400).json({
				message: "Email already exists"
			})
		}
	} catch (e) {
		return res.status(400).json({
			message: e.message
		})
	}

	try {
		const salt = 10
		await new User({
			email: email,
			password: await bcrypt.hash(password, salt),
			...rest
		}).save()

		res.status(200).json({
			message: "Successfully create new account!"
		})
	} catch (e) {
		res.status(400).json({
			message: "Failed to create new account."
		})
	}
}

export const signIn = async (req, res) => {
	const {email, password} = req.body

	try {
		const user = await User.findOne({email: email}).exec()
		if (user === null) {
			return res.status(300).json({
				message: "Email not found"
			})
		}

		const isMatch = await bcrypt.compare(password, user.password)
		if (isMatch) {
			const token = jwt.sign({
				id: user._id,
				role: "user"
			}, process.env.JWT_SECRET, {expiresIn: '720h'})
			res.status(200).json({
				message: "Successfully sign in!",
				token: token,
				id: user._id,
				role: "user"
			})
		} else {
			res.status(302).json({
				message: "Wrong password."
			})
		}
	} catch (e) {
		res.status(303).json({
			message: `Failed to sign in: ${e.message}`
		})
	}
}

export const sendResetPasswordMail = async (req, res) => {
	const {email} = req.body

	const user = await User.findOne({email: email}).exec()
	if (user === null) {
		res.status(400).json({
			message: "User account not found."
		})
	} else {
		try {
			let token = await Token.findOne({fromUserId: user._id}).exec()
			if (token) {
				await token.deleteOne()
			}

			const salt = 10
			token = crypto.randomBytes(32).toString("hex")
			const hash = await bcrypt.hash(token, Number(salt))
			await new Token({
				id: user._id,
				token: hash,
				createdAt: Date.now(),
			}).save()

			const subject = "Reset Password"
			const text = `Click this link to reset your password: http://localhost:3000/resetPassword?id=${user._id}&token=${token}`
			await sendMail(email, subject, text)
			res.status(200).json({
				message: "Reset password link has been sent to your email."
			})
		} catch (e) {
			res.status(400).json({
				message: "Failed to send reset password link."
			})
		}
	}
}

export const validateResetToken = async (req, res) => {
	const fromUserId = req.query.id    			// hide schema attribute from user
	const token = req.query.token

	const resetToken = await Token.findOne({fromUserId}).exec()
	if (!resetToken) {
		res.status(400).json({
			message: "Invalid reset token.",
			isToken: false
		})
	}

	const isMatch = await bcrypt.compare(token, resetToken.token)
	if (isMatch) {
		res.status(200).json({
			message: "Valid reset token.",
			fromUserId: fromUserId,
			isToken: true
		})
	} else {
		res.status(400).json({
			message: "Invalid reset token.",
			isToken: false
		})
	}
}

export const resetPassword = async (req, res) => {
	const id = req.params.id
	const password = req.body.password

	const user = await User.findById(id).exec()
	if (user) {
		const salt = 10
		user.password = await bcrypt.hash(password, salt)
		await user.save()

		res.status(200).json({
			message: "Successfully reset password"
		})
	}

	res.status(400).json({
		message: "Undone"
	})
}