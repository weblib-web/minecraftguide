import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts } from "@/data/blog";
import Breadcrumbs from "@/components/Breadcrumbs";
import SchemaMarkup from "@/components/SchemaMarkup";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Blog Minecraft : Tutoriels, Astuces et Guides",
  description:
    "Le blog MinecraftGuide.fr : tutoriels detailles, astuces de jeu et guides d'installation pour Minecraft. Mods, serveurs, performance et plus.",
  alternates: {
    canonical: "https://minecraftguide.fr/blog",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "MinecraftGuide.fr",
    title: "Blog Minecraft : Tutoriels, Astuces et Guides",
    description:
      "Le blog MinecraftGuide.fr : tutoriels detailles, astuces de jeu et guides d'installation pour Minecraft.",
  },
};

export default function BlogIndexPage() {
  const breadcrumbs = [{ name: "Blog", href: "/blog" }];

  const sortedPosts = [...blogPosts].sort(
    (a, b) =>
      new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
  );

  return (
    <>
      <SchemaMarkup type="breadcrumb" data={{ items: breadcrumbs }} />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-green-400 mb-4">
            Blog Minecraft
          </h1>
          <p className="text-lg text-gray-300">
            Tutoriels approfondis, astuces et guides d&apos;installation pour
            tout savoir sur Minecraft.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            {blogPosts.length} article{blogPosts.length > 1 ? "s" : ""} disponible
            {blogPosts.length > 1 ? "s" : ""}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sortedPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-gray-800/50 border border-gray-700 rounded-lg p-5 hover:border-green-500/50 hover:bg-gray-800 transition-all"
            >
              <time
                dateTime={post.datePublished}
                className="text-xs text-gray-500"
              >
                {new Date(post.datePublished).toLocaleDateString("fr-FR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
              <h2 className="text-lg font-medium text-green-300 mt-2 mb-2">
                {post.h1}
              </h2>
              <p className="text-sm text-gray-400 line-clamp-3">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
