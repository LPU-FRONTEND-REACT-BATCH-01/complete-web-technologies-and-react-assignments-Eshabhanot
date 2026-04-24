import React from "react";
import { NavLink } from "react-router";
import "./NavBar.css";


const NavBar = () => {
  return (
    <nav className="nav">
      <NavLink to="/landing" className="link">Landing</NavLink>
      <NavLink to="/about" className="link">About</NavLink>
      <NavLink to="/cart" className="link">Cart</NavLink>
      <NavLink to="/products" className="link">Products</NavLink>
    </nav>
  );
};

export default NavBar;