import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// BASE controls the URL prefix the site is served from.
//  - User/organisation site (khaliljabour4.github.io):  BASE=/
//  - Project site (khaliljabour4.github.io/<repo>/):     BASE=/<repo>/
// The GitHub Actions workflow sets this automatically from the repository name.
export default defineConfig({
  base: process.env.BASE || "/",
  plugins: [react()],
});
