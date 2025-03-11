import * as charlie from "./providers/charlie.js";
import * as josh from "./providers/josh.js";
import { provider } from "./llm.config.js";

const providerMap = {
  "josh": josh,
  "charlie": charlie
};

export const { logCat1, logCat2 } = providerMap[provider];
