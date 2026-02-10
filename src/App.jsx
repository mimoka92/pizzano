import React, { useEffect, useState } from 'react';
import SubtleBackground from './components/SubtleBackground';
import MenuSection from './components/MenuSection';
import FullScreenButton from './components/FullScreenButton';
import { menuData } from './data/menuData';

function App() {
  const redColumnItems = menuData.categories.find(c => c.title === 'BURGERS');

  const formatPrice = (p) => {
    if (!p || p === '-') return '';
    const numValues = p.replace(/[^\d.]/g, '');
    return `£${Number(numValues).toFixed(2)}`;
  };

  // Responsive Scale Logic
  // On Mobile: No scale, Auto height, Scroll.
  // On Desktop/TV: Scale to fit, Hidden overflow, Fixed height.

  return (
    <div className="min-h-screen w-screen relative text-white font-sans select-none overflow-x-hidden md:h-screen md:overflow-hidden">
      <SubtleBackground />
      <FullScreenButton />

      {/* 
         TV TRANSFORM CONTAINER
         - Mobile: No transform, full width/height auto, Scrollable
         - Desktop (md+): Scale 0.85 (adjusted to fit better), Centered
      */}
      <div className="relative z-10 w-full min-h-screen md:h-full flex flex-col items-center 
                      md:justify-center md:scale-[0.85] md:origin-center transition-transform duration-300">

        {/* Header */}
        <header className="text-center py-6 md:pb-4 md:pt-0 shrink-0 w-full mb-4 md:mb-2 relative">
          <div className="relative inline-block">
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-white drop-shadow-[0_0_15px_rgba(0,230,118,0.8)] leading-none flex justify-center"
              style={{ textShadow: '4px 4px 0px #000, 0 0 20px #00e676' }}>
              {'Pizzano'.split('').map((char, index) => (
                <span key={index} style={{ animation: `wave 3s ease-in-out infinite`, animationDelay: `${index * 0.2}s`, display: 'inline-block' }}>
                  {char}
                </span>
              ))}
            </h1>
            <span className="text-2xl md:text-3xl text-white font-handwriting tracking-wide block relative z-10 -mt-2 rotate-[-2deg]"
              style={{ textShadow: '2px 2px 0px #000' }}>
              Made with love
            </span>
          </div>
          <style>{`
             @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
             .font-handwriting { font-family: 'Dancing Script', cursive; }
             @keyframes wave {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-15px); }
             }
           `}</style>
        </header>

        {/* Content Content - Responsive Grid */}
        <main className="w-full flex-grow px-4 pb-12 md:px-0 md:pb-0 md:min-h-0">
          <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">

            {/* --------------------- */}
            {/* LEFT COLUMN - BURGERS */}
            {/* --------------------- */}
            <div className="flex flex-col md:h-full bg-black/60 backdrop-blur-sm rounded-xl border border-white/10 p-5 md:p-6 shadow-2xl order-1">
              <h2 className="text-4xl md:text-3xl font-black text-pizzano-green mb-2 md:mb-1 border-b-2 border-green-700 uppercase tracking-tighter shrink-0">
                BURGERS
              </h2>
              <div className="flex justify-end text-green-200 font-bold text-xs md:text-[10px] mb-2 md:mb-1 pr-1 tracking-wider border-b border-white/10 pb-0.5 shrink-0">
                <div className="w-14 md:w-12 text-right"></div>
                <div className="w-14 md:w-12 text-right">+CHIPS</div>
              </div>

              <div className="flex flex-col justify-evenly space-y-2 md:space-y-0 md:flex-grow">
                {redColumnItems.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-baseline border-b border-white/10 pb-1 md:pb-[1px] last:border-0 last:pb-0">
                    <span className="text-base md:text-[0.9rem] font-bold uppercase tracking-tight text-white/95 truncate pr-1">{item.name}</span>
                    <div className="flex w-28 md:w-24 justify-end font-black text-lg md:text-[1rem] text-pizzano-green tabular-nums shrink-0">
                      <div className="w-14 md:w-12 text-right">{formatPrice(item.price)}</div>
                      <div className="w-14 md:w-12 text-right text-white">
                        {item.priceNote && item.priceNote.includes('with chips')
                          ? formatPrice(item.priceNote.match(/([\d.]+)/)[1])
                          : ''}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ------------------------------------------- */}
            {/* MIDDLE COLUMN - KEBABS, CHICKEN, DRINKS, DESERTS */}
            {/* ------------------------------------------- */}
            <div className="flex flex-col md:h-full bg-black/60 backdrop-blur-sm rounded-xl border border-white/10 p-5 md:p-6 shadow-2xl space-y-8 md:space-y-4 order-2">

              {/* KEBABS */}
              <div className="flex-grow flex flex-col">
                <div className="flex justify-between items-end border-b-2 border-pizzano-green mb-2 md:mb-1 shrink-0">
                  <h2 className="text-3xl md:text-2xl font-black text-pizzano-green uppercase tracking-tighter">KEBABS</h2>
                  <div className="flex w-28 md:w-24 justify-end text-xs md:text-[10px] font-bold text-white/80 pb-0.5">
                    <div className="w-14 md:w-12 text-right">SML</div>
                    <div className="w-14 md:w-12 text-right">LRG</div>
                  </div>
                </div>
                <div className="flex flex-col justify-evenly space-y-2 md:space-y-0 md:flex-grow">
                  {menuData.categories.find(c => c.title === 'KEBABS').items.map((item, i) => {
                    const small = item.price.includes('Small') ? item.price.match(/Small\s*([\d.]+)/)?.[1] : item.price;
                    const large = item.largePrice || (item.price.includes('Large') ? item.price.match(/Large\s*([\d.]+)/)?.[1] : null);
                    return (
                      <div key={i} className="flex justify-between items-baseline border-b border-white/10 pb-1 md:pb-[1px] last:border-0">
                        <span className="text-base md:text-[0.85rem] font-bold uppercase tracking-tight text-white/95">{item.name}</span>
                        <div className="flex w-28 md:w-24 justify-end font-black text-lg md:text-[0.95rem] text-white tabular-nums">
                          <div className="w-14 md:w-12 text-right text-pizzano-green">{formatPrice(small)}</div>
                          <div className="w-14 md:w-12 text-right text-white">{formatPrice(large)}</div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* CHICKEN - Custom Render */}
              <div className="shrink-0">
                <div className="flex justify-between items-end border-b-2 border-pizzano-green mb-2 md:mb-1 shrink-0">
                  <h2 className="text-3xl md:text-2xl font-black text-pizzano-green uppercase tracking-tighter">CHICKEN</h2>
                  <div className="flex justify-end text-green-200 font-bold text-xs md:text-[10px] mb-0.5 pr-1 tracking-wider">
                    <div className="w-14 md:w-12 text-right"></div>
                    <div className="w-14 md:w-12 text-right">+CHIPS</div>
                  </div>
                </div>
                <div className="flex flex-col space-y-1 md:space-y-[1px]">
                  {menuData.categories.find(c => c.title === 'CHICKEN').items.map((item, i) => (
                    <div key={i} className="flex justify-between items-baseline border-b border-white/10 pb-1 md:pb-[1px] last:border-0">
                      <span className="text-base md:text-[0.85rem] font-bold uppercase tracking-tight text-white/95 truncate pr-1">{item.name}</span>
                      <div className="flex w-28 md:w-24 justify-end font-black text-lg md:text-[0.95rem] text-pizzano-green tabular-nums shrink-0">
                        <div className="w-14 md:w-12 text-right">{formatPrice(item.price)}</div>
                        <div className="w-14 md:w-12 text-right text-white">
                          {item.priceNote && item.priceNote.includes('with chips')
                            ? formatPrice(item.priceNote.match(/([\d.]+)/)[1])
                            : ''}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* MOVED: Drinks & Deserts to Middle Column */}
              <div className="shrink-0 pt-2">
                <MenuSection title="DRINKS" items={menuData.categories.find(c => c.title === 'DRINKS').items} variant="default" />
              </div>
              <div className="shrink-0">
                <MenuSection title="DESERTS" items={menuData.categories.find(c => c.title === 'DESERTS').items} variant="default" />
              </div>

            </div>

            {/* --------------------- */}
            {/* RIGHT COLUMN - EXTRAS & WRAPS */}
            {/* --------------------- */}
            <div className="flex flex-col md:h-full bg-black/60 backdrop-blur-sm rounded-xl border border-white/10 p-5 md:p-6 shadow-2xl justify-between order-3">
              <div className="flex-grow flex flex-col">
                <MenuSection
                  title="EXTRAS"
                  items={menuData.categories.find(c => c.title === 'EXTRAS').items}
                  variant="default"
                  showHeaders={true}
                  headers={['SML', 'LRG']}
                />
              </div>

              {/* MOVED: Wraps to Right Column (Bottom) */}
              <div className="shrink-0 mt-6 md:mt-2">
                <MenuSection title="WRAPS" items={menuData.categories.find(c => c.title === 'WRAPS').items} variant="default" />
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
