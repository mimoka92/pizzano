import React, { useMemo } from 'react';

const SubtleBackground = () => {
    // Generate random positions for particles to avoid hydration mismatches or re-renders
    const particles = useMemo(() => {
        return Array.from({ length: 25 }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            animationDuration: `${15 + Math.random() * 20}s`,
            animationDelay: `-${Math.random() * 20}s`,
            opacity: 0.5 + Math.random() * 0.5,
            size: 6 + Math.random() * 8, // Slightly larger for leaf shape
            rotation: Math.random() * 360,
        }));
    }, []);

    const embers = useMemo(() => {
        return Array.from({ length: 15 }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            animationDuration: `${10 + Math.random() * 15}s`,
            animationDelay: `-${Math.random() * 10}s`,
            opacity: 0.4 + Math.random() * 0.6,
        }));
    }, []);

    return (
        <div className="fixed inset-0 w-full h-full -z-10 bg-[#0a0a0a] overflow-hidden pointer-events-none">
            {/* 
        Base Gradient 
        - Dark center, slight green vignette for "Herbal" feel
      */}
            <div className="absolute inset-0 bg-gradient-radial from-[#0f1a15] to-[#000000] opacity-90"></div>

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
        Floating Embers (Golden/Orange subtle specks)
        - Warmth from the oven
        - Very small, glowing
      */}
            <div className="absolute inset-0">
                {embers.map((e) => (
                    <div
                        key={`ember-${e.id}`}
                        className="absolute rounded-full bg-orange-400/30"
                        style={{
                            left: e.left,
                            bottom: '-10px',
                            width: '3px',
                            height: '3px',
                            opacity: e.opacity,
                            animation: `floatUpEmber ${e.animationDuration} infinite linear`,
                            animationDelay: e.animationDelay,
                            boxShadow: '0 0 8px rgba(255, 167, 38, 0.4)'
                        }}
                    />
                ))}
            </div>

            <style>{`
        .bg-gradient-radial {
            background-image: radial-gradient(circle at center, #0f1a15 0%, #000000 70%);
        }

        @keyframes floatUp {
            0% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0; }
            10% { opacity: 0.5; }
            90% { opacity: 0.5; }
            100% { transform: translateY(-110vh) translateX(20px) rotate(360deg); opacity: 0; }
        }

        @keyframes floatUpEmber {
             0% { transform: translateY(0) translateX(0); opacity: 0; }
             20% { opacity: 0.6; }
             80% { opacity: 0.6; }
             100% { transform: translateY(-110vh) translateX(-15px); opacity: 0; }
        }
      `}</style>
        </div>
    );
};

export default SubtleBackground;
