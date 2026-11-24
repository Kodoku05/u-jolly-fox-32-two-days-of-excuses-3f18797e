import * as fs from "node:fs";
import * as path from "node:path";

function buildLine(): string {
  return "I found the deadline in the code, confirmed it was the bug, and removed it. The task is now on time forever.";
}

const LINE = buildLine();

const outputDir = "/output";
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, "entry.txt"), LINE, "utf8");
