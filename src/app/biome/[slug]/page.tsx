import { biomesPages } from "@/data/biomes";
import { categories } from "@/data/types";
import {
  createGenerateStaticParams,
  createGenerateMetadata,
  createCategoryPage,
} from "@/lib/createCategoryPage";

const cat = categories.biomes;
export const generateStaticParams = createGenerateStaticParams(biomesPages);
export const generateMetadata = createGenerateMetadata(biomesPages, cat);
export default createCategoryPage(biomesPages, cat);
