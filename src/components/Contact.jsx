// Section Formulaire de contact — intégration Formspree avec validation
import { useState } from "react";

// ⚠️ IMPORTANT : Remplace "TON_ID_FORMSPREE" par ton vrai identifiant Formspree
// Pour obtenir un ID : va sur https://formspree.io, crée un compte gratuit,
// puis "New Form" → copie l'ID qui ressemble à "xpwzljkb"
const FORMSPREE_ID = "mdalrloy";

// Regex de validation email
const EMAIL_REGEX = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;

function Contact() {
  // État du formulaire
  const [formData, setFormData] = useState({
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  // État des erreurs de validation
  const [errors, setErrors] = useState({});

  // État de soumission
  const [status, setStatus] = useState("idle"); // 'idle' | 'loading' | 'success' | 'error'

  // Mise à jour d'un champ
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Efface l'erreur du champ dès que l'utilisateur tape
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Validation du formulaire avant envoi
  const validate = () => {
    const newErrors = {};

    if (!formData.company.trim()) {
      newErrors.company = "Le nom de l'entreprise est requis.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis.";
    } else if (!EMAIL_REGEX.test(formData.email)) {
      newErrors.email = "Format d'email invalide (ex : contact@exemple.fr).";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Le numéro de téléphone est requis.";
    } else {
      // Supprime espaces, tirets et points pour ne garder que les chiffres
      const digitsOnly = formData.phone.replace(/[\s\-\.]/g, "");
      if (!/^0[1-9]\d{8}$/.test(digitsOnly)) {
        newErrors.phone =
          "Format invalide. Ex : 06 12 34 56 78 (10 chiffres, commence par 0).";
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = "Le message est requis.";
    }

    return newErrors;
  };

  // Soumission du formulaire via Formspree
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        // Réinitialise le formulaire après succès
        setFormData({ company: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-16 px-4 bg-slate-900/50"
      aria-label="Formulaire de contact pour Kevin Pichon"
    >
      <div className="container-cv">
        {/* Titre */}
        <div className="fade-section">
          <h2 className="section-title">Contact</h2>
        </div>

        <div className="max-w-xl mx-auto fade-section">
          {/* Sous-titre */}
          <p className="text-slate-400 mb-8 text-center">
            Vous souhaitez me contacter ? Remplissez le formulaire ci-dessous,
            je vous répondrai rapidement.
          </p>

          {/* ====== MESSAGE DE SUCCÈS ====== */}
          {status === "success" && (
            <div
              className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-300 text-center"
              role="alert"
            >
              <p className="font-semibold text-lg mb-1">Message envoyé !</p>
              <p className="text-sm">
                Merci pour votre message. Je vous recontacterai dans les plus
                brefs délais.
              </p>
            </div>
          )}

          {/* ====== MESSAGE D'ERREUR GLOBAL ====== */}
          {status === "error" && (
            <div
              className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-center"
              role="alert"
            >
              <p className="font-semibold">Une erreur est survenue.</p>
              <p className="text-sm">
                Veuillez réessayer ou me contacter directement à
                KPICHON83@gmail.com.
              </p>
            </div>
          )}

          {/* ====== FORMULAIRE ====== */}
          {status !== "success" && (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Nom de l'entreprise */}
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-slate-300 mb-1.5"
                >
                  Nom de l'entreprise{" "}
                  <span className="text-red-400" aria-hidden="true">
                    *
                  </span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Ex : Entreprise Dupont Logistique"
                  className={`w-full bg-slate-800 border rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                    errors.company
                      ? "border-red-500"
                      : "border-slate-600 focus:border-blue-500"
                  }`}
                  aria-describedby={
                    errors.company ? "company-error" : undefined
                  }
                  aria-invalid={!!errors.company}
                />
                {errors.company && (
                  <p
                    id="company-error"
                    className="mt-1 text-sm text-red-400"
                    role="alert"
                  >
                    {errors.company}
                  </p>
                )}
              </div>

              {/* Email de contact */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-300 mb-1.5"
                >
                  Email de contact{" "}
                  <span className="text-red-400" aria-hidden="true">
                    *
                  </span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="contact@entreprise.fr"
                  className={`w-full bg-slate-800 border rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                    errors.email
                      ? "border-red-500"
                      : "border-slate-600 focus:border-blue-500"
                  }`}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <p
                    id="email-error"
                    className="mt-1 text-sm text-red-400"
                    role="alert"
                  >
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Numéro de téléphone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-slate-300 mb-1.5"
                >
                  Numéro de téléphone{" "}
                  <span className="text-red-400" aria-hidden="true">
                    *
                  </span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="06 12 34 56 78"
                  className={`w-full bg-slate-800 border rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                    errors.phone
                      ? "border-red-500"
                      : "border-slate-600 focus:border-blue-500"
                  }`}
                  aria-describedby={errors.phone ? "phone-error" : "phone-hint"}
                  aria-invalid={!!errors.phone}
                />
                {errors.phone ? (
                  <p
                    id="phone-error"
                    className="mt-1 text-sm text-red-400"
                    role="alert"
                  >
                    {errors.phone}
                  </p>
                ) : (
                  <p id="phone-hint" className="mt-1 text-xs text-slate-500">
                    Format français : 10 chiffres commençant par 0 (ex : 06 12
                    34 56 78)
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-300 mb-1.5"
                >
                  Message{" "}
                  <span className="text-red-400" aria-hidden="true">
                    *
                  </span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Décrivez votre besoin, le poste proposé, ou toute autre information..."
                  rows={5}
                  className={`w-full bg-slate-800 border rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-y ${
                    errors.message
                      ? "border-red-500"
                      : "border-slate-600 focus:border-blue-500"
                  }`}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  aria-invalid={!!errors.message}
                />
                {errors.message && (
                  <p
                    id="message-error"
                    className="mt-1 text-sm text-red-400"
                    role="alert"
                  >
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Bouton d'envoi */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === "loading" ? (
                  <>
                    {/* Spinner de chargement */}
                    <svg
                      className="animate-spin w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    Envoyer le message
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </>
                )}
              </button>

              {/* Note de confidentialité */}
              <p className="text-center text-xs text-slate-500">
                Vos données sont uniquement utilisées pour vous répondre. Aucun
                démarchage.
              </p>
            </form>
          )}

        </div>
      </div>
    </section>
  );
}

export default Contact;
