import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageData, CategoryConfig } from "@/data/types";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import RelatedPages from "@/components/RelatedPages";
import SchemaMarkup from "@/components/SchemaMarkup";

export function createGenerateStaticParams(pages: PageData[]) {
  return async function generateStaticParams() {
    return pages.map((page) => ({ slug: page.slug }));
  };
}

export function createGenerateMetadata(
  pages: PageData[],
  category: CategoryConfig
) {
  return async function generateMetadata({
    params,
  }: {
    params: Promise<{ slug: string }>;
  }): Promise<Metadata> {
    const { slug } = await params;
    const page = pages.find((p) => p.slug === slug);
    if (!page) return {};
    return {
      title: page.title,
      description: page.metaDescription,
      openGraph: {
        title: page.title,
        description: page.metaDescription,
        type: "article",
        locale: "fr_FR",
        siteName: "MinecraftGuide.fr",
      },
      alternates: {
        canonical: `https://minecraftguide.fr/${category.slug}/${page.slug}`,
      },
    };
  };
}

export function createCategoryPage(
  pages: PageData[],
  category: CategoryConfig
) {
  return async function CategoryPage({
    params,
  }: {
    params: Promise<{ slug: string }>;
  }) {
    const { slug } = await params;
    const page = pages.find((p) => p.slug === slug);
    if (!page) notFound();

    const breadcrumbs = [
      { name: category.name, href: `/${category.slug}` },
      { name: page.h1, href: `/${category.slug}/${page.slug}` },
    ];

    const relatedPages = pages
      .filter((p) => page.content.relatedSlugs.includes(p.slug))
      .map((p) => ({
        title: p.h1,
        href: `/${category.slug}/${p.slug}`,
      }));

    return (
      <>
        <SchemaMarkup
          type="article"
          data={{
            title: page.title,
            description: page.metaDescription,
            url: `https://minecraftguide.fr/${category.slug}/${page.slug}`,
            datePublished: "2025-01-01",
            dateModified: new Date().toISOString().split("T")[0],
          }}
        />
        <SchemaMarkup type="breadcrumb" data={{ items: breadcrumbs }} />
        <SchemaMarkup type="faq" data={{ items: page.content.faq }} />

        <article className="max-w-4xl mx-auto px-4 py-8">
          <Breadcrumbs items={breadcrumbs} />

          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-green-400 mb-4">
              {page.h1}
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              {page.content.intro}
            </p>
          </header>

          <TableOfContents
            headings={page.content.sections.map((s) => ({ text: s.heading, level: 2 }))}
          />

          <div className="prose prose-invert prose-green max-w-none">
            {page.content.sections.map((section, index) => (
              <section key={index} className="mb-8">
                <h2
                  id={section.heading
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/(^-|-$)/g, "")}
                  className="text-2xl font-semibold text-green-300 mb-4"
                >
                  {section.heading}
                </h2>
                <div
                  className="text-gray-300 leading-relaxed whitespace-pre-line"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              </section>
            ))}

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-green-300 mb-4">
                Conseils et Astuces
              </h2>
              <ul className="space-y-2">
                {page.content.tips.map((tip, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-gray-300"
                  >
                    <span className="text-green-400 mt-1 shrink-0">
                      &#9654;
                    </span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-green-300 mb-4">
                Questions Frequentes
              </h2>
              <div className="space-y-4">
                {page.content.faq.map((item, index) => (
                  <details
                    key={index}
                    className="bg-gray-800/50 rounded-lg p-4 border border-gray-700"
                  >
                    <summary className="font-medium text-green-200 cursor-pointer">
                      {item.question}
                    </summary>
                    <p className="mt-2 text-gray-300">{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          </div>

          {relatedPages.length > 0 && <RelatedPages pages={relatedPages} />}
        </article>
      </>
    );
  };
}
