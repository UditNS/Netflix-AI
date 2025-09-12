import React from 'react'
import MovieCard from './MovieCard'

function MovieList({title, movies}) {
    console.log(movies);
    return (
        <div className='relative'>
            <h1 className='text-white'>{title}</h1>
            {movies?.map((item) => {
                return <MovieCard key = {item.id} poster_path={item?.poster_path}/>
            })} 
        </div>
    )
}

export default MovieList