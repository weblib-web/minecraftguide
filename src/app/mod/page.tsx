import { modsPages } from "@/data/mods";
import { categories } from "@/data/types";
import { createCategoryIndex, createCategoryMetadata } from "@/lib/createCategoryIndex";
const cat = categories.mods;
export const metadata = createCategoryMetadata(cat);
export default createCategoryIndex(modsPages, cat);
