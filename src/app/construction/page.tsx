import { buildingPages } from "@/data/building";
import { categories } from "@/data/types";
import { createCategoryIndex, createCategoryMetadata } from "@/lib/createCategoryIndex";
const cat = categories.building;
export const metadata = createCategoryMetadata(cat);
export default createCategoryIndex(buildingPages, cat);
