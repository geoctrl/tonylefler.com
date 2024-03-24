import path from "path";
import fs from "fs/promises";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let typeOutput = `// auto-generated icon type definitions from /icons-build-type-definitions.js
declare type Icons = `;
let arrayOutput = `export const iconMap = [`;
const iconNames = [];

(async () => {
  const icons = await fs.readdir(path.resolve(__dirname, "icons"));
  icons.forEach((icon) => {
    iconNames.push(`"${icon.replace(".svg", "")}"`);
  });

  typeOutput += `${iconNames.join(" | ")};\n`;
  arrayOutput += `${iconNames.join(",")}];`;
  await fs.writeFile(
    path.resolve(__dirname, "src/types/icon.d.ts"),
    typeOutput,
  );
  await fs.writeFile(
    path.resolve(__dirname, "src/utils/icon-list.ts"),
    arrayOutput,
  );
})();
