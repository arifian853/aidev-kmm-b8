import { motion, type Variants } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Clock, BookOpen, Users, CheckCircle, PlayCircle, FileText, Video } from 'lucide-react';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { useParams, useNavigate } from 'react-router-dom';

// Definisi tipe data
interface Module {
  id: number;
  title: string;
  description: string;
  duration: string;
  type: string;
  completed: boolean;
}

interface SyllabusContent {
  title: string;
  description: string;
  duration: string;
  students: string;
  level: string;
  modules: Module[];
}

interface SyllabusData {
  [key: number]: SyllabusContent;
}

// Data silabus berdasarkan ID
const syllabusData: SyllabusData = {
  1: {
    title: 'Introduction to AI',
    description: 'Pengenalan dasar tentang Artificial Intelligence dan konsep fundamentalnya',
    duration: '4 Minggu',
    students: '150+ Peserta',
    level: 'Beginner',
    modules: [
      {
        id: 1,
        title: 'Apa itu Artificial Intelligence?',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        duration: '45 menit',
        type: 'video',
        completed: true
      },
      {
        id: 2,
        title: 'Sejarah dan Perkembangan AI',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        duration: '30 menit',
        type: 'reading',
        completed: true
      },
      {
        id: 3,
        title: 'Jenis-jenis AI dan Aplikasinya',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        duration: '60 menit',
        type: 'video',
        completed: false
      },
      {
        id: 4,
        title: 'Machine Learning vs Deep Learning',
        description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        duration: '40 menit',
        type: 'reading',
        completed: false
      },
      {
        id: 5,
        title: 'Etika dalam AI',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
        duration: '35 menit',
        type: 'video',
        completed: false
      },
      {
        id: 6,
        title: 'Quiz: Pemahaman Dasar AI',
        description: 'Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.',
        duration: '20 menit',
        type: 'quiz',
        completed: false
      }
    ]
  },
  2: {
    title: 'AI Dev. Tools and Frameworks',
    description: 'Tools dan framework yang digunakan dalam pengembangan AI',
    duration: '3 Minggu',
    students: '120+ Peserta',
    level: 'Intermediate',
    modules: [
      {
        id: 1,
        title: 'Pengenalan Development Tools',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        duration: '40 menit',
        type: 'video',
        completed: false
      },
      {
        id: 2,
        title: 'Sejarah dan Perkembangan AI',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        duration: '30 menit',
        type: 'reading',
        completed: true
      },
      {
        id: 3,
        title: 'Jenis-jenis AI dan Aplikasinya',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        duration: '60 menit',
        type: 'video',
        completed: false
      },
      {
        id: 4,
        title: 'Machine Learning vs Deep Learning',
        description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        duration: '40 menit',
        type: 'reading',
        completed: false
      },
      {
        id: 5,
        title: 'Etika dalam AI',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
        duration: '35 menit',
        type: 'video',
        completed: false
      },
      {
        id: 6,
        title: 'Quiz: Pemahaman Dasar AI',
        description: 'Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.',
        duration: '20 menit',
        type: 'quiz',
        completed: false
      }
    ]
  },
  // ... tambahkan data untuk ID 3-9 sesuai kebutuhan
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0.0, 0.2, 1]
    }
  }
};

const progressVariants: Variants = {
  hidden: { width: 0 },
  visible: {
    width: '33%',
    transition: {
      duration: 1,
      ease: [0.4, 0.0, 0.2, 1],
      delay: 0.5
    }
  }
};

export const Silabus = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // Ambil data silabus berdasarkan ID dengan tipe yang aman
  const syllabusId = parseInt(id || '1');
  const syllabusContent = syllabusData[syllabusId] || syllabusData[1];
  
  const completedModules = syllabusContent.modules.filter((module: Module) => module.completed).length;
  const totalModules = syllabusContent.modules.length;
  const progressPercentage = (completedModules / totalModules) * 100;

  const handleBackClick = () => {
    navigate('/silabus');
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <Video size={16} />;
      case 'reading':
        return <FileText size={16} />;
      case 'quiz':
        return <CheckCircle size={16} />;
      default:
        return <BookOpen size={16} />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'video':
        return 'bg-blue-500';
      case 'reading':
        return 'bg-green-500';
      case 'quiz':
        return 'bg-purple-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen p-6" style={{ backgroundColor: 'var(--white)' }}>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
          >
            <Button 
              variant="ghost" 
              className="mb-4 p-0 h-auto"
              style={{ color: 'var(--black-dark)' }}
              onClick={handleBackClick}
            >
              <ArrowLeft size={20} className="mr-2" />
              Kembali ke Daftar Silabus
            </Button>
            
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="flex-1">
                <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--black)' }}>
                  {syllabusContent.title}
                </h1>
                <p className="text-lg mb-6" style={{ color: 'var(--black-dark)', opacity: 0.8 }}>
                  {syllabusContent.description}
                </p>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Clock size={16} style={{ color: 'var(--black-dark)' }} />
                    <span className="text-sm" style={{ color: 'var(--black-dark)' }}>{syllabusContent.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={16} style={{ color: 'var(--black-dark)' }} />
                    <span className="text-sm" style={{ color: 'var(--black-dark)' }}>{syllabusContent.students}</span>
                  </div>
                  <Badge className="bg-blue-500 text-white">{syllabusContent.level}</Badge>
                </div>
              </div>
              
              {/* Progress Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card className="w-full lg:w-80" style={{ backgroundColor: 'var(--gray)' }}>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg" style={{ color: 'var(--black)' }}>Progress Pembelajaran</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm" style={{ color: 'var(--black-dark)' }}>Selesai</span>
                        <span className="text-sm font-medium" style={{ color: 'var(--black)' }}>
                          {completedModules}/{totalModules} Modul
                        </span>
                      </div>
                      <div className="w-full bg-gray-300 rounded-full h-2">
                        <motion.div
                          className="bg-blue-500 h-2 rounded-full"
                          variants={progressVariants}
                          initial="hidden"
                          animate="visible"
                          style={{ width: `${progressPercentage}%` }}
                        />
                      </div>
                    </div>
                    <Button 
                      className="w-full text-white"
                      style={{ backgroundColor: 'var(--black)' }}
                    >
                      <PlayCircle size={16} className="mr-2" />
                      Lanjutkan Belajar
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>

          {/* Modules List */}
          <motion.div
            className="mb-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--black)' }}>Materi Pembelajaran</h2>
            
            <div className="space-y-4">
              {syllabusContent.modules.map((module: Module, index: number) => (
                <motion.div
                  key={module.id}
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.01,
                    transition: { duration: 0.2 }
                  }}
                >
                  <Card 
                    className="cursor-pointer hover:shadow-lg transition-shadow duration-300 border-0 shadow-md"
                    style={{ backgroundColor: 'var(--gray)' }}
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4 flex-1">
                          <div className="flex items-center gap-2">
                            <div className={`p-2 rounded-lg ${getTypeColor(module.type)} text-white`}>
                              {getTypeIcon(module.type)}
                            </div>
                            {module.completed && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                              >
                                <CheckCircle size={20} className="text-green-500" />
                              </motion.div>
                            )}
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-sm font-medium" style={{ color: 'var(--black-dark)', opacity: 0.7 }}>
                                Modul {module.id}
                              </span>
                              <Badge variant="outline" className="text-xs">
                                {module.type}
                              </Badge>
                            </div>
                            <CardTitle className="text-lg font-bold mb-2" style={{ color: 'var(--black)' }}>
                              {module.title}
                            </CardTitle>
                            <CardDescription style={{ color: 'var(--black-dark)', opacity: 0.8 }}>
                              {module.description}
                            </CardDescription>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2 ml-4">
                          <Clock size={14} style={{ color: 'var(--black-dark)' }} />
                          <span className="text-sm" style={{ color: 'var(--black-dark)' }}>{module.duration}</span>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Summary Card */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Card className="text-center p-6" style={{ backgroundColor: 'var(--gray)' }}>
              <CardHeader>
                <CardTitle className="text-xl" style={{ color: 'var(--black)' }}>Siap Memulai Perjalanan AI Anda?</CardTitle>
                <CardDescription style={{ color: 'var(--black-dark)', opacity: 0.8 }}>
                  Bergabunglah dengan ribuan peserta lainnya dan kuasai dasar-dasar Artificial Intelligence
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  size="lg" 
                  className="text-white px-8"
                  style={{ backgroundColor: 'var(--black)' }}
                >
                  <PlayCircle size={20} className="mr-2" />
                  Mulai Sekarang
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};