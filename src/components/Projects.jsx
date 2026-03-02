// Section Projets personnels — développement web et IA

// Données des projets personnels
const projects = [
  {
    title: 'CV Web Interactif',
    description: 'Conception et développement de ce CV en ligne avec React, Tailwind CSS et Vite. Intégration d\'animations au scroll, frise chronologique interactive et formulaire de contact. Déployé sur Vercel.',
    tags: ['React 18', 'Tailwind CSS', 'Vite', 'Vercel', 'HTML5 sémantique'],
    icon: '🌐',
    status: 'En ligne',
    statusColor: 'green',
    link: null, // Kevin peut ajouter son URL Vercel ici
  },
  {
    title: 'Exploration outils IA',
    description: 'Expérimentation avancée avec les outils d\'intelligence artificielle : automatisation de tâches, engineering de prompts, analyse de textes et génération de contenu. Utilisation quotidienne de ChatGPT et Claude.',
    tags: ['ChatGPT', 'Claude (Anthropic)', 'Prompting', 'Automatisation', 'Productivité'],
    icon: '🤖',
    status: 'En cours',
    statusColor: 'blue',
    link: null,
  },
  {
    title: 'Initiation au développement web',
    description: 'Apprentissage autodidacte du développement web : HTML, CSS, JavaScript puis React. Réalisation de petits projets personnels pour consolider les acquis et explorer les frameworks modernes.',
    tags: ['HTML / CSS', 'JavaScript', 'React', 'Git', 'Responsive Design'],
    icon: '💡',
    status: 'En progression',
    statusColor: 'yellow',
    link: null,
  },
]

// Couleurs selon le statut du projet
const statusColors = {
  green:  'bg-green-500/20 text-green-300 border-green-500/40',
  blue:   'bg-blue-500/20 text-blue-300 border-blue-500/40',
  yellow: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/40',
}

function Projects() {
  return (
    <section
      id="projects"
      className="py-16 px-4 bg-slate-900/50"
      aria-label="Projets personnels de Kevin Pichon"
    >
      <div className="container-cv">
        {/* Titre */}
        <div className="fade-section">
          <h2 className="section-title">Projets Personnels</h2>
          <p className="text-slate-400 mb-8 text-sm">
            Développement web &amp; Intelligence artificielle
          </p>
        </div>

        {/* Grille de projets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="fade-section card flex flex-col h-full"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* En-tête avec icône et statut */}
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl" aria-hidden="true">{project.icon}</span>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${statusColors[project.statusColor]}`}>
                  {project.status}
                </span>
              </div>

              {/* Titre du projet */}
              <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>

              {/* Tags technologiques */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="badge text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
