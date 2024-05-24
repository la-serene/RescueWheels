import PendingService from "../models/PendingService.js";

export const approvePendingService = async (req, res) => {
    const pendingServiceId = req.params
    const pendingService = await PendingService.findOne({_id: pendingServiceId}).exec()
    await pendingService.createService()
    pendingService.deleteOne().exec()

    res.status(200).json({
        message: "Successfully approved service."
    })
}

export const rejectPendingService = async (req, res) => {
    const pendingServiceId = req.params
    await PendingService.deleteOne({ _id: pendingServiceId }).exec()

    res.status(200).json({
        message: "Successfully rejected pending service."
    })
}