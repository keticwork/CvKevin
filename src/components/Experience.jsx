// Section Expériences Professionnelles — cartes du plus récent au plus ancien

// Données de toutes les expériences professionnelles (hors périodes exclues)
const experiences = [
  {
    company: 'PROVOTRANS',
    role: 'Chauffeur Livreur',
    period: 'Juin 2023 — Septembre 2024',
    type: 'CDI',
    bullets: [
      'Gestion et optimisation de tournées de livraison quotidiennes sur le département du Var.',
      'Chargement, déchargement et contrôle des marchandises dans le respect des procédures qualité.',
      'Relation client de proximité, suivi des enlèvements et gestion des anomalies de livraison.',
    ],
  },
  {
    company: 'LCRD',
    role: 'Opérateur Logistique',
    period: 'Mars 2023 — Juin 2023',
    type: 'Mission',
    bullets: [
      'Réception, tri et expédition des colis dans un entrepôt logistique à flux tendu.',
      'Préparation de commandes et gestion des stocks avec rigueur et précision.',
      'Respect des cadences de production et des normes de sécurité en entrepôt.',
    ],
  },
  {
    company: 'TRANSMAT',
    role: 'Chauffeur Livreur / Logistique',
    period: 'Juin 2021 — Avril 2022',
    type: 'CDD',
    bullets: [
      'Livraison de marchandises auprès d\'une clientèle professionnelle et particulière, gestion des bons de livraison.',
      'Participation aux opérations logistiques en entrepôt : réception, contrôle et rangement des stocks.',
      'Optimisation des itinéraires pour réduire les délais et les coûts de transport.',
    ],
  },
  {
    company: 'STAR\'S SERVICE',
    role: 'Agent de service',
    period: 'Avril 2021 — Mai 2021',
    type: 'Mission',
    bullets: [
      'Réalisation de prestations de services en milieu professionnel selon les consignes du client.',
      'Travail en autonomie avec respect des délais et des standards de qualité définis.',
    ],
  },
  {
    company: 'BEST INTERIM',
    role: 'Opérateur Logistique',
    period: '2015 — 2019 (missions)',
    type: 'Intérim',
    bullets: [
      'Missions ponctuelles en entrepôt logistique : préparation de commandes, picking et inventaires.',
      'Polyvalence sur différents postes en fonction des besoins de production.',
      'Capacité d\'adaptation rapide aux environnements et aux procédures internes.',
    ],
  },
  {
    company: 'ELIS CÔTE D\'AZUR',
    role: 'Agent de service logistique',
    period: 'Mai 2018 — Novembre 2018',
    type: 'CDD',
    bullets: [
      'Tri, traitement et expédition du linge professionnel dans le respect des délais de production.',
      'Gestion des flux entrants et sortants avec suivi qualité des articles traités.',
      'Travail en équipe dans un environnement cadencé et exigeant.',
    ],
  },
  {
    company: 'THALES AIR SYSTEMS',
    role: 'Technicien / Opérateur',
    period: 'Janvier 2016 — Juillet 2017',
    type: 'Contrat',
    bullets: [
      'Assemblage, câblage et contrôle de systèmes électroniques et électrotechniques de haute précision.',
      'Lecture et interprétation de schémas électriques et de plans techniques.',
      'Participation aux opérations de maintenance préventive et aux tests de conformité des équipements.',
    ],
  },
  {
    company: 'DLSI',
    role: 'Mission intérim — Industrie',
    period: 'Septembre 2015 — Octobre 2015',
    type: 'Intérim',
    bullets: [
      'Mission en milieu industriel : opérations de montage et de contrôle qualité en chaîne de production.',
      'Respect strict des consignes de sécurité et des normes de fabrication.',
    ],
  },
  {
    company: 'CRIT',
    role: 'Mission intérim — Logistique',
    period: 'Janvier 2015 — Août 2015',
    type: 'Intérim',
    bullets: [
      'Préparation de commandes, gestion des stocks et chargement/déchargement en entrepôt.',
      'Utilisation d\'équipements de manutention dans le respect des procédures de sécurité.',
      'Suivi des bons de livraison et vérification de la conformité des marchandises.',
    ],
  },
  {
    company: 'MANPOWER FRANCE',
    role: 'Opérateur / Logistique',
    period: '2002 — 2008 (missions diverses)',
    type: 'Intérim',
    bullets: [
      'Missions variées en industrie et logistique : opérateur sur ligne de production, manutention, conditionnement.',
      'Capacité d\'adaptation à différents secteurs d\'activité et environnements de travail.',
      'Acquis d\'une large expérience terrain en production industrielle et en gestion de flux logistiques.',
    ],
  },
  {
    company: 'FONCTION MEUBLES',
    role: 'Vendeur Conseil',
    period: 'Novembre 2008 — Août 2013',
    type: 'CDI',
    bullets: [
      'Conseil et accompagnement des clients dans leurs projets d\'aménagement intérieur.',
      'Gestion du rayon, mise en valeur des produits (merchandising) et tenue des stocks.',
      'Atteinte et dépassement des objectifs de vente dans un contexte concurrentiel.',
    ],
  },
  {
    company: 'SON ET LUMIÈRE',
    role: 'Technicien son et lumière',
    period: 'Octobre 2004 — Novembre 2004',
    type: 'Mission',
    bullets: [
      'Installation et exploitation de systèmes audio et d\'éclairage lors d\'événements.',
      'Câblage, réglage et maintenance du matériel technique de scène.',
    ],
  },
  {
    company: 'COCA-COLA ENTREPRISE',
    role: 'Technicien Électrotechnicien (alternance)',
    period: 'Septembre 2004 — Juin 2006',
    type: 'Alternance',
    bullets: [
      'Formation et mise en pratique des compétences en électrotechnique au sein d\'un grand groupe industriel.',
      'Maintenance préventive et corrective des équipements électriques et automatisés.',
      'Obtention du Bac Pro Électrotechnique en parallèle des missions en entreprise.',
    ],
  },
  {
    company: 'GTIE IDF / GTIE INFI',
    role: 'Électrotechnicien (alternance)',
    period: 'Septembre 2002 — Juin 2004',
    type: 'Alternance',
    bullets: [
      'Réalisation de travaux d\'installation et de câblage électrique en milieu industriel et tertiaire.',
      'Lecture de plans et schémas électriques, pose de chemins de câbles et raccordements.',
      'Obtention du BEP Électrotechnique en fin de formation.',
    ],
  },
]

// Correspondance type de contrat → couleur badge
const typeColors = {
  CDI:       'bg-green-500/20 text-green-300 border-green-500/40',
  CDD:       'bg-blue-500/20 text-blue-300 border-blue-500/40',
  Intérim:   'bg-orange-500/20 text-orange-300 border-orange-500/40',
  Alternance:'bg-purple-500/20 text-purple-300 border-purple-500/40',
  Mission:   'bg-slate-500/20 text-slate-300 border-slate-500/40',
  Contrat:   'bg-teal-500/20 text-teal-300 border-teal-500/40',
}

function Experience() {
  return (
    <section
      id="experience"
      className="py-16 px-4"
      aria-label="Expériences professionnelles de Kevin Pichon"
    >
      <div className="container-cv">
        {/* Titre */}
        <div className="fade-section">
          <h2 className="section-title">Expériences Professionnelles</h2>
        </div>

        {/* Liste des expériences sous forme de cartes */}
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <article
              key={`${exp.company}-${index}`}
              className="fade-section card group"
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              {/* En-tête de la carte */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div>
                  {/* Nom de l'entreprise */}
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                    {exp.company}
                  </h3>
                  {/* Poste occupé */}
                  <p className="text-blue-400 font-medium text-sm">{exp.role}</p>
                </div>

                {/* Période et type de contrat */}
                <div className="flex flex-col sm:items-end gap-1.5 shrink-0">
                  <span className="text-slate-400 text-sm">{exp.period}</span>
                  <span className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full border ${typeColors[exp.type] || typeColors['Mission']}`}>
                    {exp.type}
                  </span>
                </div>
              </div>

              {/* Bullet points de description */}
              <ul className="space-y-1.5 mt-3" role="list">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-400 text-sm leading-relaxed">
                    <span className="text-blue-400 mt-1.5 shrink-0">▸</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
