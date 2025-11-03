import { render, route } from "rwsdk/router";
import { defineApp } from "rwsdk/worker";

import { Document } from "@/app/Document";
import { setCommonHeaders } from "@/app/headers";
import { Home } from "@/app/pages/Home";
import { env } from "cloudflare:workers";

export type AppContext = {};

export { TestDurableObject } from "@/TestDurableObject";

export default defineApp([
  setCommonHeaders(),
  ({ ctx }) => {
    // setup ctx here
    ctx;
  },
  route("/test", async ({ request }) => {
    const test = env.TEST_DURABLE_OBJECT.get(env.TEST_DURABLE_OBJECT.idFromName("foo"));
    const state = await test.getValue();
    return new Response(JSON.stringify({ state }))
  }),
  render(Document, [route("/", Home)]),
]);
