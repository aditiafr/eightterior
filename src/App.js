import React, { useState, useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
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
import Dashboard from './pages/Dashboard/pages/Dashboard';
import MySidebar from './pages/Dashboard/components/Sidebar';
import Project from './pages/Dashboard/pages/Project';
import FormProject from './pages/Dashboard/pages/Project/form';
import Category from './pages/Dashboard/pages/Category';
import FormCategory from './pages/Dashboard/pages/Category/form';
import Review from './pages/Dashboard/pages/Review';
import FormReview from './pages/Dashboard/pages/Review/form';
import CarouselAbout from './pages/Dashboard/pages/Carousel';
import FormCarousel from './pages/Dashboard/pages/Carousel/form';
import Login from './pages/Dashboard/pages/Login';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppContent = () => {
  // const [loading, setLoading] = useState(false);
  // const location = useLocation();

  // useEffect(() => {
  //   setLoading(true);

  //   const handleLoad = () => {
  //     setLoading(false);
  //   };

  //   // Simulate async data fetching
  //   const timeoutId = setTimeout(handleLoad, 1500);

  //   // Clean up timeout if the component unmounts
  //   return () => clearTimeout(timeoutId);
  // }, [location]);

  const PrivateRoute = ({ element }) => {
    const authToken = Cookies.get('auth_token');
    return authToken ? element : <Navigate to="/login" />;
  };

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/*" element={
          <>
            <Header />
            {/* {loading && <Loading />} */}
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

        <Route path="/login" element={<Login />} />

        <Route path="/dashboard/*" element={
          <PrivateRoute
            element={
              <MySidebar>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/category" element={<Category />} />
                  <Route path="/category/form" element={<FormCategory />} />
                  <Route path="/project" element={<Project />} />
                  <Route path="/project/form" element={<FormProject />} />
                  <Route path="/review" element={<Review />} />
                  <Route path="/review/form" element={<FormReview />} />
                  <Route path="/carousel" element={<CarouselAbout />} />
                  <Route path="/carousel/form" element={<FormCarousel />} />
                </Routes>
              </MySidebar>
            }
          />
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
