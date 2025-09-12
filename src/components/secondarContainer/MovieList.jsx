import React, { useRef, useState, useEffect } from 'react'
import MovieCard from './MovieCard'

function MovieList({title, movies}) {
    const scrollRef = useRef(null);
    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    
    // Netflix scrolls exactly the width of visible cards (about 6 cards)
    const getScrollAmount = () => {
        if (scrollRef.current) {
            return scrollRef.current.clientWidth - 60; // Full width minus some padding
        }
        return 1000; // fallback
    };
    
    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: -getScrollAmount(),
                behavior: 'smooth'
            });
        }
    };
    
    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: getScrollAmount(),
                behavior: 'smooth'
            });
        }
    };
    
    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            
            setShowLeftButton(scrollLeft > 5);
            setShowRightButton(scrollLeft < scrollWidth - clientWidth - 5);
        }
    };
    
    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', handleScroll);
            handleScroll(); // Initial check
            
            return () => scrollContainer.removeEventListener('scroll', handleScroll);
        }
    }, [movies]);

    if (!movies || movies.length === 0) {
        return null;
    }

    return (
        <div className='relative mb-6 mx-2'>
            {/* Title */}
            <h2 className='text-white text-xl font-medium mb-2 px-12'>
                {title}
            </h2>
            
            {/* Container */}
            <div 
                className="relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Left Button */}
                <button 
                    onClick={scrollLeft}
                    className={`absolute left-0 top-0 bottom-0 w-12 z-20 bg-black/20 hover:bg-black/60 
                            flex items-center justify-center transition-all duration-300 
                            ${showLeftButton && isHovered ? 'opacity-100' : 'opacity-0'}`}
                    style={{ backdropFilter: 'blur(2px)' }}
                >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                        <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>

                {/* Movies Scroll Container */}
                <div 
                    ref={scrollRef}
                    className='flex gap-1 overflow-x-scroll px-12 py-4'
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                        WebkitOverflowScrolling: 'touch'
                    }}
                >
                    {movies.map((movie, index) => (
                        <div 
                            key={movie.id || index}
                            className="flex-none"
                        >
                            <MovieCard poster_path={movie?.poster_path} />
                        </div>
                    ))}
                </div>

                {/* Right Button */}
                <button 
                    onClick={scrollRight}
                    className={`absolute right-0 top-0 bottom-0 w-12 z-20 bg-black/20 hover:bg-black/60 
                            flex items-center justify-center transition-all duration-300 
                            ${showRightButton && isHovered ? 'opacity-100' : 'opacity-0'}`}
                    style={{ backdropFilter: 'blur(2px)' }}
                >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                        <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                
                {/* Left Gradient */}
                <div 
                    className={`absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none transition-opacity duration-300 ${
                        showLeftButton && isHovered ? 'opacity-100' : 'opacity-0'
                    }`}
                />
                
                {/* Right Gradient */}
                <div 
                    className={`absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none transition-opacity duration-300 ${
                        showRightButton && isHovered ? 'opacity-100' : 'opacity-0'
                    }`}
                />
            </div>
        </div>
    )
}

export default MovieList