const express = require("express");
const app = express();
require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");
require("./config"); // --> require the db()
const router = require("./routes");

app.use(
  cors({
    origin: "*",
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'],
    //credentials: true,
  })
);

app.use(express.json());
app.use(morgan("tiny"));

app.use("/api", router);

app.get("/", (req, res) => {
  res.send("HACKATHON - CEIBLOG");
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening on https://ceibo-blog-service.onrender.com`);
});