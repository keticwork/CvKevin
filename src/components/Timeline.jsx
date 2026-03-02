// Frise chronologique interactive — parcours de 2002 à 2024
// Chaque point est cliquable/survolable pour afficher les détails
import { useState } from 'react'

// Données de la frise (du plus ancien au plus récent)
const timelineEvents = [
  { year: 2002, company: 'GTIE IDF / GTIE INFI',      role: 'Électrotechnicien (alternance)',    period: '2002 — 2004', color: 'purple' },
  { year: 2002, company: 'MANPOWER FRANCE',            role: 'Opérateur / Logistique',            period: '2002 — 2008', color: 'slate'  },
  { year: 2004, company: 'SON ET LUMIÈRE',             role: 'Technicien son et lumière',          period: 'Oct — Nov 2004', color: 'yellow' },
  { year: 2004, company: 'COCA-COLA ENTREPRISE',      role: 'Technicien Électrotechnicien (alt.)', period: '2004 — 2006', color: 'red'    },
  { year: 2008, company: 'FONCTION MEUBLES',           role: 'Vendeur Conseil',                    period: '2008 — 2013', color: 'green'  },
  { year: 2013, company: 'MANPOWER FRANCE',            role: 'Missions logistique / industrie',    period: '2006 — 2008', color: 'slate'  },
  { year: 2015, company: 'CRIT',                       role: 'Mission intérim — Logistique',       period: 'Jan — Août 2015', color: 'orange' },
  { year: 2015, company: 'DLSI',                       role: 'Mission intérim — Industrie',        period: 'Sep — Oct 2015', color: 'orange' },
  { year: 2015, company: 'BEST INTERIM',               role: 'Opérateur Logistique',               period: '2015 & 2019', color: 'blue'   },
  { year: 2016, company: 'THALES AIR SYSTEMS',         role: 'Technicien / Opérateur',             period: 'Jan 2016 — Juil 2017', color: 'indigo' },
  { year: 2018, company: 'ELIS CÔTE D\'AZUR',          role: 'Agent de service logistique',        period: 'Mai — Nov 2018', color: 'teal'   },
  { year: 2021, company: 'STAR\'S SERVICE',            role: 'Agent de service',                   period: 'Avr — Mai 2021', color: 'slate'  },
  { year: 2021, company: 'TRANSMAT',                   role: 'Chauffeur Livreur / Logistique',     period: 'Jun 2021 — Avr 2022', color: 'blue' },
  { year: 2023, company: 'LCRD',                       role: 'Opérateur Logistique',               period: 'Mar — Jun 2023', color: 'green'  },
  { year: 2023, company: 'PROVOTRANS',                 role: 'Chauffeur Livreur',                  period: 'Jun 2023 — Sep 2024', color: 'blue' },
]

// Couleurs disponibles pour les points de la frise
const dotColors = {
  blue:   'bg-blue-500   border-blue-400',
  green:  'bg-green-500  border-green-400',
  purple: 'bg-purple-500 border-purple-400',
  orange: 'bg-orange-500 border-orange-400',
  red:    'bg-red-500    border-red-400',
  yellow: 'bg-yellow-500 border-yellow-400',
  indigo: 'bg-indigo-500 border-indigo-400',
  teal:   'bg-teal-500   border-teal-400',
  slate:  'bg-slate-500  border-slate-400',
}

// Textes couleurs pour le tooltip
const textColors = {
  blue:   'text-blue-400',
  green:  'text-green-400',
  purple: 'text-purple-400',
  orange: 'text-orange-400',
  red:    'text-red-400',
  yellow: 'text-yellow-400',
  indigo: 'text-indigo-400',
  teal:   'text-teal-400',
  slate:  'text-slate-400',
}

function Timeline() {
  // Index de l'événement actuellement sélectionné (null = aucun)
  const [activeIndex, setActiveIndex] = useState(null)

  const handleToggle = (index) => {
    // Clic sur le même point : ferme la carte
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section
      id="timeline"
      className="py-16 px-4 bg-slate-900/50"
      aria-label="Frise chronologique du parcours de Kevin Pichon"
    >
      <div className="container-cv">
        {/* Titre */}
        <div className="fade-section">
          <h2 className="section-title">Mon parcours en un coup d'œil</h2>
          <p className="text-slate-400 mb-10 text-sm">
            Cliquez sur un point pour afficher les détails — de 2002 à 2024
          </p>
        </div>

        {/* ====== VERSION DESKTOP : Frise horizontale ====== */}
        <div className="hidden lg:block fade-section">
          {/* Axe horizontal */}
          <div className="relative">
            {/* Ligne centrale */}
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-slate-600 z-0" />

            {/* Points sur la frise */}
            <div className="flex justify-between items-start relative z-10">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center cursor-pointer group"
                  style={{ flex: '1' }}
                  onClick={() => handleToggle(index)}
                  onKeyDown={(e) => e.key === 'Enter' && handleToggle(index)}
                  tabIndex={0}
                  role="button"
                  aria-pressed={activeIndex === index}
                  aria-label={`${event.company} — ${event.period}`}
                >
                  {/* Point sur la ligne */}
                  <div
                    className={`w-4 h-4 rounded-full border-2 transition-all duration-200 ${dotColors[event.color]}
                      ${activeIndex === index ? 'scale-150 shadow-lg' : 'group-hover:scale-125'}
                    `}
                  />
                  {/* Année sous le point */}
                  <span className="text-slate-500 text-xs mt-2 rotate-0 leading-tight text-center">
                    {event.year}
                  </span>
                </div>
              ))}
            </div>

            {/* Carte de détail pour le point actif */}
            {activeIndex !== null && (
              <div
                className="mt-6 card border-blue-500/30 max-w-sm mx-auto animate-fade-in"
                role="region"
                aria-live="polite"
              >
                <button
                  className="absolute top-3 right-3 text-slate-500 hover:text-white"
                  onClick={() => setActiveIndex(null)}
                  aria-label="Fermer"
                >
                  ✕
                </button>
                <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${textColors[timelineEvents[activeIndex].color]}`}>
                  {timelineEvents[activeIndex].period}
                </p>
                <h3 className="text-white font-bold text-lg">
                  {timelineEvents[activeIndex].company}
                </h3>
                <p className="text-slate-400 text-sm">{timelineEvents[activeIndex].role}</p>
              </div>
            )}
          </div>
        </div>

        {/* ====== VERSION MOBILE/TABLETTE : Frise verticale ====== */}
        <div className="lg:hidden fade-section">
          <div className="relative ml-4">
            {/* Ligne verticale */}
            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-slate-700" />

            {/* Événements */}
            <div className="space-y-4">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className="relative pl-10"
                  onClick={() => handleToggle(index)}
                  onKeyDown={(e) => e.key === 'Enter' && handleToggle(index)}
                  tabIndex={0}
                  role="button"
                  aria-pressed={activeIndex === index}
                  aria-label={`${event.company} — ${event.period}`}
                >
                  {/* Point sur la ligne verticale */}
                  <div
                    className={`absolute left-0 top-2 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 cursor-pointer ${dotColors[event.color]}
                      ${activeIndex === index ? 'scale-125 shadow-lg' : 'hover:scale-110'}
                    `}
                  />

                  {/* Carte de l'événement */}
                  <div
                    className={`card cursor-pointer transition-all duration-200 ${
                      activeIndex === index
                        ? 'border-blue-500/50 bg-slate-700/80'
                        : 'hover:border-slate-600'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className={`text-xs font-semibold ${textColors[event.color]} mb-0.5`}>
                          {event.period}
                        </p>
                        <h3 className="text-white font-bold text-sm">{event.company}</h3>
                        <p className="text-slate-400 text-xs">{event.role}</p>
                      </div>
                      <span className="text-slate-500 text-xs shrink-0">{event.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
