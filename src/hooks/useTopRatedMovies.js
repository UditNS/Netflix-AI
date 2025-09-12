import { options } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { setTopRatedMovies } from '../store/movieSlice.js';
import { useEffect } from 'react';

function useTopRatedMovies() {
    // fetching the movies from the TMDB API and storing them in the Redux store.
    const dispatch = useDispatch();
    const getTopRatedMovies = async() => {
        const url = "https://api.themoviedb.org/3/movie/top_rated?&page=1";
        const data = await fetch(url, options);
        const jsonData = await data.json();
        dispatch(setTopRatedMovies(jsonData.results));
        //The api call is two times because of React.StrictMode in index.js which is only in dev mode to find potential problems in the app.
    };
    useEffect(() => {
        getTopRatedMovies();
    }, []);
}

export default useTopRatedMovies