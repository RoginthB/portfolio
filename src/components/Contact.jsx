import React, { useState } from 'react'

function Icon({ name }) {
  switch (name) {
    case 'email':
      return (
        <svg className="contact-icon" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M3 7.5v9A2.5 2.5 0 0 0 5.5 19h13A2.5 2.5 0 0 0 21 16.5v-9" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21 7.5l-9 6-9-6" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'linkedin':
      return (
        <svg className="contact-icon" viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="2" y="2" width="20" height="20" rx="2.5" stroke="#0ea5a4" strokeWidth="1.5" />
          <path d="M7.5 10.5v6" stroke="#0ea5a4" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="7.5" cy="7.5" r="1.2" fill="#0ea5a4" />
          <path d="M12 13.5v3" stroke="#0ea5a4" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M12 10.5c0-.8.6-1.5 1.5-1.5h.1c.9 0 1.5.7 1.5 1.5v.1v6" stroke="#0ea5a4" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    case 'github':
      return (
        <svg className="contact-icon" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 2C8.1 2 5 5.1 5 9c0 3.1 2 5.7 4.8 6.6.4.1.5-.2.5-.4V14c-2-.4-2.5-.9-2.7-1.8-.2-.6-.8-1.1-1.4-1.2-.5-.1-.2-.4.1-.4.7 0 1.2.8 1.4 1.1.8 1.5 2.2 1 3.5.8.2-.6.7-1 1.3-1.2-1.6-.2-3.3-.8-3.3-3.7 0-.8.3-1.5.8-2-.1-.2-.4-1 .1-2 0 0 .7-.2 2.3.8.7-.2 1.5-.4 2.3-.4s1.6.1 2.3.4c1.6-1 2.3-.8 2.3-.8.5 1 .2 1.8.1 2 .6.5.9 1.2.9 2 0 2.9-1.7 3.5-3.3 3.7.6.5 1 1.2 1 2.3v3.3c0 .2.1.5.5.4C17 14.7 19 12.1 19 9c0-3.9-3.1-7-7-7z" stroke="#111827" strokeWidth="0.4" />
        </svg>
      )
    case 'website':
      return (
        <svg className="contact-icon" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" stroke="#2563eb" strokeWidth="1.2" />
          <path d="M2 12h20" stroke="#2563eb" strokeWidth="1" strokeLinecap="round" />
          <path d="M12 2c2 4 2 8 2 10s0 6-2 10" stroke="#2563eb" strokeWidth="1" strokeLinecap="round" />
        </svg>
      )
    default:
      return null
  }
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    // client-side validation
    const nextErrors = {}
    if (!form.name.trim()) nextErrors.name = 'Please enter your name.'
    if (!form.email.trim()) nextErrors.email = 'Please enter your email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Please enter a valid email.'
    if (!form.message.trim()) nextErrors.message = 'Please enter a message.'

    setErrors(nextErrors)
    setTouched({ name: true, email: true, message: true })

    if (Object.keys(nextErrors).length > 0) return

    const subject = encodeURIComponent('Portfolio inquiry from ' + (form.name || 'Website'))
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`)
    window.location.href = `mailto:roginthb@gmail.com?subject=${subject}&body=${body}`
  }

  const contacts = [
    { id: 'email', title: 'Email', subtitle: 'roginthb@gmail.com', href: 'mailto:roginthb@gmail.com', icon: 'email' },
    { id: 'linkedin', title: 'LinkedIn', subtitle: 'linkedin.com/in/roginthb', href: 'https://linkedin.com/in/roginthb', icon: 'linkedin' },
    { id: 'github', title: 'GitHub', subtitle: 'github.com/roginthb', href: 'https://github.com/roginthb', icon: 'github' },
    { id: 'website', title: 'Website', subtitle: 'designer-roginth.netlify.app', href: 'https://designer-roginth.netlify.app', icon: 'website' }
  ]

  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>

      <div className="contact-grid">
        <div>
          <p className="muted">I'm open to full-time and contract opportunities. Reach out via any of the methods below or send a quick message.</p>

          <div className="contact-tiles">
            {contacts.map((c) => (
              <a
                key={c.id}
                className="contact-tile"
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={c.title}
              >
                <div className="contact-tile-top">{Icon({ name: c.icon })}</div>
                <div className="contact-tile-body">
                  <div className="contact-tile-title">{c.title}</div>
                  <div className="contact-tile-sub">{c.subtitle}</div>
                </div>
              </a>
            ))}
          </div>

          <p style={{ marginTop: '2rem' }}>
            <a className="secondary-btn" href="https://drive.google.com/file/d/14BnBlW18mflrhqqjgvTeQrJFZ7DbqX0a/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download Resume</a>
          </p>
        </div>

        <form className="contact-form modern-form" onSubmit={handleSubmit} noValidate>
        <div className="form-row" style={{marginBottom:"30px"}}>
            <div className="input-group" >
              <input
                className={`modern-input ${errors.name && touched.name ? 'invalid' : ''}`}
                id="name"
                name="name"
                value={form.name}
                
                onChange={handleChange}
                onBlur={() => setTouched({ ...touched, name: true })}
                required
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              <label className={`floating-label ${form.name ? 'filled' : ''}`} htmlFor="name">Your name</label>
              {errors.name && touched.name && <div id="name-error" className="field-error">{errors.name}</div>}
            </div>

            <div className="input-group" >
              <input
                className={`modern-input ${errors.email && touched.email ? 'invalid' : ''}`}
                id="email"
                name="email"
                type="email"
                

                value={form.email}
                onChange={handleChange}
                onBlur={() => setTouched({ ...touched, email: true })}
                required
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              <label className={`floating-label ${form.email ? 'filled' : ''}`} htmlFor="email">Your email</label>
              {errors.email && touched.email && <div id="email-error" className="field-error">{errors.email}</div>}
            </div>
          </div>

          <div className="input-group">
            <textarea
              className={`modern-textarea ${errors.message && touched.message ? 'invalid' : ''}`}
              id="message"
              style={{padding:3}}
              name="message"
              value={form.message}
              onChange={handleChange}
              onBlur={() => setTouched({ ...touched, message: true })}
              rows="6"
              required
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            <label className={`floating-label ${form.message ? 'filled' : ''}`} htmlFor="message">Message</label>
            {errors.message && touched.message && <div id="message-error" className="field-error">{errors.message}</div>}
          </div>

          <div className="form-actions">
            <button type="submit" className="primary-btn modern-submit" style={{border:'none'}}>Send message</button>
            {/* <a className="secondary-btn" href="mailto:roginthb@gmail.com">Email directly</a> */}
          </div>
        </form>
      </div>
    </section>
  )
}