import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const items = useSelector((state) => state.cart);
  return (
    <div className="navbar">
      <span className="logo">REDUX STORE</span>
      <nav>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/cart">
          Cart
        </Link>
        <span className="cartCount">
          Cart items:<sup style={{ fontSize: "22px" }}> {items.length}</sup>
        </span>
      </nav>
    </div>
  );
}

export default Navbar;
