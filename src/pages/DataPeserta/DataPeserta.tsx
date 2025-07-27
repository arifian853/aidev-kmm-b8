import { motion, type Variants } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, GraduationCap, BookOpen, Mail, Linkedin, Github, Instagram, Sparkles } from 'lucide-react';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { useEffect, useState } from 'react';

import mentorData from '@/utils/MentorData.json';
import menteeData from '@/utils/MenteeData.json';

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

export const DataPeserta = () => {
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
                    <Users size={48} style={{ color: '#0d9488' }} />
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
              Data Peserta
            </h1>
            <p className="text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--black-dark)', opacity: 0.8 }}>
              Kampus Merdeka Mandiri Batch 8 - Artificial Intelligence Batch 1
            </p>
          </motion.div>

          {/* Statistics Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={cardVariants}>
              <Card 
                className="text-center backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300" 
                style={{ 
                  backgroundColor: 'rgba(239, 239, 239, 0.8)',
                  boxShadow: '0 10px 25px rgba(20, 184, 166, 0.1)'
                }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-center mb-4">
                    <div 
                      className="p-3 rounded-full"
                      style={{
                        background: 'linear-gradient(135deg, #14b8a6, #0d9488)',
                        boxShadow: '0 4px 15px rgba(20, 184, 166, 0.3)'
                      }}
                    >
                      <GraduationCap size={24} style={{ color: 'white' }} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold" style={{ color: 'var(--black)' }}>{mentorData.length}</h3>
                  <p className="text-sm" style={{ color: 'var(--black-dark)', opacity: 0.8 }}>Total Mentor</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants}>
              <Card 
                className="text-center backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300" 
                style={{ 
                  backgroundColor: 'rgba(239, 239, 239, 0.8)',
                  boxShadow: '0 10px 25px rgba(20, 184, 166, 0.1)'
                }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-center mb-4">
                    <div 
                      className="p-3 rounded-full"
                      style={{
                        background: 'linear-gradient(135deg, #14b8a6, #0d9488)',
                        boxShadow: '0 4px 15px rgba(20, 184, 166, 0.3)'
                      }}
                    >
                      <Users size={24} style={{ color: 'white' }} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold" style={{ color: 'var(--black)' }}>{menteeData.length}</h3>
                  <p className="text-sm" style={{ color: 'var(--black-dark)', opacity: 0.8 }}>Total Mentee</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants}>
              <Card 
                className="text-center backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300" 
                style={{ 
                  backgroundColor: 'rgba(239, 239, 239, 0.8)',
                  boxShadow: '0 10px 25px rgba(20, 184, 166, 0.1)'
                }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-center mb-4">
                    <div 
                      className="p-3 rounded-full"
                      style={{
                        background: 'linear-gradient(135deg, #14b8a6, #0d9488)',
                        boxShadow: '0 4px 15px rgba(20, 184, 166, 0.3)'
                      }}
                    >
                      <BookOpen size={24} style={{ color: 'white' }} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold" style={{ color: 'var(--black)' }}>{mentorData.length + menteeData.length}</h3>
                  <p className="text-sm" style={{ color: 'var(--black-dark)', opacity: 0.8 }}>Total Peserta</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Mentor Table */}
          <motion.div
            className="mb-8"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <Card 
              className="backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ 
                backgroundColor: 'rgba(239, 239, 239, 0.8)',
                boxShadow: '0 10px 25px rgba(20, 184, 166, 0.1)'
              }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2" style={{ color: 'var(--black)' }}>
                  <div 
                    className="p-2 rounded-full"
                    style={{
                      background: 'linear-gradient(135deg, #14b8a6, #0d9488)',
                    }}
                  >
                    <GraduationCap size={20} style={{ color: 'white' }} />
                  </div>
                  Data Mentor
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b" style={{ borderColor: 'var(--black-dark)'}}>
                        <th className="text-left p-3 font-semibold" style={{ color: 'var(--black)' }}>No</th>
                        <th className="text-left p-3 font-semibold" style={{ color: 'var(--black)' }}>Nama</th>
                        <th className="text-left p-3 font-semibold" style={{ color: 'var(--black)' }}>Universitas</th>
                        <th className="text-left p-3 font-semibold" style={{ color: 'var(--black)' }}>Jurusan</th>
                        <th className="text-left p-3 font-semibold" style={{ color: 'var(--black)' }}>Email</th>
                        <th className="text-left p-3 font-semibold" style={{ color: 'var(--black)' }}>Sosial Media</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mentorData.map((mentor, index) => (
                        <motion.tr
                          key={mentor.no}
                          className="border-b hover:bg-opacity-50"
                          style={{ borderColor: 'var(--black-dark)', opacity: 0.1 }}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          whileHover={{ backgroundColor: 'rgba(20, 184, 166, 0.05)' }}
                        >
                          <td className="p-3" style={{ color: 'var(--black-dark)' }}>{mentor.no}</td>
                          <td className="p-3 font-medium" style={{ color: 'var(--black)' }}>{mentor.name}</td>
                          <td className="p-3" style={{ color: 'var(--black-dark)' }}>{mentor.university}</td>
                          <td className="p-3">
                            <Badge 
                              className="text-white"
                              style={{ 
                                background: 'linear-gradient(135deg, #14b8a6, #0d9488)',
                                border: 'none'
                              }}
                            >
                              {mentor.major}
                            </Badge>
                          </td>
                          <td className="p-3">
                            <div className="flex items-center gap-2">
                              <Mail size={14} style={{ color: 'var(--black-dark)' }} />
                              <a 
                                href={`mailto:${mentor.email}`}
                                className="text-sm hover:underline transition-colors duration-300"
                                style={{ color: 'var(--black-dark)' }}
                              >
                                {mentor.email}
                              </a>
                            </div>
                          </td>
                          <td className="p-3">
                            <div className="flex items-center gap-2">
                              {mentor.linkedin && (
                                <Button
                                  size="sm"
                                  className="p-1 h-8 w-8 transition-all duration-300 hover:scale-110"
                                  style={{ backgroundColor: '#0077B5', border: 'none' }}
                                  onClick={() => window.open(mentor.linkedin, '_blank')}
                                >
                                  <Linkedin size={14} className="text-white" />
                                </Button>
                              )}
                              {mentor.github && (
                                <Button
                                  size="sm"
                                  className="p-1 h-8 w-8 transition-all duration-300 hover:scale-110"
                                  style={{ backgroundColor: '#24292E', border: 'none' }}
                                  onClick={() => window.open(mentor.github, '_blank')}
                                >
                                  <Github size={14} className="text-white" />
                                </Button>
                              )}
                              {mentor.instagram && (
                                <Button
                                  size="sm"
                                  className="p-1 h-8 w-8 transition-all duration-300 hover:scale-110"
                                  style={{ backgroundColor: '#E4405F', border: 'none' }}
                                  onClick={() => window.open(mentor.instagram, '_blank')}
                                >
                                  <Instagram size={14} className="text-white" />
                                </Button>
                              )}
                            </div>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Mentee Table */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <Card 
              className="backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ 
                backgroundColor: 'rgba(239, 239, 239, 0.8)',
                boxShadow: '0 10px 25px rgba(20, 184, 166, 0.1)'
              }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2" style={{ color: 'var(--black)' }}>
                  <div 
                    className="p-2 rounded-full"
                    style={{
                      background: 'linear-gradient(135deg, #14b8a6, #0d9488)',
                    }}
                  >
                    <Users size={20} style={{ color: 'white' }} />
                  </div>
                  Data Mentee
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b" style={{ borderColor: 'var(--black-dark)' }}>
                        <th className="text-left p-3 font-semibold" style={{ color: 'var(--black)' }}>No</th>
                        <th className="text-left p-3 font-semibold" style={{ color: 'var(--black)' }}>Nama</th>
                        <th className="text-left p-3 font-semibold" style={{ color: 'var(--black)' }}>Universitas</th>
                        <th className="text-left p-3 font-semibold" style={{ color: 'var(--black)' }}>Jurusan</th>
                      </tr>
                    </thead>
                    <tbody>
                      {menteeData.map((mentee, index) => (
                        <motion.tr
                          key={mentee.no}
                          className="border-b hover:bg-opacity-50"
                          style={{ borderColor: 'var(--black-dark)', opacity: 0.1 }}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          whileHover={{ backgroundColor: 'rgba(20, 184, 166, 0.05)' }}
                        >
                          <td className="p-3" style={{ color: 'var(--black-dark)' }}>{mentee.no}</td>
                          <td className="p-3 font-medium" style={{ color: 'var(--black)' }}>{mentee.name}</td>
                          <td className="p-3" style={{ color: 'var(--black-dark)' }}>{mentee.university}</td>
                          <td className="p-3">
                            <Badge 
                              className="text-white"
                              style={{ 
                                background: 'linear-gradient(135deg, #14b8a6, #0d9488)',
                                border: 'none'
                              }}
                            >
                              {mentee.major}
                            </Badge>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
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