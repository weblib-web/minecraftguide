import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité et utilisation des données sur MinecraftGuide.fr",
  alternates: { canonical: "https://minecraftguide.fr/confidentialite/" },
  robots: { index: true, follow: false },
};

export default function ConfidentialitePage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12 text-mc-text">
      <h1 className="text-3xl font-bold text-mc-accent mb-6">Politique de confidentialité</h1>
      <section className="space-y-4 text-sm text-mc-text-muted leading-relaxed">
        <h2 className="text-xl font-semibold text-mc-text mt-6">Données collectées</h2>
        <p>MinecraftGuide.fr ne demande aucune information personnelle pour la consultation de ses guides. Les seules données collectées sont des données de navigation anonymisées via des outils d&apos;analyse statistique (pages vues, durée de session, navigateur).</p>
        <h2 className="text-xl font-semibold text-mc-text mt-6">Cookies</h2>
        <p>Le site peut déposer des cookies techniques nécessaires à son fonctionnement, ainsi que des cookies de mesure d&apos;audience. Aucun cookie publicitaire n&apos;est utilisé.</p>
        <h2 className="text-xl font-semibold text-mc-text mt-6">Vos droits</h2>
        <p>Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et d&apos;opposition aux données vous concernant. Pour exercer ces droits, contactez-nous via la <a className="text-mc-accent hover:underline" href="/contact/">page contact</a>.</p>
      </section>
    </article>
  );
}
