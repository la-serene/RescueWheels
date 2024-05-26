import Message from "../models/Message";
import io from "../app";

export const allMessages = async (req, res) => {
  await Message.find({}, (err, messages) => {
    if (err) sendStatus(404);
    res.send(messages);
  });
};
export const sendMessage = async (req, res) => {
  const message = new Message(req.body);
  Message.create(req.body);
  await io.emit("receiveMessage", message);
  res.status(200).json({ success: true, message: "Message sent successfully" });
};
