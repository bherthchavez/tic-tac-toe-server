const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const routes = require("./routes/HistoryRoute");

const cors = require("cors");

const app = express();
const PORT =  5000;

app.use(express.json());
app.use(cors());
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.DATABASE_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use("/api", routes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
