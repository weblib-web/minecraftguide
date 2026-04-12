import { farmsPages } from "@/data/farms";
import { categories } from "@/data/types";
import {
  createGenerateStaticParams,
  createGenerateMetadata,
  createCategoryPage,
} from "@/lib/createCategoryPage";

const cat = categories.farms;
export const generateStaticParams = createGenerateStaticParams(farmsPages);
export const generateMetadata = createGenerateMetadata(farmsPages, cat);
export default createCategoryPage(farmsPages, cat);
