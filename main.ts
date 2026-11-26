import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A city pigeon's one-line elevator pitch to investors (English, 200 characters max).
const LIMIT = 200;
const pitch = "Think Uber, but for dropped fries: 40,000 drivers already in this park, zero salaries, no app needed, sub-three-second pickup, and our only churn is the hawk.";

const size = [...pitch].length;
if (!pitch.trim() || size > LIMIT) throw new Error(`pitch is ${size} characters; limit ${LIMIT}`);
const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(join(out, "entry.txt"), pitch, "utf8");
console.log(`${size}/${LIMIT}  ${pitch}`);
