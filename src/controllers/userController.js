import Request from "../models/Request.js";

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