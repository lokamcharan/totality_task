import React, { useEffect, useState } from "react";
import "./Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  const handleRemoveItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleIncrement = (id) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleDecrement = (id) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  if (cartItems.length === 0) {
    return (
      <div
        style={{ textAlign: "center", fontWeight: "bold", fontSize: "30px" }}
      >
        Your cart is empty
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img
            src={window.location.origin + `${item.image_url}`}
            alt={item.title}
            className="cart-item-image"
          />
          <div className="cart-item-details">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>
              <strong>Price:</strong> ₹{item.price.toLocaleString()}
            </p>
          </div>
          <div className="cart-item-actions">
            <button onClick={() => handleDecrement(item.id)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => handleIncrement(item.id)}>+</button>
            <button
              onClick={() => handleRemoveItem(item.id)}
              className="remove-btn"
            >
              Remove Cart
            </button>
          </div>
        </div>
      ))}
      <h3>Total Price: ₹{calculateTotalPrice().toLocaleString()}</h3>
    </div>
  );
};

export default Cart;
