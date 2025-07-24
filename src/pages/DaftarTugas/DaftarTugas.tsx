import { motion, type Variants } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Calendar, BookOpen, ExternalLink } from 'lucide-react';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';

interface Task {
    id: number;
    title: string;
    instruction: string;
    dateGiven: string;
    deadline: string;
    syllabus: string;
    taskLink: string;
    solutionLink: string;
}

export const DaftarTugas = () => {
    const navigate = useNavigate();

    const tasks: Task[] = [
        {
            id: 1,
            title: "Tugas 1 - Tugas Esai: Refleksi dan Pandangan Pribadi tentang AI",
            instruction: "Lorem ipsum dolor sit amet",
            dateGiven: "2025-03-01",
            deadline: "2025-03-07",
            syllabus: "AI Introduction",
            taskLink: "http://example.com/tugas1",
            solutionLink: "http://example.com/solusi1"
        },
        {
            id: 2,
            title: "Tugas 2 - Mini Project: Eksplorasi Matematika Dasar untuk Machine Learning",
            instruction: "Lorem ipsum dolor sit amet",
            dateGiven: "2025-03-04",
            deadline: "2025-03-10",
            syllabus: "AI Introduction",
            taskLink: "http://example.com/tugas2",
            solutionLink: "http://example.com/solusi2"
        },
        {
            id: 3,
            title: "Tugas 3 - Mini Project: Beautify your GitHub Account! - Make a custom README.MD Profile",
            instruction: "Lorem ipsum dolor sit amet",
            dateGiven: "2025-03-06",
            deadline: "2025-03-12",
            syllabus: "AI Development Tools and Frameworks",
            taskLink: "http://example.com/tugas3",
            solutionLink: "http://example.com/solusi3"
        },
        {
            id: 4,
            title: "Tugas 4 - Mini Project: Dasar - dasar Python",
            instruction: "Lorem ipsum dolor sit amet",
            dateGiven: "2025-03-08",
            deadline: "2025-03-14",
            syllabus: "Python Programming",
            taskLink: "http://example.com/tugas4",
            solutionLink: "http://example.com/solusi4"
        },
        {
            id: 5,
            title: "Tugas 5 - Mini Project: Pemrograman Python menggunakan Function and Class",
            instruction: "Lorem ipsum dolor sit amet",
            dateGiven: "2025-03-10",
            deadline: "2025-03-16",
            syllabus: "Python Programming",
            taskLink: "http://example.com/tugas5",
            solutionLink: "http://example.com/solusi5"
        },
        {
            id: 6,
            title: "Tugas 6 - Mini Project: Pengenalan Object-Oriented Programming (OOP) di Python",
            instruction: "Lorem ipsum dolor sit amet",
            dateGiven: "2025-03-12",
            deadline: "2025-03-18",
            syllabus: "Python Programming",
            taskLink: "http://example.com/tugas6",
            solutionLink: "http://example.com/solusi6"
        },
        {
            id: 7,
            title: "Tugas 7 - Mini Project: Exploratory Data Analysis",
            instruction: "Lorem ipsum dolor sit amet",
            dateGiven: "2025-03-15",
            deadline: "2025-03-21",
            syllabus: "Data Science",
            taskLink: "http://example.com/tugas7",
            solutionLink: "http://example.com/solusi7"
        },
        {
            id: 8,
            title: "Tugas 8 - Mini Project: Praktikum Data Science",
            instruction: "Lorem ipsum dolor sit amet",
            dateGiven: "2025-03-18",
            deadline: "2025-03-24",
            syllabus: "Data Science",
            taskLink: "http://example.com/tugas8",
            solutionLink: "http://example.com/solusi8"
        },
        {
            id: 9,
            title: "Tugas 9 - Project: Predicting Rain Rate (RR) using Linear Regression",
            instruction: "Lorem ipsum dolor sit amet",
            dateGiven: "2025-03-20",
            deadline: "2025-03-27",
            syllabus: "Machine Learning",
            taskLink: "http://example.com/tugas9",
            solutionLink: "http://example.com/solusi9"
        },
        {
            id: 10,
            title: "Tugas 10 - Project: Predicting Power Consumption using Linear Regression",
            instruction: "Lorem ipsum dolor sit amet",
            dateGiven: "2025-03-22",
            deadline: "2025-03-29",
            syllabus: "Machine Learning",
            taskLink: "http://example.com/tugas10",
            solutionLink: "http://example.com/solusi10"
        },
        {
            id: 11,
            title: "Tugas 11 - Project: Sunshine Classification using Logistic Regression",
            instruction: "Lorem ipsum dolor sit amet",
            dateGiven: "2025-03-24",
            deadline: "2025-03-31",
            syllabus: "Machine Learning",
            taskLink: "http://example.com/tugas11",
            solutionLink: "http://example.com/solusi11"
        },
        {
            id: 12,
            title: "Tugas 12 - Project: Iris Flower Classification with Decision Tree",
            instruction: "Lorem ipsum dolor sit amet",
            dateGiven: "2025-03-26",
            deadline: "2025-04-02",
            syllabus: "Machine Learning",
            taskLink: "http://example.com/tugas12",
            solutionLink: "http://example.com/solusi12"
        },
        {
            id: 13,
            title: "Tugas 13 - Project: Mall Customers Clustering with KMeans, DBSCAN, & Agglomerative",
            instruction: "Lorem ipsum dolor sit amet",
            dateGiven: "2025-03-28",
            deadline: "2025-04-04",
            syllabus: "Machine Learning",
            taskLink: "http://example.com/tugas13",
            solutionLink: "http://example.com/solusi13"
        },
        {
            id: 14,
            title: "Tugas 14 - Project: Fashion MNIST Image Classification with TensorFlow/Keras",
            instruction: "Lorem ipsum dolor sit amet",
            dateGiven: "2025-04-01",
            deadline: "2025-04-08",
            syllabus: "Deep Learning",
            taskLink: "http://example.com/tugas14",
            solutionLink: "http://example.com/solusi14"
        },
        {
            id: 15,
            title: "Tugas 15 - Mini Quiz: Neural Network Base Knowledge Quiz",
            instruction: "Lorem ipsum dolor sit amet",
            dateGiven: "2025-04-03",
            deadline: "2025-04-06",
            syllabus: "Deep Learning",
            taskLink: "http://example.com/tugas15",
            solutionLink: "http://example.com/solusi15"
        },
        {
            id: 16,
            title: "Tugas 16 - Mini Project: Natural Language Processing with Hugging Face Transformers",
            instruction: "Lorem ipsum dolor sit amet",
            dateGiven: "2025-04-05",
            deadline: "2025-04-12",
            syllabus: "AI Application",
            taskLink: "http://example.com/tugas16",
            solutionLink: "http://example.com/solusi16"
        },
        {
            id: 17,
            title: "Tugas 17 - Course Completion : Prompt Engineering for Everyone",
            instruction: "Lorem ipsum dolor sit amet",
            dateGiven: "2025-04-07",
            deadline: "2025-04-14",
            syllabus: "AI Application",
            taskLink: "http://example.com/tugas17",
            solutionLink: "http://example.com/solusi17"
        },
        {
            id: 18,
            title: "Tugas 18 - Project: Retrieval-Augmented Generation with Gradio and Groq API Key",
            instruction: "Lorem ipsum dolor sit amet",
            dateGiven: "2025-04-10",
            deadline: "2025-04-17",
            syllabus: "AI Application",
            taskLink: "http://example.com/tugas18",
            solutionLink: "http://example.com/solusi18"
        },
        {
            id: 19,
            title: "Tugas 19 - Mini Project: Face Recognition System using OpenCV",
            instruction: "Lorem ipsum dolor sit amet",
            dateGiven: "2025-04-12",
            deadline: "2025-04-19",
            syllabus: "AI Application",
            taskLink: "http://example.com/tugas19",
            solutionLink: "http://example.com/solusi19"
        },
        {
            id: 20,
            title: "Tugas 20 - Mini Project: Convolution Neural Networks - Brain Tumor Classification",
            instruction: "Lorem ipsum dolor sit amet",
            dateGiven: "2025-04-14",
            deadline: "2025-04-21",
            syllabus: "AI Application",
            taskLink: "http://example.com/tugas20",
            solutionLink: "http://example.com/solusi20"
        },
        {
            id: 21,
            title: "Tugas 21 - Quiz : Computer Vision Quiz",
            instruction: "Lorem ipsum dolor sit amet",
            dateGiven: "2025-04-16",
            deadline: "2025-04-18",
            syllabus: "AI Application",
            taskLink: "http://example.com/tugas21",
            solutionLink: "http://example.com/solusi21"
        },
        {
            id: 22,
            title: "Tugas 22 - Essay: Analysis on Time Series Specific Libraries",
            instruction: "Lorem ipsum dolor sit amet",
            dateGiven: "2025-04-18",
            deadline: "2025-04-24",
            syllabus: "AI Application",
            taskLink: "http://example.com/tugas22",
            solutionLink: "http://example.com/solusi22"
        },
        {
            id: 23,
            title: "Tugas 23 - Mini Project: Use Attention Mechanism Layer on LSTM",
            instruction: "Lorem ipsum dolor sit amet",
            dateGiven: "2025-04-20",
            deadline: "2025-04-27",
            syllabus: "AI Application",
            taskLink: "http://example.com/tugas23",
            solutionLink: "http://example.com/solusi23"
        },
        {
            id: 24,
            title: "Tugas 24 - Mini-Project: Movie Recommendation with Content-Based Filtering",
            instruction: "Lorem ipsum dolor sit amet",
            dateGiven: "2025-04-22",
            deadline: "2025-04-29",
            syllabus: "AI Application",
            taskLink: "http://example.com/tugas24",
            solutionLink: "http://example.com/solusi24"
        },
        {
            id: 25,
            title: "Tugas 25 - Mini Project: Speech Classification with CNN",
            instruction: "Lorem ipsum dolor sit amet",
            dateGiven: "2025-04-24",
            deadline: "2025-05-01",
            syllabus: "AI Application",
            taskLink: "http://example.com/tugas25",
            solutionLink: "http://example.com/solusi25"
        },
        {
            id: 26,
            title: "Tugas 26 - Essay: Comparison of Learning Methods and Basic Understanding of Reinforcement Learning Concepts",
            instruction: "Lorem ipsum dolor sit amet",
            dateGiven: "2025-04-26",
            deadline: "2025-05-03",
            syllabus: "AI Application",
            taskLink: "http://example.com/tugas26",
            solutionLink: "http://example.com/solusi26"
        },
        {
            id: 27,
            title: "Tugas 27 - Project: Deploying a Machine Learning Model with Flask API on Hugging Face Spaces",
            instruction: "Lorem ipsum dolor sit amet",
            dateGiven: "2025-04-28",
            deadline: "2025-05-05",
            syllabus: "Model Deployment",
            taskLink: "http://example.com/tugas27",
            solutionLink: "http://example.com/solusi27"
        }
    ];

    const handleTaskClick = (taskId: number) => {
        navigate(`/assignment/${taskId}`);
    };

    const getSyllabusColor = (syllabus: string) => {
        const colors: { [key: string]: string } = {
            'AI Introduction': 'bg-blue-500',
            'AI Development Tools and Frameworks': 'bg-green-500',
            'Python Programming': 'bg-yellow-500',
            'Data Science': 'bg-purple-500',
            'Machine Learning': 'bg-red-500',
            'Deep Learning': 'bg-indigo-500',
            'AI Application': 'bg-pink-500',
            'Model Deployment': 'bg-teal-500'
        };
        return colors[syllabus] || 'bg-gray-500';
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
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
                        {tasks.map((task) => (
                            <motion.div
                                key={task.id}
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
                                    onClick={() => handleTaskClick(task.id)}
                                >
                                    {/* Task Header */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span
                                                    className={`text-xs px-2 py-1 rounded-full font-medium text-white ${getSyllabusColor(task.syllabus)}`}
                                                >
                                                    {task.syllabus}
                                                </span>
                                            </div>
                                            <h3
                                                className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-opacity-80 transition-all"
                                                style={{ color: 'var(--black)' }}
                                            >
                                                {task.title}
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
                                            {task.instruction}
                                        </p>

                                        {/* Dates */}
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-xs">
                                                <Calendar size={14} style={{ color: 'var(--black)' }} />
                                                <span style={{ color: 'var(--black-dark)' }}>Diberikan: {formatDate(task.dateGiven)}</span>
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
                                            Tugas #{task.id}
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