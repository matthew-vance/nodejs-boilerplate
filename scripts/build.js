import * as esbuild from "esbuild";

await esbuild.build({
  bundle: true,
  drop: ["console", "debugger"],
  entryPoints: ["src/main.ts"],
  format: "esm",
  outfile: "dist/index.js",
  packages: "external",
  platform: "node",
  sourcemap: true,
  target: ["es2022"],
  treeShaking: true,
});
