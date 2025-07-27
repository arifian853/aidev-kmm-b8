import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { Onboarding } from './pages/Onboarding/Onboarding'
import { SilabusList } from './pages/Silabus/SilabusList'
import { Silabus } from './pages/Silabus/Silabus'
import { DataPeserta } from './pages/DataPeserta/DataPeserta'
import { DaftarTugas } from './pages/DaftarTugas/DaftarTugas'
import { Tugas } from './pages/DaftarTugas/Tugas'
import { CapstoneProject } from './pages/CapstoneProject/CapstoneProject'
import { Capstone } from './pages/CapstoneProject/Capstone'
import { Memories } from './pages/CoreMemories/Memories'
import { Say } from './pages/SaySomething/Say'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/silabus" element={<SilabusList />} />
        <Route path="/silabus/:id" element={<Silabus />} />
        <Route path="/assignment" element={<DaftarTugas />} />
        <Route path="/assignment/:id" element={<Tugas />} />
        <Route path="/data" element={<DataPeserta />} />
        <Route path="/capstone" element={<CapstoneProject />} />
        <Route path="/capstone/:id" element={<Capstone />} />
        <Route path="/memories" element={<Memories />} />
        <Route path="/say" element={<Say />} />
      </Routes>
    </>
  )
}

export default App
