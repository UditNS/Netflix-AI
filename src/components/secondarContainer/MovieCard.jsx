import React, { useState } from 'react'
import { BASE_IMAGE_URL } from '../../utils/constant'

function MovieCard({poster_path}) {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <div 
            className="relative transition-transform duration-300 ease-out cursor-pointer group mx-1"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                transform: isHovered ? 'scale(1.3)' : 'scale(1)',
                zIndex: isHovered ? 20 : 1,
                transformOrigin: 'center center'
            }}
        >
            <img 
                className='w-[160px] h-[240px] object-cover rounded-sm shadow-lg' 
                src={`${BASE_IMAGE_URL}${poster_path}`} 
                alt="Movie poster"
                loading="lazy"
            />
            
            {/* Netflix-style overlay on hover */}
            {isHovered && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-sm opacity-0 animate-fadeIn">
                    <div className="absolute bottom-0 left-0 right-0 p-2">
                        <div className="flex justify-center space-x-2 mb-2">
                            {/* Play Button */}
                            <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                                    <path d="M8 5V19L19 12L8 5Z" fill="black"/>
                                </svg>
                            </button>
                            
                            {/* Add Button */}
                            <button className="w-8 h-8 border-2 border-gray-400 rounded-full flex items-center justify-center hover:border-white transition-colors">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                            </button>
                            
                            {/* Like Button */}
                            <button className="w-8 h-8 border-2 border-gray-400 rounded-full flex items-center justify-center hover:border-white transition-colors">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                    <path d="M7 10V12C7 13.1046 7.89543 14 9 14H15C16.1046 14 17 13.1046 17 12V10C17 8.89543 16.1046 8 15 8H9C7.89543 8 7 8.89543 7 10Z"></path>
                                    <path d="M7 10L12 6L17 10"></path>
                                </svg>
                            </button>
                            
                            {/* More Info Button */}
                            <button className="w-8 h-8 border-2 border-gray-400 rounded-full flex items-center justify-center hover:border-white transition-colors">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                    <path d="M9 18L15 12L9 6"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default MovieCard