import React from 'react'
import useVideo from '../../hooks/useVideo';
import { useDispatch, useSelector } from 'react-redux';
import { setTrailer } from '../../store/movieSlice';

function VideoPlayback({id}) {
    useVideo(id);
    const selector = useSelector((state) => state.movies?.trailer)
    if(!selector) return <div className='text-white'>Loading...</div>;
    return (
        <div className=''><iframe className='w-full aspect-video absolute'  src={`https://www.youtube.com/embed/${selector.key}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&loop=1`
} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></div>
    )
}    

export default VideoPlayback