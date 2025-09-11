import React from 'react'
import Header from './Header'
import MainContainer from './mainContainer/MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'

function Browse() {
    useNowPlayingMovies();
    return (
        <>
            <Header />
            <MainContainer />
            <SecondaryContainer />
        </>
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