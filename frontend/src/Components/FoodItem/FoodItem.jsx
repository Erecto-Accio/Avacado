import React from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
const FoodItem = ({ id, name, description, price, image }) => {
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img src={image} alt="" />
      </div>
      <div className="food-item-info">
        <div className="food-item-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>

        <p className="food-item-description">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
