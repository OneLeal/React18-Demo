import { EditorView } from "@codemirror/view";

export const customStylePlugin = EditorView.theme({
  "&": {
    fontFamily: "Monaco, monospace",
    fontSize: "16px",
  },

  ".cm-line": {
    lineHeight: 1.6,
  },
});
