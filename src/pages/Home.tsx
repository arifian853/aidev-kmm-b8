import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

export const Home = () => {
    return (
        <div className='h-screen flex flex-col items-center justify-center p-10'
            style={{ backgroundColor: 'var(--white)' }}>

            <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <motion.div
                    className="mb-6"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className='text-center w-full item-center justify-center flex'>
                        <BookOpen size={60} style={{ color: 'var(--black)' }} />
                    </div>
                </motion.div>

                <motion.h1
                    className="text-3xl md:text-4xl font-bold mb-4"
                    style={{ color: 'var(--black)' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                >
                    Your AI Journey
                </motion.h1>

                <motion.h2
                    className="text-xl font-semibold mb-2"
                    style={{ color: 'var(--black-dark)' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                >
                    Kampus Merdeka Mandiri Batch 8
                </motion.h2>

                <motion.p
                    className="text-lg"
                    style={{ color: 'var(--black-dark)' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                >
                    Artificial Intelligence Batch 1 @ Infinite Learning
                </motion.p>

                <motion.p
                    className="text-md mt-4 opacity-70"
                    style={{ color: 'var(--black-dark)' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    Dokumentasi materi yang telah dipelajari, tugas yang telah diselesaikan,<br />
                    dan data - data lainnya.
                </motion.p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
            >
                <Link to='/onboarding'>
                    <Button
                        className='px-8 py-3 text-lg font-semibold cursor-pointer'
                        style={{
                            backgroundColor: 'var(--black)',
                            color: 'var(--white)',
                            border: 'none'
                        }}
                    >
                        Mulai Menjelajah
                    </Button>
                </Link>
            </motion.div>
        </div>
    )
}
