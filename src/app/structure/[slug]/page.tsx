import { structuresPages } from "@/data/structures";
import { categories } from "@/data/types";
import {
  createGenerateStaticParams,
  createGenerateMetadata,
  createCategoryPage,
} from "@/lib/createCategoryPage";

const cat = categories.structures;
export const generateStaticParams = createGenerateStaticParams(structuresPages);
export const generateMetadata = createGenerateMetadata(structuresPages, cat);
export default createCategoryPage(structuresPages, cat);
