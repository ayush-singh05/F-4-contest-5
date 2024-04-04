
import { createSlice } from "@reduxjs/toolkit";

const initialState = {value : ''} ;

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        movieGenere: (state,action) => {
            state.value = action.payload.value
        }
    }
})

export const { movieGenere } = movieSlice.actions

export default movieSlice.reducer