const fs = require("fs");
const Food = require("../models/food.models");
// adding food item

const addFoodItem = async (req, res) => {
  let image_filename = `${req.file.filename}`;
  const food = new Food({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });

  try {
    await food.save();
    res.json({ success: true, message: "Food Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error });
  }
};

// Getting all the food from database
const getFood = async (req, res) => {
  try {
    const foods = await Food.find(
      {},
      "_id name description price image category createdAt"
    );
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

module.exports = { addFoodItem: addFoodItem, getFoodItem: getFood };