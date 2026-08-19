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
} from './data/site.js'
import './App.css'

export default function App() {
  return (
    <div className="app-shell">
      <header className="top-bar">
        <div className="name-block">
          <p className="brand">{profile.name}</p>
        </div>
        <nav className="nav-links">
          <a className="nav-link" href="#experience">experience</a>
          <a className="nav-link" href="#skills">skills</a>
          <a className="nav-link" href="#publications">publications</a>
          <a className="nav-link" href="#education">education</a>
        </nav>
      </header>

      <main className="home">
        <section className="bio-section">
          <div className="bio-text">
            <h1 className="brand-name">
              <TypingText text={profile.name} />
            </h1>
            {bio.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="bio-portrait">
            <img src={profile.photo} alt={profile.name} width="230" height="264" />
            <IconLinks />
          </div>
        </section>

        <section className="section" id="experience">
          <h2 className="section-heading">experience</h2>
          <div className="entry-list">
            {experience.map((job) => (
              <article className="entry" key={`${job.org}-${job.role}`}>
                <div className="entry-head">
                  <div>
                    <p className="entry-role">{job.role}</p>
                    <p className="entry-org">
                      {job.org} <span className="entry-loc">· {job.location}</span>
                    </p>
                  </div>
                  <p className="entry-period">{job.period}</p>
                </div>
                <ul className="plain-list">
                  {job.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
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
          <article className="entry">
            <div className="entry-head">
              <div>
                <p className="entry-role">{education.degree}</p>
                <p className="entry-org">
                  {education.school} <span className="entry-loc">· {education.location}</span>
                </p>
              </div>
              <p className="entry-period">{education.period}</p>
            </div>
            <ul className="plain-list">
              {education.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </article>
        </section>
      </main>

      <footer className="site-footer">
        <p>
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </p>
      </footer>
    </div>
  )
}
