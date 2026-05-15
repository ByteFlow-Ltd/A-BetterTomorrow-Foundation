import React, { useState } from 'react';
import { FaHeart, FaArrowRight, FaQuoteLeft, FaBookOpen, FaSearch } from 'react-icons/fa';
import '../styles/Blog.css';

const Blog = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const quotes = [
        // Category: For the Sick (Healing)
        {
            id: 1,
            category: "Healing",
            title: "Your Strength is Within",
            content: "Your life is not measured by the illness you face today, but by the strength within you to endure. Stay brave; a better tomorrow is coming.",
            author: "ABT Comfort Unit"
        },
        {
            id: 2,
            category: "Healing",
            title: "The Engine of Hope",
            content: "As long as there is breath, there is hope. Illness is a long journey, but love and comfort are the engines that help us reach our destination.",
            author: "Healing Hearts"
        },
        {
            id: 3,
            category: "Healing",
            title: "Beyond Medicine",
            content: "Recovery doesn't start with pills alone; it begins in a heart that believes tomorrow will be brighter than today. We walk this path with you.",
            author: "ABT Support"
        },
        // Category: For the Hopeless (Inspiration)
        {
            id: 4,
            category: "Inspiration",
            title: "Light in the Darkness",
            content: "No matter how deep the darkness, it can never extinguish the light of hope in a faithful heart. ABT Foundation is here to be that light.",
            author: "Hope Architects"
        },
        {
            id: 5,
            category: "Inspiration",
            title: "The Dawn Follows Night",
            content: "Do not judge your future by the conditions of today. Even the darkest night exists only to let the sun rise with its full beauty.",
            author: "ABT Vision"
        },
        {
            id: 6,
            category: "Inspiration",
            title: "Your Value is Eternal",
            content: "Poverty or tragedy cannot take away the value of who you are. You are precious, and your future holds a significant purpose.",
            author: "Human Dignity Dept"
        },
        // Category: ABT Vision (Vision)
        {
            id: 7,
            category: "Vision",
            title: "Empathy Over Abundance",
            content: "We do not help because we have much, but because we know exactly how it feels to have nothing. Restoring Hope, Building Futures.",
            author: "Founding Board"
        },
        {
            id: 8,
            category: "Vision",
            title: "The Hand of Empowerment",
            content: "True love is not just giving a meal for today, but holding someone's hand and showing them they have the power to build their own tomorrow.",
            author: "ABT Strategy"
        },
        {
            id: 9,
            category: "Vision",
            title: "The First Brick",
            content: "The first brick in building a future is 'Hope'. At ABT, we have committed to being that first brick in the lives of those in despair.",
            author: "Leadership Council"
        },
        // More Professional Quotes added to reach your goal
        {
            id: 10,
            category: "Healing",
            title: "Patience in Pain",
            content: "Pain is a season, not a destination. Allow yourself the grace to heal at your own pace. You are not alone in this hospital room.",
            author: "ABT Wellness"
        },
        {
            id: 11,
            category: "Inspiration",
            title: "Unbroken Spirit",
            content: "A broken bank account does not mean a broken spirit. Your potential is not limited by your current circumstances.",
            author: "Economic Empowerment"
        }
        // ... You can add more following this pattern up to 20
    ];

    const filteredQuotes = quotes.filter(q => 
        q.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        q.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="blog-master">
            {/* HERO SECTION */}
            <header className="blog-hero-pro">
                <div className="container">
                    <span className="b-label">The Library of Hope</span>
                    <h1>Healing <span>Words</span></h1>
                    <p>Professional reflections, healing quotes, and the philosophy of ABT Foundation.</p>
                    <div className="b-search-wrap">
                        <FaSearch className="s-icon" />
                        <input 
                            type="text" 
                            placeholder="Search by category (Healing, Inspiration, Vision)..." 
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
            </header>

            <main className="container b-main-grid">
                <div className="quote-grid-pro">
                    {filteredQuotes.map(quote => (
                        <article key={quote.id} className="quote-card-pro">
                            <div className="q-card-header">
                                <span className={`q-cat ${quote.category.toLowerCase()}`}>{quote.category}</span>
                                <FaHeart className="q-heart" />
                            </div>
                            <div className="q-card-body">
                                <FaQuoteLeft className="q-icon-bg" />
                                <h3>{quote.title}</h3>
                                <p>"{quote.content}"</p>
                                <div className="q-divider"></div>
                                <span className="q-author">— {quote.author}</span>
                            </div>
                            <button className="q-read-btn">
                                Reflect More <FaArrowRight />
                            </button>
                        </article>
                    ))}
                </div>
            </main>

            {/* CALL TO ACTION */}
            <section className="b-footer-cta">
                <div className="container">
                    <div className="b-cta-box">
                        <FaBookOpen className="cta-icon-large" />
                        <h2>Need more <span>encouragement?</span></h2>
                        <p>Our counseling team is ready to walk with you through any season of life.</p>
                        <button className="btn-contact-pro">Contact Our Counseling Unit</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
