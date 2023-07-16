const { Router } = require("express");

const {
  getHistory,
  saveHistory,
  clearHistory
} = require("../controllers/HistoryControllers");

const router = Router();

router.get("/get", getHistory);
router.post("/save", saveHistory);
router.post("/clear", clearHistory);

module.exports = router;
