import Link from "next/link";
import { PageData, CategoryConfig } from "@/data/types";
import Breadcrumbs from "@/components/Breadcrumbs";
import SchemaMarkup from "@/components/SchemaMarkup";

export function createCategoryIndex(
  pages: PageData[],
  category: CategoryConfig
) {
  return function CategoryIndex() {
    const breadcrumbs = [
      { name: category.name, href: `/${category.slug}/` },
    ];

    const sortedPages = [...pages].sort((a, b) => b.volume - a.volume);

    return (
      <>
        <SchemaMarkup type="breadcrumb" data={{ items: breadcrumbs }} />

        <div className="max-w-6xl mx-auto px-4 py-8">
          <Breadcrumbs items={breadcrumbs} />

          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-green-400 mb-4">
              {category.metaTitle}
            </h1>
            <p className="text-lg text-gray-300">{category.description}</p>
            <p className="text-sm text-gray-500 mt-2">
              {pages.length} guides disponibles
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sortedPages.map((page) => (
              <Link
                key={page.slug}
                href={`/${category.slug}/${page.slug}/`}
                className="block bg-gray-800/50 border border-gray-700 rounded-lg p-4 hover:border-green-500/50 hover:bg-gray-800 transition-all"
              >
                <h2 className="text-lg font-medium text-green-300 mb-2">
                  {page.h1}
                </h2>
                <p className="text-sm text-gray-400 line-clamp-2">
                  {page.metaDescription}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </>
    );
  };
}

export function createCategoryMetadata(category: CategoryConfig) {
  return {
    title: category.metaTitle,
    description: category.metaDescription,
    openGraph: {
      title: category.metaTitle,
      description: category.metaDescription,
      type: "website" as const,
      locale: "fr_FR",
      siteName: "MinecraftGuide.fr",
    },
    alternates: {
      canonical: `https://minecraftguide.fr/${category.slug}/`,
    },
  };
}
