import path from "path";
import fs from "fs/promises";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let output = `// auto-generated icon type definitions from /icons-build-type-definitions.js
declare type Icons = `;
const iconNames = [];

(async () => {
  const icons = await fs.readdir(path.resolve(__dirname, "icons"));
  icons.forEach((icon) => {
    iconNames.push(`"${icon.replace(".svg", "")}"`);
  });

  output += `${iconNames.join(" | ")};\n`;
  await fs.writeFile(path.resolve(__dirname, "src/types/icon.d.ts"), output);
})();
