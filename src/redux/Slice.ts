import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        email: null,
        token: null
    },
    
    reducers:{
        changeEmail: (state, action) => {
            state.email = action.payload
        },
        changeToken: (state, action) => {
            state.token = action.payload
        },
    }
})

export const { changeEmail } = authSlice.actions;
export const { changeToken } = authSlice.actions;
export default authSlice.reducer;