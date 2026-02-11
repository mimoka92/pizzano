const MenuItem = ({ name, price, largePrice, prices, priceNote, isTabular = false, showChipsPrice = false, compact = false }) => {

    const formatPrice = (p) => {
        if (!p || p === '-') return '';
        const numValues = p.replace(/[^\d.]/g, '');
        if (!numValues) return p;
        return `£${Number(numValues).toFixed(2)}`;
    };

    // If an array of prices is provided (for Pizzas/Calzones), use it.
    // Otherwise fallback to the legacy price/largePrice structure.
    const priceList = prices && prices.length > 0
        ? prices
        : [price, largePrice].filter(p => p !== undefined && p !== null);

    const formattedPrices = priceList.map(p => formatPrice(p));

    // Special logic for chips price (Burger Column specific)
    const chipsPrice = showChipsPrice && priceNote && priceNote.includes('with chips')
        ? formatPrice(priceNote.match(/([\d.]+)/)[1])
        : null;

    return (
        <div className={`flex justify-between items-baseline ${compact ? 'py-1 md:py-0' : 'py-2 md:py-2.5'} ${isTabular ? 'border-b border-white/25' : 'border-b border-white/25'} last:border-0`}>
            {/* Item Name */}
            <span className="text-base md:text-[0.85rem] font-bold tracking-tight uppercase leading-none drop-shadow-sm text-white/95 truncate pr-1">
                {name}
            </span>

            {/* Prices Area */}
            <div className={`flex justify-end font-black text-lg md:text-[0.95rem] tabular-nums shrink-0 leading-none ${showChipsPrice || isTabular ? (prices && prices.length > 2 ? 'w-60' : 'w-44') : (prices && prices.length > 2 ? 'w-60' : 'w-44')}`}>
                {formattedPrices.map((p, idx) => (
                    <div key={idx} className={`w-14 text-right ${idx === 0 ? 'text-pizzano-green' : 'text-white'}`}>
                        {p}
                    </div>
                ))}
                {chipsPrice && (
                    <div className="w-14 text-right text-white">
                        {chipsPrice}
                    </div>
                )}
                {!formattedPrices.length && !chipsPrice && (
                    <div className="w-14 text-right text-pizzano-green">{formatPrice(price)}</div>
                )}
            </div>
        </div>
    );
};

export default MenuItem;
