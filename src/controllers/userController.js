import User from "../models/UserAccount.js";
import Request from "../models/Request.js"

export const updateProfile = async (req, res) => {
    const userId = req.params.userId
    const { firstName, lastName, phoneNumber, address } = req.body

    await User.findByIdAndUpdate(userId, {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        address: address
    }).exec()

    res.status(200).json({
        message: "Profile updated"
    })
}

export const createRequest = async (req, res) => {
    const userId = req.params.userId
    const { latitude, longitude } = req.body.location

    await new Request({
        userId: userId,
        location: {
            latitude: latitude,
            longitude: longitude }
    }).save()

    res.status(200).json({
        message: "Request created"
    })
}