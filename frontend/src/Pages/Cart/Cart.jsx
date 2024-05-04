import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContext";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalAmount } =
    useContext(StoreContext);
  const navigate = useNavigate();
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

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>

          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <b>${getTotalAmount()}</b>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <b>${getTotalAmount() === 0 ? 0 : 5}</b>
            </div>

            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <b>
                $
                {getTotalAmount() === 0
                  ? getTotalAmount() + 0
                  : getTotalAmount() + 5}
              </b>
            </div>
          </div>
          <button onClick={() => navigate("/order")}>
            Proceed to checkout
          </button>
        </div>
        <div className="cart-promo-code">
          <div>
            <p>Have promo code ? Enter here</p>
            <div className="cart-promo-code-input">
              <input type="text" placeholder="Promo-code" />
              <button>Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
