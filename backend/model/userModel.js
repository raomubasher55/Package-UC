const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, // Consider making email unique if necessary
    },  
    password: {
      type: String,
      required: true,
    },
    isVerified: {
      type: Number,
      default: 0,
    },
  
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
