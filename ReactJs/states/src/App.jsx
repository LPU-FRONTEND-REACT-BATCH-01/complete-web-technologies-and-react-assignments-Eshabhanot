// import React, {useState} from 'react';


// const App=()=>{
//   const [state,setState]=useState(0);
//   let normal =0;

//   let handleNormal=()=>{
//     normal=10;
//     console.log(normal);
//   };

//   let handleSet=()=>{
//     setState(prev => prev + 5);
//   };

 
  
//   return(
//     <div>
//       <h1>this is a state varaible {state}</h1>
//       <h1>this is a normal varaible {normal}</h1>
//       <button onClick={handleNormal}>Normal</button>
//       <button onClick={handleSet} >set</button>

//     </div>

//   );


// };
// export default App;


// COUNTER 

// import React, { useState } from "react";

// const App = () => {
//   const [state, setState] = useState({
//     count: 0
//   });

//   const handleIncrement = () => {
//     setState(prev => ({
//       count: prev.count + 1
//     }));
//   };

//   const handleDecrement = () => {
//     setState(prev => ({
//       count: prev.count - 1
//     }));
//   };

//   console.log("Executed");

//   return (
//     <div>
//       <h1>this is a state variable {state.count}</h1>

//       <button onClick={handleIncrement}>Increment</button>
//       <button onClick={handleDecrement}>Decrement</button>
//     </div>
//   );
// };

// export default App;



//PASSWORD -> TEXT

// import React,{useState} from "react";

// const App=()=>{
// const [show,setShow]=useState("password");


// let handleShow=()=>{
//   setShow("text");
// }

// let handleHide=()=>{
//   setShow("password");
// }


// return(
//   <div>
//   <input type ={show}/>
//   <button onClick={handleShow}>Show</button>
//   <button onClick={handleHide} >Hide</button>
//   </div>
// )
// };
// export default App;


//USING TOGGLE ONE

// const App =()=>{
//   const [state,setState]=useState(false);

//   let handleOperation=()=>{
//   setState(prev=>!prev);
//   }


//   return(<div>
//     <input type = {state ? "password" :"text"}></input>
//     <button onClick={handleOperation}>show</button>

//   </div>)
// };
// export default App;


// WITHOUT USING A FUNCTION WE CAN DO LIKE THIS
// const App=()=>{
//   const [state,setState] =useState(false);

//   return(
//     <div>
//       <input type = {state ? "password" :"text"}></input>
//       <button onClick={()=>setState(prev=>!prev)}>{state?"Hide":"Show"}</button>

//     </div>
//   )
// };
// export default App;


//USING ICONS
// const App=()=>{
//   const [state,setState] = useState(false);
//   let handleShow=()=>{
//   setState(prev=>!prev);
//   }

//   return(
//     <div>
// <input type={state?"password":"text"}></input>
// <button onClick={handleShow}>{state ?<i className="fa-regular fa-eye" style={{color: "rgb(116, 192, 252)"}}></i>:<i class="fa-solid fa-eye-slash"></i>}</button>
//     </div>
//   )
// };
// export default App;


import React, { useState } from "react";
import bulb from "./assets/bulb.png";
import glowbulb from "./assets/glowbulb.jpg";

const App =()=>{
  const [state, setState] = useState(false);

  const handleState =()=> {
    setState(prev => !prev);
  }

  return (
    <div>
      <img src={state ? glowbulb : bulb} alt="bulb" style={{ width: "200px", height: "200px" }}/>
      <button onClick={handleState}>Change</button>
    </div>
  )
};

export default App;