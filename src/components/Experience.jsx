// Section Expériences Professionnelles — cartes du plus récent au plus ancien

// Données de toutes les expériences professionnelles
const experiences = [
  {
    company: "Projets Entrepreneuriaux & Formation Numérique",
    role: "Développement Web, Programmation & IA",
    period: "2024 — Présent",
    location: "Le Luc (83)",
    type: "Projet",
    bullets: [
      "Apprentissage autodidacte de la programmation web (HTML, CSS, JavaScript, React) et utilisation des outils numériques et IA dans une démarche de reconversion et de création de valeur.",
      "RELIV — Service de livraison de colis de proximité : partenariat avec des sociétés de livraison pour éviter les retours entrepôt, stockage et livraison locale des colis aux destinataires à proximité.",
      "En cours : plateforme numérique pour petits commerces locaux (restaurants, coiffeurs…) — création de site web, carte fidélité wallet iOS & Android, envoi de promotions clients.",
      "En cours : plateforme de mise en relation particuliers / artisans locaux, avec présentation vidéo style TikTok.",
    ],
    link: "https://reliv-ten.vercel.app/",
    linkLabel: "Voir le projet RELIV →",
  },
  {
    company: "Groupe Vicat, VPI",
    role: "Chauffeur SPL — Grue Auxiliaire",
    period: "Juin 2023 — Septembre 2024",
    location: "Le Luc (83)",
    type: "CDI",
    bullets: [
      "Conduite d'un ensemble articulé poids lourd + remorque 44 tonnes équipé d'une grue auxiliaire R490.",
      "Livraisons de matériaux auprès de magasins de négoce et de chantiers de construction dans les départements 83, 06, 04 et 84.",
      "Chargement et déchargement autonome à la grue auxiliaire R490, dans le respect strict des règles de sécurité.",
    ],
  },
  {
    company: "TRANSMAT",
    role: "Chauffeur PL 19T",
    period: "Juin 2021 — Avril 2022",
    location: "Drap (06)",
    type: "CDI",
    bullets: [
      "Conduite d'un poids lourd 19 tonnes pour la livraison de literie et sommiers auprès d'une clientèle professionnelle et particulière.",
      "Secteur de livraison : départements 06 et 83.",
      "Gestion des bons de livraison et relation client directe.",
    ],
  },
  {
    company: "STAR'S SERVICE — Sous-traitant Amazon",
    role: "Chauffeur Livreur VL",
    period: "Avril 2021 — Mai 2021",
    location: "Saint-Laurent-du-Var (06)",
    type: "CDD",
    bullets: [
      "Livraison de colis en véhicule léger pour le compte d'Amazon auprès de particuliers sur Nice et ses environs.",
      "Gestion des tournées et respect des délais de livraison.",
    ],
  },
  {
    company: "ELIS CÔTE D'AZUR",
    role: "Chauffeur PL 19T",
    period: "Mai 2018 — Novembre 2018",
    location: "Carros (06)",
    type: "CDD",
    bullets: [
      "Conduite d'un poids lourd 19 tonnes pour la livraison de textile et linge professionnel.",
      "Livraisons auprès des plages privées de la Croisette à Cannes.",
      "Gestion des flux de livraison et suivi qualité des articles transportés.",
    ],
  },
  {
    company: "THALES AIR SYSTEMS",
    role: "Monteur Câbleur Intégrateur — Radars Militaires",
    period: "Janvier 2016 — Juillet 2017",
    location: "Limours (91)",
    type: "CDD",
    bullets: [
      "Montage, câblage et intégration de systèmes radar militaires dans le respect strict des procédures.",
      "Lecture et interprétation de schémas électriques et de plans techniques.",
      "Déplacements aux Émirats Arabes Unis pour les opérations d'installation sur site.",
    ],
  },
  {
    company: "CRIT — Groupe Latécoère / Latelec",
    role: "Monteur Câbleur Aéronautique",
    period: "Janvier 2015 — Août 2015",
    location: "Le Bourget (93) — Orly (94)",
    type: "Intérim",
    bullets: [
      "Montage et câblage aéronautique en milieu industriel pour le groupe Latécoère / Latelec.",
      "Travaux sur avions Boeing 777, KC-135 et Falcon 7X dans le respect des procédures aéronautiques.",
    ],
  },
  {
    company: "Groupe Jaulin — Fonction Meuble",
    role: "Chauffeur 20m³ — Chef d'Équipe — Chef de Chantier",
    period: "Novembre 2008 — Août 2013",
    location: "Chilly-Mazarin (91)",
    type: "CDI",
    bullets: [
      "Livraison et installation de mobilier pour des événements professionnels sur Paris et région parisienne.",
      "Progression de chauffeur 20m³ à chef d'équipe puis chef de chantier.",
      "Management d'équipes d'intérimaires pour les opérations d'installation.",
      "Déplacements en Allemagne pour des missions événementielles.",
    ],
  },
  {
    company: "COCA-COLA ENTREPRISE",
    role: "Technicien PSPA (alternance)",
    period: "Septembre 2004 — Juin 2006",
    location: "Grigny (91)",
    type: "Alternance",
    bullets: [
      "Formation en alternance de 2 ans pour l'obtention du Bac Pro PSPA — Pilotage de Systèmes de Production Automatisée.",
      "Conduite de lignes de production automatisées et réapprovisionnement en matières premières.",
      "Réglage et paramétrage des machines de production au sein d'un grand groupe industriel.",
    ],
  },
  {
    company: "GTIE IDF / GTIE INFI",
    role: "Électrotechnicien (alternance)",
    period: "Septembre 2002 — Juin 2004",
    location: "Snecma Villaroche (77)",
    type: "Alternance",
    bullets: [
      "Câblage d'armoires électriques et travaux électriques variés en milieu industriel.",
      "Formation en alternance pour l'obtention du BEP Électrotechnique.",
    ],
  },
];

// Correspondance type de contrat → couleur badge
const typeColors = {
  CDI: "bg-green-500/20 text-green-300 border-green-500/40",
  CDD: "bg-blue-500/20 text-blue-300 border-blue-500/40",
  Intérim: "bg-orange-500/20 text-orange-300 border-orange-500/40",
  Alternance: "bg-purple-500/20 text-purple-300 border-purple-500/40",
  Mission: "bg-slate-500/20 text-slate-300 border-slate-500/40",
  Contrat: "bg-teal-500/20 text-teal-300 border-teal-500/40",
  Projet: "bg-pink-500/20 text-pink-300 border-pink-500/40",
};

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
                  <p className="text-blue-400 font-medium text-sm">
                    {exp.role}
                  </p>
                  {/* Ville (optionnel) */}
                  {exp.location && (
                    <p className="text-slate-500 text-xs mt-0.5">
                      📍 {exp.location}
                    </p>
                  )}
                </div>

                {/* Période et type de contrat */}
                <div className="flex flex-col sm:items-end gap-1.5 shrink-0">
                  <span className="text-slate-400 text-sm">{exp.period}</span>
                  <span
                    className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full border ${typeColors[exp.type] || typeColors["Mission"]}`}
                  >
                    {exp.type}
                  </span>
                </div>
              </div>

              {/* Bullet points de description */}
              <ul className="space-y-1.5 mt-3" role="list">
                {exp.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-slate-400 text-sm leading-relaxed"
                  >
                    <span className="text-blue-400 shrink-0 leading-none mt-[3px]">
                      ▸
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Lien vers projet (optionnel) */}
              {exp.link && (
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-4 text-xs font-semibold text-pink-400 hover:text-pink-300 border border-pink-500/40 hover:border-pink-400 bg-pink-500/10 hover:bg-pink-500/20 px-3 py-1.5 rounded-full transition-all"
                >
                  🔗 {exp.linkLabel || exp.link}
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
