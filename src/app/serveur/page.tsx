import { serversPages } from "@/data/servers";
import { categories } from "@/data/types";
import { createCategoryIndex, createCategoryMetadata } from "@/lib/createCategoryIndex";
const cat = categories.servers;
export const metadata = createCategoryMetadata(cat);
export default createCategoryIndex(serversPages, cat);
