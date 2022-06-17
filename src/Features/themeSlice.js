import { createSlice } from "@reduxjs/toolkit"

const initialState={
    theme:true
}

export const themeSlice=createSlice({
    name:'theme',
    initialState,
    reducers:{
        handleDarkTheme:(state, action)=>{
            state.theme=action.payload;
        }
    }
})

export const {handleDarkTheme} = themeSlice.actions

export default themeSlice.reducer