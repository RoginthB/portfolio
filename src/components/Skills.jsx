import React from 'react'
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaPython, FaGitAlt, FaFigma } from 'react-icons/fa'
import { SiJavascript, SiMongodb, SiExpress, SiTailwindcss, SiStreamlit, SiGooglecloud, SiOpenai } from 'react-icons/si'

const iconMap = {
  'React JS': <FaReact className="skill-icon" style={{ color: '#61DAFB' }} />,
  'React Native': <FaReact className="skill-icon" style={{ color: '#61DAFB' }} />,
  'JavaScript (ES6+)': <SiJavascript className="skill-icon" style={{ color: '#F7DF1E' }} />,
  'HTML5': <FaHtml5 className="skill-icon" style={{ color: '#E34F26' }} />,
  'CSS3': <FaCss3Alt className="skill-icon" style={{ color: '#1572B6' }} />,
  'Tailwind / CSS Modules': <SiTailwindcss className="skill-icon" style={{ color: '#06B6D4' }} />,
  'Streamlit': <SiStreamlit className="skill-icon" style={{ color: '#FF4B4B' }} />,
  'Python': <FaPython className="skill-icon" style={{ color: '#3776AB' }} />,
  'Node Js': <FaNodeJs className="skill-icon" style={{ color: '#339933' }} />,
  'Express Js': <SiExpress className="skill-icon" style={{ color: '#000000' }} />,
  'MongoDB': <SiMongodb className="skill-icon" style={{ color: '#47A248' }} />,
  'Google Cloud Platform (GCP)': <SiGooglecloud className="skill-icon" style={{ color: '#4285F4' }} />,
  'OpenAI API': <SiOpenai className="skill-icon" style={{ color: '#412991' }} />,
  'Git': <FaGitAlt className="skill-icon" style={{ color: '#F05032' }} />,
  'Figma': <FaFigma className="skill-icon" style={{ color: '#F24E1E' }} />,
}

export default function Skills() {
  const categories = [
    {
      category: 'Frontend',
      items: ['React JS', 'JavaScript (ES6+)', "Next JS", 'HTML5', 'CSS3', 'Tailwind / CSS Modules', 'Streamlit']
    },
    {
      category: 'Backend & Databases',
      items: ['Python', 'Node Js', 'Express Js', 'MongoDB', '.Net C#']
    },

    {
      category: 'Cloud, AI & Tools',
      items: ['Ollama', "Google AI Studio", "LangGraph", "LangChain", 'OpenAI API', 'Gemini API', 'RAG', "NxOpen API", 'Git']
    },
    {
      category: 'Design & UX',
      items: ['Illustrator', 'Photoshop', 'Adobe XD', 'Figma']
    },
    {
      category: 'Mobile & Hybrid',
      items: ['React Native']
    },
  ]

  return (
    <section id="skills" className="skills-section">
      <h2>Skills & Tools</h2>

      <div className="skills-container">
        {categories.map((cat) => (
          <div key={cat.category} className="skill-category-card">
            <h3 className="category-title">{cat.category}</h3>
            <div className="skills-list-grid">
              {cat.items.map((item) => (
                <div key={item} className="skill-item-pill">
                  <span className="skill-icon-wrapper">
                    {iconMap[item] || <span className="skill-icon-fallback">{item.substring(0, 2)}</span>}
                  </span>
                  <span className="skill-name-text">{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}