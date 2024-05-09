const express = require("express");
const multer = require("multer");
const { addFoodItem, getFoodItem } = require("../controllers/food.controller");
// Router
const foodRouter = express.Router();

// image storage engine
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, callback) => {
    return callback(null, `${Date.now()}${file.originalname}`);
  },
});

// middleware
const upload = multer({
  storage: storage,
});

// posting
foodRouter.post("/add", upload.single("image"), addFoodItem);
foodRouter.get("/listFoods", getFoodItem);

module.exports = foodRouter;

