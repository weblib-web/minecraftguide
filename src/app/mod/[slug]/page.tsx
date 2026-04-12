import { modsPages } from "@/data/mods";
import { categories } from "@/data/types";
import {
  createGenerateStaticParams,
  createGenerateMetadata,
  createCategoryPage,
} from "@/lib/createCategoryPage";

const cat = categories.mods;
export const generateStaticParams = createGenerateStaticParams(modsPages);
export const generateMetadata = createGenerateMetadata(modsPages, cat);
export default createCategoryPage(modsPages, cat);
