import { visit } from "unist-util-visit";

// Match the old react-markdown anchor override: give every article link the
// animated underline, and open external links in a new tab.
export function rehypeLinks() {
  return (tree) => {
    visit(tree, "element", (node) => {
      if (node.tagName !== "a") return;
      const href = node.properties?.href;
      const classes = node.properties?.className;
      node.properties.className = Array.isArray(classes)
        ? [...classes, "link-underline"]
        : ["link-underline"];
      if (typeof href === "string" && /^https?:\/\//.test(href)) {
        node.properties.target = "_blank";
        node.properties.rel = "noopener noreferrer";
      }
    });
  };
}
