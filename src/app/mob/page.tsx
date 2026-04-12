import { mobsPages } from "@/data/mobs";
import { categories } from "@/data/types";
import { createCategoryIndex, createCategoryMetadata } from "@/lib/createCategoryIndex";
const cat = categories.mobs;
export const metadata = createCategoryMetadata(cat);
export default createCategoryIndex(mobsPages, cat);
