const MenuItem = ({ name, price, largePrice, priceNote, isTabular = false, showChipsPrice = false }) => {

    const formatPrice = (p) => {
        if (!p || p === '-') return '';
        const numValues = p.replace(/[^\d.]/g, '');
        if (!numValues) return p;
        return `£${Number(numValues).toFixed(2)}`;
    };

    const displayPrice = isTabular && price ? formatPrice(price) : (price ? formatPrice(price) : '');
    const displayLarge = isTabular && largePrice ? formatPrice(largePrice) : (largePrice ? formatPrice(largePrice) : '');

    // Logic for chips price if strictly using burger logic
    const displayChipsPrice = showChipsPrice && priceNote && priceNote.includes('with chips')
        ? formatPrice(priceNote.match(/([\d.]+)/)[1])
        : '';

    return (
        <div className={`flex justify-between items-baseline py-1 md:py-[1px] ${isTabular ? 'border-b border-white/10' : 'border-b border-white/10'} last:border-0`}>
            {/* Item Name */}
            <span className="text-base md:text-[0.85rem] font-bold tracking-tight uppercase leading-none drop-shadow-sm text-white/95 truncate pr-1">
                {name}
            </span>

            {/* Prices */}
            {isTabular ? (
                <div className="flex w-28 md:w-24 justify-end font-black text-lg md:text-[0.95rem] text-white tabular-nums shrink-0 leading-none">
                    <div className="w-14 md:w-12 text-right text-pizzano-green">{displayPrice}</div>
                    <div className="w-14 md:w-12 text-right text-white">{displayLarge}</div>
                </div>
            ) : showChipsPrice ? (
                <div className="flex w-28 md:w-24 justify-end font-black text-lg md:text-[0.95rem] text-pizzano-green tabular-nums shrink-0 leading-none">
                    <div className="w-14 md:w-12 text-right">{displayPrice}</div>
                    <div className="w-14 md:w-12 text-right text-white">{displayChipsPrice || ''}</div>
                </div>
            ) : (
                <div className="flex justify-end font-black text-lg md:text-[0.95rem] text-pizzano-green tabular-nums shrink-0 leading-none">
                    {displayPrice}
                </div>
            )}
        </div>
    );
};

export default MenuItem;
