import React, { useState } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
const FoodItem = ({ id, name, description, price, image }) => {
  const [countItems, setCountItems] = useState(0);
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-img" src={image} alt="" />
        {!countItems ? (
          <img
            src={assets.add_icon_white}
            className="add"
            onClick={() => setCountItems((prev) => prev + 1)}
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => setCountItems((prev) => prev - 1)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{countItems}</p>
            <img
              onClick={() => setCountItems((prev) => prev + 1)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
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
