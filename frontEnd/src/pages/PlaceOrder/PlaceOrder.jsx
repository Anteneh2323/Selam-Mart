import React, { useContext, useEffect, useState } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const { getTotalCartAmount, food_list, cartItems } = useContext(StoreContext);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const placeOrder = (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.forEach((item) => {
      if (cartItems[item._id]) {
        let itemInfo = { ...item, quantity: cartItems[item._id] };
        orderItems.push(itemInfo);
      }
    });

    let orderData = {
      pickupLocation: "10009 N Lamar Blvd b, Austin, TX 78753",
      userInformation: data,
      items: orderItems,
      amount: getTotalCartAmount(),
    };

    console.log("Order Receipt:", orderData);
    alert("Order placed successfully! Here is your receipt.");
  };

  const navigate = useNavigate();
  const { buttonRef } = useContext(StoreContext);

  useEffect(() => {
    if (getTotalCartAmount() === 0) {
      navigate("/cart");
    }
  }, [getTotalCartAmount, navigate]);

  return (
    <form onSubmit={placeOrder} className="place-order">
      <div className="place-order-left">
        <p className="title">Your Information</p>
        <div className="multi-fields">
          <input
            required
            onChange={onChangeHandler}
            value={data.firstName}
            name="firstName"
            type="text"
            placeholder="First Name"
          />
          <input
            required
            onChange={onChangeHandler}
            value={data.lastName}
            name="lastName"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <input
          required
          onChange={onChangeHandler}
          value={data.email}
          name="email"
          type="email"
          placeholder="Email address"
        />
        <input
          required
          onChange={onChangeHandler}
          value={data.phone}
          name="phone"
          type="text"
          placeholder="Phone"
        />

        <p className="title">Pickup Location</p>
        <p className="pickup-location">
          10009 N Lamar Blvd b, Selam International Mart & Cafe
        </p>
        <a
          href="https://www.google.com/maps/search/?api=1&query=10009+N+Lamar+Blvd+b,+Selam+International+Mart+%26+Cafe,+Austin,+TX+78753"
          target="_blank"
          rel="noopener noreferrer"
          className="maps-link"
        >
          View on Google Maps
        </a>
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()}</b>
            </div>
          </div>
          <button type="submit">PLACE ORDER</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
