import { got } from "got";

import { logger } from "@/utils";

export async function go() {
  const url = "https://jsonplaceholder.typicode.com/posts";

  logger.debug({ url }, "Fetching example data");
  const response = await got(url).json();
  logger.debug({ response }, "Fetched example data");
}
