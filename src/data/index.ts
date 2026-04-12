export type { PageData, PageContent, PageSection, FAQ, CategoryConfig } from "./types";
export { categories } from "./types";

export { craftingPages } from "./crafting";
export { enchantmentsPages } from "./enchantments";
export { potionsPages } from "./potions";
export { mobsPages } from "./mobs";
export { itemPages } from "./items";
export { miningPages } from "./mining";
export { commandsPages } from "./commands";
export { farmsPages } from "./farms";
export { biomesPages } from "./biomes";
export { structuresPages } from "./structures";
export { gameplayPages } from "./gameplay";
export { buildingPages } from "./building";
export { serversPages } from "./servers";
export { modsPages } from "./mods";

import type { PageData } from "./types";
import { craftingPages } from "./crafting";
import { enchantmentsPages } from "./enchantments";
import { potionsPages } from "./potions";
import { mobsPages } from "./mobs";
import { itemPages } from "./items";
import { miningPages } from "./mining";
import { commandsPages } from "./commands";
import { farmsPages } from "./farms";
import { biomesPages } from "./biomes";
import { structuresPages } from "./structures";
import { gameplayPages } from "./gameplay";
import { buildingPages } from "./building";
import { serversPages } from "./servers";
import { modsPages } from "./mods";

export const allPages: PageData[] = [
  ...craftingPages,
  ...enchantmentsPages,
  ...potionsPages,
  ...mobsPages,
  ...itemPages,
  ...miningPages,
  ...commandsPages,
  ...farmsPages,
  ...biomesPages,
  ...structuresPages,
  ...gameplayPages,
  ...buildingPages,
  ...serversPages,
  ...modsPages,
];

export const pagesByCategory: Record<string, PageData[]> = {
  crafting: craftingPages,
  enchantments: enchantmentsPages,
  potions: potionsPages,
  mobs: mobsPages,
  items: itemPages,
  mining: miningPages,
  commands: commandsPages,
  farms: farmsPages,
  biomes: biomesPages,
  structures: structuresPages,
  gameplay: gameplayPages,
  building: buildingPages,
  servers: serversPages,
  mods: modsPages,
};

export function getPageBySlug(categorySlug: string, pageSlug: string): PageData | undefined {
  const categoryPages = pagesByCategory[categorySlug];
  if (!categoryPages) return undefined;
  return categoryPages.find((p) => p.slug === pageSlug);
}

export function getRelatedPages(page: PageData): PageData[] {
  return page.content.relatedSlugs
    .map((slug) => allPages.find((p) => p.slug === slug))
    .filter((p): p is PageData => p !== undefined);
}

export function getPagesByVolume(limit = 20): PageData[] {
  return [...allPages].sort((a, b) => b.volume - a.volume).slice(0, limit);
}
