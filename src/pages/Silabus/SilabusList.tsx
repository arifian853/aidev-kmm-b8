import { motion, type Variants } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Code, Database, Brain, Cpu, Rocket, Users, Wrench, Lightbulb, Sparkles } from 'lucide-react';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import syllabusData from '@/utils/SilabusData.json';

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

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
          >
            {/* Icon with teal gradient background */}
            <motion.div
                className="mb-8 relative"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <div className='relative flex items-center justify-center'>
                    <div 
                        className="absolute w-20 h-20 rounded-full opacity-20"
                        style={{
                            background: 'linear-gradient(135deg, #14b8a6, #0d9488)'
                        }}
                    />
                    <BookOpen size={48} style={{ color: '#0d9488' }} />
                    <Sparkles 
                        size={16} 
                        className="absolute -top-2 -right-2 opacity-70" 
                        style={{ color: '#14b8a6' }}
                    />
                </div>
            </motion.div>

            <h1 
              className="text-4xl font-bold mb-4 tracking-tight" 
              style={{ 
                background: 'linear-gradient(135deg, #0d9488, #14b8a6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Silabus Pembelajaran
            </h1>
            <p className="text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--black-dark)', opacity: 0.8 }}>
              Kampus Merdeka Mandiri Batch 8 - Artificial Intelligence Batch 1
            </p>
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
                    className="h-full cursor-pointer hover:shadow-xl transition-all duration-300 border-0 shadow-lg backdrop-blur-sm relative overflow-hidden"
                    style={{ 
                      backgroundColor: 'rgba(239, 239, 239, 0.8)',
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

                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div 
                          className="p-3 rounded-lg text-white"
                          style={{
                            background: 'linear-gradient(135deg, #14b8a6, #0d9488)',
                            boxShadow: '0 4px 15px rgba(20, 184, 166, 0.3)'
                          }}
                        >
                          <IconComponent size={24} />
                        </div>
                        <div className="text-sm font-medium" style={{ color: 'var(--black-dark)', opacity: 0.7 }}>
                          Modul {index + 1}
                        </div>
                      </div>
                      <CardTitle className="text-xl font-bold leading-tight" style={{ color: 'var(--black)' }}>
                        {course.category}
                      </CardTitle>
                      <CardDescription className="mt-2 min-h-[40px] leading-relaxed" style={{ color: 'var(--black-dark)', opacity: 0.8 }}>
                        {course.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <Button
                        className="w-full text-white hover:shadow-lg transition-all duration-300 py-3 text-base font-medium relative overflow-hidden"
                        style={{ 
                          background: 'linear-gradient(135deg, #14b8a6, #0d9488)',
                          border: 'none'
                        }}
                        onClick={() => handleSyllabusClick(index)}
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          Mulai Belajar
                          <motion.div
                              animate={{ x: [0, 4, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                          >
                              →
                          </motion.div>
                        </span>
                        <div 
                            className="absolute inset-0 opacity-0 hover:opacity-20 transition-opacity duration-300"
                            style={{
                                background: 'linear-gradient(135deg, #0f766e, #14b8a6)'
                            }}
                        />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

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
