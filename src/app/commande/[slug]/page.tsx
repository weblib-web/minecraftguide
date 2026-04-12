import { commandsPages } from "@/data/commands";
import { categories } from "@/data/types";
import {
  createGenerateStaticParams,
  createGenerateMetadata,
  createCategoryPage,
} from "@/lib/createCategoryPage";

const cat = categories.commands;
export const generateStaticParams = createGenerateStaticParams(commandsPages);
export const generateMetadata = createGenerateMetadata(commandsPages, cat);
export default createCategoryPage(commandsPages, cat);
