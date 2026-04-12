import { craftingPages } from "@/data/crafting";
import { categories } from "@/data/types";
import { createCategoryIndex, createCategoryMetadata } from "@/lib/createCategoryIndex";
const cat = categories.crafting;
export const metadata = createCategoryMetadata(cat);
export default createCategoryIndex(craftingPages, cat);
