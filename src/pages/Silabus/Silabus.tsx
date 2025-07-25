import { motion, type Variants } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen, Users, Video, FileText, ExternalLink, Calendar } from 'lucide-react';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { useParams, useNavigate } from 'react-router-dom';
import syllabusData from '@/utils/SilabusData.json';

// Definisi tipe data berdasarkan struktur JSON baru
interface ClassItem {
  name: string;
  description: string;
  ppt_class: string;
  date: string;
  reading_module: string;
}

interface PracticeItem {
  title: string;
  url: string;
}

export interface Course {
  category: string;
  description: string;
  classes: ClassItem[];
  practice: PracticeItem[];
}

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

export const Silabus = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // Ambil data silabus berdasarkan ID dengan tipe yang aman
  const courseIndex = parseInt(id || '0');
  const course = syllabusData.courses[courseIndex] || syllabusData.courses[0];

  const handleBackClick = () => {
    navigate('/silabus');
  };

  const getTypeFromUrl = (url: string): string => {
    if (url.includes('canva.com') || url.includes('ppt')) return 'presentation';
    if (url.includes('docs.google.com')) return 'reading';
    if (url.includes('colab.research.google.com')) return 'practice';
    if (url.includes('github.com')) return 'code';
    return 'link';
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'presentation':
        return <Video size={16} />;
      case 'reading':
        return <FileText size={16} />;
      case 'practice':
        return <BookOpen size={16} />;
      case 'code':
        return <ExternalLink size={16} />;
      default:
        return <ExternalLink size={16} />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'presentation':
        return 'bg-blue-500';
      case 'reading':
        return 'bg-green-500';
      case 'practice':
        return 'bg-purple-500';
      case 'code':
        return 'bg-orange-500';
      default:
        return 'bg-gray-500';
    }
  };

  const handleLinkClick = (url: string) => {
    if (url && url !== 'None' && url !== 'None, async') {
      window.open(url, '_blank');
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
            
            <div className="flex flex-col gap-6">
              <div className="flex-1">
                <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--black)' }}>
                  {course.category}
                </h1>
                <p className="text-lg mb-6" style={{ color: 'var(--black-dark)', opacity: 0.8 }}>
                  {course.description}
                </p>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <BookOpen size={16} style={{ color: 'var(--black-dark)' }} />
                    <span className="text-sm" style={{ color: 'var(--black-dark)' }}>{course.classes.length} Kelas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={16} style={{ color: 'var(--black-dark)' }} />
                    <span className="text-sm" style={{ color: 'var(--black-dark)' }}>Dokumentasi Pembelajaran</span>
                  </div>
                  {course.practice.length > 0 && (
                    <div className="flex items-center gap-2">
                      <ExternalLink size={16} style={{ color: 'var(--black-dark)' }} />
                      <span className="text-sm" style={{ color: 'var(--black-dark)' }}>{course.practice.length} Materi Praktik</span>
                    </div>
                  )}
                  <Badge className="bg-blue-500 text-white">Dokumentasi</Badge>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Classes List */}
          <motion.div
            className="mb-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--black)' }}>Materi Pembelajaran</h2>
            
            <div className="space-y-4">
              {course.classes.map((classItem: ClassItem, index: number) => {
                const presentationType = getTypeFromUrl(classItem.ppt_class);
                
                return (
                  <motion.div
                    key={index}
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
                              <div className={`p-2 rounded-lg ${getTypeColor(presentationType)} text-white`}>
                                {getTypeIcon(presentationType)}
                              </div>
                            </div>
                            
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="text-sm font-medium" style={{ color: 'var(--black-dark)', opacity: 0.7 }}>
                                  Kelas {index + 1}
                                </span>
                                <Badge variant="outline" className="text-xs">
                                  {presentationType}
                                </Badge>
                                {classItem.date && classItem.date !== 'None' && (
                                  <div className="flex items-center gap-1">
                                    <Calendar size={12} style={{ color: 'var(--black-dark)' }} />
                                    <span className="text-xs" style={{ color: 'var(--black-dark)' }}>
                                      {classItem.date}
                                    </span>
                                  </div>
                                )}
                              </div>
                              <CardTitle className="text-lg font-bold mb-2" style={{ color: 'var(--black)' }}>
                                {classItem.name}
                              </CardTitle>
                              <CardDescription style={{ color: 'var(--black-dark)', opacity: 0.8 }}>
                                {classItem.description}
                              </CardDescription>
                              
                              {/* Action Buttons */}
                              <div className="flex gap-2 mt-4">
                                {classItem.ppt_class && classItem.ppt_class !== 'None' && classItem.ppt_class !== 'None, async' && (
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => handleLinkClick(classItem.ppt_class)}
                                    className="text-xs"
                                  >
                                    <Video size={12} className="mr-1" />
                                    Presentasi
                                  </Button>
                                )}
                                {classItem.reading_module && classItem.reading_module !== 'None' && (
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => handleLinkClick(classItem.reading_module)}
                                    className="text-xs"
                                  >
                                    <FileText size={12} className="mr-1" />
                                    Modul
                                  </Button>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Practice Section */}
          {course.practice.length > 0 && (
            <motion.div
              className="mb-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--black)' }}>Materi Praktik</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {course.practice.map((practiceItem: PracticeItem, index: number) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <Card 
                      className="cursor-pointer hover:shadow-lg transition-shadow duration-300 border-0 shadow-md h-full"
                      style={{ backgroundColor: 'var(--gray)' }}
                      onClick={() => handleLinkClick(practiceItem.url)}
                    >
                      <CardHeader className="pb-4">
                        <div className="flex items-start gap-3">
                          <div className={`p-2 rounded-lg ${getTypeColor(getTypeFromUrl(practiceItem.url))} text-white`}>
                            {getTypeIcon(getTypeFromUrl(practiceItem.url))}
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-base font-bold" style={{ color: 'var(--black)' }}>
                              {practiceItem.title}
                            </CardTitle>
                            <div className="flex items-center gap-1 mt-2">
                              <ExternalLink size={12} style={{ color: 'var(--black-dark)' }} />
                              <span className="text-xs" style={{ color: 'var(--black-dark)' }}>
                                Buka Link
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Summary Card */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Card className="text-center p-6" style={{ backgroundColor: 'var(--gray)' }}>
              <CardHeader>
                <CardTitle className="text-xl" style={{ color: 'var(--black)' }}>Dokumentasi Pembelajaran</CardTitle>
                <CardDescription style={{ color: 'var(--black-dark)', opacity: 0.8 }}>
                  Akses semua materi pembelajaran {course.category.toLowerCase()} yang telah disediakan
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  size="lg" 
                  className="text-white px-8"
                  style={{ backgroundColor: 'var(--black)' }}
                  onClick={handleBackClick}
                >
                  <ArrowLeft size={20} className="mr-2" />
                  Kembali ke Daftar
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