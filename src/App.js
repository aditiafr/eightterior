import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import RMIbuAndira from './pages/Projects/Detail/RMIbuAndira'
import PTPundi from './pages/Projects/Detail/PtPundi'
import Hotel from './pages/Projects/Detail/Hotel'
import NotFound from './components/NotFound'

const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/rmibuandira" element={<RMIbuAndira />} />
        <Route path="/projects/ptpundi" element={<PTPundi />} />
        <Route path="/projects/hotel" element={<Hotel />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App