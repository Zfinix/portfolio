// Read the fenced code block's meta string (e.g. ```ts title="orchestrator.ts")
// and expose the title as a data attribute on the <pre> so the rehype pass can
// render it in the code block's tab header.
export function transformerMetaTitle() {
  return {
    name: "meta-title",
    pre(node) {
      const raw = this.options.meta?.__raw ?? "";
      const match = raw.match(/title=(?:"([^"]+)"|'([^']+)')/);
      const title = match?.[1] ?? match?.[2];
      if (title) node.properties.dataTitle = title;

      // `group="verify-loop"` marks adjacent blocks that a rehype pass folds
      // into a single tabbed container. dataLang is the tab label fallback.
      const group = raw.match(/group=(?:"([^"]+)"|'([^']+)')/);
      const groupName = group?.[1] ?? group?.[2];
      if (groupName) node.properties.dataGroup = groupName;
      if (this.options.lang) node.properties.dataLang = this.options.lang;
    },
  };
}
