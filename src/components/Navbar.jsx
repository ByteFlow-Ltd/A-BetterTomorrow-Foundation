import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
    FaHome, FaInfoCircle, FaHandsHelping, FaRss,
    FaEnvelope, FaHeart, FaBars, FaTimes, FaGlobe, 
    FaChevronDown, FaQuestionCircle, FaBullhorn 
} from 'react-icons/fa';
import logoImg from '../assets/logo.jpg'; 
import '../styles/Navbar.css';

const Navbar = ({ lang, setLang }) => {
    const [isMobile, setIsMobile] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const location = useLocation();
    const navRef = useRef();

    // Guhindura ibara rya navbar iyo umuntu akuluye (scroll)
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Gufunga menu iyo ukanze ahandi hantu (Click Outside)
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setIsMobile(false);
                setActiveDropdown(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const closeMenu = () => {
        setIsMobile(false);
        setActiveDropdown(null);
    };

    const toggleDropdown = (name) => {
        setActiveDropdown(activeDropdown === name ? null : name);
    };

    const content = {
        en: { home: "Home", about: "About Us", programs: "Programs", contact: "Contact", donate: "Donate", blog: "Blog", faq: "FAQ", news: "News" },
        kiny: { home: "Ahabanza", about: "Turi Bamwe", programs: "Ibikorwa", contact: "Twandikire", donate: "Fasha", blog: "Amakuru", faq: "Ibibazo", news: "Ibiherutse" },
        fr: { home: "Accueil", about: "À Propos", programs: "Programmes", contact: "Contact", donate: "Donner", blog: "Blog", faq: "FAQ", news: "Actualités" },
        sw: { home: "Nyumbani", about: "Kuhusu Sisi", programs: "Mipango", contact: "Wasiliana", donate: "Changia", blog: "Blogu", faq: "Maswali", news: "Habari" }
    };

    const t = content[lang] || content.en;

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`} ref={navRef}>
            <div className="nav-container">
                <Link to="/" className="nav-logo" onClick={closeMenu}>
                    <img src={logoImg} alt="ABT Logo" className="logo-img" />
                    <div className="logo-text-wrapper">
                        <h1 className="brand-name">A BETTER TOMORROW</h1>
                        <p className="brand-slogan">Restoring Hope, Building Futures.</p>
                    </div>
                </Link>

                <ul className={isMobile ? "nav-links active" : "nav-links"}>
                    {/* 1. Home */}
                    <li>
                        <Link to="/" className={location.pathname === "/" ? "active-nav" : ""} onClick={closeMenu}>
                            <FaHome className="n-icon"/> {t.home}
                        </Link>
                    </li>
                    
                    {/* 2. About Dropdown (Only Story, Team, FAQ) */}
                    <li className="nav-item-dropdown" 
                        onMouseEnter={() => !isMobile && setActiveDropdown('about')} 
                        onMouseLeave={() => !isMobile && setActiveDropdown(null)}>
                        <div className="dropdown-trigger" onClick={() => toggleDropdown('about')}>
                            <FaInfoCircle className="n-icon"/> {t.about} <FaChevronDown className={`drop-icon ${activeDropdown === 'about' ? 'rotate' : ''}`}/>
                        </div>
                        <ul className={activeDropdown === 'about' ? "dropdown-menu show" : "dropdown-menu"}>
                            <li><Link to="/about/story" onClick={closeMenu}>Our Story</Link></li>
                            <li><Link to="/about/team" onClick={closeMenu}>Our Team</Link></li>
                            <li><Link to="/faq" onClick={closeMenu}><FaQuestionCircle className="sub-icon"/> {t.faq}</Link></li>
                        </ul>
                    </li>

                    {/* 3. Programs */}
                    <li>
                        <Link to="/programs" className={location.pathname === "/programs" ? "active-nav" : ""} onClick={closeMenu}>
                            <FaHandsHelping className="n-icon"/> {t.programs}
                        </Link>
                    </li>

                    {/* 4. Blog (Link Isanzwe) */}
                    <li>
                        <Link to="/blog" className={location.pathname === "/blog" ? "active-nav" : ""} onClick={closeMenu}>
                            <FaRss className="n-icon"/> {t.blog}
                        </Link>
                    </li>
                    
                    {/* 5. News (Link Isanzwe) */}
                    <li>
                        <Link to="/news" className={location.pathname === "/news" ? "active-nav" : ""} onClick={closeMenu}>
                            <FaBullhorn className="n-icon"/> {t.news}
                        </Link>
                    </li>

                    {/* 6. Contact */}
                    <li>
                        <Link to="/contact" className={location.pathname === "/contact" ? "active-nav" : ""} onClick={closeMenu}>
                            <FaEnvelope className="n-icon"/> {t.contact}
                        </Link>
                    </li>
                    


                    {/* 8. Donate Button */}
                    <li className="donate-item">
                        <Link to="/donate" className="nav-donate-btn" onClick={closeMenu}>
                            <FaHeart className="n-icon-white"/> {t.donate}
                        </Link>
                    </li>
                </ul>

                <button className="mobile-toggle" onClick={() => setIsMobile(!isMobile)}>
                    {isMobile ? <FaTimes /> : <FaBars />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
