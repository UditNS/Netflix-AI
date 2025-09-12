import React from 'react'
import { useSelector } from 'react-redux'
import VideoPlayback from './VideoPlayback';
import VideoTitle from './VideoTitle';
const MainContainer = () => {
    const nowPlayingMovie = useSelector((state) => state.movies?.nowPlayingMovies)
    if(!nowPlayingMovie) return <div className='text-white'>Loading...</div>;

    const movieDisplay =  nowPlayingMovie[0];
    const {id, original_title, overview} = movieDisplay;

    return (
    <>
        <VideoPlayback id={id}/>
        <VideoTitle title = {original_title} overview = {overview}/>
    </>
    )
}

export default MainContainer