import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales de MinecraftGuide.fr",
  alternates: { canonical: "https://minecraftguide.fr/mentions-legales/" },
  robots: { index: true, follow: false },
};

export default function MentionsLegalesPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12 text-mc-text">
      <h1 className="text-3xl font-bold text-mc-accent mb-6">Mentions légales</h1>
      <section className="space-y-4 text-sm text-mc-text-muted leading-relaxed">
        <h2 className="text-xl font-semibold text-mc-text mt-6">Éditeur du site</h2>
        <p>MinecraftGuide.fr est un site indépendant édité à titre personnel.</p>
        <h2 className="text-xl font-semibold text-mc-text mt-6">Hébergement</h2>
        <p>Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.</p>
        <h2 className="text-xl font-semibold text-mc-text mt-6">Propriété intellectuelle</h2>
        <p>Minecraft® est une marque déposée de Mojang Studios / Microsoft. Ce site n&apos;est pas affilié à Mojang Studios ni à Microsoft. Tous les contenus rédactionnels publiés sur MinecraftGuide.fr sont la propriété de leur auteur.</p>
        <h2 className="text-xl font-semibold text-mc-text mt-6">Contact</h2>
        <p>Pour toute question : <a className="text-mc-accent hover:underline" href="/contact/">page contact</a>.</p>
      </section>
    </article>
  );
}
