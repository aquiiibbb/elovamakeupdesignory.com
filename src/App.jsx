import { Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home'
import Ourstory from './pages/ourstory'
import CareerServices from './pages/careerservices'
import HireArtist from './pages/hireartist'
import CareerPath from './pages/carrerpath'
import StudyMud from './pages/studymud'
import Curriculam from './pages/ourcurriculam'
import Ourlocation from './pages/ourlocation'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/ourstory" element={<Ourstory />} />
        <Route path="/careerservices" element={<CareerServices />} />
        <Route path="/hireartist" element={<HireArtist />} />
        <Route path="/careerpath" element={<CareerPath />} />
        <Route path="/studymud" element={<StudyMud />} />
        <Route path="/ourcurriculam" element={<Curriculam />} />
        <Route path="/ourlocation" element={<Ourlocation />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App