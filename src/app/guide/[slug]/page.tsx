import { gameplayPages } from "@/data/gameplay";
import { categories } from "@/data/types";
import {
  createGenerateStaticParams,
  createGenerateMetadata,
  createCategoryPage,
} from "@/lib/createCategoryPage";

const cat = categories.gameplay;
export const generateStaticParams = createGenerateStaticParams(gameplayPages);
export const generateMetadata = createGenerateMetadata(gameplayPages, cat);
export default createCategoryPage(gameplayPages, cat);
