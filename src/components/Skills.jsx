// Section Compétences — organisées en catégories avec badges visuels

// Données des compétences par catégorie
const skillCategories = [
  {
    title: 'Transport & Conduite',
    icon: '🚛',
    color: 'blue',
    skills: [
      'Conduite PL (Permis C)',
      'Conduite SPL (Permis CE)',
      'Grue Auxiliaire R490',
      'ADR',
      'AIPR',
      'Livraison poids lourd (19T / 44T)',
      'Livraison messagerie / colis VL',
      'Gestion de tournées',
      'Relation client terrain',
    ],
  },
  {
    title: 'Technique & Industrie',
    icon: '⚙️',
    color: 'orange',
    skills: [
      'Câblage électrique & armoires',
      'Câblage aéronautique',
      'Intégration radar militaire',
      'Automatisme industriel (PSPA)',
      'Pilotage de ligne de production',
      'Réglage de machines',
      'Lecture de plans électriques',
      'Maintenance préventive',
      'Électrotechnique',
    ],
  },
  {
    title: 'Management & Logistique',
    icon: '🤝',
    color: 'green',
    skills: [
      "Chef de chantier",
      "Chef d'équipe",
      "Management d'intérimaires",
      'Livraison événementielle',
      'Coordination de chantier',
      'Gestion des stocks',
      'Chargement / Déchargement',
    ],
  },
  {
    title: 'Outils numériques & Informatique',
    icon: '💻',
    color: 'purple',
    skills: [
      'Suite Microsoft Office',
      'Outils IA (ChatGPT, Claude)',
      'HTML / CSS / JavaScript',
      'React (initiation)',
      'Vite, Tailwind CSS',
      'Git (notions)',
    ],
  },
  {
    title: 'Qualités & Savoir-être',
    icon: '⭐',
    color: 'yellow',
    skills: [
      'Rigueur & Autonomie',
      'Force de proposition',
      'Adaptabilité',
      'Esprit d\'équipe',
      'Gestion des priorités',
      'Ponctualité',
    ],
  },
]

// Correspondance couleur → classes Tailwind
const colorMap = {
  blue:   { border: 'border-blue-500/30',   bg: 'bg-blue-500/10',   text: 'text-blue-400',   badge: 'bg-blue-500/20 text-blue-300 border-blue-500/40' },
  orange: { border: 'border-orange-500/30', bg: 'bg-orange-500/10', text: 'text-orange-400', badge: 'bg-orange-500/20 text-orange-300 border-orange-500/40' },
  green:  { border: 'border-green-500/30',  bg: 'bg-green-500/10',  text: 'text-green-400',  badge: 'bg-green-500/20 text-green-300 border-green-500/40' },
  purple: { border: 'border-purple-500/30', bg: 'bg-purple-500/10', text: 'text-purple-400', badge: 'bg-purple-500/20 text-purple-300 border-purple-500/40' },
  yellow: { border: 'border-yellow-500/30', bg: 'bg-yellow-500/10', text: 'text-yellow-400', badge: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/40' },
}

function Skills() {
  return (
    <section
      id="skills"
      className="py-16 px-4"
      aria-label="Compétences de Kevin Pichon"
    >
      <div className="container-cv">
        {/* Titre de section */}
        <div className="fade-section">
          <h2 className="section-title">Compétences</h2>
        </div>

        {/* Grille des catégories de compétences */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const colors = colorMap[category.color]

            return (
              // Carte de compétence avec délai d'animation croissant
              <div
                key={category.title}
                className={`fade-section card border ${colors.border} ${colors.bg}`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                {/* En-tête de la catégorie */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl" aria-hidden="true">{category.icon}</span>
                  <h3 className={`font-semibold text-sm uppercase tracking-wider ${colors.text}`}>
                    {category.title}
                  </h3>
                </div>

                {/* Liste des compétences sous forme de badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`inline-block text-xs font-medium px-3 py-1.5 rounded-full border ${colors.badge}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
