import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, BookOpen, ExternalLink, CheckCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import tugasData from '@/utils/TugasData.json';
import ReactMarkdown from 'react-markdown';

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
            'Introduction to AI': 'bg-blue-500',
            'AI Development Tools and Framework': 'bg-green-500',
            'Python Programming': 'bg-yellow-500',
            'Data Science': 'bg-purple-500',
            'Machine Learning': 'bg-red-500',
            'Deep Learning': 'bg-indigo-500',
            'AI Applications': 'bg-pink-500',
            'Model Deployment': 'bg-teal-500'
        };
        return colors[competency] || 'bg-gray-500';
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
            <div className="min-h-screen p-6" style={{ backgroundColor: 'var(--white)' }}>
                <div className="max-w-4xl mx-auto">
                    {/* Back Button */}
                    <motion.div
                        className="mb-6"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Button
                            onClick={handleBack}
                            className="flex items-center gap-2 px-4 py-2"
                            style={{
                                backgroundColor: 'var(--gray)',
                                color: 'var(--black)',
                                border: 'none'
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
                        <div className="flex items-center gap-3 mb-4">
                            <span
                                className={`text-sm px-3 py-1 rounded-full font-medium text-white ${getSyllabusColor(task.competency)}`}
                            >
                                {task.competency}
                            </span>
                            <span
                                className="text-sm px-3 py-1 rounded-full"
                                style={{
                                    backgroundColor: 'var(--gray)',
                                    color: 'var(--black)'
                                }}
                            >
                                {task.task_number}
                            </span>
                        </div>

                        <h1
                            className="text-3xl md:text-4xl font-bold mb-4"
                            style={{ color: 'var(--black)' }}
                        >
                            {task.task_number} - {task.title}
                        </h1>

                        {/* Date Info */}
                        <div className="flex flex-wrap gap-6 mb-6">
                            <div className="flex items-center gap-2">
                                <Calendar size={18} style={{ color: 'var(--black)' }} />
                                <span className="text-sm" style={{ color: 'var(--black-dark)' }}>
                                    Diberikan: {formatDate(task.date_given)}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock size={18} style={{ color: 'var(--black)' }} />
                                <span className="text-sm" style={{ color: 'var(--black-dark)' }}>
                                    Deadline: {formatDate(task.deadline)}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle size={18} style={{ color: 'green' }} />
                                <span className="text-sm" style={{ color: 'green' }}>
                                    Selesai
                                </span>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4">
                            <Button
                                className="flex items-center gap-2"
                                style={{
                                    backgroundColor: 'var(--black)',
                                    color: 'var(--white)',
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
                            className="lg:col-span-2 p-6 rounded-xl shadow-md"
                            style={{ backgroundColor: 'var(--gray)' }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <BookOpen size={20} style={{ color: 'var(--black)' }} />
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
                                                style={{ color: 'var(--black)' }}
                                            >
                                                {children}
                                            </a>
                                        ),
                                        blockquote: ({ children }) => (
                                            <blockquote 
                                                className="border-l-4 pl-4 py-2 mb-4 italic"
                                                style={{ 
                                                    borderColor: 'var(--black)',
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
                            className="p-6 rounded-xl shadow-md"
                            style={{ backgroundColor: 'var(--gray)' }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--black)' }}>
                                Tujuan Pembelajaran
                            </h2>
                            <ul className="space-y-2">
                                {getTaskObjectives(task.instructions).map((objective, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <CheckCircle size={16} style={{ color: 'var(--black)', marginTop: '2px' }} />
                                        <span className="text-sm" style={{ color: 'var(--black-dark)' }}>
                                            {objective}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Requirements */}
                        <motion.div
                            className="p-6 rounded-xl shadow-md"
                            style={{ backgroundColor: 'var(--gray)' }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--black)' }}>
                                Persyaratan
                            </h2>
                            <ul className="space-y-2">
                                {getTaskRequirements(task.instructions).map((requirement, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: 'var(--black)' }} />
                                        <span className="text-sm" style={{ color: 'var(--black-dark)' }}>
                                            {requirement}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Deliverables */}
                        <motion.div
                            className="lg:col-span-2 p-6 rounded-xl shadow-md"
                            style={{ backgroundColor: 'var(--gray)' }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--black)' }}>
                                Deliverables
                            </h2>
                            <ul className="space-y-2">
                                {getTaskDeliverables(task.instructions).map((deliverable, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <CheckCircle size={16} style={{ color: 'green', marginTop: '2px' }} />
                                        <span className="text-sm" style={{ color: 'var(--black-dark)' }}>
                                            {deliverable}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};