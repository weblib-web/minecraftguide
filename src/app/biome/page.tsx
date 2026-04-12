import { biomesPages } from "@/data/biomes";
import { categories } from "@/data/types";
import { createCategoryIndex, createCategoryMetadata } from "@/lib/createCategoryIndex";
const cat = categories.biomes;
export const metadata = createCategoryMetadata(cat);
export default createCategoryIndex(biomesPages, cat);
