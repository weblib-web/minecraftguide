import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogPosts } from "@/data/blog";
import Breadcrumbs from "@/components/Breadcrumbs";
import SchemaMarkup from "@/components/SchemaMarkup";

export const dynamic = "force-static";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.metaDescription,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: "article",
      locale: "fr_FR",
      siteName: "MinecraftGuide.fr",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
    },
    alternates: {
      canonical: `https://minecraftguide.fr/blog/${post.slug}`,
    },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const breadcrumbs = [
    { name: "Blog", href: "/blog" },
    { name: post.h1, href: `/blog/${post.slug}` },
  ];

  return (
    <>
      <SchemaMarkup
        type="article"
        data={{
          title: post.title,
          description: post.metaDescription,
          url: `https://minecraftguide.fr/blog/${post.slug}`,
          datePublished: post.datePublished,
          dateModified: post.dateModified,
        }}
      />
      <SchemaMarkup type="breadcrumb" data={{ items: breadcrumbs }} />

      <article className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbs} />

        <div
          className="blog-article prose prose-invert prose-green max-w-none"
          dangerouslySetInnerHTML={{ __html: post.htmlContent }}
        />
      </article>
    </>
  );
}
