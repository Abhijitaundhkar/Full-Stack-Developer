import React, { useState } from "react";
import axios from "axios";

const CartPage = ({ cart, updateQuantity, removeFromCart }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");

  // total with added product quantity
  const totalPrice = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  //place order of product
  const placeOrder = (event) => {
    event.preventDefault();
    const order = {
      products: cart.map((item) => ({
        productId: item.product.id,
        quantity: item.quantity,
      })),
      firstName,
      lastName,
      address,
    };
    //call the api to backend for order place
    axios
      .post("http://localhost:3002/api/orders/place-order", order)
      .then((response) => {
        alert("Order placed successfully!");
      })
      .catch((error) => {
        console.error("There was an error placing the order!", error);
      });
  };

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.product.id}>
            {item.product.name} - ${item.product.price} x {item.quantity}
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => updateQuantity(item.product.id, e.target.value)}
            />
            <button onClick={() => removeFromCart(item.product.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <h2>Total: ${totalPrice}</h2>
      <h3>User Details</h3>
      <form onSubmit={placeOrder}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default CartPage;
