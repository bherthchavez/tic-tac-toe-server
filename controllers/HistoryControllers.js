const HistoryModel = require("../models/HistoryModel");

module.exports.getHistory = async (req, res) => {
  const history = await HistoryModel.find().sort({ createdAt: -1 }).lean();
  res.send(history);
};

module.exports.saveHistory = (req, res) => {
  const { rounds, player1,  player1Status, player2, player2Status, date} = req.body;

  HistoryModel.create({ rounds, player1,  player1Status, player2, player2Status, date })
    .then((data) => {
      console.log("Game added to history!");
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong!" });
    });
};
module.exports.clearHistory = async (req, res) => {
  const history = await HistoryModel.deleteMany({})
  console.log("History cleared!");
  res.send(history);
};

