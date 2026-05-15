import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
    FaHistory, FaUsers, FaQuestionCircle, FaQuoteLeft, 
    FaCheckCircle, FaChartLine, FaShieldAlt, FaHeart 
} from 'react-icons/fa';

// Assets - Menya neza ko amafoto ari mu ruganda rwa assets
import alineImg from '../assets/aline.jpeg';
import kevineImg from '../assets/kevine.jpg';
import divineImg from '../assets/divine.jpg';
import enyseImg from '../assets/enysee.jpeg';
import fulgenceImg from '../assets/flugence.png';
import pacifiqueImg from '../assets/mugande.jpg';
import jazzyImg from '../assets/jazzy.jpg';

import '../styles/About.css';

const About = () => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState('story');

    useEffect(() => {
        const path = location.pathname.split('/').pop();
        if (['story', 'team', 'faq'].includes(path)) {
            setActiveTab(path);
        }
    }, [location]);

    const executiveBoard = [
        { 
            name: "UMUGWANEZA Aline", role: "Chief Executive Coordinator", image: alineImg,
            desc: "Primary visionary and legal representative. She oversees strategic partnerships and ensures the 'Restoring Hope' mission remains our core focus." 
        },
        { 
            name: "NIYONKURU Kevine", role: "Director of Operations", image: kevineImg,
            desc: "The organizational engine. Responsible for project logistics, financial records, and translating strategic goals into actionable field projects." 
        },
        { 
            name: "ISHIMWE Divine", role: "Director of Legal Affairs", image: divineImg,
            desc: "Ensures legal compliance and internal ethics. She manages the welfare of our members and beneficiaries, creating a safe environment for all." 
        },
        { 
            name: "GIHOZO Enyse", role: "Chief Internal Auditor", image: enyseImg,
            desc: "Guardian of transparency. Conducts regular audits of financial reports and project outcomes to ensure complete accountability." 
        },
        { 
            name: "NZAYISENGA Flugence", role: "Head of Counseling", image: fulgenceImg,
            desc: "Leads our 'Healing First' approach. Designs professional trauma healing (Isanamitima) programs for those in psychological distress." 
        },
        { 
            name: "DUSENGIMANA Pacifique", role: "Director of Communications", image: pacifiqueImg,
            desc: "Manages ABT’s public identity and digital presence. He builds bridges between the foundation, the media, and our strategic partners." 
        },
        { 
            name: "SHAMI SANGO Jazzy", role: "International Relations", image: jazzyImg,
            desc: "Our global ambassador. Coordinates Diaspora engagement and secures international partnerships to scale the foundation's impact." 
        }
    ];

    return (
        <div className="about-master">
            {/* HERO SECTION */}
            <header className="about-hero-pro">
                <div className="hero-content">
                    <span className="pro-tag">Strategic Plan 2026 - 2030</span>
                    <h1>A BETTER TOMORROW <br/><span>(ABT) FOUNDATION</span></h1>
                    <p>"Restoring Hope, Building Futures"</p>
                </div>
            </header>

            {/* NAVIGATION TABS */}
            <nav className="about-nav-tabs">
                <div className="tabs-wrapper">
                    <button className={activeTab === 'story' ? 'tab-link active' : 'tab-link'} onClick={() => setActiveTab('story')}>
                        <FaHistory /> OUR STORY
                    </button>
                    <button className={activeTab === 'team' ? 'tab-link active' : 'tab-link'} onClick={() => setActiveTab('team')}>
                        <FaUsers /> OUR LEADERSHIP
                    </button>

                </div>
            </nav>
            

            <main className="pro-container">
                {/* --- 1. OUR STORY --- */}
                {activeTab === 'story' && (
                    <div className="content-fade-in story-section">
                        <h2 className="section-title">Rooted in Dignity</h2>
                        <p className="lead-text">ABT Foundation is a movement for social transformation, founded on the principle that every individual deserves a second chance at a dignified life.</p>
                        
                        <div className="story-grid">
                            <div className="story-text">
                                <p>We reach out to those in the shadows the sick, street-involved children, and families in extreme poverty. What sets us apart is our <strong>Holistic Model</strong>: combining mental health counseling (Isanamitima) with economic empowerment.</p>
                                <div className="sustainability-box">
                                    <h4>Sustainability Model</h4>
                                    <p>We invest in local projects like professional Pig Farming to ensure our mission remains independent and long-lasting.</p>
                                </div>
                            </div>
                            <div className="vision-mission-cards">
                                <div className="vm-card">
                                    <h3><FaChartLine /> Our Vision</h3>
                                    <p>To be Rwanda’s leading center for social transformation, where the vulnerable become self-reliant citizens.</p>
                                </div>
                                <div className="vm-card">
                                    <h3><FaShieldAlt /> Our Mission</h3>
                                    <p>To restore hope through counseling, social integration, and strategic economic projects.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* --- 2. LEADERSHIP (Amafoto n'Animations) --- */}
{/* --- 2. OUR LEADERSHIP TEAM --- */}
{activeTab === 'team' && (
    <div className="content-fade-in team-section">
        {/* Header Section */}
        <div className="team-intro-header">
            <h2 className="section-title">OUR LEADERSHIP TEAM</h2>
            <h3 className="section-subtitle">The Architects of Hope and Sustainability</h3>
            <p className="team-lead-text">
                The ABT Foundation leadership follows a professional <strong>"Active Board"</strong> model. 
                Our team is composed of specialists who combine their expertise in law, finance, mental health, 
                and operations to ensure that our mission of Restoring Hope is delivered with excellence and transparency.
            </p>
        </div>

        {/* 1. THE FOUNDER & EXECUTIVE COORDINATOR */}
        <div className="founder-card-modern">
            <div className="founder-grid">
                <div className="founder-img-area">
                    <img src={alineImg} alt="UMUGWANEZA Aline" />
                    <div className="founder-status-badge">FOUNDER</div>
                </div>
                <div className="founder-info-area">
                    <span className="founder-label">THE FOUNDER & EXECUTIVE COORDINATOR</span>
                    <h3 className="leader-name">UMUGWANEZA Aline</h3>
                    <p className="leader-bio">
                        As the visionary leader of A Better Tomorrow (ABT) Foundation, Aline provides the overall strategic direction and leadership. 
                        She is responsible for the foundation's growth, legal standing, and high-level partnerships.
                    </p>
                    
                    <div className="responsibilities-grid">
                        <div className="res-item">
                            <strong>Strategic Direction:</strong> Defining the long-term roadmap, including the "Hope Center" and international expansion.
                        </div>
                        <div className="res-item">
                            <strong>Legal Representation:</strong> Serving as the primary representative to the Rwanda Governance Board (RGB) and government institutions.
                        </div>
                        <div className="res-item">
                            <strong>Operational Oversight:</strong> Supervising the Executive Board to ensure all departments are meeting their performance goals.
                        </div>
                        <div className="res-item">
                            <strong>High-Level Fundraising:</strong> Leading negotiations with major donors, corporate partners, and international agencies.
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* 2. THE EXECUTIVE BOARD */}
        <div className="board-section-title">
            <h3>THE EXECUTIVE BOARD</h3>
            <div className="title-underline"></div>
        </div>

        <div className="executive-board-grid">
            {/* NIYONKURU Kevine */}
            <div className="exec-card">
                <div className="exec-img-box"><img src={kevineImg} alt="Kevine" /></div>
                <div className="exec-details">
                    <h4>NIYONKURU Kevine</h4>
                    <span className="exec-role">Senior Secretary, Director of Operations & Chief Accountant</span>
                    <ul className="res-list">
                        <li><strong>Operational Execution:</strong> Managing the logistics of all outreach programs.</li>
                        <li><strong>Administrative Management:</strong> Maintaining official records and legal documents.</li>
                        <li><strong>Financial Accounting:</strong> Managing daily financial flows and quarterly statements.</li>
                    </ul>
                </div>
            </div>

            {/* ISHIMWE Divine */}
            <div className="exec-card">
                <div className="exec-img-box"><img src={divineImg} alt="Divine" /></div>
                <div className="exec-details">
                    <h4>ISHIMWE Divine</h4>
                    <span className="exec-role">Director of Legal Affairs & Social Welfare</span>
                    <ul className="res-list">
                        <li><strong>Legal Compliance:</strong> Adhering to the laws of Rwanda and international NGO standards.</li>
                        <li><strong>Ethics & Discipline:</strong> Managing "Internal Rules" and conflict resolution.</li>
                        <li><strong>Member Welfare:</strong> Overseeing social support for the founding team.</li>
                    </ul>
                </div>
            </div>

            {/* GIHOZO Enyse */}
            <div className="exec-card">
                <div className="exec-img-box"><img src={enyseImg} alt="Enyse" /></div>
                <div className="exec-details">
                    <h4>GIHOZO Enyse</h4>
                    <span className="exec-role">Chief Internal Auditor & Quality Control</span>
                    <ul className="res-list">
                        <li><strong>Financial Auditing:</strong> Regular internal audits to prevent mismanagement.</li>
                        <li><strong>Quality Assurance:</strong> Monitoring the impact of social interventions.</li>
                        <li><strong>Transparency Reporting:</strong> Preparing official audit reports for the Board.</li>
                    </ul>
                </div>
            </div>

            {/* NZAYISENGA Flugence */}
            <div className="exec-card">
                <div className="exec-img-box"><img src={fulgenceImg} alt="Flugence" /></div>
                <div className="exec-details">
                    <h4>NZAYISENGA Flugence</h4>
                    <span className="exec-role">Head of Counseling & Mental Health</span>
                    <ul className="res-list">
                        <li><strong>Psychological Frameworks:</strong> Designing counseling for street children and families.</li>
                        <li><strong>Training & Mentorship:</strong> Handling cases with empathy and professionalism.</li>
                        <li><strong>Emotional Reintegration:</strong> Managing the "Isanamitima" process.</li>
                    </ul>
                </div>
            </div>

            {/* DUSENGIMANA Pacifique */}
            <div className="exec-card">
                <div className="exec-img-box"><img src={pacifiqueImg} alt="Pacifique" /></div>
                <div className="exec-details">
                    <h4>DUSENGIMANA Pacifique</h4>
                    <span className="exec-role">Director of Communications & Strategic Advisor</span>
                    <ul className="res-list">
                        <li><strong>Public Relations:</strong> Media relations, storytelling, and press releases.</li>
                        <li><strong>Digital Branding:</strong> Overseeing website and social media (TikTok, YouTube).</li>
                        <li><strong>Strategic Growth:</strong> Advising on communication strategies for new partners.</li>
                    </ul>
                </div>
            </div>

            {/* SHAMI SANGO Jazzy */}
            <div className="exec-card">
                <div className="exec-img-box"><img src={jazzyImg} alt="Jazzy" /></div>
                <div className="exec-details">
                    <h4>SHAMI SANGO Jazzy</h4>
                    <span className="exec-role">International Relations & Diaspora Liaison</span>
                    <ul className="res-list">
                        <li><strong>Diaspora Engagement:</strong> Mobilizing Rwandan Diaspora for funding and expertise.</li>
                        <li><strong>International Partnerships:</strong> Building relationships with international NGOs.</li>
                        <li><strong>Global Advocacy:</strong> Raising awareness for ABT’s mission globally.</li>
                    </ul>
                </div>
            </div>
        </div>

        {/* 3. THE FOUNDING TEAM */}
        <div className="founding-team-footer-modern">
            <div className="banner-icon"><FaCheckCircle /></div>
            <div className="banner-text">
                <h3>THE FOUNDING TEAM</h3>
                <p>
                    The Board is supported by a dedicated Founding Team of <strong>13 Professionals</strong>. 
                    These members are the pillars of our <strong>Sustainability Model</strong>, contributing their 
                    professional skills, time, and weekly resources (2k/week fund) to ensure the foundation remains 
                    independent and impactful.
                </p>
            </div>
        </div>
    </div>
)}


                {/* --- 3. FAQ --- */}
                
                {/* {activeTab === 'faq' && (
                    <div className="content-fade-in faq-section">
                        <h2 className="section-title">Frequently Asked Questions</h2>
                        <div className="faq-list-pro">
                            <div className="faq-item-pro">
                                <h4>How is my donation used?</h4>
                                <p>We use a Triple-Allocation Model: 48% Outreach, 27% Sustainability, 25% Operations.</p>
                            </div>
                            <div className="faq-item-pro">
                                <h4>Can I join the foundation?</h4>
                                <p>Yes. Membership requires a professional interview and a commitment to our core values.</p>
                            </div>
                        </div>
                    </div>
                )} */}
            </main>

            {/* CTA FOOTER */}
            <footer className="about-cta-footer">
                <FaQuoteLeft className="q-icon" />
                <h2>Together, we are creating <br/><span className="emerald">A Better Tomorrow.</span></h2>
                <button className="btn-main-pro">Join the Movement</button>
            </footer>
        </div>
    );
};

export default About;
