import { commandsPages } from "@/data/commands";
import { categories } from "@/data/types";
import { createCategoryIndex, createCategoryMetadata } from "@/lib/createCategoryIndex";
const cat = categories.commands;
export const metadata = createCategoryMetadata(cat);
export default createCategoryIndex(commandsPages, cat);
