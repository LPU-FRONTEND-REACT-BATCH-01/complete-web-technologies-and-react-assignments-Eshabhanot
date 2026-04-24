import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset,change } from "../RTX/counterSlice";

const Test=()=>{
    const count =useSelector(state=>state.counter.count)
      const name =useSelector(state=>state.counter.name)
      
    const dispatch=useDispatch()
    console.log(count)
    return(
        <div>
            <h1>{count}</h1>
            <h1>{name}</h1>
            <button onClick={()=>dispatch(increment())}>increment</button>
            <button onClick={()=>dispatch(decrement())}>decrement</button>
            <button onClick={()=>dispatch(reset())}>reset</button>
           <button onClick={() => dispatch(change("chota bheem"))}>change </button>
        </div>
    )

}
export default Test