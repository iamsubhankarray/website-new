import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        add_to_cart: (state, action) => {

            state.push(action.payload)

        },
        remove_from_cart: (state, action) => {
            
             return state.filter(item=>item.id !== action.payload.id)
        }
    }
})
export default cartSlice.reducer
export const { add_to_cart, remove_from_cart } = cartSlice.actions