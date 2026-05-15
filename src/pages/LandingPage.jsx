import React from 'react';
import { Link } from 'react-router-dom';
import { 
    FaHeart, FaChartBar, FaShieldAlt, FaHandHoldingHeart, 
    FaUserCheck, FaSeedling, FaPiggyBank, FaArrowRight, FaQuoteLeft 
} from 'react-icons/fa';
import '../styles/LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landing-master">
            {/* 1. PREMIUM HERO SECTION */}
            <header className="hero-modern-pro">
                <div className="hero-grid-overlay"></div>
                <div className="container hero-content">
                    <span className="pro-badge">A Better Tomorrow (ABT) Foundation</span>
                    <h1>Restoring <span>Hope</span>,<br /> Building Futures.</h1>
                    <p className="hero-lead">
                        A Rwanda-based movement transforming lives through professional counseling, 
                        social integration, and independent economic sustainability.
                    </p>
                    <div className="hero-actions">
                        <Link to="/donate" className="btn-impact">Support Our Vision <FaHeart /></Link>
                        <Link to="/about/story" className="btn-outline">View Strategic Plan <FaArrowRight /></Link>
                    </div>
                </div>
            </header>

            {/* 2. THE ACCOUNTABILITY BAR (Triple-Allocation Model) */}
            <section className="accountability-bar">
                <div className="container">
                    <div className="acc-grid">
                        <div className="acc-item">
                            <span className="acc-num">48%</span>
                            <span className="acc-label">Direct Outreach</span>
                        </div>
                        <div className="acc-item">
                            <span className="acc-num">27%</span>
                            <span className="acc-label">Sustainability Fund</span>
                        </div>
                        <div className="acc-item">
                            <span className="acc-num">25%</span>
                            <span className="acc-label">Operations & PR</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. CORE STRATEGIC PILLARS */}
            <section className="strategy-pillars">
                <div className="container">
                    <div className="section-header">
                        <span className="tag">Our Pillars</span>
                        <h2>The Holistic <span>Transformation</span> Model</h2>
                    </div>
                    <div className="pillars-pro-grid">
                        <div className="p-glass-card">
                            <FaHandHoldingHeart className="p-pro-icon" />
                            <h4>Isanamitima</h4>
                            <p>Professional trauma counseling to restore emotional dignity before physical aid.</p>
                        </div>
                        <div className="p-glass-card">
                            <FaUserCheck className="p-pro-icon" />
                            <h4>Social Rebirth</h4>
                            <p>Rehabilitating street children and integrating them back into stable families.</p>
                        </div>
                        <div className="p-glass-card">
                            <FaSeedling className="p-pro-icon" />
                            <h4>The Hope Center</h4>
                            <p>A flagship vocational sanctuary for trade skills and entrepreneurship training.</p>
                        </div>
                        <div className="p-glass-card">
                            <FaPiggyBank className="p-pro-icon" />
                            <h4>Self-Reliance</h4>
                            <p>Independent funding through professional Pig Farming and internal investments.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. WHY ABT? (The 13 Professionals) */}
            <section className="founding-credo">
                <div className="container grid-2-pro">
                    <div className="credo-text">
                        <span className="tag">Who We Are</span>
                        <h3>Founded by <span>13 Professionals</span>,<br />Driven by Integrity.</h3>
                        <p>
                            We are not just a charity; we are architects of change. ABT Foundation 
                            stands as a bridge between despair and a dignified future. Every outreach 
                            is governed by professional vetting and transparent impact reporting.
                        </p>
                        <ul className="credo-list">
                            <li><FaShieldAlt /> 100% Radical Transparency</li>
                            <li><FaChartBar /> Measurable Social Impact</li>
                            <li><FaHandHoldingHeart /> Compassionate Field Presence</li>
                        </ul>
                    </div>
                    <div className="credo-visual">
                        <div className="impact-circle">
                            <span className="big-num">100%</span>
                            <span className="small-text">Accountability</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. CALL TO ACTION (CTA) */}
            <section className="pro-cta-banner">
                <div className="container">
                    <FaQuoteLeft className="q-icon-pro" />
                    <h2>"No heart is left without hope, and no situation is beyond repair."</h2>
                    <p>Join our global Diaspora partners and local professionals today.</p>
                    <div className="cta-btns-group">
                        <Link to="/contact" className="btn-dark-pro">Become a Partner</Link>
                        <Link to="/faq" className="btn-link-pro">How it works <FaArrowRight /></Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
