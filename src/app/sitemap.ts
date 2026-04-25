export const dynamic = "force-static";

import { MetadataRoute } from "next";
import { categories } from "@/data/types";
import { craftingPages } from "@/data/crafting";
import { enchantmentsPages } from "@/data/enchantments";
import { potionsPages } from "@/data/potions";
import { mobsPages } from "@/data/mobs";
import { itemPages } from "@/data/items";
import { miningPages } from "@/data/mining";
import { commandsPages } from "@/data/commands";
import { farmsPages } from "@/data/farms";
import { biomesPages } from "@/data/biomes";
import { structuresPages } from "@/data/structures";
import { gameplayPages } from "@/data/gameplay";
import { buildingPages } from "@/data/building";
import { serversPages } from "@/data/servers";
import { modsPages } from "@/data/mods";
import { blogPosts } from "@/data/blog";

const BASE_URL = "https://minecraftguide.fr";

const categoryPageMap: Record<string, { slug: string; pages: { slug: string }[] }> = {
  crafting: { slug: categories.crafting.slug, pages: craftingPages },
  enchantments: { slug: categories.enchantments.slug, pages: enchantmentsPages },
  potions: { slug: categories.potions.slug, pages: potionsPages },
  mobs: { slug: categories.mobs.slug, pages: mobsPages },
  items: { slug: categories.items.slug, pages: itemPages },
  mining: { slug: categories.mining.slug, pages: miningPages },
  commands: { slug: categories.commands.slug, pages: commandsPages },
  farms: { slug: categories.farms.slug, pages: farmsPages },
  biomes: { slug: categories.biomes.slug, pages: biomesPages },
  structures: { slug: categories.structures.slug, pages: structuresPages },
  gameplay: { slug: categories.gameplay.slug, pages: gameplayPages },
  building: { slug: categories.building.slug, pages: buildingPages },
  servers: { slug: categories.servers.slug, pages: serversPages },
  mods: { slug: categories.mods.slug, pages: modsPages },
};

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Homepage
  entries.push({
    url: BASE_URL,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1.0,
  });

  // Category index pages
  for (const key of Object.keys(categoryPageMap)) {
    const { slug } = categoryPageMap[key];
    entries.push({
      url: `${BASE_URL}/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    });
  }

  // Individual pages
  for (const key of Object.keys(categoryPageMap)) {
    const { slug: catSlug, pages } = categoryPageMap[key];
    for (const page of pages) {
      entries.push({
        url: `${BASE_URL}/${catSlug}/${page.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  }

  // Blog index
  entries.push({
    url: `${BASE_URL}/blog`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  });

  // Blog posts
  for (const post of blogPosts) {
    entries.push({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.dateModified),
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  return entries;
}
