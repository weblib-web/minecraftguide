import { buildingPages } from "@/data/building";
import { categories } from "@/data/types";
import {
  createGenerateStaticParams,
  createGenerateMetadata,
  createCategoryPage,
} from "@/lib/createCategoryPage";

const cat = categories.building;
export const generateStaticParams = createGenerateStaticParams(buildingPages);
export const generateMetadata = createGenerateMetadata(buildingPages, cat);
export default createCategoryPage(buildingPages, cat);
