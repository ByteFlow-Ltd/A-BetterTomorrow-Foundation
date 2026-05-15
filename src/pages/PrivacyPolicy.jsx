import React from 'react';
import { FaShieldAlt, FaLock, FaUserSecret, FaRegFileAlt, FaDatabase, FaEyeSlash } from 'react-icons/fa';
import '../styles/PrivacyPolicy.css';

const PrivacyPolicy = () => {
    const effectiveDate = "April 14, 2026";

    return (
        <div className="privacy-master">
            {/* 1. MINIMALIST HERO (No Images) */}
            <header className="privacy-hero-pro">
                <div className="container">
                    <span className="pro-label">Compliance & Ethics</span>
                    <h1>Privacy <span>Policy</span></h1>
                    <p>At ABT Foundation, we respect your privacy and are committed to protecting the personal data you share with us.</p>
                </div>
            </header>

            <div className="pro-container privacy-content">
                <div className="effective-date"><strong>Effective Date:</strong> {effectiveDate}</div>

                {/* INTRODUCTION */}
                <section className="p-section-pro">
                    <p className="intro-text">
                        A Better Tomorrow (ABT) Foundation operates with the highest standards of integrity. This policy explains how we collect, use, and safeguard your information to ensure your trust and our accountability.
                    </p>
                </section>

                {/* 1. INFORMATION WE COLLECT */}
                <section className="p-section-pro">
                    <div className="p-header-wrap">
                        <FaDatabase className="p-section-icon" />
                        <h2>1. Information We Collect</h2>
                    </div>
                    <div className="p-card-grid">
                        <div className="p-info-card-pro">
                            <h4>Personal Identification</h4>
                            <p>Name, email address, phone number, and physical address when you sign up for our newsletter or apply for membership.</p>
                        </div>
                        <div className="p-info-card-pro">
                            <h4>Donation Data</h4>
                            <p>Financial information required to process contributions, handled securely through our payment partners to ensure transparency.</p>
                        </div>
                        <div className="p-info-card-pro">
                            <h4>Usage Data</h4>
                            <p>Information on how you interact with our website to help us improve our digital presence and outreach visibility.</p>
                        </div>
                    </div>
                </section>

                {/* 2. HOW WE USE YOUR INFORMATION */}
                <section className="p-section-pro">
                    <div className="p-header-wrap">
                        <FaRegFileAlt className="p-section-icon" />
                        <h2>2. How We Use Your Information</h2>
                    </div>
                    <p>We utilize your data to fulfill our mission and comply with national regulations:</p>
                    <ul className="p-list-pro">
                        <li>To process your membership applications and donations.</li>
                        <li>To send strategic updates regarding our outreach programs (e.g., Mituweli Drive, Hope Center progress).</li>
                        <li>To comply with legal requirements from the Rwanda Governance Board (RGB).</li>
                    </ul>
                </section>

                {/* 3. DATA PROTECTION & ISANAMITIMA */}
                <section className="p-section-pro">
                    <div className="p-header-wrap">
                        <FaEyeSlash className="p-section-icon" />
                        <h2>3. Data Protection & Confidentiality</h2>
                    </div>
                    <p>
                        In accordance with our internal **Isanamitima** values, we treat the data of our beneficiaries (street children, patients, and families) with the highest level of confidentiality. We do not sell, trade, or rent your personal information to third parties.
                    </p>
                </section>

                {/* 4. SECURITY */}
                <section className="p-section-pro">
                    <div className="p-header-wrap">
                        <FaLock className="p-section-icon" />
                        <h2>4. Security</h2>
                    </div>
                    <p>
                        We implement industry-standard security measures to maintain the safety of your personal information. However, please be aware that no method of transmission over the Internet is 100% secure.
                    </p>
                </section>

                {/* 5. YOUR RIGHTS */}
                <section className="p-section-pro">
                    <div className="p-header-wrap">
                        <FaUserSecret className="p-section-icon" />
                        <h2>5. Your Rights</h2>
                    </div>
                    <p>
                        You have the right to request access to the personal data we hold about you, to request corrections, or to ask for your data to be deleted from our records.
                    </p>
                </section>

                {/* CONTACT SECTION */}
                <section className="contact-legal-box">
                    <h3>Questions & Compliance</h3>
                    <p>If you have any questions regarding this policy, please reach out to our legal department:</p>
                    <div className="legal-contact-info">
                        <p><strong>Email:</strong> abettertomorrowf@gmail.com</p>
                        <p><strong>Office:</strong> Kigali, Rwanda </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
