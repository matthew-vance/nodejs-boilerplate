#!/usr/bin/env node
import process from "node:process";

import { build, context } from "esbuild";

const watchMode = process.argv.includes("--watch");

const buildOptions = {
  bundle: true,
  entryPoints: ["src/main.ts"],
  format: "esm",
  logLevel: "info",
  outdir: "dist",
  packages: "external",
  platform: "node",
  target: ["es2022"],
};

if (watchMode) {
  const context_ = await context(buildOptions);
  await context_.watch();
} else {
  await build(buildOptions);
}
