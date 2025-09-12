import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nowPlayingMovies: null,
    nowPopularMovies: null,
    nowTopRatedMovies: null,
    nowUpcomingMovies: null,
    trailer : null
};

export const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        setPopularMovies: (state, action) => {
            state.nowPopularMovies = action.payload;
        },
        setTopRatedMovies: (state, action) => {
            state.nowTopRatedMovies = action.payload;
        },
        setUpcomingMovies: (state, action) => {
            state.nowUpcomingMovies = action.payload;
        },
        setTrailer: (state, action) => {
            state.trailer = action.payload;
        }
    },
});

export const { setMovies, setTrailer, setPopularMovies, setTopRatedMovies, setUpcomingMovies } = movieSlice.actions;

export default movieSlice.reducer;