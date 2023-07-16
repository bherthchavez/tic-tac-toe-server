const mongoose = require("mongoose");

const historySchema = new mongoose.Schema({
  rounds: {
    type: Number,
    required: true,
  },
  player1: {
    type: String,
    required: true,
  },
  player1Status: {
    type: String,
    required: true,
  },
  player2: {
    type: String,
    required: true,
  },
  player2Status: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
},
{
    timestamps: true
});

module.exports = mongoose.model("History", historySchema);
