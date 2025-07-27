import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, BookOpen, ExternalLink, CheckCircle, Clock, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import tugasData from '@/utils/TugasData.json';
import ReactMarkdown from 'react-markdown';
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
    const particles = Array.from({ length: 160 }, (_, i) => (
        <Particle key={i} delay={i * 0.2} />
    ));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles}
        </div>
    );
};

export interface TaskDetail {
    task_number: string;
    title: string;
    competency: string;
    date_given: string;
    deadline: string;
    example_task: string;
    instructions: string;
}

export const Tugas = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    // Find task by ID (task number)
    const task = tugasData.tasks.find(t => t.task_number === `Tugas ${id}`) || tugasData.tasks[0];

    const formatDate = (dateString: string) => {
        // Parse the date string format "Friday, 7 March 2025, 12:00 AM"
        const parts = dateString.split(', ');
        if (parts.length >= 3) {
            const datePart = parts[1]; // "7 March 2025"
            const date = new Date(datePart);
            if (!isNaN(date.getTime())) {
                return date.toLocaleDateString('id-ID', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                });
            }
        }
        return dateString; // Return original if parsing fails
    };

    const getSyllabusColor = (competency: string) => {
        const colors: { [key: string]: string } = {
            'Introduction to AI': '#14b8a6',
            'AI Development Tools and Framework': '#0d9488',
            'Python Programming': '#0f766e',
            'Data Science': '#134e4a',
            'Machine Learning': '#14b8a6',
            'Deep Learning': '#0d9488',
            'AI Applications': '#0f766e',
            'Model Deployment': '#134e4a'
        };
        return colors[competency] || '#14b8a6';
    };

    const handleBack = () => {
        navigate('/assignment');
    };

    const getTaskObjectives = (instructions: string) => {
        // Extract objectives from instructions (this is a simple implementation)
        const objectives = [];
        if (instructions.includes('Tujuan') || instructions.includes('Objektif')) {
            objectives.push('Memahami konsep dasar dari topik yang diberikan');
            objectives.push('Mengimplementasikan solusi praktis');
            objectives.push('Menganalisis hasil dan memberikan insight');
            objectives.push('Melatih kemampuan problem solving');
        } else {
            objectives.push('Menyelesaikan tugas sesuai dengan instruksi yang diberikan');
            objectives.push('Mengembangkan pemahaman praktis');
            objectives.push('Melatih kemampuan analisis dan implementasi');
        }
        return objectives;
    };

    const getTaskRequirements = (instructions: string) => {
        const requirements = [];
        if (instructions.includes('Google Colab')) {
            requirements.push('Akses ke Google Colab');
            requirements.push('Koneksi internet yang stabil');
        }
        if (instructions.includes('GitHub')) {
            requirements.push('Akun GitHub aktif');
            requirements.push('Pemahaman dasar Git');
        }
        if (instructions.includes('Python')) {
            requirements.push('Pemahaman dasar Python');
            requirements.push('Environment Python yang terinstall');
        }
        if (requirements.length === 0) {
            requirements.push('Mengikuti instruksi yang diberikan');
            requirements.push('Mengumpulkan tugas tepat waktu');
        }
        return requirements;
    };

    const getTaskDeliverables = (instructions: string) => {
        const deliverables = [];
        if (instructions.includes('PDF')) {
            deliverables.push('File PDF');
        }
        if (instructions.includes('Google Colab') || instructions.includes('.ipynb')) {
            deliverables.push('Notebook (.ipynb)');
        }
        if (instructions.includes('GitHub') || instructions.includes('repository')) {
            deliverables.push('Link repository GitHub');
        }
        if (instructions.includes('Google Docs')) {
            deliverables.push('Link Google Docs');
        }
        if (instructions.includes('.py')) {
            deliverables.push('File Python (.py)');
        }
        if (deliverables.length === 0) {
            deliverables.push('Hasil tugas sesuai format yang diminta');
        }
        return deliverables;
    };

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

                <div className="relative z-10 max-w-4xl mx-auto">
                    {/* Back Button */}
                    <motion.div
                        className="mb-6"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Button
                            onClick={handleBack}
                            className="flex items-center gap-2 px-4 py-2 backdrop-blur-sm"
                            style={{
                                backgroundColor: 'rgba(239, 239, 239, 0.8)',
                                color: 'var(--black)',
                                border: 'none',
                                boxShadow: '0 4px 15px rgba(20, 184, 166, 0.1)'
                            }}
                        >
                            <ArrowLeft size={16} />
                            Kembali ke Daftar Tugas
                        </Button>
                    </motion.div>

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
                                <BookOpen size={32} style={{ color: '#0d9488' }} />
                                <Sparkles 
                                    size={12} 
                                    className="absolute -top-1 -right-1 opacity-70" 
                                    style={{ color: '#14b8a6' }}
                                />
                            </div>
                        </motion.div>

                        <div className="flex items-center gap-3 mb-4">
                            <span
                                className="text-sm px-3 py-1 rounded-full font-medium text-white"
                                style={{ backgroundColor: getSyllabusColor(task.competency) }}
                            >
                                {task.competency}
                            </span>
                            <span
                                className="text-sm px-3 py-1 rounded-full font-medium text-white"
                                style={{
                                    background: 'linear-gradient(135deg, #14b8a6, #0d9488)'
                                }}
                            >
                                {task.task_number}
                            </span>
                        </div>

                        <h1
                            className="text-3xl md:text-4xl font-bold mb-4 tracking-tight"
                            style={{ 
                                background: 'linear-gradient(135deg, #0d9488, #14b8a6)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}
                        >
                            {task.task_number} - {task.title}
                        </h1>

                        {/* Date Info */}
                        <div className="flex flex-wrap gap-6 mb-6">
                            <div className="flex items-center gap-2">
                                <Calendar size={18} style={{ color: '#14b8a6' }} />
                                <span className="text-sm" style={{ color: 'var(--black-dark)' }}>
                                    Diberikan: {formatDate(task.date_given)}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock size={18} style={{ color: '#14b8a6' }} />
                                <span className="text-sm" style={{ color: 'var(--black-dark)' }}>
                                    Deadline: {formatDate(task.deadline)}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle size={18} style={{ color: '#14b8a6' }} />
                                <span className="text-sm" style={{ color: '#14b8a6' }}>
                                    Selesai
                                </span>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4">
                            <Button
                                className="flex items-center gap-2 text-white hover:shadow-lg transition-all duration-300"
                                style={{
                                    background: 'linear-gradient(135deg, #14b8a6, #0d9488)',
                                    border: 'none'
                                }}
                                onClick={() => window.open(task.example_task, '_blank')}
                            >
                                <ExternalLink size={16} />
                                Lihat Tugas
                            </Button>
                        </div>
                    </motion.div>

                    {/* Content Sections */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Instructions */}
                        <motion.div
                            className="lg:col-span-2 p-6 rounded-xl shadow-lg backdrop-blur-sm relative overflow-hidden"
                            style={{ 
                                backgroundColor: 'rgba(239, 239, 239, 0.8)',
                                boxShadow: '0 10px 25px rgba(20, 184, 166, 0.1)'
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            {/* Decorative gradient overlay */}
                            <div 
                                className="absolute top-0 left-0 w-full h-1"
                                style={{
                                    background: 'linear-gradient(90deg, #14b8a6, #0d9488)'
                                }}
                            />

                            <div className="flex items-center gap-2 mb-4">
                                <BookOpen size={20} style={{ color: '#14b8a6' }} />
                                <h2 className="text-xl font-bold" style={{ color: 'var(--black)' }}>
                                    Instruksi Tugas
                                </h2>
                            </div>
                            <div 
                                className="prose max-w-none markdown-content"
                                style={{ color: 'var(--black-dark)' }}
                            >
                                <ReactMarkdown
                                    components={{
                                        h1: ({ children }) => (
                                            <h1 className="text-2xl font-bold mb-4 mt-6" style={{ color: 'var(--black)' }}>
                                                {children}
                                            </h1>
                                        ),
                                        h2: ({ children }) => (
                                            <h2 className="text-xl font-bold mb-3 mt-5" style={{ color: 'var(--black)' }}>
                                                {children}
                                            </h2>
                                        ),
                                        h3: ({ children }) => (
                                            <h3 className="text-lg font-semibold mb-2 mt-4" style={{ color: 'var(--black)' }}>
                                                {children}
                                            </h3>
                                        ),
                                        h4: ({ children }) => (
                                            <h4 className="text-base font-semibold mb-2 mt-3" style={{ color: 'var(--black)' }}>
                                                {children}
                                            </h4>
                                        ),
                                        p: ({ children }) => (
                                            <p className="mb-4 text-sm leading-relaxed" style={{ color: 'var(--black-dark)' }}>
                                                {children}
                                            </p>
                                        ),
                                        ul: ({ children }) => (
                                            <ul className="list-disc list-inside mb-4 space-y-1">
                                                {children}
                                            </ul>
                                        ),
                                        ol: ({ children }) => (
                                            <ol className="list-decimal list-inside mb-4 space-y-1">
                                                {children}
                                            </ol>
                                        ),
                                        li: ({ children }) => (
                                            <li className="text-sm mb-1" style={{ color: 'var(--black-dark)' }}>
                                                {children}
                                            </li>
                                        ),
                                        strong: ({ children }) => (
                                            <strong className="font-semibold" style={{ color: 'var(--black)' }}>
                                                {children}
                                            </strong>
                                        ),
                                        em: ({ children }) => (
                                            <em className="italic" style={{ color: 'var(--black-dark)' }}>
                                                {children}
                                            </em>
                                        ),
                                        code: ({ children }) => (
                                            <code 
                                                className="px-2 py-1 rounded text-sm font-mono"
                                                style={{ 
                                                    backgroundColor: 'var(--white)', 
                                                    color: 'var(--black)',
                                                    border: '1px solid var(--black-light)'
                                                }}
                                            >
                                                {children}
                                            </code>
                                        ),
                                        pre: ({ children }) => (
                                            <pre 
                                                className="p-4 rounded-lg text-sm font-mono overflow-x-auto mb-4"
                                                style={{ 
                                                    backgroundColor: 'var(--white)', 
                                                    color: 'var(--black)',
                                                    border: '1px solid var(--black-light)'
                                                }}
                                            >
                                                {children}
                                            </pre>
                                        ),
                                        a: ({ href, children }) => (
                                            <a 
                                                href={href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="underline hover:no-underline"
                                                style={{ color: '#14b8a6' }}
                                            >
                                                {children}
                                            </a>
                                        ),
                                        blockquote: ({ children }) => (
                                            <blockquote 
                                                className="border-l-4 pl-4 py-2 mb-4 italic"
                                                style={{ 
                                                    borderColor: '#14b8a6',
                                                    backgroundColor: 'var(--white)',
                                                    color: 'var(--black-dark)'
                                                }}
                                            >
                                                {children}
                                            </blockquote>
                                        )
                                    }}
                                >
                                    {task.instructions}
                                </ReactMarkdown>
                            </div>
                        </motion.div>

                        {/* Objectives */}
                        <motion.div
                            className="p-6 rounded-xl shadow-lg backdrop-blur-sm relative overflow-hidden"
                            style={{ 
                                backgroundColor: 'rgba(239, 239, 239, 0.8)',
                                boxShadow: '0 10px 25px rgba(20, 184, 166, 0.1)'
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            {/* Decorative gradient overlay */}
                            <div 
                                className="absolute top-0 left-0 w-full h-1"
                                style={{
                                    background: 'linear-gradient(90deg, #14b8a6, #0d9488)'
                                }}
                            />

                            <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--black)' }}>
                                Tujuan Pembelajaran
                            </h2>
                            <ul className="space-y-2">
                                {getTaskObjectives(task.instructions).map((objective, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <CheckCircle size={16} style={{ color: '#14b8a6', marginTop: '2px' }} />
                                        <span className="text-sm" style={{ color: 'var(--black-dark)' }}>
                                            {objective}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Requirements */}
                        <motion.div
                            className="p-6 rounded-xl shadow-lg backdrop-blur-sm relative overflow-hidden"
                            style={{ 
                                backgroundColor: 'rgba(239, 239, 239, 0.8)',
                                boxShadow: '0 10px 25px rgba(20, 184, 166, 0.1)'
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            {/* Decorative gradient overlay */}
                            <div 
                                className="absolute top-0 left-0 w-full h-1"
                                style={{
                                    background: 'linear-gradient(90deg, #14b8a6, #0d9488)'
                                }}
                            />

                            <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--black)' }}>
                                Persyaratan
                            </h2>
                            <ul className="space-y-2">
                                {getTaskRequirements(task.instructions).map((requirement, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#14b8a6' }} />
                                        <span className="text-sm" style={{ color: 'var(--black-dark)' }}>
                                            {requirement}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Deliverables */}
                        <motion.div
                            className="lg:col-span-2 p-6 rounded-xl shadow-lg backdrop-blur-sm relative overflow-hidden"
                            style={{ 
                                backgroundColor: 'rgba(239, 239, 239, 0.8)',
                                boxShadow: '0 10px 25px rgba(20, 184, 166, 0.1)'
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            {/* Decorative gradient overlay */}
                            <div 
                                className="absolute top-0 left-0 w-full h-1"
                                style={{
                                    background: 'linear-gradient(90deg, #14b8a6, #0d9488)'
                                }}
                            />

                            <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--black)' }}>
                                Deliverables
                            </h2>
                            <ul className="space-y-2">
                                {getTaskDeliverables(task.instructions).map((deliverable, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <CheckCircle size={16} style={{ color: '#14b8a6', marginTop: '2px' }} />
                                        <span className="text-sm" style={{ color: 'var(--black-dark)' }}>
                                            {deliverable}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

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
            <Footer />
        </>
    );
};