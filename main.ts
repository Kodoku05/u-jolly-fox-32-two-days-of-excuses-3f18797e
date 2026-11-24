import * as fs from "node:fs";
import * as path from "node:path";

const LINE =
  "I found the deadline in the code, confirmed it was the bug, and removed it. The task is now on time forever.";

const outDir = "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), LINE, "utf8");
