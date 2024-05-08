//dependencies
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

// middleware
app.use(express.json());
app.use(cors());

// response
app.get("/", (req, res) => {
  res.send("Hello,World!");
});

app.listen(process.env.PORT, (req, res) => {
  console.log(`Listening to port ${process.env.PORT}`);
});
