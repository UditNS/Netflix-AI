import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nowPlayingMovies: null,
    trailer : null
};

export const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        setTrailer: (state, action) => {
            state.trailer = action.payload;
        }
    },
});

export const { setMovies, setTrailer } = movieSlice.actions;

export default movieSlice.reducer;