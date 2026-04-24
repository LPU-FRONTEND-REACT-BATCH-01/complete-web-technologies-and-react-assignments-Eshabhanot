// write the reduce fxn and name from the slice
//combines state,action,reducers
import { createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name:"Counter",
    initialState:{
        count:0,
        name:"No value"
    },
    reducers:{
        //state logic will be written here
        increment:(state,action)=>{
               state.count=state.count+1
        },
        decrement:(state,action)=>{
               state.count=state.count-1
        },
        reset:(state,action)=>{
               state.count=0
        },
        change:(state,action)=>{
            state.name=action.payload
        }
    }
})
export default counterSlice.reducer;
export const {increment,decrement,reset,change}=counterSlice.actions;