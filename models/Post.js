const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  imageURL: {
    type: String,
    required: true
  },
  categories: {
    type: [String],
    required: true
  },
  description: {
    type: String
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  likes: {
    type: Number,
    default: 0
  },
  // property ('creeatedBy') === path
  // ref('User') === model
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User"
  },
  messages: [
    {
      messageBody: {
        type: String,
        required: true
      },
      messageDate: {
        type: Date,
        default: Date.now
      },
      messageUser: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
      }
    }
  ]
});

module.exports = mongoose.model("Post", PostSchema);
