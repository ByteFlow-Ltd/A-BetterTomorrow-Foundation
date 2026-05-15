import React from 'react';
import { Link } from 'react-router-dom';
import { 
    FaFacebookF, FaTiktok, FaInstagram, FaYoutube, 
    FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaHeart, FaChevronRight, FaPaperPlane 
} from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-main">
            <div className="footer-container">
                <div className="footer-grid">
                    
                    {/* Column 1: Branding */}
                    <div className="footer-col branding">
                        <Link to="/" className="footer-logo">
                            <span className="logo-accent">ABT</span> Foundation
                        </Link>
                        <p className="footer-desc">
                            A professional movement dedicated to restoring dignity through 
                            Isanamitima, social integration, and sustainable economic empowerment in Rwanda.
                        </p>
                        <div className="footer-social-links">
                            <a href="https://www.facebook.com/share/1JiQkJ7awL/" className="s-link"><FaFacebookF /></a>
                            <a href="https://www.instagram.com/abetter_tomorrow_foundation?igsh=am1jaDNneDhkY2s=" className="s-link"><FaInstagram /></a>
                        </div>
                    </div>

                    {/* Column 2: Navigation */}
                    <div className="footer-col">
                        <h4 className="footer-title">Navigation</h4>
                        <ul className="footer-nav-list">
                            <li><Link to="/about/story"><FaChevronRight /> Our Story</Link></li>
                            <li><Link to="/about/team"><FaChevronRight /> Leadership</Link></li>
                            <li><Link to="/programs"><FaChevronRight /> Our Pillars</Link></li>
                            <li><Link to="/news"><FaChevronRight /> Newsroom</Link></li>
                            <li><Link to="/faq"><FaChevronRight /> FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div className="footer-col">
                        <h4 className="footer-title">Contact Us</h4>
                        <div className="footer-contact-details">
                            <div className="contact-item">
                                <FaPhoneAlt className="c-icon" /> <span>0796023452</span>
                            </div>
                            <div className="contact-item">
                                <FaEnvelope className="c-icon" /> <span>abettertomorrowf@gmail.com</span>
                            </div>
                            <div className="contact-item">
                                <FaMapMarkerAlt className="c-icon" /> <span>Kigali, Rwanda</span>
                            </div>
                        </div>
                        <Link to="/donate" className="footer-cta-btn">
                            Support Mission <FaHeart className="pulse" />
                        </Link>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div className="footer-col">
                        <h4 className="footer-title">Newsletter</h4>
                        <p className="newsletter-text">Subscribe for impact reports and strategic updates.</p>
                        <form className="footer-newsletter-form" onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder="Email Address" required />
                            <button type="submit"><FaPaperPlane /></button>
                        </form>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom-bar">
                    <div className="footer-copyright">
                        &copy; {currentYear} <strong>A Better Tomorrow Foundation</strong>. All Rights Reserved.
                        <p>
                        Designed & Developed by 
                        <a href="https://byte-flow-ltd.vercel.app/" target="_blank" rel="noreferrer" className="dev-link">
                           ByteFlow Ltd
                        </a>
                    </p>
                    </div>
                    <div className="footer-legal-links">
                        <Link to="/privacy">Privacy Policy</Link>
                        <Link to="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
