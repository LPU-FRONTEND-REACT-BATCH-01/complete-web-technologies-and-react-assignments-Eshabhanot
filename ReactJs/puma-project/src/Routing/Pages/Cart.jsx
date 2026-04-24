import React from "react";

const Cart = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Your Cart</h1>

      <p>Your cart is currently empty.</p>

      <button style={styles.button}>Shop Now</button>
    </div>
  );
};

const styles = {
  button: {
    padding: "10px 15px",
    backgroundColor: "#222",
    color: "white",
    border: "none",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default Cart;