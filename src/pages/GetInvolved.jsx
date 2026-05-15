import React from 'react';
import { useParams } from 'react-router-dom';
import { FaHandshake, FaHandsHelping, FaPaperPlane, FaCheckCircle, FaAward, FaUsers } from 'react-icons/fa';

// Import amafoto atandukanye
import partnerImg from '../assets/img1.jpg'; // Ifoto y'abafatanyabikorwa
import volunteerImg from '../assets/img2.jpg'; // Ifoto y'abakorerabushake

import '../styles/GetInvolved.css';

const GetInvolved = ({ lang }) => {
    const { tab } = useParams();

    const data = {
        en: {
            partner: {
                heroTitle: "Strategic Partnership",
                heroSub: "Join our global network to scale sustainable humanitarian impact.",
                image: partnerImg,
                accentColor: "#0056b3", // Blue for corporate feel
                title: "Scale Our Mission",
                desc: "We seek corporate and individual partners to fund the 'Hope Center' and long-term sustainability projects. Your alliance ensures our mission reaches the most remote areas of Rwanda.",
                features: ["Project Co-Sponsorship", "Resource Mobilization", "Financial Transparency Reports", "Strategic Advisory"],
                formBtn: "Send Partnership Inquiry"
            },
            volunteer: {
                heroTitle: "Serve With Love",
                heroSub: "Your time is the most valuable gift you can give to a child in need.",
                image: volunteerImg,
                accentColor: "#28a745", // Green for heart-driven feel
                title: "Join the Field Team",
                desc: "Our volunteers are the heartbeat of ABT. From hospital visitations to mentoring street children, you provide the emotional restoration these souls desperately need.",
                features: ["Direct Field Outreach", "Street Kids Mentorship", "Logistics & Planning", "Hospital Bedside Support"],
                formBtn: "Submit Volunteer Application"
            }
        },
        kiny: {
            partner: {
                heroTitle: "Ubufatanyabikorwa",
                heroSub: "Fatanya na ABT mu kwagura imishinga ihindura ubuzima bw'abari mu kaga.",
                image: partnerImg,
                accentColor: "#0056b3",
                title: "Agura Icyerekezo",
                desc: "Twifuza abafatanyabikorwa mu kubaka 'Hope Center' n'imishinga izatuma Foundation yibeshaho. Ubufatanye bwanyu butuma tugera kure cyane mu Rwanda.",
                features: ["Gutera Inkunga Imishinga", "Kwegeranya Ibikoresho", "Raporo z'Umutungo", "Inama z'Inzobere"],
                formBtn: "Ohereza Ubusabe bw'Ubufatanye"
            },
            volunteer: {
                heroTitle: "Ba Umukorerabushake",
                heroSub: "Umwanya wawe ni rwo rurembo rw'ibyiringiro ku mwana utishoboye.",
                image: volunteerImg,
                accentColor: "#28a745",
                title: "Garagara mu Bikorwa",
                desc: "Abakorerabushake nibo moteri ya ABT. Gusura abarwayi no kwigisha abana nibyo bitanga ihumure rikomeye ku mitima yakomeretse.",
                features: ["Gusura Abarwayi", "Kwigisha Abana", "Gufasha mu Ntikandika", "Ihuriro ry'Ubufasha"],
                formBtn: "Ohereza Ubusabe bwawe"
            }
        }
    };

    const currentTab = tab === 'partner' ? 'partner' : 'volunteer';
    const content = (data[lang] || data.en)[currentTab];

    return (
        <div className={`involved-wrapper ${currentTab}`}>
            {/* HERO SECTION WITH IMAGE */}
            <header className="involved-hero">
                <div className="hero-img-container">
                    <img src={content.image} alt={content.heroTitle} className="hero-main-img" />
                    <div className="hero-overlay-dark"></div>
                </div>
                <div className="pro-container">
                    <div className="hero-text-pro">
                        <span className="badge-pro" style={{background: content.accentColor}}>
                            {currentTab === 'partner' ? <FaHandshake/> : <FaHandsHelping/>} {currentTab.toUpperCase()}
                        </span>
                        <h1 className="animate-up">{content.heroTitle}</h1>
                        <p className="animate-fade">{content.heroSub}</p>
                    </div>
                </div>
            </header>

            {/* CONTENT BODY */}
            <section className="involved-body section-padding">
                <div className="pro-container grid-editorial">
                    <div className="text-editorial">
                        <h2 style={{color: content.accentColor}}>{content.title}</h2>
                        <p className="main-paragraph">{content.desc}</p>
                        <div className="features-list">
                            {content.features.map((f, i) => (
                                <div key={i} className="feature-item-pro">
                                    <FaCheckCircle style={{color: content.accentColor}} /> <span>{f}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* FORM BOX */}
                    <div className="form-box-pro">
                        <div className="form-inner-card">
                            <h3>{lang === 'kiny' ? "Iyandikishe Hano" : "Apply Now"}</h3>
                            <form className="involved-form-ui">
                                <input type="text" placeholder={lang === 'kiny' ? "Amazina Yombi" : "Full Name"} required />
                                <input type="email" placeholder="Email Address" required />
                                <select required>
                                    <option value="">{lang === 'kiny' ? "-- Hitamo --" : "-- Select --"}</option>
                                    <option value="individual">{lang === 'kiny' ? "Umuntu ku giti cye" : "Individual"}</option>
                                    <option value="organization">{lang === 'kiny' ? "Ikigo/Umuryango" : "Organization"}</option>
                                </select>
                                <textarea rows="4" placeholder={lang === 'kiny' ? "Tumbwira birambuye..." : "Tell us more about your interest..."}></textarea>
                                <button type="submit" className="pro-btn" style={{background: content.accentColor}}>
                                    {content.formBtn} <FaPaperPlane/>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GetInvolved;
