import React, { useState } from 'react';
import { FaChevronDown, FaQuestionCircle, FaSearch, FaEnvelope, FaChartPie, FaGlobe, FaHandshake } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/FAQ.css';

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    const faqs = [
        {
            question: "What is A Better Tomorrow (ABT) Foundation?",
            answer: "ABT Foundation is a Rwandan-based non-profit organization dedicated to restoring hope to vulnerable groups, including street children, hospital patients, and families in extreme poverty. We combine emotional healing (Counseling) with economic empowerment."
        },
        {
            question: "How is ABT different from other NGOs?",
            answer: "Unlike traditional charities, we focus on Sustainability. We operate a 'Self-Reliance Fund' where we invest in internal projects, like professional pig farming, to fund our humanitarian activities independently rather than relying solely on donations."
        },
        {
            question: "What is the 'Hope Center'?",
            answer: "The Hope Center is our flagship vision—a physical sanctuary designed to provide shelter, professional mental health support, and vocational training (imyuga) for women and youth to help them break the cycle of poverty."
        },
        {
            question: "How can I join or become a member of ABT Foundation?",
            answer: "We welcome dedicated individuals! To join, you need to fill out our Membership Application Form on this website. After a review process and a professional interview, successful candidates are welcomed into our founding team or volunteer network."
        },
        {
            question: "How do you ensure my donation is used correctly?",
            answer: "Transparency is our core value. We use a 'Triple-Allocation Model': 48% goes directly to outreach, 27% to sustainability investments, and 25% to operational costs. Our Chief Auditor and Legal Advisor provide constant oversight."
        },
        {
            question: "What are your main activities throughout the year?",
            answer: "We operate on a quarterly cycle: April (Mutuelle de Santé), August (Street children & Hospital outreach), and December (Year-end social impact). Daily operations include counseling and managing investment projects."
        },
        {
            question: "Can I partner with ABT if I live in the Diaspora?",
            answer: "Yes! We have a dedicated International Relations & Diaspora Liaison department. You can partner through project-based funding, remote professional mentorship, or supporting our sustainability investments."
        },
        {
            question: "Where is ABT Foundation located?",
            answer: "Our main operational hub is in Kigali, Rwanda. You can reach us through our official email and phone numbers listed on the Contact Us page."
        },
        {
            question: "How do you select the people you help?",
            answer: "Our Operations and Counseling departments conduct field assessments to identify those in critical need (the 'unreachable'), prioritizing the most vulnerable children, patients with no support, and extreme-poverty families."
        },
        {
            question: "How can I stay updated on ABT’s impact?",
            answer: "Follow our journey on our official Social Media handles (Instagram, TikTok, and YouTube) or subscribe to our newsletter for bi-annual impact reports."
        }
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    // SEARCH LOGIC: Imidura hano gusa ngo ishake mu kibazo no mu gisubizo
    const filteredFaqs = faqs.filter(faq => 
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="faq-master">
            {/* HERO SECTION */}
            <header className="faq-hero">
                <div className="container">
                    <span className="badge">ABT Support Center</span>
                    <h1>Got <span>Questions?</span> We have Answers.</h1>
                    <div className="search-box">
                        <FaSearch className="search-icon" />
                        <input 
                            type="text" 
                            placeholder="Search topics (Hope Center, Diaspora, Membership...)" 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
            </header>

            {/* QUICK STATS / TRUST BANNERS */}
            <div className="faq-trust-bar">
                <div className="trust-item"><FaChartPie /> <span>100% Transparency</span></div>
                <div className="trust-item"><FaGlobe /> <span>Global Partnership</span></div>
                <div className="trust-item"><FaHandshake /> <span>Sustainability Driven</span></div>
            </div>

            {/* FAQ ACCORDION SECTION */}
            <section className="faq-section">
                <div className="container-small">
                    <h2 className="faq-title">Frequently Asked Questions</h2>
                    <div className="faq-list">
                        {filteredFaqs.length > 0 ? (
                            filteredFaqs.map((faq, index) => (
                                <div 
                                    key={index} 
                                    className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <div className="faq-question">
                                        <div className="q-text">
                                            <span className="q-number">{index + 1}</span>
                                            <h4>{faq.question}</h4>
                                        </div>
                                        <FaChevronDown className="arrow-icon" />
                                    </div>
                                    <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
                                        <div className="answer-inner">
                                            <p>{faq.answer}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="no-results">
                                <p>No results found for "{searchTerm}". Try another keyword.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* CONTACT CTA */}
            <section className="faq-contact">
                <div className="container">
                    <div className="contact-card">
                        <div className="contact-info">
                            <h3>Didn't find what you're looking for?</h3>
                            <p>Our team is ready to provide the specific information you need about our mission and impact.</p>
                        </div>
                        <Link to="/contact" className="btn-contact">
                            Talk to Us <FaEnvelope />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
