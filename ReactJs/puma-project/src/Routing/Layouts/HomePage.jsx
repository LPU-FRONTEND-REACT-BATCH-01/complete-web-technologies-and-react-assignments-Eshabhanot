import React from 'react';
import Banner from '../../assets/banner.png';
import { Outlet } from 'react-router';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
const Homepage=()=>{
    
    return(
    <div>
    <NavBar/>
          <div>
      <img src={Banner}
      alt="pumma-banner"
      style={{width:"300px" , height:"300px"}}/>
        </div>
    
    <Outlet/>
     <Footer/>
    </div>
    )
    
}
export default Homepage;