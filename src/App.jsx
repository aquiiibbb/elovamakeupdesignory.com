import { Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home'
import Ourstory from './pages/ourstory'
import CareerServices from './pages/careerservices'
import HireArtist from './pages/hireartist'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/ourstory" element={<Ourstory />} />
        <Route path="/careerservices" element={<CareerServices />} />
        <Route path="/hireartist" element={<HireArtist />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App