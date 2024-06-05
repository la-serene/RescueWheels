import PendingService from "../models/PendingService.js"

export const approvePendingService = async (req, res) => {
    const pendingServiceId = req.params.pendingServiceId

    try {
        const pendingService = await PendingService.findById(pendingServiceId).exec()
        await pendingService.createService()
        pendingService.deleteOne().exec()

        res.status(200).json({
            message: "Successfully approved service."
        })
    } catch (e) {
        console.log(e.message)
        res.status(500).json({
            message: "Failed to approve service."
        })
    }
}

export const getPendingServiceByPendingServiceId = async (req, res) => {
    const pendingServiceId = req.params.pendingServiceId

    try {
        const pendingService = await PendingService.findById(pendingServiceId).exec()

        res.status(200).json({
            pendingService: pendingService,
            message: "Pending Service retrieved."
        })
    } catch (e) {
        console.log(e.message)
        res.status(500).json({
            message: "Pending Service not found."
        })
    }
}

export const getPendingServiceByQuantity = async (req, res) => {
    let page = req.query.p
    const quantity = req.params.quantity
    const fromProviderId = req.params.fromProviderId

    if (page === undefined || page === 0 || page === 1) {
        page = 1
    }

    try {
        let pendingServices
        if (fromProviderId === undefined) {
            pendingServices = await PendingService
                .find()
                .skip((page - 1) * quantity)
                .limit(quantity)
                .exec()
        } else {
            pendingServices = await PendingService
                .findById(fromProviderId)
                .skip((page - 1) * quantity)
                .limit(quantity)
                .exec()
        }

        res.status(200).json({
            pendingServices: pendingServices,
            message: "Pending Services retrieved."
        })
    } catch (e) {
        console.log(e.message)
        res.status(500).json({
            message: "Pending Services not found."
        })
    }
}

export const rejectPendingService = async (req, res) => {
    const pendingServiceId = req.params.pendingServiceId

    try {
        await PendingService.deleteOne({_id: pendingServiceId}).exec()

        res.status(200).json({
            message: "Successfully rejected pending service."
        })
    } catch (e) {
        console.log(e.message)
        res.status(500).json({
            message: "Failed to reject pending service."
        })
    }
}