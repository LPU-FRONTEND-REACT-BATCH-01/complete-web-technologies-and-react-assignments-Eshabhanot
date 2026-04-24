import { createSlice } from "@reduxjs/toolkit";

const cartItem=createSlice({
    name:'cart',
    initialState:{
        products:[]
    },
    reducers:{
        addToCart:(state,action)=>{
            state.products.push(action.payload)
        },
        removeToCart:(state,action)=>{
            state.products.filter(
                 item => item.id !== action.payload
            )

            
        }
    }
})
export default cartItem.reducer;
export const {addToCart,removeToCart} = cartItem.actions;