import { Application } from "@oak/oak";
import { oakCors } from "@tajpouria/cors";
import { router } from "./api/main.ts";

// app backend
const app = new Application();

app.use(oakCors());
app.use(router.routes());
app.use(router.allowedMethods());

// serve React build từ dist/
app.use(async (ctx, next) => {
  try {
    await ctx.send({
      root: `${Deno.cwd()}/dist`,
      index: "index.html",
    });
  } catch {
    await next();
  }
});

console.log("Server running on Deno Deploy...");
await app.listen({ port: 8000 });
