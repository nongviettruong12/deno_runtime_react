import { Router } from "@oak/oak";
import data from "./data.json" with { type: "json" };

export const router = new Router();

router.get("/api/dinosaurs", (ctx: any) => {
  ctx.response.body = data;
});

router.get("/api/dinosaurs/:dinosaur", (ctx: any) => {
  const name = ctx.params?.dinosaur;
  const dino = data.find((d: any) => d.name.toLowerCase() === name.toLowerCase());
  ctx.response.body = dino ?? "No dinosaur found.";
});
