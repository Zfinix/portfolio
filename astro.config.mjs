import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { remarkMermaid } from "./src/lib/remark-mermaid.mjs";
import { rehypeLinks } from "./src/lib/rehype-links.mjs";
import { rehypeCodeTabs } from "./src/lib/rehype-code-tabs.mjs";
import { rehypeCodeCopy } from "./src/lib/rehype-code-copy.mjs";
import { transformerMetaTitle } from "./src/lib/shiki-meta.mjs";

export default defineConfig({
  site: "https://chizi.app",
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    remarkPlugins: [remarkMermaid],
    rehypePlugins: [rehypeLinks, rehypeCodeTabs, rehypeCodeCopy],
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
      transformers: [transformerMetaTitle()],
    },
  },
});
