import React, {useState, useEffect} from 'react'

function VideoTitle({title, overview}) {
    const [showMiddle, setShowMiddle] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowMiddle(false);
        }, 10000); // remove after 10s

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='absolute inset-0 text-white bg-gradient-to-tr from-black via-black/50 to-transparent flex flex-col justify-center pl-12 md:pl-16'>
            <div className="max-w-lg">
                <h1 className={`transition-all text-3xl md:text-5xl font-extrabold mb-4 duration-1000 ${
                    showMiddle ? "translate-y-0 " : "translate-y-16 "
                }`}>
                    {title}
                </h1>
                <p className='text-sm md:text-base opacity-90 mb-6 animate-[fadeout_10s_forwards] line-clamp-3'>
                    {overview}
                </p>
                <div className='flex space-x-4'>
                    <button className='px-4 md:px-6 py-2 flex items-center font-semibold text-sm md:text-xl bg-white hover:bg-gray-200 transition-colors duration-200 text-black rounded cursor-pointer'>
                        <svg fill="#000000" className='mr-2' height="18px" width="18px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xmlSpace="preserve">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier"> 
                                <path id="XMLID_308_" d="M37.728,328.12c2.266,1.256,4.77,1.88,7.272,1.88c2.763,0,5.522-0.763,7.95-2.28l240-149.999 c4.386-2.741,7.05-7.548,7.05-12.72c0-5.172-2.664-9.979-7.05-12.72L52.95,2.28c-4.625-2.891-10.453-3.043-15.222-0.4 C32.959,4.524,30,9.547,30,15v300C30,320.453,32.959,325.476,37.728,328.12z"></path> 
                            </g>
                        </svg>
                        Play
                    </button>
                    <button className='px-4 md:px-6 py-2 bg-gray-500/60 hover:bg-gray-500/80 transition-colors duration-200 rounded flex items-center font-semibold text-sm md:text-xl cursor-pointer backdrop-blur-sm'>
                        <svg className='mr-2' height="20px" width="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier"> 
                                <circle cx="12" cy="12" r="10" stroke="#ffffff" strokeWidth="1.5"></circle> 
                                <path d="M12 17V11" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path> 
                                <circle cx="1" cy="1" r="1" transform="matrix(1 0 0 -1 11 9)" fill="#ffffff"></circle> 
                            </g>
                        </svg>
                        More Info
                    </button>
                </div>
            </div>
        </div>
    )
}

export default VideoTitle