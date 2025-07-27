import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { BookOpen, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

// Enhanced Particle component with better visibility
const Particle = ({ delay }: { delay: number }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        setPosition({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight
        });
    }, []);

    // Random particle colors with teal accent
    const colors = ['#14b8a6', '#0d9488', '#0f766e', '#134e4a'];
    const color = colors[Math.floor(Math.random() * colors.length)];

    return (
        <motion.div
            className="absolute rounded-full"
            style={{
                left: position.x,
                top: position.y,
                width: Math.random() * 4 + 2, // 2-6px
                height: Math.random() * 4 + 2, // 2-6px
                backgroundColor: color,
                boxShadow: `0 0 10px ${color}40`
            }}
            animate={{
                y: [position.y, position.y - 150, position.y],
                x: [position.x, position.x + (Math.random() - 0.5) * 100, position.x],
                opacity: [0.4, 1, 0.4],
                scale: [0.8, 1.2, 0.8]
            }}
            transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                delay: delay,
                ease: "easeInOut"
            }}
        />
    );
};

// Background particles component with more particles
const BackgroundParticles = () => {
    const particles = Array.from({ length: 160 }, (_, i) => (
        <Particle key={i} delay={i * 0.2} />
    ));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles}
        </div>
    );
};

export const Home = () => {
    return (
        <div className='relative h-screen flex flex-col items-center justify-center p-10 overflow-hidden'
            style={{ 
                backgroundColor: 'var(--white)' // Using CSS variable from App.css
            }}>
            
            {/* Background Particles */}
            <BackgroundParticles />

            {/* Multiple layered background patterns with teal accents */}
            {/* Pattern Layer 1: Dots with teal */}
            <div 
                className="absolute inset-0 opacity-6"
                style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, #14b8a6 2px, transparent 2px),
                                     radial-gradient(circle at 75% 75%, #0d9488 2px, transparent 2px)`,
                    backgroundSize: '60px 60px'
                }}
            />

            {/* Pattern Layer 2: Grid Lines */}
            <div 
                className="absolute inset-0 opacity-4"
                style={{
                    backgroundImage: `linear-gradient(90deg, var(--gray) 1px, transparent 1px),
                                     linear-gradient(180deg, var(--gray) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Pattern Layer 3: Diagonal Lines */}
            <div 
                className="absolute inset-0 opacity-3"
                style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, #14b8a620 35px, #14b8a620 36px)`,
                    backgroundSize: '80px 80px'
                }}
            />

            {/* Pattern Layer 4: Small Dots */}
            <div 
                className="absolute inset-0 opacity-4"
                style={{
                    backgroundImage: `radial-gradient(circle at 50% 50%, var(--black-dark) 1px, transparent 1px),
                                     radial-gradient(circle at 0% 100%, #0d9488 1px, transparent 1px)`,
                    backgroundSize: '30px 30px',
                    backgroundPosition: '0 0, 15px 15px'
                }}
            />

            {/* Pattern Layer 5: Hexagon Pattern with teal */}
            <div 
                className="absolute inset-0 opacity-3"
                style={{
                    backgroundImage: `radial-gradient(circle at 33% 33%, #14b8a6 1.5px, transparent 1.5px),
                                     radial-gradient(circle at 66% 66%, #0f766e 1.5px, transparent 1.5px)`,
                    backgroundSize: '90px 90px',
                    backgroundPosition: '0 0, 45px 45px'
                }}
            />

            {/* Pattern Layer 6: Cross Pattern */}
            <div 
                className="absolute inset-0 opacity-2"
                style={{
                    backgroundImage: `linear-gradient(90deg, transparent 49%, var(--gray) 49%, var(--gray) 51%, transparent 51%),
                                     linear-gradient(0deg, transparent 49%, var(--gray) 49%, var(--gray) 51%, transparent 51%)`,
                    backgroundSize: '100px 100px'
                }}
            />

            {/* Pattern Layer 7: Scattered Circles with teal accents */}
            <div 
                className="absolute inset-0 opacity-4"
                style={{
                    backgroundImage: `radial-gradient(circle at 10% 20%, #14b8a6 1px, transparent 1px),
                                     radial-gradient(circle at 80% 80%, #0d9488 1px, transparent 1px),
                                     radial-gradient(circle at 40% 40%, #0f766e 1px, transparent 1px),
                                     radial-gradient(circle at 90% 10%, #134e4a 1px, transparent 1px)`,
                    backgroundSize: '120px 120px, 80px 80px, 150px 150px, 200px 200px'
                }}
            />

            {/* Pattern Layer 8: Wave Pattern */}
            <div 
                className="absolute inset-0 opacity-2"
                style={{
                    backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 20px, #14b8a610 20px, #14b8a610 22px)`,
                    transform: 'rotate(15deg) scale(1.5)',
                    transformOrigin: 'center'
                }}
            />

            {/* Main content */}
            <div className="relative z-10 max-w-4xl mx-auto">
                <motion.div
                    className="text-center mb-10"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Icon with teal gradient background */}
                    <motion.div
                        className="mb-8 relative"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className='relative flex items-center justify-center'>
                            <div 
                                className="absolute w-20 h-20 rounded-full opacity-20"
                                style={{
                                    background: 'linear-gradient(135deg, #14b8a6, #0d9488)'
                                }}
                            />
                            <BookOpen size={48} style={{ color: '#0d9488' }} />
                            <Sparkles 
                                size={16} 
                                className="absolute -top-2 -right-2 opacity-70" 
                                style={{ color: '#14b8a6' }}
                            />
                        </div>
                    </motion.div>

                    {/* Main heading with teal gradient */}
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold mb-3 tracking-tight"
                        style={{ 
                            background: 'linear-gradient(135deg, #0d9488, #14b8a6)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent', 
                            backgroundClip: 'text'
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    >
                        Your AI Journey
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.h2
                        className="text-lg md:text-xl font-medium mb-3"
                        style={{ color: 'var(--black)' }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                    >
                        Kampus Merdeka Mandiri Batch 8
                    </motion.h2>

                    {/* Program info */}
                    <motion.p
                        className="text-base md:text-lg font-medium"
                        style={{ color: 'var(--black-dark)' }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                    >
                        Artificial Intelligence Batch 1 @ Infinite Learning
                    </motion.p>

                    {/* Description */}
                    <motion.p
                        className="text-sm md:text-base mt-6 leading-relaxed max-w-2xl mx-auto opacity-80"
                        style={{ color: 'var(--black-dark)' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.8 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        Dokumentasi materi yang telah dipelajari, tugas yang telah diselesaikan,
                        <br className="hidden md:block" />
                        dan data-data lainnya dalam perjalanan pembelajaran AI.
                    </motion.p>
                </motion.div>

                {/* CTA Button with teal gradient */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
                >
                    <Link to='/onboarding'>
                        <Button
                            className='relative px-8 py-3 text-base font-medium cursor-pointer rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105'
                            style={{
                                background: 'linear-gradient(135deg, #14b8a6, #0d9488)',
                                color: 'white',
                                border: 'none'
                            }}
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Mulai Menjelajah
                                <motion.div
                                    animate={{ x: [0, 4, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    →
                                </motion.div>
                            </span>
                            <div 
                                className="absolute inset-0 rounded-lg opacity-0 hover:opacity-20 transition-opacity duration-300"
                                style={{
                                    background: 'linear-gradient(135deg, #0f766e, #14b8a6)'
                                }}
                            />
                        </Button>
                    </Link>
                </motion.div>

                {/* Decorative elements with teal colors */}
                <motion.div
                    className="absolute -top-10 -left-10 w-20 h-20 rounded-full opacity-20 blur-xl"
                    style={{ backgroundColor: '#14b8a6' }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.3, 0.2]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute -bottom-10 -right-10 w-16 h-16 rounded-full opacity-20 blur-xl"
                    style={{ backgroundColor: '#0d9488' }}
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.3, 0.2, 0.3]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                />
            </div>
        </div>
    )
}
