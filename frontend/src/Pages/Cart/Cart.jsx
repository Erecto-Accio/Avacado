import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContext";
const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);
  return (
    <div className="cart">
      <div className="cart-items cart-items-title">
        <p>Item</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <br />
      <br />

      <hr />
      <div>
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div className="cart-items-title cart-items-item">
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>${item.price * Number(cartItems[item._id])}</p>
                {console.log(typeof cartItems[item._id])}
                <p
                  style={{ cursor: "pointer" }}
                  onClick={() => removeFromCart(item._id)}
                >
                  x
                </p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Cart;
