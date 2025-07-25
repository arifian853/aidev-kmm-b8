import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft,
  Users,
  ExternalLink,
  Github,
  Brain,
  User,
  Briefcase
} from 'lucide-react';
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

export const Capstone = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const projects: CapstoneProject[] = capstoneData;

  const projectIndex = parseInt(id || '0');
  const project = projects[projectIndex] || projects[0];

  // Parse mentors from comma-separated string
  const mentors = project.mentor.split(',').map(mentor => mentor.trim());

  const handleBack = () => {
    navigate('/capstone');
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
      'AI Development': '#C0392B',
      'Web Development': '#138D75',
      'Mobile Development': '#1F618D'
    };
    return colors[collab] || 'var(--black)';
  };

  const getRoleColor = (role: string) => {
    const colors: { [key: string]: string } = {
      'Hustler (Project Manager)': '#E74C3C',
      'Scrum Master': '#16A085',
      'Hipster': '#2980B9',
      'Hacker': '#27AE60',
      'Design Researcher': '#E67E22',
      'Data Engineer': '#8E44AD',
      'ML Engineer': '#138D75',
      'ML Ops': '#D68910'
    };
    return colors[role] || 'var(--black)';
  };

  // Group members by role
  const groupedMembers = project.anggota.reduce((acc, member) => {
    if (!acc[member.peran]) {
      acc[member.peran] = [];
    }
    acc[member.peran].push(member.nama);
    return acc;
  }, {} as { [key: string]: string[] });

  return (
    <>
      <Navbar />
      <div className="min-h-screen p-6" style={{ backgroundColor: 'var(--white)' }}>
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button
              onClick={handleBack}
              className="flex items-center gap-2 px-4 py-2"
              style={{
                backgroundColor: 'var(--gray)',
                color: 'var(--black)',
                border: 'none'
              }}
            >
              <ArrowLeft size={16} />
              Kembali ke Daftar Proyek
            </Button>
          </motion.div>

          {/* Project Header */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >


            <h1
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: 'var(--black)' }}
            >
              {project.judul_proyek}
            </h1>

            {/* Project Description */}
            {project.deskripsi && (
              <p
                className="text-lg mb-6 opacity-90 leading-relaxed"
                style={{ color: 'var(--black-dark)' }}
              >
                {project.deskripsi}
              </p>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button
                className="flex items-center gap-2"
                style={{
                  backgroundColor: '#00B894',
                  color: 'white',
                  border: 'none'
                }}
                onClick={() => window.open(project.link_proyek, '_blank')}
              >
                <ExternalLink size={16} />
                Lihat Proyek
              </Button>
              <Button
                className="flex items-center gap-2"
                style={{
                  backgroundColor: '#24292E',
                  color: 'white',
                  border: 'none'
                }}
                onClick={() => window.open(project.repo_github, '_blank')}
              >
                <Github size={16} />
                GitHub
              </Button>
              <Button
                className="flex items-center gap-2"
                style={{
                  backgroundColor: '#FF9500',
                  color: 'white',
                  border: 'none'
                }}
                onClick={() => window.open(project.repo_huggingface, '_blank')}
              >
                <Brain size={16} />
                HuggingFace
              </Button>
            </div>

          </motion.div>


          {/* Project Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Algorithm & Tech Stack */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card
                className="h-fit"
                style={{ backgroundColor: 'var(--gray)', border: 'none' }}
              >
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
                        style={{ backgroundColor: '#A29BFE' }}
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
              <Card style={{ backgroundColor: 'var(--gray)', border: 'none' }}>
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
                        <Briefcase size={16} style={{ color: '#74B9FF' }} />
                        <h4
                          className="font-medium"
                          style={{ color: 'var(--black)' }}
                        >
                          Mentor
                        </h4>
                        <Badge
                          className="text-xs text-white"
                          style={{
                            backgroundColor: '#74B9FF'
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
        </div>
      </div>
      <Footer />
    </>
  );
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