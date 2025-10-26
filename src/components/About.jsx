import React from 'react'

export default function About() {
  return (
    <section id="about" className="about modern-about">
      <div className="about-container">
        <div className="about-left">
          <p className="eyebrow">Hello</p>
          <h1 className="about-title">Hi, I’m Roginth B</h1>
          <p className="about-subtitle">Self-taught MERN Full Stack Developer & AI enthusiast from Trichy</p>

          <div className="about-bio">
            <p>
              I am a self-taught MERN Full Stack Developer with AI-powered
              workflows. I combine strong programming foundations with a keen
              eye for graphic design. Since I began coding, I have built
              multiple projects to deepen my understanding of technologies I
              use and continuously improve my craft.
            </p>

            <p>
              I enjoy exploring new technologies and expanding my skillset. I’m
              currently learning Google Cloud Platform and DevOps practices to
              build and host websites faster and more reliably.
            </p>

            <p>
              If you'd like to get in touch, send me a message and I will get
              back to you soon.
            </p>
          </div>

          <div className="about-actions">
            <a className="primary-btn" href="#contact">Work with me</a>
            <a className="secondary-btn" href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
          </div>

          <div className="skill-row">
            <span className="skill-pill">MERN</span>
            <span className="skill-pill">React.js</span>
            <span className="skill-pill">Node.js</span>
            <span className="skill-pill">React Native</span>
            <span className="skill-pill">GCP</span>
            <span className="skill-pill">AI / LLMs</span>
            <span className="skill-pill">UI/UX</span>
          </div>
        </div>

        <div className="about-right">
          <div className="profile-visual">
            {/* Placeholder illustration / photo */}
            <div className="avatar">RB</div>
          </div>

          <div className="quick-stats">
            <div className="stat">
              <div className="stat-number">3+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat">
              <div className="stat-number">10+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat">
              <div className="stat-number">Star</div>
              <div className="stat-label">Award</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}