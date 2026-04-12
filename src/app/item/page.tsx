import { itemPages } from "@/data/items";
import { categories } from "@/data/types";
import { createCategoryIndex, createCategoryMetadata } from "@/lib/createCategoryIndex";
const cat = categories.items;
export const metadata = createCategoryMetadata(cat);
export default createCategoryIndex(itemPages, cat);
