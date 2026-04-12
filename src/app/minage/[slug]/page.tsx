import { miningPages } from "@/data/mining";
import { categories } from "@/data/types";
import {
  createGenerateStaticParams,
  createGenerateMetadata,
  createCategoryPage,
} from "@/lib/createCategoryPage";

const cat = categories.mining;
export const generateStaticParams = createGenerateStaticParams(miningPages);
export const generateMetadata = createGenerateMetadata(miningPages, cat);
export default createCategoryPage(miningPages, cat);
