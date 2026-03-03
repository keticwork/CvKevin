// Composant racine — assemble toutes les sections du CV
import { useEffect } from 'react'
import Header from './components/Header.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Projects from './components/Projects.jsx'
import Hobbies from './components/Hobbies.jsx'
import Contact from './components/Contact.jsx'

function App() {
  // Activation du fade-in au scroll avec IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      {
        threshold: 0.1,      // Déclenche quand 10% de l'élément est visible
        rootMargin: '0px 0px -50px 0px', // Légère marge basse pour un déclenchement fluide
      }
    )

    // Observe tous les éléments avec la classe fade-section
    const sections = document.querySelectorAll('.fade-section')
    sections.forEach((section) => observer.observe(section))

    // Nettoyage de l'observateur au démontage du composant
    return () => observer.disconnect()
  }, [])

  return (
    // Fond dégradé principal : ardoise grisée → bleu nuit
    <div className="min-h-screen bg-gradient-to-b from-slate-700 to-slate-900">
      {/* Navigation fixe en haut */}
      <Header />

      {/* Contenu principal — balise main pour la sémantique HTML5 */}
      <main>
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Hobbies />
        <Contact />
      </main>

      {/* Pied de page discret */}
      <footer className="text-center py-6 text-slate-500 text-sm border-t border-slate-800">
        <p>© 2025 Kevin Pichon — CV Web Interactif</p>
      </footer>
    </div>
  )
}

export default App
