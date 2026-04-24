import React,{useState} from 'react';
import img1 from './assets/image1.jpg';
import img2 from './assets/image2.jpg';
import img3 from './assets/image3.jpg';
import img4 from './assets/image4.jpg';

const App =()=>{
  const images=[img1,img2,img3,img4];

  const [index,setIndex] =useState(0);

  let handlenext=()=>{
    if(index<images.length-1){
     setIndex(prev=>prev+1);
    }
      
    
  }

  let handleprevious=()=>{
  if(index>0){
    setIndex(prev=>prev-1);
  }
  }


  return (
      <div style={{ textAlign: "center" }}>

      <h2>Image Slider</h2>

      <img src={images[index]} alt="slider" style={{ width: "400px", height: "400px", borderRadius: "10px" }} />

      <div style={{ marginTop: "10px" }}>
        <button onClick={handleprevious}>Prev</button>
        <button onClick={handlenext}>Next</button>
      </div>

    </div>
  )
};
export default App;

