import React from 'react';
import { 
    FaGavel, FaHandshake, FaExclamationTriangle, FaUserShield, 
    FaBalanceScale, FaCheckCircle, FaRegFileAlt, FaMapMarkerAlt 
} from 'react-icons/fa';
import '../styles/TermsOfService.css';

const TermsOfService = () => {
    const lastUpdated = "April 14, 2026";

    return (
        <div className="terms-master">
            {/* 1. HERO SECTION (Minimalist Professional) */}
            <header className="terms-hero-pro">
                <div className="container">
                    <span className="pro-label">Legal Framework</span>
                    <h1>Terms of <span>Service</span></h1>
                    <p>By accessing the ABT Foundation website, you agree to comply with and be bound by the following terms and conditions.</p>
                </div>
            </header>

            <div className="pro-container terms-content">
                <div className="update-tag"><strong>Last Updated:</strong> {lastUpdated}</div>

                {/* 1. ACCEPTANCE OF TERMS */}
                <section className="terms-section-pro">
                    <div className="t-header">
                        <FaBalanceScale className="t-icon" />
                        <h2>1. Acceptance of Terms</h2>
                    </div>
                    <p>
                        By using this site, you signify your acceptance of these terms. If you do not agree to these terms, 
                        please refrain from using our website or participating in our digital activities.
                    </p>
                </section>

                {/* 2. USE OF CONTENT */}
                <section className="terms-section-pro">
                    <div className="t-header">
                        <FaRegFileAlt className="t-icon" />
                        <h2>2. Use of Content</h2>
                    </div>
                    <p>
                        All content on this website—including text, high-quality images of our outreach, logos, and project 
                        blueprints—is the property of <strong>ABT Foundation</strong>. You may not use, reproduce, or 
                        distribute our content for commercial purposes without prior written consent from the Executive Board.
                    </p>
                </section>

                {/* 3. DONATIONS & CONTRIBUTIONS */}
                <section className="terms-grid-pro">
                    <div className="terms-card-pro">
                        <FaHandshake className="tc-icon-pro" />
                        <h4>3. Donations & Contributions</h4>
                        <p>
                            All donations are voluntary and used to support our <strong>Triple-Allocation Model</strong> 
                            (Outreach, Sustainability/Investment, and Operations). Once processed, donations are 
                            generally non-refundable as they are immediately allocated to humanitarian projects.
                        </p>
                    </div>
                    <div className="terms-card-pro">
                        <FaUserShield className="tc-icon-pro" />
                        <h4>4. Membership Applications</h4>
                        <p>
                            Submitting a membership form does not guarantee admission. All candidates must undergo our 
                            professional <strong>Vetting and Interview Process</strong> led by the Coordinator 
                            and the Executive Board.
                        </p>
                    </div>
                </section>

                {/* 5. CODE OF CONDUCT */}
                <section className="terms-section-pro">
                    <div className="t-header">
                        <FaCheckCircle className="t-icon" />
                        <h2>5. Code of Conduct</h2>
                    </div>
                    <p>
                        Users are prohibited from using this website to post defamatory, offensive, or illegal content. 
                        We reserve the right to restrict access to anyone who violates our mission of 
                        <strong> "Restoring Hope."</strong>
                    </p>
                </section>

                {/* 6. LIMITATION OF LIABILITY */}
                <section className="terms-section-pro warning-box-pro">
                    <div className="t-header">
                        <FaExclamationTriangle className="w-icon-pro" />
                        <h2>6. Limitation of Liability</h2>
                    </div>
                    <p>
                        ABT Foundation shall not be liable for any damages arising out of the use or inability 
                        to use the materials on this site, including direct, indirect, or incidental damages.
                    </p>
                </section>

                {/* 7. GOVERNING LAW */}
                <section className="terms-section-pro">
                    <div className="t-header">
                        <FaMapMarkerAlt className="t-icon" />
                        <h2>7. Governing Law</h2>
                    </div>
                    <p>
                        These terms are governed by and construed in accordance with the laws of the 
                        <strong> Republic of Rwanda</strong>. Any disputes shall be subject to the exclusive 
                        jurisdiction of the Rwandan courts.
                    </p>
                </section>

                <div className="terms-footer-contact">
                    <FaGavel className="gavel-icon-pro" />
                    <p>For official legal inquiries, contact our board at: <strong>abettertomorrowf@gmail.com</strong></p>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
