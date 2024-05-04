import React, { useContext, useState } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../Context/StoreContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PlaceOrder = () => {
  const { getTotalAmount } = useContext(StoreContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phone: "",
  });

  const formHandle = (e) => {
    e.preventDefault();
    toast.success("Order Placed!");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form className="place-order" onSubmit={formHandle}>
      <div className="place-order-left">
        <p className="order-title">Delivery Information</p>
        <div className="multi-fields">
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <input
          type="email"
          placeholder="Email address"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Street"
          name="street"
          value={formData.street}
          onChange={handleChange}
          required
        />

        <div className="multi-fields">
          <input
            type="text"
            placeholder="City"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="State"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </div>

        <div className="multi-fields">
          <input
            type="text"
            placeholder="Zip Code"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>

        <input
          type="text"
          placeholder="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div className="place-order-right">
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
          <button type="submit">Proceed to payment</button>
        </div>
      </div>
      <ToastContainer autoClose={1500} />
      {console.log(formData)}
    </form>
  );
};

export default PlaceOrder;
