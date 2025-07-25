import { motion, type Variants } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Calendar, BookOpen, ExternalLink } from 'lucide-react';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import tugasData from '@/utils/TugasData.json';

interface Task {
    task_number: string;
    title: string;
    competency: string;
    date_given: string;
    deadline: string;
    example_task: string;
    instructions: string;
}

export const DaftarTugas = () => {
    const navigate = useNavigate();

    const tasks: Task[] = tugasData.tasks;

    const handleTaskClick = (taskNumber: string) => {
        // Extract number from task_number (e.g., "Tugas 1" -> "1")
        const taskId = taskNumber.replace('Tugas ', '');
        navigate(`/assignment/${taskId}`);
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

    const getShortInstruction = (instructions: string) => {
        // Get first sentence or first 100 characters
        const firstSentence = instructions.split('.')[0];
        if (firstSentence.length > 100) {
            return firstSentence.substring(0, 100) + '...';
        }
        return firstSentence + '.';
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen p-6" style={{ backgroundColor: 'var(--white)' }}>
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
                    >
                        <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--black)' }}>
                            Daftar Tugas & Assignment
                        </h1>
                        <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--black-dark)', opacity: 0.8 }}>
                            Kumpulan tugas dan assignment yang telah diselesaikan selama perjalanan AI Development
                        </p>
                        <div className="w-24 h-1 bg-blue-500 mx-auto mt-6 rounded-full"></div>
                    </motion.div>

                    {/* Tasks Grid */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {tasks.map((task, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                whileHover={{
                                    scale: 1.02,
                                    transition: { duration: 0.2 }
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div
                                    className="h-full cursor-pointer hover:shadow-lg transition-shadow duration-300 border-0 shadow-md p-6 rounded-xl"
                                    style={{ backgroundColor: 'var(--gray)' }}
                                    onClick={() => handleTaskClick(task.task_number)}
                                >
                                    {/* Task Header */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span
                                                    className={`text-xs px-2 py-1 rounded-full font-medium text-white ${getSyllabusColor(task.competency)}`}
                                                >
                                                    {task.competency}
                                                </span>
                                            </div>
                                            <h3
                                                className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-opacity-80 transition-all"
                                                style={{ color: 'var(--black)' }}
                                            >
                                                {task.task_number} - {task.title}
                                            </h3>
                                        </div>
                                        <ExternalLink size={20} style={{ color: 'var(--black)', opacity: 0.5 }} />
                                    </div>

                                    {/* Task Content */}
                                    <div className="mb-4">
                                        <p
                                            className="text-sm opacity-70 mb-3"
                                            style={{ color: 'var(--black-dark)' }}
                                        >
                                            {getShortInstruction(task.instructions)}
                                        </p>

                                        {/* Dates */}
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-xs">
                                                <Calendar size={14} style={{ color: 'var(--black)' }} />
                                                <span style={{ color: 'var(--black-dark)' }}>Diberikan: {formatDate(task.date_given)}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-xs">
                                                <Calendar size={14} style={{ color: 'var(--black)' }} />
                                                <span style={{ color: 'var(--black-dark)' }}>Deadline: {formatDate(task.deadline)}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Footer */}
                                    <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: 'var(--white)' }}>
                                        <div className="flex items-center gap-2">
                                            <BookOpen size={16} style={{ color: 'var(--black)' }} />
                                            <span className="text-sm font-medium" style={{ color: 'var(--black)' }}>Lihat Detail</span>
                                        </div>
                                        <span
                                            className="text-xs px-2 py-1 rounded-full"
                                            style={{
                                                backgroundColor: 'var(--white)',
                                                color: 'var(--black)'
                                            }}
                                        >
                                            {task.task_number}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
            <Footer />
        </>
    );
};