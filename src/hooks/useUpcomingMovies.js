import { options } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { setUpcomingMovies } from '../store/movieSlice.js';
import { useEffect } from 'react';

function useUpcomingMovies() {
    // fetching the movies from the TMDB API and storing them in the Redux store.
    const dispatch = useDispatch();
    const getUpcomingMovies = async() => {
        const url = "https://api.themoviedb.org/3/movie/upcoming?&page=1";
        const data = await fetch(url, options);
        const jsonData = await data.json();
        dispatch(setUpcomingMovies(jsonData.results));
        //The api call is two times because of React.StrictMode in index.js which is only in dev mode to find potential problems in the app.
    };
    useEffect(() => {
        getUpcomingMovies();
    }, []);
}

export default useUpcomingMovies