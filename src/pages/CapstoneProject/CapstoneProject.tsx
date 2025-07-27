import { motion, type Variants } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Code, ExternalLink, Github, Brain, Award, Sparkles } from 'lucide-react';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import capstoneData from '@/utils/CapstoneData.json';
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
    const particles = Array.from({ length: 165 }, (_, i) => (
        <Particle key={i} delay={i * 0.2} />
    ));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles}
        </div>
    );
};

interface CapstoneProject {
  kelompok: string;
  mentor: string;
  kolaborasi: string[];
  judul_proyek: string;
  deskripsi?: string;
  algoritma: string;
  framework_tech_stack?: string[];
  link_proyek: string;
  repo_github: string;
  repo_huggingface: string;
  anggota: Array<{
    nama: string;
    peran: string;
  }>;
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
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const CapstoneProject = () => {
  const navigate = useNavigate();
  const projects: CapstoneProject[] = capstoneData;

  const handleProjectClick = (index: number) => {
    navigate(`/capstone/${index}`);
  };

  const getTeamColor = (teamName: string) => {
    const colors: { [key: string]: string } = {
      'Luminara': '#14b8a6',
      'Ekswara': '#0d9488', 
      'Bengawan Solo': '#0f766e',
      'Khatulistiwa': '#134e4a',
      'Nuswapada': '#14b8a6',
      'Jaya Wijaya': '#0d9488'
    };
    return colors[teamName] || '#14b8a6';
  };

  const getCollaborationColor = (collab: string) => {
    const colors: { [key: string]: string } = {
      'AI Development': '#14b8a6',
      'Web Development': '#0d9488',
      'Mobile Development': '#0f766e'
    };
    return colors[collab] || '#14b8a6';
  };

  const getTechStackColor = (tech: string) => {
    const colors: { [key: string]: string } = {
      'TensorFlow': '#14b8a6',
      'PyTorch': '#0d9488',
      'React': '#0f766e',
      'Vue.js': '#134e4a',
      'Angular': '#14b8a6',
      'Flutter': '#0d9488',
      'Django': '#0f766e',
      'FastAPI': '#134e4a',
      'Flask': '#14b8a6',
      'Jetpack Compose': '#0d9488',
      'Kotlin': '#0f766e',
      'Scikit-learn': '#134e4a',
      'Transformers': '#14b8a6',
      'Retrofit': '#0d9488'
    };
    return colors[tech] || '#14b8a6';
  };

  // Function to format mentors display
  const formatMentors = (mentorString: string) => {
    const mentors = mentorString ? mentorString.split(', ').map(name => name.trim()) : [];
    if (mentors.length === 1) {
      return mentors[0];
    } else if (mentors.length === 2) {
      return `${mentors[0]} & ${mentors[1]}`;
    } else {
      return `${mentors[0]} & ${mentors.length - 1} lainnya`;
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

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
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
                    <Award size={48} style={{ color: '#0d9488' }} />
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
              Capstone Projects
            </h1>
            <p className="text-lg opacity-80 max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--black-dark)' }}>
              Koleksi proyek akhir dari peserta program AI Development yang menampilkan inovasi dan kreativitas dalam penerapan teknologi AI
            </p>
            <div className="mt-6 flex items-center justify-center gap-6 text-sm" style={{ color: 'var(--black-dark)' }}>
              <div className="flex items-center gap-2">
                <Users size={16} style={{ color: '#14b8a6' }} />
                <span>{projects.length} Tim</span>
              </div>
              <div className="flex items-center gap-2">
                <Brain size={16} style={{ color: '#14b8a6' }} />
                <span>AI Innovation</span>
              </div>
              <div className="flex items-center gap-2">
                <Code size={16} style={{ color: '#14b8a6' }} />
                <span>Real Projects</span>
              </div>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {projects.map((project, index) => (
              <motion.div key={index} variants={cardVariants}>
                <Card 
                  className="h-full cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 border-0 shadow-lg backdrop-blur-sm relative overflow-hidden"
                  style={{ 
                    backgroundColor: 'rgba(239, 239, 239, 0.8)',
                    boxShadow: '0 10px 25px rgba(20, 184, 166, 0.1)'
                  }}
                  onClick={() => handleProjectClick(index)}
                >
                  {/* Decorative gradient overlay */}
                  <div 
                      className="absolute top-0 left-0 w-full h-1"
                      style={{
                          background: 'linear-gradient(90deg, #14b8a6, #0d9488)'
                      }}
                  />

                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge 
                        className="text-xs font-medium text-white"
                        style={{ 
                          backgroundColor: getTeamColor(project.kelompok)
                        }}
                      >
                        {project.kelompok}
                      </Badge>
                      <div className="flex gap-1">
                        <ExternalLink size={16} style={{ color: '#0d9488', opacity: 0.7 }} />
                      </div>
                    </div>
                    <CardTitle 
                      className="text-lg font-bold leading-tight"
                      style={{ color: 'var(--black)' }}
                    >
                      {project.judul_proyek}
                    </CardTitle>
                    <CardDescription 
                      className="text-sm mb-2"
                      style={{ color: 'var(--black-dark)' }}
                    >
                      Mentor: {formatMentors(project.mentor)}
                    </CardDescription>
                    
                    {/* Project Brief Description */}
                    {project.deskripsi && (
                      <CardDescription 
                        className="text-xs opacity-80 line-clamp-2 leading-relaxed"
                        style={{ color: 'var(--black-dark)' }}
                      >
                        {project.deskripsi.length > 80 
                          ? `${project.deskripsi.substring(0, 80)}...` 
                          : project.deskripsi
                        }
                      </CardDescription>
                    )}
                  </CardHeader>
                  
                  <CardContent>
                    {/* Algorithm */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Brain size={14} style={{ color: '#14b8a6' }} />
                        <span className="text-xs font-medium" style={{ color: 'var(--black)' }}>
                          Algoritma
                        </span>
                      </div>
                      <Badge 
                        className="text-xs text-white"
                        style={{ 
                          background: 'linear-gradient(135deg, #14b8a6, #0d9488)'
                        }}
                      >
                        {project.algoritma}
                      </Badge>
                    </div>

                    {/* Tech Stack */}
                    {project.framework_tech_stack && project.framework_tech_stack.length > 0 && (
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Code size={14} style={{ color: '#14b8a6' }} />
                          <span className="text-xs font-medium" style={{ color: 'var(--black)' }}>
                            Tech Stack
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {project.framework_tech_stack.slice(0, 2).map((tech, idx) => (
                            <Badge 
                              key={idx}
                              className="text-xs text-white"
                              style={{ 
                                backgroundColor: getTechStackColor(tech)
                              }}
                            >
                              {tech}
                            </Badge>
                          ))}
                          {project.framework_tech_stack.length > 2 && (
                            <Badge 
                              className="text-xs text-white"
                              style={{ backgroundColor: '#0d9488' }}
                            >
                              +{project.framework_tech_stack.length - 2}
                            </Badge>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Collaboration Tags */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Code size={14} style={{ color: '#14b8a6' }} />
                        <span className="text-xs font-medium" style={{ color: 'var(--black)' }}>
                          Kolaborasi
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {project.kolaborasi.map((collab, idx) => (
                          <Badge 
                            key={idx}
                            className="text-xs text-white"
                            style={{ 
                              backgroundColor: getCollaborationColor(collab)
                            }}
                          >
                            {collab}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Team Size */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Users size={14} style={{ color: '#14b8a6' }} />
                        <span className="text-xs" style={{ color: 'var(--black-dark)' }}>
                          {project.anggota.length} Anggota
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Github size={14} style={{ color: '#0d9488' }} />
                        <span className="text-xs" style={{ color: 'var(--black-dark)' }}>
                          Open Source
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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