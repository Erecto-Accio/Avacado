const express = require("express");
const multer = require("multer");
const addFoodItem = require("../controllers/food.controller");
// Router
const foodRouter = express.Router();

module.exports = foodRouter;
