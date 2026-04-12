import { serversPages } from "@/data/servers";
import { categories } from "@/data/types";
import {
  createGenerateStaticParams,
  createGenerateMetadata,
  createCategoryPage,
} from "@/lib/createCategoryPage";

const cat = categories.servers;
export const generateStaticParams = createGenerateStaticParams(serversPages);
export const generateMetadata = createGenerateMetadata(serversPages, cat);
export default createCategoryPage(serversPages, cat);
