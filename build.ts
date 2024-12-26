import { $ } from "bun";

await $`bun build src/lib.ts --outfile pb_hooks/lib.cjs --format=cjs`;
