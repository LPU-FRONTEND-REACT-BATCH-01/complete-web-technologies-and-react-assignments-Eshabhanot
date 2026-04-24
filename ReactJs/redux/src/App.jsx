import React,{ useReducer } from 'react';
import Test from '../src/Compoments/Test';
import Products from '../src/Compoments/Products';
const App=()=>{

//  function reduce_func(state,action){
//   switch(action.type){
//     case "Increment": return{...state,count:state.count+1};
//     case "Decrement": return{...state,count:state.count-1};
//     case "ChangeName": return{...state,name:action.payload};
//     default:
//       return state;
//   }
//  }
//   let initalValue={
//     count:0,
//     name:"Esha"
//   };
//   const[state,dispatch]=useReducer(reduce_func,initalValue);

 
//   return(
//     <div>
//       <h3>State : {state.count}</h3>
//       <h3>Name: {state.name}</h3>
//       <button onClick={()=>dispatch({type:"Increment"})}>Increment</button>
//       <button onClick={()=>dispatch({type:"Decrement"})}>Decrement</button>
//       <button onClick={()=>dispatch({type:"ChangeName",payload:"Risha"})}>ChangeName</button>
//     </div>
//   )

return(
  <div>
  <Test/>
  <Products/>
  </div>
)
}
export default App;