import Message from "../models/Message";
import io from "../app";

export const attr = async (req) => {
  try {
    await Message.find({}, (err, messages) => {
      if (err) sendStatus(404);
      res.send(messages);
    });
  } catch {
    (e) => {
      console.log(e.message);
    };
  }
};
export const sendMessage = async (req, res) => {
  const senderId = req.body.senderId;
  const receiverId = req.body.receiverId;
  const text = req.body.text;
  const message = new Message({ senderId, receiverId, text });
  Message.create(req.body);
  try {
    await io.emit("receiveMessage", message);
    res
      .status(200)
      .json({ success: true, message: "Message sent successfully" });
  } catch {
    (e) => {
      console.log(e.message);
    };
  }
};
