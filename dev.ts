import { spawn } from "node:child_process";

spawn(
  "bun",
  [
    "build",
    "src/lib.ts",
    "--outfile",
    "pb_hooks/lib.cjs",
    "--format=cjs",
    "--watch",
  ],
  { stdio: "inherit" }
);
spawn("./pocketbase", ["serve"], { stdio: "inherit" });
