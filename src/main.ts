import "@/config/env"; // Must be imported first

import { logger } from "@/lib";

import { go } from "./example";

async function main() {
  await go();
}

logger.info("Starting up");
logger.debug({ env: process.env }, "Environment variables");
await main();
logger.info("Done");
