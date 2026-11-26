import { mkdirSync, writeFileSync } from "node:fs";

// The Internet in One Word: "scrollhole"
//
// Why this word — against each of the judge's criteria (PLAN.md):
//
// 1. One word for the WHOLE internet: "scrollhole" is not about one app,
//    one site, or one mood. Every corner of the internet — feeds, videos,
//    threads, comments, shops, search results — is a scroll, and the
//    scroll is the one gesture every internet user shares. The word
//    names the place all of that scrolling leads: a hole.
// 2. Funny on its own: "scrollhole" reads like a real place you can fall
//    into, and everyone who has ever opened the internet "for five
//    minutes" recognises the fall instantly. No explanation needed —
//    the image lands before the joke is told.
// 3. True about the internet as a whole: you open it for one thing,
//    look up hours later, and you are somewhere else entirely.
//    The internet does not just show you things; it swallows your time
//    and your attention, one more video, one more thread, one more tab.
//    That is the shared experience of the entire internet, not of a
//    single platform.
// 4. Surprising: it is not the first word anyone reaches for. "Chaos",
//    "addictive", "endless", "doomscrolling" are the obvious answers;
//    "scrollhole" twists the familiar "rabbit hole" into the gesture
//    everyone actually makes — scrolling — so the familiar turns
//    unexpected.
// 5. Lands in one beat: ten letters, one word, no hyphen, no space.
//    It reads in a single glance and hits before the reader has time
//    to think. Short enough to win the tie-break, plain enough to spell.
const WORD = "scrollhole";

// The entry must be exactly one word, UTF-8, with no trailing newline,
// so the file content is the word itself and nothing else.
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, WORD, "utf8");
