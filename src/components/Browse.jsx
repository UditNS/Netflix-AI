import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'

function Browse() {
    useNowPlayingMovies();
    return (
        
        <Header />
        /* 
            MainContainer
            - VideoBackground
            - VideoTitle
            SecondaryContainer
            - MovieList * n  (horizontally scrollable)
                -Card * m (m movies in each list)

        */
    )
}

export default Browse