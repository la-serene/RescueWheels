import Provider from "../models/ProviderAccount.js"

export const updateProviderProfile = async (req, res) => {
    const providerId = req.params.providerId
    const {name, phoneNumber, address, location} = req.body

    try {
        await Provider.findByIdAndUpdate(providerId, {
            name: name,
            phoneNumber: phoneNumber,
            address: address,
            location: location,
        }).exec()

        res.status(200).json({
            message: "Profile updated.",
        })
    } catch (e) {
        console.log(e.message)
        res.status(500).json({
            message: "Failed to update profile.",
        })
    }
}
