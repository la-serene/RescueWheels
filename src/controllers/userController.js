import User from "../models/UserAccount.js"
import Provider from "../models/ProviderAccount.js";

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

export const getUserByQuantity = async (req, res) => {
    let page = req.query.p
    const quantity = req.params.quantity

    if (page === undefined || page <= 1) {
        page = 1
    }

    try {
        let users = await User.find()
                .skip((page - 1) * quantity)
                .limit(quantity)
                .exec()

        users = users.map(user => user.getInsensitiveInfo())

        res.status(200).json({
            users,
            message: "Users found."
        })
    } catch (e) {
        console.log(e.message)
        res.status(500).json({
            message: "Failed to get users."
        })
    }
}