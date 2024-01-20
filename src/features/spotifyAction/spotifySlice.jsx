import { createSlice } from "@reduxjs/toolkit";
let  initialState={
	value : 10,
}
const spotifySlice = createSlice({
	name : "spotify",
	initialState,
	reducers :{
        increment : (state, action)=>{
           state.value=action.payload
		}
	}
})
export const {increment} = spotifySlice.actions

export default spotifySlice.reducer