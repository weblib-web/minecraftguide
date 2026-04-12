import Link from "next/link";

export interface RelatedPage {
  title: string;
  href: string;
  description?: string;
}

interface RelatedPagesProps {
  pages: RelatedPage[];
  categoryName?: string;
}

export default function RelatedPages({
  pages,
  categoryName,
}: RelatedPagesProps) {
  if (pages.length === 0) return null;

  return (
    <aside className="mt-12 rounded-xl border border-mc-border bg-mc-card p-6">
      <h2 className="text-lg font-semibold text-mc-text">
        {categoryName
          ? `Autres guides ${categoryName}`
          : "Guides similaires"}
      </h2>
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {pages.map((page) => (
          <Link
            key={page.href}
            href={page.href}
            className="group flex flex-col rounded-lg border border-mc-border bg-mc-darker p-4 hover:border-mc-green/40 hover:bg-mc-card-hover transition-all duration-200"
          >
            <span className="text-sm font-medium text-mc-text group-hover:text-mc-accent transition-colors">
              {page.title}
            </span>
            {page.description && (
              <span className="mt-1 text-xs text-mc-text-dim leading-relaxed line-clamp-2">
                {page.description}
              </span>
            )}
          </Link>
        ))}
      </div>
    </aside>
  );
}
