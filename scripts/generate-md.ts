import { opendir, writeFile } from "fs/promises";
import path from "path/posix";

async function* walk(directory: string): AsyncIterableIterator<string> {
  const dirs = await opendir(directory);
  for await (const item of dirs) {
    if (item.isFile()) yield path.join(directory, item.name);
    else if (item.isDirectory()) yield* walk(path.join(directory, item.name));
  }
}

function toKebabCase(name: string) {
  return name.split("-").map(x => x[0].toUpperCase() + x.slice(1)).join("");
}

const items = walk(path.join(import.meta.dirname, "../src/blogs/"));

let imports = "";
let objects = "";

for await (const item of items) {
  if (!item.endsWith("index.mdx")) continue;
  const dir = item.replace("src", "@");
  const splitedDir = dir.split("/");
  const name = splitedDir.at(-2)!;
  const category = splitedDir.at(-3)!;
  const kebabCaseName = toKebabCase(name);

  imports += `// @ts-expect-error 2614\nimport ${kebabCaseName}, { frontmatter as ${kebabCaseName + "Metadata"} } from "${dir}";\n`;
  objects += `  "${name}": { component: ${kebabCaseName}, metadata: ${kebabCaseName + "Metadata"}, category: "${category}" },\n`;

  const data = `
//this file is auto generated by \`bun run generate-md\`

${imports}

import { ContentsCollection } from "@/types";

const contents: ContentsCollection = {
${objects}};

export default contents;`;

  writeFile(path.join(import.meta.dirname, "../src/blogs/index.ts"), data);
}
