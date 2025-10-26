import React from 'react'
import profileImg from '../images/profile.jpg';
export default function Hero() {
    return (
        <section className="hero modern-hero">
            <div className="hero-content app">
                <div className="hero-grid">
                    <div className="hero-left">
                        <span className="eyebrow">Hi, I'm</span>
                        <h1 className="hero-title">Roginth B</h1>
                        <p className="hero-sub">AI-Powered Full-stack Developer</p>

                        <p className="hero-description">
                            I build clean, accessible interfaces and delightful user experiences — combining
                            thoughtful design with modern React-driven frontends.
                        </p>
                        <div className="skill-row">
                            <span className="skill-pill">MERN</span>
                            <span className="skill-pill">GenAI</span>
                            <span className="skill-pill">JavaScript</span>
                            <span className="skill-pill">Python</span>
                            <span className="skill-pill">.Net C#</span>
                        </div>
                        <div className="hero-actions">
                            <a href="#contact" className="primary-btn">Let's Connect</a>
                            <a href="#projects" className="secondary-btn">See Projects</a>
                        </div>
                        <div className="hero-stats">
                            <div className="stat">
                                <div className="stat-number">3+</div>
                                <div className="stat-label">Years experience</div>
                            </div>
                            <div className="stat">
                                <div className="stat-number">10+</div>
                                <div className="stat-label">Projects Developed</div>
                            </div>
                        </div>

                    </div>

                    <div className="hero-right" aria-hidden>
                        <div className="profile-visual">
                            {/* decorative blob + avatar image (falls back to initials) */}
                            {/* <svg className="blob" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden>
                                <defs>
                                    <linearGradient id="gHero" x1="0" x2="1">
                                        <stop offset="0" stopColor="#60a5fa" />
                                        <stop offset="1" stopColor="#2563eb" />
                                    </linearGradient>
                                </defs>
                                <path fill="url(#gHero)" d="M331.9,280.7Q312,321,274.7,338.6Q237.3,356.1,197.8,363.2Q158.3,370.4,120.9,351.7Q83.5,333,58.6,297.8Q33.7,262.7,43.9,221.2Q54.1,179.7,77.6,147Q101.1,114.3,137.6,96.3Q174.1,78.3,214.1,72.2Q254.1,66.1,292,83.8Q329.9,101.5,343.1,140.5Q356.3,179.5,331.9,280.7Z" />
                            </svg> */}

                            {/*
                              Place your profile photo at one of these locations so the image loads correctly:
                              - public/profile.jpg  -> use src="/profile.jpg"
                              - src/images/profile.jpg (Vite import required) -> use an import
                              Below we reference `/profile.jpg` which will work if you place the attached image in the project's `public/` folder named `profile.jpg`.
                            */}
                            {
                                <img
                                    src={profileImg}
                                    alt="Roginth B"
                                    className="avatar-img"
                                    onError={(e) => {
                                        // hide broken image and leave initials avatar as fallback
                                        e.currentTarget.style.display = 'none'
                                    }}
                                />
                                ||
                                <div className="avatar">RB</div>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}