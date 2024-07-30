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
import Dashboard from './pages/dashboard/pages/dashboard';
import MySidebar from './pages/dashboard/components/Sidebar';
import Project from './pages/dashboard/pages/Project';
import FormProject from './pages/dashboard/pages/Project/form';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppContent = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    const handleLoad = () => {
      setLoading(false);
    };

    // Simulate async data fetching
    const timeoutId = setTimeout(handleLoad, 1500);

    // Clean up timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, [location]);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/*" element={
          <>
            <Header />
            {loading && <Loading />}
            <Routes>
              <Route path="*" element={<NotFound />} />
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/rmibuandira" element={<RMIbuAndira />} />
              <Route path="/projects/ptpundi" element={<PTPundi />} />
              <Route path="/projects/hotel" element={<Hotel />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact-us" element={<Contact />} />
            </Routes>
            <Footer />
          </>
        } />

        {/* DASHBOARD */}

        <Route path="/dashboard/*" element={
          <>
            <MySidebar>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/project" element={<Project />} />
                <Route path="/project/form" element={<FormProject />} />
              </Routes>
            </MySidebar>
          </>
        } />

      </Routes>
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
