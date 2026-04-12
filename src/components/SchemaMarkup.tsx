interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  image?: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface BreadcrumbSchemaItem {
  name: string;
  url: string;
}

/**
 * Article schema markup for guide pages.
 */
export function ArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  image,
}: ArticleSchemaProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    ...(image && { image }),
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified }),
    author: {
      "@type": "Organization",
      name: "MinecraftGuide.fr",
      url: "https://minecraftguide.fr",
    },
    publisher: {
      "@type": "Organization",
      name: "MinecraftGuide.fr",
      url: "https://minecraftguide.fr",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    inLanguage: "fr",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

/**
 * BreadcrumbList schema markup.
 */
export function BreadcrumbSchema({
  items,
}: {
  items: BreadcrumbSchemaItem[];
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

/**
 * FAQPage schema markup.
 */
export function FaqSchema({ faqs }: { faqs: FaqItem[] }) {
  if (faqs.length === 0) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
interface SchemaMarkupProps {
  type: "article" | "breadcrumb" | "faq" | "website";
  data?: any;
}

export default function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  switch (type) {
    case "article":
      return (
        <ArticleSchema
          title={data?.title}
          description={data?.description}
          url={data?.url}
          datePublished={data?.datePublished}
          dateModified={data?.dateModified}
          image={data?.image}
        />
      );
    case "breadcrumb":
      return <BreadcrumbSchema items={data?.items || []} />;
    case "faq":
      return <FaqSchema faqs={data?.items || []} />;
    case "website":
      return <WebSiteSchema />;
    default:
      return null;
  }
}

/**
 * WebSite schema for the homepage.
 */
export function WebSiteSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "MinecraftGuide.fr",
    url: "https://minecraftguide.fr",
    description:
      "Le guide Minecraft le plus complet en francais.",
    inLanguage: "fr",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://minecraftguide.fr/recherche?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
