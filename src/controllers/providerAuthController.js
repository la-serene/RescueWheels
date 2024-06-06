import Provider from "../models/ProviderAccount.js"
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'

export const signIn = async (req, res) => {
	const {email, password} = req.body

	try {
		const provider = await Provider.findOne({email: email}).exec()
		if (provider === null) {
			return res.status(300).json({
				message: "Email not found"
			})
		}

		const isMatch = await bcrypt.compare(password, provider.password)
		if (isMatch) {
			const token = jwt.sign({
				id: provider._id,
				role: "provider"
			}, process.env.JWT_SECRET, {expiresIn: '720h'})
			res.status(200).json({
				message: "Successfully sign in!",
				token: token,
				id: provider._id,
				role: "provider"
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
