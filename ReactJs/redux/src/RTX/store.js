import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import CartItem from "./CartItem";

// global store for all containers
export const store =configureStore({
    reducer:{
      counter:counterSlice,
      cart:CartItem
    //   change:changeSlice
    }
})