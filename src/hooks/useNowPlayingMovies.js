import { options } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { setMovies } from '../store/movieSlice.js';
import { useEffect } from 'react';

function useNowPlayingMovies() {
    // fetching the movies from the TMDB API and storing them in the Redux store.
    const dispatch = useDispatch();
    const getPlayingMovies = async() => {
        const url = "https://api.themoviedb.org/3/movie/now_playing?page=1";
        const data = await fetch(url, options);
        const jsonData = await data.json();
        dispatch(setMovies(jsonData.results));
        console.log(jsonData.results);
        //The api call is two times because of React.StrictMode in index.js which is only in dev mode to find potential problems in the app.
    };
    useEffect(() => {
        getPlayingMovies();
    }, []);
}

export default useNowPlayingMovies