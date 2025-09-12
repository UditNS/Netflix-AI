import React from 'react'
import { BASE_IMAGE_URL } from '../../utils/constant'

function MovieCard({poster_path}) {
    return (
        <div>
            <img className=' text-white w-48 ' src={`${BASE_IMAGE_URL}${poster_path}`} alt="Movie image" />
        </div>
    )
}

export default MovieCard