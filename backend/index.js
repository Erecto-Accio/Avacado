//dependencies
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDb = require("./config/db.js");
const foodRouter = require("./routes/foodRoute");
const app = express();
dotenv.config();

// middleware
app.use(express.json());
app.use(cors());

// DB CONNECTION
connectDb();
// DB CONNECTION

// API ENDPOINT
app.use("/api/food", foodRouter);

// response
app.get("/", (req, res) => {
  res.send("Hello,World!");
});

app.listen(process.env.PORT, (req, res) => {
  console.log(`Listening to port ${process.env.PORT}`);
});
