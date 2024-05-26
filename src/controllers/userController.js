import User from "../models/UserAccount.js"

export const updateProfile = async (req, res) => {
    const userId = req.params.userId
    const { firstName, lastName, phoneNumber, address } = req.body

    try {
        await User.findByIdAndUpdate(userId, {
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            address: address
        }).exec()

        res.status(200).json({
            message: "Profile updated."
        })
    } catch (e) {
        res.status(500).json({
            message: "Error updating profile."
        })
    }
}