// Navigation fixe en haut de page avec smooth scroll vers chaque section
import { useState, useEffect } from 'react'

// Liens de navigation avec leur ancre correspondante
const navLinks = [
  { label: 'Profil',       href: '#about' },
  { label: 'Compétences',  href: '#skills' },
  { label: 'Expériences',  href: '#experience' },
  { label: 'Frise',        href: '#timeline' },
  { label: 'Formation',    href: '#education' },
  { label: 'Projets',      href: '#projects' },
  { label: 'Passions',     href: '#hobbies' },
  { label: 'Contact',      href: '#contact' },
]

function Header() {
  // État pour le menu burger sur mobile
  const [menuOpen, setMenuOpen] = useState(false)
  // État pour le fond opaque après scroll
  const [scrolled, setScrolled] = useState(false)

  // Détecte le scroll pour rendre la navbar opaque
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Ferme le menu mobile quand on clique sur un lien
  const handleLinkClick = () => setMenuOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-cv flex items-center justify-between h-16" aria-label="Navigation principale">
        {/* Logo / Nom */}
        <a
          href="#about"
          className="text-white font-bold text-lg tracking-tight hover:text-blue-400 transition-colors"
        >
          Kevin <span className="text-blue-400">Pichon</span>
        </a>

        {/* Navigation desktop */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-slate-300 hover:text-white hover:bg-slate-700/50 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Bouton burger pour mobile */}
        <button
          className="md:hidden text-slate-300 hover:text-white p-2 rounded-lg hover:bg-slate-700/50 transition-all"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
        >
          {/* Icône burger / croix */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Menu mobile déroulant */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900/98 border-t border-slate-700 backdrop-blur-sm">
          <ul className="container-cv py-4 flex flex-col gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block text-slate-300 hover:text-white hover:bg-slate-700/50 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export default Header
