import React from 'react'

// Simple icon generator: renders an SVG square with initials when no brand icon is available
function Icon({ label }) {
  const initials = label
    .split(/\s|\.|\//)
    .map((s) => s[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  return (
    <svg className="skill-icon" viewBox="0 0 48 48" aria-hidden>
      <defs>
        <linearGradient id={`g${initials}`} x1="0" x2="1">
          <stop offset="0" stopColor="#2563eb" />
          <stop offset="1" stopColor="#1d4ed8" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="10" fill={`url(#g${initials})`} />
      <text x="50%" y="54%" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="700">{initials}</text>
    </svg>
  )
}

export default function Skills() {
  // Flatten categories into a single list of tiles for a compact grid layout
  const categories = [
    {
      category: 'Frontend',
      items: ['React JS', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind / CSS Modules',"streamlit"]
    },
    {
      category: 'Backend & Databases',
      items: ['Pyhton', 'Node Js', 'Express Js', 'MongoDB', '.Net C#']
    },
    {
      category: 'Mobile & Hybrid',
      items: ['React Native']
    },
    {
      category: 'Cloud, AI & Tools',
      items: ['Google Cloud Platform (GCP)', 'OpenAI API',"Gemini API","RAG","langchain", 'NxOpen API', 'Git']
    },
    {
      category: 'Design & UX',
      items: ['Illustrator', 'Photoshop', 'Adobe XD', 'Figma']
    }
  ]

  // Build a flat array of skill objects with category metadata
  const skillList = []
  categories.forEach((c) => {
    c.items.forEach((it) => skillList.push({ name: it, category: c.category }))
  })

  return (
    <section id="skills" className="skills">
      <h2>Skills & Tools</h2>

      <div className="skills-tiles">
        {skillList.map((s) => (
          <div key={s.name} className="skill-tile" title={`${s.name} — ${s.category}`}>
            <div className="skill-tile-top">{getIcon(s.name)}</div>
            <div className="skill-tile-body">
              <div className="skill-name">{s.name}</div>
              <div className="skill-badge">{s.category}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// Return an SVG element for known skills or fallback to initials icon
function getIcon(name) {
  const key = name.toLowerCase()
  if (key.includes('react')) {
    return (
      <svg className="skill-icon" viewBox="0 0 64 64" aria-hidden>
        <g fill="none" stroke="#61dafb" strokeWidth="2">
          <ellipse cx="32" cy="32" rx="20" ry="8" transform="rotate(0 32 32)" />
          <ellipse cx="32" cy="32" rx="20" ry="8" transform="rotate(60 32 32)" />
          <ellipse cx="32" cy="32" rx="20" ry="8" transform="rotate(120 32 32)" />
        </g>
        <circle cx="32" cy="32" r="4" fill="#61dafb" />
      </svg>
    )
  }

  if (key.includes('node')) {
    return (
      <svg className="skill-icon" viewBox="0 0 64 64" aria-hidden>
        <polygon points="32 4 58 18 58 46 32 60 6 46 6 18" fill="#3C873A" />
        <text x="50%" y="58%" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="700">Node</text>
      </svg>
    )
  }

  if (key.includes('express')) {
    return (
      <svg className="skill-icon" viewBox="0 0 64 64" aria-hidden>
        <rect width="64" height="64" rx="10" fill="#000" />
        <text x="50%" y="56%" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="700">ex</text>
      </svg>
    )
  }

  // HTML5
  if (key.includes('html')) {
    return (
      <svg className="skill-icon" viewBox="0 0 64 64" aria-hidden>
        <rect width="64" height="64" rx="10" fill="#e34f26" />
        <text x="50%" y="58%" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="700">HTML</text>
      </svg>
    )
  }

  // CSS3 (covers Tailwind / CSS Modules labels that include 'css' or 'tailwind')
  if (key.includes('css') || key.includes('tailwind')) {
    // Tailwind will match here too and get a teal-ish tile
    const color = key.includes('tailwind') ? '#06b6d4' : '#1572b6'
    const label = key.includes('tailwind') ? 'TW' : 'CSS'
    return (
      <svg className="skill-icon" viewBox="0 0 64 64" aria-hidden>
        <rect width="64" height="64" rx="10" fill={color} />
        <text x="50%" y="58%" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="700">{label}</text>
      </svg>
    )
  }

  // Generic API / NxOpen API (Nx, NxOpen, API mentions)
  if (key.includes('nxopen') || key.includes('nx') || key.includes(' api')) {
    return (
      <svg className="skill-icon" viewBox="0 0 64 64" aria-hidden>
        <rect width="64" height="64" rx="10" fill="#111827" />
        <g fill="none" stroke="#fff" strokeWidth="2" transform="translate(8,12)">
          <rect width="48" height="40" rx="4" />
          <path d="M6 18h36" />
          <circle cx="10" cy="10" r="3" fill="#fff" />
        </g>
      </svg>
    )
  }

  if (key.includes('java') || key === 'javascript' || key.includes('js')) {
    return (
      <svg className="skill-icon" viewBox="0 0 64 64" aria-hidden>
        <rect width="64" height="64" rx="10" fill="#f7df1e" />
        <text x="50%" y="58%" textAnchor="middle" fill="#000" fontSize="14" fontWeight="700">JS</text>
      </svg>
    )
  }

  if (key.includes('mongodb')) {
    return (
      <svg className="skill-icon" viewBox="0 0 64 64" aria-hidden>
        <path d="M32 4c6 6 12 10 12 20s-6 20-12 28c-6-8-12-20-12-28S26 10 32 4z" fill="#47A248" />
      </svg>
    )
  }

  if (key.includes('python') || key.includes('pyhton')) {
    return (
      <svg className="skill-icon" viewBox="0 0 64 64" aria-hidden>
        <rect width="64" height="64" rx="10" fill="#306998" />
        <text x="50%" y="58%" textAnchor="middle" fill="#ffd43b" fontSize="12" fontWeight="700">Py</text>
      </svg>
    )
  }

  if (key.includes('c#') || key.includes('csharp')) {
    return (
      <svg className="skill-icon" viewBox="0 0 64 64" aria-hidden>
        <rect width="64" height="64" rx="10" fill="#239120" />
        <text x="50%" y="58%" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="700">C#</text>
      </svg>
    )
  }

  if (key.includes('.net') || key.includes('dotnet')) {
    return (
      <svg className="skill-icon" viewBox="0 0 64 64" aria-hidden>
        <rect width="64" height="64" rx="10" fill="#512BD4" />
        <text x="50%" y="58%" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="700">.NET</text>
      </svg>
    )
  }

  if (key.includes('tensorflow')) {
    return (
      <svg className="skill-icon" viewBox="0 0 64 64" aria-hidden>
        <rect width="64" height="64" rx="10" fill="#FF6F00" />
        <text x="50%" y="58%" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="700">TF</text>
      </svg>
    )
  }

  if (key.includes('pytorch') || key.includes('torch')) {
    return (
      <svg className="skill-icon" viewBox="0 0 64 64" aria-hidden>
        <rect width="64" height="64" rx="10" fill="#EE4C2C" />
        <text x="50%" y="58%" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="700">PT</text>
      </svg>
    )
  }

  if (key.includes('openai') || key.includes('llm') || key.includes('prompt')) {
    return (
      <svg className="skill-icon" viewBox="0 0 64 64" aria-hidden>
        <rect width="64" height="64" rx="10" fill="#0EA5A4" />
        <text x="50%" y="58%" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700">AI</text>
      </svg>
    )
  }

  if (key.includes('gcp') || key.includes('google cloud') || key.includes('google')) {
    return (
      <svg className="skill-icon" viewBox="0 0 64 64" aria-hidden>
        <rect width="64" height="64" rx="10" fill="#4285F4" />
        <text x="50%" y="58%" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="700">GCP</text>
      </svg>
    )
  }

  if (key.includes('illustrator') || key.includes('photoshop') || key.includes('adobe') || key.includes('figma')) {
    return (
      <svg className="skill-icon" viewBox="0 0 64 64" aria-hidden>
        <rect width="64" height="64" rx="10" fill="#111827" />
        <text x="50%" y="58%" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="700">UI</text>
      </svg>
    )
  }

  if (key.includes('git')) {
    return (
      <svg className="skill-icon" viewBox="0 0 64 64" aria-hidden>
        <rect width="64" height="64" rx="10" fill="#F05032" />
        <text x="50%" y="58%" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="700">GIT</text>
      </svg>
    )
  }

  // fallback to initials icon
  return <Icon label={name} />
}