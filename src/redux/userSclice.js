import { createSlice } from "@reduxjs/toolkit";
export  const userslice = createSlice({
    name:"user",
    initialState:[],
    reducers:{
        logIn_user:(state,action)=>{
           return state.push(action.payload)
            

        }
    }
    
})
export default userslice.reducer
export const {logIn_user} =userslice.actions 