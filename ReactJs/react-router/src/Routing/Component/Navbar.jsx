import React from "react";
import { Link } from "react-router";

const App=()=>{
return(
    <nav>
    
      <Link to="/landing">Landing</Link>
      <Link to="/products">Products</Link>
      <Link to="/about">About</Link>
      <Link to="/cart">Cart</Link>
    
    </nav>
)
}
export default App