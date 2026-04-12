/**
 * Generate a URL-friendly slug from a string.
 * Handles French accented characters.
 */
export function slugify(text: string): string {
  return text
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

/**
 * Convert a slug back to a human-readable title.
 */
export function unslugify(slug: string): string {
  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

/**
 * Truncate text to a given length, adding ellipsis if needed.
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + "...";
}

/**
 * Generate a canonical URL from a path.
 */
export function canonicalUrl(path: string): string {
  const base = "https://minecraftguide.fr";
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${cleanPath}`;
}

/**
 * Format a date for display in French locale.
 */
export function formatDateFr(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Strip HTML tags from a string.
 */
export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "");
}

/**
 * Estimate reading time in minutes from text content.
 */
export function estimateReadingTime(text: string): number {
  const wordsPerMinute = 200;
  const wordCount = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}

/**
 * Category definitions used across the site.
 */
export interface Category {
  name: string;
  slug: string;
  description: string;
  icon: string;
}

export const categories: Category[] = [
  {
    name: "Crafting",
    slug: "crafting",
    description: "Toutes les recettes de craft Minecraft",
    icon: "/icons/crafting.svg",
  },
  {
    name: "Enchantements",
    slug: "enchantement",
    description: "Guide complet des enchantements",
    icon: "/icons/enchantement.svg",
  },
  {
    name: "Potions",
    slug: "potion",
    description: "Recettes et effets de toutes les potions",
    icon: "/icons/potion.svg",
  },
  {
    name: "Mobs",
    slug: "mob",
    description: "Tous les mobs, hostiles et passifs",
    icon: "/icons/mob.svg",
  },
  {
    name: "Items",
    slug: "item",
    description: "Liste de tous les objets Minecraft",
    icon: "/icons/item.svg",
  },
  {
    name: "Minage",
    slug: "minage",
    description: "Techniques et astuces de minage",
    icon: "/icons/minage.svg",
  },
  {
    name: "Commandes",
    slug: "commande",
    description: "Toutes les commandes du jeu",
    icon: "/icons/commande.svg",
  },
  {
    name: "Fermes",
    slug: "ferme",
    description: "Fermes automatiques et manuelles",
    icon: "/icons/ferme.svg",
  },
  {
    name: "Constructions",
    slug: "construction",
    description: "Idees et tutoriels de construction",
    icon: "/icons/construction.svg",
  },
  {
    name: "Serveurs",
    slug: "serveur",
    description: "Guides pour les serveurs Minecraft",
    icon: "/icons/serveur.svg",
  },
  {
    name: "Mods",
    slug: "mod",
    description: "Les meilleurs mods Minecraft",
    icon: "/icons/mod.svg",
  },
];
