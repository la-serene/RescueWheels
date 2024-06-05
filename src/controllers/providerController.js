import bcrypt from "bcrypt"
import Provider from "../models/ProviderAccount.js"

export const createProvider = async (req, res) => {
    const {email, password, name, phoneNumber, address, latitude, longitude} = req.body

    try {
        const salt = 10
        const hashed = await bcrypt.hash(password, salt)
        await new Provider({
            email,
            password: hashed,
            name,
            phoneNumber,
            address,
            latitude,
            longitude
        }).save()

        res.status(200).json({
            message: "Provider created.",
        })
    } catch (e) {
        console.log(e.message)
        res.status(500).json({
            message: "Failed to create provider.",
        })
    }
}

export const getProviderByProviderId = async (req, res) => {
    const providerId = req.params.providerId

    try {
        const provider = await Provider.findById(providerId).exec()
        res.status(200).json({
            provider,
            message: "Provider found."
        })
    } catch (e) {
        console.log(e.message)
        res.status(500).json({
            message: "Failed to get provider."
        })
    }
}

export const getProviderByQuantity = async (req, res) => {
    let page = req.query.p
    const quantity = req.params.quantity
    const providerId = req.params.providerId

    if (page === undefined || page <= 1) {
        page = 1
    }

    try {
        let providers
        if (providerId === undefined) {
            providers = await Provider.find()
                .skip((page - 1) * quantity)
                .limit(quantity)
                .exec()
        } else {
            providers = await Provider.findById(providerId)
                .skip((page - 1) * quantity)
                .limit(quantity)
                .exec()
        }

        providers = providers.map(provider => provider.getInsensitiveInfo())

        res.status(200).json({
            providers,
            message: "Providers found."
        })
    } catch (e) {
        console.log(e.message)
        res.status(500).json({
            message: "Failed to get providers."
        })
    }
}

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

export const deleteProvider = async (req, res) => {
    const providerId = req.params.providerId

    try {
        await Provider.findByIdAndDelete(providerId).exec()
        res.status(200).json({
            message: "Provider deleted.",
        })
    } catch (e) {
        console.log(e.message)
        res.status(500).json({
            message: "Failed to delete provider.",
        })
    }
}