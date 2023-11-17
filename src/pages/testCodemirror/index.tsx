import { EditorView, ViewUpdate } from "@codemirror/view";
import { EditorState } from "@codemirror/state";
import { xcodeDark } from "@uiw/codemirror-theme-xcode";
import { basicSetup } from "codemirror";
import React, { useEffect, useRef } from "react";

// 草案编写页面
const TestCodemirror = () => {
  const editorContainor = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateWatcher = EditorView.updateListener.of((update: ViewUpdate) => {
      console.log('codemirror has update!');
    });
    const config = { doc: "Hello World!", extensions: [xcodeDark, basicSetup, updateWatcher] };
    const editor = new EditorView({
      parent: editorContainor.current as HTMLDivElement,
      state: EditorState.create(config),
    });

    editor.focus();
    return () => {
      editor.destroy();
    };
  }, []);

  return <div ref={editorContainor} className="editor-containor" />;
};

export default TestCodemirror;
