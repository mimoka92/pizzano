import React from 'react';
import MenuItem from './MenuItem';

const MenuSection = ({ title, items, showHeaders = false, headers = [], compact = false }) => {
    const titleColor = 'text-pizzano-green';
    const borderColor = 'border-green-700';

    return (
        <div className="flex-grow flex flex-col text-white">
            <div className={`flex justify-between items-end border-b-2 mb-2 md:mb-1 ${borderColor} shrink-0`}>
                <h2 className={`text-3xl md:text-2xl font-black uppercase tracking-tighter ${titleColor} drop-shadow-sm leading-none pb-0.5`}>
                    {title}
                </h2>
                {showHeaders && (
                    <div className="flex text-xs md:text-[10px] font-bold text-white/80 w-40 justify-end pb-0.5">
                        {headers.map((h, i) => (
                            <div key={i} className="w-14 text-right uppercase">{h === 'S' ? 'SML' : h === 'L' ? 'LRG' : h}</div>
                        ))}
                    </div>
                )}
            </div>

            <div className={`flex flex-col justify-evenly space-y-2 ${compact ? 'md:space-y-0' : 'md:space-y-1'} flex-grow`}>
                {items.map((item, index) => (
                    <MenuItem
                        key={index}
                        name={item.name}
                        price={item.price}
                        largePrice={item.largePrice}
                        priceNote={item.priceNote}
                        isTabular={showHeaders}
                        showChipsPrice={title === 'BURGERS'}
                        compact={compact}
                    />
                ))}
            </div>
        </div>
    );
};

export default MenuSection;
