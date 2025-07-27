import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { BookOpen, ClipboardCheck, ClipboardEdit, Users, Camera, MessageCircle } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { BackgroundPattern } from '@/components/ui/BackgroundPattern';

export const Onboarding = () => {
    const menuItems = [
        {
            title: 'Materi Pembelajaran',
            description: 'Silabus dan materi AI yang telah dipelajari',
            icon: BookOpen,
            link: '/silabus',
            delay: 0.4
        },
        {
            title: 'Tugas & Assignment',
            description: 'Kumpulan tugas yang telah diselesaikan',
            icon: ClipboardCheck,
            link: '/assignment',
            delay: 0.6
        },
        {
            title: 'Data Peserta',
            description: 'Data teman seperjuanganmu',
            icon: Users,
            link: '/data',
            delay: 0.8
        },
        {
            title: 'Capstone Project',
            description: 'Data Capstone Project',
            icon: ClipboardEdit,
            link: '/capstone',
            delay: 1.0
        },
        {
            title: 'Core Memories',
            description: 'Momen berharga selama pembelajaran AI',
            icon: Camera,
            link: '/memories',
            delay: 1.2
        },
        {
            title: 'Say Something',
            description: 'Pesan untuk mentor dan mentee',
            icon: MessageCircle,
            link: '/say',
            delay: 1.4
        },
    ];

    return (
        <>
        <Navbar />
        <div className='relative min-h-screen flex flex-col items-center justify-center p-10 overflow-hidden' 
             style={{ backgroundColor: 'var(--white)' }}>
            
            {/* Background Pattern */}
            <BackgroundPattern variant="subtle" />
            
            <div className="relative z-10 w-full max-w-6xl mx-auto">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.h1
                        className="text-3xl md:text-4xl font-bold mb-4"
                        style={{ 
                            background: 'linear-gradient(135deg, #0d9488, #14b8a6)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    >
                        Apa yang ingin kamu lihat?
                    </motion.h1>
                    
                    <motion.p
                        className="text-lg opacity-70"
                        style={{ color: 'var(--black-dark)' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.7 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Jelajahi perjalanan sebelumnya (Maret 2025 - Juli 2025) di AI Development Batch 1 @ Infinite Learning
                    </motion.p>
                </motion.div>

                <motion.div 
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    {menuItems.map((item, index) => {
                        const { title, description, icon: Icon, link, delay } = item;
                        
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ 
                                    duration: 0.6, 
                                    delay: delay,
                                    ease: "easeOut"
                                }}
                                whileHover={{
                                    scale: 1.02,
                                    transition: { duration: 0.2 }
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Link to={link}>
                                    <div
                                        className="p-6 rounded-xl shadow-lg border-0 transition-all duration-300 hover:shadow-xl w-full max-w-[350px] h-full backdrop-blur-sm"
                                        style={{ 
                                            backgroundColor: 'rgba(239, 239, 239, 0.8)',
                                            boxShadow: '0 10px 25px rgba(20, 184, 166, 0.1)'
                                        }}
                                    >
                                        
                                        <div className="text-center h-full flex flex-col justify-between">
                                            <div>
                                                <div className="mb-4 text-center w-full item-center justify-center flex">
                                                    <div 
                                                        className="p-3 rounded-full"
                                                        style={{
                                                            background: 'linear-gradient(135deg, #14b8a6, #0d9488)',
                                                            boxShadow: '0 4px 15px rgba(20, 184, 166, 0.3)'
                                                        }}
                                                    >
                                                        <Icon size={30} style={{ color: 'white' }} />
                                                    </div>
                                                </div>
                                                
                                                <h3
                                                    className="text-xl font-bold mb-2"
                                                    style={{ color: 'var(--black)' }}
                                                >
                                                    {title}
                                                </h3>
                                                
                                                <p
                                                    className="text-sm opacity-70 mb-4"
                                                    style={{ color: 'var(--black-dark)' }}
                                                >
                                                    {description}
                                                </p>
                                            </div>
                                            
                                            <Button 
                                                className='w-full transition-all duration-300 hover:shadow-lg text-white'
                                                style={{ 
                                                    background: 'linear-gradient(135deg, #14b8a6, #0d9488)',
                                                    border: 'none'
                                                }}
                                            >
                                                Lihat
                                            </Button>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </div>
        <Footer />
        </>
    )
}
