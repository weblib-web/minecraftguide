import { enchantmentsPages } from "@/data/enchantments";
import { categories } from "@/data/types";
import {
  createGenerateStaticParams,
  createGenerateMetadata,
  createCategoryPage,
} from "@/lib/createCategoryPage";

const cat = categories.enchantments;
export const generateStaticParams = createGenerateStaticParams(enchantmentsPages);
export const generateMetadata = createGenerateMetadata(enchantmentsPages, cat);
export default createCategoryPage(enchantmentsPages, cat);
