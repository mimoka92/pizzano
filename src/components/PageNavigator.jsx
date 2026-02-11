import React, { useState } from 'react';

const PageNavigator = ({ direction, onClick }) => {
    const isRight = direction === 'right';

    return (
        <div
            onClick={onClick}
            className={`fixed top-0 bottom-0 ${isRight ? 'right-0' : 'left-0'} w-16 md:w-24 z-50 
                        cursor-pointer flex items-center justify-center transition-all duration-300 group
                        hover:bg-white/5`}
        >
            <div className={`text-5xl md:text-6xl text-white transition-all duration-300 opacity-0 
                            group-hover:opacity-100 group-hover:text-pizzano-green group-hover:scale-125 
                            drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]
                            ${isRight ? 'translate-x-4 group-hover:translate-x-0' : '-translate-x-4 group-hover:translate-x-0'}`}>
                {isRight ? '›' : '‹'}
            </div>

            {/* Subtle pulsate indicator */}
            <div className={`absolute bottom-1/2 ${isRight ? 'right-2' : 'left-2'} w-1 h-32 
                            bg-gradient-to-b from-transparent via-white/10 to-transparent 
                            rounded-full opacity-50 group-hover:opacity-100 transition-opacity`}>
            </div>
        </div>
    );
};

export default PageNavigator;
