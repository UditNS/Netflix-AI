import React from 'react'
import { useSelector } from 'react-redux'
import VideoPlayback from './VideoPlayback';
import VideoTitle from './VideoTitle';
function MainContainer() {
    const nowPlayingMovie = useSelector((state) => state.movies?.nowPlayingMovie)
    if(!nowPlayingMovie) return;
    
    const movieDisplay = nowPlayingMovie[0];
    const {original_title, overview} = movieDisplay;

    return (
    <>
        <VideoPlayback />
        <VideoTitle title = {original_title} overview = {overview}/>
    </>
    )
}

export default MainContainer