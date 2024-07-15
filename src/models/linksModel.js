import mongoose from "mongoose";

const linkSchema = new mongoose.Schema({
  platform: {
    type: String,
    required: [true, "Can't be empty"],
    unique: true,
  },
  url: {
    type: String,
    required: [true, "Can't be empty"],
    unique: true,
  },
  user_id: {
    type: Number,
    required: [true],
  },
});

const Link = mongoose.models.links || mongoose.model("links", linkSchema);

export default Link;
