import React, { useEffect, useState } from 'react';
import SubtleBackground from './components/SubtleBackground';
import MenuSection from './components/MenuSection';
import PageNavigator from './components/PageNavigator';
import { menuData } from './data/menuData';
import { menuData2 } from './data/menuData2';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [displayPage, setDisplayPage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isLogoVisible, setIsLogoVisible] = useState(true);

  const handlePageChange = (newPage) => {
    if (newPage === currentPage || isTransitioning) return;

    setIsTransitioning(true);
    setIsLogoVisible(false);

    setTimeout(() => {
      setDisplayPage(newPage);
      setCurrentPage(newPage);
      setIsTransitioning(false);
      setTimeout(() => setIsLogoVisible(true), 700);
    }, 1100);
  };

  // Wall-Clock Synchronization Loop (Heartbeat Swap)
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      // Exactly at the start of every minute, flip the page
      if (now.getSeconds() === 0 && !isTransitioning) {
        const nextP = currentPage === 1 ? 2 : 1;
        handlePageChange(nextP);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [currentPage, isTransitioning]);

  const redColumnItems = menuData.categories.find(c => c.title === 'BURGERS');

  const formatPrice = (p) => {
    if (!p || p === '-') return '';
    const numValues = String(p).replace(/[^\d.]/g, '');
    if (!numValues) return p;
    return `£${Number(numValues).toFixed(2)}`;
  };

  return (
    <div className="min-h-screen w-screen relative text-white font-sans select-none overflow-x-hidden md:h-screen md:overflow-hidden">
      <SubtleBackground />

      {/* Navigation Arrows */}
      {currentPage === 1 && !isTransitioning && (
        <PageNavigator direction="right" onClick={() => handlePageChange(2)} />
      )}
      {currentPage === 2 && !isTransitioning && (
        <PageNavigator direction="left" onClick={() => handlePageChange(1)} />
      )}

      {/* 
         TV TRANSFORM CONTAINER
      */}
      <div className="relative z-10 w-full min-h-screen md:h-full flex flex-col items-center 
                      md:justify-center md:scale-[0.85] md:origin-center transition-transform duration-300">

        {/* Header - Sequence: Appears after panels */}
        <header className={`text-center py-6 md:pb-4 md:pt-0 shrink-0 w-full mb-4 md:mb-2 relative z-20 transition-all duration-1000 cubic-bezier(0.34, 1.56, 0.64, 1) ${isLogoVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-20 scale-50'}`}>
          <div className="relative inline-block">
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-white drop-shadow-[0_0_15px_rgba(0,230,118,0.8)] leading-none flex justify-center"
              style={{ textShadow: '4px 4px 0px #000, 0 0 20px #00e676' }}>
              {'Pizzano'.split('').map((char, index) => (
                <span key={index} style={{ animation: `wave 4.5s ease-in-out infinite`, animationDelay: `${index * 0.3}s`, display: 'inline-block' }}>
                  {char}
                </span>
              ))}
            </h1>
            <span className="text-2xl md:text-3xl text-white font-handwriting tracking-wide block relative z-10 -mt-2 rotate-[-2deg]"
              style={{
                textShadow: '2px 2px 0px #000',
                animation: 'pulse-scale 2s ease-in-out infinite'
              }}>
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
             @keyframes fall-in {
                0% { transform: translateY(-40px) scale(0.95); opacity: 0; }
                100% { transform: translateY(0) scale(1); opacity: 1; }
             }
           `}</style>
        </header>

        {/* Content Content - Responsive Transition Container */}
        <main className="w-full flex-grow md:min-h-0 relative">

          <div className="w-full h-full">

            {displayPage === 1 ? (
              /* PAGE 1: ORIGINAL MENU */
              <div key={displayPage} className="w-full h-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 px-4 pb-12 md:px-0 md:pb-0">

                {/* LEFT COLUMN - BURGERS */}
                <div className={`flex flex-col md:h-[calc(100%+7rem)] bg-black/60 backdrop-blur-sm rounded-xl border border-white/10 p-5 md:p-6 shadow-2xl order-1 md:-mt-28 transition-all duration-1000 ease-in ${isTransitioning ? 'translate-y-[150vh] -translate-x-12 rotate-12 skew-x-6 opacity-0 delay-0' : 'animate-[fall-in_0.7s_cubic-bezier(0.34,1.56,0.64,1)_0ms_forwards]'}`}>
                  <div className="flex justify-between items-end border-b-2 border-green-700 mb-2 md:mb-1 shrink-0">
                    <h2 className="text-4xl md:text-3xl font-black text-pizzano-green uppercase tracking-tighter">
                      BURGERS
                    </h2>
                    <div className="flex justify-end text-green-200 font-bold text-xs md:text-[10px] w-44 pb-0.5 pr-1 tracking-wider">
                      <div className="w-14 text-right"></div>
                      <div className="w-14 text-right">+CHIPS</div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-evenly space-y-2 md:space-y-1 md:flex-grow">
                    {redColumnItems.items.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-baseline border-b border-white/25 pb-1 md:pb-[1px] last:border-0 last:pb-0">
                        <span className="text-base md:text-[0.9rem] font-bold uppercase tracking-tight text-white/95 truncate pr-1">{item.name}</span>
                        <div className="flex w-44 justify-end font-black text-lg md:text-[1rem] text-pizzano-green tabular-nums shrink-0">
                          <div className="w-14 text-right">{formatPrice(item.price)}</div>
                          <div className="w-14 text-right text-white">
                            {item.priceNote && item.priceNote.includes('with chips')
                              ? formatPrice(item.priceNote.match(/([\d.]+)/)[1])
                              : ''}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* MIDDLE COLUMN */}
                <div className={`flex flex-col md:h-full bg-black/60 backdrop-blur-sm rounded-xl border border-white/10 p-5 md:p-6 shadow-2xl space-y-8 md:space-y-4 order-2 transition-all duration-1000 ease-in ${isTransitioning ? 'translate-y-[150vh] translate-x-4 -rotate-6 -skew-x-3 opacity-0 delay-[150ms]' : 'animate-[fall-in_0.7s_cubic-bezier(0.34,1.56,0.64,1)_150ms_forwards] opacity-0'}`}>
                  <div className="flex-grow flex flex-col">
                    <div className="flex justify-between items-end border-b-2 border-green-700 mb-2 md:mb-1 shrink-0">
                      <h2 className="text-3xl md:text-2xl font-black text-pizzano-green uppercase tracking-tighter">KEBABS</h2>
                      <div className="flex w-44 justify-end text-xs md:text-[10px] font-bold text-white/80 pb-0.5">
                        <div className="w-14 text-right">SML</div>
                        <div className="w-14 text-right">LRG</div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-evenly space-y-2 md:space-y-1 md:flex-grow">
                      {menuData.categories.find(c => c.title === 'KEBABS').items.map((item, i) => {
                        const small = item.price.includes('Small') ? item.price.match(/Small\s*([\d.]+)/)?.[1] : item.price;
                        const large = item.largePrice || (item.price.includes('Large') ? item.price.match(/Large\s*([\d.]+)/)?.[1] : null);
                        return (
                          <div key={i} className="flex justify-between items-baseline border-b border-white/25 pb-1 md:pb-[1px] last:border-0">
                            <span className="text-base md:text-[0.85rem] font-bold uppercase tracking-tight text-white/95">{item.name}</span>
                            <div className="flex w-44 justify-end font-black text-lg md:text-[0.95rem] text-white tabular-nums">
                              <div className="w-14 text-right text-pizzano-green">{formatPrice(small)}</div>
                              <div className="w-14 text-right text-white">{formatPrice(large)}</div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  <div className="shrink-0">
                    <div className="flex justify-between items-end border-b-2 border-green-700 mb-2 md:mb-1 shrink-0">
                      <h2 className="text-3xl md:text-2xl font-black text-pizzano-green uppercase tracking-tighter">CHICKEN</h2>
                      <div className="flex justify-end text-green-200 font-bold text-xs md:text-[10px] w-44 mb-0.5 pr-1 tracking-wider">
                        <div className="w-14 text-right"></div>
                        <div className="w-14 text-right">+CHIPS</div>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-1 md:space-y-1">
                      {menuData.categories.find(c => c.title === 'CHICKEN').items.map((item, i) => (
                        <div key={i} className="flex justify-between items-baseline border-b border-white/25 pb-1 md:pb-[1px] last:border-0">
                          <span className="text-base md:text-[0.85rem] font-bold uppercase tracking-tight text-white/95 truncate pr-1">{item.name}</span>
                          <div className="flex w-44 justify-end font-black text-lg md:text-[0.95rem] text-pizzano-green tabular-nums shrink-0">
                            <div className="w-14 text-right">{formatPrice(item.price)}</div>
                            <div className="w-14 text-right text-white">
                              {item.priceNote && item.priceNote.includes('with chips')
                                ? formatPrice(item.priceNote.match(/([\d.]+)/)[1])
                                : ''}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="shrink-0 pt-2">
                    <MenuSection title="DRINKS" items={menuData.categories.find(c => c.title === 'DRINKS').items} variant="default" />
                  </div>
                  <div className="shrink-0">
                    <MenuSection title="DESERTS" items={menuData.categories.find(c => c.title === 'DESERTS').items} variant="default" />
                  </div>
                </div>

                {/* RIGHT COLUMN */}
                <div className={`flex flex-col md:h-[calc(100%+7rem)] bg-black/60 backdrop-blur-sm rounded-xl border border-white/10 p-5 md:p-6 shadow-2xl justify-start space-y-12 order-3 md:-mt-28 transition-all duration-1000 ease-in ${isTransitioning ? 'translate-y-[150vh] translate-x-12 rotate-[20deg] skew-x-[-6deg] opacity-0 delay-[300ms]' : 'animate-[fall-in_0.7s_cubic-bezier(0.34,1.56,0.64,1)_300ms_forwards] opacity-0'}`}>
                  <div className="flex-grow flex flex-col">
                    <MenuSection
                      title="EXTRAS"
                      items={menuData.categories.find(c => c.title === 'EXTRAS').items}
                      variant="default"
                      showHeaders={true}
                      headers={['SML', 'LRG']}
                      compact={true}
                    />
                  </div>
                  <div className="shrink-0">
                    <MenuSection title="WRAPS" items={menuData.categories.find(c => c.title === 'WRAPS').items} variant="default" />
                  </div>
                </div>
              </div>
            ) : (
              /* PAGE 2: NEW MENU (PIZZAS, DEALS, etc.) */
              <div key={displayPage} className="w-full h-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 px-4 pb-12 md:px-0 md:pb-0">

                {/* LEFT COLUMN - PIZZAS */}
                <div className={`flex flex-col md:h-[calc(100%+7rem)] bg-black/60 backdrop-blur-sm rounded-xl border border-white/10 p-5 md:p-6 shadow-2xl order-1 md:-mt-28 transition-all duration-1000 ease-in ${isTransitioning ? 'translate-y-[150vh] -translate-x-12 rotate-12 skew-x-6 opacity-0 delay-0' : 'animate-[fall-in_0.7s_cubic-bezier(0.34,1.56,0.64,1)_0ms_forwards]'}`}>
                  <MenuSection
                    title="PIZZAS"
                    items={menuData2.categories.find(c => c.title === 'PIZZAS').items}
                    showHeaders={true}
                    headers={menuData2.categories.find(c => c.title === 'PIZZAS').headers}
                    compact={true}
                  />
                </div>

                {/* MIDDLE COLUMN - CALZONES, GARLIC BREADS, KIDS, JACKET POTATOES */}
                <div className={`flex flex-col md:h-full bg-black/60 backdrop-blur-sm rounded-xl border border-white/10 p-4 md:p-5 shadow-2xl space-y-4 md:space-y-1.5 order-2 transition-all duration-1000 ease-in ${isTransitioning ? 'translate-y-[150vh] translate-x-4 -rotate-6 -skew-x-3 opacity-0 delay-[150ms]' : 'animate-[fall-in_0.7s_cubic-bezier(0.34,1.56,0.64,1)_150ms_forwards] opacity-0'}`}>
                  <MenuSection
                    title="CALZONES"
                    items={menuData2.categories.find(c => c.title === 'CALZONES').items}
                    showHeaders={true}
                    headers={menuData2.categories.find(c => c.title === 'CALZONES').headers}
                    compact={true}
                  />
                  <MenuSection
                    title="GARLIC BREADS"
                    items={menuData2.categories.find(c => c.title === 'GARLIC BREADS').items}
                    showHeaders={true}
                    headers={menuData2.categories.find(c => c.title === 'GARLIC BREADS').headers}
                    compact={true}
                  />
                  <MenuSection
                    title="KIDS MEAL"
                    items={menuData2.categories.find(c => c.title === 'KIDS MEAL').items}
                    compact={true}
                  />
                  <MenuSection
                    title="JACKET POTATOES"
                    items={menuData2.categories.find(c => c.title === 'JACKET POTATOES').items}
                    compact={true}
                  />
                </div>

                {/* RIGHT COLUMN - MEAL DEALS (ENLARGED) */}
                <div className={`flex flex-col md:h-[calc(100%+7rem)] bg-black/70 backdrop-blur-md rounded-xl border-2 border-green-600/30 p-6 md:p-7 shadow-2xl space-y-6 order-3 md:-mt-28 transition-all duration-1000 ease-in ${isTransitioning ? 'translate-y-[150vh] translate-x-12 rotate-[20deg] skew-x-[-6deg] opacity-0 delay-[300ms]' : 'animate-[fall-in_0.7s_cubic-bezier(0.34,1.56,0.64,1)_300ms_forwards] opacity-0'}`}>
                  <div className="flex-grow">
                    <h2 className="text-3xl md:text-4xl font-black text-pizzano-green uppercase tracking-tighter border-b-4 border-green-700 mb-4 md:mb-3 pb-1">
                      PIZZANO MEALS
                    </h2>
                    <div className="grid grid-cols-1 gap-4 md:gap-3">
                      {menuData2.categories.find(c => c.title === 'PIZZANO MEALS').items.map((meal, idx) => (
                        <div key={idx} className="border-b border-white/10 pb-3 last:border-0">
                          <div className="flex justify-between items-baseline mb-0.5">
                            <span className="text-lg md:text-base font-black uppercase text-white tracking-tight">{meal.name}</span>
                            <span className="text-xl md:text-lg font-black text-pizzano-green bg-black/40 px-2.5 py-0.5 rounded-lg border border-green-900/50">£{meal.price}</span>
                          </div>
                          <p className="text-xs text-white/60 leading-tight italic pr-2">
                            {meal.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-auto pt-6 border-t-2 border-green-700/50">
                    <p className="text-center text-pizzano-green font-black text-lg uppercase tracking-widest italic animate-pulse">
                      Best Value in Town!
                    </p>
                  </div>
                </div>

              </div>
            )}

          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
