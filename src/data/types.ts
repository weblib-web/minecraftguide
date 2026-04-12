export interface PageSection {
  heading: string;
  content: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface PageContent {
  intro: string;
  sections: PageSection[];
  tips: string[];
  faq: FAQ[];
  relatedSlugs: string[];
}

export interface PageData {
  slug: string;
  keyword: string;
  title: string;
  h1: string;
  metaDescription: string;
  category: string;
  volume: number;
  content: PageContent;
}

export interface CategoryConfig {
  name: string;
  slug: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
}

export const categories: Record<string, CategoryConfig> = {
  crafting: {
    name: "Crafting",
    slug: "comment-faire",
    description: "Tous les guides de craft et fabrication Minecraft",
    metaTitle: "Guides de Craft Minecraft : Toutes les Recettes",
    metaDescription: "Retrouvez toutes les recettes de craft Minecraft. Guides detailles avec les ingredients et etapes de fabrication pour chaque objet du jeu.",
  },
  enchantments: {
    name: "Enchantements",
    slug: "enchantement",
    description: "Tous les enchantements Minecraft expliques",
    metaTitle: "Enchantements Minecraft : Guide Complet",
    metaDescription: "Decouvrez tous les enchantements Minecraft, leurs effets, niveaux et comment les obtenir. Guide complet des enchantements.",
  },
  potions: {
    name: "Potions",
    slug: "potion",
    description: "Toutes les recettes de potions Minecraft",
    metaTitle: "Potions Minecraft : Toutes les Recettes",
    metaDescription: "Toutes les recettes de potions Minecraft avec les ingredients necessaires et les effets. Guide complet de l'alchimie.",
  },
  mobs: {
    name: "Mobs",
    slug: "mob",
    description: "Guides de tous les mobs et creatures Minecraft",
    metaTitle: "Mobs Minecraft : Guide de Toutes les Creatures",
    metaDescription: "Decouvrez tous les mobs Minecraft : hostiles, passifs, neutres. Comment les trouver, les apprivoiser et les combattre.",
  },
  items: {
    name: "Items",
    slug: "item",
    description: "Guides des items et blocs Minecraft",
    metaTitle: "Items et Blocs Minecraft : Guide Complet",
    metaDescription: "Tout savoir sur les items et blocs Minecraft. Ou les trouver, comment les utiliser et leurs proprietes.",
  },
  mining: {
    name: "Minage",
    slug: "minage",
    description: "Guides de minage et couches de minerais",
    metaTitle: "Minage Minecraft : Couches et Guide des Minerais",
    metaDescription: "Trouvez les meilleurs niveaux pour miner chaque minerai dans Minecraft. Guide des couches optimales pour diamant, fer, or et plus.",
  },
  commands: {
    name: "Commandes",
    slug: "commande",
    description: "Toutes les commandes Minecraft",
    metaTitle: "Commandes Minecraft : Liste Complete et Guide",
    metaDescription: "Liste complete de toutes les commandes Minecraft avec syntaxe et exemples. Commandes Java et Bedrock.",
  },
  farms: {
    name: "Fermes",
    slug: "ferme",
    description: "Guides de fermes automatiques Minecraft",
    metaTitle: "Fermes Automatiques Minecraft : Guides de Construction",
    metaDescription: "Construisez les meilleures fermes automatiques Minecraft. Guides detailles pour fermes a fer, XP, canne a sucre et plus.",
  },
  biomes: {
    name: "Biomes",
    slug: "biome",
    description: "Guides des biomes Minecraft",
    metaTitle: "Biomes Minecraft : Guide Complet",
    metaDescription: "Decouvrez tous les biomes Minecraft, leurs ressources, mobs et particularites. Guide complet de chaque biome.",
  },
  structures: {
    name: "Structures",
    slug: "structure",
    description: "Guides des structures Minecraft",
    metaTitle: "Structures Minecraft : Guide Complet",
    metaDescription: "Trouvez et explorez toutes les structures Minecraft. Guides des donjons, temples, villages et plus.",
  },
  gameplay: {
    name: "Gameplay",
    slug: "guide",
    description: "Guides de gameplay Minecraft",
    metaTitle: "Guides Minecraft : Astuces et Gameplay",
    metaDescription: "Les meilleurs guides et astuces Minecraft. Multijoueur, mods, shaders, skins et bien plus.",
  },
  building: {
    name: "Constructions",
    slug: "construction",
    description: "Idees et tutos de construction Minecraft",
    metaTitle: "Constructions Minecraft : Tutos et Idees",
    metaDescription: "Les meilleures idees de construction Minecraft avec tutos detailles. Maisons, chateaux, villes et plus.",
  },
  servers: {
    name: "Serveurs",
    slug: "serveur",
    description: "Les meilleurs serveurs Minecraft",
    metaTitle: "Serveurs Minecraft : Les Meilleurs en 2025",
    metaDescription: "Decouvrez les meilleurs serveurs Minecraft par categorie. PVP, Skyblock, RP, Mini-jeux et plus.",
  },
  mods: {
    name: "Mods",
    slug: "mod",
    description: "Les meilleurs mods et packs Minecraft",
    metaTitle: "Mods Minecraft : Les Meilleurs Mods et Packs",
    metaDescription: "Les meilleurs mods, packs de texture et shaders Minecraft. Guides d'installation et recommandations.",
  },
};
