import React, { use } from 'react'
import useVideo from '../../hooks/useVideo';
import { useDispatch, useSelector } from 'react-redux';
import { setTrailer } from '../../store/movieSlice';

function VideoPlayback({id}) {
    useVideo(id);
    const selector = useSelector((state) => state.movies?.trailer)
    if(!selector) return <div className='text-white'>Loading...</div>;
    
    // const dispatch = useDispatch();
    // const selector = useSelector((state) => state.movies?.trailer);
    // // fetching trailer video
    // const res = useVideo(id);
    // if(res)  {
    //     const trailer = res.filter((item) => (
    //         item.type === "Trailer" && item.name ==='Official Trailer' 
    //     ));
    //     // it might also happen that the trailer is not named 'Official Trailer' or there is no trailer at all
    //     // in that case we will just take the first video available
    //     if(trailer.length === 0) {
    //         trailer.push(res[0]);
    //     }
    //     dispatch(setTrailer(trailer[0]));
    // }
    // if(!res) return <div className='text-white'>Loading...</div>; 

    return (
        <div className=''><iframe className='w-full' width="560" height="700" src={`https://www.youtube.com/embed/${selector.key}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></div>
    )
}    

export default VideoPlayback