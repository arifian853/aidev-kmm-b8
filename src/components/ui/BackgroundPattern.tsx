import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Particle component
const Particle = ({ delay }: { delay: number }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        setPosition({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight
        });
    }, []);

    return (
        <motion.div
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30"
            style={{
                left: position.x,
                top: position.y,
            }}
            animate={{
                y: [position.y, position.y - 100, position.y],
                opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: delay,
                ease: "easeInOut"
            }}
        />
    );
};

// Background particles component
const BackgroundParticles = () => {
    const particles = Array.from({ length: 15 }, (_, i) => (
        <Particle key={i} delay={i * 0.3} />
    ));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles}
        </div>
    );
};

interface BackgroundPatternProps {
    variant?: 'default' | 'subtle' | 'minimal';
    showParticles?: boolean;
}

export const BackgroundPattern = ({ 
    variant = 'default', 
    showParticles = true 
}: BackgroundPatternProps) => {
    const getOpacity = () => {
        switch (variant) {
            case 'subtle': return { pattern1: 'opacity-2', pattern2: 'opacity-1', pattern3: 'opacity-1' };
            case 'minimal': return { pattern1: 'opacity-1', pattern2: 'opacity-1', pattern3: 'opacity-1' };
            default: return { pattern1: 'opacity-4', pattern2: 'opacity-3', pattern3: 'opacity-2' };
        }
    };

    const opacity = getOpacity();

    return (
        <>
            {/* Background Particles */}
            {showParticles && <BackgroundParticles />}

            {/* Multiple layered background patterns */}
            {/* Pattern Layer 1: Dots */}
            <div 
                className={`absolute inset-0 ${opacity.pattern1}`}
                style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px),
                                     radial-gradient(circle at 75% 75%, #8b5cf6 2px, transparent 2px)`,
                    backgroundSize: '60px 60px'
                }}
            />

            {/* Pattern Layer 2: Grid Lines */}
            <div 
                className={`absolute inset-0 ${opacity.pattern2}`}
                style={{
                    backgroundImage: `linear-gradient(90deg, #e2e8f0 1px, transparent 1px),
                                     linear-gradient(180deg, #e2e8f0 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Pattern Layer 3: Diagonal Lines */}
            <div 
                className={`absolute inset-0 ${opacity.pattern3}`}
                style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, #cbd5e1 35px, #cbd5e1 36px)`,
                    backgroundSize: '80px 80px'
                }}
            />

            {/* Pattern Layer 4: Small Dots */}
            <div 
                className={`absolute inset-0 ${opacity.pattern2}`}
                style={{
                    backgroundImage: `radial-gradient(circle at 50% 50%, #64748b 1px, transparent 1px),
                                     radial-gradient(circle at 0% 100%, #94a3b8 1px, transparent 1px)`,
                    backgroundSize: '30px 30px',
                    backgroundPosition: '0 0, 15px 15px'
                }}
            />

            {/* Pattern Layer 5: Hexagon Pattern */}
            <div 
                className={`absolute inset-0 ${opacity.pattern3}`}
                style={{
                    backgroundImage: `radial-gradient(circle at 33% 33%, #6366f1 1.5px, transparent 1.5px),
                                     radial-gradient(circle at 66% 66%, #a855f7 1.5px, transparent 1.5px)`,
                    backgroundSize: '90px 90px',
                    backgroundPosition: '0 0, 45px 45px'
                }}
            />

            {/* Pattern Layer 6: Cross Pattern */}
            <div 
                className={`absolute inset-0 ${opacity.pattern3}`}
                style={{
                    backgroundImage: `linear-gradient(90deg, transparent 49%, #e2e8f0 49%, #e2e8f0 51%, transparent 51%),
                                     linear-gradient(0deg, transparent 49%, #e2e8f0 49%, #e2e8f0 51%, transparent 51%)`,
                    backgroundSize: '100px 100px'
                }}
            />

            {/* Pattern Layer 7: Scattered Circles */}
            <div 
                className={`absolute inset-0 ${opacity.pattern2}`}
                style={{
                    backgroundImage: `radial-gradient(circle at 10% 20%, #3b82f6 1px, transparent 1px),
                                     radial-gradient(circle at 80% 80%, #8b5cf6 1px, transparent 1px),
                                     radial-gradient(circle at 40% 40%, #06b6d4 1px, transparent 1px),
                                     radial-gradient(circle at 90% 10%, #ec4899 1px, transparent 1px)`,
                    backgroundSize: '120px 120px, 80px 80px, 150px 150px, 200px 200px'
                }}
            />

            {/* Pattern Layer 8: Wave Pattern */}
            <div 
                className={`absolute inset-0 ${opacity.pattern3}`}
                style={{
                    backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 20px, #f1f5f9 20px, #f1f5f9 22px)`,
                    transform: 'rotate(15deg) scale(1.5)',
                    transformOrigin: 'center'
                }}
            />
        </>
    );
};