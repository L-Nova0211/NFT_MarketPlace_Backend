const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  projectName: {
    type: String,
    required: true
  },
  skill: {
    type: String,
    required: true
  },
  basePrice: {
    type: Date,
    default: Date.now
  },
  amountReceived: {
    type: Number,
    default: 0
  }
});
module.exports = User = mongoose.model("users", UserSchema);