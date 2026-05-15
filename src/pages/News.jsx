import React from 'react';
import { 
    FaBullhorn, FaPiggyBank, FaHandHoldingHeart, 
    FaHospital, FaUserTie, FaShareAlt, FaCalendarCheck, 
    FaMapMarkerAlt, FaRocket 
} from 'react-icons/fa';
import '../styles/News.css';

const News = () => {
    const newsItems = [
        {
            id: 1,
            tag: "Institutional",
            title: "Official Launch of A Better Tomorrow (ABT) Foundation Operations",
            date: "April 2026",
            location: "Kigali, Rwanda",
            description: "We are proud to announce the official launch of A Better Tomorrow (ABT) Foundation. Founded by a dedicated team of 13 visionary professionals, ABT is beginning its mission to restore hope and build futures. Following a successful inaugural board meeting, our Executive Board has been activated to oversee our core pillars.",
            icon: <FaRocket />
        },
        {
            id: 2,
            tag: "Sustainability",
            title: "Strategy for Self-Reliance: The Pig Farming Investment Project",
            date: "April 2026",
            location: "ABT Sustainability Site",
            description: "At ABT, we believe true charity must be sustainable. Our board has approved the 'Pig Farming Investment Project' as our economic engine. Revenue generated will directly fund missions like providing Mutuelle de Santé and supporting street children, ensuring long-term impact.",
            icon: <FaPiggyBank />
        },
        {
            id: 3,
            tag: "Upcoming Outreach",
            title: "Restoring Hope through Community Health Support",
            date: "April 2026",
            location: "Selected Communities, Rwanda",
            description: "Access to healthcare is a fundamental right. This April, we launch our first program focused on health advocacy by facilitating 'Mutuelle de Santé' (Community Health Insurance) for vulnerable families who cannot afford medical coverage.",
            icon: <FaHandHoldingHeart />
        },
        {
            id: 4,
            tag: "Future Vision",
            title: "The Vision of the Hope Center: A Sanctuary for Transformation",
            date: "Strategic Plan 2026-2030",
            location: "Kigali Metropolitan",
            description: "Beyond temporary aid, we are planning a permanent solution: The Hope Center. This facility will serve as a sanctuary for emotional healing and a vocational training hub where women, youth, and former street children learn sustainable trades.",
            icon: <FaHospital />
        },
        {
            id: 5,
            tag: "Coordinator's Message",
            title: "A Message from the Coordinator: Why We Build",
            date: "April 2026",
            location: "Kigali, Rwanda",
            description: "'ABT Foundation is more than just an organization; it is a promise of a better tomorrow,' says Umugwaneza Aline. We are building a foundation that is not only compassionate but also professionally managed and economically independent.",
            icon: <FaUserTie />
        }
    ];

    return (
        <div className="news-master">
            {/* HERO SECTION */}
            <header className="news-hero-pro">
                <div className="container">
                    <div className="news-hero-content">
                        <span className="pro-label">Foundation Newsroom</span>
                        <h1>Strategic <span>Updates</span></h1>
                        <p>Voices of impact, institutional milestones, and our journey toward sustainable transformation in Rwanda.</p>
                    </div>
                </div>
            </header>

            <div className="container news-timeline-container">
                <div className="timeline-line"></div>
                
                <div className="news-feed-pro">
                    {newsItems.map((item) => (
                        <div key={item.id} className="news-event-card">
                            <div className="event-marker">
                                <div className="marker-icon">{item.icon}</div>
                            </div>
                            
                            <div className="event-content">
                                <div className="event-meta">
                                    <span className="e-tag">{item.tag}</span>
                                    <span className="e-date"><FaCalendarCheck /> {item.date}</span>
                                    <span className="e-loc"><FaMapMarkerAlt /> {item.location}</span>
                                </div>
                                <h2>{item.title}</h2>
                                <p className="news-body-text">{item.description}</p>
                                <div className="event-footer">
                                    <button className="read-more-link">View Full Statement</button>
                                    <button className="share-icon-btn"><FaShareAlt /></button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* PRESS SECTION */}
            <section className="news-announcement">
                <div className="container">
                    <div className="announcement-box">
                        <FaBullhorn className="ann-icon" />
                        <div className="ann-text">
                            <h3>Press & Media Relations</h3>
                            <p>For official inquiries regarding our Triple-Allocation Model or Pig Farming sustainability project, contact our Communications Office.</p>
                        </div>
                        <button className="btn-press">Contact Press Unit</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default News;
