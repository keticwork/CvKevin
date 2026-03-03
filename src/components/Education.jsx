// Section Formation — diplômes et certifications

// Diplômes obtenus en alternance
const formations = [
  {
    degree: 'Bac Pro PSPA',
    detail: 'Pilotage de Systèmes de Production Automatisée',
    school: 'En alternance chez Coca-Cola Entreprise',
    period: '2004 — 2006',
    description: 'Formation de 2 ans en alternance alliant cours théoriques et mise en pratique au sein d\'un grand groupe industriel. Compétences acquises : automatismes, maintenance industrielle, pilotage de lignes de production.',
    icon: '🎓',
    color: 'blue',
  },
  {
    degree: 'BEP Électrotechnique',
    detail: '',
    school: 'En alternance chez GTIE — Snecma Villaroche (77)',
    period: '2002 — 2004',
    description: 'Formation en alternance en milieu industriel. Compétences acquises : câblage d\'armoires électriques, installation électrique, lecture de plans, normes de sécurité.',
    icon: '📚',
    color: 'purple',
  },
]

// Permis & certifications professionnelles
const certifications = [
  { label: 'Permis Poids Lourd (C)', year: '2017', icon: '🚛', color: 'orange' },
  { label: 'Permis SPL (CE)',         year: '2022', icon: '🚚', color: 'orange' },
  { label: 'Grue Auxiliaire R490',    year: '2023', icon: '🏗️', color: 'teal'   },
  { label: 'ADR',                     year: '2023', icon: '⚠️', color: 'red'    },
  { label: 'AIPR',                    year: '2023', icon: '🦺', color: 'yellow' },
]

// Couleurs par thème
const colorMap = {
  blue:   { border: 'border-blue-500/30',   icon: 'text-blue-400',   badge: 'bg-blue-500/20 text-blue-300'   },
  purple: { border: 'border-purple-500/30', icon: 'text-purple-400', badge: 'bg-purple-500/20 text-purple-300' },
}

const certColorMap = {
  orange: 'bg-orange-500/20 text-orange-300 border-orange-500/40',
  teal:   'bg-teal-500/20 text-teal-300 border-teal-500/40',
  red:    'bg-red-500/20 text-red-300 border-red-500/40',
  yellow: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/40',
}

function Education() {
  return (
    <section
      id="education"
      className="py-16 px-4"
      aria-label="Formation de Kevin Pichon"
    >
      <div className="container-cv">
        {/* Titre */}
        <div className="fade-section">
          <h2 className="section-title">Formation</h2>
        </div>

        {/* Diplômes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {formations.map((formation, index) => {
            const colors = colorMap[formation.color]

            return (
              <article
                key={formation.degree}
                className={`fade-section card border ${colors.border}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icône + diplôme */}
                <div className="flex items-start gap-4 mb-3">
                  <span className="text-3xl" aria-hidden="true">{formation.icon}</span>
                  <div>
                    <h3 className="text-white font-bold text-lg">{formation.degree}</h3>
                    {formation.detail && (
                      <p className="text-slate-400 text-xs mb-1">{formation.detail}</p>
                    )}
                    <p className={`text-sm font-medium ${colors.icon}`}>{formation.school}</p>
                  </div>
                </div>

                {/* Période */}
                <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${colors.badge}`}>
                  {formation.period}
                </span>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed">
                  {formation.description}
                </p>
              </article>
            )
          })}
        </div>

        {/* Permis & Certifications */}
        <div className="fade-section">
          <h3 className="text-slate-300 font-semibold text-sm uppercase tracking-wider mb-4">
            Permis &amp; Certifications
          </h3>
          <div className="flex flex-wrap gap-3">
            {certifications.map((cert) => (
              <div
                key={cert.label}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-medium ${certColorMap[cert.color]}`}
              >
                <span aria-hidden="true">{cert.icon}</span>
                <span>{cert.label}</span>
                <span className="opacity-60 text-xs">— {cert.year}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Education
