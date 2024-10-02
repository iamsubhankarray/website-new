import { configureStore } from "@reduxjs/toolkit";
import cartSlice from'./cartSlice'
import { userslice } from "./userSclice";
const store =configureStore({
    reducer:{
        cart:cartSlice,
        user:userslice,
    }
})
export default store