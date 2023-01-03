const express = require("express");
const app = express();
const morgan = require("morgan");
require("./config"); // --> require the db()
require("dotenv").config();
const router = require("./routes");

app.use(express.json());
app.use(morgan("tiny"));

app.use("/api", router);

app.get("/", (req, res) => {
  res.send("HACKATHON - CEIBLOG");
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening on http//:localhost:3001`);
});