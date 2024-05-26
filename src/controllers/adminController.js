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

export const rejectPendingService = async (req, res) => {
    const pendingServiceId = req.params

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