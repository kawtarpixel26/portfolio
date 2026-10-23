// GitHub Pages has no server-side routing. For clean URLs such as
// /projects/shopease to work on a direct visit or refresh, Pages serves
// 404.html for unknown paths. We make 404.html an exact copy of index.html so
// the React router boots and renders the right page.
import { copyFileSync, writeFileSync } from "node:fs";

copyFileSync("dist/index.html", "dist/404.html");
writeFileSync("dist/.nojekyll", "");
console.log("postbuild: wrote dist/404.html and dist/.nojekyll");
