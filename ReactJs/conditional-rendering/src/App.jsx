// import { useEffect, useState } from 'react';
// const App = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("useEffect executed");
//   },[]);

//   const handleCount = () => {
//     setCount(prev => prev + 1);
//   };

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={handleCount}>Increment</button>
//     </div>
//   );
// };

// export default App;




import React,{useState} from "react";

const App=()=>{
  const [inputVal,setInput]=useState("");
  const [comments,setComments]=useState([]);

  let handlePost=()=>{
    console.log("User Input",inputVal);
    setComments([...comments],inputVal);
    console.log("updated Comment",[...comments,inputVal]);
    setInput("");
  };

  return(
    <div>
      <h1>Post a Comment</h1>
      <input type="text" value={inputVal} onChange={
        (e)=> setInput(e.target.value)
      }></input>
      <button onClick ={handlePost}>Post</button>
      <h2>Comments:</h2>
      {comments.map((comment,index)=>(
        <p key={index}>{comment}</p>
      ))}
    </div>
  )
};
export default App;











