import React, { useState, useEffect } from 'react';

const FullScreenButton = () => {
    const [isFullscreen, setIsFullscreen] = useState(false);

    useEffect(() => {
        const handleChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };

        document.addEventListener('fullscreenchange', handleChange);
        return () => document.removeEventListener('fullscreenchange', handleChange);
    }, []);

    const toggleFullscreen = async () => {
        try {
            if (!document.fullscreenElement) {
                await document.documentElement.requestFullscreen();
            } else {
                if (document.exitFullscreen) {
                    await document.exitFullscreen();
                }
            }
        } catch (err) {
            console.error("Error attempting to enable fullscreen:", err);
        }
    };

    // User requested button to disappear after clicking
    if (isFullscreen) return null;

    return (
        <button
            onClick={toggleFullscreen}
            className="fixed bottom-4 right-4 z-50 bg-black/80 text-pizzano-green border border-pizzano-green p-3 rounded-full hover:bg-pizzano-green hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(0,230,118,0.3)] group opacity-70 hover:opacity-100"
            title="Enter Fullscreen"
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>

            <span className="absolute right-full mr-2 bg-black/90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/20">
                Full Screen Mode
            </span>
        </button>
    );
};

export default FullScreenButton;
