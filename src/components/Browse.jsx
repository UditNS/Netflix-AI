import React from 'react'
import Header from './Header'
import MainContainer from './mainContainer/MainContainer'
import SecondaryContainer from './secondarContainer/SecondaryContainer'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'

function Browse() {
    useNowPlayingMovies();
    return (
        <div>
            <Header />
            <MainContainer />
            {/* Add proper spacing for secondary container */}
            <div className="relative -mt-32 z-20">
                <SecondaryContainer />
            </div>
        </div>
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