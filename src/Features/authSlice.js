import { createSlice } from "@reduxjs/toolkit"

const initialState={
    logged:false,
    token:''
}

export const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        LoggedIn:(state, action)=>{
            state.logged=true;
            state.token=action.payload
        },
        LoggedOut:(state)=>{
            state.logged=false;
            state.token=''
            localStorage.clear()
        },

    }
})

export const {LoggedIn, LoggedOut} = authSlice.actions

export default authSlice.reducer