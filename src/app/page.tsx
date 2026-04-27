import Link from "next/link";
import { categories } from "@/lib/utils";

export const dynamic = "force-static";

const stats = [
  { label: "Guides", value: "500+" },
  { label: "Recettes de craft", value: "400+" },
  { label: "Enchantements", value: "40+" },
  { label: "Mises a jour", value: "Regulieres" },
];

const popularGuides = [
  {
    title: "Comment faire une table de craft",
    href: "/comment-faire/table-de-craft/",
    category: "Crafting",
  },
  {
    title: "Enchantement Protection",
    href: "/enchantement/protection/",
    category: "Enchantements",
  },
  {
    title: "Potion de force",
    href: "/potion/force/",
    category: "Potions",
  },
  {
    title: "Golem de cuivre",
    href: "/mob/golem-cuivre/",
    category: "Mobs",
  },
  {
    title: "Ferme a fer automatique",
    href: "/ferme/fer/",
    category: "Fermes",
  },
  {
    title: "Commande /tp",
    href: "/commande/tp/",
    category: "Commandes",
  },
];

const categoryIcons: Record<string, string> = {
  "comment-faire": "C",
  enchantement: "E",
  potion: "P",
  mob: "M",
  item: "I",
  minage: "Mi",
  commande: "Co",
  ferme: "F",
  construction: "B",
  serveur: "S",
  mod: "Mo",
  biome: "Bi",
  structure: "St",
  guide: "G",
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-mc-darker">
        <div className="absolute inset-0 bg-gradient-to-b from-mc-green-dark/20 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-mc-text sm:text-5xl lg:text-6xl">
              Le Guide Minecraft le Plus{" "}
              <span className="text-mc-accent">Complet</span> en Francais
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-mc-text-muted leading-relaxed">
              Retrouvez plus de 500 guides detailles sur le crafting, les
              enchantements, les potions, les mobs et tout ce dont vous avez
              besoin pour maitriser Minecraft.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/comment-faire/"
                className="inline-flex items-center rounded-lg bg-mc-green px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-mc-green-light transition-colors"
              >
                Explorer les guides
              </Link>
              <Link
                href="/enchantement/"
                className="inline-flex items-center rounded-lg border border-mc-border bg-mc-card px-6 py-3 text-sm font-semibold text-mc-text hover:bg-mc-card-hover transition-colors"
              >
                Enchantements
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-mc-border bg-mc-dark">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-mc-accent">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-mc-text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-mc-text">
            Toutes les categories
          </h2>
          <p className="mt-3 text-mc-text-muted">
            Choisissez une categorie pour decouvrir nos guides
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/${cat.slug}/`}
              className="group relative flex flex-col items-center rounded-xl border border-mc-border bg-mc-card p-6 text-center hover:bg-mc-card-hover hover:border-mc-green/40 transition-all duration-200"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-mc-green/10 text-xl font-bold text-mc-accent group-hover:bg-mc-green/20 transition-colors">
                {categoryIcons[cat.slug] || cat.name[0]}
              </div>
              <h3 className="mt-4 text-sm font-semibold text-mc-text group-hover:text-mc-accent transition-colors">
                {cat.name}
              </h3>
              <p className="mt-1 text-xs text-mc-text-dim leading-relaxed">
                {cat.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Guides */}
      <section className="border-t border-mc-border bg-mc-dark">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-mc-text">
              Guides populaires
            </h2>
            <p className="mt-3 text-mc-text-muted">
              Les guides les plus consultes par la communaute
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {popularGuides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="group flex items-start gap-4 rounded-xl border border-mc-border bg-mc-card p-5 hover:bg-mc-card-hover hover:border-mc-green/40 transition-all duration-200"
              >
                <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-mc-green/10 text-sm font-bold text-mc-accent">
                  {guide.category[0]}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-mc-text group-hover:text-mc-accent transition-colors">
                    {guide.title}
                  </h3>
                  <p className="mt-1 text-xs text-mc-text-dim">
                    {guide.category}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Block */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-mc-text">
            MinecraftGuide.fr - Votre reference Minecraft en francais
          </h2>
          <div className="mt-4 space-y-4 text-sm text-mc-text-muted leading-relaxed">
            <p>
              Bienvenue sur MinecraftGuide.fr, le guide Minecraft le plus
              complet en langue francaise. Que vous soyez debutant ou joueur
              experimente, nos guides couvrent tous les aspects du jeu : du
              crafting aux enchantements, en passant par les potions, les mobs,
              le minage et les fermes automatiques.
            </p>
            <p>
              Chaque guide est redige avec soin pour vous fournir des
              informations precises et a jour. Nous couvrons toutes les versions
              de Minecraft, y compris les dernieres mises a jour Java Edition et
              Bedrock Edition.
            </p>
            <p>
              Explorez nos categories pour trouver exactement ce que vous
              cherchez, ou utilisez la navigation pour parcourir nos guides par
              theme. De la fabrication de votre premiere pioche en bois a la
              construction de fermes automatiques complexes, MinecraftGuide.fr
              vous accompagne a chaque etape.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
