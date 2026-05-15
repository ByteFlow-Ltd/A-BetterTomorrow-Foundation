import React from 'react';
import { 
    FaHeart, FaHandHoldingHeart, FaMobileAlt, FaUniversity, 
    FaCheckCircle, FaShieldAlt, FaChartPie, FaArrowRight 
} from 'react-icons/fa';
import '../styles/Donate.css';

const Donate = () => {
    return (
        <div className="donate-master">
            {/* 1. MINIMALIST HERO */}
            <header className="donate-hero-pro">
                <div className="container">
                    <span className="pro-label">Philanthropy & Impact</span>
                    <h1>Invest in a <span>Better Tomorrow.</span></h1>
                    <p>Your contribution is more than a donation; it is a strategic investment in human dignity and self-reliance.</p>
                </div>
            </header>

            <main className="container donate-main-grid">
                {/* LEFT SIDE: TRANSPARENCY & ALLOCATION */}
                <div className="donate-strategy-side">
                    <h2 className="section-title-pro">Radical <span>Transparency</span></h2>
                    <p className="strategy-p">
                        We operate with professional integrity. Every donation is governed by our 
                        <strong> Triple-Allocation Model</strong>, ensuring balance between immediate 
                        relief and long-term sustainability.
                    </p>

                    <div className="allocation-chart-box">
                        <div className="a-row">
                            <div className="a-info"><span>Direct Outreach</span> <span>48%</span></div>
                            <div className="a-bar"><div className="a-fill" style={{width: '48%'}}></div></div>
                        </div>
                        <div className="a-row">
                            <div className="a-info"><span>Sustainability Projects</span> <span>27%</span></div>
                            <div className="a-bar"><div className="a-fill" style={{width: '27%'}}></div></div>
                        </div>
                        <div className="a-row">
                            <div className="a-info"><span>Operations & Oversight</span> <span>25%</span></div>
                            <div className="a-bar"><div className="a-fill" style={{width: '25%'}}></div></div>
                        </div>
                    </div>

                    <div className="impact-check-list">
                        <h3>Investment Impact:</h3>
                        <div className="check-item"><FaCheckCircle /> <span>Health: Mutuelle de Santé for vulnerable families.</span></div>
                        <div className="check-item"><FaCheckCircle /> <span>Healing: Professional Isanamitima (Counseling) sessions.</span></div>
                        <div className="check-item"><FaCheckCircle /> <span>Sustainability: Funding professional Pig Farming projects.</span></div>
                        <div className="check-item"><FaCheckCircle /> <span>Future: Construction of the Hope Center sanctuary.</span></div>
                    </div>
                </div>

                {/* RIGHT SIDE: PAYMENT PORTALS */}
                <div className="donate-portals-side">
                    <div className="payment-card-pro">
                        <div className="p-card-header">
                            <FaShieldAlt className="shield-icon" />
                            <h3>Official Channels</h3>
                            <p>Secure payment methods for ABT Foundation.</p>
                        </div>

                        <div className="methods-list">
                            {/* Mobile Money */}
                            <div className="method-item">
                                <div className="m-icon-box"><FaMobileAlt /></div>
                                <div className="m-text">
                                    <h4>MTN Mobile Money (MoMo)</h4>
                                    <p className="m-code">Merchant Code: <strong> 0791416194</strong></p>
                                    <p className="m-name">ABT FOUNDATION</p>
                                </div>
                            </div>

                            {/* Bank Transfer */}
                            <div className="method-item">
                                <div className="m-icon-box"><FaUniversity /></div>
                                <div className="m-text">
                                    <h4>Bank Transfer (BK / I&M)</h4>
                                    <p className="m-code">Account: <strong>0000-0000-0000</strong></p>
                                    <p className="m-name">Swift: <strong>XXXXXXXX</strong></p>
                                </div>
                            </div>
                        </div>

                        <div className="m-receipt-note">
                            <FaHandHoldingHeart className="heart-icon" />
                            <p>For your <strong>Digital Impact Receipt</strong>, please send a confirmation to <strong>0796023452</strong>.</p>
                        </div>
                    </div>
                </div>
            </main>

            {/* LONG-TERM VISION CTA */}
            <section className="hope-center-fund">
                <div className="container">
                    <div className="fund-box-glass">
                        <FaChartPie className="bg-chart-icon" />
                        <h2>The <span>Hope Center</span> Fund</h2>
                        <p>Join our 13 founding professionals in establishing Rwanda’s premier vocational and healing sanctuary.</p>
                        <button className="btn-vision-pro">Partner for Sustainability <FaArrowRight /></button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Donate;
