import React from 'react'
import profileImg from '../images/profile.jpg'

export default function Hero() {
    return (
        <section className="hero modern-hero">
            <div className="hero-content">
                <div className="hero-grid">
                    <div className="hero-left">
                        <div className="hero-badge">
                            <span className="badge-dot"></span>
                            <span>Available for work</span>
                        </div>

                        <h1 className="hero-title">
                            <span className="greeting">Hi, I'm</span>
                            <span className="name-highlight">Roginth B</span>
                        </h1>

                        <p className="hero-subtitle">AI Application Engineer</p>

                        <p className="hero-description">
                            I build clean, accessible interfaces and delightful user experiences — combining
                            thoughtful design with modern React-driven frontends.
                        </p>

                        <div className="skill-tags">
                            <span className="skill-tag">MERN</span>
                            <span className="skill-tag">GenAI</span>
                            <span className="skill-tag">JavaScript</span>
                            <span className="skill-tag">Python</span>
                            <span className="skill-tag">.Net C#</span>
                        </div>

                        <div className="hero-actions">
                            <a href="#contact" className="primary-btn">
                                <span>Let's Connect</span>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M1 8h14M8 1l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                            <a href="#projects" className="secondary-btn">See Projects</a>
                        </div>

                        <div className="hero-stats">
                            <div className="stat-item">
                                <div className="stat-number">3+</div>
                                <div className="stat-label">Years experience</div>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <div className="stat-number">10+</div>
                                <div className="stat-label">Projects Developed</div>
                            </div>
                        </div>
                    </div>

                    <div className="hero-right">
                        <div className="creative-image-wrapper">
                            {/* Geometric Background Elements */}
                            <div className="geo-shape shape-1"></div>
                            <div className="geo-shape shape-2"></div>
                            <div className="geo-shape shape-3"></div>

                            {/* Main Image Card */}
                            <div className="image-card">
                                <div className="card-glow"></div>
                                <img
                                    src={profileImg}
                                    alt="Roginth B"
                                    className="profile-img"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none'
                                    }}
                                />
                                {/* Corner Accents */}
                                <div className="corner-accent corner-tl"></div>
                                <div className="corner-accent corner-br"></div>
                            </div>

                            {/* Floating Elements */}
                            <div className="float-element elem-1">
                                <svg width="60" height="60" viewBox="0 0 60 60">
                                    <circle cx="30" cy="30" r="28" fill="none" stroke="url(#grad1)" strokeWidth="3" />
                                    <defs>
                                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#667eea" />
                                            <stop offset="100%" stopColor="#764ba2" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div className="float-element elem-2">
                                <svg width="50" height="50" viewBox="0 0 50 50">
                                    <rect x="5" y="5" width="40" height="40" fill="none" stroke="url(#grad2)" strokeWidth="3" transform="rotate(45 25 25)" />
                                    <defs>
                                        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#f093fb" />
                                            <stop offset="100%" stopColor="#f5576c" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}