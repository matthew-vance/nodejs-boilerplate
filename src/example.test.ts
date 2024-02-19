import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { afterAll, afterEach, beforeAll, describe, it } from "vitest";

import { go } from "./example";

describe("example", () => {
  const server = setupServer();

  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  it("goes", async () => {
    server.use(
      http.get("https://jsonplaceholder.typicode.com/posts", () => {
        return new HttpResponse(JSON.stringify([{ id: 1, title: "Post 1" }]));
      }),
    );
    await go();
  });
});
