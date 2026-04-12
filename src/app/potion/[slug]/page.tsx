import { potionsPages } from "@/data/potions";
import { categories } from "@/data/types";
import {
  createGenerateStaticParams,
  createGenerateMetadata,
  createCategoryPage,
} from "@/lib/createCategoryPage";

const cat = categories.potions;
export const generateStaticParams = createGenerateStaticParams(potionsPages);
export const generateMetadata = createGenerateMetadata(potionsPages, cat);
export default createCategoryPage(potionsPages, cat);
