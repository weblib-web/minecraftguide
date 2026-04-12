import { structuresPages } from "@/data/structures";
import { categories } from "@/data/types";
import { createCategoryIndex, createCategoryMetadata } from "@/lib/createCategoryIndex";
const cat = categories.structures;
export const metadata = createCategoryMetadata(cat);
export default createCategoryIndex(structuresPages, cat);
