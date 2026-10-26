// Fails when a place that names this release disagrees with package.json: the newest CHANGELOG entry, the /*!
// banner on line 1 of the theme, preview/input.css and preview/preview.css, the --<id>-build property, and any
// "<Name> X.Y.Z" the gallery shows. Run it before tagging: pnpm check.
import { readFileSync } from "node:fs";

const { name: id, version } = JSON.parse(readFileSync("package.json", "utf8"));
const title = /^name:\s*(.+)$/m.exec(readFileSync("DESIGN.md", "utf8"))?.[1].trim();
const problems = [];
const expect = (ok, what) => ok || problems.push(what);

const newest = /^## (\d+\.\d+\.\d+)/m.exec(readFileSync("CHANGELOG.md", "utf8"))?.[1];
expect(newest === version, `CHANGELOG.md's newest entry is ${newest}, package.json says ${version}`);
for (const file of [`${id}.css`, "preview/input.css", "preview/preview.css"]) {
  const first = readFileSync(file, "utf8").split("\n", 1)[0];
  expect(first.startsWith("/*!") && first.includes(`${title} ${version} `), `${file}: line 1 does not name ${title} ${version}`);
}
const theme = readFileSync(`${id}.css`, "utf8");
expect(theme.includes(`--${id}-build: "${id} ${version} · uiux.mrramdn.com";`), `${id}.css: no --${id}-build for ${version}`);
const gallery = readFileSync("preview/index.html", "utf8");
for (const [, named] of gallery.matchAll(new RegExp(`>\\s*${title} (\\d+\\.\\d+\\.\\d+)\\s*<`, "g"))) {
  expect(named === version, `preview/index.html names ${title} ${named}`);
}
if (problems.length) {
  console.error(problems.join("\n"));
  process.exit(1);
}
console.log(`${title} ${version}: every place agrees`);
