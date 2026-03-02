# CV Web — Kevin Pichon

CV professionnel interactif développé avec **React 18 + Vite + Tailwind CSS**, déployable sur **Vercel**.

---

## Lancer le projet en local

### Prérequis
- [Node.js](https://nodejs.org/) version 18 ou supérieure
- npm (inclus avec Node.js)

### Installation et démarrage

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement
npm run dev
```

Ouvre ensuite [http://localhost:5173](http://localhost:5173) dans ton navigateur.

---

## Configurer le formulaire de contact (Formspree)

1. Va sur [https://formspree.io](https://formspree.io) et crée un compte gratuit
2. Clique sur **"New Form"** et donne-lui un nom (ex : "CV Kevin Contact")
3. Copie l'**identifiant de formulaire** (ex : `xpwzljkb`)
4. Ouvre le fichier `src/components/Contact.jsx`
5. Remplace `TON_ID_FORMSPREE` par ton vrai identifiant :

```js
const FORMSPREE_ID = 'xpwzljkb'  // ← ton ID ici
```

---

## Déployer sur Vercel

### Option 1 — Via GitHub (recommandé)

1. **Pousse le projet sur GitHub** :
```bash
git init
git add .
git commit -m "init: CV Kevin Pichon"
git remote add origin https://github.com/TON_COMPTE/cv-kevin.git
git push -u origin main
```

2. Va sur [https://vercel.com](https://vercel.com) et connecte-toi avec GitHub
3. Clique sur **"Add New Project"**
4. Sélectionne ton dépôt GitHub
5. Vercel détecte automatiquement Vite — clique sur **"Deploy"**

### Option 2 — Via CLI Vercel

```bash
# Installer Vercel CLI
npm install -g vercel

# Déployer (suivre les instructions)
vercel
```

---

## Build de production

```bash
npm run build
```

Les fichiers optimisés seront dans le dossier `dist/`.

---

## Structure du projet

```
CvKevin/
├── public/
│   └── index.html          # Template HTML principal
├── src/
│   ├── components/
│   │   ├── Header.jsx      # Navigation fixe + menu burger mobile
│   │   ├── About.jsx       # Section hero / présentation
│   │   ├── Skills.jsx      # Compétences par catégories
│   │   ├── Experience.jsx  # Expériences professionnelles (cartes)
│   │   ├── Timeline.jsx    # Frise chronologique interactive
│   │   ├── Education.jsx   # Formation / diplômes
│   │   ├── Projects.jsx    # Projets personnels
│   │   ├── Hobbies.jsx     # Passions & loisirs
│   │   └── Contact.jsx     # Formulaire de contact (Formspree)
│   ├── App.jsx             # Composant racine + IntersectionObserver
│   ├── main.jsx            # Point d'entrée React
│   └── index.css           # Styles globaux + directives Tailwind
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## Stack technique

| Outil | Version | Rôle |
|-------|---------|------|
| React | 18.x | Framework UI |
| Vite | 5.x | Bundler / dev server |
| Tailwind CSS | 3.x | Styles utilitaires |
| Formspree | — | Formulaire de contact sans backend |
| Vercel | — | Hébergement / déploiement |

---

## Personnalisation rapide

- **Couleurs** : modifie `tailwind.config.js` → section `colors`
- **Expériences** : édite le tableau `experiences` dans `src/components/Experience.jsx`
- **Compétences** : édite `skillCategories` dans `src/components/Skills.jsx`
- **Projets** : édite `projects` dans `src/components/Projects.jsx`
