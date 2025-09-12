import React from 'react'


function VideoTitle({title, overview}) {
    return (
        <div className='text-white absolute top-1/2 p-4 md:p-8'>
            <h1 className='text-5xl'>{title}</h1>
            <p className='w-1/3'>{overview}</p>
            <div className='flex space-x-4 mt-4 '>
                <button className='px-6 py-2 flex items-center font-semibold text-md text-center bg-white hover:bg-gray-200/90 duration-200 text-black rounded-sm cursor-pointer'>
                    <svg fill="#000000" className='mr-2' height="18px" width="18px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_308_" d="M37.728,328.12c2.266,1.256,4.77,1.88,7.272,1.88c2.763,0,5.522-0.763,7.95-2.28l240-149.999 c4.386-2.741,7.05-7.548,7.05-12.72c0-5.172-2.664-9.979-7.05-12.72L52.95,2.28c-4.625-2.891-10.453-3.043-15.222-0.4 C32.959,4.524,30,9.547,30,15v300C30,320.453,32.959,325.476,37.728,328.12z"></path> </g></svg>
                    Play
                    </button>
                <button className='px-6 py-2 bg-gray-400/50 hover:bg-white/50 duration-200 rounded-sm flex items-center font-semibold text-md text-center cursor-pointer'>
                    <svg className='mr-2 font-bold' height="24px" width="24px"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="1"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="10" stroke="#ffffff" strokeWidth="1.5"></circle> <path d="M12 17V11" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path> <circle cx="1" cy="1" r="1" transform="matrix(1 0 0 -1 11 9)" fill="#ffffff"></circle> </g></svg>
                    More Info
                </button>
            </div>
        </div>
    )
}

export default VideoTitle