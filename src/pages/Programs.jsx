import React from 'react';
import { 
    FaHospital, FaChild, FaCheckCircle, FaGraduationCap, 
    FaTools, FaBullhorn, FaHeartbeat, FaPiggyBank, FaShieldAlt 
} from 'react-icons/fa';
import '../styles/Programs.css';

const Programs = () => {
    return (
        <div className="programs-page-pro">
            {/* 1. HERO SECTION */}
            <section className="programs-hero-clean">
                <div className="hero-content">
                    <span className="pro-label">Strategic Impact</span>
                    <h1>TRANSFORMING <span>LIVES</span></h1>
                    <p>Professional interventions designed to restore dignity and self-reliance to Rwanda's most vulnerable.</p>
                </div>
            </section>

            {/* 2. PROGRAM 1: HEALTH & ISANAMITIMA */}
            <section className="program-row">
                <div className="pro-container">
                    <div className="program-grid">
                        <div className="program-info">
                            <div className="p-icon-header">
                                <FaHospital className="main-icon" />
                                <span className="p-category">Health & Care</span>
                            </div>
                            <h2>Hospital & Home <span>Outreach</span></h2>
                            <p className="p-lead">Restoring physical and emotional dignity through Isanamitima.</p>
                            <p className="p-body">
                                We reach out to the "unreachable"—patients in public hospitals without family support. 
                                Our approach combines material support with professional trauma healing.
                            </p>
                            <ul className="p-features">
                                <li><FaCheckCircle /> Provision of essential hygiene kits & nutrition.</li>
                                <li><FaCheckCircle /> Professional Isanamitima (Trauma Healing).</li>
                                <li><FaCheckCircle /> Bedside presence for isolated patients.</li>
                            </ul>
                        </div>
                        <div className="program-stat-box">
                            <div className="stat-circle">
                                <h4>48%</h4>
                                <span>Outreach Allocation</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. PROGRAM 2: STREET CHILDREN */}
            <section className="program-row alt-bg">
                <div className="pro-container">
                    <div className="program-grid reversed">
                        <div className="program-info">
                            <div className="p-icon-header">
                                <FaChild className="main-icon" />
                                <span className="p-category">Rehabilitation</span>
                            </div>
                            <h2>Street Children <span>Restoration</span></h2>
                            <p className="p-lead">A structured bridge from the street back to family dignity.</p>
                            <p className="p-body">
                                Beyond temporary aid, we conduct field assessments to rescue children and 
                                guide them back into safe family environments or vocational schools.
                            </p>
                            <ul className="p-features">
                                <li><FaCheckCircle /> Trauma-informed psychological assessment.</li>
                                <li><FaCheckCircle /> Family tracing and safe reintegration.</li>
                                <li><FaCheckCircle /> Long-term mentorship and monitoring.</li>
                            </ul>
                        </div>
                        <div className="program-stat-box">
                            <div className="glass-icon-card">
                                <FaShieldAlt className="large-icon" />
                                <p>Protection & Dignity</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. PROGRAM 3: EDUCATION & THE HOPE CENTER */}
            <section className="program-row">
                <div className="pro-container">
                    <div className="program-grid">
                        <div className="program-info">
                            <div className="p-icon-header">
                                <FaGraduationCap className="main-icon" />
                                <span className="p-category">Education</span>
                            </div>
                            <h2>ABT <span>Scholarship Fund</span></h2>
                            <p className="p-lead">Breaking the poverty cycle through professional education.</p>
                            <p className="p-body">
                                We cover school and vocational training fees for orphans and former street children, 
                                ensuring financial barriers don't stop their potential.
                            </p>
                            <ul className="p-features">
                                <li><FaCheckCircle /> Direct school fees & vocational tuition.</li>
                                <li><FaCheckCircle /> Provision of uniforms and academic materials.</li>
                                <li><FaCheckCircle /> Career mentorship and academic follow-up.</li>
                            </ul>
                        </div>
                        <div className="program-stat-box">
                            <div className="vision-box-pro">
                                <h5>Vision: The Hope Center</h5>
                                <p>Our future vocational hub for modern trades and entrepreneurship.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. PROGRAM 4: SUSTAINABILITY */}
            <section className="program-row alt-bg">
                <div className="pro-container">
                    <div className="program-grid reversed">
                        <div className="program-info">
                            <div className="p-icon-header">
                                <FaPiggyBank className="main-icon" />
                                <span className="p-category">Self-Reliance</span>
                            </div>
                            <h2>Economic <span>Sustainability</span></h2>
                            <p className="p-lead">Generating revenue to fund our mission independently.</p>
                            <p className="p-body">
                                Through the <strong>Self-Reliance Fund</strong>, we invest in projects like 
                                <strong> Professional Pig Farming</strong> to generate revenue without relying solely on donations.
                            </p>
                            <ul className="p-features">
                                <li><FaCheckCircle /> Professional Pig Farming investments.</li>
                                <li><FaCheckCircle /> Startup capital for vulnerable mothers.</li>
                                <li><FaCheckCircle /> Financial literacy & savings group coaching.</li>
                            </ul>
                        </div>
                        <div className="program-stat-box">
                            <div className="stat-circle accent">
                                <h4>27%</h4>
                                <span>Investment Fund</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="programs-cta">
                <div className="pro-container">
                    <h2>Every Program is a <span>Promise.</span></h2>
                    <p>Be part of the team that transforms despair into a dignified future.</p>
                    <div className="cta-flex-btns">
                        <button className="btn-main-dark">Partner With Us</button>
                        <button className="btn-accent-pro">Support a Project</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Programs;
