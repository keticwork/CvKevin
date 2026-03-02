/** @type {import('tailwindcss').Config} */
export default {
  // Tailwind scanne ces fichiers pour générer uniquement les classes utilisées
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Couleurs personnalisées pour la palette ardoise/bleu nuit
      colors: {
        primary: '#334155',   // Ardoise grisée
        dark: '#0f172a',      // Bleu nuit profond
        accent: '#3b82f6',    // Bleu accent
        light: '#f1f5f9',     // Gris très clair
      },
      // Animations personnalisées pour les effets d'entrée
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}
