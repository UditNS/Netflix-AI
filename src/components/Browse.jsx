import React, { use, useEffect } from 'react'
import Header from './Header'
import { options } from '../utils/constant';

function Browse() {
    const getPlayingMovies = async() => {
        const url = "https://api.themoviedb.org/3/movie/now_playing?page=1";
        const data = await fetch(url, options);
        const jsonData = await data.json();
        console.log(jsonData.results);
        //The api call is two times because of React.StrictMode in index.js which is only in dev mode to find potential problems in the app.
    };
    useEffect(() => {
        getPlayingMovies();
    }, []);
    return (
        <Header />
    )
}

export default Browse