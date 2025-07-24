import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { BookOpen, ClipboardCheck, ClipboardEdit, Users } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

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
    ];

    return (
        <>
        <Navbar />
        <div className='min-h-screen flex flex-col items-center justify-center p-10' 
             style={{ backgroundColor: 'var(--white)' }}>
            
            <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <motion.h1
                    className="text-3xl md:text-4xl font-bold mb-4"
                    style={{ color: 'var(--black)' }}
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
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl'
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
                        >
                            <Link to={link}>
                                <div
                                    className="p-6 rounded-xl shadow-md border transition-all duration-300 hover:shadow-lg w-full max-w-[350px] h-full"
                                    style={{ 
                                        backgroundColor: '#EFEFEF',
                                        borderColor: 'var(--gray)'
                                    }}
                                >
                                    
                                    <div className="text-center h-full flex flex-col justify-between">
                                        <div>
                                            <div className="mb-4 text-center w-full item-center justify-center flex">
                                                <Icon size={30} style={{ color: 'var(--black)' }} />
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
                                            className='w-full transition-all duration-300'
                                            style={{ 
                                                backgroundColor: 'var(--black)',
                                                color: 'var(--white)',
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
        <Footer />
        </>
    )
}
