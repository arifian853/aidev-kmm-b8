import { motion } from 'framer-motion';
import { Camera, Heart, Sparkles, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Navbar } from '@/components/layout/Navbar';
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

// Background particles component
const BackgroundParticles = () => {
    const particles = Array.from({ length: 25 }, (_, i) => (
        <Particle key={i} delay={i * 0.2} />
    ));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles}
        </div>
    );
};

// Memory data with dates and descriptions
const memories = [
    {
        id: 1,
        image: '/memories/05-03-2025.png',
        date: '05 Maret 2025',
        title: '05 Maret 2025',
        description: 'Foto setelah zoom pada tanggal tersebut'
    },
    {
        id: 2,
        image: '/memories/26-03-2025.png',
        date: '26 Maret 2025',
        title: '26 Maret 2025',
        description: 'Foto setelah zoom pada tanggal tersebut'
    },
    {
        id: 3,
        image: '/memories/17-04-2025.png',
        date: '17 April 2025',
        title: '17 April 2025',
        description: 'Foto setelah zoom pada tanggal tersebut'
    },
    {
        id: 4,
        image: '/memories/29-04-2025.png',
        date: '29 April 2025',
        title: '29 April 2025',
        description: 'Foto setelah zoom pada tanggal tersebut'
    },
    {
        id: 5,
        image: '/memories/15-05-2025.png',
        date: '15 Mei 2025',
        title: '15 Mei 2025',
        description: 'Foto setelah zoom pada tanggal tersebut'
    },
    {
        id: 6,
        image: '/memories/05-06-2025.png',
        date: '05 Juni 2025',
        title: '05 Juni 2025',
        description: 'Foto setelah zoom pada tanggal tersebut'
    },
    {
        id: 7,
        image: '/memories/24-06-2025.png',
        date: '24 Juni 2025',
        title: '24 Juni 2025',
        description: 'Foto setelah zoom pada tanggal tersebut'
    },
    {
        id: 8,
        image: '/memories/closing.png',
        date: 'Penutupan',
        title: 'Penutupan',
        description: 'Foto penutupan program'
    }
];

export const Memories = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <>
            <Navbar />
            <div className="relative min-h-screen p-6 overflow-hidden" style={{ backgroundColor: 'var(--white)' }}>
                
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

                <div className="relative z-10 max-w-7xl mx-auto">
                    {/* Header */}
                    <motion.div
                        className="mb-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {/* Icon with teal gradient background */}
                        <motion.div
                            className="mb-6 relative"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className='relative flex items-center justify-center'>
                                <div 
                                    className="absolute w-16 h-16 rounded-full opacity-20"
                                    style={{
                                        background: 'linear-gradient(135deg, #14b8a6, #0d9488)'
                                    }}
                                />
                                <Camera size={32} style={{ color: '#0d9488' }} />
                                <Sparkles 
                                    size={12} 
                                    className="absolute -top-1 -right-1 opacity-70" 
                                    style={{ color: '#14b8a6' }}
                                />
                            </div>
                        </motion.div>

                        <h1
                            className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-center"
                            style={{ 
                                background: 'linear-gradient(135deg, #0d9488, #14b8a6)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}
                        >
                            Core Memories
                        </h1>
                        <p className="text-lg mb-6 text-center" style={{ color: 'var(--black-dark)' }}>
                            Momen-momen berharga selama perjalanan pembelajaran AI
                        </p>
                    </motion.div>

                    {/* Memories Grid */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        {memories.map((memory, index) => (
                            <motion.div
                                key={memory.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className="cursor-pointer"
                                onClick={() => setSelectedImage(memory.image)}
                            >
                                <Card
                                    className="overflow-hidden backdrop-blur-sm relative group"
                                    style={{ 
                                        backgroundColor: 'rgba(239, 239, 239, 0.8)',
                                        border: 'none',
                                        boxShadow: '0 10px 25px rgba(20, 184, 166, 0.1)'
                                    }}
                                >
                                    {/* Decorative gradient overlay */}
                                    <div 
                                        className="absolute top-0 left-0 w-full h-1"
                                        style={{
                                            background: 'linear-gradient(90deg, #14b8a6, #0d9488)'
                                        }}
                                    />

                                    <CardContent className="p-0">
                                        <div className="relative overflow-hidden">
                                            <img
                                                src={memory.image}
                                                alt={memory.title}
                                                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                                                onError={(e) => {
                                                    const target = e.target as HTMLImageElement;
                                                    target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5YTNhZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=';
                                                }}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <Heart size={20} className="text-white" />
                                            </div>
                                        </div>
                                        
                                        <div className="p-4">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Calendar size={14} style={{ color: '#14b8a6' }} />
                                                <span className="text-sm font-medium" style={{ color: '#14b8a6' }}>
                                                    {memory.date}
                                                </span>
                                            </div>
                                            <h3 className="font-semibold mb-2" style={{ color: 'var(--black)' }}>
                                                {memory.title}
                                            </h3>
                                            <p className="text-sm" style={{ color: 'var(--black-dark)' }}>
                                                {memory.description}
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Decorative elements */}
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

                {/* Image Modal */}
                {selectedImage && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            className="relative max-w-4xl max-h-full"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage}
                                alt="Selected memory"
                                className="max-w-full max-h-full object-contain rounded-lg"
                            />
                            <button
                                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all duration-200"
                                onClick={() => setSelectedImage(null)}
                            >
                                ✕
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </div>
        </>
    );
};