import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

function SecondaryContainer() {
    const movies = useSelector((state) => state.movies)
  return (
    <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
  )
}
// This container contains multiple movie lists horizontally scrollable
// Each movie list contains multiple cards of movies
// Each card contains an image of the movie
// On clicking the card, the movie is played in the main container
export default SecondaryContainer