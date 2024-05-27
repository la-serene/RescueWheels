import Message from "../models/Message.js"

export const getMessageByQuantityFromUserId = async (req, res) => {
    let page = req.query.p
    const quantity = req.params.quantity
    const fromUserId = req.params.fromUserId

    if (page === undefined || page === 0 || page === 1) {
        page = 1
    }

    try {
        const messages = await Message.find({ fromUserId })
            .skip((page - 1) * quantity)
            .limit(quantity)
            .limit(quantity)
            .exec()
        res.status(200).json({
            success: true,
            messages
        })
    } catch (e) {
        res.status(500).json({
            success: false,
            message: e.message
        })
    }
}

export const saveMessage = async (req) => {
    const {
        senderId, receiverId, text
    } = req

    try {
        await new Message({senderId, receiverId, text}).save()
    } catch (e) {
        console.log(e.message)
    }
}
