import { motion, type Variants } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Code, Database, Brain, Cpu, Rocket, Users, Wrench, Lightbulb } from 'lucide-react';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { useNavigate } from 'react-router-dom';

const syllabusData = [
  {
    id: 1,
    title: 'Introduction to AI',
    description: 'Pengenalan dasar tentang Artificial Intelligence dan konsep fundamentalnya',
    icon: Lightbulb,
    color: 'bg-blue-500'
  },
  {
    id: 2,
    title: 'AI Dev. Tools and Frameworks',
    description: 'Tools dan framework yang digunakan dalam pengembangan AI',
    icon: Wrench,
    color: 'bg-green-500'
  },
  {
    id: 3,
    title: 'Python Programming',
    description: 'Pemrograman Python untuk AI dan Data Science',
    icon: Code,
    color: 'bg-yellow-500'
  },
  {
    id: 4,
    title: 'Data Science',
    description: 'Analisis data, visualisasi, dan statistical modeling',
    icon: Database,
    color: 'bg-purple-500'
  },
  {
    id: 5,
    title: 'Machine Learning',
    description: 'Algoritma machine learning dan implementasinya',
    icon: Brain,
    color: 'bg-red-500'
  },
  {
    id: 6,
    title: 'Deep Learning',
    description: 'Neural networks dan deep learning architectures',
    icon: Cpu,
    color: 'bg-indigo-500'
  },
  {
    id: 7,
    title: 'AI Applications',
    description: 'Penerapan AI dalam berbagai industri dan use cases',
    icon: Rocket,
    color: 'bg-pink-500'
  },
  {
    id: 8,
    title: 'Model Deployment',
    description: 'Deploy model AI ke production environment',
    icon: BookOpen,
    color: 'bg-teal-500'
  },
  {
    id: 9,
    title: 'Soft Skills',
    description: 'Komunikasi, teamwork, dan professional skills',
    icon: Users,
    color: 'bg-orange-500'
  }
];

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0.0, 0.2, 1]
    }
  }
};

export const SilabusList = () => {
  const navigate = useNavigate();
  
  const handleSyllabusClick = (syllabusId: number) => {
    // Navigate ke halaman silabus dengan ID
    navigate(`/silabus/${syllabusId}`);
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
              Silabus Pembelajaran
            </h1>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--black-dark)', opacity: 0.8 }}>
              Kampus Merdeka Mandiri Batch 8 - Artificial Intelligence Batch 1
            </p>
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-6 rounded-full"></div>
          </motion.div>

          {/* Silabus Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {syllabusData.map((syllabus) => {
              const IconComponent = syllabus.icon;
              return (
                <motion.div
                  key={syllabus.id}
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card
                    className="h-full cursor-pointer hover:shadow-lg transition-shadow duration-300 border-0 shadow-md"
                    style={{ backgroundColor: 'var(--gray)' }}
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`p-2 rounded-lg ${syllabus.color} text-white`}>
                          <IconComponent size={24} />
                        </div>
                        <div className="text-sm font-medium" style={{ color: 'var(--black-dark)', opacity: 0.7 }}>
                          Modul {syllabus.id}
                        </div>
                      </div>
                      <CardTitle className="text-xl font-bold leading-tight" style={{ color: 'var(--black)' }}>
                        {syllabus.title}
                      </CardTitle>
                      <CardDescription className="mt-2 min-h-[40px]" style={{ color: 'var(--black-dark)', opacity: 0.8 }}>
                        {syllabus.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <Button
                        className="w-full text-white hover:opacity-90 transition-opacity"
                        style={{ backgroundColor: 'var(--black)', borderColor: 'var(--black)' }}
                        onClick={() => handleSyllabusClick(syllabus.id)}
                      >
                        Mulai Belajar
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
      <Footer />
    </>

  );
};
