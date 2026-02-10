import React from 'react';
import MenuItem from './MenuItem';

const MenuSection = ({ title, items, showHeaders = false, headers = [] }) => {
    const titleColor = 'text-pizzano-green';
    const borderColor = 'border-pizzano-green/50';

    return (
        <div className="flex-grow flex flex-col text-white">
            <div className={`flex justify-between items-end border-b-2 mb-2 md:mb-1 ${borderColor} shrink-0`}>
                <h2 className={`text-3xl md:text-2xl font-black uppercase tracking-tighter ${titleColor} drop-shadow-sm leading-none pb-0.5`}>
                    {title}
                </h2>
                {showHeaders && (
                    <div className="flex text-xs md:text-[10px] font-bold text-white/80 w-28 md:w-24 justify-end pb-0.5">
                        {headers.map((h, i) => (
                            <div key={i} className="w-14 md:w-12 text-right uppercase">{h === 'S' ? 'SML' : h === 'L' ? 'LRG' : h}</div>
                        ))}
                    </div>
                )}
            </div>

            <div className="flex flex-col justify-evenly space-y-2 md:space-y-[1px] flex-grow">
                {items.map((item, index) => (
                    <MenuItem
                        key={index}
                        name={item.name}
                        price={item.price}
                        largePrice={item.largePrice}
                        priceNote={item.priceNote}
                        isTabular={showHeaders}
                        showChipsPrice={title === 'BURGERS'}
                    />
                ))}
            </div>
        </div>
    );
};

export default MenuSection;
