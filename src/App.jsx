import { useState } from 'react'
import TypingText from './components/TypingText.jsx'
import IconLinks from './components/IconLinks.jsx'
import {
  profile,
  bio,
  experience,
  skills,
  publications,
  publicationsConfig,
  education,
  mentors,
  writings,
  projects,
} from './data/site.js'
import './App.css'

export default function App() {
  const [currentTab, setCurrentTab] = useState(() => {
    if (window.location.pathname.includes('blog') || window.location.hash.includes('blog')) {
      return 'blog'
    }
    return 'home'
  })

  const handleTabChange = (tab) => {
    setCurrentTab(tab)
    if (tab === 'home') {
      window.history.pushState({}, '', '/')
    } else {
      window.history.pushState({}, '', '/blog.html')
    }
  }

  return (
    <div className="app-shell">
      <header className="top-bar">
        <nav className="nav-links" style={{ width: '100%', justifyContent: 'flex-end', gap: '3rem' }}>
          <button 
            className={`nav-link ${currentTab === 'home' ? 'nav-link-active' : ''}`} 
            onClick={() => handleTabChange('home')}
            style={{ 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer', 
              fontFamily: 'inherit', 
              fontSize: '1rem',
              color: currentTab === 'home' ? 'var(--hover)' : 'var(--text-secondary)'
            }}
          >
            home
          </button>
          <button 
            className={`nav-link ${currentTab === 'blog' ? 'nav-link-active' : ''}`} 
            onClick={() => handleTabChange('blog')}
            style={{ 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer', 
              fontFamily: 'inherit', 
              fontSize: '1rem',
              color: currentTab === 'blog' ? 'var(--hover)' : 'var(--text-secondary)'
            }}
          >
            blog
          </button>
        </nav>
      </header>

      <main className="home">
        {currentTab === 'home' ? (
          <>
            <section className="bio-section">
              <div className="bio-text">
                <h1 className="brand-name">
                  <TypingText text={profile.name} />
                </h1>
                {bio.map((para, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
                ))}
                <p style={{ marginTop: '1.25rem', fontSize: '0.85rem' }}>
                  <button 
                    onClick={() => handleTabChange('blog')} 
                    style={{ 
                      background: 'none', 
                      border: 'none', 
                      padding: 0, 
                      fontFamily: 'inherit', 
                      fontSize: 'inherit', 
                      color: 'var(--text-muted)', 
                      cursor: 'pointer',
                      textDecoration: 'underline'
                    }}
                  >
                    see my research experience →
                  </button>
                </p>
              </div>

              <div className="bio-portrait">
                <img src={profile.photo} alt={profile.name} width="230" height="264" />
                <IconLinks />
              </div>
            </section>

            <section className="section" id="mentors" style={{ marginTop: '1.5rem' }}>
              <h2 className="section-heading">mentors I'm grateful for</h2>
              <ul className="plain-list" style={{ paddingLeft: '1.2rem', listStyleType: 'disc' }}>
                {mentors.map((mentor, idx) => (
                  <li key={idx} style={{ marginBottom: '0.75rem', lineHeight: '1.6' }}>
                    <strong>
                      <a href={mentor.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
                        {mentor.name} ({mentor.org})
                      </a>
                    </strong>
                    <span> {mentor.text}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Experience section moved below skills */}

            <section className="section" id="publications">
              <h2 className="section-heading">publications</h2>
              <div className="paper-list">
                {publications.map((pub, idx) => (
                  <article className="paper-card" key={idx}>
                    <div className="paper-thumb-wrap">
                      <img className="paper-thumb" src={pub.thumb} alt={pub.title} loading="lazy" />
                    </div>
                    <div className="paper-body">
                      <span className="paper-title">{pub.title}</span>
                      <p className="paper-authors">
                        {pub.authors.split('G. Akshat').map((part, i, arr) => (
                          <span key={i}>
                            {part}
                            {i < arr.length - 1 && <strong>G. Akshat</strong>}
                          </span>
                        ))}
                      </p>
                      <p className="paper-venue">
                        <em>{pub.venue}</em>
                      </p>
                      {pub.links && pub.links.length > 0 && (
                        <p className="paper-links">
                          {pub.links.map((link, lIdx) => (
                            <span key={lIdx}>
                              <a href={link.href} target="_blank" rel="noopener noreferrer">
                                {link.label}
                              </a>
                              {lIdx < pub.links.length - 1 ? ' / ' : ''}
                            </span>
                          ))}
                        </p>
                      )}
                      {pub.blurb && <p className="paper-blurb">{pub.blurb}</p>}
                    </div>
                  </article>
                ))}
              </div>
              <p className="section-more" style={{ marginTop: '2rem' }}>
                <a href={publicationsConfig.scholarUrl} target="_blank" rel="noopener noreferrer">
                  see all on Google Scholar →
                </a>
              </p>
            </section>

            <section className="section" id="education">
              <h2 className="section-heading">education</h2>
              <article className="experience-card">
                {education.logo && (
                  <div className="experience-logo-wrap">
                    <img className="experience-logo" src={education.logo} alt={education.school} />
                  </div>
                )}
                <div className="experience-body">
                  <div className="entry-head">
                    <div>
                      <p className="entry-role">{education.degree}</p>
                      <p className="entry-org">
                        {education.school} <span className="entry-loc">· {education.location}</span>
                      </p>
                    </div>
                    <p className="entry-period">{education.period}</p>
                  </div>
                  <ul className="plain-list" style={{ marginTop: '0.5rem' }}>
                    {education.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </section>

            <section className="section" id="skills">
              <h2 className="section-heading">skills</h2>
              <div className="skill-grid">
                {skills.map((skill) => (
                  <div className="skill-row" key={skill.tag}>
                    <div className="skill-tag">{skill.tag}</div>
                    <p className="skill-items">{skill.items}</p>
                  </div>
                ))}
              </div>
            </section>
          </>
        ) : (
          <>
            <section className="section" id="experience" style={{ marginTop: '1.5rem' }}>
              <h2 className="section-heading">experience</h2>
              <div className="experience-list">
                {experience.map((job, idx) => (
                  <article className="experience-card" key={idx}>
                    {job.logo && (
                      <div className="experience-logo-wrap">
                        <img className="experience-logo" src={job.logo} alt={job.org} />
                      </div>
                    )}
                    <div className="experience-body">
                      <div className="entry-head">
                        <div>
                          <p className="entry-role">{job.role}</p>
                          <p className="entry-org">
                            {job.org} <span className="entry-loc">· {job.location}</span>
                          </p>
                        </div>
                        <p className="entry-period">{job.period}</p>
                      </div>
                      <ul className="plain-list" style={{ marginTop: '0.5rem' }}>
                        {job.points.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="section" id="writing">
              <h2 className="section-heading">writing</h2>
              <p className="section-blurb">
                Introductory articles and tutorials on machine learning and computer vision.
              </p>
              <div className="paper-list">
                {writings.map((write, idx) => (
                  <article className="paper-card" key={idx}>
                    <div className="paper-thumb-wrap" style={{ height: '90px' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="var(--link)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                        <polyline points="14 2 14 8 20 8"/>
                        <line x1="16" y1="13" x2="8" y2="13"/>
                        <line x1="16" y1="17" x2="8" y2="17"/>
                        <line x1="10" y1="9" x2="8" y2="9"/>
                      </svg>
                    </div>
                    <div className="paper-body">
                      <a href={write.pdfUrl} className="paper-title" target="_blank" rel="noopener noreferrer">
                        {write.title}
                      </a>
                      <p className="paper-blurb">{write.description}</p>
                      <p className="paper-links">
                        <a href={write.pdfUrl} target="_blank" rel="noopener noreferrer">[Read PDF]</a>
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="section" id="projects">
              <h2 className="section-heading">projects</h2>
              <p className="section-blurb">
                Open-source C++ implementations of neural networks and deep learning architectures from scratch.
              </p>
              <div className="paper-list">
                {projects.map((proj, idx) => (
                  <article className="paper-card" key={idx}>
                    <div className="paper-thumb-wrap" style={{ height: '90px' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="var(--link)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="16 18 22 12 16 6"/>
                        <polyline points="8 6 2 12 8 18"/>
                      </svg>
                    </div>
                    <div className="paper-body">
                      <a href={proj.githubUrl} className="paper-title" target="_blank" rel="noopener noreferrer">
                        {proj.title}
                      </a>
                      <p className="paper-blurb">{proj.description}</p>
                      <p className="paper-links">
                        <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer">[GitHub Repository]</a>
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </>
        )}
      </main>

      <footer className="site-footer">
        <p>
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </p>
      </footer>
    </div>
  )
}
