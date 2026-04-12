import { slugify } from "@/lib/utils";

export interface TocHeading {
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: TocHeading[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  if (headings.length === 0) return null;

  return (
    <nav
      aria-label="Table des matieres"
      className="rounded-xl border border-mc-border bg-mc-card p-5"
    >
      <h2 className="text-sm font-semibold uppercase tracking-wider text-mc-text-muted mb-3">
        Table des matieres
      </h2>
      <ol className="space-y-1.5">
        {headings.map((heading, index) => {
          const id = slugify(heading.text);
          const indent = heading.level === 3 ? "pl-4" : "";

          return (
            <li key={`${id}-${index}`}>
              <a
                href={`#${id}`}
                className={`block text-sm text-mc-text-muted hover:text-mc-accent transition-colors leading-relaxed ${indent}`}
              >
                {heading.text}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/**
 * Extract headings from markdown-style content.
 * Looks for ## (h2) and ### (h3) patterns.
 */
export function extractHeadings(content: string): TocHeading[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings: TocHeading[] = [];
  let match: RegExpExecArray | null;

  while ((match = headingRegex.exec(content)) !== null) {
    headings.push({
      level: match[1].length,
      text: match[2].trim(),
    });
  }

  return headings;
}
