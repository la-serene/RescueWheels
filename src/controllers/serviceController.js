import Service from "../models/Service.js"
import PendingService from "../models/PendingService.js"

export const submitService = async (req, res) => {
    const providerId = req.params.providerId
    const name = req.body.name
    const description = req.body.description

    try {
        await new PendingService({
            providerId: providerId,
            name: name,
            description: description
        }).save()

        res.status(200).json({
            message: "Pending new service."
        })
    } catch (e) {
        console.log(e.message)
        res.status(500).json({
            message: "Failed to submit service."
        })
    }
}

export const getServiceByServiceId = async (req, res) => {
    const serviceId = req.params.serviceId

    try {
        const service = await Service.findById(serviceId).exec()

        res.status(200).json({
            service: service,
            message: "Service retrieved."
        })
    } catch (e) {
        console.log(e.message)
        res.status(500).json({
            message: "Service not found."
        })
    }
}

export const getAllServiceFromProviderId = async (req, res) => {
    const providerId = req.params.providerId

    try {
        const services = await Service.find({ providerId: providerId }).exec()

        res.status(200).json({
            services: services,
            message: "All services retrieved."
        })
    } catch (e) {
        console.log(e.message)
        res.status(500).json({
            message: "Services not found."
        })
    }
}

export const getServiceByQuantity = async (req, res) => {
    let page = req.query.p
    const quantity = req.params.quantity

    if (page === undefined || page === 0 || page === 1) {
        page = 1
    }

    try {
        const services = await Service
            .find()
            .skip((page - 1) * quantity)
            .limit(quantity)
            .exec()

        res.status(200).json({
            services: services,
            message: `Successfully retrieve ${quantity} services.`
        })
    } catch (e) {
        console.log(e.message)
        res.status(500).json({
            message: "Services not found."
        })
    }
}

export const getServiceByQuantityFromProviderId = async (req, res) => {
    const providerId = req.params.providerId
    const quantity = req.params.quantity

    try {
        const services = await Service.find({ providerId: providerId }).limit(quantity).exec()

        res.status(200).json({
            services: services,
            message: `Successfully retrieve ${quantity} services from provider ${providerId}.`
        })
    } catch (e) {
        console.log(e.message)
        res.status(500).json({
            message: "Services not found."
        })
    }
}

export const updateService = async (req, res) => {
    const providerId = req.params.providerId
    const serviceId = req.params.serviceId
    const name = req.body.name
    const description = req.body.description

    try {
        await new PendingService({
            from: providerId,
            to: serviceId,
            name: name,
            description: description
        }).save()

        res.status(200).json({
            message: "Pending service update."
        })
    } catch (e) {
        console.log(e.message)
        res.status(500).json({
            message: "Failed to update service."
        })
    }
}

export const deleteService = async (req, res) => {
    const serviceId = req.params.serviceId

    try {
        await Service.deleteOne({ _id: serviceId }).exec()

        res.status(200).json({
            message: "Service deleted."
        })
    } catch (e) {
        console.log(e.message)
        res.status(500).json({
            message: "Failed to delete service."
        })
    }
}