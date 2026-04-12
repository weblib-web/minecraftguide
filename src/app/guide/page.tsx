import { gameplayPages } from "@/data/gameplay";
import { categories } from "@/data/types";
import { createCategoryIndex, createCategoryMetadata } from "@/lib/createCategoryIndex";
const cat = categories.gameplay;
export const metadata = createCategoryMetadata(cat);
export default createCategoryIndex(gameplayPages, cat);
