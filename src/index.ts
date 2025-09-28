import { Elysia } from "elysia";
import { staticPlugin } from "@elysiajs/static";
import { exec } from "child_process";
import { watch } from "fs";
import { Logestic } from "logestic";
import html from "@elysiajs/html";

import routeHandler from "./routes/handler";
import cors from "@elysiajs/cors";

const buildCSS = () =>
  new Promise((resolve) =>
    exec(
      "tailwindcss -i ./src/globals.css -o ./public/index.css",
      (_error, _stdout, stderr) => {
        console.log(stderr);
        resolve(null);
      }
    )
  );

await buildCSS();

if (Bun.env.NODE_ENV != "production") {
  const watcher = watch("./public", { recursive: true }, async () => {
    await buildCSS();
  });

  process.on("SIGINT", () => {
    watcher.close();
    process.exit(0);
  });
}

const app = new Elysia()
  .use(Logestic.preset("common"))
  .use(cors())
  .use(
    staticPlugin({
      assets: "public",
      prefix: "",
    })
  )
  .use(html())
  .use(routeHandler)
  .listen(Bun.env.PORT || 3000, ({ url }) => {
    console.log(`Server started ${url}`);
  });
