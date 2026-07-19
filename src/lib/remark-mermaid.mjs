import { visit } from "unist-util-visit";
import { renderMermaidSVG } from "beautiful-mermaid";

const THEME = {
  bg: "#ffffff",
  fg: "#111827",
  transparent: true,
};

// Render fenced ```mermaid blocks to inline SVG at build time, so pages ship no
// client-side mermaid runtime. Replaces the code node with a raw html node that
// Shiki never touches.
export function remarkMermaid() {
  return (tree) => {
    visit(tree, "code", (node) => {
      if (node.lang !== "mermaid") return;
      try {
        const svg = renderMermaidSVG(node.value, THEME);
        node.type = "html";
        node.value = `<div class="mermaid">${svg}</div>`;
      } catch (err) {
        console.error("mermaid render failed", err);
      }
    });
  };
}
