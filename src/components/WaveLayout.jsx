import React from 'react';

const WaveLayout = ({ leftSlot, middleSlot, rightSlot }) => {
    return (
        <div className="relative w-full h-full min-h-screen flex overflow-hidden">

            {/* LEFT COLUMN - RED */}
            <div className="relative w-[30%] bg-pizzano-red z-10 flex flex-col pt-24 pb-10 pl-8 pr-12">
                <div className="relative z-20 h-full">
                    {leftSlot}
                </div>

                {/* Wave Separator Left->Middle */}
                <div className="absolute top-0 right-0 bottom-0 w-32 translate-x-1/2 z-10 pointer-events-none">
                    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full text-flame-green fill-current">
                        <path d="M0,0 C30,30 30,70 0,100 L100,100 L100,0 Z" />
                    </svg>
                </div>
            </div>

            {/* MIDDLE COLUMN - GREEN */}
            <div className="relative w-[40%] bg-flame-green z-0 flex flex-col pt-24 pb-10 px-8">
                <div className="relative z-20 h-full">
                    {middleSlot}
                </div>

                {/* Wave Separator Middle->Right */}
                <div className="absolute top-0 right-0 bottom-0 w-32 translate-x-1/2 z-10 pointer-events-none">
                    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full text-flame-yellow fill-current">
                        <path d="M0,0 C40,40 20,80 0,100 L100,100 L100,0 Z" />
                    </svg>
                </div>
            </div>

            {/* RIGHT COLUMN - YELLOW */}
            <div className="relative w-[30%] bg-flame-yellow flex flex-col pt-24 pb-10 pl-16 pr-8">
                <div className="relative z-20 h-full text-black">
                    {rightSlot}
                </div>
            </div>

            {/* Global Flame Overlay - Low opacity over Red section mostly */}
            <div className="absolute inset-y-0 left-0 w-[30%] pointer-events-none mix-blend-screen opacity-40 z-0">
                <div className="w-full h-full bg-gradient-to-t from-orange-500/20 via-transparent to-transparent"></div>
            </div>

        </div>
    );
};

export default WaveLayout;
