import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    text: {
      required: true,
    },
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);
export default Message;
