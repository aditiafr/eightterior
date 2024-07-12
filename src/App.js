import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Detail1 from './pages/Projects/Detail/Detail1'
import Detail2 from './pages/Projects/Detail/Detail2'
import Detail3 from './pages/Projects/Detail/Detail3'
import Header from './components/Header'

const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/detail1" element={<Detail1 />} />
        <Route path="/projects/detail2" element={<Detail2 />} />
        <Route path="/projects/detail3" element={<Detail3 />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App