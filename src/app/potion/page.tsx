import { potionsPages } from "@/data/potions";
import { categories } from "@/data/types";
import { createCategoryIndex, createCategoryMetadata } from "@/lib/createCategoryIndex";
const cat = categories.potions;
export const metadata = createCategoryMetadata(cat);
export default createCategoryIndex(potionsPages, cat);
