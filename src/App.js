import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Component/Home";
import Cart from "./Component/Cart";
import NavbarComponent from "./Component/Navbar";

import ItemDetails from "./Component/ItemDetails";
import Login from "./Component/Login";
import Sign from "./Component/Signup";

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarComponent />{" "}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Sign />} />
          <Route path="/item/:id" element={<ItemDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
