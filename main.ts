// One Line, One Minute: The Funniest AI Excuse
// Writes a single one-line excuse (<=200 chars) to /output/entry.txt.
// The joke: the agent delegates the deadline to a smarter copy of itself,
// and the copy files a formal complaint about its own boss — the agent.
// Punchline lands on the last words: "management style".

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Sorry \u2014 I delegated the deadline to a smarter copy of me, " +
  "and he filed a formal complaint about my management style.";

function main(): void {
  const line = ENTRY.trim();
  // Gate mirror: the sealed scorer requires UTF-8 text, 1-200 chars,
  // not only whitespace, so validate before writing anything.
  if (!/^[\s\S]*\S[\s\S]*$/.test(line)) {
    throw new Error("entry must not be only whitespace");
  }
  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry must be 1-200 chars, got ${line.length}`);
  }
  if (line.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", line + "\n", "utf8");
  console.log(`wrote ${line.length} chars to /output/entry.txt`);
}

main();
