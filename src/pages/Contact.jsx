import React, { useState } from 'react';
import { 
    FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, 
    FaPaperPlane, FaFacebookF, FaTiktok, FaInstagram, FaYoutube 
} from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({ 
        name: '', 
        email: '', 
        inquiryType: 'General', 
        message: '' 
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can integrate an email service like EmailJS or a backend API
        console.log("Strategic Inquiry Received:", formData);
        alert(`Thank you, ${formData.name}. Our Communications Officer will contact you shortly.`);
        setFormData({ name: '', email: '', inquiryType: 'General', message: '' });
    };

    return (
        <div className="contact-master">
            {/* CLEAN HERO SECTION */}
            <header className="contact-hero-pro">
                <div className="container">
                    <span className="pro-label">Connect With ABT</span>
                    <h1>Let's Build a <span>Better Tomorrow.</span></h1>
                    <p>Whether you are a donor, a potential partner, or the Diaspora, your voice matters to our mission.</p>
                </div>
            </header>

            <div className="container contact-main-grid">
                <div className="contact-layout">
                    
                    {/* LEFT: STRATEGIC INFO */}
                    <div className="contact-details-side">
                        <div className="detail-header">
                            <h2>Contact <span>Information</span></h2>
                            <p>Our 13 Founding Professionals are ready to facilitate your partnership.</p>
                        </div>

                        <div className="detail-cards-grid">
                            <div className="d-card">
                                <FaMapMarkerAlt className="d-icon" />
                                <div>
                                    <h4>Headquarters</h4>
                                    <p>Kigali, Rwanda </p>
                                </div>
                            </div>
                            <div className="d-card">
                                <FaPhoneAlt className="d-icon" />
                                <div>
                                    <h4>Official Line</h4>
                                    <p>0796023452</p>
                                </div>
                            </div>
                            <div className="d-card">
                                <FaEnvelope className="d-icon" />
                                <div>
                                    <h4>Email Communications</h4>
                                    <p>abettertomorrowf@gmail.com</p>
                                </div>
                            </div>
                            <div className="d-card">
                                <FaClock className="d-icon" />
                                <div>
                                    <h4>Office Hours</h4>
                                    <p>Mon - Sun: 8:00 AM - 10:00 PM</p>
                                </div>
                            </div>
                        </div>

                        <div className="social-connect">
                            <h4>Official Social Media</h4>
                            <div className="s-circle-links">
                                <a href="https://www.facebook.com/share/1JiQkJ7awL/" target="_blank" rel="noreferrer"><FaFacebookF /></a>
                                <a href="https://www.instagram.com/abetter_tomorrow_foundation?igsh=am1jaDNneDhkY2s=" target="_blank" rel="noreferrer"><FaInstagram /></a>
                                
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: PROFESSIONAL FORM */}
                    <div className="contact-form-side">
                        <form className="abt-pro-form" onSubmit={handleSubmit}>
                            <h3 className="form-title">Send a Strategic Message</h3>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input type="text" placeholder="John Doe" required 
                                        value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                                </div>
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input type="email" placeholder="john@example.com" required 
                                        value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Inquiry Type</label>
                                <select 
                                    value={formData.inquiryType} 
                                    onChange={(e) => setFormData({...formData, inquiryType: e.target.value})}
                                >
                                    <option value="General">General Inquiry</option>
                                    <option value="Partnership">Partnership Opportunities</option>
                                    <option value="Diaspora">Diaspora Liaison</option>
                                    <option value="Membership">Membership Application</option>
                                    <option value="Sustainability">Sustainability Projects</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Your Message</label>
                                <textarea rows="6" placeholder="Describe how you would like to collaborate..." required 
                                    value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
                            </div>

                            <button type="submit" className="pro-submit-btn">
                                Submit Message <FaPaperPlane />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
