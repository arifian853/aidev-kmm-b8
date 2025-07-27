import { motion, type Variants } from 'framer-motion';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen, Users, Video, FileText, ExternalLink, Calendar, Sparkles } from 'lucide-react';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { useParams, useNavigate } from 'react-router-dom';
import syllabusData from '@/utils/SilabusData.json';
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
  title: string;
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
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

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'presentation':
        return 'Presentasi';
      case 'reading':
        return 'Bacaan';
      case 'practice':
        return 'Praktik';
      case 'code':
        return 'Kode';
      default:
        return 'Link';
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

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Back Button */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button
              onClick={handleBackClick}
              className="flex items-center gap-2 px-4 py-2 backdrop-blur-sm"
              style={{
                backgroundColor: 'rgba(239, 239, 239, 0.8)',
                color: 'var(--black)',
                border: 'none',
                boxShadow: '0 4px 15px rgba(20, 184, 166, 0.1)'
              }}
            >
              <ArrowLeft size={16} />
              Kembali ke Daftar Silabus
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
              <Badge 
                className="text-sm px-3 py-1 font-medium text-white"
                style={{
                  background: 'linear-gradient(135deg, #14b8a6, #0d9488)'
                }}
              >
                {course.category}
              </Badge>
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
              {course.category}
            </h1>
            <p className="text-lg mb-6" style={{ color: 'var(--black-dark)' }}>
              {course.description}
            </p>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <BookOpen size={16} style={{ color: '#14b8a6' }} />
                <span className="text-sm" style={{ color: 'var(--black-dark)' }}>{course.classes.length} Kelas</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={16} style={{ color: '#14b8a6' }} />
                <span className="text-sm" style={{ color: 'var(--black-dark)' }}>Dokumentasi Pembelajaran</span>
              </div>
              {course.practice.length > 0 && (
                <div className="flex items-center gap-2">
                  <ExternalLink size={16} style={{ color: '#14b8a6' }} />
                  <span className="text-sm" style={{ color: 'var(--black-dark)' }}>{course.practice.length} Materi Praktik</span>
                </div>
              )}
              <Badge 
                className="text-white"
                style={{ backgroundColor: '#14b8a6' }}
              >
                Dokumentasi
              </Badge>
            </div>
          </motion.div>

          {/* Learning Materials - Changed from grid to list */}
          <motion.div
            className="mb-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--black)' }}>Materi Pembelajaran</h2>
            <div className="space-y-4">
              {course.classes.map((classItem, index) => {
                const presentationType = getTypeFromUrl(classItem.ppt_class);
                const readingType = getTypeFromUrl(classItem.reading_module);
                
                return (
                  <motion.div key={index} variants={cardVariants}>
                    <Card 
                      className="cursor-pointer hover:shadow-lg transition-all duration-300 backdrop-blur-sm relative overflow-hidden"
                      style={{ 
                        backgroundColor: 'rgba(239, 239, 239, 0.8)',
                        border: 'none',
                        boxShadow: '0 10px 25px rgba(20, 184, 166, 0.1)'
                      }}
                    >
                      {/* Decorative gradient overlay */}
                      <div 
                          className="absolute top-0 left-0 w-full h-1"
                          style={{
                              background: 'linear-gradient(90deg, #14b8a6, #0d9488)'
                          }}
                      />

                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <div className="flex flex-col items-center gap-2">
                            <div 
                              className="p-3 rounded-lg"
                              style={{ backgroundColor: '#14b8a6' }}
                            >
                              {getTypeIcon(presentationType)}
                            </div>
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-sm font-medium" style={{ color: 'var(--black-dark)', opacity: 0.7 }}>
                                Kelas {index + 1}
                              </span>
                              <Badge variant="outline" className="text-xs">
                                {getTypeLabel(presentationType)}
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
                            <CardTitle className="text-xl font-bold mb-2" style={{ color: 'var(--black)' }}>
                              {classItem.name}
                            </CardTitle>
                            <CardDescription className="text-sm mb-4" style={{ color: 'var(--black-dark)' }}>
                              {classItem.description}
                            </CardDescription>
                            
                            <div className="flex flex-wrap gap-2">
                              {classItem.ppt_class && classItem.ppt_class !== 'None' && (
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => handleLinkClick(classItem.ppt_class)}
                                  className="text-xs"
                                  style={{
                                    borderColor: '#14b8a6',
                                    color: '#14b8a6'
                                  }}
                                >
                                  {getTypeIcon(presentationType)}
                                  <span className="ml-1">{getTypeLabel(presentationType)}</span>
                                </Button>
                              )}
                              
                              {classItem.reading_module && classItem.reading_module !== 'None' && (
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => handleLinkClick(classItem.reading_module)}
                                  className="text-xs"
                                  style={{
                                    borderColor: '#0d9488',
                                    color: '#0d9488'
                                  }}
                                >
                                  {getTypeIcon(readingType)}
                                  <span className="ml-1">{getTypeLabel(readingType)}</span>
                                </Button>
                              )}
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

          {/* Practice Materials */}
          {course.practice.length > 0 && (
            <motion.div
              className="mb-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--black)' }}>Materi Praktik</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {course.practice.map((practiceItem, index) => (
                  <motion.div key={index} variants={cardVariants}>
                    <Card 
                      className="h-full cursor-pointer hover:shadow-lg transition-all duration-300 backdrop-blur-sm relative overflow-hidden"
                      style={{ 
                        backgroundColor: 'rgba(239, 239, 239, 0.8)',
                        border: 'none',
                        boxShadow: '0 10px 25px rgba(20, 184, 166, 0.1)'
                      }}
                      onClick={() => handleLinkClick(practiceItem.url)}
                    >
                      {/* Decorative gradient overlay */}
                      <div 
                          className="absolute top-0 left-0 w-full h-1"
                          style={{
                              background: 'linear-gradient(90deg, #14b8a6, #0d9488)'
                          }}
                      />

                      <CardHeader>
                        <div className="flex items-start gap-3">
                          <div 
                            className="p-2 rounded-lg"
                            style={{ backgroundColor: '#0d9488' }}
                          >
                            <BookOpen size={16} />
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