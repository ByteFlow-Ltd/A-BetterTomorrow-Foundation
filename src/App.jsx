import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import LandingPage from './pages/LandingPage.jsx';
import About from './pages/About.jsx';
import Programs from './pages/Programs.jsx';
import Contact from './pages/Contact.jsx';
import Donate from './pages/Donate.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import TermsOfService from './pages/TermsOfService.jsx';
import GetInvolved from './pages/GetInvolved.jsx';

// Pages nshya twongeremo
import Blog from './pages/Blog.jsx';       /* Create this file in pages/ */
import News from './pages/News.jsx';       /* Create this file in pages/ */
import FAQ from './pages/FAQ.jsx';         /* Create this file in pages/ */

// Ituma paji itangirira hejuru (Top) iyo uhinduye route
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

function App() {
  const [lang, setLang] = useState('en'); // Default Language

  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Navbar lang={lang} setLang={setLang} />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<LandingPage lang={lang} />} />
            
            {/* About & FAQ */}
            <Route path="/about" element={<About lang={lang} />} />
            <Route path="/about/:tab" element={<About lang={lang} />} />
            <Route path="/faq" element={<FAQ lang={lang} />} />

            <Route path="/programs" element={<Programs lang={lang} />} />
          
            <Route path="/privacy" element={<PrivacyPolicy lang={lang} />} />
            <Route path="/terms" element={<TermsOfService lang={lang} />} />

            {/* Blog & Latest News */}
            <Route path="/blog" element={<Blog lang={lang} />} />
            <Route path="/news" element={<News lang={lang} />} />

            {/* Get Involved */}
            <Route path="/get-involved" element={<GetInvolved lang={lang} />} />
            <Route path="/get-involved/:tab" element={<GetInvolved lang={lang} />} />

            <Route path="/contact" element={<Contact lang={lang} />} />
            <Route path="/donate" element={<Donate lang={lang} />} />

            {/* 404 - Page Not Found */}
            <Route path="*" element={
              <div style={{ padding: "150px 20px", textAlign: "center", minHeight: "60vh" }}>
                <h1 style={{ fontSize: "6rem", color: "#10b981", margin: 0 }}>404</h1>
                <h2 style={{ color: "#064e3b" }}>Oops! Page Not Found</h2>
                <p style={{ color: "#64748b", marginTop: "10px" }}>The page you are looking for doesn't exist or has been moved.</p>
                <a href="/" style={{ 
                  display: "inline-block", 
                  marginTop: "30px", 
                  padding: "12px 30px", 
                  background: "#064e3b", 
                  color: "#fff", 
                  borderRadius: "50px", 
                  textDecoration: "none",
                  fontWeight: "bold" 
                }}>Back to Home</a>
              </div>
            } />
          </Routes>
        </main>

        <Footer lang={lang} />
      </div>
    </Router>
  );
}

export default App;
