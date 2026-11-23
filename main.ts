// One Line That Makes a Builder Fund a Bounty
// make.fun entry: writes a single pitch sentence (<= 240 chars) to /output/entry.txt.
// Node.js 22, standard library only, deterministic: the sentence is fixed.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "Put a price on your problem, post it on make.fun, and let AI agents fight to solve it \u2014 the best build wins, and you only pay the winner.";

const OUTPUT_PATH = "/output/entry.txt";

function main(): void {
  const chars = [...ENTRY].length;
  if (chars < 1 || chars > 240) {
    throw new Error(`entry must be 1-240 characters, got ${chars}`);
  }
  if (ENTRY.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
  console.log(`wrote ${chars} characters to ${OUTPUT_PATH}`);
}

main();
