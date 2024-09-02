import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Data } from "./Data";
import "./ItemDetails.css";

const ItemDetails = () => {
  const { id } = useParams();
  const [showContactForm, setShowContactForm] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    mobile: "",
  });
  const [bookingData, setBookingData] = useState({
    date: "",
    time: "",
    guests: "",
  });

  const item = Data.find((item) => item.id === parseInt(id));

  if (!item) {
    return <div>Item not found</div>;
  }

  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const itemExists = cart.find((cartItem) => cartItem.id === item.id);

    if (!itemExists) {
      cart.push({ ...item, quantity: 1 });
      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`${item.title} has been added to the cart.`);
    } else {
      alert(`${item.title} is already in the cart.`);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBookingChange = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value,
    });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Data:", formData);
    alert("Contact form submitted!");
    setShowContactForm(false);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Data:", bookingData);
    alert("Booking form submitted!");
    setShowBookingForm(false);
  };

  return (
    <div className="container123">
      <img
        src={window.location.origin + `${item.image_url}`}
        alt={item.title}
        className="img-fluid"
      />
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      <p>
        <strong>Price:</strong> ₹{item.price.toLocaleString()}
      </p>
      <div className="btn">
        <button onClick={() => setShowContactForm(true)}>Contact Us</button>
        <button onClick={() => setShowBookingForm(true)}>Book Now</button>
        <button onClick={addToCart}>Add to Cart</button>
      </div>

      {showContactForm && (
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form onSubmit={handleContactSubmit}>
            <div className="form-group">
              <label>Username:</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Mobile Number:</label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}

      {showBookingForm && (
        <div className="booking-form">
          <h2>Book Now</h2>
          <form onSubmit={handleBookingSubmit}>
            <div className="form-group">
              <label>Date:</label>
              <input
                type="date"
                name="date"
                value={bookingData.date}
                onChange={handleBookingChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Time:</label>
              <input
                type="time"
                name="time"
                value={bookingData.time}
                onChange={handleBookingChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Number of Guests:</label>
              <input
                type="number"
                name="guests"
                value={bookingData.guests}
                onChange={handleBookingChange}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ItemDetails;
