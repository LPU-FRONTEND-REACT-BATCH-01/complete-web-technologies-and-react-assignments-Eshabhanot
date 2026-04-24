import React from "react";
import { Link, Outlet } from "react-router";

const Products = () => {
  return (
    <div>
      <h1>Products</h1>

      <Link to="mens-shirts">Men Shirts</Link>
      <Link to="mens-shoes"> Men Shoes</Link> | 
      <Link to="womens-dresses"> Women Dresses</Link>

      <Outlet />
    </div>
  );
};

export default Products;