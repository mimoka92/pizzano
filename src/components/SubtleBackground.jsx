import React, { useMemo } from 'react';

const SubtleBackground = () => {
    // Generate random positions for particles to avoid hydration mismatches or re-renders
    // Generate random positions for particles to avoid hydration mismatches or re-renders
    const particles = useMemo(() => {
        return Array.from({ length: 3 }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            animationDuration: '35s', // Standardized Slow Speed
            animationDelay: `-${Math.random() * 35}s`,
            opacity: 0.5 + Math.random() * 0.5,
            size: 6 + Math.random() * 8,
            rotation: Math.random() * 360,
        }));
    }, []);

    const ingredientParticles = useMemo(() => {
        // Specific user-requested emojis: Burger, Kebab/Doner, Chicken, Fries, Wrap/Doner, Salad, Potato
        const ingredients = ['🍔', '🥙', '🍗', '🍟', '🌯', '🥗', '🥔'];
        // Reduced count to 4 for a cleaner look
        return Array.from({ length: 4 }).map((_, i) => ({
            id: i,
            emoji: ingredients[Math.floor(Math.random() * ingredients.length)],
            left: `${Math.random() * 100}%`,
            animationDuration: `${25 + Math.random() * 25}s`, // Varied speed for better scattering
            animationDelay: `-${Math.random() * 45}s`,
            opacity: 0.15 + Math.random() * 0.2, // Much lower opacity (more transparent)
            size: 50 + Math.random() * 40, // Significantly bigger (50px - 90px)
            rotation: Math.random() * 360,
        }));
    }, []);

    const embers = useMemo(() => {
        return Array.from({ length: 15 }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            animationDuration: '35s', // Standardized Slow Speed
            animationDelay: `-${Math.random() * 35}s`,
            opacity: 0.6 + Math.random() * 0.4,
            size: 2 + Math.random() * 4,
            color: Math.random() > 0.5 ? '#69f0ae' : '#00e676' // Green shades
        }));
    }, []);

    return (
        <div className="fixed inset-0 w-full h-full -z-10 bg-[#0a0a0a] overflow-hidden pointer-events-none">
            {/* 
        Subtle Noise Texture 
        - Adds grain/texture to the background
      */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }}
            ></div>

            {/* 
        Base Gradient 
        - Dark center, slight green vignette for "Herbal" feel
      */}
            <div className="absolute inset-0 bg-gradient-radial from-[#050805] to-[#000000] opacity-70"></div>

            {/* 
        Floating Herbs (Basil Leaves)
        - CSS Shape: Leaf-like using border-radius
      */}
            <div className="absolute inset-0">
                {particles.map((p) => (
                    <div
                        key={`herb-${p.id}`}
                        className="absolute rounded-tr-[50%] rounded-bl-[50%] rounded-tl-[0] rounded-br-[50%]"
                        style={{
                            left: p.left,
                            bottom: '-20px',
                            width: `${p.size}px`,
                            height: `${p.size}px`,
                            backgroundColor: 'rgba(0, 230, 118, 0.6)',
                            opacity: p.opacity,
                            transform: `rotate(${p.rotation}deg)`,
                            animation: `floatUp ${p.animationDuration} infinite linear`,
                            animationDelay: p.animationDelay,
                            boxShadow: '0 0 4px rgba(0, 230, 118, 0.3)'
                        }}
                    />
                ))}
            </div>

            {/* 
        Floating Menu Ingredients (Correct Colours)
        - Sparse, slow, diverse
      */}
            <div className="absolute inset-0">
                {ingredientParticles.map((p) => (
                    <div
                        key={`ing-${p.id}`}
                        className="absolute text-2xl"
                        style={{
                            left: p.left,
                            bottom: '-50px',
                            fontSize: `${p.size}px`,
                            opacity: p.opacity,
                            transform: `rotate(${p.rotation}deg)`,
                            filter: 'drop-shadow(0 0 5px rgba(0,0,0,0.5))', // Add depth instead of tint
                            animation: `floatUpIngredient ${p.animationDuration} infinite linear`,
                            animationDelay: p.animationDelay,
                        }}
                    >
                        {p.emoji}
                    </div>
                ))}
            </div>

            {/* 
        Floating Embers (Green Particles)
      */}
            <div className="absolute inset-0">
                {embers.map((e) => (
                    <div
                        key={`ember-${e.id}`}
                        className="absolute rounded-full"
                        style={{
                            left: e.left,
                            bottom: '-10px',
                            width: `${e.size}px`,
                            height: `${e.size}px`,
                            backgroundColor: e.color,
                            opacity: e.opacity,
                            animation: `floatUpEmber ${e.animationDuration} infinite linear`,
                            animationDelay: e.animationDelay,
                            boxShadow: `0 0 ${e.size * 2}px ${e.color}`
                        }}
                    />
                ))}
            </div>

            <style>{`
        .bg-gradient-radial {
            background-image: radial-gradient(circle at center, #050805 0%, #000000 70%);
        }

        @keyframes floatUp {
            0% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0; }
            10% { opacity: 0.5; }
            90% { opacity: 0.5; }
            100% { transform: translateY(-110vh) translateX(20px) rotate(360deg); opacity: 0; }
        }

        @keyframes floatUpIngredient {
            0% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0; }
            10% { opacity: 0.3; }
            90% { opacity: 0.3; }
            100% { transform: translateY(-110vh) translateX(-40px) rotate(720deg); opacity: 0; }
        }

        @keyframes floatUpEmber {
             0% { transform: translateY(0) translateX(0); opacity: 0; }
             20% { opacity: 0.8; }
             80% { opacity: 0.8; }
             100% { transform: translateY(-110vh) translateX(-15px); opacity: 0; }
        }
      `}</style>
        </div>
    );
};

export default SubtleBackground;
