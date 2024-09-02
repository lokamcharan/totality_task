import React from "react";
import { Link } from "react-router-dom";
import { Data } from "./Data";
import "./List.css";

const List = () => {
  return (
    <div className="container">
      {Data.map((value) => (
        <div key={value.id} className="card">
          <img
            src={value.image_url}
            className="card-img-top"
            alt={value.title}
          />
          <div className="card-body">
            <h5 className="card-title">{value.title}</h5>
            <p className="card-text">{value.description}</p>
            <p className="card-text">
              {" "}
              <strong>Bedrooms:-</strong>
              {value.bedrooms}
            </p>
            <p className="card-text">
              {" "}
              <strong>Location:-</strong>
              {value.location}
            </p>
            <p className="card-text">
              {" "}
              <strong>Price_Range:-</strong>
              {value.price_range}
            </p>
            <p className="card-text">
              <strong>Price:-</strong> ₹{value.price.toLocaleString()}
            </p>
            <Link to={`/item/${value.id}`} className="btn btn-primary1">
              Details
            </Link>
            {/* <Link to="/cart" className="btn btn-primary">Cart</Link> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
