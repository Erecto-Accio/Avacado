//dependencies
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
const app = express();
// const dotenv = require("dotenv");
// const cors = require("cors");
import { connectDb } from "./config/db.js";
dotenv.config();

// middleware
app.use(express.json());
app.use(cors());

// DB CONNECTION
connectDb();
// DB CONNECTION

// response
app.get("/", (req, res) => {
  res.send("Hello,World!");
});

app.listen(process.env.PORT, (req, res) => {
  console.log(`Listening to port ${process.env.PORT}`);
});
