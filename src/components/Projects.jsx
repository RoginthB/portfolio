import React from 'react'
import cricketwithaiImg from '../images/cricketwithai.png'
import askqImg from '../images/Askq-ai.png'

export default function Projects() {
  const projects = [
    
    {
      title: 'CricketWithAI (GenAI-Powered MERN app)',
      description:
        'CricketWithAI is an AI-powered cricket score and analytics platform built on the MERN stack, offering real-time updates, player stats, and match predictions with a seamless, interactive experience.',
      image: cricketwithaiImg,
      tech: ['React', 'TypeScript', 'Gemini Api', 'Google AI Studio',"VibeCode"],
      links: { live: 'https://cricketwithai.netlify.app/', code: 'https://github.com/RoginthB/Cricket-with-Ai' }
    },

    {
      title: "AskQ (AI chatbot platform)",
      description:"AskQ is an AI-powered Chatbot. like a mini version of ChatGPT, built using Python and Streamlit.",
      image:askqImg,
      tech: ['Python', 'Streamlit', 'Gemini API', 'AI'],
      links: { live: 'https://askq-ai.streamlit.app/', code: "https://github.com/RoginthB/AskQ_Streamlit"}
    },

    // User-provided project list (added)
    {
      title: 'Kauvery SOS app (MERN fullstack)',
      description:
        'Emergency assistance platform connecting users to nearby resources and volunteers in real time. Features geolocation, request routing, notifications and an admin dashboard.',
      image: 'https://roginthb.github.io/designer-roginth-V2.0.1/kauverySOS.png',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      links: { live: 'https://kauvery.netlify.app/', code: 'https://github.com/RoginthB/Kauvery' }
    },
    // Featured classy project
    {
      title: 'Favor app (MERN fullstack)',
      description:
        'Featured: Favor is an image-rating application where users upload and rate images, vote in real-time, and discover popular content through leaderboards. Built as a MERN full-stack app with real-time updates, user profiles, comment threads, image moderation tools and a responsive, accessible UI.',
      image: 'https://roginthb.github.io/designer-roginth-V2.0.1/favor.png',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Material UI'],
      links: { live: 'https://favor-app.netlify.app/', code: 'https://github.com/RoginthB/Favor_App' },
      // Featured classy project
      featured: true
    },
    {
      title: 'Mi food (Dribbble inspired)',
      description:
        'A responsive landing and UI inspired by Dribbble concepts — focused on elegant typography, imagery and micro-interactions for a food brand.',
      image: 'https://roginthb.github.io/designer-roginth-V2.0.1/miFood.png',
      tech: ['HTML', 'CSS', 'JavaScript'],
      links: { live: 'https://roginthb.github.io/mi-food/', code: 'https://github.com/roginthb' }
    },
    {
      title: 'Adobe Stock (Clone website)',
      description:
        'A UI clone of Adobe Stock showcasing responsive search results, image previews and a clean marketplace layout — useful as a visual and interaction prototype.',
      image: 'https://roginthb.github.io/designer-roginth-V2.0.1/adobe-stock-clone-img.png',
      tech: ['HTML', 'CSS', 'JavaScript'],
      links: { live: 'https://roginthb.github.io/adobe-stock-clone/', code: 'https://github.com/roginthb' }
    },
    {
      title: 'Creating Our college website (React JS)',
      description:
        'A college website built with React — information pages, events, galleries and responsive layout designed for accessibility and clarity.',
      image: 'https://roginthb.github.io/designer-roginth-V2.0.1/kongu-mech.jpg',
      tech: ['React', 'CSS3'],
      links: { live: 'https://roginthb.github.io/sample/', code: 'https://github.com/roginthb' }
    },
    {
      title: 'Instagram Home Page (Popular Website Clone)',
      description:
        'A pixel-focused clone of Instagram’s home feed to practice responsive grid layouts, media handling and UI fidelity.',
      image: 'https://roginthb.github.io/designer-roginth-V2.0.1/images/inatagram-clone.png',
      tech: ['HTML', 'CSS', 'JavaScript'],
      links: { live: 'https://roginthb.github.io/instagram-home-clone/', code: 'https://github.com/roginthb' }
    },
    {
      title: 'Project Gallery (image gallery website)',
      description:
        'An image gallery website with filtering, lightbox previews and responsive masonry layout — built for showcasing creative work.',
      image: 'https://roginthb.github.io/designer-roginth-V2.0.1/images/dashboard.png',
      tech: ['HTML', 'CSS', 'JavaScript'],
      links: { live: 'https://roginthb.github.io/projectgallery/', code: 'https://github.com/roginthb' }
    },
    {
      title: 'Designerroginth V1.0.1 (portfolio website)',
      description:
        'Personal portfolio showcasing projects, case studies and contact information. Clean layout and performance-focused build.',
      image: 'https://roginthb.github.io/designer-roginth-V2.0.1/images/designerroginth.png',
      tech: ['React', 'CSS'],
      links: { live: 'https://roginthb.github.io/designerrohinth.tk/', code: 'https://github.com/roginthb' }
    }

    
  ]

  return (
    <section id="projects" className="projects">
      <h2>Featured Projects</h2>
      {/* Featured (black & white) project shown first */}
      {projects.filter((p) => p.featured).map((project) => (
        <div key={project.title} className="project-featured classy">
          <div className="project-image">
            <img src={project.image} alt={project.title}  />
          </div>
          <div className="project-info">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech) => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-links" style={{padding:3}}>
              <a className="primary-btn" href={project.links.live} target="_blank" rel="noopener noreferrer">Live</a>
              <a className="secondary-btn" href={project.links.code} target="_blank" rel="noopener noreferrer">Code</a>
            </div>
          </div>
        </div>
      ))}


      <div className="projects-grid">
        {projects.filter((p) => !p.featured).map((project) => (
          <div key={project.title} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links" style={{padding:3}}>
                <a className="primary-btn" href={project.links.live} target="_blank" rel="noopener noreferrer">Live</a>
                <a className="secondary-btn" href={project.links.code} target="_blank" rel="noopener noreferrer">Code</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}