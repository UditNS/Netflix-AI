import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nowPlayingMovies: [],
};

export const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        
    },
});

export const { setMovies } = movieSlice.actions;

export default movieSlice.reducer;