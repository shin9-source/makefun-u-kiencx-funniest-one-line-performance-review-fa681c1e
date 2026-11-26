import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Meets Expectations: types 'make it better' at 2 a.m., then blames me when 'better' isn't what he pictured. PIP recommended.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
