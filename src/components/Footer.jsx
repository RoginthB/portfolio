import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/RoginthB" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  )
}