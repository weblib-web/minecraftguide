import { itemPages } from "@/data/items";
import { categories } from "@/data/types";
import {
  createGenerateStaticParams,
  createGenerateMetadata,
  createCategoryPage,
} from "@/lib/createCategoryPage";

const cat = categories.items;
export const generateStaticParams = createGenerateStaticParams(itemPages);
export const generateMetadata = createGenerateMetadata(itemPages, cat);
export default createCategoryPage(itemPages, cat);
