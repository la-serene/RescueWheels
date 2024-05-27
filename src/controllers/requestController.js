import Request from "../models/Request.js";

export const createRequest = async (req, res) => {
  // At a time, user can broadcast only one request.
  const userId = req.params.userId;
  const { latitude, longitude } = req.body.location;

  try {
    await new Request({
      userId: userId,
      location: {
        latitude: latitude,
        longitude: longitude,
      },
    }).save();

    res.status(200).json({
      message: "Request created",
    });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({
      message: "Failed to create request",
    });
  }
};

export const getRequestByUserId = async (req, res) => {
    const fromUserId = req.params.fromUserId

    try {
        const request = await Request.findOne({ fromUserId }).exec()
        res.status(200).json({
            request,
            message: "Request found"
        })
    } catch (e) {
        console.log(e.message)
        res.status(500).json({
            message: "Failed to get request"
        })
    }
}

export const deleteRequest = async (req, res) => {
  const requestId = req.params.requestId;
  await Request.findByIdAndDelete(requestId).exec();

  res.status(200).json({
    message: "Request deleted",
  });
};
export const getRequestById = async (req, res) => {
  const requestId = req.params.requestId;
  try {
    const request = Request.findById(requestId).exec();
    res.status(200).json({
      request: request,
      message: "request retrieved.",
    });
  } catch {
    (e) => {
      console.log(e.message);
      res.status(500).json({
        message: "Request not found.",
      });
    };
  }
};
