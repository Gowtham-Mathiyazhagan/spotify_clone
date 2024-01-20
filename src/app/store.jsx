import { configureStore } from "@reduxjs/toolkit";
import soptifyReducer from "../features/spotifyAction/spotifySlice"
export default configureStore (
	{
		reducer :{
             spotify : soptifyReducer,
		}
	}
)