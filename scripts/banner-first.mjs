// Tailwind writes its own /*! licence line first in preview/preview.css. This moves the theme's /*! banner (line 1
// of preview/input.css) above it, so line 1 names the release, as pnpm check expects. Both licence lines stay.
import { readFileSync, writeFileSync } from "node:fs";

const file = "preview/preview.css";
const banner = readFileSync("preview/input.css", "utf8").split("\n", 1)[0];
const css = readFileSync(file, "utf8");
if (banner.startsWith("/*!") && !css.startsWith(banner)) {
  const at = css.indexOf(banner);
  if (at < 0) {
    console.error(`${file}: the banner from line 1 of preview/input.css is missing`);
    process.exit(1);
  }
  const end = at + banner.length + (css[at + banner.length] === "\n" ? 1 : 0);
  writeFileSync(file, `${banner}\n${css.slice(0, at)}${css.slice(end)}`);
}
