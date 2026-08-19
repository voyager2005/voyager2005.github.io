import { socialLinks } from '../data/site.js'

export default function IconLinks() {
  return (
    <div className="hero-photo-links">
      {socialLinks.map((link) => {
        const external = link.href.startsWith('http')
        return (
          <a
            key={link.label}
            href={link.href}
            data-label={link.label}
            aria-label={link.label}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            <i className={link.icon} aria-hidden="true"></i>
            <span className="link-label">{link.label}</span>
          </a>
        )
      })}
    </div>
  )
}
