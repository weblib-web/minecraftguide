import { enchantmentsPages } from "@/data/enchantments";
import { categories } from "@/data/types";
import { createCategoryIndex, createCategoryMetadata } from "@/lib/createCategoryIndex";
const cat = categories.enchantments;
export const metadata = createCategoryMetadata(cat);
export default createCategoryIndex(enchantmentsPages, cat);
