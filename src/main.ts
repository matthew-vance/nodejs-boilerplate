import { logger } from "@/utils";

import { go } from "./example";

async function main() {
  await go();
}

logger.info("Starting up");
await main();
logger.info("Done");
