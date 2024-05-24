import Service from "../models/Service.js"
import PendingService from "../models/PendingService.js"

export const submitService = async (req, res) => {
    const providerId = req.params.providerId
    const name = req.body.name
    const description = req.body.description

    await new PendingService({
        providerId: providerId,
        name: name,
        description: description
    }).save()

    res.status(200).json({
        message: "Pending new service."
    })
}

export const getServiceByQuantity = async (req, res) => {
    const quantity = req.params.quantity
    const services = await Service.find().limit(quantity).exec()

    res.status(200).json({
        services: services,
        message: `Successfully retrieve ${quantity} services.`
    })
}

export const updateService = async (req, res) => {
    const providerId = req.params.providerId
    const serviceId = req.params.serviceId
    const name = req.body.name
    const description = req.body.description

    await new PendingService({
        from: providerId,
        to: serviceId,
        name: name,
        description: description
    }).save()

    res.status(200).json({
        message: "Pending service update."
    })
}

export const deleteService = async (req, res) => {
    const serviceId = req.params.serviceId
    await Service.deleteOne({ _id: serviceId }).exec()

    res.status(200).json({
        message: "Service deleted."
    })
}