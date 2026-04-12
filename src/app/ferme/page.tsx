import { farmsPages } from "@/data/farms";
import { categories } from "@/data/types";
import { createCategoryIndex, createCategoryMetadata } from "@/lib/createCategoryIndex";
const cat = categories.farms;
export const metadata = createCategoryMetadata(cat);
export default createCategoryIndex(farmsPages, cat);
