import { mobsPages } from "@/data/mobs";
import { categories } from "@/data/types";
import {
  createGenerateStaticParams,
  createGenerateMetadata,
  createCategoryPage,
} from "@/lib/createCategoryPage";

const cat = categories.mobs;
export const generateStaticParams = createGenerateStaticParams(mobsPages);
export const generateMetadata = createGenerateMetadata(mobsPages, cat);
export default createCategoryPage(mobsPages, cat);
