import { mkdirSync, writeFileSync } from "node:fs";

// The Internet in One Word: "scrollhole"
// The whole internet, in one word: a hole you fall into by scrolling.
// You open it for one thing, look up hours later, and you are somewhere
// else entirely. Funny on its own, true of the whole internet, and not
// the first word anyone reaches for.
const WORD = "scrollhole";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
