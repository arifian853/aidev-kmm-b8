import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, BookOpen, ExternalLink, CheckCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';

interface TaskDetail {
    id: number;
    title: string;
    instruction: string;
    dateGiven: string;
    deadline: string;
    syllabus: string;
    taskLink: string;
    solutionLink: string;
    description: string;
    objectives: string[];
    requirements: string[];
    deliverables: string[];
}

export const Tugas = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const taskData: { [key: string]: TaskDetail } = {
        '1': {
            id: 1,
            title: "Tugas 1 - Tugas Esai: Refleksi dan Pandangan Pribadi tentang AI",
            instruction: "Menulis esai reflektif tentang pemahaman dan pandangan pribadi mengenai Artificial Intelligence",
            dateGiven: "2025-03-01",
            deadline: "2025-03-07",
            syllabus: "AI Introduction",
            taskLink: "http://example.com/tugas1",
            solutionLink: "http://example.com/solusi1",
            description: "Tugas ini bertujuan untuk mengeksplorasi pemahaman awal tentang AI dan bagaimana teknologi ini dapat mempengaruhi kehidupan sehari-hari. Mahasiswa diminta untuk menulis esai yang mencerminkan pandangan pribadi mereka tentang perkembangan AI di masa depan.",
            objectives: [
                "Memahami konsep dasar Artificial Intelligence",
                "Menganalisis dampak AI terhadap masyarakat",
                "Mengembangkan kemampuan berpikir kritis tentang teknologi AI",
                "Melatih kemampuan menulis akademik"
            ],
            requirements: [
                "Esai minimal 1000 kata",
                "Menggunakan minimal 3 referensi akademik",
                "Format APA untuk sitasi",
                "Struktur esai: pendahuluan, isi, kesimpulan"
            ],
            deliverables: [
                "File PDF esai",
                "Daftar referensi",
                "Refleksi singkat (200 kata)"
            ]
        },
        '2': {
            id: 2,
            title: "Tugas 2 - Mini Project: Eksplorasi Matematika Dasar untuk Machine Learning",
            instruction: "Mengeksplorasi konsep matematika fundamental yang digunakan dalam machine learning",
            dateGiven: "2025-03-04",
            deadline: "2025-03-10",
            syllabus: "AI Introduction",
            taskLink: "http://example.com/tugas2",
            solutionLink: "http://example.com/solusi2",
            description: "Project ini fokus pada pemahaman matematika dasar yang menjadi fondasi machine learning, termasuk aljabar linear, kalkulus, statistik, dan probabilitas.",
            objectives: [
                "Memahami konsep aljabar linear untuk ML",
                "Menguasai dasar-dasar kalkulus dalam optimisasi",
                "Memahami statistik dan probabilitas",
                "Implementasi konsep matematika dalam Python"
            ],
            requirements: [
                "Jupyter Notebook dengan implementasi",
                "Visualisasi menggunakan matplotlib/seaborn",
                "Penjelasan konsep dalam markdown",
                "Contoh aplikasi dalam ML"
            ],
            deliverables: [
                "Jupyter Notebook (.ipynb)",
                "File Python (.py)",
                "Laporan PDF",
                "Presentasi singkat"
            ]
        }

    };

    const task = taskData[id || '1'] || taskData['1'];

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    };

    const getSyllabusColor = (syllabus: string) => {
        const colors: { [key: string]: string } = {
            'AI Introduction': 'var(--black)',
            'AI Development Tools and Frameworks': 'var(--black-dark)',
            'Python Programming': 'var(--black)',
            'Data Science': 'var(--black-dark)',
            'Machine Learning': 'var(--black)',
            'Deep Learning': 'var(--black-dark)',
            'AI Application': 'var(--black)',
            'Model Deployment': 'var(--black-dark)'
        };
        return colors[syllabus] || 'var(--black)';
    };

    const handleBack = () => {
        navigate('/assignment');
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
                                className="text-sm px-3 py-1 rounded-full font-medium"
                                style={{
                                    backgroundColor: getSyllabusColor(task.syllabus),
                                    color: 'var(--white)'
                                }}
                            >
                                {task.syllabus}
                            </span>
                            <span
                                className="text-sm px-3 py-1 rounded-full"
                                style={{
                                    backgroundColor: 'var(--gray)',
                                    color: 'var(--black)'
                                }}
                            >
                                Tugas #{task.id}
                            </span>
                        </div>

                        <h1
                            className="text-3xl md:text-4xl font-bold mb-4"
                            style={{ color: 'var(--black)' }}
                        >
                            {task.title}
                        </h1>

                        <p
                            className="text-lg opacity-80 mb-6"
                            style={{ color: 'var(--black-dark)' }}
                        >
                            {task.instruction}
                        </p>

                        {/* Date Info */}
                        <div className="flex flex-wrap gap-6 mb-6">
                            <div className="flex items-center gap-2">
                                <Calendar size={18} style={{ color: 'var(--black)' }} />
                                <span className="text-sm" style={{ color: 'var(--black-dark)' }}>
                                    Diberikan: {formatDate(task.dateGiven)}
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
                                onClick={() => window.open(task.taskLink, '_blank')}
                            >
                                <ExternalLink size={16} />
                                Lihat Tugas
                            </Button>
                            <Button
                                className="flex items-center gap-2"
                                style={{
                                    backgroundColor: 'var(--black-dark)',
                                    color: 'var(--white)',
                                    border: 'none'
                                }}
                                onClick={() => window.open(task.solutionLink, '_blank')}
                            >
                                <CheckCircle size={16} />
                                Lihat Solusi
                            </Button>
                        </div>
                    </motion.div>

                    {/* Content Sections */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Description */}
                        <motion.div
                            className="p-6 rounded-xl shadow-md"
                            style={{ backgroundColor: 'var(--gray)' }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <BookOpen size={20} style={{ color: 'var(--black)' }} />
                                <h2 className="text-xl font-bold" style={{ color: 'var(--black)' }}>
                                    Deskripsi
                                </h2>
                            </div>
                            <p className="text-sm leading-relaxed" style={{ color: 'var(--black-dark)' }}>
                                {task.description}
                            </p>
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
                                {task.objectives.map((objective, index) => (
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
                                {task.requirements.map((requirement, index) => (
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
                            className="p-6 rounded-xl shadow-md"
                            style={{ backgroundColor: 'var(--gray)' }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--black)' }}>
                                Deliverables
                            </h2>
                            <ul className="space-y-2">
                                {task.deliverables.map((deliverable, index) => (
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