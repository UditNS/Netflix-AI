import { options } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { setPopularMovies } from '../store/movieSlice.js';
import { useEffect } from 'react';

function usePopularMovies() {
    // fetching the movies from the TMDB API and storing them in the Redux store.
    const dispatch = useDispatch();
    const getPopularMovies = async() => {
        const url = "https://api.themoviedb.org/3/movie/popular?&page=1";
        const data = await fetch(url, options);
        const jsonData = await data.json();
        dispatch(setPopularMovies(jsonData.results));
        //The api call is two times because of React.StrictMode in index.js which is only in dev mode to find potential problems in the app.
    };
    useEffect(() => {
        getPopularMovies();
    }, []);
}

export default usePopularMovies