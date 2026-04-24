import React from "react";
import { Outlet } from "react-router";
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
const App = () => {
  return (
    <div>
    <Navbar/>
      <h1>Homepage</h1>
      <Outlet />
      <Footer/>
    </div>
  );
};

export default App;