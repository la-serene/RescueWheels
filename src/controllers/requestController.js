import Request from "../models/Request.js"

export const createRequest = async (req, res) => {
    // At a time, user can broadcast only one request.
    const userId = req.params.userId
    const {latitude, longitude} = req.body.location

    try {
        await new Request({
            userId: userId,
            location: {
                latitude: latitude,
                longitude: longitude
            }
        }).save()

        res.status(200).json({
            message: "Request created"
        })
    } catch (e) {
        console.log(e.message)
        res.status(500).json({
            message: "Failed to create request"
        })
    }
}

export const deleteRequest = async (req, res) => {
    const requestId = req.params.requestId
    await Request.findByIdAndDelete(requestId).exec()

    res.status(200).json({
        message: "Request deleted"
    })
}