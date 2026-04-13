import type { PageData } from "./types";
import { craftingPagesPart1 } from "./crafting-part1";
import { craftingPagesPart2 } from "./crafting-part2";
import { craftingPagesPart3 } from "./crafting-part3";
import { craftingPagesPart4 } from "./crafting-part4";

export const craftingPages: PageData[] = [
  ...craftingPagesPart1,
  ...craftingPagesPart2,
  ...craftingPagesPart3,
  ...craftingPagesPart4,
];
