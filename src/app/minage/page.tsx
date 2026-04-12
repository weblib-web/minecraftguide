import { miningPages } from "@/data/mining";
import { categories } from "@/data/types";
import { createCategoryIndex, createCategoryMetadata } from "@/lib/createCategoryIndex";
const cat = categories.mining;
export const metadata = createCategoryMetadata(cat);
export default createCategoryIndex(miningPages, cat);
