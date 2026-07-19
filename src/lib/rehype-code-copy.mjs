import { visit, SKIP } from "unist-util-visit";

// Wrap every code block in a container with a tab header (filename or language)
// and a copy button, at build time. The header sits above the <pre>, and the
// button lives beside the code (not inside its scroll area) so it stays pinned.
// The click handler is wired up by a small script on the article page.
export function rehypeCodeCopy() {
  return (tree) => {
    visit(tree, "element", (node, index, parent) => {
      if (node.tagName !== "pre" || index === null || !parent) return;
      const parentClasses = parent.properties?.className;
      if (
        Array.isArray(parentClasses) &&
        (parentClasses.includes("code-block") || parentClasses.includes("code-panel"))
      ) {
        return;
      }

      const label = node.properties?.dataTitle || node.properties?.dataLanguage || "code";

      const header = {
        type: "element",
        tagName: "div",
        properties: { className: ["code-header"] },
        children: [
          {
            type: "element",
            tagName: "span",
            properties: { className: ["code-title"] },
            children: [{ type: "text", value: String(label) }],
          },
          {
            type: "element",
            tagName: "button",
            properties: {
              type: "button",
              className: ["copy-btn"],
              "aria-label": "Copy code",
              "data-copy-code": true,
            },
            children: [{ type: "text", value: "Copy" }],
          },
        ],
      };

      const wrapper = {
        type: "element",
        tagName: "div",
        properties: { className: ["code-block"] },
        children: [header, node],
      };

      parent.children[index] = wrapper;
      return [SKIP, index + 1];
    });
  };
}
