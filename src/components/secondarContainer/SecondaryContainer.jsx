import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

function SecondaryContainer() {
    const movies = useSelector((state) => state.movies)
    
    return (
        <div className="bg-black relative z-10 -mt-40 pt-4">
            <div className="space-y-8 pb-20">
                <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
                {/* Add more movie categories */}
                <MovieList title={"Popular"} movies={movies?.nowPlayingMovies} />
                <MovieList title={"Top Rated"} movies={movies?.nowPlayingMovies} />
                <MovieList title={"Upcoming"} movies={movies?.nowPlayingMovies} />
            </div>
        </div>
    )
}

export default SecondaryContainer
// This container contains multiple movie lists horizontally scrollable
// Each movie list contains multiple cards of movies
// Each card contains an image of the movie
// On clicking the card, the movie is played in the main container
