import { motion, type Variants } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, GraduationCap, BookOpen } from 'lucide-react';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';

import mentorData from '@/utils/MentorData.json';
import menteeData from '@/utils/MenteeData.json';


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
              Data Peserta
            </h1>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--black-dark)', opacity: 0.8 }}>
              Kampus Merdeka Mandiri Batch 8 - Artificial Intelligence Batch 1
            </p>
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-6 rounded-full"></div>
          </motion.div>

          {/* Statistics Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={cardVariants}>
              <Card className="text-center" style={{ backgroundColor: 'var(--gray)' }}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-3 bg-blue-500 rounded-full text-white">
                      <GraduationCap size={24} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold" style={{ color: 'var(--black)' }}>{mentorData.length}</h3>
                  <p className="text-sm" style={{ color: 'var(--black-dark)', opacity: 0.8 }}>Total Mentor</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants}>
              <Card className="text-center" style={{ backgroundColor: 'var(--gray)' }}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-3 bg-green-500 rounded-full text-white">
                      <Users size={24} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold" style={{ color: 'var(--black)' }}>{menteeData.length}</h3>
                  <p className="text-sm" style={{ color: 'var(--black-dark)', opacity: 0.8 }}>Total Mentee</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants}>
              <Card className="text-center" style={{ backgroundColor: 'var(--gray)' }}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-3 bg-purple-500 rounded-full text-white">
                      <BookOpen size={24} />
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
            <Card style={{ backgroundColor: 'var(--gray)' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2" style={{ color: 'var(--black)' }}>
                  <GraduationCap size={24} />
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
                          whileHover={{ backgroundColor: 'rgba(0,0,0,0.02)' }}
                        >
                          <td className="p-3" style={{ color: 'var(--black-dark)' }}>{mentor.no}</td>
                          <td className="p-3 font-medium" style={{ color: 'var(--black)' }}>{mentor.name}</td>
                          <td className="p-3" style={{ color: 'var(--black-dark)' }}>{mentor.university}</td>
                          <td className="p-3">
                            <Badge className="bg-blue-500 text-white">{mentor.major}</Badge>
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
            <Card style={{ backgroundColor: 'var(--gray)' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2" style={{ color: 'var(--black)' }}>
                  <Users size={24} />
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
                          whileHover={{ backgroundColor: 'rgba(0,0,0,0.02)' }}
                        >
                          <td className="p-3" style={{ color: 'var(--black-dark)' }}>{mentee.no}</td>
                          <td className="p-3 font-medium" style={{ color: 'var(--black)' }}>{mentee.name}</td>
                          <td className="p-3" style={{ color: 'var(--black-dark)' }}>{mentee.university}</td>
                          <td className="p-3">
                            <Badge 
                              className="text-white"
                              style={{ 
                                backgroundColor: mentee.major.includes('Sistem Informasi') ? '#10b981' :
                                                mentee.major.includes('Informatika') ? '#3b82f6' :
                                                mentee.major.includes('Computer Science') ? '#8b5cf6' :
                                                mentee.major.includes('Ilmu Komputer') ? '#f59e0b' : '#6b7280'
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
        </div>
      </div>
      <Footer />
    </>
  );
};