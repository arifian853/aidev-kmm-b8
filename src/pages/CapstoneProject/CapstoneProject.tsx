import { motion, type Variants } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Code, ExternalLink, Github, Brain, Award } from 'lucide-react';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import capstoneData from '@/utils/CapstoneData.json';

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
      'Luminara': '#E74C3C',
      'Ekswara': '#16A085', 
      'Bengawan Solo': '#2980B9',
      'Khatulistiwa': '#27AE60',
      'Nuswapada': '#F39C12',
      'Jaya Wijaya': '#8E44AD'
    };
    return colors[teamName] || '#6C5CE7';
  };

  const getCollaborationColor = (collab: string) => {
    const colors: { [key: string]: string } = {
      'AI Development': '#E17055',
      'Web Development': '#00B894',
      'Mobile Development': '#0984E3'
    };
    return colors[collab] || 'var(--black)';
  };

  const getTechStackColor = (tech: string) => {
    const colors: { [key: string]: string } = {
      'TensorFlow': '#FF6F00',
      'PyTorch': '#EE4C2C',
      'React': '#61DAFB',
      'Vue.js': '#4FC08D',
      'Angular': '#DD0031',
      'Flutter': '#02569B',
      'Django': '#092E20',
      'FastAPI': '#009688',
      'Flask': '#000000',
      'Jetpack Compose': '#4285F4',
      'Kotlin': '#7F52FF',
      'Scikit-learn': '#F7931E',
      'Transformers': '#FFD21E',
      'Retrofit': '#48B983'
    };
    return colors[tech] || '#6C5CE7';
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
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award size={32} style={{ color: 'var(--black)' }} />
              <h1 className="text-4xl font-bold" style={{ color: 'var(--black)' }}>
                Capstone Projects
              </h1>
            </div>
            <p className="text-lg opacity-80 max-w-2xl mx-auto" style={{ color: 'var(--black-dark)' }}>
              Koleksi proyek akhir dari peserta program AI Development yang menampilkan inovasi dan kreativitas dalam penerapan teknologi AI
            </p>
            <div className="mt-6 flex items-center justify-center gap-6 text-sm" style={{ color: 'var(--black-dark)' }}>
              <div className="flex items-center gap-2">
                <Users size={16} />
                <span>{projects.length} Tim</span>
              </div>
              <div className="flex items-center gap-2">
                <Brain size={16} />
                <span>AI Innovation</span>
              </div>
              <div className="flex items-center gap-2">
                <Code size={16} />
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
                  className="h-full cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105"
                  style={{ backgroundColor: 'var(--gray)', border: 'none' }}
                  onClick={() => handleProjectClick(index)}
                >
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
                        <ExternalLink size={16} style={{ color: 'var(--black-dark)' }} />
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
                      Mentor: {project.mentor}
                    </CardDescription>
                    
                    {/* Project Brief Description */}
                    {project.deskripsi && (
                      <CardDescription 
                        className="text-xs opacity-80 line-clamp-2"
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
                        <Brain size={14} style={{ color: 'var(--black)' }} />
                        <span className="text-xs font-medium" style={{ color: 'var(--black)' }}>
                          Algoritma
                        </span>
                      </div>
                      <Badge 
                        className="text-xs text-white"
                        style={{ backgroundColor: '#A29BFE' }}
                      >
                        {project.algoritma}
                      </Badge>
                    </div>

                    {/* Tech Stack */}
                    {project.framework_tech_stack && project.framework_tech_stack.length > 0 && (
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Code size={14} style={{ color: 'var(--black)' }} />
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
                              style={{ backgroundColor: 'var(--black-dark)' }}
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
                        <Code size={14} style={{ color: 'var(--black)' }} />
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
                        <Users size={14} style={{ color: 'var(--black)' }} />
                        <span className="text-xs" style={{ color: 'var(--black-dark)' }}>
                          {project.anggota.length} Anggota
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Github size={14} style={{ color: '#24292E' }} />
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
        </div>
      </div>
      <Footer />
    </>
  );
};