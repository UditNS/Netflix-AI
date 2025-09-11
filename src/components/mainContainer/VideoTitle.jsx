import React from 'react'

function VideoTitle({title, overview}) {
    return (
        <div className='text-white'>
            <h1 className='text-white'>{title}</h1>
            <p>{overview}</p>
            <div>
                <button className=' bg-green-400'>Play</button>
                <button>More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle