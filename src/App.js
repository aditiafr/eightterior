import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import RMIbuAndira from './pages/Projects/Detail/RMIbuAndira';
import PTPundi from './pages/Projects/Detail/PtPundi';
import Hotel from './pages/Projects/Detail/Hotel';
import NotFound from './components/NotFound';
import Loading from './components/Loading';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppContent = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true); // Set loading to true whenever location changes
    // Simulate an asynchronous operation, e.g., fetching data
    setTimeout(() => {
      setLoading(false); // Set loading to false after the operation is done
    }, 1500); // Adjust the timeout as needed
  }, [location]); // Trigger effect on location change

  return (
    <>
      <ScrollToTop />
      <Header />

      {loading ? (
        <Loading />
      ) : (
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
      )}
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;