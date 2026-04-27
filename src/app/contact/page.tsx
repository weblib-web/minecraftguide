import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez l'équipe de MinecraftGuide.fr",
  alternates: { canonical: "https://minecraftguide.fr/contact/" },
  robots: { index: true, follow: false },
};

export default function ContactPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12 text-mc-text">
      <h1 className="text-3xl font-bold text-mc-accent mb-6">Contact</h1>
      <section className="space-y-4 text-sm text-mc-text-muted leading-relaxed">
        <p>Une question, une suggestion, une erreur à signaler ? Écrivez-nous à l&apos;adresse suivante :</p>
        <p className="text-mc-text font-mono">contact@minecraftguide.fr</p>
        <p>Nous répondons généralement sous 48 heures ouvrées. Pour les demandes liées au RGPD, mentionnez « RGPD » dans l&apos;objet du message.</p>
      </section>
    </article>
  );
}
