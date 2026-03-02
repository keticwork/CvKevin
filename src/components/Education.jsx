// Section Formation — diplômes obtenus en alternance

// Données des formations
const formations = [
  {
    degree: 'Bac Pro Électrotechnique',
    school: 'En alternance chez Coca-Cola Entreprise',
    period: '2004 — 2006',
    description: 'Formation professionnelle en électrotechnique alliant cours théoriques et mise en pratique au sein d\'une grande entreprise industrielle. Compétences acquises : maintenance électrique, automatismes, câblage, lecture de schémas.',
    icon: '🎓',
    color: 'blue',
  },
  {
    degree: 'BEP Électrotechnique',
    school: 'En alternance chez GTIE / Snecma Villaroche',
    period: '2002 — 2004',
    description: 'Formation de base en électrotechnique en alternance dans le secteur industriel et tertiaire. Compétences acquises : installation électrique, câblage, normes de sécurité, lecture de plans.',
    icon: '📚',
    color: 'purple',
  },
]

// Couleurs par thème
const colorMap = {
  blue:   { border: 'border-blue-500/30',   icon: 'text-blue-400',   badge: 'bg-blue-500/20 text-blue-300' },
  purple: { border: 'border-purple-500/30', icon: 'text-purple-400', badge: 'bg-purple-500/20 text-purple-300' },
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

        {/* Cartes de formation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
      </div>
    </section>
  )
}

export default Education
