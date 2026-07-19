import { visit } from "unist-util-visit";

// Fold adjacent code blocks that share a `group="..."` meta into a single
// tabbed container, at build time. Authoring is two normal fences in a row:
//
//   ```ts title="verify-loop.ts" group="verify-loop"
//   ```rust title="verify-loop.rs" group="verify-loop"
//
// The container reuses the .code-block / .code-header markup so the existing
// copy button keeps working; tab switching is wired by a small page script.
// Runs before rehypeCodeCopy so the grouped <pre>s land inside a .code-block
// wrapper and get skipped by that pass.
export function rehypeCodeTabs() {
  return (tree) => {
    visit(tree, (node) => {
      if (!Array.isArray(node.children)) return;
      node.children = foldGroups(node.children);
    });
  };
}

function isGroupedPre(node) {
  return (
    node.type === "element" &&
    node.tagName === "pre" &&
    node.properties?.dataGroup
  );
}

function foldGroups(children) {
  const out = [];
  let i = 0;

  while (i < children.length) {
    const node = children[i];
    if (!isGroupedPre(node)) {
      out.push(node);
      i += 1;
      continue;
    }

    const group = node.properties.dataGroup;
    const panels = [];
    let j = i;

    while (j < children.length) {
      const cur = children[j];
      if (cur.type === "text" && cur.value.trim() === "") {
        j += 1;
        continue;
      }
      if (isGroupedPre(cur) && cur.properties.dataGroup === group) {
        panels.push(cur);
        j += 1;
        continue;
      }
      break;
    }

    out.push(buildTabs(panels));
    i = j;
  }

  return out;
}

const LANG_LABEL = {
  ts: "Typescript",
  typescript: "Typescript",
  tsx: "TSX",
  js: "Javascript",
  javascript: "Javascript",
  rs: "Rust",
  rust: "Rust",
  py: "Python",
  python: "Python",
  go: "Go",
};

function labelFor(pre, idx) {
  const lang = pre.properties.dataLang;
  if (lang && LANG_LABEL[lang]) return LANG_LABEL[lang];
  if (lang) return lang.toUpperCase();
  return pre.properties.dataTitle || `Tab ${idx + 1}`;
}

function buildTabs(panels) {
  const tabs = panels.map((pre, idx) => {
    const label = labelFor(pre, idx);
    delete pre.properties.dataGroup;
    return {
      type: "element",
      tagName: "button",
      properties: {
        type: "button",
        className: ["code-tab", ...(idx === 0 ? ["is-active"] : [])],
        "data-tab": String(idx),
        "aria-selected": idx === 0 ? "true" : "false",
      },
      children: [{ type: "text", value: String(label) }],
    };
  });

  const header = {
    type: "element",
    tagName: "div",
    properties: { className: ["code-header"] },
    children: [
      {
        type: "element",
        tagName: "div",
        properties: { className: ["code-tablist"], role: "tablist" },
        children: tabs,
      },
      {
        type: "element",
        tagName: "span",
        properties: { className: ["code-title", "code-tab-title"] },
        children: [{ type: "text", value: String(panels[0]?.properties.dataTitle ?? "") }],
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

  const panelNodes = panels.map((pre, idx) => ({
    type: "element",
    tagName: "div",
    properties: {
      className: ["code-panel", ...(idx === 0 ? ["is-active"] : [])],
      "data-panel": String(idx),
    },
    children: [pre],
  }));

  return {
    type: "element",
    tagName: "div",
    properties: { className: ["code-block", "code-tabs"] },
    children: [header, ...panelNodes],
  };
}
