import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Users, Brain, Briefcase, User, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
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
    const particles = Array.from({ length: 160 }, (_, i) => (
        <Particle key={i} delay={i * 0.2} />
    ));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles}
        </div>
    );
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

export const Capstone = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Find project by ID
  const projectIndex = parseInt(id || '0');
const project = capstoneData[projectIndex] || capstoneData[0];

  const handleBack = () => {
    navigate('/capstone');
  };

  // Color functions
  const getTeamColor = (team: string) => {
    const colors: { [key: string]: string } = {
      'A': '#FF6B6B',
      'B': '#4ECDC4',
      'C': '#45B7D1',
      'D': '#96CEB4',
      'E': '#FFEAA7',
      'F': '#DDA0DD',
      'G': '#98D8C8',
      'H': '#F7DC6F',
      'I': '#BB8FCE',
      'J': '#85C1E9'
    };
    return colors[team] || '#6C5CE7';
  };

  const getCollaborationColor = (collab: string) => {
    const colors: { [key: string]: string } = {
      'IBM': '#1261FE',
      'Microsoft': '#00BCF2',
      'Google': '#4285F4',
      'Amazon': '#FF9900',
      'Meta': '#1877F2',
      'NVIDIA': '#76B900',
      'Intel': '#0071C5',
      'Hugging Face': '#FFD21E'
    };
    return colors[collab] || '#6C5CE7';
  };

  const getRoleColor = (role: string) => {
    const colors: { [key: string]: string } = {
      'Project Manager': '#E17055',
      'Data Scientist': '#00B894',
      'ML Engineer': '#0984E3',
      'Backend Developer': '#6C5CE7',
      'Frontend Developer': '#A29BFE',
      'UI/UX Designer': '#FD79A8',
      'DevOps Engineer': '#FDCB6E',
      'QA Engineer': '#E84393'
    };
    return colors[role] || '#74B9FF';
  };

  // Group members by role
  const groupedMembers = project.anggota.reduce((acc: { [key: string]: string[] }, member) => {
    const name = member.nama;
    const role = member.peran;
    if (!acc[role]) {
      acc[role] = [];
    }
    acc[role].push(name);
    return acc;
  }, {});

  // Get mentors from project.mentor field (string separated by comma)
  const mentors = project.mentor ? project.mentor.split(', ').map(name => name.trim()) : [];
  
  // Remove mentor role from grouped members if it exists (shouldn't exist in data)
  delete groupedMembers['Mentor'];

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
              onClick={handleBack}
              className="flex items-center gap-2 px-4 py-2 backdrop-blur-sm"
              style={{
                backgroundColor: 'rgba(239, 239, 239, 0.8)',
                color: 'var(--black)',
                border: 'none',
                boxShadow: '0 4px 15px rgba(20, 184, 166, 0.1)'
              }}
            >
              <ArrowLeft size={16} />
              Kembali ke Daftar Proyek
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
                    <Brain size={32} style={{ color: '#0d9488' }} />
                    <Sparkles 
                        size={12} 
                        className="absolute -top-1 -right-1 opacity-70" 
                        style={{ color: '#14b8a6' }}
                    />
                </div>
            </motion.div>

            <h1
              className="text-3xl md:text-4xl font-bold mb-4 tracking-tight"
              style={{ 
                background: 'linear-gradient(135deg, #0d9488, #14b8a6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {project.judul_proyek}
            </h1>
            <p className="text-lg mb-6" style={{ color: 'var(--black-dark)' }}>
              {project.deskripsi}
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Technology Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card
                className="h-fit backdrop-blur-sm relative overflow-hidden"
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
                  <CardTitle
                    className="flex items-center gap-2"
                    style={{ color: 'var(--black)' }}
                  >
                    <Brain size={20} />
                    Teknologi
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2" style={{ color: 'var(--black)' }}>
                        Algoritma Utama
                      </h4>
                      <Badge
                        className="text-sm text-white"
                        style={{ backgroundColor: '#14b8a6' }}
                      >
                        {project.algoritma}
                      </Badge>
                    </div>

                    {/* Framework & Tech Stack */}
                    {project.framework_tech_stack && project.framework_tech_stack.length > 0 && (
                      <div>
                        <h4 className="font-medium mb-2" style={{ color: 'var(--black)' }}>
                          Framework & Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {project.framework_tech_stack.map((tech, idx) => (
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
                        </div>
                      </div>
                    )}

                    <div>
                      <h4 className="font-medium mb-2" style={{ color: 'var(--black)' }}>
                        Kolaborasi
                      </h4>
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
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Team Members */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card 
                className="backdrop-blur-sm relative overflow-hidden"
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
                  <CardTitle
                    className="flex items-center gap-2"
                    style={{ color: 'var(--black)' }}
                  >
                    <Users size={20} />
                    Anggota Tim ({project.anggota.length} orang)
                  </CardTitle>
                </CardHeader>
                <div className="flex items-center gap-3 mx-6">
                  <Badge
                    className="text-sm px-3 py-1 font-medium text-white mt-[-10px]"
                    style={{
                      backgroundColor: getTeamColor(project.kelompok)
                    }}
                  >
                    Tim {project.kelompok}
                  </Badge>
                </div>
                <CardContent>
                  <div className="space-y-6">
                    {/* Mentor Section */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Briefcase size={16} style={{ color: '#14b8a6' }} />
                        <h4
                          className="font-medium"
                          style={{ color: 'var(--black)' }}
                        >
                          Mentor
                        </h4>
                        <Badge
                          className="text-xs text-white"
                          style={{
                            backgroundColor: '#14b8a6'
                          }}
                        >
                          {mentors.length}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {mentors.map((mentor, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 p-2 rounded"
                            style={{ backgroundColor: 'var(--white)' }}
                          >
                            <User size={14} style={{ color: 'var(--black-dark)' }} />
                            <span
                              className="text-sm"
                              style={{ color: 'var(--black-dark)' }}
                            >
                              {mentor}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Team Members */}
                    {Object.entries(groupedMembers).map(([role, members]) => (
                      <div key={role}>
                        <div className="flex items-center gap-2 mb-3">
                          <Briefcase size={16} style={{ color: getRoleColor(role) }} />
                          <h4
                            className="font-medium"
                            style={{ color: 'var(--black)' }}
                          >
                            {role}
                          </h4>
                          <Badge
                            className="text-xs text-white"
                            style={{
                              backgroundColor: getRoleColor(role)
                            }}
                          >
                            {members.length}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {members.map((member, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 p-2 rounded"
                              style={{ backgroundColor: 'var(--white)' }}
                            >
                              <User size={14} style={{ color: 'var(--black-dark)' }} />
                              <span
                                className="text-sm"
                                style={{ color: 'var(--black-dark)' }}
                              >
                                {member}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

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