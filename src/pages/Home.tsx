import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { BookOpen, Sparkles } from 'lucide-react';
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

export const Home = () => {
    return (
        <div className='relative h-screen flex flex-col items-center justify-center p-10 overflow-hidden'
            style={{ 
                background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
            }}>
            
            {/* Background Particles */}
            <BackgroundParticles />

            {/* Multiple layered background patterns */}
            {/* Pattern Layer 1: Dots */}
            <div 
                className="absolute inset-0 opacity-4"
                style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px),
                                     radial-gradient(circle at 75% 75%, #8b5cf6 2px, transparent 2px)`,
                    backgroundSize: '60px 60px'
                }}
            />

            {/* Pattern Layer 2: Grid Lines */}
            <div 
                className="absolute inset-0 opacity-3"
                style={{
                    backgroundImage: `linear-gradient(90deg, #e2e8f0 1px, transparent 1px),
                                     linear-gradient(180deg, #e2e8f0 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Pattern Layer 3: Diagonal Lines */}
            <div 
                className="absolute inset-0 opacity-2"
                style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, #cbd5e1 35px, #cbd5e1 36px)`,
                    backgroundSize: '80px 80px'
                }}
            />

            {/* Pattern Layer 4: Small Dots */}
            <div 
                className="absolute inset-0 opacity-3"
                style={{
                    backgroundImage: `radial-gradient(circle at 50% 50%, #64748b 1px, transparent 1px),
                                     radial-gradient(circle at 0% 100%, #94a3b8 1px, transparent 1px)`,
                    backgroundSize: '30px 30px',
                    backgroundPosition: '0 0, 15px 15px'
                }}
            />

            {/* Pattern Layer 5: Hexagon Pattern */}
            <div 
                className="absolute inset-0 opacity-2"
                style={{
                    backgroundImage: `radial-gradient(circle at 33% 33%, #6366f1 1.5px, transparent 1.5px),
                                     radial-gradient(circle at 66% 66%, #a855f7 1.5px, transparent 1.5px)`,
                    backgroundSize: '90px 90px',
                    backgroundPosition: '0 0, 45px 45px'
                }}
            />

            {/* Pattern Layer 6: Cross Pattern */}
            <div 
                className="absolute inset-0 opacity-2"
                style={{
                    backgroundImage: `linear-gradient(90deg, transparent 49%, #e2e8f0 49%, #e2e8f0 51%, transparent 51%),
                                     linear-gradient(0deg, transparent 49%, #e2e8f0 49%, #e2e8f0 51%, transparent 51%)`,
                    backgroundSize: '100px 100px'
                }}
            />

            {/* Pattern Layer 7: Scattered Circles */}
            <div 
                className="absolute inset-0 opacity-3"
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
                className="absolute inset-0 opacity-2"
                style={{
                    backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 20px, #f1f5f9 20px, #f1f5f9 22px)`,
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
                    {/* Icon with gradient background */}
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
                                    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)'
                                }}
                            />
                            <BookOpen size={48} style={{ color: '#1e40af' }} />
                            <Sparkles 
                                size={16} 
                                className="absolute -top-2 -right-2 text-purple-500 opacity-70" 
                            />
                        </div>
                    </motion.div>

                    {/* Main heading */}
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold mb-3 tracking-tight"
                        style={{ 
                            background: 'linear-gradient(135deg, #1e40af, #7c3aed)',
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
                        className="text-lg md:text-xl font-medium mb-3 text-slate-700"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                    >
                        Kampus Merdeka Mandiri Batch 8
                    </motion.h2>

                    {/* Program info */}
                    <motion.p
                        className="text-base md:text-lg text-slate-600 font-medium"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                    >
                        Artificial Intelligence Batch 1 @ Infinite Learning
                    </motion.p>

                    {/* Description */}
                    <motion.p
                        className="text-sm md:text-base mt-6 text-slate-500 leading-relaxed max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        Dokumentasi materi yang telah dipelajari, tugas yang telah diselesaikan,
                        <br className="hidden md:block" />
                        dan data-data lainnya dalam perjalanan pembelajaran AI.
                    </motion.p>
                </motion.div>

                {/* CTA Button */}
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
                                background: 'linear-gradient(135deg, #3b82f6, #1e40af)',
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
                                    background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)'
                                }}
                            />
                        </Button>
                    </Link>
                </motion.div>

                {/* Decorative elements */}
                <motion.div
                    className="absolute -top-10 -left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 blur-xl"
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
                    className="absolute -bottom-10 -right-10 w-16 h-16 bg-purple-200 rounded-full opacity-20 blur-xl"
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
