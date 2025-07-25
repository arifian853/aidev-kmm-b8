import { motion, type Variants } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Code, Database, Brain, Cpu, Rocket, Users, Wrench, Lightbulb } from 'lucide-react';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { useNavigate } from 'react-router-dom';
import syllabusData from '@/utils/SilabusData.json';

// Mapping icon untuk setiap kategori
const getIconForCategory = (category: string) => {
  const categoryLower = category.toLowerCase();
  if (categoryLower.includes('introduction') || categoryLower.includes('ai')) return Lightbulb;
  if (categoryLower.includes('tools') || categoryLower.includes('frameworks')) return Wrench;
  if (categoryLower.includes('python')) return Code;
  if (categoryLower.includes('data science')) return Database;
  if (categoryLower.includes('machine learning')) return Brain;
  if (categoryLower.includes('deep learning')) return Cpu;
  if (categoryLower.includes('applications')) return Rocket;
  if (categoryLower.includes('deployment')) return BookOpen;
  if (categoryLower.includes('soft skills')) return Users;
  return BookOpen; // default icon
};

// Mapping warna untuk setiap kategori
const getColorForCategory = (index: number) => {
  const colors = [
    'bg-blue-500',
    'bg-green-500', 
    'bg-yellow-500',
    'bg-purple-500',
    'bg-red-500',
    'bg-indigo-500',
    'bg-pink-500',
    'bg-teal-500',
    'bg-orange-500'
  ];
  return colors[index % colors.length];
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
  
  const handleSyllabusClick = (syllabusIndex: number) => {
    // Navigate ke halaman silabus dengan index (dimulai dari 0)
    navigate(`/silabus/${syllabusIndex}`);
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
            {syllabusData.courses.map((course, index) => {
              const IconComponent = getIconForCategory(course.category);
              const color = getColorForCategory(index);
              return (
                <motion.div
                  key={index}
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
                        <div className={`p-2 rounded-lg ${color} text-white`}>
                          <IconComponent size={24} />
                        </div>
                        <div className="text-sm font-medium" style={{ color: 'var(--black-dark)', opacity: 0.7 }}>
                          Modul {index + 1}
                        </div>
                      </div>
                      <CardTitle className="text-xl font-bold leading-tight" style={{ color: 'var(--black)' }}>
                        {course.category}
                      </CardTitle>
                      <CardDescription className="mt-2 min-h-[40px]" style={{ color: 'var(--black-dark)', opacity: 0.8 }}>
                        {course.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <Button
                        className="w-full text-white hover:opacity-90 transition-opacity"
                        style={{ backgroundColor: 'var(--black)', borderColor: 'var(--black)' }}
                        onClick={() => handleSyllabusClick(index)}
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
