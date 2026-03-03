// Section Hero / À propos — présentation principale de Kevin Pichon
import { useEffect, useRef } from 'react'

function About() {
  const qrRef = useRef(null)

  useEffect(() => {
    // Génère le QR code dès que la librairie CDN est disponible
    if (qrRef.current && window.QRCode) {
      qrRef.current.innerHTML = ''
      new window.QRCode(qrRef.current, {
        text: 'https://cv-kevin-seven.vercel.app/',
        width: 120,
        height: 120,
        colorDark: '#ffffff',
        colorLight: '#1e293b',
        correctLevel: window.QRCode.CorrectLevel.H,
      })
    }
  }, [])

  return (
    <section
      id="about"
      className="pt-24 pb-16 px-4"
      aria-label="Présentation de Kevin Pichon"
    >
      <div className="container-cv">
        <div className="text-center max-w-3xl mx-auto fade-section">

          {/* Initiales en cercle décoratif */}
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-slate-600 text-white text-3xl font-bold mb-6 shadow-xl shadow-blue-500/20">
            KP
          </div>

          {/* Nom complet */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-tight">
            Kevin Pichon
          </h1>

          {/* Titre professionnel */}
          <p className="text-lg sm:text-xl text-blue-400 font-semibold mb-6">
            Professionnel Polyvalent | Logistique &amp; Industrie
          </p>

          {/* Bloc infos contact + QR code côte à côte */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">

            {/* Informations de contact */}
            <div className="flex flex-col items-center sm:items-start gap-3 text-slate-400 text-sm">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-blue-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Le Luc, Var (83340)
              </span>
              <a
                href="tel:+33658962718"
                className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
              >
                <svg className="w-4 h-4 text-blue-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                06 58 96 27 18
              </a>
              <a
                href="mailto:KPICHON83@gmail.com"
                className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
              >
                <svg className="w-4 h-4 text-blue-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                KPICHON83@gmail.com
              </a>
            </div>

            {/* Séparateur vertical sur desktop */}
            <div className="hidden sm:block w-px h-20 bg-slate-700" aria-hidden="true" />

            {/* QR code vers le CV en ligne */}
            <div className="flex flex-col items-center gap-2">
              <div
                ref={qrRef}
                className="rounded-xl overflow-hidden border border-slate-600 p-1 bg-slate-800"
                aria-label="QR code vers le CV en ligne"
              />
              <p className="text-slate-500 text-xs">Scanner pour voir le CV en ligne</p>
            </div>

          </div>

          {/* Accroche professionnelle — nouvelle version */}
          <div className="card text-left">
            <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
              Professionnel <strong className="text-white">polyvalent</strong>, j'ai exercé des métiers variés dans la{' '}
              <strong className="text-white">logistique</strong>, le transport poids lourd, l'industrie aéronautique, le
              management d'équipes et la maintenance industrielle. Cette diversité m'a forgé une vraie{' '}
              <strong className="text-white">capacité d'adaptation</strong>, le sens des responsabilités et une rigueur
              terrain. Curieux de nature, je m'intéresse aux{' '}
              <strong className="text-white">outils numériques et aux nouvelles technologies</strong>, que j'intègre
              progressivement dans mes projets personnels. Je cherche un environnement où je peux m'impliquer pleinement
              et être <strong className="text-white">force de proposition</strong>.
            </p>
          </div>

          {/* Boutons d'action rapide */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a href="#contact" className="btn-primary">
              Me contacter
            </a>
            <a
              href="#experience"
              className="border border-slate-600 hover:border-blue-500 text-slate-300 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200"
            >
              Voir mes expériences
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
